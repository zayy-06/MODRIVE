const PRINCIPLES = [
  {
    num: "01",
    tag: "[ TOLERANCE // ZERO MARGIN ]",
    title: "Precision First",
    description:
      "Every detail matters, from component selection to the final fit and finish. We evaluate millimeter offsets, analyze chassis load dynamics, and eliminate guesswork.",
    footerLabel: "MILLIMETER TOLERANCE",
    icon: "adjust",
  },
  {
    num: "02",
    tag: "[ DYNAMICS // TRACK & STREET ]",
    title: "Purpose-Built Performance",
    description:
      "Modifications should have a clear purpose and complement the vehicle and its intended use. Aesthetic flair must always harmonise with functional airflow and chassis balance.",
    footerLabel: "DYNAMIC COHESION",
    icon: "speed",
  },
  {
    num: "03",
    tag: "[ BESPOKE // DRIVER CENTRIC ]",
    title: "Personal Expression",
    description:
      "Every build should reflect its owner's taste, goals, and driving personality. We reject cookie-cutter catalogs in favor of singular, curated automotive statements.",
    footerLabel: "UNMATCHED IDENTITY",
    icon: "fingerprint",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="w-full bg-surface-container-lowest px-margin py-space-xl md:py-32 relative border-t border-surface-container-high/40">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Philosophy Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-space-xs">
              <span className="w-2.5 h-0.5 bg-primary-container" />
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container font-bold">
                ETHOS &amp; CODE
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-bold text-tertiary tracking-tight">
              MORE THAN MODIFICATIONS.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
            A bespoke automotive build is an exact equilibrium between structural physics, aerodynamic balance,
            and personal identity.
          </p>
        </div>

        {/* Minimal Technical Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg pt-space-md">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.num}
              className="group relative flex flex-col justify-between p-space-xl bg-surface-container-low rounded-xl hover:bg-surface-container transition-all border border-surface-container-high/40 hover:border-primary-container/30"
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-primary-container font-extrabold tracking-tighter">
                    {principle.num}
                  </span>
                  <span className="px-space-sm py-0.5 rounded bg-surface-container-highest font-label-technical text-[10px] text-on-surface-variant uppercase tracking-widest">
                    {principle.tag}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-tertiary font-bold tracking-tight mt-space-sm group-hover:text-primary-container transition-colors">
                  {principle.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-space-xl flex items-center justify-between text-on-surface-variant font-label-technical text-[11px] uppercase tracking-wider border-t border-surface-container-high/40 mt-space-lg">
                <span>{principle.footerLabel}</span>
                <span className="material-symbols-outlined text-[16px] text-primary-container">
                  {principle.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
