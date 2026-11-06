/* PEEKABOO product catalogue.
 *
 * To add or edit a product, copy one entry and change its fields:
 *   pets      ["cat"], ["dog"] or both — decides which Shop section it appears in
 *   category  short label shown on the card (Rest, Climb, Scratch, Dine, Play, Walk…)
 *   featured  true → shown in the home page product rail
 *   price     base price; each larger size adds ~18%
 *   image     photo path; when set it replaces the drawing everywhere
 *   imagePosition  focal point for cropped views, e.g. "30% 50%"
 *   spotlight true → large feature block on the home page (use on one product)
 *   shape     which drawing to use (cave, tower, nest, arc, bowls, shelf, sofa,
 *             tunnel, leash, pillar) until real photos replace it
 */
window.PEEKABOO_PRODUCTS = [
  {
    id: "orbit-desk-perch",
    category: "Perch",
    featured: true,
    spotlight: true,
    name: "Orbit Desk Perch",
    subtitle: "Desk-mounted bed · oak, leather & steel",
    price: 590,
    pets: ["cat"],
    instinct: "perch",
    image: "assets/img/products/orbit-desk-perch.jpg",
    imagePosition: "4% 50%",
    badge: "New",
    colors: [
      { name: "Oak & Cognac", body: "#c08a57", accent: "#a0643a" }
    ],
    sizes: ["One size"],
    description:
      "A bed that clamps to your desk. They stay close. The floor stays clear.",
    details: ["Steam-bent oak shell", "Cognac leather trim", "Removable bouclé cushion", "Brushed steel swivel arm", "Clamps to the desk edge"]
  },
  {
    id: "hideaway-cave",
    category: "Rest",
    featured: true,
    name: "The Hideaway",
    subtitle: "Cave bed · bouclé & walnut",
    price: 420,
    pets: ["cat", "dog"],
    instinct: "hide",
    shape: "cave",
    badge: "Bestseller",
    colors: [
      { name: "Cognac Leather", body: "#a0643a", accent: "#5e4130" },
      { name: "Ivory Bouclé", body: "#f1ebe1", accent: "#cdae84" },
      { name: "Orange", body: "#e2621b", accent: "#5e4130" }
    ],
    sizes: ["Small (to 6 kg)", "Large (to 12 kg)"],
    description:
      "A private den with a view. Raised on walnut, off cold floors.",
    details: ["Solid American walnut base", "Removable bouclé cover", "Memory-foam cushion", "W 56 × D 48 × H 44 cm"]
  },
  {
    id: "atelier-tower",
    category: "Climb",
    featured: true,
    name: "Atelier Tower",
    subtitle: "Sculptural cat tree · white oak & sisal",
    price: 1180,
    pets: ["cat"],
    instinct: "perch",
    shape: "tower",
    badge: "New",
    colors: [
      { name: "Natural Oak", body: "#cdae84", accent: "#f1ebe1" },
      { name: "Walnut", body: "#6b4a33", accent: "#e6ddcf" }
    ],
    sizes: ["Three levels", "Four levels"],
    description:
      "Four levels of territory on a 50 cm footprint.",
    details: ["Solid white oak", "Replaceable sisal posts", "Wool felt pads", "Wall anchor included", "H 152 cm (four levels)"]
  },
  {
    id: "dune-nest",
    category: "Rest",
    featured: true,
    name: "Dune Nest",
    subtitle: "Bolstered round bed · felted wool",
    price: 290,
    pets: ["dog", "cat"],
    instinct: "nest",
    shape: "nest",
    colors: [
      { name: "Ivory", body: "#f1ebe1", accent: "#d9ccb9" },
      { name: "Cognac", body: "#a0643a", accent: "#7f4c29" },
      { name: "Greige", body: "#bdb3a6", accent: "#9e9488" }
    ],
    sizes: ["S · 60 cm", "M · 80 cm", "L · 100 cm"],
    description:
      "A deep bolster for the circle-and-curl ritual.",
    details: ["Felted New Zealand wool shell", "Recycled-fibre bolster", "Non-slip base", "Machine-washable cover"]
  },
  {
    id: "arc-scratcher",
    category: "Scratch",
    featured: true,
    name: "Arc Scratcher",
    subtitle: "Lounger & scratcher · cork & ash",
    price: 185,
    pets: ["cat"],
    instinct: "scratch",
    shape: "arc",
    colors: [
      { name: "Cork & Oak", body: "#b88b5e", accent: "#cdae84" },
      { name: "Cork & Walnut", body: "#b88b5e", accent: "#5e4130" }
    ],
    sizes: ["One size"],
    description:
      "Scratcher by day. Lounger by night.",
    details: ["Natural Portuguese cork", "Steam-bent ash frame", "Reversible insert", "L 68 cm"]
  },
  {
    id: "atrium-bowls",
    category: "Dine",
    name: "Atrium Dining Set",
    subtitle: "Raised bowls · stoneware & walnut",
    price: 165,
    pets: ["cat", "dog"],
    instinct: "dine",
    shape: "bowls",
    colors: [
      { name: "Bone", body: "#efe8dc", accent: "#6b4a33" },
      { name: "Espresso", body: "#2b211b", accent: "#cdae84" },
      { name: "Orange", body: "#e2621b", accent: "#6b4a33" }
    ],
    sizes: ["Low · for cats", "Tall · for dogs"],
    description:
      "Raised for posture. Wide for whiskers.",
    details: ["Food-safe glazed stoneware", "Solid walnut stand", "Dishwasher-safe bowls", "Whisker-friendly 14 cm diameter"]
  },
  {
    id: "lumen-perch",
    category: "Climb",
    featured: true,
    name: "Lumen Window Perch",
    subtitle: "Wall-mounted shelf · oak & wool",
    price: 240,
    pets: ["cat"],
    instinct: "perch",
    shape: "shelf",
    colors: [
      { name: "Oak & Ivory", body: "#cdae84", accent: "#f1ebe1" },
      { name: "Walnut & Cognac", body: "#6b4a33", accent: "#a0643a" }
    ],
    sizes: ["Single", "Set of three"],
    description:
      "A floating sun-spot. Zero floor space.",
    details: ["Solid oak", "Removable wool pad", "Concealed steel bracket", "W 50 × D 28 cm"]
  },
  {
    id: "maison-dog-bed",
    category: "Rest",
    featured: true,
    name: "Maison Sofa Bed",
    subtitle: "Dog sofa · walnut frame & linen",
    price: 960,
    pets: ["dog"],
    instinct: "nest",
    shape: "sofa",
    badge: "Limited",
    colors: [
      { name: "Ivory Linen", body: "#e9e1d4", accent: "#6b4a33" },
      { name: "Cognac Leather", body: "#a0643a", accent: "#4a3122" },
      { name: "Espresso", body: "#3a2c23", accent: "#cdae84" }
    ],
    sizes: ["Medium", "Large", "Giant"],
    description:
      "A sofa at their height. Bolstered on three sides.",
    details: ["Kiln-dried walnut frame", "Stain-resistant performance linen", "Orthopaedic foam core", "Removable, washable covers"]
  },
  {
    id: "tunnel-hide",
    category: "Play",
    name: "Burrow Tunnel",
    subtitle: "Felt play tunnel · merino",
    price: 140,
    pets: ["cat"],
    instinct: "hide",
    shape: "tunnel",
    colors: [
      { name: "Greige Felt", body: "#bdb3a6", accent: "#2b211b" },
      { name: "Orange Felt", body: "#e2621b", accent: "#2b211b" }
    ],
    sizes: ["One size"],
    description:
      "Ambush, escape, repeat. Folds flat.",
    details: ["100% merino felt", "Collapses flat for storage", "L 110 cm", "Spot clean"]
  },
  {
    id: "promenade-leash",
    category: "Walk",
    featured: true,
    name: "Promenade Lead & Collar",
    subtitle: "Vegetable-tanned leather · brass",
    price: 135,
    pets: ["dog"],
    instinct: "roam",
    shape: "leash",
    colors: [
      { name: "Cognac", body: "#a0643a", accent: "#b8925a" },
      { name: "Orange", body: "#e2621b", accent: "#b8925a" },
      { name: "Noir", body: "#2a2622", accent: "#b8925a" }
    ],
    sizes: ["S", "M", "L"],
    description:
      "For the daily city walk. Ages beautifully.",
    details: ["Italian vegetable-tanned leather", "Solid brass hardware", "Hand-stitched edges", "Lead length 140 cm"]
  },
  {
    id: "pillar-scratch",
    category: "Scratch",
    name: "Pillar Scratching Post",
    subtitle: "Tall sisal post · travertine base",
    price: 230,
    pets: ["cat"],
    instinct: "scratch",
    shape: "pillar",
    colors: [
      { name: "Travertine", body: "#e9e0d0", accent: "#c3a57c" },
      { name: "Nero", body: "#2b2826", accent: "#c3a57c" }
    ],
    sizes: ["H 70 cm", "H 90 cm"],
    description:
      "A full stretch, on a stone base that never wobbles.",
    details: ["Honed travertine base (6 kg)", "Replaceable natural sisal sleeve", "Felt-protected underside"]
  }
];
