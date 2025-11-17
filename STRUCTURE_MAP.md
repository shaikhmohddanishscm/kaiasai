# Ikai Asai Website Structure

## Homepage Layout (page.tsx)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  🎯 Hero Section                                    │
│  - Logo, Tagline, Heading, CTA Buttons            │
│  - Background: Image with overlay                  │
│  - Colors: brand-primary, brand-secondary          │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ✨ Features Section                               │
│  - 4 Features in Grid                             │
│  - Icons: 🏺 🌿 ✨ 🎨                               │
│  - Background: brand-light                         │
│  - Colors: primary, sage, teal, accent            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📖 About Section                                   │
│  - Brand Story + Craft Regions                    │
│  - 2-column layout with image                     │
│  - Background: brand-light                         │
│  - Colors: primary, accent borders                │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🏪 Categories Section                              │
│  - 6 Product Categories in Grid                   │
│  - Categories: Dinnerware, Serveware, Barware,   │
│    Table Linen, Décor, Drinkware                  │
│  - Background: White                               │
│  - Hover: Scale + Arrow animations                │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🎨 Crafts Section                                  │
│  - 4 Indian Crafts Showcase                       │
│  - Crafts: Terracotta, Kansa, Longpi, Glasswork  │
│  - Background: White                               │
│  - Image overlays with descriptions                │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📊 Stats Section                                   │
│  - 4 Statistics in Row                            │
│  - Stats: 500+ Artisans, 15+ Crafts,             │
│    10K+ Customers, 12 States                      │
│  - Background: brand-secondary/dark                │
│  - White text with colored numbers                │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📝 Blog Section                                    │
│  - Featured Blog Posts                            │
│  - (Existing component)                            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  💬 Testimonials Section                            │
│  - 3 Customer Reviews                             │
│  - 5-star ratings                                  │
│  - Background: brand-light                         │
│  - White cards with primary borders               │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📧 Newsletter Section                              │
│  - Email Subscription Form                         │
│  - Background: brand-primary                       │
│  - White text + decorative patterns               │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🦶 Footer                                          │
│  - (Existing component)                            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Component File Structure

```
src/components/
├── Brand Components
│   ├── Logo.tsx
│   ├── BrandButton.tsx
│   └── BrandHeading.tsx
│
├── Layout Components
│   ├── Container.tsx
│   ├── Section.tsx
│   ├── ScrollToTop.tsx
│   └── Header.tsx
│
└── Page Sections
    ├── Hero.tsx (existing)
    ├── FeaturesSection.tsx ⭐ NEW
    ├── AboutSection.tsx (existing)
    ├── CategoriesSection.tsx ⭐ NEW
    ├── CraftsSection.tsx ⭐ NEW
    ├── StatsSection.tsx ⭐ NEW
    ├── BlogSection.tsx (existing)
    ├── TestimonialsSection.tsx ⭐ NEW
    ├── NewsletterSection.tsx ⭐ NEW
    └── Footer.tsx (existing)
```

## Color Flow Through Sections

```
Hero              → Primary/Secondary on light background
  ↓
Features          → Light background with colored accents
  ↓
About             → Light background with primary/accent
  ↓
Categories        → White background with image overlays
  ↓
Crafts            → White background with colored highlights
  ↓
Stats             → Dark background (secondary/dark) with white text
  ↓
Blog              → Varies (existing component)
  ↓
Testimonials      → Light background with white cards
  ↓
Newsletter        → Primary background with white text
  ↓
Footer            → Dark (existing)
```

## Responsive Breakpoints

### Mobile (default)
- Single column layouts
- Smaller padding (py-16)
- Stacked elements
- Full-width images

### Tablet (md: 768px+)
- 2-column grids
- Medium padding (py-24)
- Side-by-side content
- Optimized image sizes

### Desktop (lg: 1024px+)
- 3-4 column grids
- Maximum width containers
- Full feature display
- Enhanced hover effects

## Key Features by Section

### FeaturesSection
- **Grid**: 1 → 2 → 4 columns
- **Hover**: Shadow + scale on icon
- **Icons**: Emoji-based
- **CTA**: None (informational)

### CategoriesSection
- **Grid**: 1 → 2 → 3 columns
- **Hover**: Scale image + show arrow
- **Links**: Category pages
- **Aspect**: Square cards

### CraftsSection
- **Grid**: 1 → 2 columns
- **Hover**: Scale image only
- **CTA**: "Explore All Crafts" button
- **Height**: Fixed 256px images

### TestimonialsSection
- **Grid**: 1 → 3 columns
- **Rating**: 5-star display
- **Cards**: White with top border
- **Content**: Quote + author

### NewsletterSection
- **Layout**: Centered single column
- **Form**: Email + submit button
- **Background**: Primary color
- **Decoration**: Circular patterns

### StatsSection
- **Grid**: 2 → 4 columns
- **Numbers**: Large, colored
- **Background**: Dark
- **Text**: White

## Animation Timings

- **Quick**: 200ms (button states)
- **Standard**: 300ms (most hovers)
- **Smooth**: 500ms (image scales)

## Shadow Hierarchy

- **Base**: No shadow
- **Card**: `shadow-md`
- **Hover**: `shadow-xl`
- **Elevated**: Custom shadows

## Border Styles

- **Subtle**: `border-brand-primary/10`
- **Normal**: `border-brand-primary/20`
- **Hover**: `border-brand-primary/30`
- **Accent**: `border-brand-primary` (solid)

---

**Component Count**: 6 new sections
**Total Sections**: 10 on homepage
**Color Consistency**: 100% brand-compliant
**Responsive**: Mobile-first, 3 breakpoints
