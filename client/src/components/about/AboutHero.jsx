import { Link } from "react-router-dom";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida/AEtjO1VUf9JTUqjZBqlitua0GCojRKC_drvhAhhsf62marxtTeTa8jkr2iZDQcgxrL7fpHq70d1Y9VtQqEBubkWuvxIrmieiZuXSlWmziUcRFUIoYsANZLXgAq2pCHPAvtgw40YisSwwRb62qtQ-zRbhVFRJRhmtIFPl5bN2_HXkWeVYUw-41u5QzQZqJqsBu0DLwGfHvtALG0IXuapaLRUoZlAKm1Yyz-3oYdLV5UU9MJJfJLFEw1C8J5LvCHI";

const FALLBACK_BG =
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80";

export default function AboutHero() {
  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-surface-container-lowest" aria-label="About MODRIVE Hero">
      {/* Full-bleed Background Image with Scrim Gradients */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-45 mix-blend-luminosity scale-105 transform transition-transform duration-1000"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
        role="img"
        aria-label="MODRIVE Performance Engineering Laboratory"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-container/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full px-margin pt-36 pb-28 md:pt-44 md:pb-36 flex flex-col justify-between min-h-[92vh]">
        {/* Top Meta Track */}
        <div className="flex flex-wrap items-center justify-between gap-space-md pb-space-lg">
          <div className="inline-flex items-center gap-space-sm px-space-md py-1 rounded-full bg-surface-container-high/70 backdrop-blur-md border border-white/5">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_rgba(184,240,0,0.8)]" />
            <span className="font-label-technical text-label-technical tracking-widest uppercase text-primary">
              THE STORY BEHIND MODRIVE
            </span>
          </div>
          <div className="hidden md:flex items-center gap-space-md font-label-technical text-label-technical text-on-surface-variant">
            <span className="px-space-sm py-0.5 rounded bg-surface-container/60">[ PHILOSOPHY &amp; CRAFT ]</span>
            <span className="px-space-sm py-0.5 rounded bg-surface-container/60">[ SKUNKWORKS ARCHIVE ]</span>
            <span className="px-space-sm py-0.5 rounded bg-surface-container/60 text-primary-container">[ CONCEPT STUDIO ]</span>
          </div>
        </div>

        {/* Centerpiece Typography & Action */}
        <div className="max-w-5xl my-auto py-space-xl">
          <div className="inline-block mb-space-sm font-label-technical text-label-technical uppercase tracking-widest text-primary-container font-bold">
            // ARCHITECTURAL AUTOMOTIVE FITMENT
          </div>
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl tracking-tight uppercase leading-[0.9] text-tertiary font-extrabold mb-space-lg">
            BUILT ON PASSION.<br />
            DEFINED BY <span className="text-primary-container drop-shadow-[0_0_24px_rgba(184,240,0,0.35)]">PRECISION.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-space-xl">
            We believe a car should be more than transportation. It should be a reflection of its driver,
            engineered with purpose and built with attention to every detail.
          </p>

          <div className="flex flex-wrap items-center gap-space-md">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-space-xl py-3.5 rounded bg-primary-container text-on-primary font-body-md text-body-sm font-bold tracking-tight hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(184,240,0,0.3)]"
            >
              <span className="material-symbols-outlined text-[18px] mr-2">precision_manufacturing</span>
              Explore Our Services
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-space-xl py-3.5 rounded bg-surface-container-high/80 hover:bg-surface-container-highest backdrop-blur-md text-on-surface font-body-md text-body-sm font-semibold tracking-tight transition-all border border-surface-container-highest/60"
            >
              <span className="material-symbols-outlined text-[18px] mr-2">view_in_ar</span>
              View Our Builds
            </Link>
          </div>
        </div>

        {/* Technical Showcase Bottom Bar */}
        <div className="pt-space-lg flex flex-wrap items-center justify-between gap-space-md border-t border-surface-container-highest/40">
          <div className="flex flex-wrap items-center gap-space-xl text-on-surface-variant font-label-technical text-label-technical">
            <div>
              <span className="text-on-surface block text-headline-sm font-headline-sm">
                01<span className="text-primary-container font-normal text-body-sm"> / STUDY</span>
              </span>
              <span className="uppercase tracking-widest text-[10px]">Aero &amp; Chassis Harmony</span>
            </div>
            <div>
              <span className="text-on-surface block text-headline-sm font-headline-sm">
                02<span className="text-primary-container font-normal text-body-sm"> / CRAFT</span>
              </span>
              <span className="uppercase tracking-widest text-[10px]">Bespoke Carbon &amp; Finishes</span>
            </div>
            <div>
              <span className="text-on-surface block text-headline-sm font-headline-sm">
                03<span className="text-primary-container font-normal text-body-sm"> / MATRIX</span>
              </span>
              <span className="uppercase tracking-widest text-[10px]">Modular Digital Fitment</span>
            </div>
          </div>
          <div className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant flex items-center gap-space-xs">
            <span>CONCEPT SHOWCASE • ZERO COMPROMISE</span>
            <span className="material-symbols-outlined text-primary-container text-[16px]">arrow_forward</span>
          </div>
        </div>
      </div>
    </section>
  );
}
