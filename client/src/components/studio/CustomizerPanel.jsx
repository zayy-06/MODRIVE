import {
  PAINT_COLORS,
  PAINT_FINISHES,
  WHEEL_STYLES,
  RIDE_HEIGHT_OPTIONS,
  AERO_OPTIONS,
  PERF_UPGRADES,
} from "../../data/studioData";

// ── Helper: Section title ───────────────────────────────────────────────────
function SectionTitle({ icon, label }) {
  return (
    <div className="flex items-center gap-2 pb-space-sm border-b border-surface-container-high/60">
      <span className="material-symbols-outlined text-primary-container text-[16px]">{icon}</span>
      <span className="font-label-technical text-label-technical text-on-surface uppercase font-bold tracking-wider">{label}</span>
    </div>
  );
}

// ── Paint Section ───────────────────────────────────────────────────────────
function PaintSection({ paintColorId, paintFinishId, onColorChange, onFinishChange }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <SectionTitle icon="format_paint" label="Paint & Finish" />

      {/* Color Swatches */}
      <div>
        <p className="font-label-technical text-[10px] text-on-surface-variant uppercase mb-2">Paint Colour</p>
        <div className="flex items-center gap-2 flex-wrap">
          {PAINT_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              title={c.label}
              aria-label={c.label}
              aria-pressed={paintColorId === c.id}
              onClick={() => onColorChange(c.id)}
              className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                paintColorId === c.id
                  ? "border-primary-container shadow-[0_0_10px_rgba(184,240,0,0.6)] scale-110"
                  : "border-surface-container-high hover:border-primary-container/40"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
        <p className="font-label-technical text-[10px] text-primary-container mt-1.5 font-mono">
          {PAINT_COLORS.find((c) => c.id === paintColorId)?.label}
          {" · "}
          <span className="text-on-surface-variant">Demo — Illustrative Price</span>
        </p>
      </div>

      {/* Finish */}
      <div>
        <p className="font-label-technical text-[10px] text-on-surface-variant uppercase mb-2">Finish</p>
        <div className="flex flex-col gap-1.5">
          {PAINT_FINISHES.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={paintFinishId === f.id}
              onClick={() => onFinishChange(f.id)}
              className={`w-full text-left px-3 py-2 rounded-lg border font-label-technical text-[11px] uppercase tracking-wider transition-all cursor-pointer flex items-center justify-between ${
                paintFinishId === f.id
                  ? "border-primary-container bg-primary-container/10 text-primary-container"
                  : "border-surface-container-high bg-surface-container text-on-surface-variant hover:border-primary-container/40"
              }`}
            >
              <span>{f.label}</span>
              {paintFinishId === f.id && (
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Wheels Section ─────────────────────────────────────────────────────────
function WheelsSection({ wheelId, onWheelChange }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <SectionTitle icon="tire_repair" label="Wheels" />
      <div className="flex flex-col gap-2">
        {WHEEL_STYLES.map((w) => (
          <button
            key={w.id}
            type="button"
            aria-pressed={wheelId === w.id}
            onClick={() => onWheelChange(w.id)}
            className={`w-full text-left rounded-xl border p-3 transition-all cursor-pointer flex items-center gap-3 ${
              wheelId === w.id
                ? "border-primary-container bg-primary-container/10 shadow-[0_0_12px_rgba(184,240,0,0.12)]"
                : "border-surface-container-high bg-surface-container hover:border-primary-container/40"
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${wheelId === w.id ? "bg-primary-container/20 text-primary-container" : "bg-surface-container-high text-on-surface-variant"}`}>
              <span className="material-symbols-outlined text-[18px]">{w.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className={`font-label-technical text-xs uppercase font-bold truncate ${wheelId === w.id ? "text-primary-container" : "text-on-surface"}`}>{w.brand}</p>
              <p className="font-body-sm text-[11px] text-on-surface-variant truncate">{w.subtitle}</p>
            </div>
            {wheelId === w.id && (
              <span className="material-symbols-outlined text-primary-container text-[16px] shrink-0">check_circle</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Ride Height Section ────────────────────────────────────────────────────
function RideHeightSection({ rideHeightId, onRideHeightChange }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <SectionTitle icon="height" label="Ride Height" />
      <div className="grid grid-cols-3 gap-2">
        {RIDE_HEIGHT_OPTIONS.map((r) => (
          <button
            key={r.id}
            type="button"
            aria-pressed={rideHeightId === r.id}
            onClick={() => onRideHeightChange(r.id)}
            className={`flex flex-col items-center py-2.5 px-1 rounded-xl border transition-all cursor-pointer ${
              rideHeightId === r.id
                ? "border-primary-container bg-primary-container/10 text-primary-container"
                : "border-surface-container-high bg-surface-container text-on-surface-variant hover:border-primary-container/40"
            }`}
          >
            <span className="font-label-technical text-xs uppercase font-bold">{r.label}</span>
            <span className="font-label-technical text-[9px] text-center mt-0.5 opacity-80">{r.subtitle}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Aero Section ──────────────────────────────────────────────────────────
function AeroSection({ aeroId, onAeroChange }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <SectionTitle icon="air" label="Aero System" />
      <div className="flex flex-col gap-1.5">
        {AERO_OPTIONS.map((a) => (
          <button
            key={a.id}
            type="button"
            role="radio"
            aria-checked={aeroId === a.id}
            onClick={() => onAeroChange(a.id)}
            className={`w-full text-left rounded-xl border p-3 transition-all cursor-pointer ${
              aeroId === a.id
                ? "border-primary-container bg-primary-container/10"
                : "border-surface-container-high bg-surface-container hover:border-primary-container/40"
            }`}
          >
            <div className="flex items-start gap-2">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${aeroId === a.id ? "border-primary-container bg-primary-container" : "border-on-surface-variant"}`}>
                {aeroId === a.id && <span className="w-1.5 h-1.5 rounded-full bg-on-primary" />}
              </div>
              <div>
                <p className={`font-label-technical text-xs uppercase font-bold ${aeroId === a.id ? "text-primary-container" : "text-on-surface"}`}>{a.label}</p>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">{a.subtitle}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Performance Upgrades Section ──────────────────────────────────────────
function PerformanceSection({ perfUpgrades, onToggleUpgrade }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <SectionTitle icon="speed" label="Performance Upgrades" />
      <div className="flex flex-col gap-2">
        {PERF_UPGRADES.map((u) => {
          const isChecked = perfUpgrades.includes(u.id);
          return (
            <label
              key={u.id}
              className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition-all ${
                isChecked
                  ? "border-primary-container bg-primary-container/10"
                  : "border-surface-container-high bg-surface-container hover:border-primary-container/40"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onToggleUpgrade(u.id)}
                aria-label={u.label}
                className="sr-only"
              />
              <div className={`w-4.5 h-4.5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${isChecked ? "bg-primary-container border-primary-container" : "border-on-surface-variant bg-transparent"}`}
                style={{ width: "1.125rem", height: "1.125rem" }}
              >
                {isChecked && <span className="material-symbols-outlined text-on-primary text-[12px]">check</span>}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-label-technical text-xs uppercase font-bold truncate ${isChecked ? "text-primary-container" : "text-on-surface"}`}>{u.label}</p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">{u.brand} · <span className="font-mono">{u.sku}</span></p>
              </div>
            </label>
          );
        })}
      </div>
      <p className="font-label-technical text-[10px] text-on-surface-variant uppercase">
        {perfUpgrades.length} upgrade{perfUpgrades.length !== 1 ? "s" : ""} selected — Demo illustrative items
      </p>
    </div>
  );
}

// ── Main Customizer Panel ─────────────────────────────────────────────────
export default function CustomizerPanel({ config, onConfigChange }) {
  const { paintColorId, paintFinishId, wheelId, rideHeightId, aeroId, perfUpgrades } = config;

  const handleToggleUpgrade = (id) => {
    onConfigChange({
      perfUpgrades: perfUpgrades.includes(id)
        ? perfUpgrades.filter((u) => u !== id)
        : [...perfUpgrades, id],
    });
  };

  return (
    <aside className="flex flex-col gap-space-lg h-full overflow-y-auto scrollbar-none">
      {/* Header */}
      <div className="flex items-center gap-2 pb-space-sm border-b border-surface-container-high/60 sticky top-0 bg-surface-container-low z-10 -mt-1 pt-1">
        <span className="material-symbols-outlined text-primary-container text-[18px]">tune</span>
        <span className="font-label-technical text-label-technical text-on-surface uppercase font-bold tracking-wider">Customise Build</span>
      </div>

      <PaintSection
        paintColorId={paintColorId}
        paintFinishId={paintFinishId}
        onColorChange={(v) => onConfigChange({ paintColorId: v })}
        onFinishChange={(v) => onConfigChange({ paintFinishId: v })}
      />

      <WheelsSection
        wheelId={wheelId}
        onWheelChange={(v) => onConfigChange({ wheelId: v })}
      />

      <RideHeightSection
        rideHeightId={rideHeightId}
        onRideHeightChange={(v) => onConfigChange({ rideHeightId: v })}
      />

      <AeroSection
        aeroId={aeroId}
        onAeroChange={(v) => onConfigChange({ aeroId: v })}
      />

      <PerformanceSection
        perfUpgrades={perfUpgrades}
        onToggleUpgrade={handleToggleUpgrade}
      />
    </aside>
  );
}
