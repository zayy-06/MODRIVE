import { Link } from "react-router-dom";

export default function ShopHero({ totalProductsCount = 284, inStockCount = 186 }) {
  return (
    <section className="relative w-full px-margin pt-space-lg pb-space-lg bg-surface-container-lowest overflow-hidden">
      {/* Atmospheric Ambient Background Light */}
      <div
        className="absolute -top-24 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col gap-space-md">
        {/* Breadcrumb Hierarchy */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-xs font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant flex-wrap"
        >
          <Link to="/" className="hover:text-primary-container transition-colors">
            Home
          </Link>
          <span className="text-surface-bright" aria-hidden="true">
            /
          </span>
          <span className="text-primary-container font-semibold">Shop Catalogue</span>
          <span className="text-surface-bright" aria-hidden="true">
            /
          </span>
          <span className="text-on-surface/50">Verified Fitment Catalog</span>
        </nav>

        {/* Headline & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded bg-surface-container-high text-primary-container font-label-technical text-label-technical uppercase tracking-widest mb-space-xs">
              <span
                className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"
                aria-hidden="true"
              />
              Performance Components Catalog
            </div>
            <h1 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface leading-tight">
              Find the <span className="text-primary-container">Perfect Upgrade</span>
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed max-w-2xl">
              Browse certified performance aerodynamics, forged monoblock wheels, valvetronic
              exhaust systems, and precision interior components engineered for track and street
              builds.
            </p>
          </div>

          {/* Compact Skunkworks Metric Panel */}
          <div className="flex items-center gap-space-md bg-surface-container-low px-space-md py-space-sm rounded-xl self-start lg:self-auto border border-surface-container-high/40">
            <div className="flex flex-col">
              <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">
                Ready to Ship
              </span>
              <span className="font-metric-price text-body-lg text-on-surface font-bold">
                {inStockCount} SKUs
              </span>
            </div>
            <div className="w-px h-8 bg-surface-bright" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">
                Port Customs
              </span>
              <span className="font-label-technical text-label-technical text-primary-container font-bold uppercase tracking-wider">
                Cleared • Karachi
              </span>
            </div>
          </div>
        </div>

        {/* Telemetry Strip Bar */}
        <div className="w-full mt-space-sm bg-surface-container px-space-md py-2 rounded-lg flex flex-wrap items-center justify-between gap-space-sm font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant border border-surface-container-high/30">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary-container text-[16px]"
              aria-hidden="true"
            >
              verified
            </span>
            <span className="text-on-surface">{totalProductsCount} Verified Track-Grade Parts</span>
          </div>
          <div className="hidden sm:block text-surface-bright" aria-hidden="true">
            •
          </div>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary-container text-[16px]"
              aria-hidden="true"
            >
              view_in_ar
            </span>
            <span>100% CAD Laser Fitment Accuracy</span>
          </div>
          <div className="hidden md:block text-surface-bright" aria-hidden="true">
            •
          </div>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary-container text-[16px]"
              aria-hidden="true"
            >
              flight_takeoff
            </span>
            <span>Direct Air Freight Import</span>
          </div>
          <div className="hidden lg:block text-surface-bright" aria-hidden="true">
            •
          </div>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary-container text-[16px]"
              aria-hidden="true"
            >
              currency_exchange
            </span>
            <span className="text-primary-container">Illustrative Demo Pricing (PKR)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
