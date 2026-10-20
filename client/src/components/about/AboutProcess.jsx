const PROCESS_STEPS = [
  {
    num: "01",
    phase: "PHASE I • SCOPING",
    title: "DISCOVER",
    desc: "Understand the driver's vision, priorities, and intended use. We evaluate daily commute requirements, track-day frequency, and acoustic-comfort thresholds.",
    icon: "radar",
    footerText: "DRIVER ONBOARDING",
    stepTag: "STEP 01/04",
  },
  {
    num: "02",
    phase: "PHASE II • BLUEPRINT",
    title: "DESIGN",
    desc: "Plan the look, components, and overall direction of the build. 3D visual mockups, suspension geometry calculations, and aesthetic targets are modeled.",
    icon: "architecture",
    footerText: "BLUEPRINT SPEC",
    stepTag: "STEP 02/04",
  },
  {
    num: "03",
    phase: "PHASE III • FABRICATION",
    title: "BUILD",
    desc: "Bring the plan together with a focus on precision and consistency. Structural fitment, wire routing, and chassis alignment take place inside our dedicated studio bay.",
    icon: "precision_manufacturing",
    footerText: "MODULAR INTEGRATION",
    stepTag: "STEP 03/04",
    highlight: true,
  },
  {
    num: "04",
    phase: "PHASE IV • COMMISSIONING",
    title: "REFINE",
    desc: "Review the details and present the completed build. Inspection checkouts, damper adjustments, alignment checks, and final cosmetic finish verify readiness.",
    icon: "verified",
    footerText: "FINAL INSPECTION",
    stepTag: "STEP 04/04",
  },
];

export default function AboutProcess() {
  return (
    <section className="w-full bg-surface px-margin py-space-xl md:py-32 border-t border-surface-container-high/40">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container font-bold block mb-space-xs">
              EXECUTION PROTOCOL
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-bold text-tertiary tracking-tight">
              OUR BUILD PROCESS
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
            A structured journey from conceptualization to road delivery, leaving zero room for compromised craftsmanship.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative mt-space-md">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className={`flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all relative border ${
                step.highlight
                  ? "border-primary-container/40 shadow-[0_0_16px_rgba(184,240,0,0.08)]"
                  : "border-surface-container-high/40"
              }`}
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-headline-lg text-headline-lg text-primary-container font-extrabold tracking-tighter">
                    {step.num}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[24px] ${
                      step.highlight ? "text-primary-container" : "text-on-surface-variant"
                    }`}
                  >
                    {step.icon}
                  </span>
                </div>
                <div
                  className={`font-label-technical text-label-technical uppercase tracking-widest ${
                    step.highlight ? "text-primary-container font-bold" : "text-on-surface-variant"
                  }`}
                >
                  {step.phase}
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-tertiary tracking-tight">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-space-lg mt-space-lg border-t border-surface-container-highest/60 flex items-center justify-between text-on-surface-variant font-label-technical text-[10px] uppercase">
                <span>{step.footerText}</span>
                <span className="text-primary-container font-mono">{step.stepTag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
