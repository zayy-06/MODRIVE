import { useState } from "react";

const WORKSHOP_IMG =
  "https://lh3.googleusercontent.com/aida/AEtjO1VUf9JTUqjZBqlitua0GCojRKC_drvhAhhsf62marxtTeTa8jkr2iZDQcgxrL7fpHq70d1Y9VtQqEBubkWuvxIrmieiZuXSlWmziUcRFUIoYsANZLXgAq2pCHPAvtgw40YisSwwRb62qtQ-zRbhVFRJRhmtIFPl5bN2_HXkWeVYUw-41u5QzQZqJqsBu0DLwGfHvtALG0IXuapaLRUoZlAKm1Yyz-3oYdLV5UU9MJJfJLFEw1C8J5LvCHI";

const MACRO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAmWnLqXTponmadYdwacLIe2NKUPumAUbeuA73T6NTf8q6ch_6ApG58Rm6BZ3XtRC0HPcrMYkTSDDtn1xbEO0uFQ3dQ_3efirF2Y0FJekIwwKVzhpl9FuR3QWgplzR82pY25nnicdSaI5_aA2QYL33Nj5j8UaLud25C4ax7AOUatm-jGVylj0SEM12B4zJAPU29nt1l4ZQmRx-B12Nt6iQqAurxAWYrpCsAL9MgdFPQ2PwtXD_xthCyHg";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80";

const WORKSHOP_POINTS = [
  {
    title: "Thoughtful Build Planning",
    desc: "Digital pre-fitment assessment and geometry planning before any component assembly commences.",
  },
  {
    title: "Quality-Focused Installation",
    desc: "Precision component assembly adhering to manufacturer torque specifications and bespoke fitment standards.",
  },
  {
    title: "Careful Final Inspection",
    desc: "Comprehensive suspension geometry check, multi-point shakedown review, and surface detailing.",
  },
];

export default function AboutWorkshop() {
  const [mainImg, setMainImg] = useState(WORKSHOP_IMG);
  const [detailImg, setDetailImg] = useState(MACRO_IMG);

  return (
    <section className="w-full bg-surface-container-low px-margin py-space-xl md:py-32 overflow-hidden border-t border-surface-container-high/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Left Narrative Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded bg-surface-container-high w-fit border border-surface-container-highest/60">
            <span className="material-symbols-outlined text-primary-container text-[14px]">build_circle</span>
            <span className="font-label-technical text-[11px] tracking-widest uppercase text-on-surface font-bold">
              THE MODRIVE STANDARD
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-bold text-tertiary tracking-tight leading-none">
            WHERE CRAFT MEETS ENGINEERING.
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our approach combines careful planning, considered component selection, and attention to the details
            that make a build feel complete. From custom suspension setups to full carbon aerodynamic integration,
            each concept project represents a unified vision of performance and style.
          </p>

          {/* Technical Check Points */}
          <div className="flex flex-col gap-space-md pt-space-xs">
            {WORKSHOP_POINTS.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-space-md p-space-md rounded bg-surface-container border border-surface-container-high/40">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-container/20 text-primary-container shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </span>
                <div>
                  <h3 className="font-headline-sm text-body-md font-bold text-on-surface uppercase tracking-tight">
                    {pt.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Pill Bar */}
          <div className="pt-space-xs flex flex-wrap gap-2 font-label-technical text-label-technical uppercase">
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant border border-surface-container-highest/40">
              Aerodynamic Fitment
            </span>
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant border border-surface-container-highest/40">
              Powertrain Integration
            </span>
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant border border-surface-container-highest/40">
              Chassis Geometry
            </span>
          </div>
        </div>

        {/* Right Visual Composition (7 cols) */}
        <div className="lg:col-span-7 relative flex flex-col items-end">
          {/* Main Workshop Image */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high border border-surface-container-highest/40">
            <img
              alt="MODRIVE Performance Tuning Laboratory"
              className="w-full h-[460px] object-cover filter brightness-95 contrast-105"
              src={mainImg}
              onError={() => setMainImg(FALLBACK_IMG)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-on-surface font-label-technical text-label-technical uppercase tracking-widest backdrop-blur-md bg-surface-container/70 p-space-md rounded-lg border border-surface-container-high/60">
              <div className="flex items-center gap-space-sm">
                <span className="w-2 h-2 rounded-full bg-primary-container" />
                <span>Skunkworks Bay 04 • Calibration</span>
              </div>
              <span className="text-primary-container font-mono">STATUS: CONCEPT STUDIO</span>
            </div>
          </div>

          {/* Overlapping Macro Craftsmanship Inset Image */}
          <div className="relative -mt-20 mr-4 md:mr-10 z-20 w-3/4 md:w-3/5 rounded-xl overflow-hidden shadow-2xl bg-surface-container-highest border border-surface-container-high/80">
            <img
              alt="Close-up precision carbon fiber fitment on sports vehicle"
              className="w-full h-56 object-cover"
              src={detailImg}
              onError={() => setDetailImg(FALLBACK_IMG)}
              loading="lazy"
            />
            <div className="absolute top-3 left-3 px-space-sm py-1 rounded bg-surface-container-lowest/90 font-label-technical text-[10px] uppercase tracking-wider text-primary-container flex items-center gap-1.5 border border-primary-container/20">
              <span className="material-symbols-outlined text-[13px]">handyman</span>
              <span>DRY CARBON INSTALL // APEX FIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
