# MODRIVE — High Performance Automotive Studio & Customizer

> **Phase 6 Complete** · Home Page + Shop Catalog + Services + Build Gallery + 3D Studio + About Us
> Status: Development · Version: 0.6.0

A premium automotive modification e-commerce and realistic 3D car customization portfolio project built on the MERN stack. MODRIVE lets users design, simulate, and engineer bespoke automotive builds with direct access to aftermarket aero, suspension, exhaust, and forged wheel components.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 (custom design tokens) |
| Routing | React Router v6 |
| Backend | Node.js + Express 4 |
| Database | MongoDB (planned — Phase 4) |
| Icons | Material Symbols Outlined (Google Fonts CDN) |
| Fonts | Geist (body), Syne (headings) via Google Fonts |
| Security | Helmet, CORS allowlist, body-size limit |

---

## Folder Structure

```
MODRIVE/
├── client/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── SiteHeader.jsx      # Fixed top nav (active indicator)
│   │   │   │   └── SiteFooter.jsx      # Footer with links & locations
│   │   │   ├── home/                   # Phase 1 Home components
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── TelemetryBadges.jsx
│   │   │   │   ├── VehicleSelector.jsx
│   │   │   │   ├── StudioSpotlight.jsx
│   │   │   │   ├── PerformanceCategories.jsx
│   │   │   │   ├── FeaturedProducts.jsx
│   │   │   │   ├── SignatureBuilds.jsx
│   │   │   │   ├── WorkshopServices.jsx
│   │   │   │   └── TrustMetrics.jsx
│   │   │   ├── shop/                   # Phase 2 Shop components
│   │   │   │   ├── ShopHero.jsx
│   │   │   │   ├── CategorySelector.jsx
│   │   │   │   ├── ShopToolbar.jsx
│   │   │   │   ├── VehicleCompatibilityFilter.jsx
│   │   │   │   ├── ShopFilters.jsx
│   │   │   │   ├── ProductCard.jsx
│   │   │   │   ├── ProductGrid.jsx
│   │   │   │   ├── Pagination.jsx
│   │   │   │   ├── ShopTrust.jsx
│   │   │   │   ├── ProductDetailModal.jsx
│   │   │   │   └── FeedbackToast.jsx
│   │   │   └── services/               # Phase 3 Services components
│   │   │       ├── ServicesIntro.jsx   # Breadcrumb, status pills & headline
│   │   │       ├── ServicesHero.jsx    # Workshop hero with telemetry & stats bar
│   │   │       ├── ServicesMatrix.jsx  # 6-discipline service matrix
│   │   │       ├── ServicesSpotlight.jsx # AWD Dyno re-mapping spotlight
│   │   │       ├── ServicesProcess.jsx # 4-step turnkey execution pipeline
│   │   │       ├── ServicesCTA.jsx     # Consultation call-to-action banner
│   │   │       ├── ServiceDetailModal.jsx # Discipline spec detail modal
│   │   │       └── ConsultationModal.jsx  # Interactive consultation booking form
│   │   │   └── gallery/                # Phase 4 Build Gallery components
│   │   │       ├── GalleryIntro.jsx    # Breadcrumb, status chips & display headline
│   │   │       ├── GalleryFilterBar.jsx# Sticky category pills, search & sort
│   │   │       ├── FeaturedBuild.jsx   # Flagship GT3 RS hero with 4 telemetry pillars
│   │   │       ├── BuildGrid.jsx       # 3-col build card grid with active sheet badge
│   │   │       ├── BuildPagination.jsx # Page navigation controls
│   │   │       ├── PartsBreakdown.jsx  # Technical BOM, chassis gauges & sheet export
│   │   │       └── GalleryCTA.jsx      # Dual 3D Studio & Shop catalogue cards
│   │   │   ├── studio/                 # Phase 5 3D Studio components
│   │   │   │   ├── StudioIntro.jsx     # Studio headline & status badge
│   │   │   │   ├── VehicleSelector.jsx # Left sidebar platform selection & search
│   │   │   │   ├── VehiclePreview.jsx  # View angles, lighting presets & hotspots
│   │   │   │   ├── CustomizerPanel.jsx # Swatches, wheels, stance, aero & perf
│   │   │   │   ├── BuildSummaryBar.jsx # Build summary & live estimate calculation
│   │   │   │   ├── ItemizedModal.jsx   # Full build sheet & line items
│   │   │   │   ├── RecommendedParts.jsx# Catalogue-matched upgrade cards
│   │   │   │   └── StudioCTA.jsx       # Consultation banner
│   │   │   └── about/                  # Phase 6 About Us components
│   │   │       ├── AboutHero.jsx       # Cinematic hero & ethos header
│   │   │       ├── AboutPhilosophy.jsx # 3 technical principles
│   │   │       ├── AboutWorkshop.jsx   # Split-screen craft & overlapping macro
│   │   │       ├── AboutProcess.jsx    # 4-step discovery-to-delivery roadmap
│   │   │       ├── AboutShowcase.jsx   # 3 portfolio archetypes
│   │   │       ├── AboutValues.jsx     # 4 foundational brand pillars
│   │   │       └── AboutCTA.jsx        # Closing CTA banner
│   │   ├── data/
│   │   │   ├── vehicleData.js          # Nested Make→Model→Year selector data
│   │   │   ├── productsData.js         # Home featured products
│   │   │   ├── categoriesData.js       # Home category cards
│   │   │   ├── buildsData.js           # Home signature builds
│   │   │   ├── shopProducts.js         # Catalog dataset + filtering logic
│   │   │   ├── servicesData.js         # 6 disciplines, dyno details & roadmap
│   │   │   ├── galleryData.js          # 7 categories, 6 registry builds & BOM specs
│   │   │   └── studioData.js           # Vehicles, finishes, wheels & aero specs
│   │   ├── pages/
│   │   │   ├── HomePage.jsx            # Assembles Home page
│   │   │   ├── ShopPage.jsx            # Assembles Shop catalog workspace
│   │   │   ├── ServicesPage.jsx        # Assembles Services workshop workspace
│   │   │   ├── GalleryPage.jsx         # Assembles Build Gallery archive workspace
│   │   │   ├── StudioPage.jsx          # Assembles 3D Studio customizer
│   │   │   ├── AboutPage.jsx           # Assembles About Us workspace
│   │   │   └── ShopPlaceholder.jsx     # Catch-all 404 page
│   │   ├── App.jsx                     # Router setup
│   │   ├── main.jsx                    # React entry point
│   │   └── index.css                   # Tailwind directives + base styles
│   ├── index.html                      # Google Fonts + Material Symbols
│   ├── tailwind.config.js              # Full reference token replication
│   ├── postcss.config.js
│   ├── vite.config.js                  # Dev proxy /api → Express :3001
│   └── package.json
├── Backend/
│   ├── server.js                       # Express server + /api/health
│   └── package.json
├── docs/
│   └── CHANGELOG.md
├── .gitignore
├── .env.example                        # Safe placeholder env vars
└── README.md
```

---

## Installation & Running

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### 1. Install Backend Dependencies
```bash
cd Backend
npm install
```

### 2. Install Client Dependencies
```bash
cd client
npm install
```

### 3. Set Up Environment Variables
```bash
# Copy the example — do not commit your real .env
cp .env.example .env
# Edit .env if you need a different port or origins
```

### 4. Run Both (Development)

**Terminal 1 — Express API:**
```bash
cd Backend
npm run dev
# Server starts on http://localhost:3001
```

**Terminal 2 — Vite frontend:**
```bash
cd client
npm run dev
# Frontend starts on http://localhost:5173
```

> The Vite dev server proxies `/api/*` requests to Express automatically — no CORS issues in development.

### 5. Production Build (Client)
```bash
cd client
npm run build
# Output in client/dist/
```

---

## Environment Variables

See [`.env.example`](.env.example) for all variables. Copy it to `.env` and fill in values.

| Variable | Default | Description |
|---|---|---|
| `NODE_ENV` | `development` | `development` or `production` |
| `PORT` | `3001` | Express server port |
| `ALLOWED_ORIGINS` | `http://localhost:5173` | Comma-separated CORS whitelist |
| `MONGODB_URI` | — | **Phase 3** — not used yet |
| `JWT_SECRET` | — | **Phase 3** — not used yet |

---

## Routes Implemented

### Frontend Routes

| Route | Status | Component |
|---|---|---|
| `/` | ✅ **Implemented** | `HomePage` — full 7-section reference |
| `/shop` | ✅ **Implemented** | `ShopPage` — full catalog workspace |
| `/services` | ✅ **Implemented** | `ServicesPage` — full workshop & disciplines workspace |
| `/customizer` | ⏳ Phase 4 | `CustomizerPlaceholder` |
| `/gallery` | ⏳ Future | `ShopPlaceholder` |
| `*` | ✅ 404 handled | `ShopPlaceholder` (not found) |

### Backend API Routes

| Endpoint | Method | Status | Description |
|---|---|---|---|
| `/api/health` | GET | ✅ Implemented | Returns server status JSON |

---

## What Is Complete

### Phase 1: Foundation + Home Page
- [x] React + Vite client structure
- [x] Express server with Helmet + CORS + body limits
- [x] `GET /api/health` endpoint
- [x] Full Home page matching reference (7 sections)
- [x] Reusable header & footer with active link detection

### Phase 2: Shop Page Frontend
- [x] Complete Shop page matching `shop-reference.html`:
  - [x] Compact Hero banner with breadcrumb, metrics, and telemetry strip
  - [x] Sticky Category Selector bar with live badge counts
  - [x] Action Toolbar with active filter chips, search, sort, and 3-way view switcher
  - [x] Vehicle Compatibility filter box with Make/Model/Year cascading lock
  - [x] Collapsible filter accordions (Categories, Provenance, Brands, Price Range, Availability)
  - [x] Responsive mobile filter drawer with overlay backdrop
  - [x] High-performance Product Cards with origin badge, SKU, wishlist toggle, ratings, fitment ping, stock note, demo price, and actions
  - [x] Responsive Product Grid with 3 view densities (`grid`, `compact`, `list`)
  - [x] Pagination with page numbers and dynamic range counts
  - [x] 4-item Trust & Quality guarantee banner
  - [x] Product Detail modal for CAD fitment and spec inspection
  - [x] Non-intrusive action feedback toasts on cart and wishlist updates
- [x] Client-side search, multi-brand filter, price range, and sort state handling
- [x] Graceful image error fallbacks on all product cards

### Phase 3: Services Page Frontend
- [x] Complete Services page matching `services-reference.html`:
  - [x] Breadcrumb bar and intro header with facility status pills & live lead times
  - [x] Workshop Hero showcase with tactical HUD tag, live telemetry, and 4-item stats bar
  - [x] 6-Discipline Specialized Services Matrix with spec codes, tags, and interactive detail modals:
    1. Performance Tuning & ECU Calibration
    2. Suspension & Chassis Engineering
    3. Aero Kits & Carbon Fiber Body Mods
    4. Valvetronic Exhaust Systems
    5. Forged Wheels & Bespoke Fitment
    6. Braking Upgrades & Ceramic Retrofits
  - [x] Featured AWD Dyno Re-Mapping & Powertrain Blueprinting deep-dive spotlight
  - [x] 4-Step Turnkey Execution Pipeline (Consultation, 3D Laser Assessment, Planning, Installation)
  - [x] Prominent Consultation CTA Banner with direct call link and consultation booking
  - [x] Interactive Service Detail Modal with deliverables checklist and demo pricing
  - [x] Frontend-only Consultation Booking Modal with full input validation and local reference confirmation
- [x] Active route indicator and pulsing dot on Services nav link
- [x] Synchronized breadcrumb and footer navigation links

## What Is NOT Implemented (Future Phases)

| Feature | Phase |
|---|---|
| Persistent Cart & Checkout flow | 3 |
| Authentication / JWT & User Accounts | 3 |
| MongoDB models & real Product REST API | 3 |
| Build Gallery & Workshop Scheduling | 3 |
| Real-time WebGL 3D Studio Configurator | 4 |
| Payment Gateway Integration | 4+ |
| Admin Inventory Management | Future |

> **Security note:** This is an initial frontend baseline. Server-side authorization, pricing validation, and database security will be implemented in Phase 3. Never trust client-supplied prices or user roles.

---

## Verification Results

Commands actually run and results (2026-10-14):

```
Backend:
  npm install
    → ✅ 72 packages added, 0 vulnerabilities

  node server.js + GET /api/health
    → ✅ STATUS: 200
    → ✅ BODY: {"status":"ok","service":"modrive-api","phase":1,
               "environment":"development","timestamp":"2026-10-14T..."}

Client:
  npm install
    → ✅ 330 packages added

  npm run build (Vite v5.4.21 - Phase 2)
    → ✅ 65 modules transformed, built in 25.54s, 0 errors
    → dist/index.html                  1.50 kB │ gzip:  0.82 kB
    → dist/assets/index-B0c5gEWX.css  34.27 kB │ gzip:  6.48 kB
    → dist/assets/index-BpPeHSai.js  282.53 kB │ gzip: 80.43 kB
```

> See [docs/CHANGELOG.md](docs/CHANGELOG.md) for a full record of this phase.

---

## Next Recommended Task — Phase 3: Backend API & MongoDB

- MongoDB connection & Mongoose schemas (Products, Users, Orders, Builds)
- Server-side REST endpoints: `GET /api/products` (filtering, sorting, pagination)
- User authentication & JWT authorization
- Persistent cart state & sync
- Build gallery & workshop services data endpoints

---

*MODRIVE Performance Studio — All prices are illustrative demo prices in PKR for portfolio showcase purposes.*
