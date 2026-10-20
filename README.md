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
| Database | MongoDB (planned) |
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

| Route | Status | Component | Description |
|---|---|---|---|
| `/` | ✅ **Implemented** | `HomePage` | Full 7-section flagship studio landing |
| `/shop` | ✅ **Implemented** | `ShopPage` | Full catalog workspace with vehicle fitment filters |
| `/services` | ✅ **Implemented** | `ServicesPage` | 6 disciplines matrix & consultation booking |
| `/gallery` | ✅ **Implemented** | `GalleryPage` | Registry builds, telemetry pillars & BOM specs |
| `/customizer` | ✅ **Implemented** | `StudioPage` | 3D Studio configurator & live build sheet |
| `/about` | ✅ **Implemented** | `AboutPage` | Cinematic hero, ethos, workshop & brand values |
| `*` | ✅ 404 handled | `ShopPlaceholder` | Catch-all page not found |

### Backend API Routes

| Endpoint | Method | Status | Description |
|---|---|---|---|
| `/api/health` | GET | ✅ Implemented | Returns server status JSON |

---

## What Is Complete

### Phase 1: Foundation + Home Page
- [x] React + Vite client structure & Tailwind CSS design system
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

### Phase 4: Build Gallery Frontend
- [x] Complete Build Gallery page matching `gallery-reference.html`:
  - [x] Breadcrumb bar and intro header with registry archive stats
  - [x] Sticky Category Filter bar with live build counts, search, and sorting
  - [x] Flagship Featured Build hero (Porsche 911 GT3 RS) with 4 telemetry pillars and package totals
  - [x] 3-Column responsive Build Card Grid with active sheet badge, spec strips, and dynamic selection
  - [x] Interactive Bill of Materials (BOM) breakdown tabs with line-item pricing and specs
  - [x] Parts breakdown export and wishlist interaction with feedback toasts
  - [x] Dual 3D Studio & Shop catalogue CTA section
  - [x] Client-side search, category filter, sorting, and pagination

### Phase 5: 3D Studio Configurator Frontend
- [x] Complete 3D Studio customizer workspace matching `studio-reference.html`:
  - [x] Studio intro header with breadcrumb and demo status badges
  - [x] 3-Column configurator layout (responsive mobile/desktop):
    - [x] Left sidebar: Vehicle selection with category filter tabs and search
    - [x] Center viewport: 5 view-angle controls, zoom (+/-), lighting presets, and interactive hotspots
    - [x] Right sidebar: Customizer panel with paint swatches (5), finishes (3), wheels (3), ride height (3), aero (3), and performance checkboxes (4)
  - [x] Non-sticky Build Summary bar with live illustrative PKR total calculation, active mod count, and reset
  - [x] Itemized Build Sheet Modal with line-by-line pricing and breakdown
  - [x] Studio-matched Recommended Parts section (4 cards) linking to `/shop`
  - [x] Closing consultation CTA linking to `/services` and `/shop`
  - [x] Session-only save toast notification (client-side demo)

### Phase 6: About Us Page Frontend
- [x] Complete About Us page matching `about-reference.html`:
  - [x] Cinematic hero section with full-bleed backdrop, scrim gradients, and Services & Gallery CTAs
  - [x] Ethos & Code: 3 core technical principles (Precision First, Purpose-Built Performance, Personal Expression)
  - [x] Workshop Experience: split-screen narrative with 3 quality-focused points, workshop lab visual, and overlapping macro dry-carbon detail image
  - [x] Execution Protocol: 4-step build timeline (Discover, Design, Build, Refine) with phase codes
  - [x] Portfolio Archetypes: 3-column bento showcase (Street Performance, Track-Focused, Individual Expression)
  - [x] Foundational Pillars: 4 brand tenets (Attention to Detail, Thoughtful Engineering, Individual Design, Quality Over Shortcuts)
  - [x] Closing CTA: "YOUR VISION. YOUR BUILD." with direct 3D Studio and Shop navigation
  - [x] Neutral portfolio showcase wording without unverified telemetry claims

---

## What Is NOT Implemented (Future Roadmap)

| Feature | Description | Planned Stage |
|---|---|---|
| Persistent Cart & Checkout flow | Full ecommerce cart persistence, coupon codes & order review | Backend Phase |
| Authentication & User Accounts | JWT / OAuth registration, login, user garage & saved builds | Backend Phase |
| MongoDB Models & REST API | Mongoose schemas for Products, Builds, Orders, and Services | Backend Phase |
| Real-time WebGL 3D Engine | Three.js / WebGL 3D model viewport simulation | Future 3D Phase |
| Payment Gateway Integration | Stripe / local gateway payment processing | Production Phase |
| Admin Management Dashboard | Inventory management, price adjustments & booking admin | Production Phase |

> **Security note:** All current frontend prices and specifications are illustrative demo data for portfolio demonstration purposes. Server-side validation and database security will be implemented in the backend phase.

---

## Verification Results

Latest verification results:

```
Backend:
  node server.js + GET /api/health
    → ✅ STATUS: 200
    → ✅ BODY: {"status":"ok","service":"modrive-api","phase":1,
               "environment":"development"}

Client:
  npm run build (Vite v5.4.21 - Phase 6)
    → ✅ 101 modules transformed, 0 errors
    → dist/index.html                  1.50 kB │ gzip:   0.82 kB
    → dist/assets/index-AGOa6ppK.css  57.27 kB │ gzip:   9.39 kB
    → dist/assets/index-DAp--8Wm.js  474.54 kB │ gzip: 122.35 kB
```

---

## Next Recommended Task — Backend API & Database

- MongoDB connection & Mongoose schemas (Products, Users, Orders, Builds, Bookings)
- Server-side REST endpoints: `GET /api/products`, `GET /api/builds`, `POST /api/consultations`
- User authentication & JWT authorization
- Persistent cart state & user profile sync

---

*MODRIVE Performance Studio — All prices and specs are illustrative demo data in PKR for portfolio showcase purposes.*
