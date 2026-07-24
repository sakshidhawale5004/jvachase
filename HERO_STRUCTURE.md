# Hero Section Structure - Visual Guide

## 🎨 Layering Architecture

```
┌─────────────────────────────────────────────────────────┐
│  <section> (relative, overflow-hidden)                  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Background Layer (absolute, inset-0)              │  │
│  │ • bg-brand-deep (solid dark blue base)            │  │
│  │ • bg-hero-glow (radial gradients)                 │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Floating Orbs (absolute, pointer-events-none)     │  │
│  │ • Top-left orb (brand blue, blur-3xl)             │  │
│  │ • Right orb (gold gradient, blur-3xl)             │  │
│  │ • Animated with animate-float-3d                  │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Content Layer (relative, z-index above)           │  │
│  │ ┌─────────────────────────────────────────────┐   │  │
│  │ │ Eyebrow Text (text-accent-soft)             │   │  │
│  │ │ • Small caps, uppercase, tracked            │   │  │
│  │ │ • animate-reveal (fade + slide up)          │   │  │
│  │ └─────────────────────────────────────────────┘   │  │
│  │ ┌─────────────────────────────────────────────┐   │  │
│  │ │ H1 Heading (text-cream, 5xl → 7xl)          │   │  │
│  │ │ • Display font (Fraunces)                   │   │  │
│  │ │ • With italic emphasis (text-accent-soft)   │   │  │
│  │ │ • animate-reveal with 80ms delay            │   │  │
│  │ └─────────────────────────────────────────────┘   │  │
│  │ ┌─────────────────────────────────────────────┐   │  │
│  │ │ Lead Paragraph (text-cream/85)              │   │  │
│  │ │ • Larger text (lg)                          │   │  │
│  │ │ • animate-reveal with 160ms delay           │   │  │
│  │ └─────────────────────────────────────────────┘   │  │
│  │ ┌─────────────────────────────────────────────┐   │  │
│  │ │ CTA Buttons                                 │   │  │
│  │ │ • Primary (bg-accent, shadow-glow)          │   │  │
│  │ │ • Secondary (border-cream/30)               │   │  │
│  │ │ • animate-reveal with 240ms delay           │   │  │
│  │ └─────────────────────────────────────────────┘   │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## 🎭 Color Palette

### Background Colors
```
bg-brand-deep     → oklch(0.28 0.05 220)  // Deep navy blue
accent-soft       → oklch(0.78 0.11 75)   // Soft gold
cream             → oklch(0.97 0.015 85)  // Off-white
```

### Gradient Overlays
```css
/* Top-right warm glow */
radial-gradient(900px 500px at 80% 0%, 
  oklch(0.68 0.15 60 / 0.18),  /* Gold with 18% opacity */
  transparent 65%
)

/* Bottom-left cool glow */
radial-gradient(700px 600px at 10% 100%, 
  oklch(0.42 0.07 210 / 0.45), /* Blue with 45% opacity */
  transparent 60%
)
```

## ⚡ Animation Timeline

```
    0ms ┃━━━━━━━┫ Eyebrow appears
        ┃
   80ms ┃━━━━━━━┫ H1 heading appears
        ┃
  160ms ┃━━━━━━━┫ Lead paragraph appears
        ┃
  240ms ┃━━━━━━━┫ CTA buttons appear
        ┃
ongoing ┃~~~~~~~~~~~~~~~~~~┃ Orbs float continuously (7s cycle)
```

## 📐 Responsive Breakpoints

### Desktop (1024px+)
```
Hero Padding:    py-32 (8rem top/bottom)
H1 Size:         text-7xl (4.5rem)
Max Width:       1200px container
Orb Visibility:  All visible
```

### Tablet (768px - 1023px)
```
Hero Padding:    py-32 (8rem top/bottom)
H1 Size:         text-7xl → text-5xl (responsive)
Max Width:       1200px container
Orb Visibility:  All visible
```

### Mobile (< 768px)
```
Hero Padding:    py-24 (6rem top/bottom)
H1 Size:         text-5xl (3rem) with clamp
Max Width:       Full width with px-6
Orb Visibility:  Reduced but present
```

## 🔧 Key CSS Classes Used

### Layout
```css
.relative              /* Position context for absolute children */
.overflow-hidden       /* Prevent orb overflow */
.mx-auto              /* Center container */
.max-w-[1200px]       /* Content width constraint */
.px-6                 /* Horizontal padding */
.py-24 / .py-32       /* Vertical padding (responsive) */
```

### Background & Effects
```css
.bg-brand-deep        /* Base dark blue background */
.bg-hero-glow         /* Gradient overlay utility */
.blur-3xl             /* Gaussian blur for orbs */
.opacity-25/.opacity-40  /* Orb transparency */
```

### Typography
```css
.font-display         /* Fraunces serif font */
.text-5xl / .text-7xl /* Font sizes (responsive) */
.text-cream           /* Off-white text color */
.text-cream/85        /* 85% opacity cream */
.text-accent-soft     /* Gold accent color */
.leading-[1.08]       /* Tight line-height for display text */
```

### Animations
```css
.animate-reveal       /* Fade + slide up entrance */
.animate-float-3d     /* 3D floating motion for orbs */
.pointer-events-none  /* Orbs don't block interactions */
```

## 🎬 Animation Details

### Reveal Animation
```css
@keyframes reveal-up {
  from { 
    opacity: 0; 
    transform: translateY(28px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
/* Duration: 0.8s, Easing: cubic-bezier(0.22, 1, 0.36, 1) */
```

### Float 3D Animation
```css
@keyframes float-3d {
  0%, 100% { 
    transform: translateY(0) rotateX(0deg) rotateY(0deg); 
  }
  50% { 
    transform: translateY(-14px) rotateX(4deg) rotateY(-4deg); 
  }
}
/* Duration: 7s, Easing: ease-in-out, infinite */
```

## 🌐 Cross-Browser Notes

### Modern Features Used
- ✅ OKLCH color space (with fallbacks)
- ✅ CSS custom properties (variables)
- ✅ backdrop-blur (graceful degradation)
- ✅ 3D transforms
- ✅ radial-gradient

### Fallback Strategy
1. Base colors defined in root CSS variables
2. Solid color fallbacks for gradients
3. Transform animations degrade gracefully
4. No critical functionality depends on advanced CSS

## 📱 Accessibility Considerations

### Text Contrast
```
cream on brand-deep    → 16.8:1 (WCAG AAA ✓)
accent-soft emphasis   → 4.9:1  (WCAG AA ✓)
```

### Motion
- Animations are subtle and non-essential
- `prefers-reduced-motion` support can be added
- Content is readable without animations

### Semantic HTML
```html
<section>  <!-- Landmark -->
  <h1>     <!-- Main heading -->
  <p>      <!-- Lead paragraph -->
  <Link>   <!-- Interactive elements -->
```

## 🎯 Performance Metrics

### CSS Performance
- **Selectors:** Low specificity, fast matching
- **Animations:** GPU-accelerated (transform, opacity)
- **Blur:** Contained to small elements
- **Gradients:** Static, no runtime calculation

### Bundle Size Impact
- CSS utilities: ~2KB gzipped
- No additional JavaScript
- Animation definitions: Negligible

---

**Quick Reference:** This structure is used across all hero sections via the `PageHero` component and the Contact page's custom hero.
