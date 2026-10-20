import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import StudioPage from "./pages/StudioPage";
import AboutPage from "./pages/AboutPage";
import ShopPlaceholder from "./pages/ShopPlaceholder";

/**
 * App — top-level router.
 *
 * Phase 1–6 routes:
 *   /            → Home page        (Phase 1)
 *   /shop        → Shop page        (Phase 2)
 *   /services    → Services page    (Phase 3)
 *   /gallery     → Build Gallery    (Phase 4)
 *   /customizer  → 3D Studio        (Phase 5)
 *   /about       → About Us         (Phase 6)
 *
 * SiteHeader and SiteFooter are rendered on every route.
 */
export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/customizer" element={<StudioPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Catch-all */}
          <Route path="*" element={<ShopPlaceholder label="Page Not Found" phase={null} />} />
        </Routes>
      </main>
      <SiteFooter />
    </BrowserRouter>
  );
}
