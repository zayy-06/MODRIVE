import { Link } from "react-router-dom";

/**
 * ShopPlaceholder — Shown for routes not yet implemented.
 * Clearly labels what phase will build the feature so users aren't confused.
 */
export default function ShopPlaceholder({
  label = "Performance Parts Shop",
  phase = 2,
}) {
  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-margin py-space-xl">
      <div className="max-w-2xl w-full text-center space-y-space-lg">
        {/* Icon */}
        <div className="w-20 h-20 rounded-xl bg-surface-container-low flex items-center justify-center text-primary-container mx-auto shadow-lg">
          <span className="material-symbols-outlined text-[48px]" aria-hidden="true">
            construction
          </span>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-DEFAULT bg-surface-container-high/90 shadow-md">
          <span
            className="w-2 h-2 rounded-full bg-outline"
            aria-hidden="true"
          />
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant">
            {phase ? `COMING IN PHASE ${phase}` : "404 — PAGE NOT FOUND"}
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface tracking-tight">
          {label}
        </h1>

        {/* Description */}
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
          {phase === 2 &&
            "The full parts catalog, search, filtering, and cart system will be implemented in Phase 2. For now, browse our featured components on the Home page."}
          {phase === 3 &&
            "This section is planned for Phase 3, which will include services booking, workshop scheduling, and the build gallery."}
          {phase === 4 &&
            "The real-time 3D Studio configurator is the highlight of Phase 4. It will feature WebGL-based chassis inspection, paint simulation, and a full build-sheet exporter."}
          {!phase &&
            "The page you're looking for doesn't exist yet. Head back home to explore what's available."}
        </p>

        {/* Progress hint */}
        {phase && (
          <div className="bg-surface-container-low rounded-xl p-space-md text-left space-y-space-xs">
            <p className="font-label-technical text-label-technical uppercase text-primary-container tracking-wider">
              // DEVELOPMENT ROADMAP
            </p>
            {[
              { p: 1, label: "Foundation + Home Page", done: true },
              { p: 2, label: "Shop, Search & Cart", done: false },
              { p: 3, label: "Auth, Gallery & Services", done: false },
              { p: 4, label: "3D Studio Configurator", done: false },
            ].map(({ p, label: roadmapLabel, done }) => (
              <div key={p} className="flex items-center gap-space-sm">
                <span
                  className={`material-symbols-outlined text-[16px] ${
                    done ? "text-primary-container" : "text-on-surface-variant/40"
                  }`}
                  aria-hidden="true"
                >
                  {done ? "check_circle" : "radio_button_unchecked"}
                </span>
                <span
                  className={`font-body-sm text-body-sm ${
                    done ? "text-on-surface" : "text-on-surface-variant/60"
                  }`}
                >
                  Phase {p}: {roadmapLabel}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-space-xs px-space-xl py-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-body-md font-bold uppercase rounded-DEFAULT tracking-wider transition-colors shadow-lg"
        >
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            arrow_back
          </span>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
