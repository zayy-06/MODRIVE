/** Telemetry HUD badges — visible only on xl+ screens, positioned over hero. */
export default function TelemetryBadges() {
  return (
    <>
      {/* ── Left Badges ─────────────────────────────────────────────────── */}
      <div
        className="hidden xl:flex absolute top-28 left-margin z-20 flex-col gap-space-xs pointer-events-none"
        aria-hidden="true"
      >
        <div className="bg-surface-container-high/80 backdrop-blur-md px-space-md py-space-xs rounded-DEFAULT shadow-lg flex items-center gap-space-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" />
          <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface">
            PLATFORM: 992 GT3 RS // CHASSIS-ID: 0x889F
          </span>
        </div>
        <div className="bg-surface-container-high/80 backdrop-blur-md px-space-md py-space-xs rounded-DEFAULT shadow-lg flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary-container text-[14px]">air</span>
          <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
            AERO LOAD:{" "}
            <span className="text-primary-container font-bold">380KG</span> @ 200KM/H
          </span>
        </div>
      </div>

      {/* ── Right Badges ─────────────────────────────────────────────────── */}
      <div
        className="hidden xl:flex absolute top-28 right-margin z-20 flex-col items-end gap-space-xs pointer-events-none"
        aria-hidden="true"
      >
        <div className="bg-surface-container-high/80 backdrop-blur-md px-space-md py-space-xs rounded-DEFAULT shadow-lg flex items-center gap-space-sm">
          <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
            COMPOSITE:{" "}
            <span className="text-tertiary">DRY VACUUM PRE-PREG</span>
          </span>
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-[14px]">
            verified
          </span>
        </div>
        <div className="bg-surface-container-high/80 backdrop-blur-md px-space-md py-space-xs rounded-DEFAULT shadow-lg flex items-center gap-space-sm">
          <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
            UNSPRUNG MASS:{" "}
            <span className="text-primary-container font-bold">-18.4KG</span> DELTA
          </span>
        </div>
      </div>
    </>
  );
}
