import { Link } from "react-router-dom";

const services = [
  {
    icon: "dashboard_customize",
    title: "Panel Gapping & Body Kits",
    description:
      "Laser verified uniform gaps, carbon reinforcement, and OEM mounting retention.",
  },
  {
    icon: "format_paint",
    title: "XPEL PPF & Custom Paint",
    description:
      "Climate-controlled cleanroom application of self-healing gloss and stealth films.",
  },
  {
    icon: "speed",
    title: "All-Wheel Dyno Calibration",
    description:
      "Bespoke ECU fuel-air tuning, valve timing synchronization, and telemetry logging.",
  },
  {
    icon: "balance",
    title: "Corner Balancing & Laser Stance",
    description:
      "Per-wheel weight scaling and Hunter 3D Hawkeye laser geometry calibration.",
  },
];

export default function WorkshopServices() {
  return (
    <section
      className="w-full py-space-xl px-margin bg-surface"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-space-xl shadow-2xl relative overflow-hidden">
          {/* ── Section Header ────────────────────────────────────────────── */}
          <div className="relative z-10 max-w-3xl mb-space-xl">
            <span className="font-label-technical text-label-technical uppercase text-primary-container tracking-widest font-semibold">
              // SKUNKWORKS INSTALLATION FACILITIES
            </span>
            <h2
              id="services-heading"
              className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-1"
            >
              Turnkey Workshop{" "}
              <span className="text-primary-container">Services</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
              From precision digital body alignment to full dyno calibration, our master
              technicians handle installations with aerospace tolerances at our Karachi and
              Lahore studios.
            </p>
          </div>

          {/* ── 4 Service Cards ────────────────────────────────────────────── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
            {services.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-surface-container-high/60 backdrop-blur-sm p-space-md rounded-lg"
              >
                <span
                  className="material-symbols-outlined text-primary-container text-[28px] mb-2"
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <h3 className="font-headline-sm text-body-md font-bold uppercase text-on-surface">
                  {title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* ── Consultation CTA Bar ────────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-lowest/80 p-space-md rounded-xl">
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                <span
                  className="material-symbols-outlined text-[24px]"
                  aria-hidden="true"
                >
                  event_available
                </span>
              </div>
              <div>
                <p className="font-headline-sm text-body-md font-bold uppercase text-on-surface">
                  Book an Engineering Consultation
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Discuss your build spec with our chief technician before ordering.
                </p>
              </div>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-space-lg py-2.5 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-body-sm font-bold uppercase rounded-DEFAULT tracking-wider transition-colors shadow-lg whitespace-nowrap"
            >
              <span>Book Service Consultation</span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                calendar_month
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
