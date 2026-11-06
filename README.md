# PEEKABOO

Luxury pet furniture and objects, designed with aesthetics and by our pets' instincts:
**hide, perch, scratch, nest**, plus dine and roam.

This is a static, dependency-free storefront. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## What's included
- Editorial home page: hero, instinct philosophy, craft story, testimonials, journal, newsletter
- Product catalogue (`assets/js/products.js`) with filters by pet and instinct, sorting and search
- Colour swatches, quick-view dialog with size, colour and quantity, and tiered size pricing
- Shopping bag drawer that is saved in `localStorage`, with a free-delivery progress bar
- Responsive layout down to phone width, keyboard accessible, respects reduced motion

## Structure
```
index.html
assets/css/styles.css   design tokens, layout, components
assets/js/products.js   catalogue data (edit products here)
assets/js/app.js        rendering, filters, quick view, cart
```

## Next steps
- Replace the generated SVG product art with photography
- Connect checkout (e.g. Shopify Buy Button, Stripe Checkout) at the `[data-checkout]` button
- Wire the newsletter form to your email provider
