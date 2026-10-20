import {
  STUDIO_VEHICLES,
  PAINT_COLORS,
  PAINT_FINISHES,
  WHEEL_STYLES,
  RIDE_HEIGHT_OPTIONS,
  AERO_OPTIONS,
  PERF_UPGRADES,
} from "../../data/studioData";
import { calcEstimate } from "./BuildSummaryBar";

function fmtPKR(n) {
  return "PKR " + n.toLocaleString("en-PK");
}

function LineItem({ icon, label, value, price }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-surface-container-high/60 last:border-0">
      <div className="flex items-center gap-2.5 flex-1 min-w-0">
        <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0">{icon}</span>
        <div className="flex flex-col min-w-0">
          <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">{label}</span>
          <span className="font-body-sm text-xs text-on-surface truncate">{value}</span>
        </div>
      </div>
      <span className="font-metric-price text-sm font-bold text-primary-container font-mono ml-3 shrink-0">{price}</span>
    </div>
  );
}

export default function ItemizedModal({ config, onClose }) {
  const vehicle = STUDIO_VEHICLES.find((v) => v.id === config.vehicleId);
  const paintColor = PAINT_COLORS.find((c) => c.id === config.paintColorId);
  const paintFinish = PAINT_FINISHES.find((f) => f.id === config.paintFinishId);
  const wheel = WHEEL_STYLES.find((w) => w.id === config.wheelId);
  const rideHeight = RIDE_HEIGHT_OPTIONS.find((r) => r.id === config.rideHeightId);
  const aero = AERO_OPTIONS.find((a) => a.id === config.aeroId);
  const selectedUpgrades = PERF_UPGRADES.filter((u) => config.perfUpgrades.includes(u.id));
  const total = calcEstimate(config);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-surface-container-lowest/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Itemized Parts Breakdown"
    >
      <div className="w-full max-w-2xl bg-surface-container-low border border-surface-container-high rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-space-lg border-b border-surface-container-high/60 shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-[20px]">receipt_long</span>
            <div>
              <h2 className="font-headline-sm text-base uppercase text-on-surface font-bold">Itemized Build Sheet</h2>
              <p className="font-label-technical text-[10px] text-on-surface-variant uppercase">{vehicle?.buildCode} — DEMO ILLUSTRATIVE PRICES</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close itemized view"
            className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-space-lg scrollbar-none flex flex-col gap-space-md">
          {/* Vehicle Platform */}
          <div>
            <p className="font-label-technical text-[10px] text-primary-container uppercase tracking-widest font-semibold mb-2">Base Platform</p>
            <LineItem icon="directions_car" label="Vehicle" value={vehicle?.name ?? "—"} price={fmtPKR(vehicle?.basePrice ?? 0)} />
          </div>

          {/* Paint */}
          <div>
            <p className="font-label-technical text-[10px] text-primary-container uppercase tracking-widest font-semibold mb-2">Paint & Finish</p>
            <LineItem icon="format_paint" label="Colour" value={paintColor?.label ?? "—"} price={fmtPKR(paintColor?.price ?? 0)} />
            <LineItem icon="texture" label="Finish" value={paintFinish?.label ?? "—"} price={fmtPKR(paintFinish?.price ?? 0)} />
          </div>

          {/* Wheels & Stance */}
          <div>
            <p className="font-label-technical text-[10px] text-primary-container uppercase tracking-widest font-semibold mb-2">Wheels & Stance</p>
            <LineItem icon="tire_repair" label="Wheels" value={wheel ? `${wheel.brand} · ${wheel.subtitle}` : "—"} price={fmtPKR(wheel?.price ?? 0)} />
            <LineItem icon="height" label="Ride Height" value={rideHeight ? `${rideHeight.label} (${rideHeight.subtitle})` : "—"} price={fmtPKR(rideHeight?.price ?? 0)} />
          </div>

          {/* Aero */}
          {aero && aero.id !== "stock" && (
            <div>
              <p className="font-label-technical text-[10px] text-primary-container uppercase tracking-widest font-semibold mb-2">Aero System</p>
              <LineItem icon="air" label={aero.label} value={aero.subtitle} price={fmtPKR(aero.price)} />
            </div>
          )}

          {/* Performance Upgrades */}
          {selectedUpgrades.length > 0 && (
            <div>
              <p className="font-label-technical text-[10px] text-primary-container uppercase tracking-widest font-semibold mb-2">Performance Upgrades</p>
              {selectedUpgrades.map((u) => (
                <LineItem key={u.id} icon={u.icon} label={u.brand} value={u.label} price={fmtPKR(u.price)} />
              ))}
            </div>
          )}
        </div>

        {/* Footer total */}
        <div className="border-t border-surface-container-high/60 p-space-lg shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div className="flex flex-col gap-0.5">
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">Estimated Package Total (DEMO)</span>
            <span className="font-metric-price text-metric-price text-primary-container font-mono font-bold">{fmtPKR(total)}</span>
            <p className="font-label-technical text-[10px] text-on-surface-variant/60">All prices are illustrative portfolio demo data. No purchase is made here.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-label-technical text-label-technical font-bold uppercase tracking-wider hover:bg-primary-fixed transition-colors cursor-pointer"
          >
            <span>Done</span>
            <span className="material-symbols-outlined text-[16px]">check</span>
          </button>
        </div>
      </div>
    </div>
  );
}
