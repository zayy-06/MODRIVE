import { useState } from "react";
import { featuredProducts, filterTabs } from "../../data/productsData";

function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group bg-surface-container-low rounded-xl overflow-hidden flex flex-col justify-between hover:bg-surface-container transition-all shadow-md">
      {/* Image */}
      <div className="relative w-full h-48 bg-surface-container-lowest overflow-hidden">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center text-on-surface-variant/40">
            <span className="material-symbols-outlined text-[48px]">image_not_supported</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
        {/* Badge */}
        <div className="absolute top-2 left-2">
          <span
            className={`font-label-technical text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-surface-container-high/90 ${product.badgeColor}`}
          >
            {product.badge}
          </span>
        </div>
        {/* Wishlist button (Phase 3 — placeholder action) */}
        <button
          type="button"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-high/90 hover:bg-primary-container hover:text-on-primary-container text-on-surface flex items-center justify-center transition-colors"
          aria-label={`Save ${product.name} to wishlist`}
          title="Save to wishlist (auth required — coming Phase 3)"
        >
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
            bookmark
          </span>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-space-md flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary-container"
              aria-hidden="true"
            />
            <span className="font-label-technical text-[10px] uppercase text-on-surface-variant">
              {product.fitment}
            </span>
          </div>
          <h3 className="font-headline-sm text-body-md font-bold uppercase text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="font-label-technical text-label-technical text-on-surface-variant/80 mt-1">
            SKU: {product.sku}
          </p>
        </div>

        {/* Price & CTA */}
        <div className="mt-space-md pt-space-sm border-t border-surface-container-high">
          <div className="flex items-center justify-between mb-space-sm">
            <span className={`font-label-technical text-[11px] uppercase ${product.stockColor}`}>
              {product.stock}
            </span>
            <span className="font-metric-price text-metric-price font-bold text-primary-container">
              {product.price}
            </span>
          </div>
          <button
            type="button"
            className="w-full py-2 bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary-container rounded-DEFAULT font-headline-sm text-body-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
            aria-label={`${product.cta}: ${product.name}`}
            title="Cart functionality coming in Phase 2"
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              add
            </span>
            <span>{product.cta}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("All Parts");

  const visibleProducts =
    activeFilter === "All Parts"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeFilter);

  return (
    <section
      className="w-full py-space-xl px-margin bg-surface"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header + Filter Tabs ────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
          <div>
            <span className="font-label-technical text-label-technical uppercase text-primary-container tracking-widest font-semibold">
              // LIVE INVENTORY
            </span>
            <h2
              id="products-heading"
              className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-1"
            >
              Featured{" "}
              <span className="text-primary-container">Components</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none"
            role="tablist"
            aria-label="Filter products by category"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-space-md py-1.5 rounded-DEFAULT font-label-technical text-label-technical uppercase tracking-wider whitespace-nowrap transition-colors ${
                  activeFilter === tab
                    ? "bg-primary-container text-on-primary-container font-bold"
                    : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ── Product Cards Grid ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-space-xl text-center text-on-surface-variant font-body-md">
              No products in this category yet. More inventory coming soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
