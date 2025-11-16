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
          primary: "#945139",    // Terracotta - CMYK: 27,77,86,19
          accent: "#ef9f59",     // Peach - CMYK: 4,43,73,01
          dark: "#7f252c",       // Deep maroon - CMYK: 31,93,78,35
          secondary: "#3d2021",  // Dark brown - CMYK: 52,76,65,67
          sage: "#738472",       // Sage green - CMYK: 57,36,56,10
          teal: "#264b59",       // Teal - CMYK: 87,60,46,32
          slate: "#575d68",      // Slate - CMYK: 67,56,45,22
          light: "#faf8f5",      // Warm off-white (background)
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
