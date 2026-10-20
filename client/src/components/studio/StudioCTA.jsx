import { Link } from "react-router-dom";

export default function StudioCTA() {
  return (
    <section className="w-full bg-surface-container-lowest px-margin py-space-xl border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-low border border-surface-container-high/80 p-space-xl overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute -top-16 left-1/3 w-72 h-72 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-16 right-1/4 w-64 h-64 bg-tertiary-fixed-dim/5 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            {/* Text block */}
            <div className="flex flex-col gap-space-md max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-[20px]">precision_manufacturing</span>
                <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest font-semibold">
                  MODRIVE SKUNKWORKS • KARACHI & LAHORE
                </span>
              </div>
              <h2 className="font-headline-lg text-xl sm:text-headline-lg uppercase text-on-surface font-bold tracking-tight">
                READY TO MAKE IT REAL?
                <br />
                <span className="text-primary-container">SPEAK TO A BUILD SPECIALIST.</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Your configured build is a starting point. Our engineers will assess chassis compatibility,
                source certified aftermarket components, and translate your virtual configuration into a fully
                executed real-world build at our performance workshops.
              </p>

              <div className="flex flex-wrap gap-3 pt-space-xs">
                <div className="flex items-center gap-2 text-xs font-label-technical text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span>
                  <span>CAD Chassis Assessment</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-label-technical text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span>
                  <span>AWD Dyno Baseline</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-label-technical text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span>
                  <span>Laser Alignment Setup</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto lg:w-56">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-xl bg-primary-container text-on-primary font-label-technical text-label-technical font-bold uppercase tracking-wider hover:bg-primary-fixed transition-colors shadow-[0_0_24px_rgba(184,240,0,0.35)] text-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Book Consultation</span>
              </Link>

              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-xl bg-surface-container-high text-on-surface font-label-technical text-label-technical font-semibold uppercase tracking-wider hover:bg-surface-bright hover:text-primary-container transition-colors border border-surface-container-highest/60 text-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>Explore Shop</span>
              </Link>

              <p className="font-label-technical text-[10px] text-on-surface-variant text-center uppercase">
                Demo platform — no bookings are processed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
