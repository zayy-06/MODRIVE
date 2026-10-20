import { useState } from "react";

const FALLBACK_PREVIEW =
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80";

const VIEW_ANGLES = [
  { id: "front-34", label: "Front 3/4", icon: "directions_car" },
  { id: "front", label: "Front", icon: "north" },
  { id: "side", label: "Side", icon: "east" },
  { id: "rear-wing", label: "Rear Wing", icon: "air" },
  { id: "cockpit", label: "Cockpit", icon: "airline_seat_recline_extra" },
];

const LIGHTING_PRESETS = [
  { id: "studio-dark", label: "Studio Dark" },
  { id: "neon", label: "Neon" },
  { id: "dyno", label: "Dyno" },
];

const HOTSPOTS = [
  { id: "wing", label: "Carbon Swan-Neck Wing", desc: "Vorsteiner pre-preg dry carbon, adjustable 12°", top: "18%", left: "62%" },
  { id: "wheel", label: "BBS FI-R Monoblock", desc: "20/21-inch centerlock, 7.9 kg front", top: "68%", left: "72%" },
  { id: "splitter", label: "Front Splitter", desc: "Wind-tunnel calibrated 2×2 carbon weave", top: "72%", left: "28%" },
];

export default function VehiclePreview({ vehicle, config }) {
  const [imgSrc, setImgSrc] = useState(vehicle?.image ?? FALLBACK_PREVIEW);
  const [activeView, setActiveView] = useState("front-34");
  const [activeLighting, setActiveLighting] = useState("studio-dark");
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [zoom, setZoom] = useState(100);

  // When vehicle changes, reset to their image
  const currentImg = vehicle?.image ?? FALLBACK_PREVIEW;

  const handleZoomIn = () => setZoom((z) => Math.min(z + 15, 160));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 15, 70));
  const handleReset = () => { setZoom(100); setActiveView("front-34"); setActiveLighting("studio-dark"); setActiveHotspot(null); };

  // Lighting overlay class
  const lightingOverlay = {
    "studio-dark": "bg-surface/10",
    neon: "bg-primary-container/5 mix-blend-screen",
    dyno: "bg-orange-900/10",
  }[activeLighting];

  return (
    <div className="flex flex-col gap-space-sm h-full">
      {/* View Angle Controls */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {VIEW_ANGLES.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveView(v.id)}
            aria-pressed={activeView === v.id}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-label-technical text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
              activeView === v.id
                ? "bg-primary-container text-on-primary font-bold"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined text-[13px]">{v.icon}</span>
            <span className="hidden sm:inline">{v.label}</span>
          </button>
        ))}
      </div>

      {/* Main Preview Viewport */}
      <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 overflow-hidden group">
        {/* Vehicle Image */}
        <img
          src={currentImg}
          alt={vehicle?.name ?? "Vehicle Preview"}
          key={vehicle?.id}
          onError={(e) => { e.currentTarget.src = FALLBACK_PREVIEW; }}
          className="w-full h-full object-cover object-center transition-all duration-500"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: "center center" }}
          loading="eager"
        />

        {/* Lighting overlay tint */}
        <div className={`absolute inset-0 pointer-events-none transition-all duration-300 ${lightingOverlay}`} aria-hidden="true" />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/60 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/30 via-transparent to-surface-container-lowest/30 pointer-events-none" aria-hidden="true" />

        {/* DEMO label */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-surface/85 backdrop-blur-sm rounded-lg border border-surface-container-high/60">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
          <span className="font-label-technical text-[10px] text-on-surface uppercase tracking-widest">STATIC DEMO PREVIEW — 3D COMING LATER</span>
        </div>

        {/* View mode badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-surface/85 backdrop-blur-sm rounded-lg border border-surface-container-high/60">
          <span className="font-label-technical text-[10px] text-primary-container uppercase font-mono">
            VIEW: {VIEW_ANGLES.find((v) => v.id === activeView)?.label ?? activeView}
          </span>
        </div>

        {/* Vehicle name overlay */}
        <div className="absolute bottom-3 left-3 flex flex-col gap-0.5">
          <span className="font-label-technical text-[10px] text-primary-container uppercase font-mono tracking-widest">{vehicle?.badge}</span>
          <span className="font-headline-sm text-sm sm:text-base uppercase font-bold text-on-surface drop-shadow-md">{vehicle?.name}</span>
          <span className="font-label-technical text-[10px] text-on-surface-variant">{vehicle?.specs.hp} BHP • {vehicle?.specs.drivetrain} • {vehicle?.specs.weight}</span>
        </div>

        {/* Hotspots */}
        {HOTSPOTS.map((hs) => (
          <div key={hs.id} className="absolute" style={{ top: hs.top, left: hs.left }}>
            <button
              type="button"
              onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
              aria-label={`View hotspot: ${hs.label}`}
              className="w-6 h-6 rounded-full bg-primary-container/80 border-2 border-primary-container flex items-center justify-center shadow-[0_0_10px_rgba(184,240,0,0.6)] cursor-pointer hover:scale-110 transition-transform"
            >
              <span className="material-symbols-outlined text-on-primary text-[12px]">add</span>
            </button>
            {activeHotspot === hs.id && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 bg-surface-container border border-surface-container-high rounded-xl p-2.5 shadow-xl z-10 pointer-events-none">
                <p className="font-label-technical text-[10px] text-primary-container uppercase font-semibold">{hs.label}</p>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">{hs.desc}</p>
                <p className="font-label-technical text-[9px] text-on-surface-variant/60 mt-1 uppercase">Demo — illustrative spec</p>
              </div>
            )}
          </div>
        ))}

        {/* Zoom Controls */}
        <div className="absolute bottom-3 right-3 flex flex-col gap-1">
          <button
            type="button"
            onClick={handleZoomIn}
            disabled={zoom >= 160}
            aria-label="Zoom in"
            className="w-8 h-8 rounded-lg bg-surface-container/90 backdrop-blur-sm text-on-surface hover:text-primary-container hover:bg-surface-container-high border border-surface-container-high flex items-center justify-center transition-colors cursor-pointer disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[16px]">zoom_in</span>
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={zoom <= 70}
            aria-label="Zoom out"
            className="w-8 h-8 rounded-lg bg-surface-container/90 backdrop-blur-sm text-on-surface hover:text-primary-container hover:bg-surface-container-high border border-surface-container-high flex items-center justify-center transition-colors cursor-pointer disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[16px]">zoom_out</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset view"
            className="w-8 h-8 rounded-lg bg-surface-container/90 backdrop-blur-sm text-on-surface hover:text-primary-container hover:bg-surface-container-high border border-surface-container-high flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">reset_image</span>
          </button>
        </div>
      </div>

      {/* Lighting Controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-wider shrink-0">Lighting:</span>
        {LIGHTING_PRESETS.map((l) => (
          <button
            key={l.id}
            onClick={() => setActiveLighting(l.id)}
            aria-pressed={activeLighting === l.id}
            className={`px-3 py-1 rounded-lg font-label-technical text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
              activeLighting === l.id
                ? "bg-surface-container-high text-primary-container border border-primary-container/60 font-bold"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high border border-surface-container-high/40"
            }`}
          >
            {l.label}
          </button>
        ))}
        <span className="ml-auto font-label-technical text-[10px] text-on-surface-variant font-mono">{zoom}% ZOOM</span>
      </div>
    </div>
  );
}
