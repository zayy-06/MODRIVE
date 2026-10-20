import { useState, useMemo, useEffect } from "react";
import GalleryIntro from "../components/gallery/GalleryIntro";
import GalleryFilterBar from "../components/gallery/GalleryFilterBar";
import FeaturedBuild from "../components/gallery/FeaturedBuild";
import BuildGrid from "../components/gallery/BuildGrid";
import BuildPagination from "../components/gallery/BuildPagination";
import PartsBreakdown from "../components/gallery/PartsBreakdown";
import GalleryCTA from "../components/gallery/GalleryCTA";
import { FEATURED_BUILD, GALLERY_BUILDS } from "../data/galleryData";

const PAGE_SIZE = 6;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBuild, setSelectedBuild] = useState(FEATURED_BUILD);
  const [activePartsTab, setActivePartsTab] = useState("exterior-aero");

  // Cart / Notification feedback toast
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    subtext: "",
  });

  // Reset pagination on filter or search change
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const handleSelectBuild = (build) => {
    setSelectedBuild(build);
  };

  const handleAddToCart = (item) => {
    setToast({
      visible: true,
      message: `Added to Cart: ${item.title}`,
      subtext: `${item.price} (Illustrative Demo Item)`,
    });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  // Filter & Sort builds
  const filteredBuilds = useMemo(() => {
    let list = [...GALLERY_BUILDS];

    // Category filter
    if (selectedCategory !== "all") {
      list = list.filter(
        (b) => Array.isArray(b.categories) && b.categories.includes(selectedCategory)
      );
    }

    // Keyword Search filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((b) => {
        const text = [
          b.name,
          b.shortName,
          b.buildCode,
          b.badge,
          b.categoryLabel,
          ...(b.highlights || []),
          b.telemetry?.dynoOutput,
          b.telemetry?.aeroLoad,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return text.includes(q);
      });
    }


    // Sort order — handles both FEATURED_BUILD (telemetry.numericX) and GALLERY_BUILDS (top-level numericX)
    const getNum = (b, key) => b.telemetry?.[key] ?? b[key] ?? 0;
    switch (sortBy) {
      case "price-desc":
        list.sort((a, b) => getNum(b, "numericPrice") - getNum(a, "numericPrice"));
        break;
      case "hp-desc":
        list.sort((a, b) => getNum(b, "numericHp") - getNum(a, "numericHp"));
        break;
      case "downforce-desc":
        list.sort((a, b) => getNum(b, "numericDownforce") - getNum(a, "numericDownforce"));
        break;
      case "recent":
      default:
        // Retain original curated order
        break;
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  // Pagination calculation
  const totalItems = filteredBuilds.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  const startIndex = totalItems > 0 ? (currentPage - 1) * PAGE_SIZE + 1 : 0;
  const endIndex = Math.min(currentPage * PAGE_SIZE, totalItems);

  const paginatedBuilds = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredBuilds.slice(start, start + PAGE_SIZE);
  }, [filteredBuilds, currentPage]);

  return (
    <div className="w-full flex flex-col bg-surface-container-lowest">
      {/* 1. Introductory Hero & Benchmarks */}
      <GalleryIntro />

      {/* 2. Sticky Filtering Bar */}
      <GalleryFilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        totalMatching={totalItems}
      />

      {/* 3. Featured Flagship Porsche 911 GT3 RS */}
      <FeaturedBuild
        onSelectBuild={handleSelectBuild}
        onAddToCart={handleAddToCart}
      />

      {/* 4. Curated Registry Grid */}
      <BuildGrid
        builds={paginatedBuilds}
        selectedBuildId={selectedBuild?.id}
        onSelectBuild={handleSelectBuild}
        onAddToCart={handleAddToCart}
      />

      {/* 5. Pagination Controls */}
      <BuildPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={totalItems}
      />

      {/* 6. Technical BOM & Chassis Telemetry Panel */}
      <PartsBreakdown
        build={selectedBuild}
        activeTab={activePartsTab}
        onTabChange={setActivePartsTab}
        onAddToCart={handleAddToCart}
      />

      {/* 7. Dual Studio & Shop CTAs */}
      <GalleryCTA />

      {/* Cart Feedback Toast */}
      {toast.visible && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-surface-container-high text-on-surface rounded-xl border border-primary-container shadow-[0_8px_32px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-4 duration-200 max-w-md"
        >
          <span className="material-symbols-outlined text-primary-container text-[22px] shrink-0">
            check_circle
          </span>
          <div className="flex flex-col text-xs font-body-sm">
            <span className="font-semibold text-on-surface">{toast.message}</span>
            <span className="text-on-surface-variant font-mono">{toast.subtext}</span>
          </div>
          <button
            type="button"
            onClick={() => setToast((prev) => ({ ...prev, visible: false }))}
            className="text-on-surface-variant hover:text-on-surface text-base ml-2 shrink-0"
            aria-label="Dismiss notification"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </aside>
      )}
    </div>
  );
}
