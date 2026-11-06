# PEEKABOO

Designed for city pets. The best pet products and knowledge, to elevate the life you share with your pet.

A static, dependency-free site. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Pages
| Page | File | Content |
|---|---|---|
| Home | `index.html` | 1. Mission · 2. Launch collection (horizontal rail) · 3. Instincts vs. city life (horizontal rail) |
| Shop | `shop.html` | Cat and Dog sections |
| PERCH | `perch.html` | Product page: desk-mounted cat bed |
| GLIDE | `glide.html` | Product page: hands-free dog leash |
| Library | `library.html` | Essential knowledge, by topic (placeholders) |
| Charity | `charity.html` | Placeholder |

## Products
All product data lives in `assets/js/products.js` (source: PEEKABOO Product Handoff v2).

- **Colourways:** each variant has a SKU, swatch colours and an optional photo. Switching swatches swaps the image and the SKU.
- **Photos:** add a file to `assets/img/products/` and set the variant's `image`. Without one, the product photo (or a drawing) is shown with a note.
- **Reserve:** while `preorder.url` is empty, "Reserve" opens an email form for the launch list. Set it to the Kickstarter reservation URL to link out instead.
- **Launch list backend:** not connected yet. Wire `submitReservation()` in `assets/js/app.js` to your email provider.
- **New product page:** copy `perch.html`, change `<title>`, the meta description and `data-product-page`.

## Editing
- **Navigation, header, footer, reserve dialog:** `assets/js/layout.js` (shared by every page).
- **Styles:** `assets/css/styles.css`. Colour tokens are at the top.
- **Behaviour:** `assets/js/app.js`.

## Logo
- `assets/img/peekaboo-logo.svg`: arched lockup
- `assets/img/peekaboo-mark.svg`: cat mark
- `assets/img/favicon.svg`: browser icon
