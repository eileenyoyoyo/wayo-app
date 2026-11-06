/* PEEKABOO product catalogue.
 * Each product's artwork is generated as inline SVG from its `shape` and
 * `colors`, so the shop works without photography. Swap `image` in with a
 * real photo URL later and the card will use it instead.
 */
window.PEEKABOO_PRODUCTS = [
  {
    id: "hideaway-cave",
    name: "The Hideaway",
    subtitle: "Cave bed · bouclé & walnut",
    price: 420,
    pets: ["cat", "dog"],
    instinct: "hide",
    shape: "cave",
    badge: "Bestseller",
    colors: [
      { name: "Ivory Bouclé", body: "#f1e9dd", accent: "#8d6239" },
      { name: "Fog", body: "#cfcac2", accent: "#5b4a3c" },
      { name: "Truffle", body: "#7a6556", accent: "#3a2c22" }
    ],
    sizes: ["Small (to 6 kg)", "Large (to 12 kg)"],
    description:
      "An arched, den-like retreat that lets your pet watch the room from a place of total security. The solid walnut base lifts the bed off cool floors; the bouclé shell is removable and machine-washable.",
    details: ["Solid American walnut base", "Removable bouclé cover", "Memory-foam cushion", "W 56 × D 48 × H 44 cm"]
  },
  {
    id: "atelier-tower",
    name: "Atelier Tower",
    subtitle: "Sculptural cat tree · white oak & sisal",
    price: 1180,
    pets: ["cat"],
    instinct: "perch",
    shape: "tower",
    badge: "New",
    colors: [
      { name: "Natural Oak", body: "#d9bf98", accent: "#efe6d8" },
      { name: "Smoked Oak", body: "#6b5442", accent: "#d8cbb8" }
    ],
    sizes: ["Three levels", "Four levels"],
    description:
      "A tower that reads as a piece of architecture. Staggered platforms satisfy the climbing instinct and give every cat in the house its own altitude. Sisal-wrapped posts are replaceable in seconds.",
    details: ["Solid white oak", "Replaceable sisal posts", "Wool felt pads", "Wall anchor included", "H 152 cm (four levels)"]
  },
  {
    id: "dune-nest",
    name: "Dune Nest",
    subtitle: "Bolstered round bed · felted wool",
    price: 290,
    pets: ["dog", "cat"],
    instinct: "nest",
    shape: "nest",
    colors: [
      { name: "Sand", body: "#e4d3ba", accent: "#c7ad8a" },
      { name: "Sage", body: "#b9bea6", accent: "#8e9478" },
      { name: "Clay", body: "#c99a7c", accent: "#a7745a" }
    ],
    sizes: ["S · 60 cm", "M · 80 cm", "L · 100 cm"],
    description:
      "A deep, round bolster that supports the circle-and-curl ritual. Calming for anxious sleepers, with a raised rim that doubles as a chin rest.",
    details: ["Felted New Zealand wool shell", "Recycled-fibre bolster", "Non-slip base", "Machine-washable cover"]
  },
  {
    id: "arc-scratcher",
    name: "Arc Scratcher",
    subtitle: "Lounger & scratcher · cork & ash",
    price: 185,
    pets: ["cat"],
    instinct: "scratch",
    shape: "arc",
    colors: [
      { name: "Cork & Ash", body: "#b88b5e", accent: "#e8dcc8" },
      { name: "Cork & Ebony", body: "#b88b5e", accent: "#2b2622" }
    ],
    sizes: ["One size"],
    description:
      "A rocking curve of natural cork set in a bent-ash cradle — for stretching, scratching and an afternoon nap. Cork is naturally antimicrobial and wonderfully quiet underfoot.",
    details: ["Natural Portuguese cork", "Steam-bent ash frame", "Reversible insert", "L 68 cm"]
  },
  {
    id: "atrium-bowls",
    name: "Atrium Dining Set",
    subtitle: "Raised bowls · stoneware & walnut",
    price: 165,
    pets: ["cat", "dog"],
    instinct: "dine",
    shape: "bowls",
    colors: [
      { name: "Bone Glaze", body: "#efe8dc", accent: "#8d6239" },
      { name: "Charcoal Glaze", body: "#3b3631", accent: "#b98a5a" }
    ],
    sizes: ["Low · for cats", "Tall · for dogs"],
    description:
      "Wide, shallow stoneware bowls set at an ergonomic height — gentler on necks, and kinder to whiskers. Hand-glazed in a small studio, dishwasher-safe.",
    details: ["Food-safe glazed stoneware", "Solid walnut stand", "Dishwasher-safe bowls", "Whisker-friendly 14 cm diameter"]
  },
  {
    id: "lumen-perch",
    name: "Lumen Window Perch",
    subtitle: "Wall-mounted shelf · oak & wool",
    price: 240,
    pets: ["cat"],
    instinct: "perch",
    shape: "shelf",
    colors: [
      { name: "Oak & Oat", body: "#d9bf98", accent: "#efe6d8" },
      { name: "Walnut & Charcoal", body: "#7d5a3c", accent: "#4a4440" }
    ],
    sizes: ["Single", "Set of three"],
    description:
      "A floating sun-spot. Mount one by the window or stagger three to build a vertical path along the wall. Holds up to 15 kg with hidden steel brackets.",
    details: ["Solid oak", "Removable wool pad", "Concealed steel bracket", "W 50 × D 28 cm"]
  },
  {
    id: "maison-dog-bed",
    name: "Maison Sofa Bed",
    subtitle: "Dog sofa · walnut frame & linen",
    price: 960,
    pets: ["dog"],
    instinct: "nest",
    shape: "sofa",
    badge: "Limited",
    colors: [
      { name: "Oat Linen", body: "#e2d6c4", accent: "#7d5a3c" },
      { name: "Moss Velvet", body: "#6f765a", accent: "#4a3526" },
      { name: "Ink Velvet", body: "#2f3440", accent: "#9b7650" }
    ],
    sizes: ["Medium", "Large", "Giant"],
    description:
      "A tailored, low sofa built at your dog's height — with a supportive bolster on three sides for leaning, sprawling and keeping watch over the door.",
    details: ["Kiln-dried walnut frame", "Stain-resistant performance linen", "Orthopaedic foam core", "Removable, washable covers"]
  },
  {
    id: "tunnel-hide",
    name: "Burrow Tunnel",
    subtitle: "Felt play tunnel · merino",
    price: 140,
    pets: ["cat"],
    instinct: "hide",
    shape: "tunnel",
    colors: [
      { name: "Pebble", body: "#bdb4a7", accent: "#2a241f" },
      { name: "Rust", body: "#b46a45", accent: "#2a241f" }
    ],
    sizes: ["One size"],
    description:
      "A soft, collapsible felt tunnel for ambush play and quiet escapes. Two peek-holes let curious faces pop out — peekaboo, literally.",
    details: ["100% merino felt", "Collapses flat for storage", "L 110 cm", "Spot clean"]
  },
  {
    id: "promenade-leash",
    name: "Promenade Lead & Collar",
    subtitle: "Vegetable-tanned leather · brass",
    price: 135,
    pets: ["dog"],
    instinct: "roam",
    shape: "leash",
    colors: [
      { name: "Cognac", body: "#a0643a", accent: "#c9a46a" },
      { name: "Noir", body: "#2a2622", accent: "#c9a46a" }
    ],
    sizes: ["S", "M", "L"],
    description:
      "For the daily wander. Hand-stitched vegetable-tanned leather that softens and darkens with every walk, finished with solid brass hardware.",
    details: ["Italian vegetable-tanned leather", "Solid brass hardware", "Hand-stitched edges", "Lead length 140 cm"]
  },
  {
    id: "pillar-scratch",
    name: "Pillar Scratching Post",
    subtitle: "Tall sisal post · travertine base",
    price: 230,
    pets: ["cat"],
    instinct: "scratch",
    shape: "pillar",
    colors: [
      { name: "Travertine", body: "#e9e0d0", accent: "#c3a57c" },
      { name: "Nero Marquina", body: "#2b2826", accent: "#c3a57c" }
    ],
    sizes: ["H 70 cm", "H 90 cm"],
    description:
      "Tall enough for a full vertical stretch and heavy enough never to wobble. A honed stone base makes it a quiet sculpture between scratches.",
    details: ["Honed travertine base (6 kg)", "Replaceable natural sisal sleeve", "Felt-protected underside"]
  }
];
