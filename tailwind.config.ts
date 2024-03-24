import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        richPrimary: '#0D0D0D', // Deep black or dark color for the background
        richAccent: '#B6862C', // Gold or similar for accents and hover states
        richAccentHover: '#D4AF37', // A lighter gold for hover effects
      },
    },
  },
  plugins: [],
  mode: 'jit'
};
export default config;
