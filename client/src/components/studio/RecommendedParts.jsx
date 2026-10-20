import { useState } from "react";
import { Link } from "react-router-dom";
import { RECOMMENDED_PARTS } from "../../data/studioData";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80";

function PartCard({ part }) {
  const [imgSrc, setImgSrc] = useState(part.image);

  return (
    <article className="group flex flex-col rounded-2xl bg-surface-container-low border border-surface-container-high/60 overflow-hidden hover:border-primary-container/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/40">
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden bg-surface-container-lowest">
        <img
          src={imgSrc}
          alt={part.name}
          onError={() => setImgSrc(FALLBACK_IMG)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/60 to-transparent pointer-events-none" aria-hidden="true" />
        <span className="absolute top-2 left-2 font-label-technical text-[10px] text-on-surface bg-surface/80 backdrop-blur-sm px-2 py-0.5 rounded-full uppercase border border-surface-container-high/60">
          {part.badge}
        </span>
        <div className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-surface-container/80 backdrop-blur-sm flex items-center justify-center">
          <span className="material-symbols-outlined text-primary-container text-[18px]">{part.icon}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-space-md flex flex-col gap-space-sm flex-1">
        <div>
          <span className="font-label-technical text-[10px] text-primary-container uppercase tracking-widest font-semibold">{part.category}</span>
          <h3 className="font-headline-sm text-base uppercase text-on-surface font-bold mt-0.5 group-hover:text-primary-container transition-colors">
            {part.name}
          </h3>
          <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed line-clamp-2">
            {part.description}
          </p>
        </div>

        <div className="mt-auto pt-space-sm border-t border-surface-container-high/60 flex items-center justify-between gap-2">
          <div>
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase block">Illustrative Est.</span>
            <span className="font-metric-price text-sm font-bold text-primary-container font-mono">{part.price}</span>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-technical text-[11px] font-semibold uppercase tracking-wider hover:bg-primary-container hover:text-on-primary transition-colors border border-surface-container-highest/60 cursor-pointer"
          >
            <span>Browse Shop</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function RecommendedParts() {
  return (
    <section className="w-full bg-surface-container-lowest px-margin py-space-xl border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-space-md">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-[18px]">shopping_bag</span>
              <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest font-semibold">STUDIO-MATCHED COMPONENTS</span>
            </div>
            <h2 className="font-headline-lg text-xl sm:text-headline-lg uppercase text-on-surface font-bold tracking-tight">
              RECOMMENDED PARTS
            </h2>
            <p className="font-body-md text-body-sm text-on-surface-variant max-w-lg">
              Compatible with your selected platform — browse the catalogue to add real upgrades to your order. All items are illustrative demo listings.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-technical text-label-technical font-semibold uppercase tracking-wider hover:bg-surface-bright hover:text-primary-container transition-colors border border-surface-container-highest/60"
          >
            <span>Full Catalogue</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {RECOMMENDED_PARTS.map((part) => (
            <PartCard key={part.id} part={part} />
          ))}
        </div>

        {/* Demo Disclaimer */}
        <div className="flex items-center gap-2 p-space-md bg-surface-container-low/60 rounded-xl border border-surface-container-high/40">
          <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0">info</span>
          <p className="font-label-technical text-[10px] text-on-surface-variant uppercase">
            All product images, descriptions, compatibility labels, and PKR prices shown above are illustrative demo data for portfolio purposes only.
          </p>
        </div>
      </div>
    </section>
  );
}
