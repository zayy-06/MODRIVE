import { Link } from "react-router-dom";

/**
 * CustomizerPlaceholder — Shown for /customizer route.
 * The 3D Studio is a Phase 4 feature. This page clearly communicates that.
 */
export default function CustomizerPlaceholder() {
  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-margin py-space-xl">
      <div className="max-w-2xl w-full text-center space-y-space-lg">
        {/* Icon */}
        <div className="w-20 h-20 rounded-xl bg-surface-container-low flex items-center justify-center text-primary-container mx-auto shadow-lg">
          <span className="material-symbols-outlined text-[48px]" aria-hidden="true">
            view_in_ar
          </span>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-DEFAULT bg-surface-container-high/90 shadow-md">
          <span
            className="w-2 h-2 rounded-full bg-outline animate-pulse"
            aria-hidden="true"
          />
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant">
            PHASE 4 — 3D ENGINE OFFLINE
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface tracking-tight">
          3D Studio <span className="text-primary-container">Configurator</span>
        </h1>

        {/* Description */}
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
          The real-time WebGL 3D Studio is coming in Phase 4. It will feature 360° turntable
          views, physically accurate shaders, live ride-height adjustments, valvetronic audio
          simulation, and instant PKR build-sheet export.
        </p>

        {/* Feature Preview Grid */}
        <div className="grid grid-cols-2 gap-space-md text-left">
          {[
            { icon: "360", label: "360° Turntable Orbit" },
            { icon: "palette", label: "PBR Material Shaders" },
            { icon: "height", label: "Live Ride Height Sim" },
            { icon: "volume_up", label: "Valvetronic Audio" },
            { icon: "precision_manufacturing", label: "LiDAR Fitment Check" },
            { icon: "receipt_long", label: "Instant Build Sheet" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-space-sm bg-surface-container-low p-space-md rounded-lg"
            >
              <span
                className="material-symbols-outlined text-on-surface-variant/40 text-[20px]"
                aria-hidden="true"
              >
                {icon}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant/60">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-space-xs px-space-xl py-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-body-md font-bold uppercase rounded-DEFAULT tracking-wider transition-colors shadow-lg"
        >
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            arrow_back
          </span>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
