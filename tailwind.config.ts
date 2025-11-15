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
        // ikai Asai Brand Colors
        brand: {
          primary: "#1a1a1a", // Update with actual brand color
          secondary: "#4a4a4a", // Update with actual brand color
          accent: "#ff6b35", // Update with actual brand color
          light: "#f5f5f5",
          dark: "#0a0a0a",
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
