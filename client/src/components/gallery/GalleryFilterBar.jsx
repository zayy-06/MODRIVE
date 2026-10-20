import { GALLERY_CATEGORIES, SORT_OPTIONS } from "../../data/galleryData";

export default function GalleryFilterBar({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalMatching,
}) {
  return (
    <div className="sticky top-[73px] z-30 w-full bg-surface/95 backdrop-blur-md border-y border-surface-container-high/60 py-space-sm px-margin transition-all">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm">
        {/* Category Pills */}
        <div
          role="tablist"
          aria-label="Filter builds by category"
          className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 -my-1"
        >
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-label-technical text-label-technical uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "bg-primary-container text-on-primary font-bold shadow-[0_0_16px_rgba(184,240,0,0.3)]"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-surface-container-highest/30"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-medium ${
                    isActive
                      ? "bg-on-primary/20 text-on-primary"
                      : "bg-surface-container-highest/60 text-on-surface-variant"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-64">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none"
              aria-hidden="true"
            >
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search chassis, aero, specs..."
              aria-label="Search builds"
              className="w-full bg-surface-container-low text-on-surface text-body-sm pl-9 pr-8 py-1.5 rounded-lg border border-surface-container-high focus:outline-none focus:border-primary-container font-body-sm transition-colors placeholder:text-on-surface-variant/60"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface text-[16px] flex items-center"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative shrink-0">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              aria-label="Sort builds by"
              className="appearance-none bg-surface-container-low text-on-surface text-label-technical font-label-technical uppercase tracking-wider pl-3 pr-8 py-2 rounded-lg border border-surface-container-high focus:outline-none focus:border-primary-container cursor-pointer transition-colors"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value} className="bg-surface-container text-on-surface">
                  {option.label}
                </option>
              ))}
            </select>
            <span
              className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]"
              aria-hidden="true"
            >
              arrow_drop_down
            </span>
          </div>
        </div>
      </div>

      {/* Result feedback indicator if filtered */}
      {(selectedCategory !== "all" || searchQuery.trim() !== "") && (
        <div className="max-w-7xl mx-auto pt-2 flex items-center justify-between text-[11px] font-label-technical text-on-surface-variant uppercase tracking-wider">
          <span>
            Showing <strong className="text-primary-container">{totalMatching}</strong> build{totalMatching !== 1 ? "s" : ""} matching criteria
          </span>
          <button
            type="button"
            onClick={() => {
              onSelectCategory("all");
              onSearchChange("");
            }}
            className="text-primary-container hover:underline lowercase font-mono"
          >
            reset filters
          </button>
        </div>
      )}
    </div>
  );
}
