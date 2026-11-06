/* PEEKABOO shared layout.
 * Header, footer, bag drawer and quick-view dialog live here once and are
 * injected into every page. Edit navigation in NAV below.
 * Each page sets <body data-page="home|shop|library|charity">.
 */
(() => {
  const NAV = [
    { id: "shop", label: "Shop", href: "shop.html" },
    { id: "library", label: "Library", href: "library.html" },
    { id: "charity", label: "Charity", href: "charity.html" }
  ];
  const page = document.body.dataset.page || "home";
  const links = NAV.map(
    (n) => `<a href="${n.href}"${n.id === page ? ' aria-current="page"' : ""}>${n.label}</a>`
  ).join("");

  const sprite = `
  <svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
    <symbol id="peek-cat" viewBox="-3 -3 132 58">
      <g stroke-linejoin="round">
        <path d="M-1 62 L22.5 2 L40.5 25.5 Q63 18.5 85.5 25.5 L103.5 2 L127 62Z" fill="#fff" stroke="#1f1b17" stroke-width="3.2"/>
        <path d="M18 31 L24.5 13 L35.5 27.5 Q26 28.5 18 31Z" fill="#efc8b2"/>
        <path d="M108 31 L101.5 13 L90.5 27.5 Q100 28.5 108 31Z" fill="#efc8b2"/>
        <circle cx="38" cy="56" r="16.5" fill="#fff" stroke="#1f1b17" stroke-width="2.6"/>
        <circle cx="40.6" cy="57" r="13.4" fill="#1f1b17"/>
        <circle cx="88" cy="56" r="16.5" fill="#fff" stroke="#1f1b17" stroke-width="2.6"/>
        <circle cx="85.4" cy="57" r="13.4" fill="#1f1b17"/>
        <path d="M57.5 50.5 H68.5 L65.5 55 H60.5Z" fill="#e2621b"/>
      </g>
    </symbol>
  </svg>`;

  const header = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="announce" role="note">Complimentary delivery over $500</div>
  <header class="site-header">
    <div class="container header-inner">
      <button class="icon-btn menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
      </button>
      <a href="index.html" class="logo" aria-label="PEEKABOO home">
        <svg class="logo-cat" viewBox="-3 -3 132 58" aria-hidden="true"><use href="#peek-cat"/></svg>
        <span class="logo-word">PEEKABOO</span>
      </a>
      <nav class="main-nav" aria-label="Primary">${links}</nav>
      <div class="header-actions">
        <button class="icon-btn cart-toggle" aria-label="Open bag" aria-controls="cart-drawer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1.2 12H6.2z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
          <span class="cart-count" data-cart-count hidden>0</span>
        </button>
      </div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile" hidden>
      <a href="index.html"${page === "home" ? ' aria-current="page"' : ""}>Home</a>${links}
    </nav>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo-arch" aria-label="PEEKABOO home">
          <svg viewBox="0 0 320 170" aria-hidden="true">
            <path id="footer-arc" d="M36 108 Q160 4 284 108" fill="none"/>
            <text text-anchor="middle"><textPath href="#footer-arc" startOffset="50%">PEEKABOO</textPath></text>
            <use href="#peek-cat" x="67" y="91" width="186" height="82"/>
          </svg>
        </a>
        <p>Designed for city pets.</p>
      </div>
      <div>
        <h4>Shop</h4>
        <ul>
          <li><a href="shop.html#cat">Cat</a></li>
          <li><a href="shop.html#dog">Dog</a></li>
        </ul>
      </div>
      <div>
        <h4>Learn</h4>
        <ul>
          <li><a href="library.html">Library</a></li>
          <li><a href="index.html#instincts">Instincts</a></li>
        </ul>
      </div>
      <div>
        <h4>Studio</h4>
        <ul>
          <li><a href="charity.html">Charity</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-base">
      <span>© ${new Date().getFullYear()} PEEKABOO</span>
      <span>Designed for city pets.</span>
    </div>
  </footer>

  <dialog class="quick-view" id="quick-view" aria-labelledby="qv-title">
    <button class="icon-btn qv-close" aria-label="Close" data-close-dialog>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
    </button>
    <div class="qv-body" data-qv-body></div>
  </dialog>

  <div class="drawer-scrim" data-cart-scrim hidden></div>
  <aside class="cart-drawer" id="cart-drawer" aria-label="Shopping bag" aria-hidden="true" tabindex="-1">
    <div class="cart-head">
      <h2>Your bag</h2>
      <button class="icon-btn" aria-label="Close bag" data-cart-close>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
      </button>
    </div>
    <div class="cart-shipping" data-cart-shipping></div>
    <ul class="cart-items" data-cart-items></ul>
    <div class="cart-empty" data-cart-empty>
      <p>Your bag is empty.</p>
      <a href="shop.html" class="btn btn-primary">Shop</a>
    </div>
    <div class="cart-foot" data-cart-foot hidden>
      <div class="cart-row"><span>Subtotal</span><strong data-cart-subtotal>$0</strong></div>
      <p class="cart-note">Taxes calculated at checkout.</p>
      <button class="btn btn-primary btn-block" data-checkout>Checkout</button>
    </div>
  </aside>

  <div class="toast" role="status" aria-live="polite" data-toast></div>`;

  document.body.insertAdjacentHTML("afterbegin", sprite + header);
  document.body.insertAdjacentHTML("beforeend", footer);
})();
