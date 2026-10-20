import { Link } from "react-router-dom";

const STUDIO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCrkoeDmWv_7qmya6H80O7Yun6kIoq9590InRWmWkURSM3Yq97wfRrjTqho398OdtwEo_1EHDGKQ5ZniZ6kEHcZMWH0v4To-hUpHykorciPu9PTnbQOzP-nHZIfGNa1bHWwwISefnhsot7zes_EOP9JKCj5gAF7GufmzhptxadvpOAPAXhCy-uHY8bbpNeKsdeujfxUsLmD_pfA40xo1qiH7yTqGUXhyoGYchQp2xqZNs6UPbUtnSxHrA";

const capabilityCards = [
  {
    icon: "precision_manufacturing",
    title: "Sub-millimeter OEM Fitment Verification",
    description:
      "Chassis surfaces scanned with sub-millimeter LiDAR accuracy. Check for fender rub, coilover clearance, and brake caliper clearances prior to delivery.",
  },
  {
    icon: "palette",
    title: "Physically Accurate Shaders",
    description:
      "Evaluate real light absorption across satin stealth wraps, deep liquid metallics, forged flake carbon fiber, and titanium exhaust thermal hues.",
  },
  {
    icon: "receipt_long",
    title: "Instant Build Sheet & PKR Breakdown",
    description:
      "One-click export of an itemized bill of materials, including import freight duties, installation shop hours, and estimated lead times.",
  },
];

const viewportNodes = [
  { icon: "360", label: "360° Turntable" },
  { icon: "height", label: "Ride Height: -35mm" },
  { icon: "volume_up", label: "Valvetronic Audio Sim" },
];

const cameraPresets = ["Front 3/4", "Wheel Profile", "Rear Diffuser", "Cockpit"];

export default function StudioSpotlight() {
  return (
    <section
      className="w-full py-space-xl px-margin bg-surface"
      aria-labelledby="studio-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ──────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="text-primary-container font-label-technical text-label-technical uppercase font-bold tracking-widest">
                // SKUNKWORKS REALTIME ENGINE
              </span>
            </div>
            <h2
              id="studio-heading"
              className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight"
            >
              Next-Generation{" "}
              <span className="text-primary-container">3D Studio</span>
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Zero latency WebGL chassis inspector. Swap forged monoblocks, dial in negative camber,
            simulate valvetronic throttle notes, and verify digital clearances.
          </p>
        </div>

        {/* ── Split Layout ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          {/* ── Viewport Mockup (col 7) ─────────────────────────────────── */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[460px]">
            {/* Studio background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              role="img"
              aria-label="Technical CAD wireframe view of a customized sports coupe inside a virtual dark 3D showroom with dynamic reflections."
              style={{ backgroundImage: `url('${STUDIO_IMAGE}')` }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"
              aria-hidden="true"
            />

            {/* HUD Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-space-xs bg-surface-container-highest/80 backdrop-blur-md px-3 py-1.5 rounded-DEFAULT">
                <span
                  className="w-2 h-2 rounded-full bg-primary-container animate-pulse"
                  aria-hidden="true"
                />
                <span className="font-label-technical text-[11px] text-on-surface uppercase tracking-wider">
                  REALTIME RAYTRACING ACTIVE • 60 FPS
                </span>
              </div>
              <div
                className="flex items-center gap-1 bg-surface-container-highest/80 backdrop-blur-md p-1 rounded-DEFAULT"
                role="toolbar"
                aria-label="Studio view controls (decorative)"
              >
                <button
                  className="p-1 rounded hover:bg-surface-container text-primary-container"
                  title="Day/Night Toggle"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">wb_sunny</span>
                </button>
                <button
                  className="p-1 rounded hover:bg-surface-container text-on-surface-variant"
                  title="Wireframe Mode"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">grid_4x4</span>
                </button>
                <button
                  className="p-1 rounded hover:bg-surface-container text-on-surface-variant"
                  title="Fullscreen"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">fullscreen</span>
                </button>
              </div>
            </div>

            {/* Viewport Node Markers */}
            <div className="relative z-10 flex flex-wrap gap-space-sm my-auto py-8" aria-hidden="true">
              {viewportNodes.map(({ icon, label }) => (
                <div
                  key={label}
                  className="bg-surface-container-high/90 backdrop-blur-md px-3 py-1.5 rounded-DEFAULT flex items-center gap-2 shadow-lg"
                >
                  <span className="material-symbols-outlined text-primary-container text-[16px]">
                    {icon}
                  </span>
                  <span className="font-label-technical text-label-technical uppercase text-on-surface font-semibold">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Camera Preset Ribbon */}
            <div className="relative z-10 flex items-center justify-between bg-surface-container-highest/90 backdrop-blur-md px-space-md py-2 rounded-lg">
              <span className="font-label-technical text-label-technical uppercase text-on-surface-variant">
                CAMERA PRESETS
              </span>
              <div className="flex items-center gap-2" role="group" aria-label="Camera angle presets">
                {cameraPresets.map((preset, i) => (
                  <span
                    key={preset}
                    className={`font-label-technical text-label-technical px-2 py-0.5 rounded cursor-pointer ${
                      i === 0
                        ? "text-on-primary bg-primary-container font-bold"
                        : "text-on-surface hover:text-primary-container"
                    }`}
                  >
                    {preset}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Capability Cards (col 5) ─────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
            {capabilityCards.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl transition-all shadow-md"
              >
                <div className="flex items-center gap-space-sm mb-space-xs">
                  <div className="w-8 h-8 rounded-DEFAULT bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-body-lg font-bold uppercase text-on-surface">
                    {title}
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-10">
                  {description}
                </p>
              </div>
            ))}

            {/* CTA */}
            <Link
              to="/customizer"
              className="w-full py-space-md px-space-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-headline-sm text-body-md font-bold uppercase rounded-lg tracking-wider transition-all flex items-center justify-between shadow-md"
            >
              <span>Open 3D Studio Workspace</span>
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                terminal
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
