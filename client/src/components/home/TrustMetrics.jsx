const metrics = [
  {
    icon: "verified_user",
    title: "100% Fitment Verification",
    description:
      "Every part is verified digitally against VIN geometry prior to air freight dispatch.",
  },
  {
    icon: "flight_takeoff",
    title: "Inspected International Freight",
    description:
      "Direct air freight from manufacturers in Germany, Japan, and the USA.",
  },
  {
    icon: "military_tech",
    title: "Master Technician Installs",
    description:
      "Turnkey installations supervised by factory-trained high-performance engineers.",
  },
  {
    icon: "currency_exchange",
    title: "Transparent PKR Pricing",
    description:
      "Portfolio showcase demo pricing with itemized customs, landing, and installation rates.",
  },
];

export default function TrustMetrics() {
  return (
    <section
      className="w-full py-space-xl px-margin bg-surface-container-lowest"
      aria-label="Engineering trust and quality metrics"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {metrics.map(({ icon, title, description }) => (
            <div key={title} className="flex items-start gap-space-md">
              <div
                className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary-container shrink-0 shadow-md"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-[28px]">{icon}</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-body-md font-bold uppercase text-on-surface">
                  {title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
