import { useState } from "react";
import { STUDIO_VEHICLES, VEHICLE_CATEGORIES } from "../../data/studioData";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=400&q=80";

function VehicleCard({ vehicle, isSelected, onSelect }) {
  const [imgSrc, setImgSrc] = useState(vehicle.image);

  return (
    <button
      type="button"
      onClick={() => onSelect(vehicle.id)}
      aria-pressed={isSelected}
      className={`w-full text-left rounded-xl border overflow-hidden transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container group ${
        isSelected
          ? "border-primary-container shadow-[0_0_18px_rgba(184,240,0,0.2)] bg-surface-container"
          : "border-surface-container-high/60 bg-surface-container-low hover:border-primary-container/40"
      }`}
    >
      {/* Image */}
      <div className="relative h-24 w-full overflow-hidden bg-surface-container-lowest">
        <img
          src={imgSrc}
          alt={vehicle.name}
          onError={() => setImgSrc(FALLBACK_IMG)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container/80 to-transparent" aria-hidden="true" />
        {isSelected && (
          <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[13px]">check</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-2.5">
        <span className="font-label-technical text-[10px] text-primary-container uppercase tracking-widest font-mono block">{vehicle.badge}</span>
        <span className={`font-headline-sm text-sm font-bold block truncate ${isSelected ? "text-primary-container" : "text-on-surface"}`}>
          {vehicle.shortName}
        </span>
        <div className="flex items-center justify-between mt-1">
          <span className="font-label-technical text-[10px] text-on-surface-variant">{vehicle.specs.hp} BHP • {vehicle.specs.drivetrain}</span>
          <span className={`text-[9px] font-label-technical uppercase px-1.5 py-0.5 rounded ${isSelected ? "bg-primary-container/20 text-primary-container" : "bg-surface-container-high text-on-surface-variant"}`}>
            {vehicle.tag}
          </span>
        </div>
      </div>
    </button>
  );
}

export default function VehicleSelector({ selectedVehicleId, onSelectVehicle }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = STUDIO_VEHICLES.filter((v) => {
    const matchesCategory = activeCategory === "all" || v.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      v.name.toLowerCase().includes(q) ||
      v.platform.toLowerCase().includes(q) ||
      v.badge.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <aside className="flex flex-col gap-space-md h-full">
      {/* Header */}
      <div className="flex items-center gap-2 pb-space-sm border-b border-surface-container-high/60">
        <span className="material-symbols-outlined text-primary-container text-[18px]">directions_car</span>
        <span className="font-label-technical text-label-technical text-on-surface uppercase font-bold tracking-wider">Vehicle Select</span>
      </div>

      {/* Category Filters */}
      <div role="tablist" aria-label="Vehicle categories" className="flex flex-wrap gap-1.5">
        {VEHICLE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1 rounded-full font-label-technical text-label-technical uppercase tracking-wider transition-all text-xs cursor-pointer ${
              activeCategory === cat.id
                ? "bg-primary-container text-on-primary font-bold"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <span
          className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px] pointer-events-none"
          aria-hidden="true"
        >
          search
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search platform, model..."
          aria-label="Search vehicles"
          className="w-full bg-surface-container-low text-on-surface text-xs pl-8 pr-3 py-2 rounded-lg border border-surface-container-high focus:outline-none focus:border-primary-container transition-colors placeholder:text-on-surface-variant/60 font-body-sm"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2"
          >
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant">close</span>
          </button>
        )}
      </div>

      {/* Vehicle Cards */}
      <div className="flex flex-col gap-2 overflow-y-auto scrollbar-none flex-1">
        {filtered.length === 0 ? (
          <div className="py-space-lg text-center">
            <span className="material-symbols-outlined text-on-surface-variant text-[28px] block mb-1">search_off</span>
            <p className="font-body-sm text-xs text-on-surface-variant">No vehicles match your filter.</p>
          </div>
        ) : (
          filtered.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              isSelected={selectedVehicleId === vehicle.id}
              onSelect={onSelectVehicle}
            />
          ))
        )}
      </div>

      {/* Note */}
      <div className="pt-space-sm border-t border-surface-container-high/60">
        <p className="font-label-technical text-[10px] text-on-surface-variant uppercase">
          Demo platforms only — illustrative configurations
        </p>
      </div>
    </aside>
  );
}
