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
  <div class="announce" role="note">Launching on Kickstarter · Reserve the early-bird price</div>
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
        <a class="header-cta" href="index.html#launch">Reserve</a>
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
          <li><a href="perch.html">PERCH</a></li>
          <li><a href="glide.html">GLIDE</a></li>
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

  <dialog class="reserve" id="reserve" aria-labelledby="reserve-title">
    <button class="icon-btn reserve-close" aria-label="Close" data-close-dialog>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
    </button>
    <p class="eyebrow">Launch list</p>
    <h2 id="reserve-title" data-reserve-title>Reserve</h2>
    <p class="reserve-sub" data-reserve-sub></p>
    <p class="reserve-copy">Reservations open with our Kickstarter. Leave your email and we will send your early-bird link first.</p>
    <form id="reserve-form" novalidate>
      <input type="hidden" name="product" />
      <input type="hidden" name="sku" />
      <label for="reserve-email" class="visually-hidden">Email</label>
      <input id="reserve-email" type="email" name="email" placeholder="Email" autocomplete="email" required />
      <button type="submit" class="btn btn-primary">Join the list</button>
    </form>
    <p class="reserve-msg" role="status" aria-live="polite" data-reserve-msg></p>
  </dialog>`;

  document.body.insertAdjacentHTML("afterbegin", sprite + header);
  document.body.insertAdjacentHTML("beforeend", footer);
})();
