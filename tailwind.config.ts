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
        // ikai Asai Brand Colors - from brand-colors.jpg
        brand: {
          primary: "#945139",    // Terracotta
          secondary: "#3d2021",  // Dark brown
          accent: "#ef9f59",     // Peach
          light: "#faf8f5",      // Warm off-white
          dark: "#7f252c",       // Deep maroon
          sage: "#738472",       // Sage green
          teal: "#264b59",       // Teal
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        'nunito': ['var(--font-nunito)', 'sans-serif'],
        'nunito-sans': ['var(--font-nunito-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
