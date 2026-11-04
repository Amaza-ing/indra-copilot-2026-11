const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const themeToggle = document.querySelector(".theme-toggle");
const newsletterForm = document.querySelector(".newsletter-form");
const formMessage = document.querySelector(".form-message");
const year = document.querySelector("#year");
const clock = document.querySelector(".clock-widget");
const hourHand = document.querySelector(".clock-hand-hour");
const minuteHand = document.querySelector(".clock-hand-minute");
const secondHand = document.querySelector(".clock-hand-second");
const themeColor = document.querySelector('meta[name="theme-color"]');

const setTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", isDark ? "Activar tema claro" : "Activar tema oscuro");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.querySelector(".theme-toggle-label").textContent = isDark ? "Claro" : "Oscuro";
  themeColor.setAttribute("content", isDark ? "#172522" : "#f7f5ef");
};

const savedTheme = localStorage.getItem("casa-marea-theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

year.textContent = new Date().getFullYear();

const updateClock = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  hourHand.style.transform = `rotate(${hours * 30}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  clock.setAttribute(
    "aria-label",
    `Reloj analógico, hora local ${now.toLocaleTimeString("es-ES")}`,
  );
};

updateClock();
setInterval(updateClock, 1000);

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    siteNav.classList.remove("is-open");
  }
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("casa-marea-theme", nextTheme);
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!newsletterForm.reportValidity()) {
    return;
  }

  formMessage.textContent = "¡Gracias! Esta demo aún no está conectada a una lista de correo.";
  formMessage.classList.add("is-success");
  newsletterForm.reset();
});
