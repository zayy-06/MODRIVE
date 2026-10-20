import { useState, useMemo, useEffect } from "react";
import ShopHero from "../components/shop/ShopHero";
import CategorySelector from "../components/shop/CategorySelector";
import ShopToolbar from "../components/shop/ShopToolbar";
import ShopFilters from "../components/shop/ShopFilters";
import ProductGrid from "../components/shop/ProductGrid";
import Pagination from "../components/shop/Pagination";
import ShopTrust from "../components/shop/ShopTrust";
import ProductDetailModal from "../components/shop/ProductDetailModal";
import FeedbackToast from "../components/shop/FeedbackToast";
import { ALL_PRODUCTS, PRODUCTS_PER_PAGE, applyFilters } from "../data/shopProducts";

export default function ShopPage() {
  // ── Filters State ──────────────────────────────────────────────────────────
  const [filters, setFilters] = useState({
    category: "all",
    origin: "all",
    brands: [],
    priceRange: null,
    availability: "all",
    search: "",
    sort: "featured",
  });

  // ── Vehicle Fitment Lock State ─────────────────────────────────────────────
  const [lockedVehicle, setLockedVehicle] = useState(null);

  // ── Display / UI State ─────────────────────────────────────────────────────
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'compact' | 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ── User Interaction Mock States ───────────────────────────────────────────
  const [wishlistIds, setWishlistIds] = useState(["bbs-fir-992"]);
  const [toast, setToast] = useState(null);

  // ── Filtered & Sorted Products ─────────────────────────────────────────────
  const filteredProducts = useMemo(() => {
    let result = applyFilters(ALL_PRODUCTS, filters);

    // If a vehicle is locked, filter items matching make or model keywords
    if (lockedVehicle) {
      const makeLower = lockedVehicle.makeLabel.toLowerCase();
      const modelLower = lockedVehicle.modelLabel.toLowerCase();
      result = result.filter((p) => {
        const fitment = p.fitment.toLowerCase();
        return (
          fitment.includes(makeLower) ||
          fitment.includes(modelLower) ||
          fitment.includes("universal")
        );
      });
    }

    return result;
  }, [filters, lockedVehicle]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, lockedVehicle]);

  // ── Pagination Math ────────────────────────────────────────────────────────
  const totalCount = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / PRODUCTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const displayRangeStart = totalCount === 0 ? 0 : startIndex + 1;
  const displayRangeEnd = Math.min(startIndex + PRODUCTS_PER_PAGE, totalCount);

  // ── Handlers ───────────────────────────────────────────────────────────────
  function handleUpdateFilter(key, value) {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleClearFilters() {
    setFilters({
      category: "all",
      origin: "all",
      brands: [],
      priceRange: null,
      availability: "all",
      search: "",
      sort: "featured",
    });
    setLockedVehicle(null);
  }

  function handleToggleWishlist(product) {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      const next = exists ? prev.filter((id) => id !== product.id) : [...prev, product.id];

      setToast({
        message: exists
          ? `Removed "${product.name.slice(0, 32)}..." from Wishlist`
          : `Saved "${product.name.slice(0, 32)}..." to Saved Builds`,
        type: "info",
      });

      return next;
    });
  }

  function handleAddToCart(product) {
    setToast({
      message: `Added to Build Cart: ${product.name.slice(0, 36)}... (${product.priceLabel})`,
      type: "success",
    });
  }

  function handleLockVehicle(vehicleInfo) {
    setLockedVehicle(vehicleInfo);
    setToast({
      message: `Fitment locked for ${vehicleInfo.makeLabel} ${vehicleInfo.modelLabel}. Catalog filtered.`,
      type: "success",
    });
  }

  function handleUnlockVehicle() {
    setLockedVehicle(null);
    setToast({
      message: "Vehicle fitment lock removed. Showing all vehicle parts.",
      type: "info",
    });
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Compact Shop Hero Banner */}
      <ShopHero
        totalProductsCount={284}
        inStockCount={ALL_PRODUCTS.filter((p) => p.stock === "in-stock").length}
      />

      {/* 2. Horizontal Category Selector Bar */}
      <CategorySelector
        activeCategory={filters.category}
        onSelectCategory={(catId) => handleUpdateFilter("category", catId)}
        onToggleMobileFilters={() => setIsMobileFiltersOpen(true)}
      />

      {/* 3. Main Catalogue Workspace: Left Filters + Right Product Grid */}
      <main className="w-full px-margin py-space-xl max-w-7xl mx-auto flex-1">
        {/* Top Action Toolbar & Active Filter Pills */}
        <ShopToolbar
          totalCount={totalCount}
          displayRangeStart={displayRangeStart}
          displayRangeEnd={displayRangeEnd}
          filters={filters}
          onUpdateFilter={handleUpdateFilter}
          onClearFilters={handleClearFilters}
          viewMode={viewMode}
          onChangeViewMode={setViewMode}
          lockedVehicle={lockedVehicle}
          onUnlockVehicle={handleUnlockVehicle}
        />

        {/* Dual Layout: Left Sidebar + Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-space-xl items-start">
          {/* Left Sidebar Filters */}
          <ShopFilters
            filters={filters}
            onUpdateFilter={handleUpdateFilter}
            onResetFilters={handleClearFilters}
            lockedVehicle={lockedVehicle}
            onLockVehicle={handleLockVehicle}
            onUnlockVehicle={handleUnlockVehicle}
            isMobileOpen={isMobileFiltersOpen}
            onCloseMobile={() => setIsMobileFiltersOpen(false)}
          />

          {/* Right Product Grid Column */}
          <section
            className="lg:col-span-3 flex flex-col gap-space-lg w-full"
            aria-label="Product catalogue"
          >
            <ProductGrid
              products={paginatedProducts}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={handleAddToCart}
              onOpenDetails={setSelectedProduct}
              viewMode={viewMode}
              onResetFilters={handleClearFilters}
            />

            {/* Pagination */}
            <Pagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              displayRangeStart={displayRangeStart}
              displayRangeEnd={displayRangeEnd}
              totalItems={totalCount}
            />
          </section>
        </div>
      </main>

      {/* 4. Trust & Quality Guarantee Banner */}
      <ShopTrust />

      {/* Product Details Modal (Inspect CAD / Fitment Specs) */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlistIds.includes(selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Interactive Action Feedback Notification */}
      {toast && (
        <FeedbackToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
