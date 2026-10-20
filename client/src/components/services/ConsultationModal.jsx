import { useState } from "react";
import { SERVICES_LIST } from "../../data/servicesData";

export default function ConsultationModal({ initialService, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    vehicle: "",
    serviceId: initialService?.id || "dyno-remapping",
    preferredDate: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  const serviceOptions = [
    { id: "dyno-remapping", title: "AWD Dyno Re-Mapping & Powertrain Blueprinting" },
    ...SERVICES_LIST.map((s) => ({ id: s.id, title: s.title })),
    { id: "full-turnkey", title: "Full Turnkey Track Build Package" },
  ];

  function validate() {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.contact.trim()) {
      errs.contact = "Contact email or phone is required.";
    }
    if (!formData.vehicle.trim()) {
      errs.vehicle = "Vehicle make & model is required.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    // Generate demo reference code
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    setRefNumber(`MDR-ENG-${randomDigits}`);
    setIsSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-surface-container-lowest/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-xl bg-surface-container-low rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-space-lg bg-surface-container border-b border-surface-container-high flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container font-semibold">
                Skunkworks Consultation
              </span>
            </div>
            <h2
              id="consultation-modal-title"
              className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold mt-0.5"
            >
              {isSubmitted ? "Consultation Requested" : "Book Engineering Session"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-space-lg overflow-y-auto space-y-space-md">
          {/* Explicit Demo Callout */}
          <div className="bg-surface-container p-3 rounded-lg border border-primary-container/30 text-[11px] font-label-technical text-on-surface-variant flex items-start gap-2.5">
            <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">
              info
            </span>
            <span>
              <strong className="text-primary-container">Illustrative Portfolio Demo:</strong> This
              form validates input and generates a local confirmation code. No real booking is
              dispatched.
            </span>
          </div>

          {isSubmitted ? (
            <div className="space-y-space-md py-4 text-center">
              <div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center mx-auto text-primary-container shadow-lime-glow">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-headline-sm text-body-lg uppercase font-bold text-on-surface">
                  Request Confirmed
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
                  Your consultation request for{" "}
                  <strong className="text-on-surface">{formData.vehicle}</strong> has been logged in
                  the portfolio demo environment.
                </p>
              </div>

              <div className="bg-surface-container p-4 rounded-xl border border-surface-container-high max-w-xs mx-auto space-y-1 text-left">
                <span className="font-label-technical text-[10px] text-on-surface-variant uppercase block">
                  Reference Identifier
                </span>
                <span className="font-mono text-body-md font-bold text-primary-container tracking-wider block">
                  {refNumber}
                </span>
                <span className="font-label-technical text-[10px] text-on-surface-variant uppercase block pt-2">
                  Client: {formData.fullName}
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-body-sm font-bold uppercase rounded tracking-wider transition-colors cursor-pointer"
                >
                  Return to Services
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-space-sm" noValidate>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="consult-name"
                  className="block font-label-technical text-[11px] text-on-surface-variant uppercase mb-1"
                >
                  Full Name <span className="text-primary-container">*</span>
                </label>
                <input
                  id="consult-name"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Tariq Mansoor"
                  className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-high/40"
                />
                {errors.fullName && (
                  <span className="text-error font-body-sm text-[11px] mt-1 block">
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <label
                  htmlFor="consult-contact"
                  className="block font-label-technical text-[11px] text-on-surface-variant uppercase mb-1"
                >
                  Email or Phone Number <span className="text-primary-container">*</span>
                </label>
                <input
                  id="consult-contact"
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="e.g. tm.racing@domain.com or +92 300 1234567"
                  className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-high/40"
                />
                {errors.contact && (
                  <span className="text-error font-body-sm text-[11px] mt-1 block">
                    {errors.contact}
                  </span>
                )}
              </div>

              {/* Vehicle Platform */}
              <div>
                <label
                  htmlFor="consult-vehicle"
                  className="block font-label-technical text-[11px] text-on-surface-variant uppercase mb-1"
                >
                  Vehicle Platform &amp; Year <span className="text-primary-container">*</span>
                </label>
                <input
                  id="consult-vehicle"
                  type="text"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  placeholder="e.g. Porsche 911 GT3 (992) or BMW M4 (G82)"
                  className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-high/40"
                />
                {errors.vehicle && (
                  <span className="text-error font-body-sm text-[11px] mt-1 block">
                    {errors.vehicle}
                  </span>
                )}
              </div>

              {/* Discipline Category */}
              <div>
                <label
                  htmlFor="consult-service"
                  className="block font-label-technical text-[11px] text-on-surface-variant uppercase mb-1"
                >
                  Specialized Discipline
                </label>
                <select
                  id="consult-service"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-high/40 cursor-pointer"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.id} value={opt.id} className="bg-surface-container">
                      {opt.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="consult-date"
                  className="block font-label-technical text-[11px] text-on-surface-variant uppercase mb-1"
                >
                  Preferred Consultation Window
                </label>
                <input
                  id="consult-date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-high/40 cursor-pointer"
                />
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="consult-notes"
                  className="block font-label-technical text-[11px] text-on-surface-variant uppercase mb-1"
                >
                  Build Goals &amp; Specific Requirements
                </label>
                <textarea
                  id="consult-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Outline desired dyno target, aero spec, or custom hardware modifications..."
                  className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-container border border-surface-container-high/40 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-technical text-label-technical uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-body-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-primary-container/20 cursor-pointer"
                >
                  Submit Consultation Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
