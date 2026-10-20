import { useState, useEffect } from "react";
import StudioIntro from "../components/studio/StudioIntro";
import VehicleSelector from "../components/studio/VehicleSelector";
import VehiclePreview from "../components/studio/VehiclePreview";
import CustomizerPanel from "../components/studio/CustomizerPanel";
import BuildSummaryBar from "../components/studio/BuildSummaryBar";
import ItemizedModal from "../components/studio/ItemizedModal";
import RecommendedParts from "../components/studio/RecommendedParts";
import StudioCTA from "../components/studio/StudioCTA";
import { STUDIO_VEHICLES, DEFAULT_CONFIG } from "../data/studioData";

export default function StudioPage() {
  const [config, setConfig] = useState({ ...DEFAULT_CONFIG });
  const [showItemized, setShowItemized] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  // Derive selected vehicle object from config
  const selectedVehicle = STUDIO_VEHICLES.find((v) => v.id === config.vehicleId) ?? STUDIO_VEHICLES[0];

  // Merge partial config updates
  const handleConfigChange = (partial) => {
    setConfig((prev) => ({ ...prev, ...partial }));
  };

  // Vehicle selection (also resets non-vehicle config? No — keep customizations intentionally)
  const handleSelectVehicle = (vehicleId) => {
    setConfig((prev) => ({ ...prev, vehicleId }));
  };

  // Reset to demo defaults
  const handleReset = () => {
    setConfig({ ...DEFAULT_CONFIG });
  };

  // Save build — client-side toast only
  const handleSave = () => {
    setSaveToast(true);
  };

  useEffect(() => {
    if (saveToast) {
      const t = setTimeout(() => setSaveToast(false), 3500);
      return () => clearTimeout(t);
    }
  }, [saveToast]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface-container-lowest">
      {/* Section 1 — Studio Intro */}
      <StudioIntro />

      {/* Section 2 — Three-Column Configurator */}
      <section className="w-full px-margin py-space-lg bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] gap-space-lg items-start">

            {/* Left: Vehicle Selector */}
            <div className="rounded-2xl bg-surface-container-low border border-surface-container-high/60 p-space-md lg:p-space-lg lg:sticky lg:top-24 max-h-[calc(100vh-120px)] flex flex-col overflow-hidden">
              <VehicleSelector
                selectedVehicleId={config.vehicleId}
                onSelectVehicle={handleSelectVehicle}
              />
            </div>

            {/* Center: Vehicle Preview */}
            <div className="rounded-2xl bg-surface-container-low border border-surface-container-high/60 p-space-md lg:p-space-lg min-h-[480px] flex flex-col">
              <VehiclePreview
                vehicle={selectedVehicle}
                config={config}
              />
            </div>

            {/* Right: Customizer Panel */}
            <div className="rounded-2xl bg-surface-container-low border border-surface-container-high/60 p-space-md lg:p-space-lg lg:sticky lg:top-24 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-none">
              <CustomizerPanel
                config={config}
                onConfigChange={handleConfigChange}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Sticky Build Summary Bar */}
      <BuildSummaryBar
        config={config}
        onReset={handleReset}
        onSave={handleSave}
        onViewParts={() => setShowItemized(true)}
      />

      {/* Section 4 — Recommended Parts */}
      <RecommendedParts />

      {/* Section 5 — Bottom CTA */}
      <StudioCTA />

      {/* Itemized Parts Modal */}
      {showItemized && (
        <ItemizedModal
          config={config}
          onClose={() => setShowItemized(false)}
        />
      )}

      {/* Save Build Toast */}
      {saveToast && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-start gap-3 px-4 py-3 bg-surface-container-high text-on-surface rounded-xl border border-primary-container shadow-[0_8px_32px_rgba(0,0,0,0.6)] max-w-sm"
        >
          <span className="material-symbols-outlined text-primary-container text-[22px] shrink-0">check_circle</span>
          <div className="flex flex-col text-xs">
            <span className="font-semibold text-on-surface">Build Saved (Demo Session Only)</span>
            <span className="text-on-surface-variant font-mono mt-0.5">
              Your configuration is stored in this browser session only. No data is sent to a server.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setSaveToast(false)}
            aria-label="Dismiss"
            className="text-on-surface-variant hover:text-on-surface ml-1 shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </aside>
      )}
    </div>
  );
}
