import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) {
  const [imgError, setImgError] = useState(false);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-surface-container-lowest/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-3xl bg-surface-container-low rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-high/90 hover:bg-surface-bright text-on-surface flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Product Media Column */}
        <div className="w-full md:w-1/2 bg-surface-container-lowest p-6 flex flex-col items-center justify-center relative overflow-hidden">
          {imgError ? (
            <div className="w-full h-64 flex flex-col items-center justify-center text-on-surface-variant/40 gap-2">
              <span className="material-symbols-outlined text-[64px]">image_not_supported</span>
              <span className="font-label-technical text-body-sm">Preview Unavailable</span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.alt || product.name}
              className="max-h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}

          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary-container font-label-technical text-[10px] uppercase font-bold tracking-wider">
              {product.originLabel}
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-technical text-[10px] uppercase">
              SKU: {product.sku}
            </span>
          </div>
        </div>

        {/* Product Spec Column */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-on-surface-variant font-label-technical text-[11px] uppercase">
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
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <h2
              id="modal-product-title"
              className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold leading-snug"
            >
              {product.name}
            </h2>

            {/* Fitment Chip */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-technical text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" aria-hidden="true" />
              <span>{product.fitment}</span>
            </div>

            {/* Stock status */}
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              <span className={`${product.stockColor} font-bold`}>
                ● {product.stockLabel}
              </span>{" "}
              • {product.stockNote}
            </p>

            <div className="pt-2 text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
              Precision-engineered automotive modification component. Designed to aerospace
              tolerances with track-tested thermal and structural integrity.
            </div>

            {/* Demo Notice */}
            <div className="bg-surface-container p-2.5 rounded-lg border border-surface-container-high text-[11px] font-label-technical text-on-surface-variant/80 uppercase">
              <span className="text-primary-container font-bold">Demo Notice:</span> All specs &amp;
              prices are illustrative portfolio mockups.
            </div>
          </div>

          {/* Pricing & Action */}
          <div className="pt-4 border-t border-surface-container-high space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-label-technical text-[10px] text-on-surface-variant uppercase block">
                  {product.priceNote}
                </span>
                <span className="font-metric-price text-headline-md font-bold text-primary-container">
                  {product.priceLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onToggleWishlist(product)}
                className={`p-2 rounded-lg flex items-center gap-1.5 font-label-technical text-[11px] uppercase transition-colors cursor-pointer ${
                  isWishlisted
                    ? "bg-primary-container text-on-primary-container font-bold"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                }`}
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={isWishlisted ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  favorite
                </span>
                <span>{isWishlisted ? "Saved" : "Save"}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 py-3 bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-body-sm font-bold uppercase rounded-DEFAULT tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-container/20 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                <span>Add to Build Cart</span>
              </button>

              <Link
                to="/customizer"
                onClick={onClose}
                className="px-3.5 py-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-body-sm font-bold uppercase rounded-DEFAULT tracking-wider transition-colors flex items-center justify-center gap-1"
                title="Launch in 3D (Phase 4)"
              >
                <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
