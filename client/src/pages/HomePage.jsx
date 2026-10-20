import HeroSection from "../components/home/HeroSection";
import StudioSpotlight from "../components/home/StudioSpotlight";
import PerformanceCategories from "../components/home/PerformanceCategories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import SignatureBuilds from "../components/home/SignatureBuilds";
import WorkshopServices from "../components/home/WorkshopServices";
import TrustMetrics from "../components/home/TrustMetrics";

/**
 * HomePage — Phase 1 complete implementation.
 * Renders all 7 reference sections in order.
 */
export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1: Cinematic Hero + Vehicle Selector */}
      <HeroSection />

      {/* Section 2: 3D Studio Feature Spotlight */}
      <StudioSpotlight />

      {/* Section 3: Engineered Components Category Grid */}
      <PerformanceCategories />

      {/* Section 4: Featured Products — Live Inventory */}
      <FeaturedProducts />

      {/* Section 5: Signature Builds — Curated Garage Archive */}
      <SignatureBuilds />

      {/* Section 6: Workshop Services & Turnkey Installs */}
      <WorkshopServices />

      {/* Section 7: Engineering Trust & Quality Metrics */}
      <TrustMetrics />
    </div>
  );
}
