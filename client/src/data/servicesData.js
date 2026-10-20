/**
 * MODRIVE Services Data
 * Covers all 6 engineering disciplines, AWD Dyno deep-dive, and the 4-step process.
 * All prices and metrics are illustrative demo data for portfolio purposes.
 */

export const WORKSHOP_STATS = [
  {
    icon: "verified",
    title: "100% CAD Fitment",
    subtitle: "Zero-rubbing guarantee",
  },
  {
    icon: "speed",
    title: "AWD Dyno Cell",
    subtitle: "2,500 BHP synchronized cap",
  },
  {
    icon: "straighten",
    title: "Zero-Tolerance Laser",
    subtitle: "Beissbarth optical alignment",
  },
  {
    icon: "shield",
    title: "Cleanroom XPEL PPF",
    subtitle: "Negative-pressure dust control",
  },
];

export const SERVICES_LIST = [
  {
    id: "ecu-tuning",
    specCode: "ECU-SPEC // 01",
    tagline: "Stage 1–3 Custom Maps • Syvecs / MoTeC • Anti-Lag & TCU",
    title: "Performance Tuning & ECU Calibration",
    description:
      "Real-time road and dynamometer calibration fine-tuned for high-octane fuels, boost curves, ignition timing, and rev limits with full telemetry logging.",
    actionText: "Explore Tuning Protocol",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1X7lDDUHXGLyL8Rn9cF2fdhMadmWL8d3QJYY5NnMJ-ifx2un4Au45IO7FFF-hULzD6WfsQWgoaAMjkN_Yf75SrpVpp25YMhnOzlfQ5ibV75halpoW8R_Otvl9d-C7wUNSbEDvBlqZlY1nKO8Wsf2FTo-WBJ6mnP57ded_ZAQ0cWYA9NGCcyeqpiziPdh1DR38H96iCmG52eWY7GMv81Skv_FguGW0h-kWQcTotd6_jU72zhCLoVxRAI84hY",
    leadTime: "2–4 Days",
    features: [
      "Custom live dyno map switching",
      "Wideband AFR & knock monitoring",
      "Pop-and-bang / anti-lag calibration",
      "TCU torque limiter release",
    ],
    samplePrice: "PKR 85,000 – 250,000 (Demo)",
  },
  {
    id: "suspension-chassis",
    specCode: "CHASSIS-SPEC // 02",
    tagline: "KW 3-Way Coilovers • Corner Balancing • Poly Bushings",
    title: "Suspension & Chassis Engineering",
    description:
      "Full track setup with individual wheel scales, ride height corner balancing, bump-steer correction, and laser camber/caster alignment.",
    actionText: "View Chassis Services",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1X7lDDUHXGLyL8Rn9cF2fdhMadmWL8d3QJYY5NnMJ-ifx2un4Au45IO7FFF-hULzD6WfsQWgoaAMjkN_Yf75SrpVpp25YMhnOzlfQ5ibV75halpoW8R_Otvl9d-C7wUNSbEDvBlqZlY1nKO8Wsf2FTo-WBJ6mnP57ded_ZAQ0cWYA9NGCcyeqpiziPdh1DR38H96iCmG52eWY7GMv81Skv_FguGW0h-kWQcTotd6_jU72zhCLoVxRAI84hY",
    leadTime: "3–5 Days",
    features: [
      "Hunter 3D Hawkeye laser alignment",
      "Per-corner digital scale weight balancing",
      "Track-specific bump and rebound damping",
      "Reinforced subframe & poly bushing install",
    ],
    samplePrice: "PKR 120,000 – 380,000 (Demo)",
  },
  {
    id: "aero-carbon",
    specCode: "AERO-SPEC // 03",
    tagline: "Vorsteiner / Duke Dynamics • Pre-Preg Dry Carbon • OEM Panel Gapping",
    title: "Aero Kits & Carbon Fiber Body Mods",
    description:
      "Aerodynamic widebody installation, carbon splitters, rear swan-neck wings, and carbon hood alignment with laser panel gap tolerances.",
    actionText: "Explore Aero Craft",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VxccFbeCglRPPo6TEE33rUWVztZ0-0cyCgqvqsGEIdiqdsSTLZ-I7kAdQZCDheK7unEyr5hjM2TlyBJJEJ2ZuTs5CbOTG0nEQMw06u4dv_9Tie6B1QVMxidiTVcorCZLOKBmA3JYgagQqp0ovEaUN_tO1rRKnAY1lNSwK7KYRmJqssA8lR3yOMg8ssGTh2ftFY33P9s5dVGlUUdKpLrMp4PUB_wkyw_ng50uISIk4fv8YOuZhwaYaP3EA",
    leadTime: "5–10 Days",
    features: [
      "Dry vacuum pre-preg carbon fitment",
      "Chassis-mounted rear swan-neck brackets",
      "Laser gap-matching to OEM standards",
      "Wind-tunnel verified aero downforce balance",
    ],
    samplePrice: "PKR 250,000 – 750,000 (Demo)",
  },
  {
    id: "valvetronic-exhaust",
    specCode: "ACOUSTIC // 04",
    tagline: "Titanium TIG Welded • Remote Valve Control • Downpipes",
    title: "Valvetronic Exhaust Systems",
    description:
      "Custom bespoke fabrication and bolt-on installation of lightweight titanium exhaust systems with active wireless sound mode integration.",
    actionText: "Inspect Exhaust Work",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1U7jacpPw8UOxmvxy8cjnoX9KTtT2fAOl3xPsiK5xLPxUpndWe97pkdq4pWsndhG8Jb3wzh1Tg1-YOfHgUf4lKlEIfg2jBx0FX_eYBicAYDB5hoQKhnsI8q9PQFNWNcje7wnOeIXSyqa4DOoxtKGJFmC7q3bvjWtK7wIqq79TE1za8_5TpHDpCHh0BjsUUf0Ku4fHgT-Cq-VRgeDDR2zPYByDCCAAa6SIsE8-kgxhwDR_JFejCqiPx3iKix",
    leadTime: "2–4 Days",
    features: [
      "Aerospace grade titanium TIG welding",
      "Dual wireless pneumatic valve remotes",
      "Thermal heat shielding & wrap",
      "Drone cancellation chamber resonance tuning",
    ],
    samplePrice: "PKR 180,000 – 520,000 (Demo)",
  },
  {
    id: "forged-wheels-fitment",
    specCode: "ROTATIONAL // 05",
    tagline: "Custom PCD & Offsets • Flush Stance • Ceramic Coated",
    title: "Forged Wheels & Bespoke Fitment",
    description:
      "3D laser caliper scan fitment, multi-piece modular wheel assembly, high-speed road-force balancing, and Michelin Cup 2 tire mounting.",
    actionText: "Review Wheel Fitment",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UDpE2IzUqAmpGWMOyi3fFErVG-PZGB8mZSwR-k8O3xQ6pU6SFRxhWk4zxFsrVm5VBVpPoo2CIVL00UvcoRJ9Jcx0m1VDH-vXbKQyVLT82SCA1OFMY6c2YCc6trwVYXV4X2n06UUnl5daGUBCQmNqv7EJMGcO7w3xy4jxk6wfJnPxn-kHqmlDg_WnuEmRV4A6rgVojD07HarSKrNgJE-A4EeH4JwGhqvoAAHKKRLYzZCAu7bNNNgBCvnSeQ",
    leadTime: "1–3 Days",
    features: [
      "Hunter Road Force tire balancing",
      "Custom CNC hub-centric rings",
      "Touchless tire mounting up to 24-inch",
      "9H ceramic protection coating",
    ],
    samplePrice: "PKR 90,000 – 280,000 (Demo)",
  },
  {
    id: "braking-upgrades",
    specCode: "THERMAL-KINETIC // 06",
    tagline: "Brembo GT / AP Racing 6-Piston • Carbon Ceramic Discs • Braided Lines",
    title: "Braking Upgrades & Ceramic Retrofits",
    description:
      "Monoblock caliper conversions, oversized floating two-piece rotors, racing high-temperature brake fluid flush, and track heat bedding.",
    actionText: "View Brake Systems",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VJLyIo_n1fP1EIfqepBuLWmJIya3JIxAzK7Rquv7fKmVCDUPH0Aafy5hm97LiHOmrmMvXnqHvvp4yU0tWegQTDsvQz3_1zpt-9q6hF-fiwLLqCqgm4MO_ghydh7O1ss1wm4DeZ-3dI46CiipeRv3SgKc8NhE-DO8lBGW_ZZo_ktZIU8Aj4tiMvD-pph7n6vP52O_KZwQ_kDfGhhblGkuY895CzZOyDb09r-WNytoy_AK454Bsck9d3bWgT",
    leadTime: "2–4 Days",
    features: [
      "Forged monoblock 6 & 8 piston calipers",
      "Carbon-ceramic rotor retrofit",
      "Castrol SRF synthetic racing fluid flush",
      "Dyno pad bedding procedure",
    ],
    samplePrice: "PKR 350,000 – 1,100,000 (Demo)",
  },
];

export const DYNO_DELIVERABLES = [
  "Pre-tune 40-point mechanical health check & cylinder compression test",
  "Custom multi-map switching (Eco / Street 98 / Race E85 & Methanol)",
  "High-resolution dyno graph printout with certified horsepower & torque delta",
  "12-month software calibration warranty and complimentary safety re-flash",
];

export const BUILD_PROCESS_STEPS = [
  {
    step: "01",
    phase: "Phase I",
    title: "Consultation & Scope Definition",
    description:
      "Discuss performance goals, driving style, aesthetic preferences, and budget parameters with our technical build leads.",
    badge: "Technical Onboarding",
  },
  {
    step: "02",
    phase: "Phase II",
    title: "3D Laser & Vehicle Assessment",
    description:
      "Comprehensive baseline dynamometer run, mechanical health inspection, and 3D chassis scan to ensure zero fitment conflicts.",
    badge: "Sub-Millimeter Scan",
  },
  {
    step: "03",
    phase: "Phase III",
    title: "Bespoke Build Planning & Sourcing",
    description:
      "CAD fitment rendering, milestone scheduling, and genuine direct air-freight parts allocation from Germany, USA, and Japan.",
    badge: "Direct Air Freight",
  },
  {
    step: "04",
    phase: "Phase IV",
    title: "Installation & Track Shakedown",
    description:
      "Precision torqued assembly, panel gapping verification, road calibration test, and handover with full photographic build documentation.",
    badge: "Track-Ready Verification",
  },
];
