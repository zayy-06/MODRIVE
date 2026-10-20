import { useState } from "react";
import { PARTS_TABS } from "../../data/galleryData";

export default function PartsBreakdown({
  build,
  activeTab,
  onTabChange,
  onAddToCart,
}) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!build) return null;

  // Active items for selected subsystem tab
  const activeItems = build.tabs?.[activeTab] || [];

  const handleExport = () => {
    try {
      const partsText = Object.entries(build.tabs || {})
        .map(([category, items]) => {
          const categoryTitle = category.replace("-", " ").toUpperCase();
          const itemsList = items
            .map(
              (p) =>
                `  • [${p.brand}] ${p.title} (SKU: ${p.sku}) — ${p.price}\n    Spec: ${p.subtitle} | Status: ${p.stock}`
            )
            .join("\n");
          return `[${categoryTitle}]\n${itemsList}`;
        })
        .join("\n\n");

      const exportContent = `MODRIVE SKUNKWORKS // BESPOKE BUILD SHEET
============================================================
BUILD NAME: ${build.name}
BUILD CODE: ${build.buildCode}
CATEGORY: ${build.categoryLabel}
EST. PACKAGE TOTAL: ${build.packageTotal} (DEMO)
ALIGNMENT SETUP: ${build.alignment || "N/A"}

TELEMETRY BENCHMARK:
- Aero Downforce: ${build.telemetry?.aeroLoad || "N/A"}
- Curb Weight: ${build.telemetry?.curbWeight || "N/A"}
- Dyno Output: ${build.telemetry?.dynoOutput || "N/A"}

ITEMIZED SUBSYSTEM BILL OF MATERIALS:
============================================================
${partsText}

============================================================
Note: All prices and specifications are illustrative demo data for portfolio purposes.
MODRIVE Performance Studio — Karachi Skunkworks & Lahore Apex Center.
`;

      const blob = new Blob([exportContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `MODRIVE_${build.id}_Build_Sheet.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error("Export error:", err);
    }
  };

  return (
    <section id="parts-breakdown" className="w-full bg-surface-container-lowest px-margin py-space-xl scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md border-b border-surface-container-high/60 pb-space-md">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-[20px]">
                build
              </span>
              <span className="font-label-technical text-label-technical text-primary-container uppercase font-mono tracking-widest font-semibold">
                SUBSYSTEM BILL OF MATERIALS // BOM ARCHITECTURE
              </span>
            </div>
            <h2 className="font-headline-lg text-xl sm:text-headline-lg uppercase text-on-surface font-bold tracking-tight">
              {build.shortName || build.name}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Inspecting active build sheet: <strong className="text-on-surface">{build.buildCode}</strong>.
              Review itemized aero, chassis, powertrain, and cockpit components.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleExport}
              className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-technical text-label-technical font-semibold uppercase tracking-wider hover:bg-surface-bright hover:text-primary-container transition-colors border border-surface-container-highest/60 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                {downloadSuccess ? "check_circle" : "file_download"}
              </span>
              <span>{downloadSuccess ? "Build Sheet Exported" : "Export Parts List"}</span>
            </button>

            <button
              type="button"
              onClick={() =>
                onAddToCart({
                  title: `${build.name} (Full Package)`,
                  price: build.packageTotal,
                  code: build.buildCode,
                })
              }
              className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-technical text-label-technical font-bold uppercase tracking-wider hover:bg-primary-fixed transition-colors shadow-[0_0_15px_rgba(184,240,0,0.3)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
              <span>Order This Package</span>
            </button>
          </div>
        </div>

        {/* Subsystem Navigation Tabs */}
        <div
          role="tablist"
          aria-label="Subsystem parts categories"
          className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1"
        >
          {PARTS_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = build.tabs?.[tab.id]?.length || 0;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onTabChange(tab.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-primary-container text-on-primary font-bold shadow-[0_0_15px_rgba(184,240,0,0.25)]"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-surface-container-high/60"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? "bg-on-primary/20 text-on-primary font-bold"
                      : "bg-surface-container-highest text-on-surface-variant"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content Layout: Parts List + Telemetry Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* Left / Center: Itemized Parts (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            {activeItems.length === 0 ? (
              <div className="p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high text-center">
                <p className="font-body-md text-on-surface-variant">
                  No separate line items listed for this subsystem in this build spec.
                </p>
              </div>
            ) : (
              activeItems.map((part, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-surface-container-low border border-surface-container-high/60 p-space-md sm:p-space-lg hover:border-primary-container/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-space-md group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[20px]">
                        {part.icon || "hardware"}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-label-technical text-[10px] text-primary-container font-mono uppercase tracking-widest font-semibold">
                          {part.brand}
                        </span>
                        <span className="text-outline-variant text-[10px]">•</span>
                        <span className="font-mono text-[10px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                          SKU: {part.sku}
                        </span>
                        <span className="font-label-technical text-[10px] text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded-full">
                          {part.stock}
                        </span>
                      </div>

                      <h4 className="font-headline-sm text-base uppercase text-on-surface font-semibold group-hover:text-primary-container transition-colors">
                        {part.title}
                      </h4>

                      <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                        {part.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 border-surface-container-high/60 pt-2 sm:pt-0">
                    <div className="text-right">
                      <span className="font-label-technical text-[9px] text-on-surface-variant uppercase block">
                        Component Price
                      </span>
                      <span className="font-metric-price text-base font-bold text-primary-container font-mono">
                        {part.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onAddToCart({
                          title: `${part.brand} — ${part.title}`,
                          price: part.price,
                          code: part.sku,
                        })
                      }
                      className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary font-label-technical text-[11px] font-semibold uppercase tracking-wider transition-colors border border-surface-container-high cursor-pointer flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[14px]">add_shopping_cart</span>
                      <span>Add Part</span>
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Total Package Callout Banner */}
            <div className="rounded-xl bg-surface-container p-space-md border border-surface-container-high flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-1">
                <span className="font-label-technical text-[10px] text-primary-container uppercase font-mono tracking-wider font-semibold">
                  COMPLETE ESTIMATED UPGRADE PACKAGE
                </span>
                <span className="font-metric-price text-xl sm:text-2xl font-bold text-on-surface font-mono">
                  {build.packageTotal}
                </span>
                <p className="font-body-sm text-[11px] text-on-surface-variant max-w-lg">
                  {build.packageSummary ||
                    "Includes all precision performance components, installation, dyno run, and laser alignment."}
                </p>
              </div>

              <div className="flex sm:flex-col justify-end gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    onAddToCart({
                      title: `${build.name} (Complete Package)`,
                      price: build.packageTotal,
                      code: build.buildCode,
                    })
                  }
                  className="px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-technical text-label-technical font-bold uppercase tracking-wider hover:bg-primary-fixed transition-colors shadow-[0_0_15px_rgba(184,240,0,0.3)] cursor-pointer text-center"
                >
                  Order Package
                </button>
              </div>
            </div>
          </div>

          {/* Right: Telemetry & Chassis Dynamics (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {/* Chassis Dynamics Matrix */}
            <div className="rounded-xl bg-surface-container-low border border-surface-container-high/60 p-space-md sm:p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-surface-container-high/60 pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[18px]">
                    analytics
                  </span>
                  <span className="font-label-technical text-label-technical text-on-surface uppercase font-bold tracking-wider">
                    CHASSIS DYNAMICS MATRIX
                  </span>
                </div>
                <span className="font-mono text-[10px] text-primary-container bg-primary-container/10 px-2 py-0.5 rounded">
                  ACTIVE TELEMETRY
                </span>
              </div>

              {/* Gauges Bars */}
              <div className="space-y-4">
                {/* Downforce */}
                {build.gauges?.downforce && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-label-technical">
                      <span className="text-on-surface-variant uppercase">
                        {build.gauges.downforce.label}
                      </span>
                      <span className="text-primary-container font-mono font-bold">
                        {build.gauges.downforce.value}
                      </span>
                    </div>
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary-container h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(184,240,0,0.5)]"
                        style={{ width: `${build.gauges.downforce.percent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Weight Loss */}
                {build.gauges?.weightLoss && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-label-technical">
                      <span className="text-on-surface-variant uppercase">
                        {build.gauges.weightLoss.label}
                      </span>
                      <span className="text-on-surface font-mono font-bold">
                        {build.gauges.weightLoss.value}
                      </span>
                    </div>
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-surface-bright h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${build.gauges.weightLoss.percent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Lateral Grip */}
                {build.gauges?.lateralGrip && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-label-technical">
                      <span className="text-on-surface-variant uppercase">
                        {build.gauges.lateralGrip.label}
                      </span>
                      <span className="text-primary-container font-mono font-bold">
                        {build.gauges.lateralGrip.value}
                      </span>
                    </div>
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary-container h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(184,240,0,0.5)]"
                        style={{ width: `${build.gauges.lateralGrip.percent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Exhaust Gas Flow */}
                {build.gauges?.exhaustFlow && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-label-technical">
                      <span className="text-on-surface-variant uppercase">
                        {build.gauges.exhaustFlow.label}
                      </span>
                      <span className="text-on-surface font-mono font-bold">
                        {build.gauges.exhaustFlow.value}
                      </span>
                    </div>
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-tertiary-fixed-dim/80 h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${build.gauges.exhaustFlow.percent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Alignment spec card */}
              <div className="p-3 bg-surface-container rounded-lg border border-surface-container-high/60 flex items-center justify-between text-xs font-label-technical">
                <span className="text-on-surface-variant uppercase flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary-container text-[16px]">
                    tune
                  </span>
                  Laser Stance Alignment
                </span>
                <span className="text-on-surface font-mono font-semibold">
                  {build.alignment || "Custom Camber Spec"}
                </span>
              </div>
            </div>

            {/* Skunkworks Certification Badge */}
            <div className="rounded-xl bg-surface-container-low border border-surface-container-high/60 p-space-md flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center text-primary-container shrink-0">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-headline-sm text-xs uppercase font-bold text-on-surface">
                  MODRIVE SKUNKWORKS CERTIFIED
                </span>
                <p className="font-body-sm text-[11px] text-on-surface-variant">
                  Dyno benchmarked and corner-balanced by master technicians at our Karachi Skunkworks &amp; Lahore Apex Center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
