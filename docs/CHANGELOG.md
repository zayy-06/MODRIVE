# MODRIVE — Changelog

All notable changes to this project are recorded here.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [0.1.0] — 2026-10-14 · Phase 1: MERN Foundation + Home Page

### Added

#### Project Structure
- Created `client/` (React + Vite) and `server/` (Express) directory structure
- Added `.gitignore` covering node_modules, .env files, build outputs, and logs
- Added `.env.example` with safe placeholder values — no secrets committed
- Added `README.md` with full setup instructions, routes table, and verification results
- Added `docs/CHANGELOG.md` (this file)

#### Server (`server/`)
- `server/index.js` — Express server with:
  - `helmet` security headers (CSP disabled for Google Fonts compatibility)
  - Strict CORS allowlist from `ALLOWED_ORIGINS` environment variable
  - JSON body-size limit (`64kb`) to prevent payload attacks
  - `GET /api/health` endpoint returning `{ status, service, phase, environment, timestamp }`
  - Central error handler that suppresses stack traces in production
  - `node --watch` dev script (no additional devDependencies needed)
- `server/package.json` — express, helmet, cors, dotenv

#### Client (`client/`)
- `client/package.json` — react, react-dom, react-router-dom, vite, tailwindcss v3, autoprefixer, postcss, eslint
- `client/vite.config.js` — `/api` proxy to Express :3001
- `client/tailwind.config.js` — all reference design tokens replicated exactly:
  - 50+ custom colors (graphite surfaces, lime primary accent `#b8f000`, etc.)
  - Custom spacing tokens (`margin`, `gutter`, `space-xl`, etc.)
  - Custom font families (Syne headlines, Geist body/labels)
  - Custom type scale (display-xl through body-sm, label-technical, metric-price)
  - Sharp border-radius (`DEFAULT: 0.125rem`) for technical aesthetic
- `client/postcss.config.js` — Tailwind + Autoprefixer
- `client/index.html` — Geist + Syne + Material Symbols Outlined via Google Fonts CDN
- `client/src/index.css` — Tailwind directives, scrollbar hiding, `::selection` colors, `.rounded-DEFAULT` utility, reduced-motion media query

#### React App Shell
- `client/src/main.jsx` — React 18 createRoot entry
- `client/src/App.jsx` — React Router v6 with routes: `/`, `/shop`, `/customizer`, `/services`, `/gallery`, `*`

#### Data Layer (local demo data — no DB)
- `client/src/data/vehicleData.js` — 5 makes × 2-3 models × 2-4 years for cascading selector
- `client/src/data/productsData.js` — 4 featured products with images, SKUs, prices, fitment
- `client/src/data/categoriesData.js` — 6 performance category cards
- `client/src/data/buildsData.js` — 3 signature build showcase entries

#### Layout Components
- `SiteHeader.jsx` — Fixed header: logo, desktop nav with active-route detection, search bar, vehicle selector button, wishlist badge, cart with PKR total, profile avatar
- `SiteFooter.jsx` — 5-column footer: brand, Explore links, Categories links, studio addresses, PKR disclaimer bar

#### Home Page Components (all 7 reference sections)
- `HeroSection.jsx` — Cinematic hero with background image, dual vignette gradients, editorial status badge, display-xl headline, supporting copy, dual CTA buttons
- `TelemetryBadges.jsx` — HUD floating badges (xl+ only, aria-hidden)
- `VehicleSelector.jsx` — Cascading Make → Model → Year selects with React state; submits to `/customizer`
- `StudioSpotlight.jsx` — Split layout: viewport mockup with HUD + node markers + camera presets (left), 3 capability cards + CTA (right)
- `PerformanceCategories.jsx` — 6-card bento grid (Aero, Wheels, Exhaust, Suspension, BBK, ECU)
- `FeaturedProducts.jsx` — 4 product cards with image error fallback + working filter tab state
- `SignatureBuilds.jsx` — 3 build showcase cards with image fallback, build numbers, prices
- `WorkshopServices.jsx` — 4 service highlight cards + consultation booking CTA
- `TrustMetrics.jsx` — 4 quality metric icon+text items

#### Pages
- `HomePage.jsx` — Assembles all 7 sections in reference order
- `ShopPlaceholder.jsx` — Reusable labeled placeholder with roadmap (used for /shop, /services, /gallery, 404)
- `CustomizerPlaceholder.jsx` — Dedicated Phase 4 placeholder for /customizer with feature preview grid

### Security Baseline
- Helmet security headers on all responses
- CORS restricted to `ALLOWED_ORIGINS` env list (not wildcard)
- 64KB body-size limit on JSON/urlencoded payloads
- No secrets in source code
- Production error handler does not leak stack traces
- No authentication, cart, or checkout in this phase — documented for Phase 3

### Known Limitations (Phase 1)
- Material Symbols and Google Fonts require internet access (CDN)
- `lh3.googleusercontent.com` images may fail in offline environments → `onError` fallback applied to all `<img>` tags
- Mobile layout is usable but not pixel-perfect — Phase 2 will refine breakpoints
- Filter tabs in FeaturedProducts only filter the 4 demo products; real filtering needs Phase 2 API
- Cart badge (2 items, PKR 485,000) is static demo data
- Wishlist count (3) is static demo data

## [0.2.0] — 2026-10-14 · Phase 2: Implement Shop Page Frontend

### Added

#### Shop Page & Components (`client/src/components/shop/`, `client/src/pages/`)
- `ShopPage.jsx` — Assembles the full Shop catalog workspace coordinating state for search, filters, sorting, vehicle fitment lock, pagination, view mode, wishlist, and cart actions.
- `ShopHero.jsx` — Compact hero banner featuring:
  - Breadcrumb hierarchy (`Home / Shop Catalogue / Verified Fitment Catalog`)
  - Status badge and header with ambient glows
  - Skunkworks metric panel (`Ready to Ship: 186 SKUs`, `Port Customs: Cleared • Karachi`)
  - Telemetry strip with 4 track-grade indicators
- `CategorySelector.jsx` — Sticky horizontal category selector bar (`All Parts`, `Wheels & Rims`, `Body Kits & Aero`, `Spoilers & Wings`, `Valvetronic Exhausts`, `Lighting & Lasers`, `Interior Bespoke`, `Suspension & Brakes`) with live badge counts and mobile filter toggle.
- `ShopToolbar.jsx` — Catalog action bar with:
  - Active filter chips with individual removal and "Clear All"
  - Dynamic result counter (`Showing X–Y of Z Products`)
  - Quick keyword search bar (filters by title, brand, SKU, fitment)
  - Sort dropdown (Featured, Price Low-to-High, Price High-to-Low, Newest First)
  - Layout view switcher (3-Column Grid, Compact Grid, List View)
- `VehicleCompatibilityFilter.jsx` — Interactive vehicle compatibility box utilizing cascading Make → Model → Year from `vehicleData.js`. Includes "Lock Fitment Criteria" button to lock and filter catalogue products by vehicle fitment.
- `ShopFilters.jsx` — Collapsible sidebar filter accordions with responsive mobile drawer support:
  - Category selector checkboxes
  - Provenance & Source (Imported EU/US/JP Direct Air vs MODRIVE Local Bespoke)
  - Performance Brands multi-select checkboxes
  - Price Range (PKR) min/max readout + quick budget buttons
  - Inventory availability radio buttons
  - Reset all filters button
- `ProductCard.jsx` — High-performance card featuring:
  - Product image with `onError` fallback
  - Origin and SKU badges
  - Toggleable wishlist heart button
  - Brand name, star rating, and review count
  - Vehicle fitment ping indicator
  - Stock availability and delivery notes
  - Demo price in PKR with demo label
  - "Details" inspection button and "Add to cart" button
- `ProductGrid.jsx` — Responsive grid supporting 3 view modes (`grid`, `compact`, `list`) with empty-state handling.
- `Pagination.jsx` — Pagination component with range indicator, page number buttons, and prev/next controls.
- `ShopTrust.jsx` — 4-item trust and quality guarantee banner (Genuine Imports, Streamlined Customs, Master Installation, Transparent PKR Pricing).
- `ProductDetailModal.jsx` — Modal dialog providing CAD fitment details, specifications, and actions when clicking "Details".
- `FeedbackToast.jsx` — Non-intrusive notification toast for wishlist and cart actions.

#### Data
- `client/src/data/shopProducts.js` — Comprehensive 12-product dataset with reference imagery, categories, brands, price ranges, and client-side filter/sort logic.

#### Routing & Layout Updates
- `App.jsx` — Routed `/shop` to `ShopPage` (replacing the temporary placeholder).
- `SiteHeader.jsx` — Updated Shop nav link to display active high-contrast styling with pulsing green indicator dot matching `shop-reference.html`.

### Verified Commands & Results
- `npm run build` in `client/` → 65 modules transformed, 0 errors, build completed in 25.54s.
- `GET /api/health` in `server/` → status 200 OK.

### Known Limitations (Phase 2)
- All cart additions, wishlist saves, and fitment locks operate in frontend React state only (no backend/database yet; planned for Phase 3).
- Displayed prices in PKR are illustrative portfolio demo numbers.
- Vehicle fitment matching uses mock keyword heuristics; actual CAD/VIN verification is simulated for demo purposes.

---

## [0.3.0] — 2026-10-14 · Phase 3: Services Page Frontend

### Added

#### Services Page & Components (`client/src/components/services/`, `client/src/pages/`)
- `ServicesPage.jsx` — Master Services workspace organizing the 6 visual reference sections and interactive modals.
- `ServicesIntro.jsx` — Section 1 breadcrumb bar (`Home / Services / Turnkey Performance Engineering`), facility live indicators (`4 Active Bays Available`, `Lead Time: 3–7 Business Days`), and display-xl headline: "Engineered Precision. Uncompromising Craft."
- `ServicesHero.jsx` — Section 2 workshop hero viewport featuring tactical HUD tag (`Skunkworks Bay 01 // V-Spec Cleanroom`), live environmental telemetry, lower focal architecture callout, and 4-column bottom technical stats bar:
  - 100% CAD Fitment (Zero-rubbing guarantee)
  - AWD Dyno Cell (2,500 BHP synchronized cap)
  - Zero-Tolerance Laser (Beissbarth optical alignment)
  - Cleanroom XPEL PPF (Negative-pressure dust control)
- `ServicesMatrix.jsx` — Section 3 specialized capabilities matrix presenting 6 core disciplines:
  1. Performance Tuning & ECU Calibration
  2. Suspension & Chassis Engineering
  3. Aero Kits & Carbon Fiber Body Mods
  4. Valvetronic Exhaust Systems
  5. Forged Wheels & Bespoke Fitment
  6. Braking Upgrades & Ceramic Retrofits
- `ServicesSpotlight.jsx` — Section 4 deep-dive feature focusing on AWD Dyno Re-Mapping & Powertrain Blueprinting with schematic overlay badge, 4 deliverable checkboxes with lime checkmarks, and dyno scheduling CTA button.
- `ServicesProcess.jsx` — Section 5 4-step turnkey execution pipeline (Consultation & Scope, 3D Laser Assessment, Bespoke Build Planning & Sourcing, Installation & Track Shakedown).
- `ServicesCTA.jsx` — Section 6 prominent consultation & workshop booking CTA banner with direct call link.
- `ServiceDetailModal.jsx` — Rich modal view displaying detailed specifications, deliverables, and estimated lead times for any of the 6 disciplines.
- `ConsultationModal.jsx` — Frontend consultation booking dialog with form validation (Name, Contact, Vehicle Platform, Discipline, Preferred Date, Build Notes) and local reference code generation (`MDR-ENG-#####`).

#### Data Layer
- `client/src/data/servicesData.js` — Structured dataset containing all 6 disciplines, workshop stats, dyno deliverables, and roadmap steps.

#### Routing & Layout Updates
- `client/src/App.jsx` — Mounted `ServicesPage` at `/services` route.
- `client/src/components/layout/SiteHeader.jsx` — Enhanced active nav state with pulsing green indicator dot on `/services` matching `services-reference.html`.

### Known Limitations (Phase 3)
- Consultation and dyno run bookings operate as client-side simulations; no backend booking API or email dispatch is connected.
- All pricing metrics (e.g. Sample PKR 85,000 for Dyno) are explicitly identified as illustrative portfolio demo data.

---

*Next Phase: Phase 4 — Real-time WebGL 3D Studio Configurator or Build Gallery.*
