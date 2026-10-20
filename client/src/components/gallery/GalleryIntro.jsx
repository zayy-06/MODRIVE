import { Link } from "react-router-dom";

export default function GalleryIntro() {
  return (
    <section className="relative w-full bg-surface-container-lowest px-margin py-space-xl overflow-hidden">
      {/* Atmospheric Ambient Glow */}
      <div
        className="absolute -top-32 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-24 w-80 h-80 bg-tertiary-fixed-dim/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Breadcrumbs & Status Chips */}
        <div className="flex flex-wrap items-center justify-between gap-space-md">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest flex-wrap"
          >
            <Link to="/" className="hover:text-primary-container transition-colors">
              HOME
            </Link>
            <span className="text-outline-variant" aria-hidden="true">
              /
            </span>
            <span className="text-on-surface">BUILD GALLERY</span>
            <span className="text-outline-variant" aria-hidden="true">
              /
            </span>
            <span className="text-primary-container font-semibold">CURATED ARCHIVE</span>
          </nav>

          <div className="flex flex-wrap items-center gap-space-xs">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded-full shadow-sm border border-surface-container-highest/40">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
              <span className="font-label-technical text-label-technical text-on-surface uppercase">
                CURATED PORTFOLIO ARCHIVE
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container rounded-full shadow-sm border border-surface-container-high/40">
              <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">
                48 TRACK &amp; STREET PROJECTS
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-low text-on-surface-variant rounded-full shadow-sm border border-surface-container-high/30">
              <span className="font-label-technical text-label-technical uppercase">
                ILLUSTRATIVE DEMO BUILDS
              </span>
            </div>
          </div>
        </div>

        {/* Main Headline Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
          <div className="lg:col-span-8 flex flex-col gap-space-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-base">
                precision_manufacturing
              </span>
              <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest font-semibold">
                AERODYNAMICS • POWERTRAIN • STANCE TELEMETRY
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg lg:text-display-xl lg:font-display-xl uppercase text-on-surface leading-tight tracking-tight">
              BUILT DIFFERENT.
              <br />
              <span className="text-primary-container drop-shadow-[0_0_24px_rgba(184,240,0,0.35)]">
                ENGINEERED TO PERFORM.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Explore the MODRIVE Hall of Fame. Each project represents bespoke aerodynamic
              modeling, laser chassis alignment, titanium acoustic tuning, and forged powertrain
              calibration assembled by our skunkworks technicians.
            </p>
            <div className="flex items-center gap-3 pt-space-xs">
              <div className="flex flex-col">
                <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">
                  BENCHMARK CERTIFIED
                </span>
                <span className="font-metric-price text-metric-price text-primary-container font-mono font-bold">
                  100% CAD FIT
                </span>
              </div>
              <div className="w-px h-8 bg-surface-container-high" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">
                  ACTIVE TELEMETRY
                </span>
                <span className="font-metric-price text-metric-price text-on-surface font-mono font-bold">
                  DYNO VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
