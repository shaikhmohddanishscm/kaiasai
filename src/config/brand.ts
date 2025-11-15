/**
 * ikai Asai Brand Configuration
 * Centralized brand identity settings for consistent branding
 */

export const brandConfig = {
  name: 'ikai Asai',
  shortName: 'IA',
  tagline: 'Your brand tagline here',
  
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
    // Brand color reference: /brand-colors.jpg
    // Update these values with actual brand colors from the JPG
    primary: '#1a1a1a',
    secondary: '#4a4a4a',
    accent: '#ff6b35',
    light: '#f5f5f5',
    dark: '#0a0a0a',
  },
  
  typography: {
    headings: 'font-nunito font-bold',
    body: 'font-nunito',
    accents: 'font-nunito-sans',
  },
} as const;

export type BrandConfig = typeof brandConfig;
