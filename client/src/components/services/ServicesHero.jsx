import { useState } from "react";
import { WORKSHOP_STATS } from "../../data/servicesData";

const WORKSHOP_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida/AEtjO1X7lDDUHXGLyL8Rn9cF2fdhMadmWL8d3QJYY5NnMJ-ifx2un4Au45IO7FFF-hULzD6WfsQWgoaAMjkN_Yf75SrpVpp25YMhnOzlfQ5ibV75halpoW8R_Otvl9d-C7wUNSbEDvBlqZlY1nKO8Wsf2FTo-WBJ6mnP57ded_ZAQ0cWYA9NGCcyeqpiziPdh1DR38H96iCmG52eWY7GMv81Skv_FguGW0h-kWQcTotd6_jU72zhCLoVxRAI84hY";

export default function ServicesHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="w-full px-margin pb-space-xl">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-lowest shadow-2xl border border-surface-container-high/40">
          {/* Hero Visual Viewport */}
          <div className="relative h-[480px] lg:h-[620px] w-full bg-surface-container-low overflow-hidden">
            {imgError ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/40 gap-3">
                <span className="material-symbols-outlined text-[64px]">precision_manufacturing</span>
                <span className="font-label-technical text-body-sm uppercase">
                  MODRIVE Master Workshop Viewport
                </span>
              </div>
            ) : (
              <img
                src={WORKSHOP_HERO_IMAGE}
                alt="MODRIVE Master Workshop and dyno bay with precision track build on lift"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-1000 hover:scale-105"
                onError={() => setImgError(true)}
              />
            )}

            <div
              className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Tactical HUD Tag top-left */}
            <div className="absolute top-6 left-6 flex items-center gap-3 bg-surface-container-lowest/90 backdrop-blur-md px-3.5 py-2 rounded border border-surface-container-high/50 shadow-lg">
              <span className="material-symbols-outlined text-primary-container text-[18px]">
                biotech
              </span>
              <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface">
                Skunkworks Bay 01 // V-Spec Cleanroom
              </span>
            </div>

            {/* Quick Telemetry Readout top-right */}
            <div className="hidden sm:flex absolute top-6 right-6 items-center gap-4 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded font-label-technical text-[11px] text-on-surface-variant uppercase border border-surface-container-high/50 shadow-lg">
              <span>
                Air Pressure: <strong className="text-on-surface">1,013 hPa</strong>
              </span>
              <span className="w-1 h-1 rounded-full bg-outline" aria-hidden="true" />
              <span>
                Cell Ambient: <strong className="text-primary-container">19.4°C</strong>
              </span>
              <span className="w-1 h-1 rounded-full bg-outline" aria-hidden="true" />
              <span>
                Humidity: <strong className="text-on-surface">42%</strong>
              </span>
            </div>

            {/* Live Focal Callout in hero lower-left */}
            <div className="absolute bottom-24 left-6 lg:left-10 max-w-md hidden md:block">
              <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                // ARCHITECTURE &amp; TOLERANCE
              </span>
              <h2 className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                Industrial Grade Dyno &amp; Rigging Cell
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Calibrated to 0.01mm chassis tolerance specs with real-time wheel torque vector
                diagnostics.
              </p>
            </div>
          </div>

          {/* Bottom Technical Overlay Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-surface-container-low p-space-md lg:p-space-lg">
            {WORKSHOP_STATS.map(({ icon, title, subtitle }) => (
              <div
                key={title}
                className="flex items-center gap-space-sm px-space-md py-space-xs"
              >
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  {icon}
                </span>
                <div>
                  <div className="font-label-technical text-label-technical uppercase text-on-surface tracking-wider font-semibold">
                    {title}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    {subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
