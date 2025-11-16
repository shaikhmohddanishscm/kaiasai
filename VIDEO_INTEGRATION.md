# Video Integration Guide - ikai Asai

## Video Asset
**Location**: `/public/video/80df6667a77d4b76b61ce68da3ad6b60.mp4`

---

## Implementation Options

### 1. VideoShowcaseSection Component ⭐ (Currently Active)
**Location**: `src/components/VideoShowcaseSection.tsx`

**Features**:
- Dedicated full-width video section
- Dark background (brand-secondary)
- Decorative corner accents in brand-accent color
- Controls enabled for user interaction
- Responsive design with proper mobile support
- Caption below video

**Usage**:
```tsx
import { VideoShowcaseSection } from '@/components';
<VideoShowcaseSection />
```

**Currently placed**: Between CraftsSection and StatsSection

**Styling**:
- Background: `brand-secondary` with `brand-dark` overlay
- Border: `brand-accent` with decorative corners
- Text: White with proper opacity
- Responsive padding: `py-12` → `py-16` → `py-24`

---

### 2. AboutSection with Video ⭐ (Currently Active)
**Location**: `src/components/AboutSection.tsx`

**Changes Made**:
- Replaced static image with video element
- Video properties:
  - `controls`: Enabled
  - `playsInline`: Mobile-friendly
  - `muted`: Auto-play ready
  - `loop`: Continuous playback
  - `preload="metadata"`: Fast loading

**Styling**:
- Border: `border-brand-primary/20`
- Shadow: `shadow-lg`
- Rounded corners: `rounded-lg`
- Fully responsive

---

### 3. HeroWithVideo Component (Optional)
**Location**: `src/components/HeroWithVideo.tsx`

**Features**:
- Video background instead of static image
- Auto-plays on load
- Muted and looped
- Same overlay treatment as current Hero
- Maintains all brand styling

**To Use**: Replace `Hero` with `HeroWithVideo` in `page.tsx`

```tsx
// Current
import { Hero } from '@/components';
<Hero />

// With Video Background
import { HeroWithVideo } from '@/components';
<HeroWithVideo />
```

**Video Properties**:
- `autoPlay`: Starts automatically
- `loop`: Continuous playback
- `muted`: Required for autoplay
- `playsInline`: Mobile compatibility
- `opacity-40`: Subtle background effect

---

## Current Homepage Layout

```
1. Hero (static image)
2. FeaturesSection
3. AboutSection (with video) ⭐
4. CategoriesSection
5. CraftsSection
6. VideoShowcaseSection ⭐ NEW
7. StatsSection
8. BlogSection
9. TestimonialsSection
10. NewsletterSection
```

---

## Video Specifications

### Technical Details
- Format: MP4
- Location: `/public/video/`
- Served statically from Next.js public folder
- No special video streaming setup required

### Performance Optimizations
- `preload="metadata"`: Loads only metadata initially
- Responsive: Scales with container
- Mobile-optimized: `playsInline` attribute
- Lazy loading: Only loads when section is visible

### Browser Compatibility
- ✅ Chrome/Edge: Full support
- ✅ Safari: Full support
- ✅ Firefox: Full support
- ✅ Mobile browsers: Full support with `playsInline`

---

## Customization Options

### VideoShowcaseSection

**Change background colors**:
```tsx
// Current: brand-secondary
className="bg-brand-secondary"

// Options:
className="bg-brand-primary"    // Terracotta
className="bg-brand-dark"       // Deep maroon
className="bg-brand-teal"       // Teal
```

**Change border accent**:
```tsx
// Current: brand-accent
className="border-brand-accent/30"

// Options:
className="border-brand-primary/30"
className="border-brand-teal/30"
```

**Add autoplay to showcase video**:
```tsx
<video
  autoPlay
  muted
  loop
  controls
  playsInline
  preload="metadata"
>
```

### AboutSection Video

**Make video autoplay**:
```tsx
<video
  autoPlay
  controls
  playsInline
  muted
  loop
  preload="metadata"
>
```

**Remove controls** (let it play as background):
```tsx
<video
  autoPlay
  playsInline
  muted
  loop
  preload="metadata"
  // Remove 'controls' attribute
>
```

---

## Mobile Optimization

### VideoShowcaseSection
- ✅ Responsive container sizing
- ✅ Proper padding: `px-4`
- ✅ Text scales: `text-base` → `text-lg`
- ✅ Heading scales: `text-2xl` → `text-4xl`
- ✅ Video maintains aspect ratio
- ✅ Touch-friendly controls

### AboutSection Video
- ✅ Responsive width: `w-full`
- ✅ Auto height: `h-auto`
- ✅ Mobile-friendly controls
- ✅ Proper border and shadow
- ✅ Integrated with existing layout

### HeroWithVideo
- ✅ Same responsive design as Hero
- ✅ Video covers full background
- ✅ Proper overlay for text readability
- ✅ Auto-plays on mobile (muted)
- ✅ All touch targets maintained

---

## Accessibility

- ✅ Fallback text: "Your browser does not support the video tag"
- ✅ Controls available for user control
- ✅ Muted by default (where autoplay is used)
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy maintained

---

## Future Enhancements

### Option 1: Add Multiple Videos
Create a video gallery section with multiple craft videos:
```tsx
const craftVideos = [
  { title: 'Pottery Making', video: '/video/pottery.mp4' },
  { title: 'Weaving', video: '/video/weaving.mp4' },
  { title: 'Metalwork', video: '/video/metal.mp4' },
];
```

### Option 2: Video Modal/Lightbox
Click to expand video to fullscreen:
```tsx
import { useState } from 'react';
const [isVideoOpen, setIsVideoOpen] = useState(false);
```

### Option 3: Video Thumbnail Gallery
Create a grid of video thumbnails with play on click

### Option 4: Background Video Sections
Use video as background for other sections (CraftsSection, CategoriesSection)

---

## Switching Between Hero Versions

**Current Setup** (Static Image):
```tsx
// src/app/page.tsx
import { Hero } from "@/components";
<Hero />
```

**To Use Video Background**:
```tsx
// src/app/page.tsx
import { HeroWithVideo } from "@/components";
<HeroWithVideo />
```

**To Use Both** (uncomment one):
```tsx
{/* Option 1: Static Image */}
{/* <Hero /> */}

{/* Option 2: Video Background */}
<HeroWithVideo />
```

---

## Brand Consistency

All video implementations maintain:
- ✅ Brand color palette
- ✅ Typography (Nunito, Nunito Sans)
- ✅ Spacing system
- ✅ Border and shadow styles
- ✅ Responsive design patterns
- ✅ Hover and interaction states

---

**Video Integration Completed**: November 16, 2025
**Components Created**: 2 new (VideoShowcaseSection, HeroWithVideo)
**Components Updated**: 1 (AboutSection)
**Total Video Placements**: 3 options available
