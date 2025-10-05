/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)", // slate-200
        input: "var(--color-input)", // slate-50
        ring: "var(--color-ring)", // blue-800
        background: "var(--color-background)", // gray-50
        foreground: "var(--color-foreground)", // slate-900
        primary: {
          DEFAULT: "var(--color-primary)", // blue-800
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // slate-900
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-600
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // slate-100
          foreground: "var(--color-muted-foreground)", // slate-500
        },
        accent: {
          DEFAULT: "var(--color-accent)", // orange-500
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // slate-900
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // slate-900
        },
        success: {
          DEFAULT: "var(--color-success)", // emerald-600
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-600
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-600
          foreground: "var(--color-error-foreground)", // white
        },
        // Custom brand colors
        surface: "var(--color-surface)", // slate-100
        "text-primary": "var(--color-text-primary)", // slate-900
        "text-secondary": "var(--color-text-secondary)", // slate-500
        innovation: {
          DEFAULT: "var(--color-innovation)", // cyan-500
          foreground: "var(--color-innovation-foreground)", // white
        },
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body: ["Source Serif 4", "serif"],
        cta: ["Inter", "sans-serif"],
        accent: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        serif: ["Source Serif 4", "serif"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        heading: ["2rem", { lineHeight: "1.3" }],
        subheading: ["1.5rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        brand: "8px",
        "brand-sm": "4px",
        "brand-lg": "12px",
        "brand-xl": "16px",
      },
      boxShadow: {
        brand: "0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
        "brand-lg":
          "0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 15px rgba(0, 0, 0, 0.1)",
        "brand-xl": "0 8px 25px rgba(59, 130, 246, 0.3)",
        glow: "0 0 20px rgba(249, 115, 22, 0.3)",
        "glow-lg": "0 0 40px rgba(249, 115, 22, 0.4)",
      },
      animation: {
        "pulse-accent": "pulse-accent 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-up":
          "float-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        ripple: "ripple 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        progress:
          "progress-fill 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-accent": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "float-up": {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        "progress-fill": {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(249, 115, 22, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.6)" },
        },
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      backdropBlur: {
        brand: "10px",
      },
      zIndex: {
        header: "50",
        sidebar: "40",
        modal: "100",
        tooltip: "110",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("@tailwindcss/line-clamp"),
  ],
};
