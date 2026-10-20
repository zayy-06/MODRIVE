import { useState } from "react";

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onOpenDetails,
  viewMode = "grid",
}) {
  const [imgError, setImgError] = useState(false);

  const isList = viewMode === "list";
  const isCompact = viewMode === "compact";

  return (
    <article
      className={`group bg-surface-container-low hover:bg-surface-container transition-all duration-300 rounded-xl overflow-hidden shadow-xl relative border border-surface-container-high/30 flex ${
        isList ? "flex-col sm:flex-row items-stretch" : "flex-col justify-between"
      }`}
    >
      {/* ── Product Image Container ────────────────────────────────────── */}
      <div
        className={`relative bg-surface-container-lowest overflow-hidden flex items-center justify-center p-4 shrink-0 ${
          isList
            ? "w-full sm:w-60 h-48 sm:h-auto"
            : isCompact
            ? "w-full h-44"
            : "w-full aspect-square"
        }`}
      >
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/40 gap-2">
            <span className="material-symbols-outlined text-[48px]">image_not_supported</span>
            <span className="font-label-technical text-[10px] uppercase">Image Preview</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.alt || product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}

        {/* Provenance & SKU Chip Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start pointer-events-none">
          <span
            className={`px-2 py-0.5 rounded backdrop-blur-md font-label-technical text-[10px] tracking-wider uppercase font-bold ${
              product.origin === "local"
                ? "bg-primary-container text-on-primary-container shadow-[0_0_8px_rgba(184,240,0,0.4)]"
                : "bg-surface-container-highest/90 text-tertiary-fixed"
            }`}
          >
            {product.originLabel}
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-container-lowest/80 text-primary-container font-label-technical text-[9px] tracking-wider uppercase">
            SKU: {product.sku}
          </span>
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={() => onToggleWishlist(product)}
          aria-label={isWishlisted ? `Remove ${product.name} from Wishlist` : `Save ${product.name} to Wishlist`}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer ${
            isWishlisted
              ? "bg-primary-container text-on-primary-container shadow-[0_0_10px_rgba(184,240,0,0.4)]"
              : "bg-surface-container-high/80 hover:bg-surface-bright text-on-surface hover:text-primary-container"
          }`}
        >
          <span
            className="material-symbols-outlined text-[18px]"
            style={isWishlisted ? { fontVariationSettings: "'FILL' 1" } : undefined}
            aria-hidden="true"
          >
            favorite
          </span>
        </button>
      </div>

      {/* ── Card Body ─────────────────────────────────────────────────── */}
      <div
        className={`p-space-md flex flex-col flex-grow justify-between gap-space-md ${
          isCompact ? "p-3" : ""
        }`}
      >
        <div className="space-y-space-xs">
          {/* Brand & Rating Header */}
          <div className="flex items-center justify-between text-on-surface-variant font-label-technical text-label-technical uppercase">
            <span className="text-primary-container font-bold tracking-wider">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-primary-container">
              <span
                className="material-symbols-outlined text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                star
              </span>
              <span className="text-on-surface font-mono font-bold text-body-sm">
                {product.rating}
              </span>
              <span className="text-on-surface-variant text-[11px]">
                ({product.reviews})
              </span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onOpenDetails(product)}
            className="font-headline-sm text-body-md text-on-surface font-bold group-hover:text-primary-container transition-colors leading-snug line-clamp-2 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Fitment Compatibility Ping */}
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-technical text-[11px] max-w-full">
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary-container shrink-0"
              aria-hidden="true"
            />
            <span className="truncate">{product.fitment}</span>
          </div>

          {/* Stock availability */}
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            <span className={`${product.stockColor} font-bold`}>
              ● {product.stockLabel}
            </span>{" "}
            • {product.stockNote}
          </p>
        </div>

        {/* ── Price & Action CTAs ─────────────────────────────────────── */}
        <div className="pt-space-xs border-t border-surface-container-highest/20 flex items-center justify-between gap-2">
          <div>
            <span className="font-label-technical text-[10px] text-on-surface-variant uppercase block">
              {product.priceNote}
            </span>
            <span className="font-metric-price text-metric-price font-bold text-on-surface">
              {product.priceLabel}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => onOpenDetails(product)}
              className="px-3 py-2 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-technical text-label-technical uppercase tracking-wider transition-colors cursor-pointer"
              title="Inspect CAD Fitment"
            >
              Details
            </button>
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              aria-label={`Add ${product.name} to cart`}
              className="w-9 h-9 rounded bg-primary-container hover:bg-primary-fixed text-on-primary-container flex items-center justify-center font-bold shadow-[0_0_10px_rgba(184,240,0,0.3)] transition-all cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
