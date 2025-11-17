/**
 * Ikai Asai Brand Configuration
 * Centralized brand identity settings for consistent branding
 */

export const brandConfig = {
  name: 'Ikai Asai',
  shortName: 'IA',
  tagline: 'Where tradition meets contemporary living',
  
  logos: {
    main: '/logos/IA-logo.png',
    white: '/logos/IA_All_Logos-01-white.png',
    standard: '/logos/IA_All_Logos-01.png',
    variant2: '/logos/IA_All_Logos-02.png',
    variant3: '/logos/IA_All_Logos-03.png',
    jpg: '/logos/logo.jpg',
    // AI source file available at: /logos/IA_All_Logos.ai
  },
  
  fonts: {
    primary: 'var(--font-nunito)',
    secondary: 'var(--font-nunito-sans)',
    // Available weights:
    // Nunito: 300 (Light), 400 (Regular), 700 (Bold)
    // Nunito Sans: 400 (Italic), 700 (Bold)
  },
  
  colors: {
    // Brand colors from /brand-colors.jpg
    primary: '#945139',    // Terracotta - CMYK: 27,77,86,19 | RGB: 148,81,57
    accent: '#ef9f59',     // Peach - CMYK: 4,43,73,01 | RGB: 239,159,89
    dark: '#7f252c',       // Deep maroon - CMYK: 31,93,78,35 | RGB: 127,37,44
    secondary: '#3d2021',  // Dark brown - CMYK: 52,76,65,67 | RGB: 161,32,33
    sage: '#738472',       // Sage green - CMYK: 57,36,56,10 | RGB: 115,132,114
    teal: '#264b59',       // Teal - CMYK: 87,60,46,32 | RGB: 38,75,89
    slate: '#575d68',      // Slate - CMYK: 67,56,45,22 | RGB: 87,93,104
  },
  
  typography: {
    headings: 'font-nunito font-bold',
    body: 'font-nunito',
    accents: 'font-nunito-sans',
  },
} as const;

export type BrandConfig = typeof brandConfig;
