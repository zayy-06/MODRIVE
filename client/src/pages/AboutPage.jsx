import AboutHero from "../components/about/AboutHero";
import AboutPhilosophy from "../components/about/AboutPhilosophy";
import AboutWorkshop from "../components/about/AboutWorkshop";
import AboutProcess from "../components/about/AboutProcess";
import AboutShowcase from "../components/about/AboutShowcase";
import AboutValues from "../components/about/AboutValues";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full text-on-surface bg-surface-container-lowest">
      {/* 1. CINEMATIC HERO */}
      <AboutHero />

      {/* 2. PHILOSOPHY & PRINCIPLES */}
      <AboutPhilosophy />

      {/* 3. WORKSHOP EXPERIENCE */}
      <AboutWorkshop />

      {/* 4. FOUR-STEP BUILD PROCESS */}
      <AboutProcess />

      {/* 5. FEATURED BUILD SHOWCASE / ARCHETYPES */}
      <AboutShowcase />

      {/* 6. BRAND VALUES & TENETS */}
      <AboutValues />

      {/* 7. CLOSING CTA */}
      <AboutCTA />
    </div>
  );
}
