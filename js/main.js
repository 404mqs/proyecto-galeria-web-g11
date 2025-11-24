// ===============================
// main.js - Inicialización global del sitio
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Solo cargo restaurantData si la página lo necesita
  loadRestaurantData();
});

// ===============================
// VARIABLES
// ===============================

// ===============================
// VARIABLES - DATOS DE GASTRONOMÍA POPULARES
// ===============================

let restaurantData = {
  "cafeterias": [
    {
      "name": "Starbucks",
      "cuisine": "Café Premium",
      "rating": "4.5/5",
      "image": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop",
      "website": "https://starbucks.com.ar",
      "description": "La famosa cadena de café con más de 50 variedades de bebidas, pasteles artesanales y ambiente acogedor.",
      "horarios": "Lun-Dom 8:00 a 22:00",
      "precio": "$$"
    },
    {
      "name": "Café Havanna",
      "cuisine": "Café & Dulces",
      "rating": "4.3/5", 
      "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      "website": "https://havanna.com",
      "description": "Tradicional café argentino con alfajores artesanales, submarinos y la mejor calidad en repostería.",
      "horarios": "Lun-Dom 9:00 a 21:00",
      "precio": "$$"
    },
    {
      "name": "Café Martinez",
      "cuisine": "Café Gourmet",
      "rating": "4.4/5",
      "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      "website": "https://cafemartinez.com",
      "description": "Café premium argentino con granos seleccionados, tostado artesanal y variedad de métodos de preparación.",
      "horarios": "Lun-Dom 7:30 a 22:30",
      "precio": "$$"
    }
  ],
  "restaurantes": [
    {
      "name": "TGI Friday's",
      "cuisine": "Comida Americana",
      "rating": "4.2/5",
      "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      "website": "https://tgifridays.com.ar",
      "description": "Restaurante americano casual con hamburguesas gourmet, costillas BBQ y cócteles únicos.",
      "horarios": "Lun-Dom 12:00 a 24:00",
      "precio": "$$$"
    },
    {
      "name": "Sushi Club",
      "cuisine": "Comida Japonesa",
      "rating": "4.6/5",
      "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
      "website": "https://sushiclub.com.ar",
      "description": "Sushi fresco y rolls creativos con ingredientes premium. Delivery y take away disponible.",
      "horarios": "Lun-Dom 12:00 a 23:00",
      "precio": "$$$"
    },
    {
      "name": "Pizza Hut",
      "cuisine": "Pizza & Pasta",
      "rating": "4.1/5",
      "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      "website": "https://pizzahut.com.ar",
      "description": "Pizzas con masa artesanal, variedad de ingredientes premium y opciones para toda la familia.",
      "horarios": "Lun-Dom 11:30 a 23:30",
      "precio": "$$"
    }
  ],
  "rapida": [
    {
      "name": "McDonald's",
      "cuisine": "Comida Rápida",
      "rating": "4.0/5",
      "image": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop",
      "website": "https://mcdonalds.com.ar",
      "description": "La famosa cadena mundial con Big Mac, McNuggets, papas fritas y opciones saludables.",
      "horarios": "Lun-Dom 10:00 a 24:00",
      "precio": "$"
    },
    {
      "name": "Burger King",
      "cuisine": "Hamburguesas",
      "rating": "4.1/5",
      "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
      "website": "https://burgerking.com.ar",
      "description": "Hamburguesas a la parrilla con el sabor único del Whopper. Menús familiares disponibles.",
      "horarios": "Lun-Dom 10:00 a 24:00",
      "precio": "$"
    },
    {
      "name": "Subway",
      "cuisine": "Sándwiches Saludables",
      "rating": "4.2/5",
      "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      "website": "https://subway.com",
      "description": "Sándwiches frescos y personalizables con ingredientes saludables. Opciones veganas disponibles.",
      "horarios": "Lun-Dom 9:00 a 22:00",
      "precio": "$"
    },
    {
      "name": "KFC",
      "cuisine": "Pollo Frito",
      "rating": "3.9/5",
      "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
      "website": "https://kfc.com.ar",
      "description": "Pollo crujiente con la receta secreta de 11 hierbas y especias. Buckets familiares.",
      "horarios": "Lun-Dom 11:00 a 23:00",
      "precio": "$"
    }
  ]
};

// ===============================
// 1) CARGAR DATA DE LOCALES/GASTRONOMÍA
// ===============================

async function loadRestaurantData() {
    // Los datos ya están cargados arriba
    console.log("restaurantData listo:", restaurantData);
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
          <span class="stars">${'★'.repeat(Math.floor(parseFloat(restaurant.rating)))}${'☆'.repeat(5-Math.floor(parseFloat(restaurant.rating)))}</span>
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
      <span>${'★'.repeat(Math.floor(parseFloat(restaurant.rating)))}${'☆'.repeat(5-Math.floor(parseFloat(restaurant.rating)))} ${restaurant.rating}</span>
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

  window.addEventListener('click', function(event) {
    const modal = document.getElementById('restaurantModal');
    if (event.target === modal) {
      closeRestaurantModal();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeRestaurantModal();
    }
  });
}
