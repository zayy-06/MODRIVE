import { useState } from "react";
import { Link } from "react-router-dom";

const ARCHETYPES = [
  {
    id: "street-performance",
    tag: "[ STREET SPEC // AGGRESSIVE DYNAMICS ]",
    title: "Street Performance",
    desc: "Balanced everyday usability meets heightened throttle response. Featuring 2-way adjustable coilovers, valved exhaust systems, and functional pre-preg carbon front splitters.",
    platform: "PLATFORM: BMW M4 G82",
    specTag: "CONCEPT SPEC // STAGE 2",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5wdgmLKIjp9dDfYdajKnofpErVhAq-K48CoTXy-dh5rfQosv0bWK3htXDFkEktIYWR5_zdyCp7f53old-Za_-obb-Uzpshx2rWM1P8bUp7n_brOm5S9p_vdpAR-2J5xAyUHfLm0Yjr994LMp-XKif9dvZiPW1BJLWcQs4hsjXSG5PQPusQaRojR-c0SK0IFMmtrdjsedyi5t5qMkVSdRx8cKN04c9ApCr79EzpQ3gmXR6xZQkCnaHg",
    alt: "Customized matte dark grey BMW M4 G82 street build concept",
  },
  {
    id: "track-focused",
    tag: "[ CIRCUIT SPEC // AERODYNAMIC DOWNFORCE ]",
    title: "Track-Focused",
    desc: "Engineered exclusively for high-speed stability and thermal cooling efficiency. Includes swan-neck active carbon wings, 380mm carbon-ceramic brakes, and track-tuned camber alignments.",
    platform: "PLATFORM: 911 GT3 RS",
    specTag: "CONCEPT SPEC // CIRCUIT",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-uHHPGFHMaKjYjXC5g-i7rYKEBHW052Va2geIBGDiTpRAX-uetV-flHd18-zvmWgLficOh-f_fh_FL0FVeeoYau9M-UqTVvhGvtjQH0pmZatm1xkmqxPUim7lOOSlp4_Vx6vxDtoz1qME0N7V9azq8pmznNhoycNzj6XZdBKsMwJWJrc3bXmKXEetti95QLQvOMjvqDYj0gVhy_woTwCKoUHkbWLRJ8iszVjh0HB8VjDlaT_rPwyC6g",
    alt: "Track-ready Porsche 911 GT3 RS in emerald green with carbon aero package",
  },
  {
    id: "individual-expression",
    tag: "[ BESPOKE COMMISSIONS // PERSONAL AESTHETIC ]",
    title: "Individual Expression",
    desc: "Custom liveries, bespoke carbon weaves, and tailored cabin ergonomics. A celebration of singular vision where standard assembly guidelines are reimagined from scratch.",
    platform: "PLATFORM: GT-R / BESPOKE",
    specTag: "1-OF-1 CONCEPT",
    img: "https://lh3.googleusercontent.com/aida/AEtjO1X7lDDUHXGLyL8Rn9cF2fdhMadmWL8d3QJYY5NnMJ-ifx2un4Au45IO7FFF-hULzD6WfsQWgoaAMjkN_Yf75SrpVpp25YMhnOzlfQ5ibV75halpoW8R_Otvl9d-C7wUNSbEDvBlqZlY1nKO8Wsf2FTo-WBJ6mnP57ded_ZAQ0cWYA9NGCcyeqpiziPdh1DR38H96iCmG52eWY7GMv81Skv_FguGW0h-kWQcTotd6_jU72zhCLoVxRAI84hY",
    alt: "Bespoke obsidian black supercar commission with custom widebody concept",
  },
];

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80";

function ArchetypeCard({ item }) {
  const [imgSrc, setImgSrc] = useState(item.img);

  return (
    <div className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container transition-all border border-surface-container-high/40 hover:border-primary-container/30">
      <div className="relative w-full h-80 overflow-hidden bg-surface-container">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={imgSrc}
          alt={item.alt}
          onError={() => setImgSrc(FALLBACK_IMG)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-90 pointer-events-none" />
        <div className="absolute top-4 left-4">
          <span className="px-space-sm py-1 rounded bg-surface-container-lowest/80 backdrop-blur-md font-label-technical text-[10px] text-tertiary font-bold uppercase tracking-wider border border-white/5">
            {item.tag}
          </span>
        </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
        <div>
          <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-tertiary">
            {item.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
            {item.desc}
          </p>
        </div>
        <div className="pt-space-md border-t border-surface-container-highest/60 flex items-center justify-between text-on-surface-variant font-label-technical text-label-technical">
          <span>{item.platform}</span>
          <span className="text-primary-container font-mono">{item.specTag}</span>
        </div>
      </div>
    </div>
  );
}

export default function AboutShowcase() {
  return (
    <section className="w-full bg-surface-container-lowest px-margin py-space-xl md:py-32 border-t border-surface-container-high/40">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md">
          <div>
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container font-bold block mb-space-xs">
              // PORTFOLIO ARCHETYPES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-bold text-tertiary tracking-tight">
              EVERY BUILD HAS A PURPOSE.
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 max-w-xl">
              Selected archetypes demonstrating balance between aggressive street dynamics, circuit aerodynamics,
              and bespoke personal aesthetics.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-space-xs font-label-technical text-label-technical uppercase tracking-widest text-primary-container hover:underline group shrink-0"
          >
            <span>EXPLORE THE COMPLETE GALLERY</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Bento Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {ARCHETYPES.map((item) => (
            <ArchetypeCard key={item.id} item={item} />
          ))}
        </div>

        {/* Tasteful Portfolio Disclaimer */}
        <div className="flex items-center gap-space-sm p-space-md bg-surface-container-low/60 rounded-lg border border-surface-container-high/40 text-on-surface-variant">
          <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0">info</span>
          <p className="font-label-technical text-[10px] uppercase tracking-wider">
            Concept Showcase: All vehicle archetypes and custom specifications shown above are illustrative portfolio concepts created for design demonstration.
          </p>
        </div>
      </div>
    </section>
  );
}
