import { CATEGORIES } from "../../data/shopProducts";

export default function CategorySelector({
  activeCategory,
  onSelectCategory,
  onToggleMobileFilters,
}) {
  return (
    <section className="w-full bg-surface-container-low py-space-sm px-margin sticky top-20 z-40 backdrop-blur-md bg-surface-container-low/95 shadow-md border-b border-surface-container-high/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-space-md">
        <div
          className="flex items-center gap-space-xs overflow-x-auto scrollbar-none py-1"
          role="tablist"
          aria-label="Filter catalog by category"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-space-md py-2 rounded font-label-technical text-label-technical uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-bold shadow-[0_0_12px_rgba(184,240,0,0.3)]"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary-container font-semibold"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[16px] ${
                    isActive ? "text-on-primary-container" : "text-on-surface-variant"
                  }`}
                  aria-hidden="true"
                >
                  {cat.icon}
                </span>
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                    isActive
                      ? "bg-surface-container-lowest/20 text-on-primary-container"
                      : "text-on-surface-variant bg-surface-container-low"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Search / Filter Expand Button on Mobile/Tablet */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleMobileFilters}
            className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center gap-1.5 font-label-technical text-[11px] uppercase tracking-wider"
            title="Toggle Filter Sidebar"
            type="button"
            aria-label="Toggle Filter Sidebar"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              filter_list
            </span>
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </div>
    </section>
  );
}
