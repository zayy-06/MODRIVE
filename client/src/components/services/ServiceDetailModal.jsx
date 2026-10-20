import { useState } from "react";

export default function ServiceDetailModal({ service, onClose, onBookService }) {
  const [imgError, setImgError] = useState(false);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-surface-container-lowest/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl bg-surface-container-low rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-high/90 hover:bg-surface-bright text-on-surface flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Media Banner */}
        <div className="relative h-48 sm:h-56 w-full bg-surface-container-lowest shrink-0 overflow-hidden">
          {imgError ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/40 gap-2">
              <span className="material-symbols-outlined text-[48px]">handyman</span>
              <span className="font-label-technical text-body-sm uppercase">Service Inspection</span>
            </div>
          ) : (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center filter brightness-95"
              onError={() => setImgError(true)}
            />
          )}

          <div
            className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-md font-label-technical text-[10px] text-primary-container uppercase font-bold tracking-wider border border-surface-container-high/50">
              {service.specCode}
            </span>
            <span className="px-2.5 py-1 rounded bg-surface-container-high/90 font-label-technical text-[10px] text-on-surface uppercase">
              Lead Time: {service.leadTime}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="space-y-1">
            <span className="font-label-technical text-[11px] uppercase tracking-wider text-secondary">
              {service.tagline}
            </span>
            <h2
              id="modal-service-title"
              className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold leading-snug"
            >
              {service.title}
            </h2>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {service.description}
          </p>

          {/* Key Capabilities */}
          <div className="space-y-2 pt-2">
            <h4 className="font-label-technical text-label-technical uppercase tracking-wider text-primary-container font-semibold">
              Technical Deliverables &amp; Protocols:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2 bg-surface-container p-2.5 rounded">
                  <span className="material-symbols-outlined text-primary-container text-[16px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Demo Callout */}
          <div className="bg-surface-container p-3 rounded-lg border border-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-label-technical text-[10px] text-on-surface-variant uppercase block">
                Illustrative Workshop Scope
              </span>
              <span className="font-metric-price text-body-md font-bold text-primary-container">
                {service.samplePrice}
              </span>
            </div>
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">
              Demo Estimation Only
            </span>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-surface-container border-t border-surface-container-high flex items-center justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-technical text-label-technical uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookService(service);
            }}
            className="px-5 py-2.5 rounded bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-body-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-primary-container/20 cursor-pointer"
          >
            Book This Discipline
          </button>
        </div>
      </div>
    </div>
  );
}
