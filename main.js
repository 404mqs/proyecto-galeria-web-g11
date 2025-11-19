// main.js - Inicialización simple del sitio (sin módulos)

document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  // Otros scripts simples pueden ir aquí (mapa, buscador, etc.)
});
