import { Link } from "react-router-dom";

const CTA_BG =
  "https://lh3.googleusercontent.com/aida/AEtjO1VUf9JTUqjZBqlitua0GCojRKC_drvhAhhsf62marxtTeTa8jkr2iZDQcgxrL7fpHq70d1Y9VtQqEBubkWuvxIrmieiZuXSlWmziUcRFUIoYsANZLXgAq2pCHPAvtgw40YisSwwRb62qtQ-zRbhVFRJRhmtIFPl5bN2_HXkWeVYUw-41u5QzQZqJqsBu0DLwGfHvtALG0IXuapaLRUoZlAKm1Yyz-3oYdLV5UU9MJJfJLFEw1C8J5LvCHI";

export default function AboutCTA() {
  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden py-24 md:py-36 border-t border-surface-container-high/40">
      {/* Ambient Workshop Texture Backdrop */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity filter blur-sm scale-105 pointer-events-none"
        style={{ backgroundImage: `url('${CTA_BG}')` }}
        role="img"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-surface-container-low via-surface-container-lowest/95 to-surface-container-lowest pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-margin text-center flex flex-col items-center gap-space-md">
        <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded bg-surface-container-high/80 text-primary-container font-label-technical text-label-technical uppercase tracking-widest font-bold border border-white/5">
          <span className="material-symbols-outlined text-[14px]">tune</span>
          <span>INITIALIZE YOUR SPEC</span>
        </div>

        <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg uppercase font-extrabold text-tertiary tracking-tight">
          YOUR VISION. <span className="text-primary-container">YOUR BUILD.</span>
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
          Have an idea for your next project? Start planning a build that feels uniquely yours with our interactive
          studio customizer and curated performance parts catalog.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-lg">
          <Link
            to="/customizer"
            className="inline-flex items-center justify-center px-space-xl py-3.5 rounded bg-primary-container text-on-primary font-body-md text-body-sm font-bold tracking-tight hover:brightness-110 active:scale-95 transition-all shadow-[0_0_24px_rgba(184,240,0,0.35)]"
          >
            <span className="material-symbols-outlined text-[18px] mr-2">view_in_ar</span>
            Start Your Build
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-space-xl py-3.5 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-md text-body-sm font-semibold tracking-tight transition-all border border-surface-container-highest/60"
          >
            <span className="material-symbols-outlined text-[18px] mr-2">storefront</span>
            Browse the Shop
          </Link>
        </div>

        <div className="pt-space-xl flex flex-wrap items-center justify-center gap-space-lg text-on-surface-variant font-label-technical text-label-technical uppercase tracking-widest text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
            INTERACTIVE STUDIO CONFIG
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
            CURATED FITMENT MATRIX
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
            BESPOKE ARCHITECTURE
          </span>
        </div>
      </div>
    </section>
  );
}
