# PEEKABOO

Designed for city pets. The best pet products and knowledge, to elevate the life you share with your pet.

A static, dependency-free site. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Pages
| Page | File | Content |
|---|---|---|
| Home | `index.html` | 1. Mission · 2. Featured products (horizontal rail) · 3. Instincts vs. city life (horizontal rail) |
| Shop | `shop.html` | Cat and Dog sections |
| Library | `library.html` | Essential knowledge, by topic (placeholders) |
| Charity | `charity.html` | Placeholder |

## Editing
- **Products:** `assets/js/products.js`. `pets` decides the Shop section, `featured: true` puts it in the home rail.
- **Navigation, header, footer, bag:** `assets/js/layout.js` (shared by every page).
- **Styles:** `assets/css/styles.css`. Colour tokens are at the top.
- **Behaviour (cards, rails, quick view, bag):** `assets/js/app.js`.

## Logo
- `assets/img/peekaboo-logo.svg`: arched lockup
- `assets/img/peekaboo-mark.svg`: cat mark
- `assets/img/favicon.svg`: browser icon

## Next steps
- Replace generated product drawings with photography
- Connect checkout at the `[data-checkout]` button
- Write Library articles and the Charity page
