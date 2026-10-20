import { useState } from "react";
import { CATEGORIES, BRANDS, PRICE_RANGES } from "../../data/shopProducts";
import VehicleCompatibilityFilter from "./VehicleCompatibilityFilter";

export default function ShopFilters({
  filters,
  onUpdateFilter,
  onResetFilters,
  lockedVehicle,
  onLockVehicle,
  onUnlockVehicle,
  isMobileOpen,
  onCloseMobile,
}) {
  const [openSections, setOpenSections] = useState({
    categories: true,
    provenance: true,
    brands: true,
    price: true,
    inventory: true,
  });

  function toggleSection(section) {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  function handleCategoryCheck(catId) {
    if (filters.category === catId) {
      onUpdateFilter("category", "all");
    } else {
      onUpdateFilter("category", catId);
    }
  }

  function handleBrandToggle(brand) {
    const current = filters.brands || [];
    if (current.includes(brand)) {
      onUpdateFilter(
        "brands",
        current.filter((b) => b !== brand)
      );
    } else {
      onUpdateFilter("brands", [...current, brand]);
    }
  }

  const content = (
    <aside className="flex flex-col gap-space-lg w-full">
      {/* Vehicle Compatibility Filter Box */}
      <VehicleCompatibilityFilter
        lockedVehicle={lockedVehicle}
        onLockVehicle={onLockVehicle}
        onUnlockVehicle={onUnlockVehicle}
      />

      {/* Accordion 1: Categories */}
      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm border border-surface-container-high/40">
        <button
          type="button"
          onClick={() => toggleSection("categories")}
          className="w-full flex items-center justify-between text-on-surface cursor-pointer text-left"
          aria-expanded={openSections.categories}
        >
          <span className="font-headline-sm text-body-md uppercase font-bold">Category</span>
          <span
            className="material-symbols-outlined text-on-surface-variant text-[18px] transition-transform duration-200"
            style={{
              transform: openSections.categories ? "rotate(0deg)" : "rotate(180deg)",
            }}
            aria-hidden="true"
          >
            expand_less
          </span>
        </button>

        {openSections.categories && (
          <div className="space-y-2 pt-2 border-t border-surface-container-high/30">
            {CATEGORIES.filter((c) => c.id !== "all").map((cat) => {
              const isChecked = filters.category === cat.id;
              return (
                <label
                  key={cat.id}
                  className="flex items-center justify-between cursor-pointer group select-none"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCategoryCheck(cat.id)}
                      className="accent-primary-container w-4 h-4 rounded cursor-pointer"
                    />
                    <span
                      className={`font-body-sm text-body-sm transition-colors ${
                        isChecked
                          ? "text-primary-container font-semibold"
                          : "text-on-surface group-hover:text-primary-container"
                      }`}
                    >
                      {cat.label}
                    </span>
                  </div>
                  <span className="font-mono text-label-technical text-on-surface-variant">
                    {cat.count}
                  </span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Accordion 2: Provenance / Origin */}
      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm border border-surface-container-high/40">
        <button
          type="button"
          onClick={() => toggleSection("provenance")}
          className="w-full flex items-center justify-between text-on-surface cursor-pointer text-left"
          aria-expanded={openSections.provenance}
        >
          <span className="font-headline-sm text-body-md uppercase font-bold">
            Provenance &amp; Source
          </span>
          <span
            className="material-symbols-outlined text-on-surface-variant text-[18px] transition-transform duration-200"
            style={{
              transform: openSections.provenance ? "rotate(0deg)" : "rotate(180deg)",
            }}
            aria-hidden="true"
          >
            expand_less
          </span>
        </button>

        {openSections.provenance && (
          <div className="space-y-2 pt-2 border-t border-surface-container-high/30">
            <label className="flex items-center justify-between cursor-pointer group select-none">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.origin === "imported"}
                  onChange={() =>
                    onUpdateFilter("origin", filters.origin === "imported" ? "all" : "imported")
                  }
                  className="accent-primary-container w-4 h-4 rounded cursor-pointer"
                />
                <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary-container transition-colors">
                  Imported (EU / US / JP)
                </span>
              </div>
              <span className="font-label-technical text-[10px] text-tertiary-container uppercase px-1.5 py-0.5 rounded bg-surface-container">
                Direct Air
              </span>
            </label>

            <label className="flex items-center justify-between cursor-pointer group select-none">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.origin === "local"}
                  onChange={() =>
                    onUpdateFilter("origin", filters.origin === "local" ? "all" : "local")
                  }
                  className="accent-primary-container w-4 h-4 rounded cursor-pointer"
                />
                <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary-container transition-colors">
                  MODRIVE Skunkworks (Local)
                </span>
              </div>
              <span className="font-label-technical text-[10px] text-primary-container uppercase px-1.5 py-0.5 rounded bg-surface-container">
                Bespoke
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Accordion 3: Performance Brand */}
      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm border border-surface-container-high/40">
        <button
          type="button"
          onClick={() => toggleSection("brands")}
          className="w-full flex items-center justify-between text-on-surface cursor-pointer text-left"
          aria-expanded={openSections.brands}
        >
          <span className="font-headline-sm text-body-md uppercase font-bold">
            Performance Brand
          </span>
          <span
            className="material-symbols-outlined text-on-surface-variant text-[18px] transition-transform duration-200"
            style={{
              transform: openSections.brands ? "rotate(0deg)" : "rotate(180deg)",
            }}
            aria-hidden="true"
          >
            expand_less
          </span>
        </button>

        {openSections.brands && (
          <div className="grid grid-cols-1 gap-2 pt-2 border-t border-surface-container-high/30">
            {BRANDS.map((brand) => {
              const isChecked = (filters.brands || []).includes(brand);
              return (
                <label
                  key={brand}
                  className="flex items-center gap-2 cursor-pointer group select-none"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleBrandToggle(brand)}
                    className="accent-primary-container w-4 h-4 rounded cursor-pointer"
                  />
                  <span
                    className={`font-body-sm text-body-sm transition-colors ${
                      isChecked
                        ? "text-primary-container font-semibold"
                        : "text-on-surface group-hover:text-primary-container"
                    }`}
                  >
                    {brand}
                  </span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Accordion 4: Price Range (PKR) */}
      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm border border-surface-container-high/40">
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-headline-sm text-body-md uppercase font-bold">
            Price Range (PKR)
          </span>
          <span className="font-label-technical text-label-technical text-primary-container uppercase">
            Demo Val
          </span>
        </div>

        {/* Numeric Readouts */}
        <div className="grid grid-cols-2 gap-space-xs pt-2">
          <div className="bg-surface-container p-2 rounded">
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase block">
              Min (PKR)
            </span>
            <span className="font-mono text-body-sm text-on-surface font-semibold">
              485,000
            </span>
          </div>
          <div className="bg-surface-container p-2 rounded">
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase block">
              Max (PKR)
            </span>
            <span className="font-mono text-body-sm text-on-surface font-semibold">
              3,890,000
            </span>
          </div>
        </div>

        {/* Quick Budget Chips */}
        <div className="grid grid-cols-2 gap-1.5 pt-2 font-label-technical text-[10px] uppercase tracking-wider">
          {PRICE_RANGES.map((range) => {
            const isSelected = filters.priceRange === range.id;
            return (
              <button
                key={range.id}
                type="button"
                onClick={() =>
                  onUpdateFilter("priceRange", isSelected ? null : range.id)
                }
                className={`px-2 py-1.5 rounded transition-all text-center cursor-pointer ${
                  isSelected
                    ? "bg-surface-container-high text-primary-container font-bold shadow-sm ring-1 ring-primary-container/50"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {range.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion 5: Inventory Availability */}
      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm border border-surface-container-high/40">
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-headline-sm text-body-md uppercase font-bold">
            Inventory Status
          </span>
          <span
            className="material-symbols-outlined text-on-surface-variant text-[18px]"
            aria-hidden="true"
          >
            inventory_2
          </span>
        </div>

        <div className="space-y-2 pt-2 border-t border-surface-container-high/30">
          {[
            { value: "all", label: "All Items" },
            { value: "in-stock", label: "In Stock (Dispatched 48h)" },
            { value: "bto", label: "Built to Order (14–21 Days)" },
            { value: "preorder", label: "Upcoming Pre-Order" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <input
                type="radio"
                name="availability"
                value={opt.value}
                checked={(filters.availability || "all") === opt.value}
                onChange={() => onUpdateFilter("availability", opt.value)}
                className="accent-primary-container cursor-pointer"
              />
              <span
                className={`font-body-sm text-body-sm ${
                  (filters.availability || "all") === opt.value
                    ? "text-on-surface font-semibold"
                    : "text-on-surface-variant"
                }`}
              >
                {opt.label}
              </span>
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={onResetFilters}
          className="w-full mt-2 py-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-technical text-label-technical uppercase tracking-wider transition-colors cursor-pointer border border-surface-container-high/30"
        >
          Reset All Filters
        </button>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop view: sticky sidebar */}
      <div className="hidden lg:block lg:col-span-1 sticky top-36">{content}</div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-surface-container-lowest/80 backdrop-blur-sm"
            onClick={onCloseMobile}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative z-10 w-full max-w-sm bg-surface-container-low p-space-md overflow-y-auto max-h-screen border-r border-surface-container-high flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
              <span className="font-headline-sm text-body-md uppercase font-bold text-on-surface">
                Filter Catalog
              </span>
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface"
                aria-label="Close filters"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
