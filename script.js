const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const newsletterForm = document.querySelector(".newsletter-form");
const formMessage = document.querySelector(".form-message");
const year = document.querySelector("#year");
const clock = document.querySelector(".clock-widget");
const hourHand = document.querySelector(".clock-hand-hour");
const minuteHand = document.querySelector(".clock-hand-minute");
const secondHand = document.querySelector(".clock-hand-second");

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

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!newsletterForm.reportValidity()) {
    return;
  }

  formMessage.textContent = "¡Gracias! Esta demo aún no está conectada a una lista de correo.";
  formMessage.classList.add("is-success");
  newsletterForm.reset();
});
