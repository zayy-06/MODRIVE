import { Link } from "react-router-dom";
import TelemetryBadges from "./TelemetryBadges";
import VehicleSelector from "./VehicleSelector";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsQ3yMLbPEpbV4eorJhbB5pCc7GYz3IRMElPK7HOXuOpQNTCTBGcShAjS-XCIx33LCzsBwMlkDJrYoFrPks2G07JhPJX47RcJrWov3E27841FCzXXQ632e6FJ_t4MmVz3_gWPsnxWuQ1thQJWkFnai-fdw4dhKCo1TfABnYuy-eUdwXK3yaTYk-AubgyV0qJvScnx4zQ3jYTjpS_Tms0gFMldE_i0g8JWV7ZUlhR0vqEKL5VBH3sGA_w";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-surface-container-lowest -mt-20 pt-20"
      aria-label="Hero — Build Your Car Your Way"
    >
      {/* ── Hero Viewport ──────────────────────────────────────────────── */}
      <div className="relative w-full min-h-[96vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-[center_top] origin-top transition-transform duration-1000"
          role="img"
          aria-label="A sinister matte black Porsche 911 GT3 with exposed dry carbon fiber aero kit, neon lime green pin-stripe accents, bronze center-lock forged wheels, in an ultra-modern dark industrial aerospace hangar."
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />

        {/* Vignette gradients */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-surface via-surface-container-lowest/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/85 via-transparent to-surface-container-lowest/85 pointer-events-none"
          aria-hidden="true"
        />

        {/* Telemetry HUD Badges */}
        <TelemetryBadges />

        {/* ── Core Hero Content ─────────────────────────────────────────── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-margin py-space-xl flex flex-col items-center text-center mt-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-DEFAULT bg-surface-container-high/90 backdrop-blur-md shadow-md mb-space-lg">
            <span
              className="w-2 h-2 rounded-full bg-primary-container animate-pulse"
              aria-hidden="true"
            />
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container font-bold">
              2025 AFTERMARKET &amp; 3D STUDIO
            </span>
            <span
              className="text-on-surface-variant/40 font-mono text-[10px]"
              aria-hidden="true"
            >
              |
            </span>
            <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface">
              V4.8 ENGINE ACTIVE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase text-on-surface tracking-tight max-w-5xl leading-none">
            BUILD YOUR CAR.{" "}
            <br className="hidden sm:block" />
            <span className="text-primary-container">YOUR WAY.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-lg mb-space-xl">
            Design, simulate, and engineer bespoke automotive builds. Experience ultra-realistic
            real-time 3D configuration with direct access to certified aftermarket aero, suspension,
            valvetronic exhaust, and forged wheel kits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-space-md w-full max-w-md">
            <Link
              to="/customizer"
              className="flex-1 inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 bg-primary-container text-on-primary-container hover:bg-primary-fixed transition-colors font-headline-sm text-body-md font-bold uppercase rounded-DEFAULT tracking-wider shadow-xl shadow-primary-container/20"
            >
              <span>Start Customizing</span>
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
            <Link
              to="/shop"
              className="flex-1 inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-surface-container-high/80 hover:bg-surface-container text-on-surface transition-colors font-body-md text-body-md uppercase rounded-DEFAULT tracking-wider shadow-md"
            >
              <span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden="true">
                tune
              </span>
              <span>Explore Catalog</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Vehicle Selector Bar ────────────────────────────────────────── */}
      <VehicleSelector />
    </section>
  );
}
