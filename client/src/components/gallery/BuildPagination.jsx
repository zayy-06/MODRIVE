export default function BuildPagination({
  currentPage,
  totalPages,
  onPageChange,
  startIndex,
  endIndex,
  totalItems,
}) {
  if (totalItems <= 0) return null;

  return (
    <div className="w-full bg-surface-container-lowest px-margin pb-space-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-sm py-space-md border-t border-surface-container-high/60">
        {/* Counter text */}
        <div className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider text-center sm:text-left">
          Showing <strong className="text-on-surface font-mono">{startIndex}–{endIndex}</strong> of{" "}
          <strong className="text-primary-container font-mono">{totalItems}</strong> builds in archive
        </div>

        {/* Page Nav */}
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous page"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-colors ${
              currentPage <= 1
                ? "bg-surface-container-low text-on-surface-variant/40 cursor-not-allowed border border-surface-container-high/30"
                : "bg-surface-container text-on-surface hover:bg-surface-container-high hover:text-primary-container border border-surface-container-high cursor-pointer"
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            <span className="hidden sm:inline">Prev</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  type="button"
                  aria-label={`Go to page ${page}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => onPageChange(page)}
                  className={`w-8 h-8 rounded-lg font-mono text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer ${
                    isActive
                      ? "bg-primary-container text-on-primary font-bold shadow-[0_0_12px_rgba(184,240,0,0.3)]"
                      : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-surface-container-high/60"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Next page"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-colors ${
              currentPage >= totalPages
                ? "bg-surface-container-low text-on-surface-variant/40 cursor-not-allowed border border-surface-container-high/30"
                : "bg-surface-container text-on-surface hover:bg-surface-container-high hover:text-primary-container border border-surface-container-high cursor-pointer"
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
