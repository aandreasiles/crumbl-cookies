/**
 * CRUMBL COOKIES - Interactive Experience Script
 * Modern Vanilla JS implementation
 */

// ==========================================
// 1. DATASETS (Cookies, Stores, Nutrition)
// ==========================================
const COOKIES_DATA = [
  {
    id: "milk-chocolate-chip",
    name: "Milk Chocolate Chip",
    tagline: "El clásico legendario servido caliente",
    description: "Nuestra icónica e inconfundible galleta de masa dorada mantecosa rellena de abundantes trozos de chocolate con leche extra cremoso.",
    price: 4.75,
    temp: "warm", // warm | chilled
    tempLabel: "CALIENTE 🔥",
    badge: "FAVORITO DE SIEMPRE",
    category: "chocolate",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=700&auto=format&fit=crop",
    calories: "580 kcal",
    servings: "4 raciones",
    allergens: ["Gluten", "Lácteos", "Huevos", "Soja"],
    macros: { fat: "28g", carbs: "74g", sugar: "48g", protein: "6g" },
    bakerNotes: "Horneada a 180°C durante 11 minutos para lograr un borde crujiente y un centro completamente fundente."
  },
  {
    id: "pink-velvet-cake",
    name: "Pink Velvet Cake",
    tagline: "El homenaje más dulce al color rosa Crumbl",
    description: "Suave galleta de bizcocho velvet rosado, coronada con un generoso remolino de frosting de queso crema dulce y una lluvia de migas artesanales de terciopelo rosa.",
    price: 4.95,
    temp: "chilled",
    tempLabel: "FRÍA ❄️",
    badge: "EDICIÓN ESPECIAL",
    category: "special",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=700&auto=format&fit=crop",
    calories: "620 kcal",
    servings: "4 raciones",
    allergens: ["Gluten", "Lácteos", "Huevos"],
    macros: { fat: "32g", carbs: "78g", sugar: "54g", protein: "5g" },
    bakerNotes: "Servida fría directamente de nuestra nevera boutique para mantener la cremosidad del queso Philadelphia."
  },
  {
    id: "churro-dulce-de-leche",
    name: "Churro & Dulce de Leche",
    tagline: "Crujiente de canela y corazón de caramelo",
    description: "Galleta esponjosa de canela recién horneada, bañada en azúcar canela y coronada con un irresistible remolino de dulce de leche casero y crema pastelera tibia.",
    price: 4.95,
    temp: "warm",
    tempLabel: "CALIENTE 🔥",
    badge: "TOP VENTAS",
    category: "special",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=700&auto=format&fit=crop",
    calories: "610 kcal",
    servings: "4 raciones",
    allergens: ["Gluten", "Lácteos", "Huevos"],
    macros: { fat: "29g", carbs: "82g", sugar: "52g", protein: "6g" },
    bakerNotes: "Rebozada a mano en azúcar de canela de Ceilán nada más salir del horno."
  },
  {
    id: "cookies-and-cream-milkshake",
    name: "Cookies & Cream Milkshake",
    tagline: "Puro sabor a batido de Oreo americano",
    description: "Galleta negra de cacao intenso cargada de trozos crujientes de Oreo, cubierta con una generosa nube de buttercream de vainilla y mini galleta Oreo encima.",
    price: 4.95,
    temp: "chilled",
    tempLabel: "FRÍA ❄️",
    badge: "NUEVO DROPS",
    category: "chocolate",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=700&auto=format&fit=crop",
    calories: "640 kcal",
    servings: "4 raciones",
    allergens: ["Gluten", "Lácteos", "Soja", "Huevos"],
    macros: { fat: "34g", carbs: "80g", sugar: "56g", protein: "7g" },
    bakerNotes: "Frosting enfriado a 4°C que emula la textura sedosa de un milkshake de alta gama."
  },
  {
    id: "salted-caramel-cheesecake",
    name: "Salted Caramel Cheesecake",
    tagline: "Graham cracker & queso crema horneado",
    description: "Base crujiente de galleta Graham dorada, rellena con una suave capa de cheesecake horneado estilo Nueva York y rociada con caramelo salado artesanal.",
    price: 4.95,
    temp: "chilled",
    tempLabel: "FRÍA ❄️",
    badge: "GOURMET",
    category: "special",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=700&auto=format&fit=crop",
    calories: "590 kcal",
    servings: "4 raciones",
    allergens: ["Gluten", "Lácteos", "Huevos"],
    macros: { fat: "30g", carbs: "76g", sugar: "49g", protein: "6g" },
    bakerNotes: "Acabada con cristales de flor de sal Maldon sobre el hilo de toffee tibio."
  },
  {
    id: "lemon-blackberry-cookie",
    name: "Lemon Blackberry Drizzle",
    tagline: "Cítricos frescos y moras silvestres",
    description: "Galleta suave infusionada con ralladura fresca de limón mediterráneo, coronada con coulis casero de moras silvestres y un ligero glaseado cítrico crujiente.",
    price: 4.75,
    temp: "warm",
    tempLabel: "CALIENTE 🔥",
    badge: "REFRESCANTE",
    category: "special",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=700&auto=format&fit=crop",
    calories: "540 kcal",
    servings: "4 raciones",
    allergens: ["Gluten", "Lácteos", "Huevos"],
    macros: { fat: "24g", carbs: "72g", sugar: "42g", protein: "5g" },
    bakerNotes: "Mermelada cocinada a fuego lento con moras maduras 100% naturales."
  },
  {
    id: "kentucky-butter-cake",
    name: "Kentucky Butter Cake",
    tagline: "Mantequilla dorada y azúcar glas",
    description: "Una masa amarilla densa inspirada en el tradicional pastel de mantequilla de Kentucky, empapada en un glaseado de mantequilla dulce y espolvoreada con azúcar en polvo.",
    price: 4.75,
    temp: "warm",
    tempLabel: "CALIENTE 🔥",
    badge: "CLÁSICO SUREÑO",
    category: "warm",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=700&auto=format&fit=crop",
    calories: "570 kcal",
    servings: "4 raciones",
    allergens: ["Gluten", "Lácteos", "Huevos"],
    macros: { fat: "27g", carbs: "75g", sugar: "46g", protein: "5g" },
    bakerNotes: "El glaseado se vierte mientras la galleta aún está humeante para que penetre hasta el núcleo."
  }
];

const STORES_DATA = [
  {
    id: "madrid-gran-via",
    name: "Crumbl Madrid Gran Vía",
    address: "Calle Gran Vía, 48, Centro, Madrid",
    hours: "10:00 - 23:30 (Abierto hoy)",
    status: "Horneando ahora",
    wait: "4 min",
    deliveryRadius: "10 km"
  },
  {
    id: "barcelona-gracia",
    name: "Crumbl Barcelona Passeig",
    address: "Passeig de Gràcia, 74, Eixample, Barcelona",
    hours: "10:00 - 23:30 (Abierto hoy)",
    status: "Horneando ahora",
    wait: "6 min",
    deliveryRadius: "12 km"
  },
  {
    id: "valencia-colon",
    name: "Crumbl Valencia Colón",
    address: "Carrer de Colón, 22, Valencia",
    hours: "11:00 - 23:00 (Abierto hoy)",
    status: "Horneando ahora",
    wait: "3 min",
    deliveryRadius: "8 km"
  },
  {
    id: "sevilla-centro",
    name: "Crumbl Sevilla Tetuán",
    address: "Calle Tetuán, 15, Casco Antiguo, Sevilla",
    hours: "11:00 - 23:00 (Abierto hoy)",
    status: "Horneando ahora",
    wait: "5 min",
    deliveryRadius: "9 km"
  }
];

// ==========================================
// 2. APPLICATION STATE
// ==========================================
const AppState = {
  activeFilter: 'all',
  selectedStore: STORES_DATA[0],
  boxBuilder: {
    size: 4,
    price: 16.50,
    slots: [] // Array of cookie objects selected
  },
  cart: [], // items array
  appliedPromo: null,
  rewardsSliderVal: 4
};

// ==========================================
// 3. INITIALIZATION & DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initCountdown();
  renderWeeklyMenu();
  initMenuFilters();
  initBoxBuilder();
  renderStoreList();
  initRewardsCalculator();
  initCartDrawer();
  initModals();
  initNewsletter();
  initNavigation();
});

// Load cart from LocalStorage
function initStorage() {
  try {
    const savedCart = localStorage.getItem('crumbl_cart');
    if (savedCart) {
      AppState.cart = JSON.parse(savedCart);
      updateCartUI();
    }
  } catch (e) {
    console.error("Storage error:", e);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('crumbl_cart', JSON.stringify(AppState.cart));
  } catch (e) {
    console.error("Save error:", e);
  }
}

// ==========================================
// 4. WEEKLY COUNTDOWN TIMER (Next Sunday midnight)
// ==========================================
function initCountdown() {
  const countdownEl = document.getElementById('hero-countdown');
  if (!countdownEl) return;

  function update() {
    const now = new Date();
    // Calculate days until next Sunday (0 is Sunday)
    const dayOfWeek = now.getDay();
    let daysUntilSunday = (7 - dayOfWeek) % 7;
    if (daysUntilSunday === 0 && now.getHours() >= 23 && now.getMinutes() >= 59) {
      daysUntilSunday = 7;
    }
    
    const target = new Date(now);
    target.setDate(now.getDate() + daysUntilSunday);
    target.setHours(23, 59, 59, 999);

    const diff = target - now;
    if (diff <= 0) {
      countdownEl.innerText = "¡Nuevos sabores horneando ya!";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerText = `${d}d ${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  }

  update();
  setInterval(update, 1000);
}

// ==========================================
// 5. WEEKLY MENU RENDERING & FILTERS
// ==========================================
function renderWeeklyMenu() {
  const grid = document.getElementById('cookies-grid');
  if (!grid) return;

  let filtered = COOKIES_DATA;
  if (AppState.activeFilter === 'warm') {
    filtered = COOKIES_DATA.filter(c => c.temp === 'warm');
  } else if (AppState.activeFilter === 'chilled') {
    filtered = COOKIES_DATA.filter(c => c.temp === 'chilled');
  } else if (AppState.activeFilter === 'chocolate') {
    filtered = COOKIES_DATA.filter(c => c.category === 'chocolate');
  } else if (AppState.activeFilter === 'special') {
    filtered = COOKIES_DATA.filter(c => c.category === 'special');
  }

  let html = '';

  filtered.forEach(cookie => {
    const isWarm = cookie.temp === 'warm';
    html += `
      <div class="cookie-card" data-id="${cookie.id}">
        <div class="cookie-card-media">
          <img src="${cookie.image}" alt="${cookie.name}" class="cookie-card-img" loading="lazy">
          <span class="cookie-temp-badge ${isWarm ? 'badge-warm' : 'badge-chilled'}">
            ${cookie.tempLabel}
          </span>
          <span class="cookie-tag-badge">${cookie.badge}</span>
        </div>
        <div class="cookie-card-body">
          <div class="cookie-card-header">
            <h3 class="cookie-title">${cookie.name}</h3>
            <span class="cookie-price">${cookie.price.toFixed(2).replace('.', ',')} €</span>
          </div>
          <p class="cookie-desc">${cookie.description}</p>
          <div class="cookie-meta-row">
            <span class="cookie-cal"><i class="fa-solid fa-fire-burner"></i> ${cookie.calories}</span>
            <span><i class="fa-solid fa-users"></i> ${cookie.servings}</span>
          </div>
          <div class="cookie-card-actions">
            <button class="btn btn-primary" onclick="addSingleCookieToCart('${cookie.id}')">
              <i class="fa-solid fa-cart-plus"></i> Pedir Individual
            </button>
            <button class="btn-info-detail" onclick="openCookieDetail('${cookie.id}')" title="Ver información nutricional">
              <i class="fa-solid fa-circle-info"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  // Also include the Interactive Mystery Flavor card
  if (AppState.activeFilter === 'all' || AppState.activeFilter === 'special') {
    html += `
      <div class="cookie-card mystery-card" id="mystery-cookie-card">
        <div class="cookie-card-media mystery-placeholder">
          <i class="fa-solid fa-wand-magic-sparkles mystery-icon"></i>
          <span class="cookie-tag-badge">SABOR MISTERIO</span>
        </div>
        <div class="cookie-card-body">
          <div class="cookie-card-header">
            <h3 class="cookie-title">¿Sabor Secreto?</h3>
            <span class="cookie-price">4,95 €</span>
          </div>
          <p class="cookie-desc">Exclusivo de esta boutique. Un sabor legendario rescatado de nuestras más de 250 recetas secretas.</p>
          <div class="cookie-meta-row">
            <span><i class="fa-solid fa-lock"></i> Exclusivo en tienda</span>
            <span>⭐ Receta Secreta</span>
          </div>
          <div class="cookie-card-actions">
            <button class="btn btn-pink btn-block" onclick="revealMysteryFlavor()">
              <i class="fa-solid fa-eye"></i> Revelar Sabor Secreto
            </button>
          </div>
        </div>
      </div>
    `;
  }

  grid.innerHTML = html;
}

function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeFilter = btn.dataset.filter;
      renderWeeklyMenu();
    });
  });

  const voteBtn = document.getElementById('vote-flavor-btn');
  if (voteBtn) {
    voteBtn.addEventListener('click', () => {
      showToast("🍪 ¡Gracias por tu voto! Tu sabor favorito ha sido sumado al recuento semanal.");
      triggerConfetti();
    });
  }
}

// Reveal mystery cookie
window.revealMysteryFlavor = function() {
  const card = document.getElementById('mystery-cookie-card');
  if (!card) return;
  
  card.classList.remove('mystery-card');
  card.innerHTML = `
    <div class="cookie-card-media">
      <img src="https://images.unsplash.com/photo-1548848221-0c2e497ed557?q=80&w=700&auto=format&fit=crop" alt="Peanut Butter Cup" class="cookie-card-img">
      <span class="cookie-temp-badge badge-warm">CALIENTE 🔥</span>
      <span class="cookie-tag-badge" style="background:#FFE600; color:#111;">¡REVELADO! ✨</span>
    </div>
    <div class="cookie-card-body">
      <div class="cookie-card-header">
        <h3 class="cookie-title">Peanut Butter Cup Fudge</h3>
        <span class="cookie-price">4,95 €</span>
      </div>
      <p class="cookie-desc">¡Sabor secreto revelado! Galleta tibia de mantequilla de cacahuete con corazón de fudge de chocolate negro y trozos de Reese's.</p>
      <div class="cookie-meta-row">
        <span class="cookie-cal"><i class="fa-solid fa-fire-burner"></i> 630 kcal</span>
        <span><i class="fa-solid fa-users"></i> 4 raciones</span>
      </div>
      <div class="cookie-card-actions">
        <button class="btn btn-primary" onclick="addSingleCookieToCart('milk-chocolate-chip')">
          <i class="fa-solid fa-cart-plus"></i> Pedir Secreto
        </button>
        <button class="btn-info-detail" onclick="openCookieDetail('milk-chocolate-chip')">
          <i class="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </div>
  `;
  showToast("🎉 ¡Has desbloqueado el Sabor Secreto de la semana!");
  triggerConfetti();
};

// ==========================================
// 6. INTERACTIVE PINK BOX BUILDER
// ==========================================
function initBoxBuilder() {
  const sizeCards = document.querySelectorAll('.size-card');
  sizeCards.forEach(card => {
    card.addEventListener('click', () => {
      sizeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      const size = parseInt(card.dataset.size, 10);
      const price = parseFloat(card.dataset.price);

      AppState.boxBuilder.size = size;
      AppState.boxBuilder.price = price;
      // Trim slots if resized smaller
      if (AppState.boxBuilder.slots.length > size) {
        AppState.boxBuilder.slots = AppState.boxBuilder.slots.slice(0, size);
      }
      renderBoxSlots();
      renderBuilderSummary();
    });
  });

  renderBoxSlots();
  renderBuilderCookieStrip();
  renderBuilderSummary();

  const clearBtn = document.getElementById('clear-box-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      AppState.boxBuilder.slots = [];
      renderBoxSlots();
      renderBuilderSummary();
      showToast("Caja rosa vaciada");
    });
  }

  const addBoxBtn = document.getElementById('add-box-to-cart-btn');
  if (addBoxBtn) {
    addBoxBtn.addEventListener('click', () => {
      if (AppState.boxBuilder.slots.length < AppState.boxBuilder.size) {
        showToast("⚠️ Por favor selecciona todas las galletas para completar tu caja rosa.");
        return;
      }

      // Add Pink Box to cart
      const boxItem = {
        id: 'box-' + Date.now(),
        type: 'pink-box',
        name: `${AppState.boxBuilder.size}-Pack Pink Box`,
        price: AppState.boxBuilder.price,
        size: AppState.boxBuilder.size,
        cookies: [...AppState.boxBuilder.slots],
        qty: 1,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format&fit=crop"
      };

      AppState.cart.push(boxItem);
      saveCartToStorage();
      updateCartUI();
      openCartDrawer();
      showToast(`🎁 ¡Tu ${AppState.boxBuilder.size}-Pack Pink Box se ha añadido al carrito!`);
      triggerConfetti();

      // Reset slots for next box
      AppState.boxBuilder.slots = [];
      renderBoxSlots();
      renderBuilderSummary();
    });
  }
}

function renderBoxSlots() {
  const container = document.getElementById('box-slots-container');
  const progressText = document.getElementById('box-progress-text');
  const statusMsg = document.getElementById('box-status-msg');
  const clearBtn = document.getElementById('clear-box-btn');
  if (!container) return;

  const size = AppState.boxBuilder.size;
  container.className = `box-slots-grid slots-${size}`;

  let slotsHtml = '';
  for (let i = 0; i < size; i++) {
    const cookie = AppState.boxBuilder.slots[i];
    if (cookie) {
      slotsHtml += `
        <div class="box-slot-item filled" title="${cookie.name}">
          <img src="${cookie.image}" alt="${cookie.name}" class="slot-cookie-img">
          <button class="slot-remove-btn" onclick="removeCookieFromBoxSlot(${i})" title="Quitar">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      `;
    } else {
      slotsHtml += `
        <div class="box-slot-item empty">
          <i class="fa-solid fa-cookie-bite slot-empty-icon"></i>
          <span class="slot-slot-number">Hueco #${i + 1}</span>
        </div>
      `;
    }
  }

  container.innerHTML = slotsHtml;

  const filledCount = AppState.boxBuilder.slots.length;
  progressText.innerHTML = `Seleccionadas: <strong>${filledCount}</strong> de <strong>${size}</strong> galletas`;

  if (clearBtn) {
    clearBtn.style.display = filledCount > 0 ? 'inline-flex' : 'none';
  }

  if (filledCount === size) {
    statusMsg.innerHTML = "✨ <strong>¡Tu caja está completa y lista para ser horneada!</strong>";
  } else {
    statusMsg.innerHTML = `Faltan <strong>${size - filledCount}</strong> galleta(s). Haz click en las galletas de abajo para añadirlas.`;
  }
}

function renderBuilderCookieStrip() {
  const strip = document.getElementById('builder-cookie-strip');
  if (!strip) return;

  let html = '';
  COOKIES_DATA.forEach(cookie => {
    html += `
      <div class="strip-item-card" onclick="addCookieToBoxBuilder('${cookie.id}')">
        <img src="${cookie.image}" alt="${cookie.name}" class="strip-item-img">
        <div class="strip-item-details">
          <span class="strip-item-title">${cookie.name}</span>
          <span class="strip-item-temp" style="color: ${cookie.temp === 'warm' ? '#FF5E36' : '#0099FF'}">
            ${cookie.temp === 'warm' ? '🔥 Caliente' : '❄️ Fría'}
          </span>
        </div>
        <button class="strip-add-btn" aria-label="Añadir a la caja">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    `;
  });

  strip.innerHTML = html;
}

window.addCookieToBoxBuilder = function(cookieId) {
  if (AppState.boxBuilder.slots.length >= AppState.boxBuilder.size) {
    showToast(`⚠️ Tu caja ya tiene las ${AppState.boxBuilder.size} galletas. Añade la caja al carrito o quita alguna.`);
    return;
  }

  const cookie = COOKIES_DATA.find(c => c.id === cookieId);
  if (cookie) {
    AppState.boxBuilder.slots.push(cookie);
    renderBoxSlots();
    renderBuilderSummary();
    showToast(`🍪 ${cookie.name} añadida a la caja`);
  }
};

window.removeCookieFromBoxSlot = function(index) {
  AppState.boxBuilder.slots.splice(index, 1);
  renderBoxSlots();
  renderBuilderSummary();
};

function renderBuilderSummary() {
  const list = document.getElementById('builder-summary-list');
  const priceDisplay = document.getElementById('builder-total-price');
  const addBtn = document.getElementById('add-box-to-cart-btn');
  if (!list) return;

  priceDisplay.innerText = `${AppState.boxBuilder.price.toFixed(2).replace('.', ',')} €`;

  if (AppState.boxBuilder.slots.length === 0) {
    list.innerHTML = `<li class="empty-state-item">Aún no has seleccionado ninguna galleta. Haz click en los sabores disponibles.</li>`;
    addBtn.disabled = true;
    return;
  }

  // Count frequencies
  const counts = {};
  AppState.boxBuilder.slots.forEach(c => {
    counts[c.name] = (counts[c.name] || 0) + 1;
  });

  let html = '';
  for (const [name, count] of Object.entries(counts)) {
    const cookie = COOKIES_DATA.find(c => c.name === name);
    html += `
      <li class="builder-list-row">
        <div class="item-left">
          <img src="${cookie ? cookie.image : ''}" alt="${name}">
          <span>${name}</span>
        </div>
        <span class="item-qty">x${count}</span>
      </li>
    `;
  }

  list.innerHTML = html;
  addBtn.disabled = AppState.boxBuilder.slots.length !== AppState.boxBuilder.size;
}

// ==========================================
// 7. STORE FINDER & SELECTOR
// ==========================================
function renderStoreList() {
  const container = document.getElementById('store-list-container');
  if (!container) return;

  let html = '';
  STORES_DATA.forEach(store => {
    const isSelected = store.id === AppState.selectedStore.id;
    html += `
      <div class="store-item-card ${isSelected ? 'active' : ''}" onclick="selectStore('${store.id}')">
        <div class="store-item-info">
          <h4>${store.name}</h4>
          <span class="store-address"><i class="fa-solid fa-location-dot"></i> ${store.address}</span>
          <span class="store-live-status">
            <span class="status-dot"></span> ${store.status} • Espera: ${store.wait}
          </span>
        </div>
        <div class="store-select-action">
          ${isSelected ? '<i class="fa-solid fa-circle-check"></i> Seleccionada' : 'Seleccionar <i class="fa-solid fa-chevron-right"></i>'}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  const label = document.getElementById('selected-store-label');
  if (label) {
    label.innerText = AppState.selectedStore.name.replace('Crumbl ', '');
  }
}

window.selectStore = function(storeId) {
  const store = STORES_DATA.find(s => s.id === storeId);
  if (store) {
    AppState.selectedStore = store;
    renderStoreList();
    showToast(`📍 Ubicación cambiada a: ${store.name}`);
  }
};

// ==========================================
// 8. CRUMBL REWARDS CALCULATOR
// ==========================================
function initRewardsCalculator() {
  const slider = document.getElementById('cookie-range-slider');
  const countLabel = document.getElementById('calc-cookie-count');
  const crumbsEarned = document.getElementById('calc-crumbs-earned');
  const freeCookies = document.getElementById('calc-free-cookies');
  const joinBtn = document.getElementById('join-rewards-btn');

  if (!slider) return;

  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    countLabel.innerText = `${val} ${val === 1 ? 'Galleta' : 'Galletas'}`;
    
    // ~4.80€ per cookie = 48 points per cookie
    const crumbs = val * 48;
    const free = Math.floor(crumbs / 100);

    crumbsEarned.innerText = `${crumbs}`;
    freeCookies.innerText = free > 0 ? `${free} Cookie${free > 1 ? 's' : ''} Gratis` : `Casi 1 Gratis (${100 - crumbs} crumbs más)`;
  });

  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      showToast("👑 ¡Bienvenido a Crumbl Pink VIP! Has recibido 50 Crumbs de bienvenida.");
      triggerConfetti();
    });
  }
}

// ==========================================
// 9. SHOPPING CART SYSTEM
// ==========================================
function initCartDrawer() {
  const cartBtn = document.getElementById('cart-toggle-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const overlay = document.getElementById('cart-drawer-overlay');
  const promoBtn = document.getElementById('apply-promo-btn');
  const checkoutBtn = document.getElementById('checkout-trigger-btn');

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (overlay) overlay.addEventListener('click', closeCartDrawer);

  if (promoBtn) {
    promoBtn.addEventListener('click', () => {
      const input = document.getElementById('promo-input');
      const code = input.value.trim().toUpperCase();
      if (code === 'CRUMBLPINK' || code === 'COOKIELOVER') {
        AppState.appliedPromo = { code: code, discount: 0.15 }; // 15% off
        updateCartUI();
        showToast("🎉 ¡Código de 15% aplicado con éxito!");
        triggerConfetti();
      } else if (code) {
        showToast("⚠️ Código no válido. Prueba con 'CRUMBLPINK'");
      }
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (AppState.cart.length === 0) {
        showToast("Tu carrito está vacío. ¡Añade deliciosas galletas!");
        return;
      }
      closeCartDrawer();
      openCheckoutModal();
    });
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }
}

window.addSingleCookieToCart = function(cookieId) {
  const cookie = COOKIES_DATA.find(c => c.id === cookieId);
  if (!cookie) return;

  const existing = AppState.cart.find(item => item.id === cookie.id);
  if (existing) {
    existing.qty += 1;
  } else {
    AppState.cart.push({
      id: cookie.id,
      type: 'single',
      name: cookie.name,
      price: cookie.price,
      image: cookie.image,
      qty: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  openCartDrawer();
  showToast(`🍪 ${cookie.name} añadida al carrito`);
};

window.updateCartItemQty = function(id, delta) {
  const itemIndex = AppState.cart.findIndex(i => i.id === id);
  if (itemIndex > -1) {
    AppState.cart[itemIndex].qty += delta;
    if (AppState.cart[itemIndex].qty <= 0) {
      AppState.cart.splice(itemIndex, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
};

window.removeCartItem = function(id) {
  AppState.cart = AppState.cart.filter(i => i.id !== id);
  saveCartToStorage();
  updateCartUI();
};

function updateCartUI() {
  const countBadge = document.getElementById('cart-badge');
  const totalPill = document.getElementById('cart-total-pill');
  const drawerCount = document.getElementById('cart-drawer-count');
  const itemsContainer = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const discountRow = document.getElementById('cart-discount-row');
  const discountVal = document.getElementById('cart-discount-val');
  const shippingVal = document.getElementById('cart-shipping-val');
  const finalTotalEl = document.getElementById('cart-final-total');
  const shippingText = document.getElementById('shipping-progress-text');
  const shippingFill = document.getElementById('shipping-progress-fill');

  let totalItems = 0;
  let subtotal = 0;

  AppState.cart.forEach(item => {
    totalItems += item.qty;
    subtotal += item.price * item.qty;
  });

  if (countBadge) countBadge.innerText = totalItems;
  if (drawerCount) drawerCount.innerText = totalItems;
  if (totalPill) totalPill.innerText = `${subtotal.toFixed(2).replace('.', ',')} €`;
  if (subtotalEl) subtotalEl.innerText = `${subtotal.toFixed(2).replace('.', ',')} €`;

  // Free shipping threshold = 25€
  const freeThreshold = 25;
  const needed = Math.max(0, freeThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeThreshold) * 100);
  
  if (shippingFill) shippingFill.style.width = `${progressPercent}%`;
  if (shippingText) {
    if (needed > 0) {
      shippingText.innerHTML = `Añade <span>${needed.toFixed(2).replace('.', ',')} €</span> más para <strong>Envío Gratis 🚚</strong>`;
    } else {
      shippingText.innerHTML = `🎉 <strong>¡Tienes Envío Gratis activado!</strong>`;
    }
  }

  let shippingCost = subtotal > 0 ? (needed === 0 ? 0.00 : 2.95) : 0.00;
  let discountAmount = 0;

  if (AppState.appliedPromo && subtotal > 0) {
    discountAmount = subtotal * AppState.appliedPromo.discount;
    if (discountRow) discountRow.style.display = 'flex';
    if (discountVal) discountVal.innerText = `-${discountAmount.toFixed(2).replace('.', ',')} €`;
  } else if (discountRow) {
    discountRow.style.display = 'none';
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);
  if (shippingVal) shippingVal.innerText = shippingCost === 0 && subtotal > 0 ? 'GRATIS' : `${shippingCost.toFixed(2).replace('.', ',')} €`;
  if (finalTotalEl) finalTotalEl.innerText = `${finalTotal.toFixed(2).replace('.', ',')} €`;

  // Render items list
  if (!itemsContainer) return;

  if (AppState.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-solid fa-box-open"></i>
        <h4>Tu carrito está vacío</h4>
        <p>Añade tus galletas gourmet favoritas o arma una Pink Box.</p>
      </div>
    `;
    return;
  }

  let itemsHtml = '';
  AppState.cart.forEach(item => {
    let subtext = '';
    if (item.type === 'pink-box' && item.cookies) {
      const cookieNames = item.cookies.map(c => c.name).join(', ');
      subtext = `<div class="cart-item-subtext">${cookieNames}</div>`;
    }

    itemsHtml += `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          ${subtext}
          <div class="cart-item-bottom">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartItemQty('${item.id}', -1)">-</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartItemQty('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-price">${(item.price * item.qty).toFixed(2).replace('.', ',')} €</div>
            <button class="cart-item-delete" onclick="removeCartItem('${item.id}')" title="Eliminar">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  itemsContainer.innerHTML = itemsHtml;
}

// ==========================================
// 10. MODALS (Nutrition & Detail, Checkout)
// ==========================================
function initModals() {
  const detailModal = document.getElementById('cookie-detail-modal');
  const closeDetailBtn = document.getElementById('close-detail-modal-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const closeCheckoutBtn = document.getElementById('close-checkout-modal-btn');

  if (closeDetailBtn && detailModal) {
    closeDetailBtn.addEventListener('click', () => detailModal.classList.remove('active'));
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) detailModal.classList.remove('active');
    });
  }

  if (closeCheckoutBtn && checkoutModal) {
    closeCheckoutBtn.addEventListener('click', () => checkoutModal.classList.remove('active'));
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) checkoutModal.classList.remove('active');
    });
  }
}

window.openCookieDetail = function(cookieId) {
  const cookie = COOKIES_DATA.find(c => c.id === cookieId);
  if (!cookie) return;

  const content = document.getElementById('modal-cookie-content');
  const modal = document.getElementById('cookie-detail-modal');
  if (!content || !modal) return;

  const allergenTags = cookie.allergens.map(a => `<span class="allergen-pill">${a}</span>`).join('');

  content.innerHTML = `
    <div class="modal-cookie-hero">
      <img src="${cookie.image}" alt="${cookie.name}">
      <span class="cookie-temp-badge ${cookie.temp === 'warm' ? 'badge-warm' : 'badge-chilled'}">
        ${cookie.tempLabel}
      </span>
    </div>
    <div class="modal-cookie-body">
      <div class="modal-tag-row">
        <span class="badge-special">${cookie.badge}</span>
      </div>
      <h2 class="modal-cookie-title">${cookie.name}</h2>
      <p class="modal-cookie-desc">${cookie.description}</p>
      
      <div class="nutrition-grid">
        <div class="nutrition-item">
          <strong>${cookie.calories}</strong>
          <span>Calorías</span>
        </div>
        <div class="nutrition-item">
          <strong>${cookie.macros.fat}</strong>
          <span>Grasas</span>
        </div>
        <div class="nutrition-item">
          <strong>${cookie.macros.sugar}</strong>
          <span>Azúcares</span>
        </div>
        <div class="nutrition-item">
          <strong>${cookie.macros.protein}</strong>
          <span>Proteínas</span>
        </div>
      </div>

      <div class="allergens-box">
        <div class="allergens-title">Alérgenos e ingredientes:</div>
        <div class="allergen-tags">${allergenTags}</div>
      </div>

      <div style="background:#FFF9FB; border-left:4px solid #FF6492; padding:14px; border-radius:8px; margin-bottom:24px; font-size:0.85rem; color:#444;">
        <strong>Nota del Maestro Pastelero:</strong> ${cookie.bakerNotes}
      </div>

      <button class="btn btn-primary btn-block btn-lg" onclick="addSingleCookieToCart('${cookie.id}'); document.getElementById('cookie-detail-modal').classList.remove('active');">
        <i class="fa-solid fa-cart-plus"></i> Añadir por ${cookie.price.toFixed(2).replace('.', ',')} €
      </button>
    </div>
  `;

  modal.classList.add('active');
};

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const container = document.getElementById('checkout-steps-container');
  if (!modal || !container) return;

  container.innerHTML = `
    <h2 class="checkout-step-title">Finalizar Pedido</h2>
    <p class="checkout-step-subtitle">Tu Pink Box será preparada en nuestra boutique de <strong>${AppState.selectedStore.name}</strong>.</p>
    
    <form id="checkout-form" onsubmit="processOrder(event)">
      <div class="checkout-form-group">
        <label>Nombre y Apellidos *</label>
        <input type="text" required placeholder="Ej. Andrea Siles" value="Andrea Siles">
      </div>
      <div class="checkout-form-group">
        <label>Teléfono para el repartidor *</label>
        <input type="tel" required placeholder="+34 600 000 000" value="+34 612 345 678">
      </div>
      <div class="checkout-form-group">
        <label>Dirección de entrega *</label>
        <input type="text" required placeholder="Calle, número, piso y puerta..." value="Paseo de la Castellana, 12, 4º B">
      </div>
      <div class="checkout-form-group">
        <label>Método de Pago</label>
        <div class="payment-method-selector">
          <button type="button" class="pay-btn active" onclick="selectPay(this)"><i class="fa-solid fa-credit-card"></i> Tarjeta</button>
          <button type="button" class="pay-btn" onclick="selectPay(this)"><i class="fa-brands fa-apple-pay"></i> Apple Pay</button>
          <button type="button" class="pay-btn" onclick="selectPay(this)"><i class="fa-solid fa-money-bill-wave"></i> Bizum</button>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block btn-lg">
        Confirmar y Hornear Pedido 🍪
      </button>
    </form>
  `;

  modal.classList.add('active');
}

window.selectPay = function(el) {
  document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
};

window.processOrder = function(e) {
  e.preventDefault();
  const container = document.getElementById('checkout-steps-container');
  if (!container) return;

  container.innerHTML = `
    <div class="success-animation-wrap">
      <div class="success-icon-badge">
        <i class="fa-solid fa-cookie-bite"></i>
      </div>
      <h2 class="checkout-step-title">¡Pedido Confirmado! 🎉</h2>
      <p class="checkout-step-subtitle">Orden #CRB-${Math.floor(100000 + Math.random() * 900000)} en preparación</p>

      <div class="order-tracker-timeline">
        <div class="track-step done">
          <div class="track-dot"><i class="fa-solid fa-check"></i></div>
          <span>Recibido</span>
        </div>
        <div class="track-step active">
          <div class="track-dot"><i class="fa-solid fa-fire"></i></div>
          <span>Horneando</span>
        </div>
        <div class="track-step">
          <div class="track-dot"><i class="fa-solid fa-box-open"></i></div>
          <span>En Caja Rosa</span>
        </div>
        <div class="track-step">
          <div class="track-dot"><i class="fa-solid fa-motorcycle"></i></div>
          <span>En Camino</span>
        </div>
      </div>

      <div style="background:#FFF0F4; padding:18px; border-radius:12px; margin-bottom:20px; font-size:0.9rem;">
        ⏱️ Tiempo estimado de entrega: <strong>25 - 35 minutos</strong><br>
        Recibirás una notificación por SMS cuando el repartidor esté a 5 minutos.
      </div>

      <button class="btn btn-primary btn-block" onclick="document.getElementById('checkout-modal').classList.remove('active');">
        Seguir Navegando
      </button>
    </div>
  `;

  // Clear cart
  AppState.cart = [];
  saveCartToStorage();
  updateCartUI();
  triggerConfetti();
  showToast("🧁 ¡Pedido recibido! Tus galletas están entrando al horno.");
};

// ==========================================
// 11. NEWSLETTER & NAVIGATION HELPERS
// ==========================================
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      if (input && input.value) {
        showToast("💌 ¡Gracias por unirte! Te avisaremos de los nuevos sabores cada domingo.");
        triggerConfetti();
        input.value = '';
      }
    });
  }
}

function initNavigation() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('mobile-active');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('mobile-active');
      });
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

// Toast notification helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-cookie-bite" style="color:var(--pink-primary)"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 12. CONFETTI CELEBRATION EFFECT
// ==========================================
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#FF6492', '#FFB8CF', '#FFA2BF', '#FFD2E1', '#FFF', '#E83E8C'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      w: Math.random() * 8 + 4,
      h: Math.random() * 8 + 4,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.8) * 18,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.4; // gravity
      p.rotation += p.rotSpeed;
      p.opacity -= 0.012;

      if (p.opacity > 0) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (active) {
      animationFrame = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  update();
}
