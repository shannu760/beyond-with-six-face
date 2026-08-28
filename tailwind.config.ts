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
        olive: {
          primary: "#556B2F",
          deep: "#6B7A3A",
          dark: "#28301D",
          muted: "#6F735F",
          accent: "#8A9A5B",
          DEFAULT: "#556B2F",
        },
        beige: {
          warm: "#F3EBDD",
          soft: "#E8DDC8",
          light: "#FAF7EF",
          DEFAULT: "#F3EBDD",
        },
        brand: {
          dark: "#28301D",
          muted: "#6F735F",
          light: "#FAF7EF",
          bg: "#F3EBDD",
          bgSoft: "#E8DDC8",
          olive: "#556B2F",
          oliveDeep: "#6B7A3A",
        }
      },
      fontFamily: {
        sans: ["var(--font-lexend)", "Inter", "-apple-system", "sans-serif"],
        display: ["var(--font-lexend)", "Inter", "sans-serif"],
      },
      borderRadius: {
        "card": "16px",
        "pill": "9999px",
      },
      boxShadow: {
        "olive-glow": "0 8px 30px rgba(85, 107, 47, 0.25)",
        "soft-shadow": "0 10px 40px -10px rgba(40, 48, 29, 0.08)",
        "card-hover": "0 20px 40px -15px rgba(85, 107, 47, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
