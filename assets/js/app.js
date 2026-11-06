(() => {
  "use strict";

  const PRODUCTS = window.PEEKABOO_PRODUCTS || [];
  const CART_KEY = "peekaboo.cart.v1";
  const FREE_SHIPPING = 500;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const money = (n) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = (id) => PRODUCTS.find((p) => p.id === id);

  /* ---------------------------------------------------------------------
   * Product artwork — simple, editorial SVG still-lifes per product shape
   * ------------------------------------------------------------------- */
  const WOOD = "#8d6239";
  function art(product, colorIndex = 0) {
    const c = product.colors[colorIndex] || product.colors[0];
    const b = c.body;
    const a = c.accent;
    const shapes = {
      cave: `
        <path d="M90 300 Q90 120 200 120 Q310 120 310 300Z" fill="${b}"/>
        <path d="M140 300 Q140 190 200 190 Q260 190 260 300Z" fill="#2a241f"/>
        <ellipse cx="182" cy="262" rx="7" ry="8" fill="#d8b46a"/><ellipse cx="218" cy="262" rx="7" ry="8" fill="#d8b46a"/>
        <ellipse cx="182" cy="263" rx="2" ry="6" fill="#1a1612"/><ellipse cx="218" cy="263" rx="2" ry="6" fill="#1a1612"/>
        <rect x="80" y="298" width="240" height="12" fill="${a}"/>
        <rect x="98" y="310" width="7" height="22" fill="${a}"/><rect x="295" y="310" width="7" height="22" fill="${a}"/>`,
      tower: `
        <rect x="150" y="80" width="14" height="250" fill="${a}"/><rect x="236" y="120" width="14" height="210" fill="${a}"/>
        <g stroke="#c9b28d" stroke-width="2" opacity=".7">${Array.from({ length: 14 }, (_, i) => `<path d="M150 ${150 + i * 12} h14 M236 ${170 + i * 10} h14"/>`).join("")}</g>
        <rect x="110" y="320" width="180" height="14" fill="${b}"/>
        <rect x="120" y="230" width="90" height="12" fill="${b}"/>
        <rect x="200" y="160" width="100" height="12" fill="${b}"/>
        <path d="M110 92 Q110 66 157 66 Q204 66 204 92Z" fill="${b}"/><rect x="108" y="90" width="98" height="10" fill="${b}"/>`,
      nest: `
        <ellipse cx="200" cy="270" rx="140" ry="58" fill="${a}"/>
        <ellipse cx="200" cy="258" rx="132" ry="50" fill="${b}"/>
        <ellipse cx="200" cy="262" rx="82" ry="26" fill="${a}" opacity=".55"/>
        <path d="M80 250 Q200 214 320 250" stroke="#fff" stroke-opacity=".25" stroke-width="3" fill="none"/>`,
      arc: `
        <path d="M70 230 Q200 340 330 230" stroke="${a}" stroke-width="16" fill="none" stroke-linecap="round"/>
        <path d="M92 222 Q200 312 308 222 L300 210 Q200 290 100 210Z" fill="${b}"/>
        <g fill="#8a6440" opacity=".45">${Array.from({ length: 48 }, (_, i) => { const t = ((i * 0.618) % 1); const x = 104 + t * 192; const y = 214 + 76 * (1 - Math.pow((x - 200) / 104, 2)) * 0.9 + ((i * 7) % 9); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.5"/>`; }).join("")}</g>`,
      bowls: `
        <rect x="90" y="230" width="220" height="16" fill="${a}"/>
        <rect x="104" y="246" width="10" height="70" fill="${a}"/><rect x="286" y="246" width="10" height="70" fill="${a}"/>
        <path d="M108 230 Q108 196 150 196 Q192 196 192 230Z" fill="${b}"/>
        <path d="M208 230 Q208 196 250 196 Q292 196 292 230Z" fill="${b}"/>
        <ellipse cx="150" cy="198" rx="42" ry="6" fill="#000" opacity=".12"/><ellipse cx="250" cy="198" rx="42" ry="6" fill="#000" opacity=".12"/>`,
      shelf: `
        <rect x="40" y="60" width="320" height="200" fill="#d9ccb9"/>
        <rect x="56" y="76" width="140" height="168" fill="#f4efe6"/><rect x="204" y="76" width="140" height="168" fill="#f4efe6"/>
        <rect x="100" y="270" width="200" height="18" fill="${b}"/>
        <rect x="110" y="258" width="180" height="12" fill="${a}"/>
        <path d="M150 258 Q150 220 186 222 Q200 200 214 222 Q250 220 250 258Z" fill="#2a241f"/>
        <path d="M188 222 l-6 -16 l14 10 M212 222 l6 -16 l-14 10" fill="#2a241f"/>`,
      sofa: `
        <rect x="70" y="170" width="260" height="90" rx="22" fill="${b}"/>
        <rect x="60" y="200" width="46" height="90" rx="18" fill="${b}"/><rect x="294" y="200" width="46" height="90" rx="18" fill="${b}"/>
        <rect x="104" y="236" width="192" height="50" rx="12" fill="${b}" stroke="#000" stroke-opacity=".08" stroke-width="2"/>
        <rect x="70" y="288" width="260" height="10" fill="${a}"/>
        <rect x="84" y="298" width="8" height="24" fill="${a}"/><rect x="308" y="298" width="8" height="24" fill="${a}"/>`,
      tunnel: `
        <path d="M60 290 Q60 180 200 180 Q340 180 340 290Z" fill="${b}"/>
        <path d="M60 290 Q60 220 96 220 Q132 220 132 290Z" fill="${a}"/>
        <circle cx="236" cy="224" r="22" fill="${a}"/>
        <ellipse cx="228" cy="226" ry="5" fill="#d8b46a"/><ellipse cx="244" cy="226" ry="5" fill="#d8b46a"/>
        <g stroke="#000" stroke-opacity=".08" stroke-width="2" fill="none"><path d="M160 186 Q150 240 160 290"/><path d="M290 200 Q300 240 296 290"/></g>`,
      leash: `
        <circle cx="200" cy="170" r="70" fill="none" stroke="${b}" stroke-width="18"/>
        <rect x="186" y="232" width="28" height="18" fill="${a}"/>
        <path d="M214 240 C 290 250, 300 300, 250 320 S 140 330, 120 300" fill="none" stroke="${b}" stroke-width="12" stroke-linecap="round"/>
        <circle cx="120" cy="300" r="10" fill="none" stroke="${a}" stroke-width="5"/>
        <circle cx="200" cy="100" r="6" fill="${a}"/>`,
      pillar: `
        <rect x="170" y="70" width="60" height="240" fill="#c6a57a"/>
        <g stroke="#a8875c" stroke-width="2">${Array.from({ length: 30 }, (_, i) => `<path d="M170 ${76 + i * 8} h60"/>`).join("")}</g>
        <rect x="120" y="308" width="160" height="28" fill="${b}"/>
        <rect x="120" y="308" width="160" height="5" fill="${a}" opacity=".5"/>
        <rect x="160" y="60" width="80" height="12" fill="${b}"/>`
    };
    return `<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(product.name)} in ${esc(c.name)}">
      <rect width="400" height="400" fill="var(--art-bg, #ece4d8)"/>
      <rect y="330" width="400" height="70" fill="#000" opacity=".04"/>
      <ellipse cx="200" cy="334" rx="150" ry="10" fill="#000" opacity=".08"/>
      ${shapes[product.shape] || ""}
    </svg>`;
  }
  // Exposed for future reuse (e.g. a product page).
  window.PEEKABOO_ART = art;

  /* ---------------------------------------------------------------------
   * Catalogue: filtering, sorting, search
   * ------------------------------------------------------------------- */
  const state = { pet: "all", instinct: "all", sort: "featured", query: "" };
  const grid = $("[data-product-grid]");
  const countEl = $("[data-result-count]");
  const emptyEl = $("[data-empty]");
  const cardColor = {}; // selected swatch index per product card

  function filtered() {
    const q = state.query.trim().toLowerCase();
    let list = PRODUCTS.filter(
      (p) =>
        (state.pet === "all" || p.pets.includes(state.pet)) &&
        (state.instinct === "all" || p.instinct === state.instinct) &&
        (!q || [p.name, p.subtitle, p.instinct, p.description].join(" ").toLowerCase().includes(q))
    );
    const sorters = {
      "price-asc": (x, y) => x.price - y.price,
      "price-desc": (x, y) => y.price - x.price,
      name: (x, y) => x.name.localeCompare(y.name)
    };
    if (sorters[state.sort]) list = [...list].sort(sorters[state.sort]);
    return list;
  }

  function cardHTML(p) {
    const ci = cardColor[p.id] || 0;
    return `
      <article class="product-card" data-id="${p.id}">
        <button class="product-media" data-quick-view="${p.id}" aria-label="Quick view ${esc(p.name)}">
          ${p.badge ? `<span class="product-badge">${esc(p.badge)}</span>` : ""}
          <span class="product-art">${art(p, ci)}</span>
          <span class="quick-label">Quick view</span>
        </button>
        <div class="product-info">
          <div class="product-row">
            <h3 class="product-name">${esc(p.name)}</h3>
            <span class="product-price">${p.sizes.length > 1 ? "from " : ""}${money(p.price)}</span>
          </div>
          <p class="product-sub">${esc(p.subtitle)}</p>
          <div class="product-row">
            <div class="swatches" role="radiogroup" aria-label="Colour for ${esc(p.name)}">
              ${p.colors
                .map(
                  (c, i) =>
                    `<button class="swatch${i === ci ? " is-active" : ""}" role="radio" aria-checked="${i === ci}" aria-label="${esc(c.name)}" title="${esc(c.name)}" style="--sw:${c.body};--sw2:${c.accent}" data-swatch="${i}"></button>`
                )
                .join("")}
            </div>
            <span class="instinct-tag">${esc(p.instinct)}</span>
          </div>
          <button class="btn btn-outline btn-block add-btn" data-add="${p.id}">Add to bag</button>
        </div>
      </article>`;
  }

  function renderGrid() {
    const list = filtered();
    grid.innerHTML = list.map(cardHTML).join("");
    countEl.textContent = `${list.length} ${list.length === 1 ? "piece" : "pieces"}`;
    emptyEl.hidden = list.length > 0;
  }

  function setChip(groupAttr, value) {
    $$(`[${groupAttr}]`).forEach((b) => {
      const on = b.getAttribute(groupAttr) === value;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }

  function setPet(v) { state.pet = v; setChip("data-pet", v); renderGrid(); }
  function setInstinct(v) { state.instinct = v; setChip("data-instinct-filter", v); renderGrid(); }

  $$("[data-pet]").forEach((b) => b.addEventListener("click", () => setPet(b.dataset.pet)));
  $$("[data-instinct-filter]").forEach((b) => b.addEventListener("click", () => setInstinct(b.dataset.instinctFilter)));
  $$("[data-filter-instinct]").forEach((b) =>
    b.addEventListener("click", () => {
      setInstinct(b.dataset.filterInstinct);
      $("#shop").scrollIntoView({ behavior: "smooth" });
    })
  );
  $$("[data-footer-pet]").forEach((a) => a.addEventListener("click", () => setPet(a.dataset.footerPet)));
  $("#sort-select").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
  $("[data-reset-filters]").addEventListener("click", () => {
    state.query = "";
    $("#search-input").value = "";
    state.pet = "all"; setChip("data-pet", "all");
    setInstinct("all");
  });

  grid.addEventListener("click", (e) => {
    const sw = e.target.closest("[data-swatch]");
    if (sw) {
      const card = sw.closest(".product-card");
      const p = byId(card.dataset.id);
      const i = Number(sw.dataset.swatch);
      cardColor[p.id] = i;
      $(".product-art", card).innerHTML = art(p, i);
      $$(".swatch", card).forEach((s, j) => {
        s.classList.toggle("is-active", j === i);
        s.setAttribute("aria-checked", String(j === i));
      });
      return;
    }
    const add = e.target.closest("[data-add]");
    if (add) {
      const p = byId(add.dataset.add);
      addToCart(p.id, cardColor[p.id] || 0, 0, 1);
      return;
    }
    const qv = e.target.closest("[data-quick-view]");
    if (qv) openQuickView(qv.dataset.quickView);
  });

  /* Search */
  const searchBar = $(".search-bar");
  const searchInput = $("#search-input");
  $(".search-toggle").addEventListener("click", () => {
    searchBar.hidden = !searchBar.hidden;
    if (!searchBar.hidden) searchInput.focus();
  });
  let searchTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = searchInput.value;
      renderGrid();
      if (state.query) $("#shop").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  });
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { searchBar.hidden = true; $(".search-toggle").focus(); }
  });

  /* ---------------------------------------------------------------------
   * Quick view dialog
   * ------------------------------------------------------------------- */
  const dialog = $("#quick-view");
  const qvBody = $("[data-qv-body]");

  function openQuickView(id) {
    const p = byId(id);
    if (!p) return;
    const sel = { color: cardColor[p.id] || 0, size: 0, qty: 1 };

    const render = () => {
      qvBody.innerHTML = `
        <div class="qv-media">${art(p, sel.color)}</div>
        <div class="qv-info">
          <p class="eyebrow">${esc(p.instinct)} · for ${p.pets.map((x) => x + "s").join(" & ")}</p>
          <h2 id="qv-title">${esc(p.name)}</h2>
          <p class="qv-sub">${esc(p.subtitle)}</p>
          <p class="qv-price">${money(priceFor(p, sel.size))}</p>
          <p class="qv-desc">${esc(p.description)}</p>

          <fieldset class="qv-field">
            <legend>Colour — <span>${esc(p.colors[sel.color].name)}</span></legend>
            <div class="swatches swatches-lg">
              ${p.colors.map((c, i) => `<button type="button" class="swatch${i === sel.color ? " is-active" : ""}" aria-pressed="${i === sel.color}" aria-label="${esc(c.name)}" style="--sw:${c.body};--sw2:${c.accent}" data-qv-color="${i}"></button>`).join("")}
            </div>
          </fieldset>

          ${p.sizes.length > 1 ? `
          <fieldset class="qv-field">
            <legend>Size</legend>
            <div class="size-group">
              ${p.sizes.map((s, i) => `<button type="button" class="size-btn${i === sel.size ? " is-active" : ""}" aria-pressed="${i === sel.size}" data-qv-size="${i}">${esc(s)}</button>`).join("")}
            </div>
          </fieldset>` : ""}

          <div class="qv-actions">
            <div class="qty" aria-label="Quantity">
              <button type="button" data-qv-qty="-1" aria-label="Decrease quantity">−</button>
              <span>${sel.qty}</span>
              <button type="button" data-qv-qty="1" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn-primary" data-qv-add>Add to bag — ${money(priceFor(p, sel.size) * sel.qty)}</button>
          </div>

          <details class="qv-details" open>
            <summary>Details</summary>
            <ul>${p.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
          </details>
        </div>`;
    };

    qvBody.onclick = (e) => {
      const t = e.target.closest("button");
      if (!t) return;
      if (t.dataset.qvColor) sel.color = Number(t.dataset.qvColor);
      else if (t.dataset.qvSize) sel.size = Number(t.dataset.qvSize);
      else if (t.dataset.qvQty) sel.qty = Math.max(1, Math.min(10, sel.qty + Number(t.dataset.qvQty)));
      else if (t.hasAttribute("data-qv-add")) {
        addToCart(p.id, sel.color, sel.size, sel.qty);
        dialog.close();
        return;
      } else return;
      render();
    };

    render();
    dialog.showModal();
  }

  $("[data-close-dialog]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

  // Larger sizes step the price up ~18% per tier.
  function priceFor(p, sizeIndex) {
    return Math.round((p.price * Math.pow(1.18, sizeIndex || 0)) / 5) * 5;
  }

  /* ---------------------------------------------------------------------
   * Cart
   * ------------------------------------------------------------------- */
  let cart = loadCart();

  function loadCart() {
    try {
      const raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(raw) ? raw.filter((l) => byId(l.id)) : [];
    } catch { return []; }
  }
  function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { /* storage unavailable */ }
  }
  const lineKey = (l) => `${l.id}|${l.color}|${l.size}`;

  function addToCart(id, color, size, qty) {
    const key = `${id}|${color}|${size}`;
    const existing = cart.find((l) => lineKey(l) === key);
    if (existing) existing.qty = Math.min(10, existing.qty + qty);
    else cart.push({ id, color, size, qty });
    saveCart();
    renderCart();
    const p = byId(id);
    toast(`${p.name} — added`);
    bumpCount();
  }

  const drawer = $("#cart-drawer");
  const scrim = $("[data-cart-scrim]");
  let lastFocus = null;

  function openCart() {
    lastFocus = document.activeElement;
    scrim.hidden = false;
    requestAnimationFrame(() => {
      drawer.classList.add("is-open");
      scrim.classList.add("is-open");
    });
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    drawer.focus();
  }
  function closeCart() {
    drawer.classList.remove("is-open");
    scrim.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    setTimeout(() => (scrim.hidden = true), 300);
    if (lastFocus) lastFocus.focus();
  }

  $(".cart-toggle").addEventListener("click", openCart);
  scrim.addEventListener("click", closeCart);
  $$("[data-cart-close]").forEach((b) => b.addEventListener("click", closeCart));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeCart();
  });

  function renderCart() {
    const items = $("[data-cart-items]");
    const count = cart.reduce((n, l) => n + l.qty, 0);
    const subtotal = cart.reduce((s, l) => s + priceFor(byId(l.id), l.size) * l.qty, 0);

    const badge = $("[data-cart-count]");
    badge.textContent = count;
    badge.hidden = count === 0;
    $(".cart-toggle").setAttribute("aria-label", `Open bag, ${count} ${count === 1 ? "item" : "items"}`);

    $("[data-cart-empty]").hidden = cart.length > 0;
    $("[data-cart-foot]").hidden = cart.length === 0;
    $("[data-cart-subtotal]").textContent = money(subtotal);

    const ship = $("[data-cart-shipping]");
    if (cart.length) {
      const left = Math.max(0, FREE_SHIPPING - subtotal);
      const pct = Math.min(100, (subtotal / FREE_SHIPPING) * 100);
      ship.innerHTML = `
        <p>${left > 0 ? `<strong>${money(left)}</strong> to complimentary delivery.` : "Complimentary delivery <strong>unlocked</strong>."}</p>
        <div class="ship-bar"><span style="width:${pct}%"></span></div>`;
      ship.hidden = false;
    } else ship.hidden = true;

    items.innerHTML = cart
      .map((l) => {
        const p = byId(l.id);
        const unit = priceFor(p, l.size);
        return `
        <li class="cart-item" data-key="${esc(lineKey(l))}">
          <div class="cart-thumb">${art(p, l.color)}</div>
          <div class="cart-meta">
            <div class="product-row"><strong>${esc(p.name)}</strong><span>${money(unit * l.qty)}</span></div>
            <p>${esc(p.colors[l.color].name)}${p.sizes.length > 1 ? " · " + esc(p.sizes[l.size]) : ""}</p>
            <div class="product-row">
              <div class="qty qty-sm">
                <button data-line-qty="-1" aria-label="Decrease quantity of ${esc(p.name)}">−</button>
                <span>${l.qty}</span>
                <button data-line-qty="1" aria-label="Increase quantity of ${esc(p.name)}">+</button>
              </div>
              <button class="text-btn" data-line-remove>Remove</button>
            </div>
          </div>
        </li>`;
      })
      .join("");
  }

  $("[data-cart-items]").addEventListener("click", (e) => {
    const li = e.target.closest(".cart-item");
    if (!li) return;
    const line = cart.find((l) => lineKey(l) === li.dataset.key);
    if (!line) return;
    const q = e.target.closest("[data-line-qty]");
    if (q) {
      line.qty += Number(q.dataset.lineQty);
      if (line.qty < 1) cart = cart.filter((l) => l !== line);
      line.qty = Math.min(10, line.qty);
    } else if (e.target.closest("[data-line-remove]")) {
      cart = cart.filter((l) => l !== line);
    } else return;
    saveCart();
    renderCart();
  });

  $("[data-checkout]").addEventListener("click", () => {
    toast("Checkout opens soon. Your bag is saved.");
  });

  function bumpCount() {
    const el = $("[data-cart-count]");
    el.classList.remove("bump");
    void el.offsetWidth;
    el.classList.add("bump");
  }

  /* ---------------------------------------------------------------------
   * UI chrome
   * ------------------------------------------------------------------- */
  const toastEl = $("[data-toast]");
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2600);
  }

  // Mobile nav
  const menuBtn = $(".menu-toggle");
  const mobileNav = $("#mobile-nav");
  menuBtn.addEventListener("click", () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  $$("a", mobileNav).forEach((a) =>
    a.addEventListener("click", () => {
      mobileNav.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
    })
  );

  // Header shadow on scroll
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Newsletter
  const form = $(".newsletter-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.email;
    const msg = $(".form-msg", form);
    if (!input.checkValidity() || !input.value) {
      msg.textContent = "Enter a valid email.";
      msg.className = "form-msg is-error";
      input.focus();
      return;
    }
    msg.textContent = "Welcome. Your code is on its way.";
    msg.className = "form-msg is-ok";
    form.reset();
  });

  // Reveal on scroll
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    $$(".section-head, .instinct-card, .craft-copy, .voice, .journal-card").forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  $("[data-year]").textContent = new Date().getFullYear();

  renderGrid();
  renderCart();
})();
