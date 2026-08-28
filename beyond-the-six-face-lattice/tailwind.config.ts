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
        beige: {
          DEFAULT: "#E8DCC3",
          light: "#F0E6D2",
          dark: "#D9CAA8",
          50: "#F8F4EC",
          100: "#F3EBDD",
          200: "#E8DCC3",
          300: "#D9CAA8",
          400: "#C9B88D",
        },
        cream: "#F3EBDD",
        olive: {
          DEFAULT: "#3D4425",
          deep: "#3D4425",
          dark: "#252B18",
          muted: "#4A5230",
          sage: "#69704A",
          black: "#11160D",
        },
        gold: {
          DEFAULT: "#C8A95B",
          soft: "rgba(200, 169, 91, 0.15)",
          glow: "rgba(200, 169, 91, 0.4)",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        accent: ["Cormorant Garamond", "Georgia", "serif"],
      },
      fontSize: {
        "hero-xl": ["clamp(4rem, 7vw, 7.5rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "hero-lg": ["clamp(3rem, 5vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "section-title": ["clamp(2rem, 3.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "section-subtitle": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.7", letterSpacing: "0.005em" }],
      },
      spacing: {
        "section": "clamp(80px, 10vw, 140px)",
        "section-sm": "clamp(48px, 6vw, 80px)",
        "container": "clamp(24px, 4vw, 80px)",
        "18": "4.5rem",
        "22": "5.5rem",
      },
      maxWidth: {
        "container": "1400px",
        "content": "860px",
        "narrow": "640px",
      },
      borderRadius: {
        "card": "12px",
        "card-lg": "16px",
        "pill": "9999px",
      },
      boxShadow: {
        "card": "0 4px 24px -4px rgba(37, 43, 24, 0.08)",
        "card-hover": "0 16px 48px -8px rgba(37, 43, 24, 0.15)",
        "glow-gold": "0 0 20px 4px rgba(200, 169, 91, 0.15)",
        "glow-olive": "0 0 20px 4px rgba(61, 68, 37, 0.1)",
        "inner-bevel": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.2)",
        "btn-hover": "0 8px 32px -8px rgba(37, 43, 24, 0.4)",
      },
      backgroundImage: {
        "gradient-beige": "linear-gradient(180deg, #E8DCC3 0%, #F3EBDD 100%)",
        "gradient-olive": "linear-gradient(180deg, #252B18 0%, #11160D 100%)",
        "gradient-gold": "linear-gradient(135deg, rgba(200, 169, 91, 0.15), transparent 60%)",
        "gradient-portal": "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200, 169, 91, 0.08), transparent 70%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "spin-reverse": "spin-reverse 25s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
