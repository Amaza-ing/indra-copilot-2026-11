const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const script = readFileSync(path.join(__dirname, "..", "script.js"), "utf8");

class MockElement {
  constructor() {
    this.attributes = {};
    this.listeners = {};
    this.style = {};
    this.textContent = "";
    this.classes = new Set();
    this.classList = {
      add: (name) => this.classes.add(name),
      remove: (name) => this.classes.delete(name),
      contains: (name) => this.classes.has(name),
      toggle: (name, force) => {
        const shouldAdd = force === undefined ? !this.classes.has(name) : force;
        if (shouldAdd) this.classes.add(name);
        else this.classes.delete(name);
        return shouldAdd;
      },
    };
  }

  addEventListener(name, callback) {
    this.listeners[name] = callback;
  }

  getAttribute(name) {
    return this.attributes[name] ?? null;
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  querySelector() {
    return this.label;
  }
}

function createPage({ savedTheme = null, formIsValid = true } = {}) {
  const selectors = [
    ".menu-toggle",
    ".site-nav",
    ".theme-toggle",
    ".newsletter-form",
    ".form-message",
    "#year",
    ".clock-widget",
    ".clock-hand-hour",
    ".clock-hand-minute",
    ".clock-hand-second",
    'meta[name="theme-color"]',
  ];
  const elements = Object.fromEntries(selectors.map((selector) => [selector, new MockElement()]));
  elements[".theme-toggle"].label = new MockElement();
  elements[".newsletter-form"].reportValidity = () => formIsValid;
  elements[".newsletter-form"].reset = () => {
    elements[".newsletter-form"].wasReset = true;
  };

  const root = { dataset: {} };
  const document = {
    documentElement: root,
    querySelector: (selector) => elements[selector],
  };
  const storage = new Map(savedTheme === null ? [] : [["casa-marea-theme", savedTheme]]);
  const localStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  };
  let intervalCallback;
  class FixedDate extends Date {
    constructor(...args) {
      super(...(args.length ? args : ["2024-01-02T14:30:45"]));
    }
  }

  vm.runInNewContext(script, {
    Date: FixedDate,
    document,
    localStorage,
    setInterval: (callback) => {
      intervalCallback = callback;
    },
  });

  return { elements, root, storage, intervalCallback };
}

test("inicia en tema claro cuando no hay un tema guardado", () => {
  const { elements, root } = createPage();

  assert.equal(root.dataset.theme, "light");
  assert.equal(elements[".theme-toggle"].getAttribute("aria-pressed"), "false");
  assert.equal(elements['meta[name="theme-color"]'].getAttribute("content"), "#000000");
});

test("restaura el tema oscuro guardado y permite alternarlo", () => {
  const { elements, root, storage } = createPage({ savedTheme: "dark" });

  assert.equal(root.dataset.theme, "dark");
  elements[".theme-toggle"].listeners.click();

  assert.equal(root.dataset.theme, "light");
  assert.equal(storage.get("casa-marea-theme"), "light");
  assert.equal(elements[".theme-toggle"].getAttribute("aria-pressed"), "false");
});

test("abre y cierra el menú y lo cierra al elegir un enlace", () => {
  const { elements } = createPage();
  const menuToggle = elements[".menu-toggle"];
  const siteNav = elements[".site-nav"];

  menuToggle.listeners.click();
  assert.equal(menuToggle.getAttribute("aria-expanded"), "true");
  assert.equal(siteNav.classList.contains("is-open"), true);

  siteNav.listeners.click({ target: { closest: () => ({}) } });
  assert.equal(menuToggle.getAttribute("aria-expanded"), "false");
  assert.equal(siteNav.classList.contains("is-open"), false);
});

test("no muestra confirmación ni vacía el formulario inválido", () => {
  const { elements } = createPage({ formIsValid: false });
  let prevented = false;

  elements[".newsletter-form"].listeners.submit({
    preventDefault: () => {
      prevented = true;
    },
  });

  assert.equal(prevented, true);
  assert.equal(elements[".form-message"].classList.contains("is-success"), false);
  assert.equal(elements[".newsletter-form"].wasReset, undefined);
});

test("confirma y limpia el formulario válido", () => {
  const { elements } = createPage();

  elements[".newsletter-form"].listeners.submit({ preventDefault() {} });

  assert.match(elements[".form-message"].textContent, /¡Gracias!/);
  assert.equal(elements[".form-message"].classList.contains("is-success"), true);
  assert.equal(elements[".newsletter-form"].wasReset, true);
});

test("actualiza el año y las agujas del reloj", () => {
  const { elements, intervalCallback } = createPage();

  assert.equal(elements["#year"].textContent, 2024);
  assert.equal(elements[".clock-hand-hour"].style.transform, "rotate(75.375deg)");
  assert.equal(elements[".clock-hand-minute"].style.transform, "rotate(184.5deg)");
  assert.equal(elements[".clock-hand-second"].style.transform, "rotate(270deg)");
  assert.match(elements[".clock-widget"].getAttribute("aria-label"), /^Reloj analógico, hora local/);
  assert.equal(typeof intervalCallback, "function");
});
