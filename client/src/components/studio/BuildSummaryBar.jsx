import {
  STUDIO_VEHICLES,
  PAINT_COLORS,
  PAINT_FINISHES,
  WHEEL_STYLES,
  RIDE_HEIGHT_OPTIONS,
  AERO_OPTIONS,
  PERF_UPGRADES,
} from "../../data/studioData";

/**
 * Calculates the illustrative PKR total from the current config.
 * All prices are demo data — not real commercial pricing.
 */
export function calcEstimate(config) {
  const vehicle = STUDIO_VEHICLES.find((v) => v.id === config.vehicleId);
  const paintColor = PAINT_COLORS.find((c) => c.id === config.paintColorId);
  const paintFinish = PAINT_FINISHES.find((f) => f.id === config.paintFinishId);
  const wheel = WHEEL_STYLES.find((w) => w.id === config.wheelId);
  const rideHeight = RIDE_HEIGHT_OPTIONS.find((r) => r.id === config.rideHeightId);
  const aero = AERO_OPTIONS.find((a) => a.id === config.aeroId);
  const upgradesTotal = config.perfUpgrades.reduce((sum, uid) => {
    const u = PERF_UPGRADES.find((p) => p.id === uid);
    return sum + (u?.price ?? 0);
  }, 0);

  return (
    (vehicle?.basePrice ?? 0) +
    (paintColor?.price ?? 0) +
    (paintFinish?.price ?? 0) +
    (wheel?.price ?? 0) +
    (rideHeight?.price ?? 0) +
    (aero?.price ?? 0) +
    upgradesTotal
  );
}

function fmtPKR(n) {
  return "PKR " + n.toLocaleString("en-PK");
}

export default function BuildSummaryBar({ config, onReset, onSave, onViewParts }) {
  const vehicle = STUDIO_VEHICLES.find((v) => v.id === config.vehicleId);
  const paintColor = PAINT_COLORS.find((c) => c.id === config.paintColorId);
  const paintFinish = PAINT_FINISHES.find((f) => f.id === config.paintFinishId);
  const wheel = WHEEL_STYLES.find((w) => w.id === config.wheelId);
  const rideHeight = RIDE_HEIGHT_OPTIONS.find((r) => r.id === config.rideHeightId);
  const aero = AERO_OPTIONS.find((a) => a.id === config.aeroId);
  const modCount = config.perfUpgrades.length + (aero?.id !== "stock" ? 1 : 0);
  const estimate = calcEstimate(config);

  return (
    <div className="relative w-full bg-surface-container border-y border-surface-container-high/80 px-margin py-space-lg shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center gap-space-md lg:gap-space-lg">

        {/* Vehicle + Config Summary */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-x-space-md gap-y-2">
          {/* Platform */}
          <div className="flex flex-col gap-0.5">
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">Platform</span>
            <span className="font-headline-sm text-sm text-on-surface font-bold truncate">{vehicle?.shortName}</span>
          </div>
          {/* Paint */}
          <div className="flex flex-col gap-0.5">
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">Paint</span>
            <div className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-full border border-surface-container-high shrink-0"
                style={{ backgroundColor: paintColor?.hex ?? "#111" }}
              />
              <span className="font-body-sm text-xs text-on-surface truncate">{paintColor?.label} / {paintFinish?.label}</span>
            </div>
          </div>
          {/* Wheels & Stance */}
          <div className="flex flex-col gap-0.5">
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">Wheels / Stance</span>
            <span className="font-body-sm text-xs text-on-surface truncate">{wheel?.brand} · {rideHeight?.label}</span>
          </div>
          {/* Active Mods */}
          <div className="flex flex-col gap-0.5">
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">Active Mods</span>
            <div className="flex items-center gap-1.5">
              <span className="font-metric-price text-sm font-bold text-primary-container font-mono">{modCount}</span>
              <span className="font-label-technical text-[10px] text-on-surface-variant">INSTALLED</span>
            </div>
          </div>
        </div>

        {/* Estimate */}
        <div className="flex flex-col gap-0.5 shrink-0 lg:border-l lg:border-surface-container-high lg:pl-space-lg">
          <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">Estimated Total (DEMO)</span>
          <span className="font-metric-price text-metric-price text-primary-container font-mono font-bold">{fmtPKR(estimate)}</span>
          <span className="font-label-technical text-[10px] text-on-surface-variant/60">Illustrative portfolio pricing only</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          <button
            type="button"
            onClick={onViewParts}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface font-label-technical text-label-technical font-semibold uppercase tracking-wider hover:bg-surface-bright transition-colors border border-surface-container-highest/60 cursor-pointer text-xs"
          >
            <span className="material-symbols-outlined text-[16px] text-primary-container">receipt_long</span>
            <span>View Parts</span>
          </button>

          <button
            type="button"
            onClick={onReset}
            title="Reset to demo defaults"
            className="inline-flex items-center justify-center p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary-container hover:bg-surface-container-high transition-colors border border-surface-container-high cursor-pointer"
            aria-label="Reset configuration"
          >
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
          </button>

          <button
            type="button"
            onClick={onSave}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-technical text-label-technical font-bold uppercase tracking-wider hover:bg-primary-fixed transition-colors shadow-[0_0_16px_rgba(184,240,0,0.3)] cursor-pointer text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">save</span>
            <span>Save Build</span>
          </button>
        </div>
      </div>
    </div>
  );
}
