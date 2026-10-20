export default function ServicesCTA({ onOpenConsultation }) {
  return (
    <section className="w-full px-margin py-space-xl">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-surface-container p-space-lg lg:p-space-xl rounded-xl shadow-2xl overflow-hidden border border-surface-container-high/50">
          {/* Subtle Neon Glow Backing */}
          <div
            className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl">
            {/* Text Content */}
            <div className="space-y-space-sm max-w-2xl">
              <div className="inline-flex items-center gap-2 text-primary-container font-label-technical text-label-technical uppercase tracking-widest font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                <span>Reserve Workshop Allocation</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight leading-tight">
                Ready to Commence Your Build?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Connect directly with our master technicians to discuss bespoke part sourcing,
                track-prep packages, or workshop bay reservations.
              </p>
              <div className="pt-2 font-label-technical text-[11px] text-secondary tracking-wider uppercase">
                Karachi Skunkworks &amp; Lahore Apex Center • Fully Inspected Bays • Non-Obligatory
                Technical Review
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container hover:bg-primary-fixed font-headline-sm text-body-md font-bold px-space-lg py-3.5 rounded transition-all shadow-[0_0_20px_rgba(184,240,0,0.35)] cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  calendar_today
                </span>
                <span>Book Engineering Consultation</span>
              </button>

              <a
                className="inline-flex items-center justify-center gap-2 bg-surface-container-high hover:bg-surface-bright text-on-surface font-headline-sm text-body-md font-bold px-space-lg py-3.5 rounded transition-all border border-surface-container-highest/40"
                href="tel:+922135849021"
              >
                <span
                  className="material-symbols-outlined text-primary-container text-[20px]"
                  aria-hidden="true"
                >
                  call
                </span>
                <span>Call Workshop (+92 21 3584-9021)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
