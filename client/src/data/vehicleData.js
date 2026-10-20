/**
 * Vehicle data for the selector bar.
 * Structure: { makeKey: { label, models: { modelKey: { label, years[] } } } }
 * When the user changes Make, Model options reset to that make's first model.
 * When Model changes, Year resets to that model's first year.
 */

export const vehicleData = {
  porsche: {
    label: "Porsche",
    models: {
      "911-gt3": {
        label: "911 GT3 (992)",
        years: [2025, 2024, 2023, 2022],
      },
      "911-gt3-rs": {
        label: "911 GT3 RS (992)",
        years: [2025, 2024, 2023],
      },
      "718-gt4": {
        label: "718 Cayman GT4 (982)",
        years: [2024, 2023, 2022],
      },
    },
  },
  bmw: {
    label: "BMW M-Performance",
    models: {
      "m4-g82": {
        label: "M4 Competition (G82)",
        years: [2025, 2024, 2023, 2022],
      },
      "m3-g80": {
        label: "M3 Competition (G80)",
        years: [2025, 2024, 2023, 2022],
      },
      "m2-g87": {
        label: "M2 Competition (G87)",
        years: [2025, 2024, 2023],
      },
    },
  },
  toyota: {
    label: "Toyota Gazoo Racing",
    models: {
      "supra-a90": {
        label: "GR Supra (A90)",
        years: [2025, 2024, 2023, 2022],
      },
      "gr86-zn8": {
        label: "GR86 (ZN8)",
        years: [2024, 2023, 2022],
      },
      "gr-corolla": {
        label: "GR Corolla (GZEA10)",
        years: [2024, 2023],
      },
    },
  },
  audi: {
    label: "Audi Sport RS",
    models: {
      "rs6-c8": {
        label: "RS6 Avant (C8)",
        years: [2025, 2024, 2023, 2022],
      },
      "rs3-8y": {
        label: "RS3 Sedan (8Y)",
        years: [2024, 2023, 2022],
      },
      "rs7-c8": {
        label: "RS7 Sportback (C8)",
        years: [2025, 2024, 2023],
      },
    },
  },
  nissan: {
    label: "Nissan NISMO",
    models: {
      "gt-r-r35": {
        label: "GT-R Track Edition (R35)",
        years: [2024, 2023],
      },
      "gt-r-nismo": {
        label: "GT-R NISMO (R35)",
        years: [2024, 2023],
      },
    },
  },
};

/** Returns the first make key */
export const defaultMake = Object.keys(vehicleData)[0];

/** Returns the first model key for a given make */
export function defaultModel(makeKey) {
  return Object.keys(vehicleData[makeKey]?.models ?? {})[0] ?? "";
}

/** Returns the first year for a given make + model */
export function defaultYear(makeKey, modelKey) {
  return vehicleData[makeKey]?.models[modelKey]?.years[0] ?? "";
}
