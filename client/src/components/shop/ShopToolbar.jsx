import { SORT_OPTIONS, CATEGORIES, PRICE_RANGES } from "../../data/shopProducts";

export default function ShopToolbar({
  totalCount,
  displayRangeStart,
  displayRangeEnd,
  filters,
  onUpdateFilter,
  onClearFilters,
  viewMode,
  onChangeViewMode,
  lockedVehicle,
  onUnlockVehicle,
}) {
  const currentCategory = CATEGORIES.find((c) => c.id === filters.category);
  const activePriceRange = PRICE_RANGES.find((r) => r.id === filters.priceRange);

  // Determine active filter chips
  const activeChips = [];

  if (filters.search) {
    activeChips.push({
      key: "search",
      label: `Search: "${filters.search}"`,
      onRemove: () => onUpdateFilter("search", ""),
    });
  }

  if (filters.category && filters.category !== "all") {
    activeChips.push({
      key: "category",
      label: currentCategory?.label || filters.category,
      onRemove: () => onUpdateFilter("category", "all"),
    });
  }

  if (filters.origin && filters.origin !== "all") {
    activeChips.push({
      key: "origin",
      label: filters.origin === "imported" ? "Imported (EU/US/JP)" : "MODRIVE Local Bespoke",
      onRemove: () => onUpdateFilter("origin", "all"),
    });
  }

  if (filters.brands && filters.brands.length > 0) {
    filters.brands.forEach((brand) => {
      activeChips.push({
        key: `brand-${brand}`,
        label: brand,
        onRemove: () =>
          onUpdateFilter(
            "brands",
            filters.brands.filter((b) => b !== brand)
          ),
      });
    });
  }

  if (filters.priceRange) {
    activeChips.push({
      key: "priceRange",
      label: activePriceRange?.label || filters.priceRange,
      onRemove: () => onUpdateFilter("priceRange", null),
    });
  }

  if (filters.availability && filters.availability !== "all") {
    activeChips.push({
      key: "availability",
      label:
        filters.availability === "in-stock"
          ? "In Stock"
          : filters.availability === "bto"
          ? "Built to Order"
          : "Pre-Order",
      onRemove: () => onUpdateFilter("availability", "all"),
    });
  }

  if (lockedVehicle) {
    activeChips.push({
      key: "vehicle",
      label: `Vehicle: ${lockedVehicle.makeLabel} ${lockedVehicle.modelLabel}`,
      onRemove: onUnlockVehicle,
    });
  }

  const hasActiveFilters = activeChips.length > 0;

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-lg mb-space-lg bg-surface-container-lowest/50 p-space-md rounded-xl border border-surface-container-high/30">
      {/* Title & Active Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-space-sm flex-wrap">
        <div>
          <h2 className="font-headline-sm text-headline-sm uppercase text-on-surface">
            {currentCategory?.id === "all" ? "Explore All Parts" : currentCategory?.label || "Explore Parts"}
          </h2>
          <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">
            {totalCount > 0
              ? `Showing ${displayRangeStart}–${displayRangeEnd} of ${totalCount} Products`
              : "0 Products Found"}
          </span>
        </div>

        {/* Filter Pills List */}
        <div className="flex items-center gap-space-xs flex-wrap pl-0 sm:pl-space-md">
          {activeChips.map((chip) => (
            <span
              key={chip.key}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-technical text-[11px] uppercase tracking-wider border border-surface-container-highest/50"
            >
              <span>{chip.label}</span>
              <button
                type="button"
                onClick={chip.onRemove}
                aria-label={`Remove filter ${chip.label}`}
                className="hover:text-primary-container text-on-surface-variant transition-colors flex items-center"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </span>
          ))}

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="text-primary-container hover:underline font-label-technical text-[11px] uppercase tracking-wider font-semibold ml-1 cursor-pointer"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Controls: Sort + View Selector */}
      <div className="flex items-center gap-space-sm shrink-0 flex-wrap">
        {/* Search input in toolbar */}
        <div className="relative flex items-center">
          <input
            type="text"
            value={filters.search || ""}
            onChange={(e) => onUpdateFilter("search", e.target.value)}
            placeholder="Search parts, SKU..."
            aria-label="Filter catalog by keyword"
            className="bg-surface-container-low text-on-surface font-body-md text-body-sm pl-8 pr-3 py-1.5 rounded-lg placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary-container transition-all w-36 sm:w-44 border border-surface-container-high/40"
          />
          <span
            className="material-symbols-outlined absolute left-2 text-on-surface-variant text-[16px] pointer-events-none"
            aria-hidden="true"
          >
            search
          </span>
          {filters.search && (
            <button
              type="button"
              onClick={() => onUpdateFilter("search", "")}
              className="absolute right-2 text-on-surface-variant hover:text-on-surface"
              aria-label="Clear search query"
            >
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative flex items-center">
          <label className="sr-only" htmlFor="catalogue-sort">
            Sort By
          </label>
          <div className="flex items-center gap-2 bg-surface-container-low px-space-sm py-2 rounded-lg text-on-surface border border-surface-container-high/40">
            <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">
              Sort:
            </span>
            <select
              id="catalogue-sort"
              value={filters.sort}
              onChange={(e) => onUpdateFilter("sort", e.target.value)}
              className="bg-transparent text-on-surface font-label-technical text-label-technical uppercase tracking-wider focus:outline-none cursor-pointer pr-2"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-surface-container-high">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* View Switcher */}
        <div
          className="flex items-center bg-surface-container-low p-1 rounded-lg gap-1 border border-surface-container-high/40"
          role="group"
          aria-label="Grid layout density"
        >
          <button
            type="button"
            onClick={() => onChangeViewMode("grid")}
            className={`p-1.5 rounded transition-colors ${
              viewMode === "grid"
                ? "bg-surface-container-high text-primary-container"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
            }`}
            title="3 Column Grid"
            aria-label="3 Column Grid view"
            aria-pressed={viewMode === "grid"}
          >
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeViewMode("compact")}
            className={`p-1.5 rounded transition-colors ${
              viewMode === "compact"
                ? "bg-surface-container-high text-primary-container"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
            }`}
            title="Compact Grid"
            aria-label="Compact Grid view"
            aria-pressed={viewMode === "compact"}
          >
            <span className="material-symbols-outlined text-[18px]">view_comfy</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeViewMode("list")}
            className={`p-1.5 rounded transition-colors ${
              viewMode === "list"
                ? "bg-surface-container-high text-primary-container"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
            }`}
            title="List View"
            aria-label="List view"
            aria-pressed={viewMode === "list"}
          >
            <span className="material-symbols-outlined text-[18px]">view_list</span>
          </button>
        </div>
      </div>
    </div>
  );
}
