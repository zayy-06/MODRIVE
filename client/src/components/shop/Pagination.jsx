export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  displayRangeStart,
  displayRangeEnd,
  totalItems,
}) {
  if (totalItems === 0) return null;

  // Build page numbers array
  const pages = [];
  const maxButtons = 5;

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);

  if (endPage - startPage < maxButtons - 1) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg border-t border-surface-container-high w-full">
      <p className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
        Displaying{" "}
        <span className="text-on-surface font-bold">
          {displayRangeStart}–{displayRangeEnd}
        </span>{" "}
        of <span className="text-on-surface font-bold">{totalItems}</span> catalogue items
      </p>

      <nav aria-label="Catalogue Pagination" className="flex items-center gap-1.5">
        {/* Prev Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={`flex items-center gap-1 px-3 py-1.5 rounded font-label-technical text-label-technical uppercase transition-colors ${
            currentPage <= 1
              ? "bg-surface-container-low text-on-surface-variant/40 cursor-not-allowed"
              : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container cursor-pointer"
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">chevron_left</span>
          <span>Prev</span>
        </button>

        {/* First page if not in range */}
        {startPage > 1 && (
          <>
            <button
              type="button"
              onClick={() => onPageChange(1)}
              className="w-8 h-8 rounded bg-surface-container-low text-on-surface hover:bg-surface-container font-label-technical text-label-technical font-bold flex items-center justify-center transition-colors cursor-pointer"
            >
              1
            </button>
            {startPage > 2 && <span className="px-1 text-on-surface-variant font-mono">...</span>}
          </>
        )}

        {/* Page Buttons */}
        {pages.map((p) => {
          const isActive = p === currentPage;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              aria-current={isActive ? "page" : undefined}
              className={`w-8 h-8 rounded font-label-technical text-label-technical font-bold flex items-center justify-center transition-all cursor-pointer ${
                isActive
                  ? "bg-primary-container text-on-primary-container shadow-[0_0_8px_rgba(184,240,0,0.3)]"
                  : "bg-surface-container-low text-on-surface hover:bg-surface-container"
              }`}
            >
              {p}
            </button>
          );
        })}

        {/* Last page if not in range */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="px-1 text-on-surface-variant font-mono">...</span>
            )}
            <button
              type="button"
              onClick={() => onPageChange(totalPages)}
              className="w-8 h-8 rounded bg-surface-container-low text-on-surface hover:bg-surface-container font-label-technical text-label-technical font-bold flex items-center justify-center transition-colors cursor-pointer"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={`flex items-center gap-1 px-3 py-1.5 rounded font-label-technical text-label-technical uppercase transition-colors ${
            currentPage >= totalPages
              ? "bg-surface-container-low text-on-surface-variant/40 cursor-not-allowed"
              : "bg-surface-container-low text-on-surface hover:bg-surface-container font-label-technical text-label-technical uppercase transition-colors cursor-pointer"
          }`}
        >
          <span>Next</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </button>
      </nav>
    </div>
  );
}
