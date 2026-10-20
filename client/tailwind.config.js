/** @type {import('tailwindcss').Config} */
export default {
  // Dark mode controlled by 'dark' class on <html>
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // ── Colors — exact tokens from MODRIVE reference ─────────────────────
      colors: {
        "on-primary": "#273500",
        "surface-container": "#1e2024",
        "tertiary-container": "#b8e3ff",
        "on-background": "#e2e2e8",
        "secondary-container": "#39485a",
        "inverse-on-surface": "#2f3035",
        "primary-fixed": "#bdf510",
        secondary: "#b9c8de",
        "on-primary-fixed-variant": "#394d00",
        "primary-container": "#b8f000",
        "surface-bright": "#37393e",
        "on-tertiary-fixed": "#001e2c",
        "primary-fixed-dim": "#a5d700",
        "surface-variant": "#333539",
        "on-secondary-fixed-variant": "#39485a",
        "on-surface": "#e2e2e8",
        "secondary-fixed-dim": "#b9c8de",
        "on-secondary-fixed": "#0d1c2d",
        "on-tertiary": "#00354a",
        "on-secondary": "#233143",
        "on-error": "#690005",
        "on-tertiary-container": "#00688e",
        "on-primary-fixed": "#151f00",
        "on-error-container": "#ffdad6",
        tertiary: "#f6faff",
        "inverse-surface": "#e2e2e8",
        "outline-variant": "#434933",
        "on-tertiary-fixed-variant": "#004c69",
        "on-surface-variant": "#c3caad",
        "inverse-primary": "#4d6700",
        "surface-dim": "#111317",
        "tertiary-fixed": "#c4e7ff",
        error: "#ffb4ab",
        "on-primary-container": "#506a00",
        "secondary-fixed": "#d4e4fa",
        "surface-tint": "#a5d700",
        outline: "#8d947a",
        background: "#111317",
        "on-secondary-container": "#a7b6cc",
        "error-container": "#93000a",
        "surface-container-lowest": "#0c0e12",
        primary: "#f4ffd3",
        "surface-container-high": "#282a2e",
        "surface-container-low": "#1a1c20",
        "tertiary-fixed-dim": "#7bd0ff",
        "surface-container-highest": "#333539",
        surface: "#111317",
      },

      // ── Border Radius — sharp technical aesthetic ─────────────────────────
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "1rem",
        full: "0.75rem",
      },

      // ── Spacing — custom design tokens ────────────────────────────────────
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "gutter-mobile": "0.75rem",
        gutter: "1.5rem",
        "margin-mobile": "1rem",
        margin: "2rem",
      },

      // ── Font Families ─────────────────────────────────────────────────────
      fontFamily: {
        "display-xl": ["Syne", "sans-serif"],
        "display-xl-mobile": ["Syne", "sans-serif"],
        "headline-lg": ["Syne", "sans-serif"],
        "headline-lg-mobile": ["Syne", "sans-serif"],
        "headline-md": ["Syne", "sans-serif"],
        "headline-sm": ["Syne", "sans-serif"],
        "body-lg": ["Geist", "sans-serif"],
        "body-md": ["Geist", "sans-serif"],
        "body-sm": ["Geist", "sans-serif"],
        "label-technical": ["Geist", "sans-serif"],
        "metric-price": ["Geist", "sans-serif"],
      },

      // ── Font Sizes — matching reference type scale exactly ────────────────
      fontSize: {
        "display-xl": [
          "4.5rem",
          {
            lineHeight: "4.75rem",
            letterSpacing: "-0.04em",
            fontWeight: "800",
          },
        ],
        "display-xl-mobile": [
          "2.75rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-0.03em",
            fontWeight: "800",
          },
        ],
        "headline-lg": [
          "2.5rem",
          {
            lineHeight: "2.875rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "headline-lg-mobile": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "headline-md": [
          "1.75rem",
          {
            lineHeight: "2.125rem",
            letterSpacing: "-0.015em",
            fontWeight: "600",
          },
        ],
        "headline-sm": [
          "1.25rem",
          {
            lineHeight: "1.625rem",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        "body-lg": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "0.9375rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.005em",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "0.8125rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "label-technical": [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.08em",
            fontWeight: "600",
          },
        ],
        "metric-price": [
          "1.375rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },

      // ── Max Width ─────────────────────────────────────────────────────────
      maxWidth: {
        "8xl": "88rem",
      },

      // ── Box Shadows — glow effects ─────────────────────────────────────────
      boxShadow: {
        "lime-glow": "0 0 10px rgba(184,240,0,0.4)",
        "lime-xl": "0 8px 32px rgba(184,240,0,0.2)",
      },

      // ── Animations ────────────────────────────────────────────────────────
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
  // Safelist ensures JIT generates classes constructed dynamically
  safelist: ["rounded-DEFAULT"],
};
