/**
 * MODRIVE 3D Studio — Mock Data
 * All specs, prices, and performance figures are illustrative portfolio demo data.
 * No real-world compatibility, pricing, or availability is implied.
 */

// ── Vehicles ──────────────────────────────────────────────────────────────────
export const STUDIO_VEHICLES = [
  {
    id: "porsche-gt3rs",
    category: "track",
    badge: "PORSCHE MOTORSPORT",
    buildCode: "STUDIO // MD-SIM-001",
    name: "2024 Porsche 911 GT3 RS",
    shortName: "911 GT3 RS",
    platform: "992 GT3 RS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe54Tc8xrpH0CD_bz-hW_xs8eahzgbvmqq0sbAKI-13js7MQbKp0MG2J1ej-5y9YvVdJfPoeXiDqj7QHlYfsWhyv3ENYNP272rt9J2kEaFjz3IbNkd6STWjLBEX_tuGfvJ18IYxTmT0b9T2IuQXuQi1KGLYfbFJ1z8p8ROFXdzneFZ0KnTznv-2uSw5bpcKuzZnrLyu7aKkEL349g4mWEVpJyKPnfZIKTodAg0KhXWPbt1S3kSEU_bSw",
    specs: { hp: 525, torque: 465, weight: "1,420 KG", drivetrain: "RWD" },
    basePrice: 8500000,
    tag: "TRACK SPEC",
  },
  {
    id: "bmw-m4",
    category: "euro",
    badge: "BMW M DIVISION",
    buildCode: "STUDIO // MD-SIM-002",
    name: "2024 BMW M4 Competition",
    shortName: "M4 Competition",
    platform: "G82 M4",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCG-vrp00yQ8aDsLRmApaZ6QSDzmo2lJgvslCfSibpkmAA8lvgJkrJrSzQ_hPY6cFbI6cRbjKIP73cB5Q7NIp2DKkt28_YtCzAnsn1DMYLVrisyW4iPZZryQOMQwe0iSzlKQNLNzbn_hfbVSpVl422iFRwkZNFvivyUFdjG-duWP4S1vONEwahGQNkHM2vw8ubZu530TccVRXLL_ivpTl6Cc9Vn0cY28ATiMDd3-38YhiobTvH5plOxGQ",
    specs: { hp: 510, torque: 650, weight: "1,725 KG", drivetrain: "RWD / xDrive" },
    basePrice: 6200000,
    tag: "STREET PERFORMANCE",
  },
  {
    id: "nissan-gtr",
    category: "jdm",
    badge: "NISSAN NISMO",
    buildCode: "STUDIO // MD-SIM-003",
    name: "2024 Nissan GT-R Nismo",
    shortName: "GT-R Nismo",
    platform: "R35 Nismo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1BZqOq5X2G--wHx2Yf_fBRaTJFxluI4mEiHIpRKwdhtH8iR8Fzy9p3AoPb3kUZg0v3AKV1hR2oNTPrqQSxD2OJc83TrOVjpADvTmVKLlnTUgSJKCTYUyCkPfkWCqh7sRdAtJovmUkqJBbzfmjYU7B4rqfCELSUkN7JgE0k0Pd6NkMNzHRwvgVp3M8LgcS2vLp5mT1j3a1JIjF9jKFsQSS_Sg9v8e5NN-uDG_Cj5eTm8r3ZME",
    specs: { hp: 600, torque: 640, weight: "1,740 KG", drivetrain: "AWD" },
    basePrice: 7800000,
    tag: "JDM LEGEND",
  },
  {
    id: "toyota-supra",
    category: "jdm",
    badge: "TOYOTA GAZOO RACING",
    buildCode: "STUDIO // MD-SIM-004",
    name: "2024 Toyota GR Supra",
    shortName: "GR Supra",
    platform: "A90 MK5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBz-OFPKjM3xT31cY1e_0NjK4QQ3iB_ItALs_nLe_aqIFv5pn5VYVNxWvCMRXC0xVi7_sFtZT9dKGTRb3HHtBk5_8r6G2BfBGZX7tBYG5GWxFLhQhJzG6vFWFJIhNlK6oGGCj5JH4bEWRqbHQVVMDdj3EqQ1Ap3G_1mXD_S3R3dXb-LJWtNkEqIe5Cz9cX3cQjEo5S8tHZrwg",
    specs: { hp: 387, torque: 500, weight: "1,570 KG", drivetrain: "RWD" },
    basePrice: 4900000,
    tag: "JDM STREET",
  },
];

export const VEHICLE_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "jdm", label: "JDM" },
  { id: "euro", label: "Euro" },
  { id: "track", label: "Track" },
];

// ── Paint Options ─────────────────────────────────────────────────────────────
export const PAINT_COLORS = [
  { id: "obsidian-black", label: "Obsidian Black", hex: "#0a0a0a", price: 85000 },
  { id: "alpine-white", label: "Alpine White", hex: "#f0f0ee", price: 75000 },
  { id: "nardo-grey", label: "Nardo Grey", hex: "#7d7f7c", price: 90000 },
  { id: "racing-red", label: "Racing Red", hex: "#b01e2c", price: 95000 },
  { id: "emerald-lime", label: "Emerald Lime", hex: "#b8f000", price: 120000 },
];

export const PAINT_FINISHES = [
  { id: "matte-satin", label: "Matte Satin", price: 45000 },
  { id: "gloss", label: "Gloss", price: 30000 },
  { id: "carbon", label: "Carbon Wrap", price: 180000 },
];

// ── Wheel Styles ──────────────────────────────────────────────────────────────
export const WHEEL_STYLES = [
  {
    id: "bbs-fi-r",
    brand: "BBS FI-R",
    subtitle: "Bronze Monoblock 20/21-inch",
    sku: "BBS-FIR-992",
    price: 4890000,
    icon: "tire_repair",
  },
  {
    id: "hre-p101",
    brand: "HRE P101",
    subtitle: "Satin Silver 19-inch",
    sku: "HRE-P101-SS",
    price: 3650000,
    icon: "tire_repair",
  },
  {
    id: "volk-te37",
    brand: "Rays Volk TE37",
    subtitle: "Gold Forged 18-inch",
    sku: "VOLK-TE37-GLD",
    price: 2100000,
    icon: "tire_repair",
  },
];

// ── Ride Height ───────────────────────────────────────────────────────────────
export const RIDE_HEIGHT_OPTIONS = [
  { id: "low", label: "Low", subtitle: "-35mm from stock", price: 185000 },
  { id: "mid", label: "Mid", subtitle: "-15mm from stock", price: 120000 },
  { id: "oem", label: "OEM", subtitle: "Factory ride height", price: 0 },
];

// ── Aero Systems ──────────────────────────────────────────────────────────────
export const AERO_OPTIONS = [
  { id: "stock", label: "Stock", subtitle: "OEM factory aero package", price: 0 },
  {
    id: "carbon-aero",
    label: "Carbon Aero",
    subtitle: "Vorsteiner pre-preg dry carbon splitter & wing",
    price: 3200000,
  },
  {
    id: "widebody",
    label: "Widebody",
    subtitle: "+65mm per side carbon fibre widebody flare kit",
    price: 5400000,
  },
];

// ── Performance Upgrades ──────────────────────────────────────────────────────
export const PERF_UPGRADES = [
  {
    id: "exhaust",
    label: "Valvetronic Titanium Exhaust",
    brand: "Akrapovič",
    sku: "AKR-EVO-TI",
    price: 3750000,
    icon: "volume_up",
  },
  {
    id: "suspension",
    label: "3-Way Coilover Suspension",
    brand: "KW Suspensions",
    sku: "KW-V4-CLUB",
    price: 2150000,
    icon: "tune",
  },
  {
    id: "brakes",
    label: "Carbon Ceramic Brake Upgrade",
    brand: "Brembo",
    sku: "BRB-CCM-GT",
    price: 2900000,
    icon: "stop_circle",
  },
  {
    id: "ecu",
    label: "Stage 2 ECU / Dyno Calibration",
    brand: "MODRIVE Skunkworks",
    sku: "MDR-ECU-STG2",
    price: 640000,
    icon: "memory",
  },
];

// ── Recommended Parts ─────────────────────────────────────────────────────────
export const RECOMMENDED_PARTS = [
  {
    id: "rec-wheels",
    category: "Wheels",
    name: "BBS FI-R Bronze Monoblock",
    description: "Centerlock forged monoblock — 7.9 kg front / 9.2 kg rear. Wind-tunnel balanced.",
    price: "PKR 4,890,000",
    badge: "Demo Item",
    icon: "tire_repair",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe54Tc8xrpH0CD_bz-hW_xs8eahzgbvmqq0sbAKI-13js7MQbKp0MG2J1ej-5y9YvVdJfPoeXiDqj7QHlYfsWhyv3ENYNP272rt9J2kEaFjz3IbNkd6STWjLBEX_tuGfvJ18IYxTmT0b9T2IuQXuQi1KGLYfbFJ1z8p8ROFXdzneFZ0KnTznv-2uSw5bpcKuzZnrLyu7aKkEL349g4mWEVpJyKPnfZIKTodAg0KhXWPbt1S3kSEU_bSw",
  },
  {
    id: "rec-suspension",
    category: "Suspension",
    name: "KW V4 Clubsport 3-Way Coilover",
    description: "Independent hi/lo compression & rebound. Laser corner-balanced in our workshop.",
    price: "PKR 2,150,000",
    badge: "Demo Item",
    icon: "tune",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCG-vrp00yQ8aDsLRmApaZ6QSDzmo2lJgvslCfSibpkmAA8lvgJkrJrSzQ_hPY6cFbI6cRbjKIP73cB5Q7NIp2DKkt28_YtCzAnsn1DMYLVrisyW4iPZZryQOMQwe0iSzlKQNLNzbn_hfbVSpVl422iFRwkZNFvivyUFdjG-duWP4S1vONEwahGQNkHM2vw8ubZu530TccVRXLL_ivpTl6Cc9Vn0cY28ATiMDd3-38YhiobTvH5plOxGQ",
  },
  {
    id: "rec-exhaust",
    category: "Exhaust",
    name: "Akrapovič Titanium Evolution Line",
    description: "Full titanium with inconel manifolds. Active acoustic flaps. -14.2 kg saving.",
    price: "PKR 3,750,000",
    badge: "Demo Item",
    icon: "volume_up",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe54Tc8xrpH0CD_bz-hW_xs8eahzgbvmqq0sbAKI-13js7MQbKp0MG2J1ej-5y9YvVdJfPoeXiDqj7QHlYfsWhyv3ENYNP272rt9J2kEaFjz3IbNkd6STWjLBEX_tuGfvJ18IYxTmT0b9T2IuQXuQi1KGLYfbFJ1z8p8ROFXdzneFZ0KnTznv-2uSw5bpcKuzZnrLyu7aKkEL349g4mWEVpJyKPnfZIKTodAg0KhXWPbt1S3kSEU_bSw",
  },
  {
    id: "rec-brakes",
    category: "Brakes",
    name: "Brembo Carbon Ceramic (CCM)",
    description: "390mm front rotors with 6-piston monoblock aluminium calipers in Lime Green.",
    price: "PKR 2,900,000",
    badge: "Demo Item",
    icon: "stop_circle",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCG-vrp00yQ8aDsLRmApaZ6QSDzmo2lJgvslCfSibpkmAA8lvgJkrJrSzQ_hPY6cFbI6cRbjKIP73cB5Q7NIp2DKkt28_YtCzAnsn1DMYLVrisyW4iPZZryQOMQwe0iSzlKQNLNzbn_hfbVSpVl422iFRwkZNFvivyUFdjG-duWP4S1vONEwahGQNkHM2vw8ubZu530TccVRXLL_ivpTl6Cc9Vn0cY28ATiMDd3-38YhiobTvH5plOxGQ",
  },
];

// ── Default configuration ─────────────────────────────────────────────────────
export const DEFAULT_CONFIG = {
  vehicleId: "porsche-gt3rs",
  paintColorId: "obsidian-black",
  paintFinishId: "gloss",
  wheelId: "bbs-fi-r",
  rideHeightId: "low",
  aeroId: "carbon-aero",
  perfUpgrades: ["exhaust", "suspension"],
};
