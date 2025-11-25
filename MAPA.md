# Alto Saavedra Mall - Estructura del Sitio

## 📍 INICIO (index.html)
**Propósito:** Página principal que da la bienvenida y orienta al usuario
- Hero section con video de YouTube integrado
- Mensaje de bienvenida prominente
- Call-to-action buttons:
  - "Explorar locales" → redirige a Locales
  - "Ver ofertas especiales" → redirige a Ofertas
- Header con navegación sticky
- Footer con horarios y copyright
- Chatbot integrado

## 🛠️ SERVICIOS (servicios.html)
**Propósito:** Mostrar las facilidades y servicios del shopping
- Grid de 6 servicios principales con iconos Material Symbols:
  - WiFi Gratis (wifi)
  - Estacionamiento (local_parking)
  - Servicios bancarios (account_balance)
  - Atención médica (medical_services)
  - Centro de información (info)
  - Seguridad 24hs (security)
- Layout responsive: 1 columna (móvil) → 2 columnas (tablet) → 3 columnas (desktop)
- Cards con diseño funcional y descripción clara
- Chatbot integrado

## 🎯 ENTRETENIMIENTOS (entretenimientos.html)
**Propósito:** Destacar opciones de entretenimiento y experiencias
- 6 cards visuales con imágenes de fondo y overlays:
  - Cine Premium
  - Bowling Center
  - Zona de juegos infantiles
  - Galería de arte
  - Eventos y música en vivo
  - Realidad Virtual
- Efectos hover dinámicos con transformación y sombras
- Diseño emocional e inmersivo
- Aspecto ratio 4:3 optimizado para mobile y desktop
- Chatbot integrado

## 🗺️ LOCALES (locales/locales.html)
**Propósito:** Directorio interactivo de tiendas y locales
- **Mapa interactivo:**
  - Imagen del plano del shopping (`Mapa_Shopping.jpeg`)
  - Pines clickeables con tooltips
  - Highlighting bidireccional con búsqueda
- **Listado de locales:**
  - Cards con imagen, nombre y rubro
  - Botón "Ver detalles" para modal
- **Buscador en tiempo real:**
  - Filtrado por nombre y categoría
  - Resaltado visual de coincidencias
  - Sincronización entre lista y mapa
- **Modal de detalles:**
  - Información extendida (horarios, teléfono, rating)
  - Descripción y especialidades
  - Link al sitio web del local
- Datos dinámicos desde `locales.json`
- JavaScript: `main.js` + `locales-mall.js`
- Chatbot integrado

## 🏷️ OFERTAS (ofertas.html)
**Propósito:** Mostrar promociones y descuentos actuales
- Cards compactas promocionales
- Badges de descuento destacados visualmente
- Enlaces directos a sitios web de locales
- Grid responsive optimizado para scanneabilidad
- Diseño orientado a conversión
- Información clara: descuento, condiciones, validez
- Chatbot integrado

## 🍽️ GASTRONOMÍA (gastronomia.html)
**Propósito:** Facilitar decisiones gastronómicas por categoría
- **Vista de categorías:**
  - Cafeterías ☕ (3 locales)
  - Restaurantes 🍽️ (3 locales)  
  - Comida Rápida 🍔 (4 locales)
- **Marcas populares integradas:**
  - McDonald's, Starbucks, KFC
  - Burger King, Subway, TGI Friday's
  - Sushi Club, Mostaza
- **Sistema de navegación:**
  - Vista inicial con categorías
  - Vista detallada con restaurantes por categoría
  - Botón "Volver a categorías" para navegación
- **Modales informativos:**
  - Rating con estrellas
  - Horarios y precios
  - Descripción y especialidades
- Datos dinámicos desde `main.js`
- Chatbot integrado

## 📞 CONTACTO (contacto.html)
**Propósito:** Facilitar comunicación y ubicación del shopping
- **Formulario de contacto:**
  - Campos: nombre, email, mensaje
  - Validación HTML5 y JavaScript
  - Popup de confirmación tras envío
- **Información del shopping:**
  - Dirección y horarios
  - Teléfono y email
  - Mapa de ubicación embebido
- JavaScript: `main.js` + `contact.js`
- Chatbot integrado

## 💬 CHATBOT (chatbot/)
**Propósito:** Asistente virtual para consultas frecuentes
- **Archivos:**
  - `chatbot.html` - Estructura del widget
  - `chatbot.json` - Datos de conversación y FAQs
- **Componentes:**
  - Toggle button flotante (💬) en esquina inferior derecha
  - Ventana modal desplegable
  - Header con título "Asistente del Shopping"
  - Área de conversación interactiva
- **Integración:**
  - Cargado dinámicamente desde `main.js`
  - Presente en todas las páginas principales
  - Estado persistente durante navegación

## 📁 ESTRUCTURA DE ARCHIVOS
```
alto-saavedra/
├── index.html              # Página principal
├── servicios.html          # Facilidades del shopping
├── entretenimientos.html   # Opciones de entretenimiento
├── ofertas.html            # Promociones actuales
├── gastronomia.html        # Directorio gastronómico
├── contacto.html           # Información y contacto
├── locales/
│   ├── locales.html        # Directorio de tiendas
│   └── locales.json        # Base de datos de locales
├── chatbot/
│   ├── chatbot.html        # Widget del asistente
│   └── chatbot.json        # Conversación y FAQs
├── css/
│   └── styles.css          # Estilos únicos consolidados
├── js/
│   ├── main.js             # Core functionality + chatbot
│   ├── locales-mall.js     # Mapa interactivo y búsqueda
│   └── contact.js          # Formulario de contacto
├── assets/
│   └── img/
│       ├── logo-alto-saavedra.png
│       └── Mapa_Shopping.jpeg
└── README.md               # Documentación del proyecto
```

## 🎨 CARACTERÍSTICAS TÉCNICAS
- **Responsive Design:** Mobile-first con breakpoints 600px, 900px, 1200px
- **Accesibilidad:** WCAG 2.1 AA compliance
- **Performance:** Lazy loading, critical CSS, optimización de assets
- **Interactividad:** Vanilla JS + jQuery (solo en locales)
- **Navegación:** Header sticky con estados active
- **Modales:** Sistema reutilizable para detalles extendidos