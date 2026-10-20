import { useState } from "react";
import { Link } from "react-router-dom";

const FALLBACK_BUILD_IMAGE =
  "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80";

function BuildCard({ build, isSelected, onSelectBuild, onAddToCart }) {
  const [imgSrc, setImgSrc] = useState(build.image);

  // Normalise data: GALLERY_BUILDS and FEATURED_BUILD have slightly different schemas
  const dynoLine =
    build.telemetry?.dynoOutput ??   // FEATURED_BUILD style
    build.specLine ??                // GALLERY_BUILDS style
    "—";

  const aeroLine =
    build.telemetry?.aeroLoad ??
    `${build.numericDownforce ?? "—"} KG`;

  const badgeLabel =
    build.badge ?? build.region ?? "";

  const categoryLabel =
    build.categoryLabel ?? build.categoryPath ?? "";

  const packageTotal =
    build.packageTotal ??
    build.priceLine ??
    build.telemetry?.estValue ??
    "—";

  // highlights[] if present, otherwise split description into bullet points
  const highlights =
    build.highlights ??
    (build.description
      ? build.description.split(",").map((s) => s.trim()).filter(Boolean)
      : []);

  const handleExplore = () => {
    onSelectBuild(build);
    const element = document.getElementById("parts-breakdown");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <article
      className={`group relative flex flex-col rounded-xl bg-surface-container-low border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/40 ${
        isSelected
          ? "border-primary-container ring-1 ring-primary-container shadow-[0_0_24px_rgba(184,240,0,0.15)]"
          : "border-surface-container-high/60 hover:border-primary-container/40"
      }`}
    >
      {/* Top Header Tag */}
      <div className="px-space-md py-2 bg-surface-container/70 border-b border-surface-container-high/60 flex items-center justify-between text-[11px] font-label-technical">
        <span className="text-primary-container font-mono tracking-wider font-semibold">
          {build.buildCode}
        </span>
        {badgeLabel && (
          <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
            {badgeLabel}
          </span>
        )}
      </div>

      {/* Image Container with Hover Scale */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container-lowest">
        <img
          src={imgSrc}
          alt={build.alt || build.name}
          onError={() => setImgSrc(FALLBACK_BUILD_IMAGE)}
          className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Selected badge overlay */}
        {isSelected && (
          <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 bg-primary-container text-on-primary rounded-full shadow-md text-[10px] font-label-technical font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            <span>ACTIVE BUILD SHEET</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-space-md flex-1 flex flex-col justify-between gap-space-sm">
        <div>
          {categoryLabel && (
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">
              {categoryLabel}
            </span>
          )}
          <h3 className="font-headline-sm text-base uppercase text-on-surface font-bold tracking-tight group-hover:text-primary-container transition-colors line-clamp-1">
            {build.name}
          </h3>

          {/* Key Specs Pills */}
          <div className="grid grid-cols-2 gap-2 mt-3 p-2 bg-surface-container rounded-lg border border-surface-container-high/40">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary-container text-[16px]">speed</span>
              <span className="font-metric-price text-xs font-mono font-semibold text-on-surface truncate">
                {dynoLine.split("//")[0].trim()}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary-container text-[16px]">air</span>
              <span className="font-metric-price text-xs font-mono font-semibold text-on-surface truncate">
                {aeroLine.split("@")[0].trim()}
              </span>
            </div>
          </div>

          {/* Highlights / Description bullets */}
          {highlights.length > 0 && (
            <ul className="mt-3 space-y-1 font-body-sm text-xs text-on-surface-variant">
              {highlights.slice(0, 2).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                  <span className="text-primary-container font-mono text-[11px] shrink-0">▸</span>
                  <span className="truncate">{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="pt-space-sm border-t border-surface-container-high/60 mt-2 flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between">
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase">
              Total Package Est.
            </span>
            <span className="font-metric-price text-sm font-bold text-primary-container font-mono">
              {packageTotal}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExplore}
              className={`flex-1 py-2 px-3 rounded-lg font-label-technical text-label-technical uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                isSelected
                  ? "bg-primary-container text-on-primary shadow-[0_0_12px_rgba(184,240,0,0.3)]"
                  : "bg-surface-container-high text-on-surface hover:bg-primary-container hover:text-on-primary"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              <span>{isSelected ? "Inspecting" : "Explore Build"}</span>
            </button>

            <button
              type="button"
              onClick={() =>
                onAddToCart({
                  title: build.name,
                  price: packageTotal,
                  code: build.buildCode,
                })
              }
              title="Add this build's parts package to cart"
              className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60"
              aria-label={`Add ${build.name} package to cart`}
            >
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
            </button>

            <Link
              to="/customizer"
              title="Simulate in 3D Configurator"
              className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60"
              aria-label={`Configure ${build.name} in 3D`}
            >
              <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BuildGrid({
  builds,
  selectedBuildId,
  onSelectBuild,
  onAddToCart,
}) {
  if (!builds || builds.length === 0) {
    return (
      <section className="w-full bg-surface-container-lowest px-margin py-space-xl">
        <div className="max-w-7xl mx-auto rounded-2xl bg-surface-container-low border border-surface-container-high/60 p-space-xl text-center flex flex-col items-center justify-center gap-space-md">
          <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined text-[32px]">filter_alt_off</span>
          </div>
          <div className="max-w-md">
            <h3 className="font-headline-sm text-lg uppercase text-on-surface font-bold">
              No Matching Builds Found
            </h3>
            <p className="font-body-md text-body-sm text-on-surface-variant mt-1">
              We couldn&apos;t find any archive builds matching your specific filter or query. Try
              adjusting your search term or switching to &quot;All Builds&quot;.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-surface-container-lowest px-margin py-space-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-space-md">
          <div className="flex items-center gap-2">
            <span className="font-label-technical text-label-technical text-primary-container uppercase font-mono tracking-wider font-semibold">
              ARCHIVE REGISTRY
            </span>
            <span className="text-outline-variant font-mono">/</span>
            <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">
              {builds.length} CURATED SPECS
            </span>
          </div>
          <span className="font-label-technical text-[11px] text-on-surface-variant font-mono uppercase">
            CAD-Engineered • Dyno-Verified
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {builds.map((build) => (
            <BuildCard
              key={build.id}
              build={build}
              isSelected={selectedBuildId === build.id}
              onSelectBuild={onSelectBuild}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
