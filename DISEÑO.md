# DISEÑO DEL SITIO – "ALTO SAAVEDRA MALL"

Documento técnico de diseño orientado a implementación con HTML, CSS y JavaScript (opcional jQuery). Define estructura de páginas, arquitectura de estilos, componentes UI, accesibilidad, interacciones (incluye mapa SVG + buscador), datos, y prácticas de rendimiento.

---

## 1) Objetivo y Alcance
- Sitio multipágina estático con comportamiento dinámico (sin backend): HTML + CSS + JS (con opción jQuery).
- Enfoque mobile-first, accesible (WCAG 2.1 AA), veloz y claro.
- Páginas clave: Inicio, Servicios, Entretenimientos, Locales (Listado + Mapa interactivo), Ofertas, Gastronomía, Contacto/Chatbot.

---

## 2) Arquitectura de Información (Sitemap)
- Inicio (`/index.html`)
- Servicios (`/servicios.html`)
- Entretenimientos (`/entretenimientos.html`)
- Locales comerciales (`/locales/index.html`)
  - Listado de locales (cards)
  - Mapa interactivo (SVG) obligatorio
  - Páginas individuales por local (opcional, una por integrante): `/locales/[slug].html`
- Ofertas (`/ofertas.html`)
- Gastronomía (`/gastronomia.html`)
- Contacto / Chatbot (`/contacto.html`)

Cada miembro del grupo: un local propio con su página individual (card en listado, destacable en mapa).

---

## 3) Estructura de Carpetas (TP simplificado)
```
/ (raíz)
├─ index.html
├─ servicios.html
├─ entretenimientos.html
├─ ofertas.html
├─ gastronomia.html
├─ contacto.html
├─ locales/
│  ├─ index.html            (listado + mapa)
│  └─ [slug-del-local].html (páginas individuales)
├─ css/
│  └─ styles.css            (único CSS con reset + tokens + componentes)
├─ js/
│  └─ main.js               (JS simple en raíz)
├─ assets/                  (solo imágenes y SVGs)
│  ├─ img/
│  └─ svg/
│     └─ mall-map.svg       (mapa SVG accesible)
├─ data/                    (opcional) JSONs para locales/ofertas
│  ├─ locales.json
│  └─ ofertas.json
└─ DISEÑO.md
```

---

## 4) Identidad Visual
- Paleta (AA):
  - Fondo principal: `#FAF7F2`
  - Fondo secciones/cards: `#F1EBE4`
  - Primario: `#C97A40`
  - Hover primario: `#B66A36`
  - Texto principal: `#2F2F2F`
  - Texto secundario: `#6A6A6A`
- Tipografías:
  - Titulares: Playfair Display
  - Texto / Botones: Inter (Regular / Semibold)
- Iconografía: Material Symbols (Rounded) o Feather Icons. Para usar Material Symbols en páginas con íconos:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
```
- Estética: moderno natural, cálido, sin neones ni estética tech.

Tokens en CSS (variables globales):
```css
:root {
  /* Colores */
  --color-bg: #FAF7F2;
  --color-surface: #F1EBE4;
  --color-primary: #C97A40;
  --color-primary-hover: #B66A36;
  --color-text: #2F2F2F;
  --color-text-muted: #6A6A6A;

  /* Tipografía */
  --font-serif: "Playfair Display", serif;
  --font-sans: "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  --fs-1: clamp(2.2rem, 1.2rem + 2.2vw, 3rem);
  --fs-2: 1.5rem; /* subtítulos */
  --fs-3: 1rem;   /* párrafos */

  /* Espacios y radios */
  --space-1: .5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  /* Sombra y focus */
  --shadow-1: 0 4px 16px rgba(0,0,0,.08);
  --focus: 0 0 0 3px rgba(201,122,64,.35);
}
```

Importación de fuentes (en `<head>`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
```

---

## 5) Layout y Componentes UI
- Landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Grid responsive: contenedor central max-width 1200px; gutters con `--space-*`.
- Componentes: Header+Nav, Hero, Cards, Grillas, Secciones (Servicios, Ofertas, Gastronomía), Mapa (SVG), Modal, Formulario, Footer.

Componente: Cards de Servicios
- Uso: página `servicios.html` para listar facilidades del shopping.
- Accesibilidad: lista con `role="list"`; cada card con `aria-label` descriptivo; iconos decorativos con `aria-hidden="true"`.
- HTML:
```html
<section aria-labelledby="titulo-servicios">
  <h2 id="titulo-servicios" class="sr-only">Listado de servicios</h2>
  <ul class="services-grid" role="list">
    <li>
      <article class="service-card" aria-label="Estacionamiento accesible, señalizado y amplio">
        <div class="service-card__icon" aria-hidden="true">
          <span class="material-symbols-rounded" aria-hidden="true">local_parking</span>
        </div>
        <div>
          <h3 class="service-card__title">Estacionamiento</h3>
          <p class="service-card__desc">Amplio, señalizado y con espacios reservados.</p>
        </div>
      </article>
    </li>
  </ul>
  <!-- Repetir para WiFi, Espacios verdes, Lactancia, Eventos, Atención al cliente -->
</section>
```
- CSS (en `css/styles.css`):
```css
.services-grid{display:grid;gap:var(--space-3)}
@media (min-width:600px){.services-grid{grid-template-columns:repeat(2,1fr)}}
@media (min-width:900px){.services-grid{grid-template-columns:repeat(2,1fr)}}
@media (min-width:1200px){.services-grid{grid-template-columns:repeat(3,1fr)}}
.service-card{background:var(--color-surface);border-radius:var(--radius-lg);box-shadow:var(--shadow-1);padding:var(--space-4);display:flex;gap:var(--space-3);min-height:180px}
.service-card__icon{flex:0 0 72px;height:72px;border-radius:16px;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--color-primary),var(--color-primary-hover));color:#fff}
.service-card__title{font:700 1.1rem var(--font-serif)}
.service-card__desc{color:var(--color-text-muted)}
```

**Entertainment Cards (Image-based):**
```css
.entertainment-grid{display:grid;gap:var(--space-3);margin-top:var(--space-3)}
@media (min-width:600px){.entertainment-grid{grid-template-columns:repeat(2,1fr)}}
@media (min-width:1200px){.entertainment-grid{grid-template-columns:repeat(3,1fr)}}
.entertainment-card{position:relative;border-radius:var(--radius-lg);overflow:hidden;aspect-ratio:4/3;box-shadow:var(--shadow-1);transition:transform .3s ease, box-shadow .3s ease}
.entertainment-card:hover{transform:translateY(-8px) scale(1.02);box-shadow:0 12px 32px rgba(0,0,0,.2)}
.entertainment-card__image{width:100%;height:100%;object-fit:cover;transition:transform .3s ease}
.entertainment-card:hover .entertainment-card__image{transform:scale(1.1)}
.entertainment-card__overlay{position:absolute;inset:0;background:linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.3) 50%, rgba(0,0,0,.1) 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:var(--space-3);color:#fff}
.entertainment-card__title{font:700 1.5rem var(--font-serif);text-shadow:0 2px 8px rgba(0,0,0,.5)}
.entertainment-card__desc{margin:.5rem 0 0;font-size:.95rem;opacity:.9;text-shadow:0 1px 4px rgba(0,0,0,.4)}
```

Ejemplo de esqueleto HTML base (links simplificados):
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Alto Saavedra Mall</title>
  <meta name="description" content="Shopping moderno, cálido y accesible en Saavedra.">
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <header class="site-header">
    <div class="container">
      <a class="logo" href="/">Alto Saavedra Mall</a>
      <nav aria-label="Principal">
        <ul class="nav">
          <li><a href="/index.html">Inicio</a></li>
          <li><a href="/servicios.html">Servicios</a></li>
          <li><a href="/locales/">Locales</a></li>
          <li><a href="/gastronomia.html">Gastronomía</a></li>
          <li><a href="/contacto.html">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="contenido">
    <!-- Hero, secciones, etc. -->
  </main>

  <footer class="site-footer">
    <div class="container">© Alto Saavedra Mall</div>
  </footer>

  <script src="./js/main.js"></script>
</body>
</html>
```

Card (BEM):
```html
<article class="card card--local">
  <img class="card__media" src="assets/img/locales/cafeteria-1.jpg" alt="Cafetería Brisa – interior cálido">
  <div class="card__body">
    <h3 class="card__title">Cafetería Brisa</h3>
    <p class="card__meta">Gastronomía • Planta Baja</p>
    <a class="btn btn--primary" href="/locales/cafeteria-brisa.html">Ver local</a>
  </div>
</article>
```

---

## 6) Páginas y Contenidos
- Inicio: Hero con imagen descriptiva, titular, CTA "Explorar"; secciones destacadas (Ofertas del día, Restaurantes), avance al mapa.
- Servicios: Cards con iconos (estacionamiento, espacios verdes, patio de juegos, sala de lactancia, atención al cliente, WiFi). Alt y labels claros.
- Entretenimientos: 6 cards con imágenes de fondo (Cine, Bowling, Juegos infantiles, Arte/Galería, Música/Eventos, Realidad Virtual). Diseño visual distintivo con overlays degradados y efectos hover dinámicos. Textos en blanco con text-shadow para legibilidad. Grid 2x3 responsivo con aspect-ratio 4:3, zoom en hover y sombras elevadas.
- Locales:
  - Listado: cards por local (foto, nombre, rubro, botón "Ver local").
  - Mapa interactivo: SVG con zonas por local (hover, focus, click). Buscador JS para resaltar.
  - Páginas individuales: info extendida (horarios, ubicación, fotos, accesibilidad).
- Ofertas: grilla con imagen, descripción, precio anterior/actual, etiquetas.
- Gastronomía: categorías (cafeterías, restaurantes, rápida, pastelerías, saludable) con alt-text descriptivo.
- Contacto/Chatbot: formulario accesible (labels, required, `aria-describedby`), chatbot simulado con FAQs.

---

## 7) Accesibilidad (WCAG 2.1 AA)
- Contraste AA en textos y componentes.
- Navegación por teclado completa; foco visible (outline en color primario).
- `alt` en imágenes; `aria-label` en zonas interactivas (mapa, botones icónicos).
- Landmarks semánticos y orden lógico del DOM.
- No depender solo del color: usar borde, iconos, textos.
- Formularios con `label`, `required`, mensajes de error claros y `aria-live`.

CSS de foco recomendado:
```css
:focus-visible { outline: var(--focus); border-radius: 6px; }
```

---

## 8) Interacciones Dinámicas

### 8.1 Mapa Interactivo (SVG obligatorio)
- Archivo: `assets/svg/mall-map.svg`.
- Cada local como `<path>`/`<polygon>` con:
  - `id="local-[id]"` (p. ej. `local-l001`)
  - `data-name`, `data-category`, `data-slug`
  - `role="link"`, `tabindex="0"`, `aria-label="Nombre del local, nivel X"`
- Estados CSS:
  - `.is-hovered`, `.is-active` (seleccionado), `.is-muted` (atenuado), `.is-highlighted` (resultado de búsqueda)
- Interacción:
  - Hover/focus: resalta con stroke y fill.
  - Click/Enter/Space: abre card o detalle del local.
  - Navegación por teclado: flechas/Tab recorren locales (orden definido por DOM).

Ejemplo (fragmento SVG):
```xml
<svg viewBox="0 0 1200 800" aria-labelledby="titulo-mapa" role="img">
  <title id="titulo-mapa">Mapa del Alto Saavedra Mall</title>
  <path id="local-l001" class="local" data-name="Cafetería Brisa" data-category="gastronomia" data-slug="cafeteria-brisa" role="link" tabindex="0" aria-label="Cafetería Brisa, Planta Baja" d="M10,10 L110,10 L110,110 L10,110Z" />
</svg>
```

JS de inicialización del mapa:
```js
// assets/js/mapa.js
export function initMap(selector = '#mall-map') {
  const svg = document.querySelector(selector);
  if (!svg) return;

  const locales = svg.querySelectorAll('.local');

  function activate(el) {
    locales.forEach(n => n.classList.remove('is-active'));
    el.classList.add('is-active');
    const slug = el.dataset.slug;
    const card = document.querySelector(`[data-local-slug="${slug}"]`);
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  locales.forEach(el => {
    el.addEventListener('mouseenter', () => el.classList.add('is-hovered'));
    el.addEventListener('mouseleave', () => el.classList.remove('is-hovered'));
    el.addEventListener('click', () => activate(el));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(el); }
    });
  });
}
```

### 8.2 Buscador de Locales
- Entrada de texto con `aria-label="Buscar locales"` y `id="buscar-locales"`.
- Lógica: búsqueda case-insensitive por `nombre`/`rubro`.
- Resultados: resaltar coincidencias en lista y en mapa (clase `.is-highlighted`).

```js
// assets/js/buscador.js
export function initSearch(inputSel = '#buscar-locales') {
  const input = document.querySelector(inputSel);
  const items = [...document.querySelectorAll('[data-local-slug]')];
  const mapNodes = new Map(items.map(it => [it.dataset.localSlug, document.querySelector(`#local-${it.dataset.localId}`)]));

  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    items.forEach(it => {
      const hay = (it.dataset.name + ' ' + it.dataset.category).toLowerCase().includes(q);
      it.classList.toggle('is-muted', q && !hay);
      const svgNode = mapNodes.get(it.dataset.localSlug);
      if (svgNode) svgNode.classList.toggle('is-highlighted', !!q && hay);
    });
  });
}
```

### 8.3 Bootstrap Global (simple)
```js
// main.js
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  // Aquí pueden inicializar mapa y buscador cuando existan
  // initMap('#mall-map');
  // initSearch('#buscar-locales');
});
```

Nota jQuery (opcional): si el equipo prefiere jQuery, incluir CDN y usarlo directo en `main.js`. Mantener todo en archivos raíz para simplicidad del TP.

---

## 9) Datos (JSON) y Renderizado
`data/locales.json` (ejemplo):
```json
[
  {
    "id": "l001",
    "slug": "cafeteria-brisa",
    "nombre": "Cafetería Brisa",
    "rubro": "Gastronomía",
    "nivel": "Planta Baja",
    "ubicacion": "Cerca de acceso principal",
    "horarios": "Lun-Dom 10 a 22",
    "imagen": "assets/img/locales/cafeteria-1.jpg"
  }
]
```

JS de render (simplificado):
```js
// assets/js/locales.js
export async function renderLocales(containerSel = '#lista-locales') {
  const el = document.querySelector(containerSel);
  if (!el) return;
  const res = await fetch('/data/locales.json');
  const locales = await res.json();
  el.innerHTML = locales.map(loc => `
    <article class="card card--local" data-local-slug="${loc.slug}" data-local-id="${loc.id}" data-name="${loc.nombre}" data-category="${loc.rubro}">
      <img class="card__media" src="${loc.imagen}" alt="${loc.nombre} – ${loc.rubro}">
      <div class="card__body">
        <h3 class="card__title">${loc.nombre}</h3>
        <p class="card__meta">${loc.rubro} • ${loc.nivel}</p>
        <a class="btn btn--primary" href="/locales/${loc.slug}.html">Ver local</a>
      </div>
    </article>`).join('');
}
```

---

## 10) Estilos: Guía rápida
- Nomenclatura: BEM para componentes, utilidades prefijadas (`.u-`), estados con `.is-*`.
- Breakpoints: mobile-first
  - `@media (min-width: 600px)` (sm)
  - `@media (min-width: 900px)` (md)
  - `@media (min-width: 1200px)` (lg)
- Botones:
```css
.btn { display:inline-flex; gap:.5rem; align-items:center; font:600 1rem var(--font-sans); padding:.75rem 1rem; border-radius:var(--radius-md); border:1px solid transparent; }
.btn--primary { background:var(--color-primary); color:#fff; }
.btn--primary:hover { background:var(--color-primary-hover); }
.btn:focus-visible { outline: var(--focus); }
```
- Cards:
```css
.card { background:var(--color-surface); border-radius:var(--radius-lg); box-shadow:var(--shadow-1); overflow:hidden; }
.card__media { width:100%; height:auto; display:block; }
.card__body { padding:var(--space-3); color:var(--color-text); }
.card__title { font:700 1.25rem var(--font-serif); margin:0 0 .25rem; }
.card__meta { color:var(--color-text-muted); margin:0; }
```

---

## 11) Rendimiento y SEO
- Imágenes con `loading="lazy"`, formatos eficientes (WebP/AVIF) y `srcset`.
- Preload de tipografías y CSS crítico si aplica.
- Minificación de CSS/JS (en build manual simple).
- Cache estática (GitHub Pages u hosting estático).
- Metadatos SEO: `<title>`, `<meta name="description">`, Open Graph.

---

## 12) Heurísticas de Nielsen (aplicadas)
- Visibilidad del estado: hover/focus claros, feedback en búsqueda y mapa.
- Lenguaje del mundo real: nombres y rubros entendibles.
- Control y libertad: cerrar modales, deshacer búsqueda.
- Consistencia: tokens, BEM, patrones repetibles.
- Prevención de errores: validación en formularios, confirmaciones.
- Reconocer vs recordar: etiquetas claras, menú visible.
- Flexibilidad: buscador, atajos de teclado en mapa.
- Estética minimal: diseño limpio, énfasis en contenido.
- Mensajes de error: texto claro, `aria-live`.
- Ayuda: chatbot y página de Contacto.

---

## 13) Acciones del Equipo (Checklist)
- [ ] Definir `locales.json` y `ofertas.json` (uno por integrante mínimo).
- [ ] Dibujar `mall-map.svg` con IDs que coincidan con `locales.json`.
- [ ] Implementar listado de locales y vincular con el mapa.
- [ ] Implementar buscador (lista + mapa).
- [ ] Armar páginas: Servicios, Entretenimientos, Ofertas, Gastronomía, Contacto.
- [ ] Asegurar AA de contraste y navegación por teclado.
- [ ] Ejecutar pruebas en móvil y Lighthouse.

---

## 14) Notas de Implementación
- HTML semántico, sin frameworks; JS modular (ESM). jQuery opcional para quienes lo prefieran.
- Mantener nombres consistentes entre `data/*.json` y `assets/svg/mall-map.svg`.
- Evitar dependencias pesadas; priorizar carga rápida y accesible.

