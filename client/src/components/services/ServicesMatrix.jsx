import { useState } from "react";
import { SERVICES_LIST } from "../../data/servicesData";

function ServiceCard({ service, onOpenDetails }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col justify-between bg-surface-container rounded-xl overflow-hidden transition-all duration-300 hover:bg-surface-container-high hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] border border-surface-container-high/40">
      <div>
        <div className="relative h-56 w-full overflow-hidden bg-surface-container-low">
          {imgError ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/40 gap-2">
              <span className="material-symbols-outlined text-[48px]">handyman</span>
              <span className="font-label-technical text-[10px] uppercase">{service.specCode}</span>
            </div>
          ) : (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          )}

          <div
            className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded font-label-technical text-[10px] text-primary-container uppercase tracking-wider border border-surface-container-high/40">
            {service.specCode}
          </div>
        </div>

        <div className="p-space-lg space-y-space-sm">
          <div className="font-label-technical text-[11px] uppercase tracking-wider text-secondary">
            {service.tagline}
          </div>
          <h3
            onClick={() => onOpenDetails(service)}
            className="font-headline-sm text-headline-sm text-on-surface uppercase group-hover:text-primary-container transition-colors cursor-pointer leading-snug"
          >
            {service.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      <div className="p-space-lg pt-0">
        <button
          type="button"
          onClick={() => onOpenDetails(service)}
          className="inline-flex items-center gap-2 font-label-technical text-label-technical uppercase tracking-wider text-primary-container hover:text-primary transition-colors cursor-pointer"
        >
          <span>{service.actionText}</span>
          <span
            className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </button>
      </div>
    </article>
  );
}

export default function ServicesMatrix({ onOpenDetails }) {
  return (
    <section className="w-full px-margin py-space-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto space-y-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-technical text-label-technical uppercase text-primary-container tracking-widest font-semibold">
              // SPECIALIZED CAPABILITIES
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1">
              Performance &amp; Aesthetic Disciplines
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md leading-relaxed">
            Every procedure is carried out inside dedicated cleanrooms and bays with calibrated
            digital tooling, full aerospace hardware, and verifiable telemetry reports.
          </p>
        </div>

        {/* 3-Column x 2-Row Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {SERVICES_LIST.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
