import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onOpenDetails,
  viewMode = "grid",
  onResetFilters,
}) {
  if (products.length === 0) {
    return (
      <div className="w-full bg-surface-container-low rounded-xl p-space-xl text-center space-y-space-md border border-surface-container-high/40">
        <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mx-auto text-primary-container">
          <span className="material-symbols-outlined text-[36px]">filter_alt_off</span>
        </div>
        <div className="max-w-md mx-auto space-y-1">
          <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
            No Matching Parts Found
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            No components match your current filter selection. Try adjusting your brand, category,
            or vehicle fitment criteria.
          </p>
        </div>
        <button
          type="button"
          onClick={onResetFilters}
          className="px-space-lg py-2 rounded bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-body-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  const gridClasses = {
    grid: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg",
    compact: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md",
    list: "flex flex-col gap-space-md",
  }[viewMode] || "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg";

  return (
    <div className={gridClasses}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={wishlistIds.includes(product.id)}
          onToggleWishlist={onToggleWishlist}
          onAddToCart={onAddToCart}
          onOpenDetails={onOpenDetails}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
}
