// main.js - Inicialización simple del sitio (sin módulos)

document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  // Otros scripts simples pueden ir aquí (mapa, buscador, etc.)
});

// ======== GASTRONOMIA.HTML SCRIPT ========
const restaurantData = {
  cafeterias: [
    {
      name: "Café Luna",
      cuisine: "Cafetería & Pastelería",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=200&fit=crop",
      description: "Ambiente acogedor con los mejores cafés artesanales y postres caseros.",
      hours: "7:00 - 22:00",
      phone: "+54 11 4567-8901",
      speciality: "Café de especialidad y croissants franceses",
      price: "$$ - $$$",
      website: "https://cafeluna.com"
    },
    {
      name: "Sweet Dreams",
      cuisine: "Pastelería & Repostería",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=200&fit=crop",
      description: "Deliciosas tortas artesanales y cupcakes únicos para cada ocasión.",
      hours: "8:00 - 21:00",
      phone: "+54 11 4567-8902",
      speciality: "Tortas personalizadas y macarons",
      price: "$$ - $$$",
      website: "https://sweetdreams.com"
    },
    {
      name: "Brew & Books",
      cuisine: "Café Librería",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=400&h=200&fit=crop",
      description: "Combinación perfecta entre literatura y café en un ambiente relajado.",
      hours: "9:00 - 23:00",
      phone: "+54 11 4567-8903",
      speciality: "Café de lectura y brunch literario",
      price: "$$ - $$$",
      website: "https://brewandbooks.com"
    },
    {
      name: "Aroma Café",
      cuisine: "Café & Desayunos",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=200&fit=crop",
      description: "Desayunos completos y café de origen en un espacio luminoso y acogedor.",
      hours: "7:30 - 20:00",
      phone: "+54 11 4567-8910",
      speciality: "Tostadas gourmet y café cold brew",
      price: "$$ - $$$",
      website: "https://aromacafe.com"
    }
  ],
  restaurantes: [
    {
      name: "Bella Italia",
      cuisine: "Italiana Auténtica",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=200&fit=crop",
      description: "Auténtica cocina italiana con recetas familiares transmitidas por generaciones.",
      hours: "12:00 - 23:30",
      phone: "+54 11 4567-8904",
      speciality: "Pasta casera y pizza al horno de leña",
      price: "$$$ - $$$$",
      website: "https://bellaitalia.com"
    },
    {
      name: "Asado Premium",
      cuisine: "Parrilla Argentina",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=200&fit=crop",
      description: "Los mejores cortes de carne argentina en un ambiente tradicional y moderno.",
      hours: "12:00 - 24:00",
      phone: "+54 11 4567-8905",
      speciality: "Bife de chorizo y empanadas caseras",
      price: "$$$ - $$$$",
      website: "https://asadopremium.com"
    },
    {
      name: "Sakura Sushi",
      cuisine: "Japonesa Contemporánea",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=200&fit=crop",
      description: "Experiencia culinaria japonesa con ingredientes frescos y técnicas tradicionales.",
      hours: "18:00 - 23:00",
      phone: "+54 11 4567-8906",
      speciality: "Sushi premium y ramen artesanal",
      price: "$$$ - $$$$",
      website: "https://sakurasushi.com"
    },
    {
      name: "Mar Azul",
      cuisine: "Mariscos & Pescados",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=200&fit=crop",
      description: "Pescados y mariscos frescos del día preparados con técnicas mediterráneas.",
      hours: "12:30 - 23:00",
      phone: "+54 11 4567-8911",
      speciality: "Paella valenciana y pulpo a la gallega",
      price: "$$$ - $$$$",
      website: "https://marazul.com"
    }
  ],
  rapida: [
    {
      name: "Burger Station",
      cuisine: "Hamburguesas Gourmet",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=200&fit=crop",
      description: "Hamburguesas artesanales con ingredientes premium y papas caseras.",
      hours: "11:00 - 22:00",
      phone: "+54 11 4567-8907",
      speciality: "Burger clásica y vegetariana",
      price: "$ - $$",
      website: "https://burgerstation.com"
    },
    {
      name: "Taco Loco",
      cuisine: "Mexicana Rápida",
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=200&fit=crop",
      description: "Auténticos sabores mexicanos en formato rápido y delicioso.",
      hours: "11:30 - 22:30",
      phone: "+54 11 4567-8908",
      speciality: "Tacos al pastor y quesadillas",
      price: "$ - $$",
      website: "https://tacoloco.com"
    },
    {
      name: "Wok Express",
      cuisine: "Asiática Fusión",
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=200&fit=crop",
      description: "Comida asiática fresca preparada al momento con vegetales crujientes.",
      hours: "11:00 - 22:00",
      phone: "+54 11 4567-8909",
      speciality: "Wok de verduras y pollo teriyaki",
      price: "$ - $$",
      website: "https://wokexpress.com"
    },
    {
      name: "Pizza Flash",
      cuisine: "Pizzería Express",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=200&fit=crop",
      description: "Pizzas al estilo napolitano listas en minutos con masa madre artesanal.",
      hours: "11:00 - 23:00",
      phone: "+54 11 4567-8912",
      speciality: "Pizza margarita y cuatro quesos",
      price: "$ - $$",
      website: "https://pizzaflash.com"
    }
  ]
};

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
        <div class="restaurant-rating">
          <span class="stars">${'★'.repeat(Math.floor(restaurant.rating))}${'☆'.repeat(5-Math.floor(restaurant.rating))}</span>
          <span>${restaurant.rating}</span>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function showCategories() {
  document.getElementById('categorySection').style.display = 'grid';
  document.getElementById('restaurantGrid').style.display = 'none';
  document.getElementById('backBtn').style.display = 'none';
}

function openRestaurantModal(restaurant) {
  document.getElementById('modalTitle').textContent = restaurant.name;
  document.getElementById('modalSubtitle').textContent = restaurant.cuisine;
  
  const details = document.getElementById('modalDetails');
  details.innerHTML = `
    <div class="detail-item">
      <span class="detail-label">Descripción:</span>
      <span>${restaurant.description}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Especialidad:</span>
      <span>${restaurant.speciality}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Horarios:</span>
      <span>${restaurant.hours}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Teléfono:</span>
      <span>${restaurant.phone}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Precio:</span>
      <span>${restaurant.price}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">Calificación:</span>
      <span>${'★'.repeat(Math.floor(restaurant.rating))} ${restaurant.rating}/5</span>
    </div>
  `;
  
  document.getElementById('visitBtn').href = restaurant.website;
  document.getElementById('restaurantModal').style.display = 'block';
}

function closeRestaurantModal() {
  document.getElementById('restaurantModal').style.display = 'none';
}

// Event listeners para gastronomía (solo se ejecutan si estamos en esa página)
if (document.getElementById('restaurantModal')) {
  // Cerrar modal al hacer click fuera de él
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('restaurantModal');
    if (event.target === modal) {
      closeRestaurantModal();
    }
  });

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeRestaurantModal();
    }
  });
}
