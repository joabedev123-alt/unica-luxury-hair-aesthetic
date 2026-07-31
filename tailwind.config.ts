import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          richBlack: "#0B0B0B",
          softBlack: "#141414",
          darkCharcoal: "#1D1D1D",
          metallicGold: "#C9A14A",
          champagneGold: "#D8B86A",
          deepGold: "#9C762C",
          warmIvory: "#F4EFE6",
          softCream: "#E9E0D2",
          mutedGray: "#A6A6A6",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #8C6725 0%, #D9B966 35%, #F1DB94 50%, #B88A36 75%, #76521C 100%)",
        "gold-gradient-soft": "linear-gradient(135deg, rgba(201,161,74,0.15) 0%, rgba(216,184,106,0.05) 50%, rgba(156,118,44,0.15) 100%)",
        "dark-radial": "radial-gradient(circle at center, rgba(29,29,29,0.8) 0%, rgba(5,5,5,0.98) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(201, 161, 74, 0.25)",
        "gold-glow-lg": "0 0 40px rgba(201, 161, 74, 0.35)",
        "luxury-card": "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
