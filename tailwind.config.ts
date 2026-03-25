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
        amoraas: {
          midnight: "#3F0429",
          wine: "#620E2C",
          green: "#09381F",
          mauve: "#944264",
          rose: "#F5BCC1",
          creme: "#F9F5EB",
          coffee: "#2B1B17",
        },
      },
      fontFamily: {
        spectral: ["var(--font-spectral)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
        signature: ["'Pinyon Script'", "cursive"], // Fallback for Hello Paris
      },
    },
  },
  plugins: [],
};
export default config;
