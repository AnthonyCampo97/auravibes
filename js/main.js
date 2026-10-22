// =====================================================================
// AURA VIBES FEST · Lógica del sitio
// =====================================================================

// ===== CONFIGURACIÓN DEL PRÓXIMO EVENTO =====
// Modifique la fecha y hora (zona horaria de Colombia, UTC-05:00).
// Formato: "AAAA-MM-DDTHH:MM:SS-05:00"
const FECHA_EVENTO = new Date("2027-01-30T18:00:00-05:00");

// ===== MENÚ MÓVIL =====
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

function cerrarMenu() {
  nav.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const abierto = nav.classList.toggle("open");
  menuToggle.classList.toggle("open", abierto);
  menuToggle.setAttribute("aria-expanded", String(abierto));
});

// Cierra el menú al seleccionar una opción
nav.querySelectorAll("a").forEach((enlace) => enlace.addEventListener("click", cerrarMenu));

// Cierra el menú con la tecla Escape
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") cerrarMenu();
});

// ===== CUENTA REGRESIVA =====
const elDias = document.getElementById("dias");
const elHoras = document.getElementById("horas");
const elMinutos = document.getElementById("minutos");
const elSegundos = document.getElementById("segundos");
const elFecha = document.getElementById("eventoFecha");

// Fecha en formato largo en español
elFecha.textContent = FECHA_EVENTO.toLocaleDateString("es-CO", {
  weekday: "long", day: "numeric", month: "long", year: "numeric",
  timeZone: "America/Bogota",
});

const dosDigitos = (n) => String(n).padStart(2, "0");

function actualizarCuenta() {
  const diferencia = FECHA_EVENTO - new Date();

  if (diferencia <= 0) {
    document.getElementById("countdown").innerHTML =
      "<p class='section-subtitle'>¡El evento ha comenzado!</p>";
    clearInterval(temporizador);
    return;
  }

  const segundosTotales = Math.floor(diferencia / 1000);
  elDias.textContent = dosDigitos(Math.floor(segundosTotales / 86400));
  elHoras.textContent = dosDigitos(Math.floor((segundosTotales % 86400) / 3600));
  elMinutos.textContent = dosDigitos(Math.floor((segundosTotales % 3600) / 60));
  elSegundos.textContent = dosDigitos(segundosTotales % 60);
}

const temporizador = setInterval(actualizarCuenta, 1000);
actualizarCuenta();

// ===== ANIMACIÓN DE APARICIÓN AL DESPLAZAR =====
const elementos = document.querySelectorAll(
  ".info-card, .artist-card, .gallery-item, .video-frame, .time-box, .section-title"
);
elementos.forEach((el) => el.classList.add("reveal"));

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

elementos.forEach((el) => observador.observe(el));

// ===== AÑO DEL PIE DE PÁGINA =====
document.getElementById("anio").textContent = new Date().getFullYear();
