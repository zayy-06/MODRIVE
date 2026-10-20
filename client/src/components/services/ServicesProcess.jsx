import { BUILD_PROCESS_STEPS } from "../../data/servicesData";

export default function ServicesProcess() {
  return (
    <section className="w-full px-margin py-space-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto space-y-space-xl">
        {/* Section Title */}
        <div>
          <span className="font-label-technical text-label-technical uppercase text-primary-container tracking-widest font-semibold">
            // TURNKEY EXECUTION
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1">
            How We Deliver Perfection
          </h2>
        </div>

        {/* 4-step Horizontal Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
          {BUILD_PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative bg-surface-container p-space-lg rounded-xl flex flex-col justify-between space-y-space-md border border-surface-container-high/40 hover:border-primary-container/30 transition-all hover:bg-surface-container-high/60 shadow-lg"
            >
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-headline-sm text-primary-container font-mono font-bold">
                    {step.step}
                  </span>
                  <span className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-wider bg-surface-container-high px-2 py-0.5 rounded">
                    {step.phase}
                  </span>
                </div>
                <h3 className="font-headline-sm text-body-lg uppercase font-bold text-on-surface leading-snug">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-space-sm flex items-center gap-2 text-primary-container font-label-technical text-[11px] uppercase border-t border-surface-container-high/50">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span>{step.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
