import { Link } from "react-router-dom";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1Xr2L3X6gCZm_WRzDyaqtf4oD7CKmsQ7gFLNqVQtUtAcaxH0stHkYcOl9Ln0hZztkaUYvPdW41QBnuQk41G8E77F-OIMu2GCE-mVkXZvqD4dJgBWQi-caJWUHydt3qg9JwjgJTdg1tbB5SQz5AabT8Hyk6nSdwJlytDOHy-At8YHPUl4Z6GDmwCzEqkRxQKQaQC5z--D3uPHXNVC9SIboWlhu6YUbeHggjDhB07BCxT0I7mcQH50l1NAnSU";

export default function SiteFooter() {
  return (
    <footer
      className="w-full bg-surface-container-lowest text-on-surface-variant pt-space-xl pb-space-lg"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="w-full px-margin">
        {/* ── Main Footer Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
          {/* Col 1-2: Brand + Tagline */}
          <div className="lg:col-span-2 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                src={LOGO_URL}
                alt="MODRIVE Automotive Logo"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
                MODRIVE
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Design Your Dream Build. High-performance aftermarket components and real-time 3D
              vehicle customization engineered with skunkworks precision.
            </p>
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-low rounded-full">
              <span
                className="w-2 h-2 rounded-full bg-primary-container animate-pulse"
                aria-hidden="true"
              />
              <span className="font-label-technical text-label-technical text-on-surface uppercase">
                Telemetry &amp; Fitment Engine Active
              </span>
            </div>
          </div>

          {/* Col 3: Explore & Studio links */}
          <div className="space-y-space-md">
            <h2 className="font-headline-sm text-body-md uppercase font-bold text-on-surface tracking-wider">
              Explore &amp; Studio
            </h2>
            <ul className="space-y-space-sm font-body-sm text-body-sm" role="list">
              {[
                { label: "3D Studio Configurator", to: "/customizer" },
                { label: "Supported Vehicles", to: "/shop" },
                { label: "Shop All Parts", to: "/shop" },
                { label: "Curated Gallery", to: "/gallery" },
                { label: "Service Workshops", to: "/services" },
                { label: "About MODRIVE", to: "/about" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="hover:text-primary-container transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Performance Categories */}
          <div className="space-y-space-md">
            <h2 className="font-headline-sm text-body-md uppercase font-bold text-on-surface tracking-wider">
              Performance Categories
            </h2>
            <ul className="space-y-space-sm font-body-sm text-body-sm" role="list">
              {[
                "Forged Wheels",
                "Aero & Body Kits",
                "Valvetronic Exhausts",
                "Coilover Suspensions",
                "Carbon Aerodynamics",
              ].map((label) => (
                <li key={label}>
                  <Link to="/shop" className="hover:text-primary-container transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Studio Locations */}
          <div className="space-y-space-md">
            <h2 className="font-headline-sm text-body-md uppercase font-bold text-on-surface tracking-wider">
              Performance Studios
            </h2>
            <address className="not-italic space-y-space-xs font-body-sm text-body-sm">
              <p className="text-on-surface font-semibold">Karachi Skunkworks</p>
              <p className="text-on-surface-variant">Plot 14-C, Lane 4, Phase VI DHA, Karachi</p>
              <p className="text-primary-container font-mono text-label-technical">
                +92 (21) 3584-9021
              </p>
            </address>
            <address className="not-italic space-y-space-xs font-body-sm text-body-sm pt-space-xs">
              <p className="text-on-surface font-semibold">Lahore Apex Center</p>
              <p className="text-on-surface-variant">H-Block Ring Road Phase 5 DHA, Lahore</p>
              <p className="text-primary-container font-mono text-label-technical">
                +92 (42) 3572-8810
              </p>
            </address>
          </div>
        </div>

        {/* ── Bottom Disclaimer Bar ────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-space-md pt-space-lg bg-surface-container-low/40 p-space-md rounded-xl">
          <div className="flex items-center gap-space-sm">
            <span
              className="material-symbols-outlined text-primary-container text-[20px]"
              aria-hidden="true"
            >
              info
            </span>
            <p className="font-label-technical text-label-technical uppercase tracking-wide text-on-surface-variant">
              All prices shown are illustrative demo prices in PKR for portfolio showcase purposes.
            </p>
          </div>
          <div className="flex items-center gap-space-lg">
            <div className="flex items-center gap-space-xs font-label-technical text-label-technical text-on-surface uppercase bg-surface-container-high px-space-md py-1.5 rounded-lg">
              <span
                className="material-symbols-outlined text-[16px] text-primary-container"
                aria-hidden="true"
              >
                payments
              </span>
              <span>PKR — Pakistani Rupee</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              &copy; 2025 MODRIVE Performance Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
