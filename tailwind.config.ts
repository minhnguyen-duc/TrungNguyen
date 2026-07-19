import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F5",
        ink: "#2B2B2B",
        muted: "#6F6B66",
        amber: "#C49A6C",
        hairline: "#EAE6E1",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        prose: "42rem",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "100%": { transform: "translate3d(-12px, 40px, 0) rotate(12deg)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite alternate",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(43,43,43,0.06), 0 8px 24px rgba(43,43,43,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
