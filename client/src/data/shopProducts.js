/**
 * MODRIVE Shop — Mock product catalogue data.
 * All prices are illustrative demo prices in PKR for portfolio showcase purposes.
 * Stock, fitment, and origin information is demo data — not verified real-world data.
 *
 * IMPORTANT: Do NOT treat these as real quotes, real inventory, or real availability.
 *            Prices must be re-confirmed server-side when a backend is added (Phase 3+).
 */

export const PRODUCTS_PER_PAGE = 6;

export const CATEGORIES = [
  { id: "all",       label: "All Parts",          icon: "tune",                        count: 284 },
  { id: "wheels",    label: "Wheels & Rims",       icon: "motion_mode",                 count: 76  },
  { id: "aero",      label: "Body Kits & Aero",    icon: "sports_score",                count: 48  },
  { id: "wings",     label: "Spoilers & Wings",    icon: "air",                         count: 32  },
  { id: "exhaust",   label: "Valvetronic Exhausts",icon: "volcano",                     count: 32  },
  { id: "lighting",  label: "Lighting & Lasers",   icon: "highlight",                   count: 24  },
  { id: "interior",  label: "Interior Bespoke",    icon: "airline_seat_recline_extra",  count: 36  },
  { id: "suspension",label: "Suspension & Brakes", icon: "speed",                       count: 36  },
];

export const BRANDS = [
  "Vorsteiner Aero",
  "BBS Motorsport",
  "Akrapovič",
  "HRE Performance Wheels",
  "KW Suspensions",
  "Eventuri Carbon",
  "MODRIVE Skunkworks",
  "OEM+ Laserwerks",
];

export const PRICE_RANGES = [
  { id: "under-1m",  label: "Under 1M",   min: 0,         max: 1_000_000    },
  { id: "1m-3m",     label: "1M – 3M",    min: 1_000_000, max: 3_000_000    },
  { id: "3m-6m",     label: "3M – 6M",    min: 3_000_000, max: 6_000_000    },
  { id: "above-6m",  label: "6M & Above", min: 6_000_000, max: Infinity     },
];

export const SORT_OPTIONS = [
  { value: "featured",   label: "Featured"           },
  { value: "price-asc",  label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest",     label: "Newest First"        },
];

export const AVAILABILITY_OPTIONS = [
  { value: "all",      label: "All Items"                   },
  { value: "in-stock", label: "In Stock (Dispatched 48h)"   },
  { value: "bto",      label: "Built to Order (14–21 Days)" },
  { value: "preorder", label: "Upcoming Pre-Order"          },
];

/** @type {Product[]} */
export const ALL_PRODUCTS = [
  {
    id: "bbs-fir-992",
    sku: "BBS-FIR-992",
    name: "BBS FI-R Bronze Forged Monoblock Wheel Set (20x9.5 / 21x12.5)",
    brand: "BBS Motorsport",
    origin: "imported",
    originLabel: "Imported (Germany)",
    category: "wheels",
    fitment: "Fits Porsche 992 GT3 / RS",
    price: 3_450_000,
    priceLabel: "PKR 3,450,000",
    priceNote: "Demo Price (Set of 4)",
    rating: 4.9,
    reviews: 18,
    stock: "in-stock",
    stockLabel: "In Stock (2 Sets Left)",
    stockNote: "Ships in 48h",
    stockColor: "text-primary-container",
    addedDate: "2025-01-15",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ94Kq1fX3e31DBpEO8T6JiCXh169pc9NDL6InyIqUiHbjFFGh1VTbm4W-lD3WMeSJT-x_wW3NXeEyyIBO8Wf6Oc4v5NdCZTOyqEORaiEefOm5pAij-ETSWbJw6B7fQ0frQkJRPMFTx_aMOOwsBcww_K10GNOxPxIVAXci0I0U7bpIb_J4Y1jVxN5mu07Bq3a9cc6ADzvBlUPWT5vSGFoOPofZxnKsVT5dl11KPdKRC0_hXUbvQeRucg",
    alt: "BBS FI-R bronze forged monoblock wheel mounted on carbon fiber exhibition plinth in dark skunkworks studio.",
  },
  {
    id: "vor-aero-992w",
    sku: "VOR-AERO-992W",
    name: "Vorsteiner V-Aero Dry Pre-Preg Carbon Rear Swan-Neck Wing",
    brand: "Vorsteiner Aero",
    origin: "imported",
    originLabel: "Imported (USA)",
    category: "wings",
    fitment: "Fits Porsche 992 GT3",
    price: 2_850_000,
    priceLabel: "PKR 2,850,000",
    priceNote: "Demo Price",
    rating: 5.0,
    reviews: 12,
    stock: "in-stock",
    stockLabel: "In Stock (1 Unit Left)",
    stockNote: "Direct Port Import",
    stockColor: "text-primary-container",
    addedDate: "2025-02-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlcRt_UOF8oFncv-ffY-EY_ecvQHdyttpboqiYFYsxCrfv6NnQKYvKC54XO4mU41JMoEux-4mK-tOiSFKnQIla9rNuEoLszCPNVxR0wlwp1E_HGQveRZV6M-Cp15oCujy0nX92O50bRZvfaepOOqhnCK9dFOAKSY4Qo82V6uLoH3mNY8MkckEzGq7TbkxAepYOiVyisL1eR-J1NszKtMbJ9Y8TONd3cz5YpWXLuW_4IPOPiLaehfz4pw",
    alt: "Vorsteiner carbon fiber swan-neck rear wing spoiler with exposed 2x2 pre-preg carbon weave in dim precision workshop.",
  },
  {
    id: "vor-aero-992f",
    sku: "VOR-AERO-992F",
    name: "Carbon Fiber Front Splitter & Aerodynamic Canard System",
    brand: "Vorsteiner Aero",
    origin: "imported",
    originLabel: "Imported (USA)",
    category: "aero",
    fitment: "Fits Porsche 911 GT3 (992)",
    price: 1_650_000,
    priceLabel: "PKR 1,650,000",
    priceNote: "Demo Price",
    rating: 4.8,
    reviews: 9,
    stock: "in-stock",
    stockLabel: "In Stock (3 Units)",
    stockNote: "Ready for Dispatch",
    stockColor: "text-primary-container",
    addedDate: "2025-01-28",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARUzXqdaGCKygQotlyiKDWqJx-QMJLAIOZOwaSGNkJF8B9MEbi7yNuqu1XdCbHqfdXCXhZY7NID8wf_qYTF9erFdDRYGDUkuR_4kPmWVHmNEcGmwrchGqg6BLhlZHGODUv3n4CqN23BeTff1jvI0D0bUWm-K7k2BUM3jS-07an1Q6x4HDmF5FW9PHGrF_Oz5CLvFP4SERliuozZGgafw53KlPxMp7oDHa93LLJVuN0AqnpkWVonK8cXA",
    alt: "Exotic front carbon fiber aerodynamic bumper and splitter assembly on technical workshop stand with lime green contour lines.",
  },
  {
    id: "akr-evo-g82",
    sku: "AKR-EVO-G82",
    name: "Akrapovič Evolution Line Titanium Valvetronic Exhaust System",
    brand: "Akrapovič",
    origin: "imported",
    originLabel: "Imported (Slovenia)",
    category: "exhaust",
    fitment: "Fits BMW M4 (G82) / M3 (G80)",
    price: 3_890_000,
    priceLabel: "PKR 3,890,000",
    priceNote: "Demo Price",
    rating: 5.0,
    reviews: 24,
    stock: "in-stock",
    stockLabel: "In Stock (1 Left)",
    stockNote: "Full Titanium (-14.2 kg)",
    stockColor: "text-primary-container",
    addedDate: "2025-03-10",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARSlkWtQt--Ba7i4ROCM87UOi7IOmdv0yfAI_cvRYAyB1nYxs4GivIlRpZl95MfZiypKMcNIChiy1deMyKSzNBiy89qBIj0zQTSZE2aB1Y4Jmy8_UJg3HoLn_zcpHHTBXXI7vXJlS1X0UC6h2FqZtSF9Ce9r7ztXXePxPTzDKOXYQzFuFjTEHZw85EvRKD6SLYvYT73Ywtpk9oN1t1868jhtudBLIeQlg1NGgXMpcSBtvQtPM1mwOCFw",
    alt: "Akrapovic full titanium valvetronic exhaust system with heat-treated blue gold anodized quad tips on dark workbench.",
  },
  {
    id: "aud-lzr-c8",
    sku: "AUD-LZR-C8",
    name: "Dark Tinted Matrix Laser LED Headlights with Geometric DRL",
    brand: "OEM+ Laserwerks",
    origin: "imported",
    originLabel: "Imported (Germany)",
    category: "lighting",
    fitment: "Fits Audi RS6 / RS7 (C8)",
    price: 2_150_000,
    priceLabel: "PKR 2,150,000",
    priceNote: "Demo Price (Pair)",
    rating: 4.9,
    reviews: 7,
    stock: "bto",
    stockLabel: "Built to Order (14 Days)",
    stockNote: "Plug & Play",
    stockColor: "text-secondary-fixed-dim",
    addedDate: "2025-02-20",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm5schqeZ9tq20JTYfXxTJnP54ErSNKY3vlFID9ydvZ3RQ1qo2P2oMO2CKMebGZt1URj6ak2OXdM0f3BgvNXi6nShg_RFM82Hh2Gh9lg1dI8yEf2ZfYePYQx1Wb8enLNxaRJNn1PlEgYvbRONYDBCY4zZ1uIS-C_F_L3-Ig9alfVIqupZgtRGdGG9xg0WCOpfZj6ABtzQ3653dfwNSusPwgGJ7m_eU7IHUAMVajT2sjd-KQSXFeBY03g",
    alt: "Futuristic dark-tinted matrix laser LED headlight unit with sharp geometric DRL signatures on engineering inspection cradle.",
  },
  {
    id: "mdr-str-forged",
    sku: "MDR-STR-FORGED",
    name: "Forged Carbon Fiber & Alcantara Racing Steering Wheel with Paddle Shifters",
    brand: "MODRIVE Skunkworks",
    origin: "local",
    originLabel: "Local Bespoke",
    category: "interior",
    fitment: "Universal Hub / BMW M & Porsche Splines",
    price: 485_000,
    priceLabel: "PKR 485,000",
    priceNote: "Demo Price",
    rating: 4.9,
    reviews: 31,
    stock: "in-stock",
    stockLabel: "In Stock (4 Units)",
    stockNote: "Hand-stitched in Workshop",
    stockColor: "text-primary-container",
    addedDate: "2025-04-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw1pC2TrTkyqe_ouo7riw7rh_rI7EyTJtPuQHYtOH6JUf25wsZ-2cSWUkFyJ_UmfbuKyOdncwL9yDo0ShOWLAX3qWvDOrQbPJhXnw9J90EdDa2wk6wxdAf3LX7uNuw7kKdE8hBeGvhQGAwxOom2tNwLz1BZLm0SFXlNmhKFRQ2U844wV1J7jOU-6q4-gQFy1zXeM9Wpoq7-9GIC_qRjV87RUjop0PvyvDlIE9H-COmQ3umiHVi41KIgw",
    alt: "Bespoke forged carbon fiber steering wheel with perforated Alcantara grips and lime green paddle shift indicators.",
  },
  {
    id: "hre-p101sc-set",
    sku: "HRE-P101SC-SET",
    name: 'HRE P101SC Forged Monoblock Wheel Set (20"/21") — Satin Bronze',
    brand: "HRE Performance Wheels",
    origin: "imported",
    originLabel: "Imported (USA)",
    category: "wheels",
    fitment: "Custom PCD / Offsets",
    price: 2_450_000,
    priceLabel: "PKR 2,450,000",
    priceNote: "Demo Price (Set of 4)",
    rating: 4.8,
    reviews: 15,
    stock: "bto",
    stockLabel: "Built to Order (3 Wks)",
    stockNote: "Custom Forging",
    stockColor: "text-secondary-fixed-dim",
    addedDate: "2025-01-10",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGzBrGhEfqHltMKfBI4NOY_CSME4vcR3OK8ydahtl21cm1cS4OVxfgEg5C8j8dO1-uW3-HzVEyb6XQUvoCVtyR-wsHSIZvtrVoJnBvcOSiKgsMpC0RosWOvXeAXcBi24WMiROAg5aIBGuuRkHI2QQfm4GPU6YRPuGkHegnYTfeJEVteOKX3W8st0XlnPpx2lZ0ZKiZNGax49SKOF0Ezb463ExWbDL-c5q5AFJcIMlZXFJ8x7IVgCbLhA",
    alt: "HRE P101SC forged monoblock wheel in satin bronze finish with brushed structural spokes under studio macro lighting.",
  },
  {
    id: "kw-v4-supra",
    sku: "KW-35210874",
    name: "KW V4 Clubsport 3-Way Adjustable Coilover Kit",
    brand: "KW Suspensions",
    origin: "imported",
    originLabel: "Imported (Germany)",
    category: "suspension",
    fitment: "Fits Toyota GR Supra A90",
    price: 1_890_000,
    priceLabel: "PKR 1,890,000",
    priceNote: "Demo Price",
    rating: 4.9,
    reviews: 11,
    stock: "in-stock",
    stockLabel: "In Stock (3 Kits)",
    stockNote: "Ships in 48h",
    stockColor: "text-primary-container",
    addedDate: "2025-03-05",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP8XzVy3ljVpiFRaUPZrOnZEC3KKS3YMwddYrL9uvPYhpZlJxiup2y8pVcajqztCJyA52i7w67iU-tNxvf1-JHqilzzipHD847O-H0So-908UFGaAgdiqfyioMGAx9IIKxq-UXiJrnn_DGKwh3DalEQn13gdsdE2QaFTAWh_X9--2xbH7BKuceWyCn7F8plIjPuQ-AiMBAz5-kVEBwcmIxkZD8OypOY_CJJPXtpqmEv523k-s0EnYyPg",
    alt: "KW V4 Clubsport adjustable coilover strut with yellow racing springs and purple anodized billet top mount dials.",
  },
  {
    id: "evt-carb-intake",
    sku: "EVT-S55-FULL",
    name: "Eventuri Full Carbon Fiber Cold Air Induction System (S55 Engine)",
    brand: "Eventuri Carbon",
    origin: "imported",
    originLabel: "Imported (UK)",
    category: "suspension",
    fitment: "Fits BMW M3 / M4 (F80/F82 — S55)",
    price: 720_000,
    priceLabel: "PKR 720,000",
    priceNote: "Demo Price",
    rating: 4.7,
    reviews: 19,
    stock: "in-stock",
    stockLabel: "In Stock (5 Units)",
    stockNote: "Direct Air Freight",
    stockColor: "text-primary-container",
    addedDate: "2025-04-15",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0w-Wcx1BwjNsw-w_cS0olnUUseluDBSQSNQpptku_4vc3CxjJNVDJ-bvVvbQdgqXTXgBKW2YDzB0Vu_QPHmDiq3ZUyo7CTUKKYuYlpXGxqYu0xHu3oxSi3oxDMfmcS70kl7RzETJjOdmiLEuUgK5UGSSWN0ttPYOHfkulpXIPMu29kIBnGCcp55HVke0JXIFxX29doR924UAK9BYWR6zHvCY1SPSCdhYOgDN83PgLa6NjNn5wGY2k2w",
    alt: "Eventuri carbon fiber cold air induction system with precision-engineered intake manifold under studio lighting.",
  },
  {
    id: "vrst-992-aero-09",
    sku: "VRST-992-AERO-09",
    name: "Vorsteiner V-Aero Dry Carbon Swan-Neck Rear Wing (Track Spec)",
    brand: "Vorsteiner Aero",
    origin: "imported",
    originLabel: "Imported (USA)",
    category: "wings",
    fitment: "Fits Porsche 992 GT3 RS",
    price: 1_250_000,
    priceLabel: "PKR 1,250,000",
    priceNote: "Demo Price",
    rating: 4.9,
    reviews: 8,
    stock: "in-stock",
    stockLabel: "In Stock (2 Units)",
    stockNote: "Ships in 48h",
    stockColor: "text-primary-container",
    addedDate: "2025-02-10",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5z0EgejQCRbMFmhNRFDci7DD8ybFOzWRdYuJJ1ESg3K0f7VUY4K8LdDKZsgZlGn2bD1UnYsOH93vMNDucj8rmimxvRO4M_Pol-TLqK_iGSs2VxW3rq9uuz-sIirIj3fmQMpfycs-BjINJfdseP95133AKQW5Bycv1y4VBVsG98dsIs-pF1tRQQCpFvM6WZv0_kwMJo4bbMjOo-s-2MT2Oyi7RmCJ57IPk6kJlRoLdIMPv3DtR4VyjCw",
    alt: "Vorsteiner carbon fiber GT aerodynamic wing with billet upright mounts on dark reflective graphite podium.",
  },
  {
    id: "mdr-carbon-splitter",
    sku: "MDR-SPLIT-997",
    name: "MODRIVE Skunkworks Wide-Arch Front Splitter — Pre-Preg Carbon",
    brand: "MODRIVE Skunkworks",
    origin: "local",
    originLabel: "Local Bespoke",
    category: "aero",
    fitment: "Fits Porsche 997 / 991 GT3",
    price: 895_000,
    priceLabel: "PKR 895,000",
    priceNote: "Demo Price",
    rating: 4.8,
    reviews: 14,
    stock: "bto",
    stockLabel: "Built to Order (10 Days)",
    stockNote: "Workshop Fabricated",
    stockColor: "text-secondary-fixed-dim",
    addedDate: "2025-05-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu175tATeP_2Fwe_8GjDoiYN3SMkSI6M5qVkAQowjaAyBH-udNkatylzYocjj7Xn-YRBbuzf5G0UDYGi_ofxJVisoWSn6WvunYR0p6T_bhs8dadKvv8VhSnvjgwqUTQKNFe1JkhvaGub-nFPVaCorIdBb7yDWfdqhPoVjlpASZNXfdnzGERozD06Rqs1lh7RMyW5o1_v1MD4NFgIwL67zyW90NOnyukU6vxPKSU6SCKzPtLxnuYmvBCQ",
    alt: "Wide-arch front splitter carbon fiber assembly on dark automotive workshop surface with precise edge detailing.",
  },
  {
    id: "bbs-ci-r-supra",
    sku: "BBS-CIR-A90",
    name: "BBS CI-R Nürburgring Edition Forged Wheel Set (19x8.5 / 19x10)",
    brand: "BBS Motorsport",
    origin: "imported",
    originLabel: "Imported (Germany)",
    category: "wheels",
    fitment: "Fits Toyota GR Supra A90 / BMW Z4 G29",
    price: 2_100_000,
    priceLabel: "PKR 2,100,000",
    priceNote: "Demo Price (Set of 4)",
    rating: 4.8,
    reviews: 6,
    stock: "in-stock",
    stockLabel: "In Stock (1 Set)",
    stockNote: "Limited Stock",
    stockColor: "text-primary-container",
    addedDate: "2025-03-20",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPC4HLE0fFx8LMSEd6UypW4EzDqz9SPCKeVxbmhlQ3bOz6Q2xs8CVUmQwC0ePhnHfUZvrkKmrhLo1HjHpSp43HOHFQEYKtkKR76lGI545J9vk9vPfbrq6JWjSfSlisv0apT6ZV6mmt-Q27e5li0EXeWBwyRwIytlXexgrjq80kEFOp-ct9SWxoSdyoSEBjjOU4h2Y0VnwNm0rEe_YpHmS57MNBqHdkUqHavWTex7urNUq3u9npBAuxDQ",
    alt: "BBS CI-R Nurburgring edition forged wheels with multi-spoke design mounted on a sports coupe.",
  },
];

/**
 * Apply all active filters + sort to a product list.
 * @param {Object} filters
 * @returns {Product[]}
 */
export function applyFilters(products, filters) {
  let result = [...products];

  // Category
  if (filters.category && filters.category !== "all") {
    result = result.filter((p) => p.category === filters.category);
  }

  // Origin
  if (filters.origin && filters.origin !== "all") {
    result = result.filter((p) => p.origin === filters.origin);
  }

  // Brand (multi-select — empty means "any")
  if (filters.brands && filters.brands.length > 0) {
    result = result.filter((p) => filters.brands.includes(p.brand));
  }

  // Price range
  if (filters.priceRange) {
    const range = PRICE_RANGES.find((r) => r.id === filters.priceRange);
    if (range) {
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }
  }

  // Availability
  if (filters.availability && filters.availability !== "all") {
    result = result.filter((p) => p.stock === filters.availability);
  }

  // Search query (name, brand, sku)
  if (filters.search && filters.search.trim() !== "") {
    const q = filters.search.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.fitment.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (filters.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
      break;
    default: // "featured" — keep original order
      break;
  }

  return result;
}
