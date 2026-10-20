import { useState } from "react";
import { DYNO_DELIVERABLES } from "../../data/servicesData";

const DYNO_SPOTLIGHT_IMAGE =
  "https://lh3.googleusercontent.com/aida/AEtjO1X7lDDUHXGLyL8Rn9cF2fdhMadmWL8d3QJYY5NnMJ-ifx2un4Au45IO7FFF-hULzD6WfsQWgoaAMjkN_Yf75SrpVpp25YMhnOzlfQ5ibV75halpoW8R_Otvl9d-C7wUNSbEDvBlqZlY1nKO8Wsf2FTo-WBJ6mnP57ded_ZAQ0cWYA9NGCcyeqpiziPdh1DR38H96iCmG52eWY7GMv81Skv_FguGW0h-kWQcTotd6_jU72zhCLoVxRAI84hY";

export default function ServicesSpotlight({ onBookDyno }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="w-full px-margin py-space-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center bg-surface-container-low rounded-xl overflow-hidden p-space-lg lg:p-space-xl border border-surface-container-high/40 shadow-xl">
          {/* Left Side: Large Visual Showcase */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest border border-surface-container-high/30">
            <div className="relative h-[420px] lg:h-[500px] w-full">
              {imgError ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/40 gap-2">
                  <span className="material-symbols-outlined text-[64px]">speed</span>
                  <span className="font-label-technical text-body-sm uppercase">
                    AWD Dyno Cell Viewport
                  </span>
                </div>
              ) : (
                <img
                  src={DYNO_SPOTLIGHT_IMAGE}
                  alt="MODRIVE high-speed all-wheel-drive dyno cell calibration session"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
                  onError={() => setImgError(true)}
                  loading="lazy"
                />
              )}

              <div
                className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Technical schematic overlay badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded border border-surface-container-high/50">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                  <span className="font-label-technical text-label-technical uppercase text-on-surface tracking-wider">
                    Benchmark Lab // 4WD Dyno Cell
                  </span>
                </div>
                <span className="font-label-technical text-[10px] text-primary-container font-mono uppercase font-bold">
                  2,500 BHP Sync
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative & Deliverables Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high w-fit border border-surface-container-highest/40">
              <span className="material-symbols-outlined text-primary-container text-[16px]">
                tune
              </span>
              <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest font-semibold">
                Featured Workshop Specialty
              </span>
            </div>

            <h2 className="font-headline-md text-headline-md lg:font-headline-lg lg:text-headline-lg text-on-surface uppercase tracking-tight leading-snug">
              AWD Dyno Re-Mapping &amp; Powertrain Blueprinting
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Prior to altering a single byte of ECU code, our engineers execute comprehensive
              baseline diagnostic cycles. We continuously evaluate exhaust gas temperatures (EGT),
              wideband AFR, knock sensors, fuel rail pressures, and thermal saturation under
              simulated load to extract reliable, track-resilient power.
            </p>

            {/* Key Deliverables with Electric Lime Checkmarks */}
            <div className="space-y-space-sm pt-space-xs">
              {DYNO_DELIVERABLES.map((item) => (
                <div key={item} className="flex items-start gap-space-sm">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded bg-primary-container flex items-center justify-center shadow-lime-glow">
                    <span className="material-symbols-outlined text-on-primary-container text-[16px] font-bold">
                      check
                    </span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="pt-space-sm">
              <button
                type="button"
                onClick={onBookDyno}
                className="inline-flex items-center gap-space-sm bg-primary-container text-on-primary-container hover:bg-primary-fixed font-headline-sm text-body-md font-bold px-space-lg py-space-sm rounded transition-all shadow-[0_0_15px_rgba(184,240,0,0.3)] cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Schedule Dyno Run (Sample PKR 85,000)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
