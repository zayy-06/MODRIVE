import { useState } from "react";
import { vehicleData, defaultMake, defaultModel, defaultYear } from "../../data/vehicleData";
import { useNavigate } from "react-router-dom";

export default function VehicleSelector() {
  const navigate = useNavigate();

  const [selectedMake, setSelectedMake] = useState(defaultMake);
  const [selectedModel, setSelectedModel] = useState(defaultModel(defaultMake));
  const [selectedYear, setSelectedYear] = useState(
    defaultYear(defaultMake, defaultModel(defaultMake))
  );

  /** When make changes, reset model and year to the new make's first values */
  function handleMakeChange(e) {
    const make = e.target.value;
    const firstModel = defaultModel(make);
    const firstYear = defaultYear(make, firstModel);
    setSelectedMake(make);
    setSelectedModel(firstModel);
    setSelectedYear(firstYear);
  }

  /** When model changes, reset year to first available for that model */
  function handleModelChange(e) {
    const model = e.target.value;
    const firstYear = defaultYear(selectedMake, model);
    setSelectedModel(model);
    setSelectedYear(firstYear);
  }

  /** Launch 3D Studio — shows Phase 4 placeholder */
  function handleLaunch() {
    navigate("/customizer");
  }

  const currentModels = vehicleData[selectedMake]?.models ?? {};
  const currentYears = currentModels[selectedModel]?.years ?? [];

  return (
    <div className="relative z-30 w-full max-w-6xl mx-auto px-margin -mt-10 mb-space-xl">
      <div className="bg-surface-container/95 backdrop-blur-xl p-space-md rounded-xl shadow-2xl">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md items-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleLaunch();
          }}
          aria-label="Vehicle selector — choose your car to start customizing"
        >
          {/* ── Make ──────────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-1 bg-surface-container-low px-space-md py-2 rounded-lg">
            <label
              htmlFor="vehicle-make"
              className="font-label-technical text-label-technical uppercase text-on-surface-variant tracking-wider flex items-center gap-1"
            >
              <span
                className="material-symbols-outlined text-[14px] text-primary-container"
                aria-hidden="true"
              >
                directions_car
              </span>
              01 // Choose Make
            </label>
            <select
              id="vehicle-make"
              value={selectedMake}
              onChange={handleMakeChange}
              className="bg-transparent text-on-surface font-body-md text-body-md font-medium focus:outline-none cursor-pointer"
            >
              {Object.entries(vehicleData).map(([key, { label }]) => (
                <option key={key} value={key} className="bg-surface-container">
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* ── Model ─────────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-1 bg-surface-container-low px-space-md py-2 rounded-lg">
            <label
              htmlFor="vehicle-model"
              className="font-label-technical text-label-technical uppercase text-on-surface-variant tracking-wider flex items-center gap-1"
            >
              <span
                className="material-symbols-outlined text-[14px] text-primary-container"
                aria-hidden="true"
              >
                sports_motorsports
              </span>
              02 // Select Model
            </label>
            <select
              id="vehicle-model"
              value={selectedModel}
              onChange={handleModelChange}
              className="bg-transparent text-on-surface font-body-md text-body-md font-medium focus:outline-none cursor-pointer"
            >
              {Object.entries(currentModels).map(([key, { label }]) => (
                <option key={key} value={key} className="bg-surface-container">
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* ── Year ──────────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-1 bg-surface-container-low px-space-md py-2 rounded-lg">
            <label
              htmlFor="vehicle-year"
              className="font-label-technical text-label-technical uppercase text-on-surface-variant tracking-wider flex items-center gap-1"
            >
              <span
                className="material-symbols-outlined text-[14px] text-primary-container"
                aria-hidden="true"
              >
                calendar_today
              </span>
              03 // Generation Year
            </label>
            <select
              id="vehicle-year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="bg-transparent text-on-surface font-body-md text-body-md font-medium focus:outline-none cursor-pointer"
            >
              {currentYears.map((year) => (
                <option key={year} value={year} className="bg-surface-container">
                  {year === 2025 ? "2025 (Facelift Mk2)" : `${year} Production`}
                </option>
              ))}
            </select>
          </div>

          {/* ── Launch Button ─────────────────────────────────────────────── */}
          <button
            type="submit"
            className="w-full h-full min-h-[52px] bg-primary-container hover:bg-primary-fixed text-on-primary-container font-headline-sm text-body-md font-bold uppercase rounded-lg tracking-wider flex items-center justify-center gap-space-xs transition-colors shadow-lg shadow-primary-container/15 cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              aria-hidden="true"
            >
              view_in_ar
            </span>
            <span>Launch 3D Studio</span>
          </button>
        </form>
      </div>
    </div>
  );
}
