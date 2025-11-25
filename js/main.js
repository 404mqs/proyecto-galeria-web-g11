// ===============================
// main.js - Inicialización global del sitio
// ===============================

document.addEventListener('DOMContentLoaded', async () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Solo cargo restaurantData si la página lo necesita
  loadRestaurantData();

});
document.addEventListener("DOMContentLoaded", async () => {

    const container = document.getElementById("chatbot-container");
    if (!container) return; // Si no hay contenedor, no cargar chatbot
    
    // Detectar si estamos en una subcarpeta
    const isInSubfolder = window.location.pathname.includes('/locales/');
    const basePath = isInSubfolder ? '../' : './';

    // 1) cargar el HTML del chatbot
    const response = await fetch(`${basePath}chatbot/chatbot.html`);
    const html = await response.text();
    container.innerHTML = html;

    // 2) cargar chatbot.js DESPUÉS de cargar el HTML
    const script = document.createElement("script");
    script.src = `${basePath}js/chatbot.js`;

    script.onload = () => {
        if (typeof initChatbot === "function") {
            initChatbot();   // 👍 ahora chat-content sí existe
        }
    };

    document.body.appendChild(script);
});

// ===============================
// VARIABLES
// ===============================

// ===============================
// VARIABLES - DATOS DE GASTRONOMÍA POPULARES
// ===============================

let restaurantData = {};
// ===============================
// 1) CARGAR DATA DE LOCALES/GASTRONOMÍA
// ===============================

async function loadRestaurantData() {
  try {
    const res = await fetch("./locales/locales.json");
    restaurantData = await res.json();

  } catch (e) {
    console.error("Error cargando locales.json", e);
  }
}

// ===============================
// 2) PASAR DATA A FORMATO PLANO (OPCIONAL)
//    Igual que restaurantDataToLocales que ya usás
// ===============================

function restaurantDataToLocales() {
  const localesConvertidos = [];

  Object.keys(restaurantData).forEach(categoria => {
    restaurantData[categoria].forEach(r => {
      localesConvertidos.push({
        nombre: r.name,
        rubro: r.cuisine,
        url: r.website,
        img: r.image,
        top: r.top,
        left: r.left
      });
    });
  });

  return localesConvertidos;
}

// ===============================
// 3) MOSTRAR RESTAURANTES POR CATEGORÍA
// ===============================

function showRestaurants(category) {
  document.getElementById('categorySection').style.display = 'none';
  document.getElementById('backBtn').style.display = 'block';

  const grid = document.getElementById('restaurantGrid');
  grid.innerHTML = '';
  grid.style.display = 'grid';

  const restaurants = restaurantData[category];

  restaurants.forEach(restaurant => {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.onclick = () => openRestaurantModal(restaurant);

    card.innerHTML = `
      <div class="restaurant-image" style="background-image: url('${restaurant.image}')"></div>
      <div class="restaurant-info">
        <h3 class="restaurant-name">${restaurant.name}</h3>
        <p class="restaurant-cuisine">${restaurant.cuisine}</p>
        <p class="restaurant-brief">${restaurant.description.substring(0, 80)}...</p>
        <div class="restaurant-rating">
          <span class="stars">${'★'.repeat(Math.floor(parseFloat(restaurant.rating)))}${'☆'.repeat(5 - Math.floor(parseFloat(restaurant.rating)))}</span>
          <span>${restaurant.rating}</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ===============================
// 4) VOLVER A LAS CATEGORÍAS
// ===============================

function showCategories() {
  document.getElementById('categorySection').style.display = 'grid';
  document.getElementById('restaurantGrid').style.display = 'none';
  document.getElementById('backBtn').style.display = 'none';
}

// ===============================
// 5) MODAL RESTAURANTE
// ===============================

function openRestaurantModal(restaurant) {
  document.getElementById('modalTitle').textContent = restaurant.name;
  document.getElementById('modalSubtitle').textContent = restaurant.cuisine;

  const details = document.getElementById('modalDetails');
  details.innerHTML = `
    <div class="restaurant-modal-image" style="background-image: url('${restaurant.image}')"></div>
    <div class="detail-item">
      <span class="detail-label">Descripción:</span>
      <span>${restaurant.description}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Horarios:</span>
      <span>${restaurant.horarios}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Precio:</span>
      <span>${restaurant.precio}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Calificación:</span>
      <span>${'★'.repeat(Math.floor(parseFloat(restaurant.rating)))}${'☆'.repeat(5 - Math.floor(parseFloat(restaurant.rating)))} ${restaurant.rating}</span>
    </div>
  `;

  document.getElementById('visitBtn').href = restaurant.website;
  document.getElementById('restaurantModal').style.display = 'block';
}

function closeRestaurantModal() {
  document.getElementById('restaurantModal').style.display = 'none';
}

// ===============================
// 6) EVENTOS DE MODAL
// ===============================

if (document.getElementById('restaurantModal')) {

  window.addEventListener('click', function (event) {
    const modal = document.getElementById('restaurantModal');
    if (event.target === modal) {
      closeRestaurantModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeRestaurantModal();
    }
  });
}
