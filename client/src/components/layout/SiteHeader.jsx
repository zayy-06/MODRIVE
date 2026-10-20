import { Link, useLocation } from "react-router-dom";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1Xr2L3X6gCZm_WRzDyaqtf4oD7CKmsQ7gFLNqVQtUtAcaxH0stHkYcOl9Ln0hZztkaUYvPdW41QBnuQk41G8E77F-OIMu2GCE-mVkXZvqD4dJgBWQi-caJWUHydt3qg9JwjgJTdg1tbB5SQz5AabT8Hyk6nSdwJlytDOHy-At8YHPUl4Z6GDmwCzEqkRxQKQaQC5z--D3uPHXNVC9SIboWlhu6YUbeHggjDhB07BCxT0I7mcQH50l1NAnSU";

const navLinks = [
  { label: "Shop", to: "/shop" },
  {
    label: "3D Studio",
    to: "/customizer",
    badge: "Realtime 3D",
  },
  { label: "Services", to: "/services" },
  { label: "Build Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

export default function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/50 backdrop-blur-md border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300"
      role="banner"
    >
      <div className="h-20 w-full px-margin flex items-center justify-between gap-gutter">
        {/* ── Logo + Nav ─────────────────────────────────────────────────── */}
        <div className="flex items-center gap-space-lg shrink-0">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-space-sm"
            aria-label="MODRIVE — Go to home page"
          >
            <img
              src={LOGO_URL}
              alt="MODRIVE Automotive Logo"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
              MODRIVE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden xl:flex items-center gap-space-xs"
            aria-label="Primary navigation"
          >
            {navLinks.map(({ label, to, badge }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex items-center gap-space-xs px-space-md py-space-sm transition-all font-body-md text-body-md rounded-lg ${
                    isActive
                      ? "bg-surface-container-high text-primary-container font-semibold shadow-[0_0_12px_rgba(184,240,0,0.2)]"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {isActive && (
                    <span
                      className="nav-dot w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse mr-0.5 inline-block shadow-[0_0_8px_rgba(184,240,0,0.8)]"
                      aria-hidden="true"
                    />
                  )}
                  <span>{label}</span>
                  {badge && (
                    <span className="font-label-technical text-label-technical uppercase px-1.5 py-0.5 rounded-DEFAULT bg-primary-container text-on-primary-container tracking-wider shadow-lime-glow">
                      {badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ── Search Bar (md+) ─────────────────────────────────────────── */}
        <div className="hidden md:flex flex-1 max-w-xl items-center relative">
          <span
            className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px] pointer-events-none"
            aria-hidden="true"
          >
            search
          </span>
          <input
            type="text"
            className="w-full bg-surface-container-low text-on-surface font-body-md text-body-sm pl-10 pr-12 py-2 rounded-lg placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary-container transition-all"
            placeholder="Press ⌘K or search parts, models, SKUs..."
            aria-label="Search parts, models, or SKUs"
          />
          <kbd
            className="absolute right-3 font-label-technical text-[10px] text-on-surface-variant bg-surface-container-high px-1.5 py-0.5 rounded"
            aria-label="keyboard shortcut"
          >
            ⌘K
          </kbd>
        </div>

        {/* ── Action Buttons ────────────────────────────────────────────── */}
        <div className="flex items-center gap-space-md shrink-0">
          {/* Vehicle Selector (lg+) */}
          <button
            type="button"
            className="hidden lg:flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container px-space-md py-2 rounded-lg text-on-surface transition-colors"
            aria-label="Select your vehicle"
          >
            <span
              className="material-symbols-outlined text-primary-container text-[18px]"
              aria-hidden="true"
            >
              directions_car
            </span>
            <span className="font-label-technical text-label-technical uppercase tracking-wider">
              Select Vehicle
            </span>
            <span
              className="material-symbols-outlined text-on-surface-variant text-[16px]"
              aria-hidden="true"
            >
              expand_more
            </span>
          </button>

          {/* Wishlist / Saved Builds */}
          <Link
            to="/gallery"
            className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            title="Saved Builds & Wishlist"
            aria-label="Saved builds and wishlist (3 items)"
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              bookmark
            </span>
            <span
              className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-surface-container-high text-primary-container font-label-technical text-[10px] font-bold"
              aria-hidden="true"
            >
              3
            </span>
          </Link>

          {/* Cart */}
          <Link
            to="/shop"
            className="flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container px-space-md py-1.5 rounded-lg text-on-surface transition-colors"
            aria-label="Cart — 2 items, PKR 485,000"
          >
            <div className="relative flex items-center">
              <span
                className="material-symbols-outlined text-on-surface-variant text-[22px]"
                aria-hidden="true"
              >
                shopping_bag
              </span>
              <span
                className="absolute -top-1.5 -right-2 flex items-center justify-center w-4 h-4 rounded-full bg-primary-container text-on-primary-container font-label-technical text-[10px] font-bold"
                aria-hidden="true"
              >
                2
              </span>
            </div>
            <div className="hidden sm:flex flex-col text-right pl-2">
              <span className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-wider leading-none">
                Cart
              </span>
              <span className="font-metric-price text-body-sm font-bold text-primary-container leading-tight">
                PKR 485,000
              </span>
            </div>
          </Link>

          {/* Profile Avatar */}
          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-inner cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="User account (auth coming in Phase 3)"
            title="Account — coming in Phase 3"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
