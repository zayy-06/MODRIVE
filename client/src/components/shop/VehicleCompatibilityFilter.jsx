import { useState } from "react";
import { vehicleData, defaultMake, defaultModel, defaultYear } from "../../data/vehicleData";

export default function VehicleCompatibilityFilter({
  lockedVehicle,
  onLockVehicle,
  onUnlockVehicle,
}) {
  const [selectedMake, setSelectedMake] = useState(defaultMake);
  const [selectedModel, setSelectedModel] = useState(defaultModel(defaultMake));
  const [selectedYear, setSelectedYear] = useState(
    defaultYear(defaultMake, defaultModel(defaultMake))
  );

  function handleMakeChange(e) {
    const make = e.target.value;
    const firstModel = defaultModel(make);
    const firstYear = defaultYear(make, firstModel);
    setSelectedMake(make);
    setSelectedModel(firstModel);
    setSelectedYear(firstYear);
  }

  function handleModelChange(e) {
    const model = e.target.value;
    const firstYear = defaultYear(selectedMake, model);
    setSelectedModel(model);
    setSelectedYear(firstYear);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const makeObj = vehicleData[selectedMake];
    const modelObj = makeObj?.models[selectedModel];
    onLockVehicle({
      makeKey: selectedMake,
      makeLabel: makeObj?.label || selectedMake,
      modelKey: selectedModel,
      modelLabel: modelObj?.label || selectedModel,
      year: selectedYear,
    });
  }

  const currentModels = vehicleData[selectedMake]?.models ?? {};
  const currentYears = currentModels[selectedModel]?.years ?? [];

  return (
    <div className="bg-surface-container-low p-space-md rounded-xl shadow-lg relative overflow-hidden border border-surface-container-high/40">
      <div
        className="absolute top-0 right-0 w-28 h-28 bg-primary-container/5 rounded-full blur-xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between mb-space-sm">
        <div className="flex items-center gap-space-xs">
          <span
            className="material-symbols-outlined text-primary-container text-[20px]"
            aria-hidden="true"
          >
            directions_car
          </span>
          <h3 className="font-headline-sm text-body-md uppercase font-bold text-on-surface">
            Fit My Vehicle
          </h3>
        </div>
        <span className="inline-flex items-center gap-1 font-label-technical text-[10px] uppercase tracking-wider text-primary-container bg-surface-container-high px-2 py-0.5 rounded">
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"
            aria-hidden="true"
          />
          {lockedVehicle ? "Active Filter" : "Demo Verification"}
        </span>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Filter SKUs guaranteed to mate with factory suspension and hubs.
      </p>

      {lockedVehicle ? (
        <div className="bg-surface-container-high/60 p-3 rounded-lg border border-primary-container/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-label-technical text-[10px] text-primary-container uppercase font-bold tracking-wider">
              CRITERIA LOCKED
            </span>
            <button
              type="button"
              onClick={onUnlockVehicle}
              className="text-on-surface-variant hover:text-error text-[11px] font-label-technical uppercase underline"
            >
              Reset
            </button>
          </div>
          <div className="font-body-md text-on-surface font-semibold text-body-sm">
            {lockedVehicle.makeLabel}
          </div>
          <div className="font-body-sm text-on-surface-variant text-[12px]">
            {lockedVehicle.modelLabel} ({lockedVehicle.year})
          </div>
        </div>
      ) : (
        <form className="space-y-space-sm" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="filter-make"
              className="block font-label-technical text-[11px] text-on-surface-variant uppercase mb-1"
            >
              Make
            </label>
            <select
              id="filter-make"
              value={selectedMake}
              onChange={handleMakeChange}
              className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-container cursor-pointer border border-surface-container-high/40"
            >
              {Object.entries(vehicleData).map(([key, { label }]) => (
                <option key={key} value={key} className="bg-surface-container">
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="filter-model"
              className="block font-label-technical text-[11px] text-on-surface-variant uppercase mb-1"
            >
              Model &amp; Chassis
            </label>
            <select
              id="filter-model"
              value={selectedModel}
              onChange={handleModelChange}
              className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-container cursor-pointer border border-surface-container-high/40"
            >
              {Object.entries(currentModels).map(([key, { label }]) => (
                <option key={key} value={key} className="bg-surface-container">
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="filter-year"
              className="block font-label-technical text-[11px] text-on-surface-variant uppercase mb-1"
            >
              Model Year
            </label>
            <select
              id="filter-year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="w-full bg-surface-container text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-container cursor-pointer border border-surface-container-high/40"
            >
              {currentYears.map((yr) => (
                <option key={yr} value={yr} className="bg-surface-container">
                  {yr} Production
                </option>
              ))}
            </select>
          </div>

          <button
            className="w-full mt-space-xs py-2 rounded bg-surface-container-high hover:bg-surface-bright text-primary-container font-label-technical text-label-technical uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:shadow-lime-glow/20"
            type="submit"
          >
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            Lock Fitment Criteria
          </button>
        </form>
      )}
    </div>
  );
}
