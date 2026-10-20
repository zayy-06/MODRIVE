import { Link } from "react-router-dom";
import { categories } from "../../data/categoriesData";

export default function PerformanceCategories() {
  return (
    <section
      className="w-full py-space-xl px-margin bg-surface-container-lowest"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ──────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-technical text-label-technical uppercase text-primary-container tracking-widest font-semibold">
              // CATALOG DEPARTMENTS
            </span>
            <h2
              id="categories-heading"
              className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-1"
            >
              Engineered{" "}
              <span className="text-primary-container">Components</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-space-xs font-label-technical text-label-technical uppercase tracking-wider text-on-surface hover:text-primary-container transition-colors"
            aria-label="View all 280+ SKUs in the shop"
          >
            <span>View All 280+ SKUs</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* ── 6-Card Bento Grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {categories.map(({ id, label, count, description, brands }) => (
            <Link
              key={id}
              to="/shop"
              className="group bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl flex flex-col justify-between transition-all duration-300 shadow-md"
              aria-label={`${label} — ${count}`}
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-label-technical text-label-technical uppercase px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-bold">
                    {count}
                  </span>
                  <span
                    className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors text-[20px]"
                    aria-hidden="true"
                  >
                    north_east
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary-container transition-colors mb-space-xs">
                  {label}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {description}
                </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-surface-container-high flex items-center justify-between">
                <span className="font-label-technical text-[11px] uppercase tracking-wider text-on-surface-variant">
                  {brands}
                </span>
                <span
                  className="font-label-technical text-label-technical text-primary-container uppercase font-semibold"
                  aria-hidden="true"
                >
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
