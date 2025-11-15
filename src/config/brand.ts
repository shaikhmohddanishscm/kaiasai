/**
 * ikai Asai Brand Configuration
 * Centralized brand identity settings for consistent branding
 */

export const brandConfig = {
  name: 'ikai Asai',
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
    primary: '#945139',    // Terracotta - main brand color
    secondary: '#3d2021',  // Dark brown - text/headers
    accent: '#ef9f59',     // Peach - warm accent
    light: '#faf8f5',      // Warm off-white - backgrounds
    dark: '#7f252c',       // Deep maroon - dark accents
    sage: '#738472',       // Sage green - natural tone
    teal: '#264b59',       // Teal - cool complement
  },
  
  typography: {
    headings: 'font-nunito font-bold',
    body: 'font-nunito',
    accents: 'font-nunito-sans',
  },
} as const;

export type BrandConfig = typeof brandConfig;
