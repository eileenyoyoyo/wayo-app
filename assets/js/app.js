(() => {
  "use strict";

  const PRODUCTS = window.PEEKABOO_PRODUCTS || [];
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const money = (n) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = (id) => PRODUCTS.find((p) => p.id === id);

  /* ---------------------------------------------------------------------
   * Media: a variant's photo, else the product photo, else a drawing
   * ------------------------------------------------------------------- */
  const imageFor = (p, i) => (p.variants[i] && p.variants[i].image) || p.image || "";

  function drawing(p, i) {
    const [b, a] = p.variants[i].swatch;
    const shapes = {
      nest: `
        <ellipse cx="200" cy="270" rx="140" ry="58" fill="${a}"/>
        <ellipse cx="200" cy="258" rx="132" ry="50" fill="${b}"/>
        <ellipse cx="200" cy="262" rx="82" ry="26" fill="#efe7da"/>`,
      leash: `
        <circle cx="200" cy="170" r="70" fill="none" stroke="${b}" stroke-width="16"/>
        <rect x="187" y="232" width="26" height="16" fill="${a}"/>
        <path d="M213 240 C 290 250, 300 300, 250 320 S 140 330, 120 300" fill="none" stroke="${b}" stroke-width="11" stroke-linecap="round"/>
        <path d="M120 300 l-14 10" stroke="${a}" stroke-width="6" stroke-linecap="round"/>
        <circle cx="200" cy="100" r="6" fill="${a}"/>
        <path d="M150 140 h100" stroke="#efe7da" stroke-width="1.5" stroke-dasharray="4 4" opacity=".7"/>`
    };
    return `<svg class="product-drawing" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(p.name)} in ${esc(p.variants[i].name)}, illustration">
      <rect width="400" height="400" fill="var(--art-bg, #ebe5db)"/>
      <ellipse cx="200" cy="334" rx="150" ry="10" fill="#000" opacity=".07"/>
      ${shapes[p.shape] || ""}
    </svg>`;
  }

  function media(p, i = 0) {
    const src = imageFor(p, i);
    if (src) {
      return `<img class="product-photo" src="${esc(src)}" alt="${esc(p.name)}, ${esc(p.category)}" decoding="async" style="object-position:${esc(p.imagePosition || "50% 50%")}" />`;
    }
    return drawing(p, i);
  }

  function mediaNote(p, i) {
    const v = p.variants[i];
    if (v.image) return "";
    if (p.image) return `Shown in ${p.variants[0].name}. ${v.name} photo to follow.`;
    return "Illustration. Product photography to follow.";
  }

  /* ---------------------------------------------------------------------
   * Shared fragments
   * ------------------------------------------------------------------- */
  const swatches = (p, sel) => `
    <div class="swatches" role="radiogroup" aria-label="Colourway">
      ${p.variants
        .map(
          (v, i) =>
            `<button type="button" class="swatch${i === sel ? " is-active" : ""}" role="radio" aria-checked="${i === sel}" aria-label="${esc(v.name)}" title="${esc(v.name)}" style="--sw:${v.swatch[0]};--sw2:${v.swatch[1]}" data-variant="${i}"></button>`
        )
        .join("")}
    </div>`;

  const price = (p) =>
    p.preorder
      ? `<p class="price"><strong>${money(p.preorder.price)}</strong><span>${esc(p.preorder.label)}</span><span class="price-retail">Retail ${money(p.price)}</span></p>`
      : `<p class="price"><strong>${money(p.price)}</strong></p>`;

  const reserve = (p, cls = "btn btn-primary") => {
    const label = p.preorder ? `Reserve for ${money(p.preorder.price)}` : "Notify me";
    return p.preorder && p.preorder.url
      ? `<a class="${cls}" href="${esc(p.preorder.url)}" target="_blank" rel="noopener">${label}</a>`
      : `<button type="button" class="${cls}" data-reserve="${p.id}">${label}</button>`;
  };

  /* ---------------------------------------------------------------------
   * Home: launch rail (one large slide per product)
   * ------------------------------------------------------------------- */
  $$("[data-launch]").forEach((el) => {
    el.innerHTML = PRODUCTS.map(
      (p) => `
      <article class="slide" data-scope="${p.id}">
        <a class="slide-media" href="${p.page}" aria-label="${esc(p.name)} details" data-media>${media(p, 0)}</a>
        <div class="slide-info">
          <p class="eyebrow">${esc(p.category)}</p>
          <h3>${esc(p.name)}</h3>
          <p class="slide-tagline">${esc(p.tagline)}</p>
          <p class="slide-short">${esc(p.short)}</p>
          ${price(p)}
          <div class="variant-row">${swatches(p, 0)}<span class="variant-name" data-variant-name>${esc(p.variants[0].name)}</span></div>
          <div class="cta-row">
            ${reserve(p)}
            <a class="btn btn-link" href="${p.page}">Details <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </article>`
    ).join("");
  });

  /* ---------------------------------------------------------------------
   * Shop: cards per pet (data-products="cat" | "dog")
   * ------------------------------------------------------------------- */
  $$("[data-products]").forEach((el) => {
    const list = PRODUCTS.filter((p) => p.pets.includes(el.dataset.products));
    el.innerHTML = list
      .map(
        (p) => `
      <article class="product-card" data-scope="${p.id}">
        <a class="product-media" href="${p.page}" aria-label="${esc(p.name)} details">
          ${p.preorder ? `<span class="product-badge">Pre-order</span>` : ""}
          <span class="product-art" data-media>${media(p, 0)}</span>
        </a>
        <div class="product-info">
          <div class="product-row">
            <h3 class="product-name"><a href="${p.page}">${esc(p.name)}</a></h3>
            <span class="product-price">${money(p.preorder ? p.preorder.price : p.price)}</span>
          </div>
          <p class="product-sub">${esc(p.category)} · ${esc(p.tagline)}</p>
          <div class="variant-row">${swatches(p, 0)}<span class="variant-name" data-variant-name>${esc(p.variants[0].name)}</span></div>
          <div class="card-cta">
            ${reserve(p, "btn btn-outline")}
            <a class="btn btn-link" href="${p.page}">Details <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </article>`
      )
      .join("");
    $$(`[data-count="${el.dataset.products}"]`).forEach(
      (c) => (c.textContent = `${list.length} ${list.length === 1 ? "piece" : "pieces"}`)
    );
  });

  /* ---------------------------------------------------------------------
   * Product page: <main data-product-page="perch">
   * ------------------------------------------------------------------- */
  const pageEl = $("[data-product-page]");
  if (pageEl) {
    const p = byId(pageEl.dataset.productPage);
    const pet = p.pets[0];
    pageEl.innerHTML = `
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="shop.html">Shop</a><span>/</span><a href="shop.html#${pet}">${pet === "cat" ? "Cat" : "Dog"}</a><span>/</span><span aria-current="page">${esc(p.name)}</span></nav>
        <div class="pdp" data-scope="${p.id}">
          <div class="pdp-media">
            <div class="pdp-frame" data-media>${media(p, 0)}</div>
            <p class="media-note" data-media-note>${esc(mediaNote(p, 0))}</p>
          </div>
          <div class="pdp-info">
            <p class="eyebrow">${esc(p.category)}</p>
            <h1>${esc(p.name)}</h1>
            <p class="pdp-tagline">${esc(p.tagline)}</p>
            ${price(p)}
            <div class="pdp-variant">
              <p class="pdp-label">Colourway: <span data-variant-name>${esc(p.variants[0].name)}</span></p>
              ${swatches(p, 0)}
              <p class="pdp-sku">SKU <span data-sku>${esc(p.variants[0].sku)}</span></p>
            </div>
            <div class="cta-row">${reserve(p, "btn btn-primary btn-wide")}</div>
            <p class="pdp-short">${esc(p.short)}</p>
          </div>
        </div>

        <section class="pdp-section" aria-labelledby="f-title">
          <h2 id="f-title" class="pdp-h">Features</h2>
          <ol class="features">
            ${p.features.map((f, i) => `<li><span class="card-idx">0${i + 1}</span><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></li>`).join("")}
          </ol>
        </section>

        <section class="pdp-section pdp-story" aria-labelledby="s-title">
          <h2 id="s-title" class="pdp-h">The design</h2>
          <div class="story">${p.long.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
          ${p.science ? `<p class="science"><span class="science-mark" aria-hidden="true"></span><span>${esc(p.science.text)} <a href="${esc(p.science.url)}" target="_blank" rel="noopener">Read the guidelines →</a></span></p>` : ""}
        </section>

        <section class="pdp-section" aria-labelledby="sp-title">
          <h2 id="sp-title" class="pdp-h">Specifications</h2>
          <dl class="specs">${p.specs.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
          <p class="pdp-footnote">Prices and specifications are proposed targets until the factory sample is tested.</p>
        </section>
      </div>`;
  }

  /* Colourway switching, anywhere a [data-scope] holds swatches */
  document.addEventListener("click", (e) => {
    const sw = e.target.closest("[data-scope] [data-variant]");
    if (!sw) return;
    const scope = sw.closest("[data-scope]");
    const p = byId(scope.dataset.scope);
    const i = Number(sw.dataset.variant);
    const m = $("[data-media]", scope);
    if (m) m.innerHTML = media(p, i);
    $$("[data-variant]", scope).forEach((s, j) => {
      s.classList.toggle("is-active", j === i);
      s.setAttribute("aria-checked", String(j === i));
    });
    $$("[data-variant-name]", scope).forEach((n) => (n.textContent = p.variants[i].name));
    $$("[data-sku]", scope).forEach((n) => (n.textContent = p.variants[i].sku));
    $$("[data-media-note]", scope).forEach((n) => (n.textContent = mediaNote(p, i)));
  });

  /* ---------------------------------------------------------------------
   * Reserve: collects an email for the launch list until the Kickstarter
   * reservation URL is set in products.js (preorder.url).
   * No backend yet: connect submitReservation() to your email provider.
   * ------------------------------------------------------------------- */
  const dlg = $("#reserve");
  const form = $("#reserve-form");
  const msg = $("[data-reserve-msg]");

  function submitReservation(data) {
    // TODO: POST data to the launch-list provider (e.g. Mailchimp, Klaviyo, Kit).
    return Promise.resolve(data);
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-reserve]");
    if (!b) return;
    const p = byId(b.dataset.reserve);
    const scope = b.closest("[data-scope]");
    const active = scope ? $("[data-variant].is-active", scope) : null;
    const v = p.variants[active ? Number(active.dataset.variant) : 0];
    $("[data-reserve-title]").textContent = `Reserve ${p.name}`;
    $("[data-reserve-sub]").textContent = `${v.name} · ${money(p.preorder.price)} ${p.preorder.label.toLowerCase()}`;
    form.elements.product.value = p.id;
    form.elements.sku.value = v.sku;
    form.hidden = false;
    msg.textContent = "";
    dlg.showModal();
    form.elements.email.focus();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.elements.email;
    if (!email.value || !email.checkValidity()) {
      msg.textContent = "Enter a valid email.";
      email.focus();
      return;
    }
    submitReservation({ email: email.value, product: form.elements.product.value, sku: form.elements.sku.value }).then(() => {
      form.reset();
      form.hidden = true;
      msg.textContent = "You're on the list. We'll write when reservations open.";
    });
  });
  $$("[data-close-dialog]").forEach((b) => b.addEventListener("click", () => dlg.close()));
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

  /* ---------------------------------------------------------------------
   * Horizontal rails: <div class="rail" id="x"> + buttons data-rail="x" data-dir="1|-1"
   * ------------------------------------------------------------------- */
  $$(".rail").forEach((rail) => {
    const btns = $$(`[data-rail="${rail.id}"]`);
    const step = () => {
      const item = rail.firstElementChild;
      const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
      return item ? item.getBoundingClientRect().width + gap : rail.clientWidth;
    };
    btns.forEach((b) => b.addEventListener("click", () => rail.scrollBy({ left: step() * Number(b.dataset.dir), behavior: "smooth" })));
    const sync = () => {
      const max = rail.scrollWidth - rail.clientWidth - 2;
      btns.forEach((b) => (b.disabled = b.dataset.dir === "-1" ? rail.scrollLeft <= 2 : rail.scrollLeft >= max));
    };
    rail.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
  });

  /* Shop sub-navigation: highlight the pet section in view */
  const subLinks = $$(".subnav a");
  if (subLinks.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        subLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${en.target.id}`));
      }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    $$(".pet-section").forEach((s) => spy.observe(s));
  }

  /* Mobile menu */
  const menuBtn = $(".menu-toggle");
  const mobileNav = $("#mobile-nav");
  menuBtn.addEventListener("click", () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  /* Reveal on scroll */
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    $$(".section-head, .rail-head, .instinct-card, .topic, .pdp-section").forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
