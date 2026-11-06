/* PEEKABOO product catalogue — launch collection.
 * Source: PEEKABOO Product Handoff v2 (Nov 2026). Prices and specs are
 * proposed targets until the factory sample is tested.
 *
 * Fields
 *   id           used in the product page URL (perch.html, glide.html)
 *   pets         ["cat"] or ["dog"]: decides the Shop section
 *   price        retail price (USD)
 *   preorder     { price, label, url }. url = Kickstarter reservation page;
 *                while empty, "Reserve" collects an email for the launch list
 *   image        default photo; a variant's own image overrides it
 *   shape        drawing used while a product has no photo (see app.js)
 *   variants     colourways: sku, name, swatch [main, accent], image
 */
window.PEEKABOO_PRODUCTS = [
  {
    id: "perch",
    page: "perch.html",
    name: "PERCH",
    category: "Desk-mounted cat bed",
    pets: ["cat"],
    tagline: "Close to you. Clear of your work.",
    price: 189,
    preorder: { price: 149, label: "Kickstarter early bird", url: "" },
    image: "assets/img/products/perch-oak.jpg",
    imagePosition: "4% 50%",
    shape: "nest",
    short:
      "A sculpted bent-oak cat bed that mounts to your desk, giving your cat a place of its own beside you while your workspace stays clear.",
    long: [
      "PERCH brings your cat beside you, not onto your keyboard. Designed for city homes where every surface counts, it turns the edge of your desk into a dedicated resting place.",
      "The shell is formed from steam-bent oak veneer and finished in natural oil to reveal the grain. The front opening is lined in hand-stitched cognac vegetable-tanned leather, which softens the edge and develops a rich patina over time. Inside, a deep cream bouclé cushion provides warmth and support, and its cover lifts out for washing.",
      "PERCH is held by a brushed stainless-steel arm that swivels to place the bed to your left, to your right or behind you, on a height-adjustable post. The tool-free clamp fits desks 1 to 7 cm thick, with leather-lined jaws that protect the surface.",
      "Elevated resting places are one of the core environmental needs set out in the AAFP and ISFM Feline Environmental Needs Guidelines. PERCH meets that need and keeps your cat where it most wants to be: near you."
    ],
    features: [
      { title: "Tool-free clamp", text: "Fits desk tops 1 to 7 cm thick. Leather pads protect the desk." },
      { title: "Swivel arm", text: "A brushed stainless-steel arm swivels to place the bed to your left, to your right or behind you, on a height-adjustable post." },
      { title: "Leather-lined opening", text: "A low front opening lined in hand-stitched leather, so your cat can rest its chin and watch you." },
      { title: "Bouclé cushion", text: "Deep cream bouclé over a 4 cm foam pad. The cover lifts out and is machine-washable." },
      { title: "Wood and leather", text: "Steam-bent wood shell with a vegetable-tanned leather rim, on a brushed stainless-steel arm rated for cats up to 9 kg." }
    ],
    science: {
      text: "Elevated resting places are listed among the five pillars of a healthy feline environment in the AAFP and ISFM Feline Environmental Needs Guidelines (Ellis et al., Journal of Feline Medicine and Surgery, 2013).",
      url: "https://journals.sagepub.com/doi/10.1177/1098612X13477537"
    },
    specs: [
      ["Bed size", "48 × 38 cm oval, 11 cm deep"],
      ["Peek rim height", "5 cm at the front"],
      ["Desk thickness", "1–7 cm"],
      ["Arm reach", "Up to 30 cm from the desk edge"],
      ["Height", "Adjustable 0–15 cm above the desk top"],
      ["Max cat weight", "9 kg (test target 18 kg)"],
      ["Shell", "Steam-bent wood: oak, walnut or ash, oil finish"],
      ["Rim and clamp pads", "Vegetable-tanned full-grain leather"],
      ["Cushion", "Cream bouclé over foam, removable, washable cover"],
      ["Arm", "Brushed stainless steel, swivel joint, height-adjustable post"],
      ["Weight", "About 3.2 kg"],
      ["Care", "Wipe wood dry, condition leather twice a year, machine-wash cushion cover cold"],
      ["In the box", "Bed shell, cushion, arm, clamp, 2 desk pads"]
    ],
    variants: [
      { sku: "PKB-PE-OAK", name: "Oak · Cognac", swatch: ["#c49a6c", "#a0643a"], image: "assets/img/products/perch-oak.jpg" },
      { sku: "PKB-PE-WAL", name: "Walnut · Black", swatch: ["#5e4130", "#1f1b17"], image: "" },
      { sku: "PKB-PE-ASH", name: "Ash · Natural", swatch: ["#e4d6bf", "#d2b48c"], image: "" }
    ]
  },
  {
    id: "glide",
    page: "glide.html",
    name: "GLIDE",
    category: "Hands-free dog leash",
    pets: ["dog"],
    tagline: "Both hands free for coffee, keys and crossings.",
    price: 129,
    preorder: { price: 99, label: "Kickstarter early bird", url: "" },
    image: "",
    shape: "leash",
    short:
      "A full-grain leather hands-free leash you wear cross-body or at the waist, with a magnetic clip that locks on with one hand.",
    long: [
      "City walks are full of small tasks: a coffee, a phone, a door, a crosswalk. GLIDE takes the leash out of your hands. Cut from vegetable-tanned full-grain leather with hand-finished edges and saddle stitching, it gets better with every walk. Wear it cross-body for errands and slow walks, around the waist for runs, or unclip it into a classic handheld lead or tie it to a café table.",
      "A magnetic auto-lock clip snaps onto the collar with one hand and will not open until you slide it. A 20 cm bungee section wrapped in waxed cotton softens sudden pulls, and a padded traffic handle near the clip gives you close control at kerbs and in crowds. Reflective thread runs through the stitching for night walks, and a small leather pouch holds waste bags and keys."
    ],
    features: [
      { title: "4 ways to wear", text: "Cross-body, waist, handheld or hitched to a table or post." },
      { title: "Magnetic auto-lock clip", text: "Attach with one hand. Slide to release, so it never opens by accident." },
      { title: "Bungee section", text: "20 cm of shock absorption takes the jolt out of sudden pulls." },
      { title: "Traffic handle", text: "A padded grip near the clip for close control at crossings." },
      { title: "Leather that ages well", text: "Vegetable-tanned full-grain leather, saddle-stitched with reflective thread. A leather pouch holds bags and keys." }
    ],
    specs: [
      ["Body strap", "Adjustable 90–140 cm, magnetic buckle"],
      ["Lead length", "1.2–1.8 m (bungee relaxed)"],
      ["Strap", "20 mm vegetable-tanned full-grain leather, 3.5 mm thick, saddle-stitched with reflective thread"],
      ["Hardware", "Solid brass or gunmetal-finish steel, magnetic auto-lock clip"],
      ["Bungee", "Waxed-cotton cover"],
      ["Dog weight", "Up to 35 kg (pending clip test)"],
      ["Weight", "About 420 g"],
      ["Pouch", "12 × 8 cm leather, snap, detachable"],
      ["Care", "Wipe clean, condition leather every few months, keep out of salt water"]
    ],
    variants: [
      { sku: "PKB-GL-COG", name: "Cognac · Brass", swatch: ["#a0643a", "#b8925a"], image: "" },
      { sku: "PKB-GL-BLA", name: "Black · Gunmetal", swatch: ["#2a2622", "#6e6c69"], image: "" },
      { sku: "PKB-GL-NAT", name: "Natural · Brass", swatch: ["#d9b48a", "#b8925a"], image: "" }
    ]
  }
];
