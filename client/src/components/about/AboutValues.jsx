const VALUES = [
  {
    tenet: "TENET 01",
    title: "Attention to Detail",
    icon: "search_check",
    desc: "Obsessive scrutiny applied to every seam, bolt, fastener, and carbon grain. We inspect weave alignment down to millimeter consistency and utilize precision levels on splitters and diffusers.",
    footer: "Zero tolerance for shortcuts",
  },
  {
    tenet: "TENET 02",
    title: "Thoughtful Engineering",
    icon: "memory",
    desc: "Calculated upgrades that enhance vehicle dynamics without compromising structural integrity. Modifications are balanced with adequate thermal airflow and braking surface area.",
    footer: "Thermal & stress verified",
  },
  {
    tenet: "TENET 03",
    title: "Individual Design",
    icon: "auto_awesome",
    desc: "Rejecting one-size-fits-all aesthetics to build truly unique performance machines. We collaborate closely with each driver to balance stance, function, and distinct individuality.",
    footer: "Driver-first customization",
  },
  {
    tenet: "TENET 04",
    title: "Quality Over Shortcuts",
    icon: "verified_user",
    desc: "Uncompromising standards in sourcing, fabrication, and precision installation. We curate premium aftermarket components to ensure durable, track-grade reliability.",
    footer: "Motorsport-grade pedigree",
  },
];

export default function AboutValues() {
  return (
    <section className="w-full bg-surface-container-low px-margin py-space-xl md:py-32 border-t border-surface-container-high/40">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Values Header */}
        <div className="max-w-2xl">
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container font-bold block mb-space-xs">
            FOUNDATIONAL PILLARS
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-bold text-tertiary tracking-tight">
            WHAT DRIVES US.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
            Automotive craftsmanship is an uncompromising discipline. These four tenets govern every
            bracket, fastener, and aerodynamic surface we configure.
          </p>
        </div>

        {/* Values Grid with Fine Contrast Surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {VALUES.map((val) => (
            <div
              key={val.tenet}
              className="p-space-xl rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between border border-surface-container-high/40 hover:border-primary-container/30"
            >
              <div>
                <div className="flex items-center justify-between pb-space-md">
                  <span className="material-symbols-outlined text-primary-container text-[28px]">
                    {val.icon}
                  </span>
                  <span className="font-label-technical text-[11px] text-on-surface-variant uppercase tracking-widest">
                    {val.tenet}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-tertiary tracking-tight mb-space-sm">
                  {val.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {val.desc}
                </p>
              </div>

              <div className="pt-space-lg flex items-center gap-space-sm text-primary font-label-technical text-[11px] uppercase border-t border-surface-container-high/40 mt-space-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span>{val.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
