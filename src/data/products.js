export const BRAND_INFO = {
  name: "HM HERIMART",
  tagline: "Store & Organize • Crafted for Premium Living",
  description: "Bespoke handcrafted metallic fruit baskets, cloches, and luxury tabletop storage vessels engineered for 360° airflow and timeless residential elegance.",
  logoDark: "/images/logo-dark.jpg",
  logoPurple: "/images/logo-purple.jpg",
  supportEmail: "concierge@herimart-luxury.com",
  phone: "+1 (800) 794-2831",
  address: "740 Madison Avenue, New York, NY 10065",
  stats: [
    { label: "Curated Residences", value: "12,400+", suffix: "" },
    { label: "Freshness Retention", value: "3x", suffix: "Longer" },
    { label: "Handcrafted Build", value: "100%", suffix: "Solid Metal" },
    { label: "Artisan Satisfaction", value: "4.98", suffix: "★ Verified" }
  ]
};

export const SPACES = [
  {
    id: "kitchen",
    title: "Kitchen Countertops",
    subtitle: "Aerated Storage Meets Stone & Marble",
    description: "Keep seasonal fruit crisp, fragrant, and gracefully organized on quartz and granite surfaces.",
    image: "/images/flagship-fruits-counter.jpg",
    productRef: "hm-01",
    tag: "Everyday Luxury"
  },
  {
    id: "dining",
    title: "Formal Dining Tables",
    subtitle: "Conversational Centerpieces",
    description: "An architectural focal point that commands attention during lavish dinner gatherings.",
    image: "/images/flagship-premium-living.jpg",
    productRef: "hm-01",
    tag: "Statement Piece"
  },
  {
    id: "living",
    title: "Living & Executive Lounges",
    subtitle: "Sculptural Tabletop Vessels",
    description: "Lidded metallic urns and woven brass vessels that conceal accessories while adorning credenzas.",
    image: "/images/IMG_1337.jpg",
    productRef: "hm-02",
    tag: "Artisanal Form"
  },
  {
    id: "al-fresco",
    title: "Terrace & Al Fresco Dining",
    subtitle: "Protective Cloche Sanctuaries",
    description: "Fine mesh cloches that defend delicacies and orchard harvests from insects with pure elegance.",
    image: "/images/IMG_1379.jpg",
    productRef: "hm-03",
    tag: "Epicurean Shield"
  }
];

export const PRODUCTS = [
  {
    id: "hm-01",
    sku: "HM-AV-01G",
    name: "The Imperial Aviary Decorative Cage Fruit Basket",
    shortName: "Imperial Aviary Basket",
    collection: "Signature Aviary",
    category: "Signature Gold",
    space: "Kitchen & Dining",
    badge: "Bestseller #1",
    dealTag: "Deal of the Day",
    price: 1299,
    originalPrice: 3299,
    rating: 4.9,
    reviewsCount: 148,
    boughtPastMonth: "120+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 9,
    finish: "Royal Antique Gold with Laser-Etched Emblem",
    dimensions: "25 cm (H) × 25 cm (W) • 9.8 in × 9.8 in",
    weight: "1.45 kg / 3.2 lbs",
    capacity: "Holds up to 5 kg of varied fruits and citrus",
    material: "100% High-Grade Structural Metal with Gold Electroplating",
    summary: "The celebrated flagship centerpiece from HM HERIMART. Features a hand-sculpted golden bird finial, dual-hemisphere 360° micro-mesh aeration dome, and weighted pedestal base.",
    description: "An exquisite triumph of luxury metallurgy. The Imperial Aviary combines an aerated 360° micro-mesh dome with an ergonomic golden bird grip finial and heavy-gauge banded cage ribs. Engineered to circulate natural ambient air to keep organic produce fresh 3x longer while acting as a commanding centerpiece.",
    primaryImage: "/images/herimart-hero-masterpiece.jpg",
    images: [
      { src: "/images/herimart-hero-masterpiece.jpg", label: "Travertine Gallery Plinth" },
      { src: "/images/herimart-harvest-macro.jpg", label: "Living Harvest & Macro Lattice" },
      { src: "/images/herimart-penthouse-insitu.jpg", label: "Penthouse Calacatta Staging" },
      { src: "/images/herimart-atelier-craft.jpg", label: "Atelier Hand-Forging" },
      { src: "/images/herimart-unboxing-casket.jpg", label: "The Unboxing Casket" }
    ],
    features: [
      { title: "Hand-Sculpted Bird Grip", desc: "Ergonomic tactile finial allows one-handed dome lifting with bespoke avian motif." },
      { title: "360° Air Circulation Mesh", desc: "Micro-woven structural mesh eliminates moisture traps, extending fruit shelf-life by 300%." },
      { title: "Weighted Pedestal Footing", desc: "Precision-lathed circular base prevents tipping on marble and quartz." }
    ]
  },
  {
    id: "hm-02",
    sku: "HM-AU-02B",
    name: "Aura Hand-Woven Ribbon Lattice Urn with Obsidian Lid",
    shortName: "Aura Woven Sphere Urn",
    collection: "Lattice Reserve",
    category: "Champagne Brass",
    space: "Living & Lounge",
    badge: "Trending #1",
    dealTag: "Limited Time Deal",
    price: 1499,
    originalPrice: 3499,
    rating: 4.8,
    reviewsCount: 94,
    boughtPastMonth: "80+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 6,
    finish: "Brushed Champagne Brass with Matte Obsidian Lid & Chrome Orb",
    dimensions: "22 cm (H) × 28 cm (W) • 8.7 in × 11.0 in",
    weight: "1.80 kg / 3.9 lbs",
    capacity: "Enclosed 4.2L dry storage capacity",
    material: "Solid Ribbon-Woven Brass & Turned Aluminum Lid",
    summary: "Spherical tabletop sculpture with diagonal woven ribbon bands and removable flush-fit dark lid crowned with an orb handle.",
    description: "Handcrafted from interlocking brass ribbons that form an elliptical sanctuary for seasonal fruit, potpourri, or luxury living room accessories.",
    primaryImage: "/images/IMG_1337.jpg",
    images: [
      { src: "/images/IMG_1337.jpg", label: "Lounge Credenza View" },
      { src: "/images/IMG_1343.jpg", label: "Front Perspective" },
      { src: "/images/IMG_1350.jpg", label: "Ribbon Weave Macro" }
    ],
    features: [
      { title: "Interlocking Ribbon Weave", desc: "Fluid metallic weave creates stunning geometric light interplay across table surfaces." },
      { title: "Turned Obsidian Lid", desc: "Heavyweight removable lid with polished sphere finial." }
    ]
  },
  {
    id: "hm-03",
    sku: "HM-SC-03N",
    name: "Sanctuary Round Mesh Cloche with Avian Grip & Platter",
    shortName: "Sanctuary Round Cloche",
    collection: "Al Fresco Shield",
    category: "Midnight Onyx",
    space: "Terrace & Dining",
    badge: "Top Rated",
    dealTag: "Save 26%",
    price: 1199,
    originalPrice: 2899,
    rating: 4.9,
    reviewsCount: 78,
    boughtPastMonth: "50+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 12,
    finish: "Midnight Onyx Powder Immersion",
    dimensions: "20 cm (H) × 26 cm (W) • 7.9 in × 10.2 in",
    weight: "1.20 kg / 2.6 lbs",
    capacity: "Covers standard 25cm serving plates or bread boards",
    material: "Fine Stainless Steel Mesh & Cast Brass Bird Finial",
    summary: "Hemispherical insect-barrier cloche with signature bird finial and raised brass equator ring for outdoor and terrace dining.",
    description: "Designed for garden terraces and al fresco dinner parties. The fine stainless mesh guards delicacies, artisan cheeses, and ripe fruit against insects while allowing gentle aeration.",
    primaryImage: "/images/IMG_1379.jpg",
    images: [
      { src: "/images/IMG_1379.jpg", label: "Studio Portrait" },
      { src: "/images/IMG_1387.jpg", label: "Raised Angle" },
      { src: "/images/IMG_1389.jpg", label: "Wire Mesh Texture" }
    ],
    features: [
      { title: "Bug-Proof Fine Mesh", desc: "Micron-rated wire apertures block airborne pests completely without trapping heat." },
      { title: "Avian Lift Finial", desc: "Balanced sculptural grip for graceful one-handed table service." }
    ]
  },
  {
    id: "hm-04",
    sku: "HM-PR-04G",
    name: "Prism Hexagonal Wire Geometric Centerpiece Basket",
    shortName: "Prism Geometric Basket",
    collection: "Geometric Modern",
    category: "Geometric Modern",
    space: "Kitchen & Counter",
    badge: "Hot Pick",
    dealTag: "Special Price",
    price: 1099,
    originalPrice: 2499,
    rating: 4.7,
    reviewsCount: 65,
    boughtPastMonth: "40+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 15,
    finish: "Polished Royal Gold Immersion",
    dimensions: "18 cm (H) × 30 cm (W) • 7.1 in × 11.8 in",
    weight: "1.10 kg / 2.4 lbs",
    capacity: "Holds up to 4 kg of orchard fruit",
    material: "Heavy-Gauge Welded Steel Rods with Mirror Gold Plating",
    summary: "Architectural faceted wire basket composed of triangular and hexagonal planes for contemporary kitchens.",
    description: "A masterclass in modern geometry. Angular rods reflect ambient light from every angle while cradling large citrus, pomegranates, and orchard fruits with maximum open-air ventilation.",
    primaryImage: "/images/IMG_1392.jpg",
    images: [
      { src: "/images/IMG_1392.jpg", label: "Geometric Wire Angle" },
      { src: "/images/IMG_1394.jpg", label: "Overhead Perspective" },
      { src: "/images/IMG_1397.jpg", label: "Styled with Fruit" }
    ],
    features: [
      { title: "Faceted Wire Facets", desc: "Origami-inspired geometry adds architectural edge to modern quartz surfaces." },
      { title: "Wide-Aperture Ventilation", desc: "Maximum open ventilation prevents bottom fruit compression and spoilage." }
    ]
  },
  {
    id: "hm-05",
    sku: "HM-CH-05G",
    name: "Celestial Halo Two-Tier Pedestal Fruit Basket",
    shortName: "Celestial Halo Basket",
    collection: "Signature Aviary",
    category: "Signature Gold",
    space: "Kitchen & Dining",
    badge: "Bestseller #2",
    dealTag: "25% OFF",
    price: 1699,
    originalPrice: 3899,
    rating: 5.0,
    reviewsCount: 112,
    boughtPastMonth: "90+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 5,
    finish: "Warm Radiant Gold Electroplate",
    dimensions: "38 cm (H) × 32 cm (W) • 15.0 in × 12.6 in",
    weight: "2.35 kg / 5.2 lbs",
    capacity: "Dual tiers hold up to 8 kg of mixed produce",
    material: "Solid Core Steel & Brass Central Spindle",
    summary: "Two cascading concentric wire tiers on a fluted pedestal footing, providing expansive vertical fruit storage.",
    description: "Maximizes countertop capacity through vertical architectural tiers. The lower 32cm basket cradles apples, melons, and citrus while the upper 22cm basket displays fragile berries, figs, and grapes.",
    primaryImage: "/images/IMG_1400.jpg",
    images: [
      { src: "/images/IMG_1400.jpg", label: "Two-Tier Frontal" },
      { src: "/images/IMG_1402.jpg", label: "Top Tier Close-Up" },
      { src: "/images/flagship-fruits-counter.jpg", label: "Kitchen Staging" }
    ],
    features: [
      { title: "Dual-Tier Organization", desc: "Separates delicate soft fruits from heavy citrus to avoid bruising." },
      { title: "Balanced Central Axis", desc: "Heavy lathe-turned metal spindle resists sway and maintains steady equilibrium." }
    ]
  },
  {
    id: "hm-06",
    sku: "HM-NO-06B",
    name: "Nocturne Fluted Onyx Credenza Urn with Mirror Knob",
    shortName: "Nocturne Onyx Urn",
    collection: "Noir Reserve",
    category: "Midnight Onyx",
    space: "Living & Office",
    badge: "Limited Batch",
    dealTag: "Save 24%",
    price: 1399,
    originalPrice: 3199,
    rating: 4.8,
    reviewsCount: 52,
    boughtPastMonth: "35+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 7,
    finish: "Deep Obsidian Matte with Polished Nickel Knob",
    dimensions: "24 cm (H) × 24 cm (W) • 9.4 in × 9.4 in",
    weight: "1.65 kg / 3.6 lbs",
    capacity: "3.8L enclosed interior volume",
    material: "Fluted Carbon Steel with Electrostatic PVD Coat",
    summary: "Fluted midnight noir tabletop sanctuary with concave fluting and polished sphere finial.",
    description: "Dark, moody, and architectural. The deep obsidian matte finish absorbs glare while vertical fluting channels soft highlights across credenzas and marble bookshelves.",
    primaryImage: "/images/IMG_1409.jpg",
    images: [
      { src: "/images/IMG_1409.jpg", label: "Fluted Urn on Marble" },
      { src: "/images/IMG_1407.jpg", label: "Studio Angle" }
    ],
    features: [
      { title: "Electrostatic PVD Coat", desc: "Ultra-durable noir finish resists fingerprints and surface micro-scratches." },
      { title: "Concave Fluted Facets", desc: "Classical neoclassical fluting adapted for high-end modern residential spaces." }
    ]
  },
  {
    id: "hm-07",
    sku: "HM-LT-07B",
    name: "Lotus Sculptural Hand-Hammered Brass Centerpiece Bowl",
    shortName: "Lotus Sculptural Bowl",
    collection: "Lattice Reserve",
    category: "Champagne Brass",
    space: "Formal Dining",
    badge: "Amazon Choice",
    dealTag: "26% OFF",
    price: 1249,
    originalPrice: 2799,
    rating: 4.9,
    reviewsCount: 88,
    boughtPastMonth: "65+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 11,
    finish: "Hand-Brushed Champagne Brass",
    dimensions: "16 cm (H) × 32 cm (W) • 6.3 in × 12.6 in",
    weight: "1.90 kg / 4.2 lbs",
    capacity: "Holds up to 5 kg of orchard fruit",
    material: "100% Solid Cast & Hammered Brass",
    summary: "Curved petal-form brass centerpiece bowl with undulating organic rim, polished to a warm satin glow.",
    description: "Inspired by opening lotus blossoms. Hand-beaten by master coppersmiths with thousands of micro-hammer facets that capture ambient dining chandelier light.",
    primaryImage: "/images/IMG_1407.jpg",
    images: [
      { src: "/images/IMG_1407.jpg", label: "Studio Angle" },
      { src: "/images/IMG_1413.jpg", label: "Detail Macro" }
    ],
    features: [
      { title: "Hand-Hammered Facets", desc: "Each petal individually textured by master craftsmen for bespoke reflections." },
      { title: "Low Center of Gravity", desc: "Heavy solid brass base stays rock-solid on polished wood and stone tables." }
    ]
  },
  {
    id: "hm-08",
    sku: "HM-SV-08G",
    name: "Sovereign Crown Multi-Tier High-Gauge Wire Stand",
    shortName: "Sovereign Wire Stand",
    collection: "Signature Aviary",
    category: "Signature Gold",
    space: "Kitchen Island",
    badge: "Bestseller #3",
    dealTag: "Save $70",
    price: 1899,
    originalPrice: 4299,
    rating: 5.0,
    reviewsCount: 136,
    boughtPastMonth: "75+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 4,
    finish: "24K Immersion Mirror Royal Gold",
    dimensions: "44 cm (H) × 34 cm (W) • 17.3 in × 13.4 in",
    weight: "2.80 kg / 6.2 lbs",
    capacity: "Triple tier capacity up to 10 kg produce",
    material: "Heavy Gauge Solid Drawn Steel Core",
    summary: "Grand vertical statement stand crowned with sculpted avian finial and graduated concentric wire baskets.",
    description: "A commanding presence for large kitchen islands and lavish breakfast bars. Triple tiered architecture allows abundant fruit staging without taking up precious counter surface.",
    primaryImage: "/images/IMG_1420.jpg",
    images: [
      { src: "/images/IMG_1420.jpg", label: "Tiered Stand Frontal" },
      { src: "/images/IMG_1424.jpg", label: "Wire Structure Detail" }
    ],
    features: [
      { title: "Triple Tier Verticality", desc: "Triples fruit capacity in a compact 34cm countertop footprint." },
      { title: "Reinforced Brass Welds", desc: "High-temperature brazed joints tested to hold heavy fruit loads without flex." }
    ]
  },
  {
    id: "hm-09",
    sku: "HM-RG-09G",
    name: "Regent Hand-Braided Gold Mesh Bread & Fruit Trug",
    shortName: "Regent Braided Trug",
    collection: "Signature Aviary",
    category: "Signature Gold",
    space: "Kitchen & Breakfast",
    badge: "Popular Pick",
    dealTag: "24% OFF",
    price: 999,
    originalPrice: 2199,
    rating: 4.8,
    reviewsCount: 59,
    boughtPastMonth: "45+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 14,
    finish: "Warm Golden Luster with Solid Brass Rim",
    dimensions: "14 cm (H) × 35 cm (W) • 5.5 in × 13.8 in",
    weight: "0.95 kg / 2.1 lbs",
    capacity: "Accommodates artisan sourdough loaves or citrus arrays",
    material: "Braided Fine Metal Mesh & Lathed Brass Band",
    summary: "Elongated oval trug with continuous woven basketry mesh and ergonomic rolled perimeter rim.",
    description: "Perfect for long dining credenzas and kitchen breakfast bars. The elongated shallow trug displays artisan baked goods, baguettes, or vibrant citrus arrangements with effortless elegance.",
    primaryImage: "/images/IMG_1429.jpg",
    images: [
      { src: "/images/IMG_1429.jpg", label: "Braided Trug Angle" },
      { src: "/images/IMG_1426.jpg", label: "Top View" }
    ],
    features: [
      { title: "Elongated Oval Profile", desc: "Slender proportions fit seamlessly along dining table runners and kitchen islands." },
      { title: "Continuous Airflow Mesh", desc: "Keeps warm bread crusts crisp while providing optimal fruit aeration." }
    ]
  },
  {
    id: "hm-10",
    sku: "HM-EC-10C",
    name: "Eclipse Dual-Hemisphere Fine Wire Cloche Sanctuary",
    shortName: "Eclipse Wire Cloche",
    collection: "Al Fresco Shield",
    category: "Cloche Sanctuary",
    space: "Terrace & Dining",
    badge: "Top Seller",
    dealTag: "Save $55",
    price: 1349,
    originalPrice: 2999,
    rating: 4.9,
    reviewsCount: 82,
    boughtPastMonth: "60+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 8,
    finish: "Dual-Tone Antique Gold & Dark Bronze",
    dimensions: "26 cm (H) × 28 cm (W) • 10.2 in × 11.0 in",
    weight: "1.50 kg / 3.3 lbs",
    capacity: "Encloses full pedestal bowl up to 26cm diameter",
    material: "Woven Stainless Mesh & High-Tensile Ribs",
    summary: "Sculptural dome cloche engineered to fit over existing bowls or serve as a standalone aerated fruit sanctuary.",
    description: "Shields your harvest from insects while creating a museum-worthy table spectacle. The arched cage ribs provide structural integrity, while the fine woven wire ensures complete air circulation.",
    primaryImage: "/images/IMG_1445.jpg",
    images: [
      { src: "/images/IMG_1445.jpg", label: "Dual Hemisphere Cloche" },
      { src: "/images/IMG_1438.jpg", label: "Side Silhouette" }
    ],
    features: [
      { title: "Protective Cloche Shield", desc: "Safeguards food during outdoor cocktail evenings and garden dining." },
      { title: "Dual-Tone Immersion", desc: "Two-stage immersion plating creates nuanced antique depth." }
    ]
  },
  {
    id: "hm-11",
    sku: "HM-AT-11B",
    name: "Atelier Hand-Formed Lattice Credenza Urn with Knob",
    shortName: "Atelier Lattice Urn",
    collection: "Lattice Reserve",
    category: "Champagne Brass",
    space: "Living & Lounge",
    badge: "Artisanal",
    dealTag: "25% OFF",
    price: 1599,
    originalPrice: 3599,
    rating: 4.8,
    reviewsCount: 44,
    boughtPastMonth: "30+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 6,
    finish: "Warm Polished Champagne Brass with Satin Accents",
    dimensions: "26 cm (H) × 25 cm (W) • 10.2 in × 9.8 in",
    weight: "1.85 kg / 4.1 lbs",
    capacity: "4.5L storage capacity",
    material: "Solid Brass Lattice Weave & Turned Metal Finial",
    summary: "Hand-brazed lattice urn featuring interwoven brass strips that form a rhythmic, open-air storage sphere.",
    description: "An artisan masterwork from our European metallurgy series. Each brass strip is formed and torched by hand, creating an open-air vessel that elevates living rooms and dining consoles.",
    primaryImage: "/images/IMG_1430.jpg",
    images: [
      { src: "/images/IMG_1430.jpg", label: "Lattice Urn Studio" },
      { src: "/images/IMG_1350.jpg", label: "Weave Detail" }
    ],
    features: [
      { title: "Open-Air Lattice", desc: "Provides partial visibility of interior harvest while maintaining sculptural elegance." },
      { title: "Turned Metal Finial", desc: "Ergonomic knob allows swift, balanced dome removal." }
    ]
  },
  {
    id: "hm-12",
    sku: "HM-ZN-12G",
    name: "Zenith Fluted Architectural Mesh Fruit Vessel",
    shortName: "Zenith Fluted Vessel",
    collection: "Geometric Modern",
    category: "Geometric Modern",
    space: "Kitchen & Island",
    badge: "Trending #2",
    dealTag: "Save $45",
    price: 1149,
    originalPrice: 2599,
    rating: 4.7,
    reviewsCount: 71,
    boughtPastMonth: "55+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 10,
    finish: "Brushed Honey Gold with Laser Rim",
    dimensions: "20 cm (H) × 28 cm (W) • 7.9 in × 11.0 in",
    weight: "1.25 kg / 2.8 lbs",
    capacity: "Holds up to 4.5 kg of fruit",
    material: "Micro-Perforated Structural Steel",
    summary: "Fluted tapered mesh fruit vessel with radiating vertical ribs and weighted circular ring base.",
    description: "Minimalist, sleek, and functional. Radiating ribs draw the eye upward while micro-perforations prevent moisture condensation, keeping citrus and bananas fresh for days longer.",
    primaryImage: "/images/IMG_1424.jpg",
    images: [
      { src: "/images/IMG_1424.jpg", label: "Fluted Wire Profile" },
      { src: "/images/IMG_1448.jpg", label: "Side Perspective" }
    ],
    features: [
      { title: "Radiating Wire Fluting", desc: "Linear flutes create dynamic shadow casting under downlights." },
      { title: "Zero Moisture Pockets", desc: "Breathable all-around steel grid prevents moisture condensation." }
    ]
  },
  {
    id: "hm-13",
    sku: "HM-AV-13C",
    name: "Avian Heritage Hand-Forged Tabletop Cloche & Platter",
    shortName: "Avian Heritage Cloche",
    collection: "Al Fresco Shield",
    category: "Cloche Sanctuary",
    space: "Dining & Terrace",
    badge: "Exclusive",
    dealTag: "26% OFF",
    price: 1399,
    originalPrice: 3199,
    rating: 4.9,
    reviewsCount: 63,
    boughtPastMonth: "40+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 7,
    finish: "Antique Royal Gold Luster",
    dimensions: "28 cm (H) × 27 cm (W) • 11.0 in × 10.6 in",
    weight: "1.60 kg / 3.5 lbs",
    capacity: "Encloses standard fruit piles and cheese rounds",
    material: "Woven Brass Mesh & Hand-Cast Avian Finial",
    summary: "Heritage aviary cloche with sculpted avian finial and reinforced banded equator for everyday dining luxury.",
    description: "Transforms everyday table dining into a stately ceremony. Hand-shaped brass wires create an impenetrable protective dome with pure aesthetic poise.",
    primaryImage: "/images/IMG_1438.jpg",
    images: [
      { src: "/images/IMG_1438.jpg", label: "Avian Cloche View" },
      { src: "/images/IMG_1440.jpg", label: "Detail Finial" }
    ],
    features: [
      { title: "Hand-Cast Bird Crown", desc: "Solid brass bird finial serves as both a handle and aesthetic hallmark." },
      { title: "Reinforced Equator Ring", desc: "Stiff brass perimeter prevents warping or bending during daily use." }
    ]
  },
  {
    id: "hm-14",
    sku: "HM-VR-14B",
    name: "Versailles Antique Wire Fruit Chalice with Pedestal",
    shortName: "Versailles Wire Chalice",
    collection: "Lattice Reserve",
    category: "Champagne Brass",
    space: "Dining Table",
    badge: "Popular Deal",
    dealTag: "Save $45",
    price: 1049,
    originalPrice: 2399,
    rating: 4.8,
    reviewsCount: 51,
    boughtPastMonth: "35+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 13,
    finish: "Warm Patina Champagne Brass",
    dimensions: "22 cm (H) × 26 cm (W) • 8.7 in × 10.2 in",
    weight: "1.35 kg / 3.0 lbs",
    capacity: "Holds 3.5 kg of orchard fruit",
    material: "Heavy Solid Drawn Brass Wire",
    summary: "Goblet-inspired wire chalice with classical pedestal footing, elevating table arrangements.",
    description: "Inspired by French palace tableware. Lifts fruit 22cm off the table surface to create an airy, multi-dimensional tablescape that invites guests to partake.",
    primaryImage: "/images/IMG_1426.jpg",
    images: [
      { src: "/images/IMG_1426.jpg", label: "Wire Chalice Angle" },
      { src: "/images/IMG_1443.jpg", label: "Pedestal Detail" }
    ],
    features: [
      { title: "Elevated Chalice Footing", desc: "Raises fruit off table linens, preventing condensation transfer." },
      { title: "Patinated Champagne Finish", desc: "Warm brushed metallic finish that ages gracefully with time." }
    ]
  },
  {
    id: "hm-15",
    sku: "HM-MN-15G",
    name: "Monolith Faceted Brass Orchard Centerpiece Dish",
    shortName: "Monolith Faceted Dish",
    collection: "Geometric Modern",
    category: "Geometric Modern",
    space: "Kitchen & Dining",
    badge: "Best Seller",
    dealTag: "25% OFF",
    price: 1249,
    originalPrice: 2799,
    rating: 4.8,
    reviewsCount: 68,
    boughtPastMonth: "50+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 9,
    finish: "Mirror Satin Royal Gold",
    dimensions: "15 cm (H) × 31 cm (W) • 5.9 in × 12.2 in",
    weight: "1.55 kg / 3.4 lbs",
    capacity: "Holds up to 5 kg produce",
    material: "Precision Laser-Cut & Hand-Formed Brass",
    summary: "Sculptural faceted low-profile fruit bowl with geometric facets and radiant gold reflections.",
    description: "A contemporary low-profile centerpiece designed for unobstructed sightlines across dinner conversations. Sharp geometric facets reflect candlelight across the table.",
    primaryImage: "/images/IMG_1397.jpg",
    images: [
      { src: "/images/IMG_1397.jpg", label: "Faceted Dish Styled" },
      { src: "/images/IMG_1394.jpg", label: "Top Symmetry" }
    ],
    features: [
      { title: "Low-Profile Sightlines", desc: "15cm height allows unobstructed dining conversation across the table." },
      { title: "Laser-Cut Precision", desc: "Computer-lathed edges deburred and hand-polished to silk-smooth touch." }
    ]
  },
  {
    id: "hm-16",
    sku: "HM-RG-16G",
    name: "Sovereign Royal Gold Aviary Tabletop Sanctuary",
    shortName: "Sovereign Aviary Dome",
    collection: "Signature Aviary",
    category: "Signature Gold",
    space: "Kitchen & Counter",
    badge: "Flagship Icon",
    dealTag: "26% OFF",
    price: 1449,
    originalPrice: 3299,
    rating: 5.0,
    reviewsCount: 124,
    boughtPastMonth: "85+ bought in past month",
    leadTime: "In Stock — FREE Delivery by Tomorrow",
    stockLeft: 7,
    finish: "High-Luster Royal Antique Gold",
    dimensions: "27 cm (H) × 26 cm (W) • 10.6 in × 10.2 in",
    weight: "1.70 kg / 3.7 lbs",
    capacity: "Holds up to 5.5 kg of fruit",
    material: "Solid Steel Cage with Dual Hemisphere Wire",
    summary: "The pinnacle of our birdcage collection, with dual-ring equator banding and cast avian finial.",
    description: "The complete luxury tabletop sanctuary. Features double-ribbed cage arches, a reinforced weighted pedestal base, and complete 360-degree convection airflow.",
    primaryImage: "/images/IMG_1448.jpg",
    images: [
      { src: "/images/IMG_1448.jpg", label: "Sovereign Aviary Dome" },
      { src: "/images/flagship-studio-white.jpg", label: "Studio Portrait" }
    ],
    features: [
      { title: "Double-Ribbed Arches", desc: "Heavy structural ribs provide exceptional rigidity and royal presence." },
      { title: "Full Convection Dome", desc: "Allows fresh ambient airflow while protecting from dust and fruit flies." }
    ]
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Lady Eleanor Vance',
    role: 'Interior Designer, Mayfair',
    title: 'The jewel of my dining room.',
    content: 'The Imperial Aviary is a masterwork of metallurgy. The 360° airflow keeps our Sicilian lemons and figs firm for over two weeks, and guests never stop asking where it was forged.',
    rating: 5,
    verified: true,
    productName: 'The Imperial Aviary',
    image: '/images/herimart-hero-masterpiece.jpg'
  },
  {
    id: 'rev-2',
    author: 'Julian Thorne',
    role: 'Architect, Tribeca Loft',
    title: 'Flawless architectural proportions.',
    content: 'Commanding presence on our Calacatta marble table. The finish is impervious to organic citrus acids, and the weighted pedestal gives it absolute stability.',
    rating: 5,
    verified: true,
    productName: 'Calacatta Sanctuary',
    image: '/images/herimart-penthouse-insitu.jpg'
  },
  {
    id: 'rev-3',
    author: 'Camilla Montgomery',
    role: 'Private Collector, Zurich',
    title: 'Worth every single cent.',
    content: 'Arrived in a rigid charcoal casket with handling gloves and signed certificate. The craftsmanship and silver-brazed joints are museum-grade.',
    rating: 5,
    verified: true,
    productName: 'Aura Woven Sphere Urn',
    image: '/images/herimart-unboxing-casket.jpg'
  },
  {
    id: 'rev-4',
    author: 'Marcus Sterling',
    role: 'Restaurateur & Sommelier, Paris',
    title: 'Biological fruit preservation science.',
    content: 'We noticed a 300% extension in organic orchard fruit longevity immediately. Zero heat pockets and zero bruised fruit. Utterly indispensable.',
    rating: 5,
    verified: true,
    productName: 'Living Harvest Dome',
    image: '/images/herimart-harvest-macro.jpg'
  }
];

export const JOURNAL_POSTS = [
  {
    id: 'jp-1',
    category: 'Science of Preservation',
    date: 'February 2026',
    title: 'Why Ethylene Gas Destroys Fruit in Solid Bowls',
    excerpt: 'How trapped ambient moisture and heat pockets accelerate fruit decay, and how 360° micro-convection extends organic freshness by 300%.',
    readTime: '4 min read',
    image: '/images/herimart-harvest-macro.jpg',
    content: 'Standard ceramic, glass, or plastic fruit bowls act as thermal and chemical traps. When ripening fruit releases ethylene gas, solid container walls prevent natural dispersion, accelerating decomposition exponentially. Herimart wire mesh domes create a continuous ambient micro-convection current that dissipates ethylene and moisture, keeping produce orchard-crisp for up to three weeks.'
  },
  {
    id: 'jp-2',
    category: 'Architectural Staging',
    date: 'January 2026',
    title: 'Styling Heavy Metallurgy on Calacatta Marble',
    excerpt: 'A masterclass in spatial balance: pairing warm gold electroplated steel with monolithic white stone and high-ceiling residences.',
    readTime: '6 min read',
    image: '/images/herimart-penthouse-insitu.jpg',
    content: 'Contrasting the cool, organic veining of Italian Calacatta marble with the radiant, geometric precision of gold wire mesh creates an architectural dialogue. Position the Imperial Aviary at the golden ratio third of a rectangular dining table or dead-center on a circular quartz counter for commanding spatial presence.'
  },
  {
    id: 'jp-3',
    category: 'Atelier Heritage',
    date: 'December 2025',
    title: 'The Art of Silver Brazing at 650°C',
    excerpt: 'Inside our European workshop: why silver brazing creates joints stronger than raw steel, and how each avian finial is hand-sculpted.',
    readTime: '5 min read',
    image: '/images/herimart-atelier-craft.jpg',
    content: 'Unlike mass-manufactured spot welding that leaves brittle, visible joints, Herimart utilizes high-temperature silver brazing at 650°C. Silver capillary action draws molten filler metal deep into wire junctions, forming a permanent structural union that will never snap or rattle under load.'
  }
];
