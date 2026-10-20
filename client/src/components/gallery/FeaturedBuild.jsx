import { useState } from "react";
import { Link } from "react-router-dom";
import { FEATURED_BUILD } from "../../data/galleryData";

const FALLBACK_HERO_IMAGE =
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80";

export default function FeaturedBuild({ onSelectBuild, onAddToCart }) {
  const [imgSrc, setImgSrc] = useState(FEATURED_BUILD.image);

  const handleInspectClick = () => {
    onSelectBuild(FEATURED_BUILD);
    const element = document.getElementById("parts-breakdown");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-surface-container-lowest px-margin py-space-md">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl bg-surface-container-low border border-surface-container-high/60 overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary-container/40">
          {/* Top Banner Tag */}
          <div className="px-space-md sm:px-space-lg py-2.5 bg-surface-container border-b border-surface-container-high flex flex-wrap items-center justify-between gap-space-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="font-label-technical text-label-technical text-primary-container font-mono tracking-widest font-semibold">
                {FEATURED_BUILD.buildCode}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-technical text-[11px] text-on-surface-variant bg-surface-container-high px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {FEATURED_BUILD.categoryLabel}
              </span>
              <span className="font-label-technical text-[11px] text-primary-container bg-primary-container/10 border border-primary-container/20 px-2.5 py-0.5 rounded-full uppercase font-semibold tracking-wider">
                {FEATURED_BUILD.badge}
              </span>
            </div>
          </div>

          {/* Hero Image with Dynamic Overlay */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] w-full overflow-hidden bg-surface-container-lowest">
            <img
              src={imgSrc}
              alt={FEATURED_BUILD.alt}
              onError={() => setImgSrc(FALLBACK_HERO_IMAGE)}
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Gradients */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-surface-container-lowest/40 pointer-events-none"
              aria-hidden="true"
            />

            {/* Quick Title overlay inside hero on desktop */}
            <div className="absolute top-space-md left-space-md sm:left-space-lg max-w-xl pointer-events-none">
              <span className="font-label-technical text-[10px] sm:text-xs text-primary-container uppercase font-mono tracking-widest bg-surface/80 backdrop-blur-sm px-2.5 py-1 rounded inline-block mb-1.5 border border-primary-container/20">
                PORSCHE MOTORSPORT ARCHIVE // 992 GT3 RS
              </span>
              <h2 className="font-headline-lg text-lg sm:text-headline-lg uppercase text-on-surface drop-shadow-md font-bold tracking-tight">
                {FEATURED_BUILD.name}
              </h2>
            </div>
          </div>

          {/* Telemetry Strip - 4 Data Pillars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-surface-container-high/60 border-t border-b border-surface-container-high/60 bg-surface-container/60 backdrop-blur-sm">
            <div className="p-space-md sm:p-space-lg flex flex-col gap-1">
              <span className="font-label-technical text-[10px] sm:text-label-technical text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary-container text-[16px]">air</span>
                Aero Downforce Load
              </span>
              <span className="font-metric-price text-base sm:text-metric-price font-bold text-on-surface font-mono">
                {FEATURED_BUILD.telemetry.aeroLoad}
              </span>
              <span className="font-label-technical text-[10px] text-on-surface-variant/70">
                Carbon active wing at max angle
              </span>
            </div>

            <div className="p-space-md sm:p-space-lg flex flex-col gap-1">
              <span className="font-label-technical text-[10px] sm:text-label-technical text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary-container text-[16px]">scale</span>
                Lightweight Curb Weight
              </span>
              <span className="font-metric-price text-base sm:text-metric-price font-bold text-on-surface font-mono">
                {FEATURED_BUILD.telemetry.curbWeight}
              </span>
              <span className="font-label-technical text-[10px] text-on-surface-variant/70">
                Autoclaved dry carbon body panels
              </span>
            </div>

            <div className="p-space-md sm:p-space-lg flex flex-col gap-1">
              <span className="font-label-technical text-[10px] sm:text-label-technical text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary-container text-[16px]">speed</span>
                Dyno Calibrated Power
              </span>
              <span className="font-metric-price text-base sm:text-metric-price font-bold text-primary-container font-mono">
                {FEATURED_BUILD.telemetry.dynoOutput}
              </span>
              <span className="font-label-technical text-[10px] text-on-surface-variant/70">
                AWD Dynapack verified benchmark
              </span>
            </div>

            <div className="p-space-md sm:p-space-lg flex flex-col gap-1 bg-surface-container-high/30">
              <span className="font-label-technical text-[10px] sm:text-label-technical text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary-container text-[16px]">payments</span>
                Est. Investment (Demo)
              </span>
              <span className="font-metric-price text-base sm:text-metric-price font-bold text-primary-container font-mono">
                {FEATURED_BUILD.telemetry.estValue}
              </span>
              <span className="font-label-technical text-[10px] text-on-surface-variant/70">
                Illustrative portfolio demo pricing
              </span>
            </div>
          </div>

          {/* Highlights & CTAs */}
          <div className="p-space-md sm:p-space-lg flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-lg">
            {/* Installed Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 flex-1">
              {FEATURED_BUILD.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleInspectClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-primary-container text-on-primary font-label-technical text-label-technical font-bold uppercase tracking-wider hover:bg-primary-fixed transition-colors shadow-[0_0_20px_rgba(184,240,0,0.3)] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">build_circle</span>
                <span>Inspect Build Sheet</span>
              </button>

              <Link
                to="/customizer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-surface-container-high text-on-surface font-label-technical text-label-technical font-semibold uppercase tracking-wider hover:bg-surface-bright transition-colors border border-surface-container-highest/60"
              >
                <span className="material-symbols-outlined text-[18px] text-primary-container">
                  view_in_ar
                </span>
                <span>Launch in 3D</span>
              </Link>

              <button
                type="button"
                onClick={() =>
                  onAddToCart({
                    title: FEATURED_BUILD.name,
                    price: FEATURED_BUILD.packageTotal,
                    code: FEATURED_BUILD.buildCode,
                  })
                }
                title="Add complete build parts package to cart"
                className="inline-flex items-center justify-center p-3 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary-container hover:bg-surface-container-high transition-colors border border-surface-container-high"
                aria-label="Add full build package to cart"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
