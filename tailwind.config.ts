import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft, modern slate neutral (used for text + subtle tints)
        navy: {
          50: "#f8f9fa",
          100: "#eef0f2",
          200: "#dde0e4",
          300: "#c2c7ce",
          400: "#969ca6",
          500: "#6f757f",
          600: "#535862",
          700: "#3f444d",
          800: "#2b2f36",
          900: "#1c1f24",
          950: "#121418",
        },
        // Warm editorial off-white tints
        sand: {
          50: "#faf8f4",
          100: "#f3efe7",
          200: "#e8e1d4",
        },
        // Muted sage accent
        gold: {
          50: "#f2f7f4",
          100: "#e0ece5",
          200: "#c3d9cd",
          300: "#9bbfaa",
          400: "#6f9d84",
          500: "#4f7d65",
          600: "#3d6450",
          700: "#325041",
          800: "#2a4136",
          900: "#24362d",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
