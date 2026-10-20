import { useState } from "react";
import { Link } from "react-router-dom";
import { signatureBuilds } from "../../data/buildsData";

function BuildCard({ build }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group bg-surface-container-low rounded-xl overflow-hidden flex flex-col justify-between shadow-xl">
      {/* Image */}
      <div className="relative w-full h-64 bg-surface-container-lowest overflow-hidden">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-surface-container text-on-surface-variant/40">
            <span className="material-symbols-outlined text-[64px]">directions_car</span>
          </div>
        ) : (
          <img
            src={build.image}
            alt={build.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"
          aria-hidden="true"
        />
        {/* Build Number Badge */}
        <div className="absolute bottom-3 left-3 bg-surface-container-high/90 backdrop-blur-md px-2.5 py-1 rounded">
          <span className="font-label-technical text-[10px] uppercase font-bold text-primary-container tracking-wider">
            {build.buildNo}
          </span>
        </div>
      </div>

      {/* Build Info */}
      <div className="p-space-lg flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary-container transition-colors">
            {build.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            {build.description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-space-lg pt-space-md border-t border-surface-container-high flex items-center justify-between">
          <div>
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase block">
              Total Modifications
            </span>
            <span className="font-metric-price text-body-md font-bold text-primary-container">
              {build.totalPrice}
            </span>
          </div>
          <Link
            to="/customizer"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary-container rounded font-label-technical text-label-technical uppercase tracking-wider font-semibold transition-colors"
            aria-label={`Inspect ${build.title} in 3D Studio (coming Phase 4)`}
            title="3D Studio coming in Phase 4"
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              visibility
            </span>
            <span>Inspect in 3D</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function SignatureBuilds() {
  return (
    <section
      className="w-full py-space-xl px-margin bg-surface-container-lowest"
      aria-labelledby="builds-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ──────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-technical text-label-technical uppercase text-primary-container tracking-widest font-semibold">
              // CURATED GARAGE ARCHIVE
            </span>
            <h2
              id="builds-heading"
              className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-1"
            >
              MODRIVE Signature{" "}
              <span className="text-primary-container">Builds</span>
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-space-xs font-label-technical text-label-technical uppercase tracking-wider text-on-surface hover:text-primary-container transition-colors"
            aria-label="View all 48 completed projects in the gallery"
          >
            <span>View All Gallery (48 Completed Projects)</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* ── 3 Build Cards ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {signatureBuilds.map((build) => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>
      </div>
    </section>
  );
}
