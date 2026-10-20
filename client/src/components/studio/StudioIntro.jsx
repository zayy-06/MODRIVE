import { Link } from "react-router-dom";

export default function StudioIntro() {
  return (
    <section className="relative w-full bg-surface-container-lowest px-margin py-space-xl overflow-hidden">
      {/* Ambient Glows */}
      <div
        className="absolute -top-24 left-1/3 w-96 h-96 bg-primary-container/8 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-20 w-72 h-72 bg-tertiary-fixed-dim/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Breadcrumb + Status Row */}
        <div className="flex flex-wrap items-center justify-between gap-space-md">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest flex-wrap"
          >
            <Link to="/" className="hover:text-primary-container transition-colors">HOME</Link>
            <span className="text-outline-variant" aria-hidden="true">/</span>
            <span className="text-on-surface">3D STUDIO</span>
            <span className="text-outline-variant" aria-hidden="true">/</span>
            <span className="text-primary-container font-semibold">CONFIGURATION LAB</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-full border border-surface-container-highest/40">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
              <span className="font-label-technical text-label-technical text-on-surface uppercase">LIVE SESSION ACTIVE</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full border border-surface-container-high/40">
              <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">STATIC DEMO — 3D COMING LATER</span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
          <div className="lg:col-span-8 flex flex-col gap-space-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-base">view_in_ar</span>
              <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest font-semibold">
                BESPOKE CONFIGURATION LAB • REAL-TIME VISUALISER
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg lg:text-display-xl lg:font-display-xl uppercase text-on-surface leading-tight tracking-tight">
              ENGINEER YOUR BUILD.
              <br />
              <span className="text-primary-container drop-shadow-[0_0_24px_rgba(184,240,0,0.35)]">
                CONFIGURE EVERY DETAIL.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Select your platform, configure paint, wheels, stance, and aero.
              Explore your build in our interactive studio — then order direct from the parts catalogue.
            </p>
            <div className="flex items-center gap-3 pt-space-xs flex-wrap">
              <div className="flex flex-col">
                <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">LIVE PRICING</span>
                <span className="font-metric-price text-metric-price text-primary-container font-mono font-bold">PKR DEMO</span>
              </div>
              <div className="w-px h-8 bg-surface-container-high" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">CONFIGURATIONS</span>
                <span className="font-metric-price text-metric-price text-on-surface font-mono font-bold">UNLIMITED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
