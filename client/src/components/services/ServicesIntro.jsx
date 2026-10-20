import { Link } from "react-router-dom";

export default function ServicesIntro() {
  return (
    <section className="w-full px-margin pt-space-lg pb-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Breadcrumb Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-sm text-on-surface-variant font-label-technical text-label-technical uppercase tracking-wider flex-wrap"
        >
          <Link to="/" className="hover:text-primary-container transition-colors">
            Home
          </Link>
          <span className="text-outline" aria-hidden="true">
            /
          </span>
          <span className="text-on-surface-variant">Services</span>
          <span className="text-outline" aria-hidden="true">
            /
          </span>
          <span className="text-primary-container font-semibold">
            Turnkey Performance Engineering
          </span>
        </nav>

        {/* Category badge + Status Pills */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high w-fit border border-surface-container-highest/40">
            <span
              className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(184,240,0,0.8)] animate-pulse"
              aria-hidden="true"
            />
            <span className="font-label-technical text-label-technical text-on-surface uppercase tracking-widest">
              Master Workshop &amp; Installation Facility
            </span>
          </div>

          {/* Facility live indicators */}
          <div className="flex flex-wrap items-center gap-space-sm font-label-technical text-label-technical uppercase">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low text-on-surface border border-surface-container-high/40">
              <span
                className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"
                aria-hidden="true"
              />
              <span>
                Facility Status:{" "}
                <strong className="text-primary-container">4 Active Bays Available</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low text-on-surface-variant border border-surface-container-high/40">
              <span
                className="material-symbols-outlined text-[16px] text-secondary"
                aria-hidden="true"
              >
                schedule
              </span>
              <span>
                Lead Time: <span className="text-on-surface font-semibold">3–7 Business Days</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
          <div className="lg:col-span-8 space-y-space-sm">
            <h1 className="font-headline-lg text-headline-lg lg:text-display-xl lg:font-display-xl uppercase text-on-surface leading-tight tracking-tight">
              Engineered Precision. <br />
              <span className="text-primary-container drop-shadow-[0_0_20px_rgba(184,240,0,0.25)]">
                Uncompromising Craft.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              From custom ECU dynamometer calibration and track-spec corner balancing to aerodynamic
              widebody fitment and bespoke valvetronic exhaust fabrication. Our factory-certified
              master technicians turn ambitious visions into track-proven reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
