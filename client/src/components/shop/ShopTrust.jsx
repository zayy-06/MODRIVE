export default function ShopTrust() {
  const guarantees = [
    {
      icon: "verified_user",
      title: "Genuine Imports",
      desc: "Direct OEM & aftermarket manufacturer serialized components with warranty.",
    },
    {
      icon: "local_shipping",
      title: "Streamlined Customs",
      desc: "All taxes and import clearances managed directly to workshop studios.",
    },
    {
      icon: "build_circle",
      title: "Master Installation",
      desc: "Experienced certified technicians for torque-spec track fitments.",
    },
    {
      icon: "price_check",
      title: "Transparent PKR Pricing",
      desc: "Portfolio showcase demo pricing with itemized customs and installation estimates.",
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-xl px-margin mt-space-xl border-t border-surface-container-high/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {guarantees.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-lowest border border-surface-container-high/30 shadow-md"
          >
            <div
              className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary-container"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined text-[24px]">{icon}</span>
            </div>
            <div className="space-y-1">
              <h4 className="font-headline-sm text-body-md uppercase font-bold text-on-surface">
                {title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
