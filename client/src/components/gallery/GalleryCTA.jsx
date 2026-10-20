import { Link } from "react-router-dom";

export default function GalleryCTA() {
  return (
    <section className="w-full bg-surface-container-lowest px-margin py-space-xl border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {/* Card 1: 3D Studio Configurator */}
          <div className="relative rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-low border border-surface-container-high/80 p-space-lg sm:p-space-xl overflow-hidden flex flex-col justify-between gap-space-lg group hover:border-primary-container/40 transition-all duration-300">
            {/* Background subtle glow */}
            <div
              className="absolute -right-16 -top-16 w-64 h-64 bg-primary-container/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary-container/20 transition-all duration-500"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary-container font-label-technical text-label-technical uppercase tracking-wider w-fit border border-surface-container-highest/60">
                <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
                <span>REAL-TIME 3D SIMULATION</span>
              </div>

              <h3 className="font-headline-lg text-xl sm:text-headline-lg uppercase text-on-surface font-bold tracking-tight">
                CUSTOMIZE YOUR OWN CHASSIS
              </h3>

              <p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed">
                Step into the MODRIVE Virtual Skunkworks. Configure dry carbon aero kits, stance drops, valved exhausts, and forged monoblocks on your vehicle before committing to a physical build.
              </p>
            </div>

            <div className="relative pt-space-sm">
              <Link
                to="/customizer"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-technical text-label-technical font-bold uppercase tracking-wider hover:bg-primary-fixed transition-colors shadow-[0_0_20px_rgba(184,240,0,0.3)] w-full sm:w-auto text-center"
              >
                <span>Launch 3D Configurator</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Shop Performance Parts */}
          <div className="relative rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-low border border-surface-container-high/80 p-space-lg sm:p-space-xl overflow-hidden flex flex-col justify-between gap-space-lg group hover:border-tertiary-fixed-dim/40 transition-all duration-300">
            {/* Background subtle glow */}
            <div
              className="absolute -right-16 -top-16 w-64 h-64 bg-secondary-container/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-secondary-container/30 transition-all duration-500"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-technical text-label-technical uppercase tracking-wider w-fit border border-surface-container-highest/60">
                <span className="material-symbols-outlined text-primary-container text-[16px]">shopping_bag</span>
                <span>CERTIFIED AFTERMARKET CATALOGUE</span>
              </div>

              <h3 className="font-headline-lg text-xl sm:text-headline-lg uppercase text-on-surface font-bold tracking-tight">
                BROWSE PARTS &amp; HARDWARE
              </h3>

              <p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed">
                Order genuine BBS wheels, Akrapovič titanium exhausts, KW coilover kits, and Vorsteiner pre-preg carbon aero with direct customs clearance and verified chassis compatibility.
              </p>
            </div>

            <div className="relative pt-space-sm">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-surface-container-high text-on-surface font-label-technical text-label-technical font-semibold uppercase tracking-wider hover:bg-surface-bright hover:text-primary-container transition-colors border border-surface-container-highest/60 w-full sm:w-auto text-center"
              >
                <span>Explore Shop Catalogue</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
