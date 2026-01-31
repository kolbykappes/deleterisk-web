# DeleteRisk.com UI Design Guidelines

## Overview

This document outlines the color palette, typography, and design principles for the DeleteRisk.com website. The design language emphasizes **trust, security, and corporate authority** - appropriate for a company that operates in crisis situations where competence and reliability are paramount.

---

## Color Palette

The palette is primarily **Monochromatic Blue**, leaning into shades that suggest reliability and "Big Tech" authority. There are virtually no warm colors, keeping the brand feeling calm, objective, and professional.

### Primary Colors

| Color Role | HEX Code | Tailwind Class | Visual Feel |
|------------|----------|----------------|-------------|
| **Primary Brand Blue** | `#003366` | `brand-500` | Authority, stability, deep "protective" tone |
| **Active Shield Blue** | `#1E4BA3` | `shield-500` | Modern, energetic, tech-forward (CTAs) |
| **Corporate Slate** | `#708090` | `slate-500` | Neutral, professional, sophisticated |
| **Digital Frost** | `#E3F2FD` | `frost-100` | Clean, airy, backgrounds/accents |
| **Pure Contrast** | `#FFFFFF` | `pure` / `white` | Clarity, honesty, high legibility |

### Color Scale Reference

#### Brand Blue Scale (Primary)
```
brand-50:  #e6edf5
brand-100: #ccdaeb
brand-200: #99b5d6
brand-300: #6690c2
brand-400: #336bad
brand-500: #003366  ← Primary Brand Blue
brand-600: #002952
brand-700: #001f3d
brand-800: #001529
brand-900: #000a14
```

#### Shield Blue Scale (CTAs)
```
shield-50:  #e8eef8
shield-100: #d1ddf1
shield-200: #a3bbe3
shield-300: #7599d5
shield-400: #4777c7
shield-500: #1E4BA3  ← Active Shield Blue
shield-600: #183c82
shield-700: #122d62
shield-800: #0c1e41
shield-900: #060f21
```

#### Slate Scale (Neutral)
```
slate-50:  #f4f6f7
slate-100: #e9ecef
slate-200: #d3d9df
slate-300: #bdc6cf
slate-400: #96a3af
slate-500: #708090  ← Corporate Slate
slate-600: #5a6673
slate-700: #434d56
slate-800: #2d333a
slate-900: #161a1d
```

#### Frost Scale (Light Backgrounds)
```
frost-50:  #f8fbfe
frost-100: #E3F2FD  ← Digital Frost
frost-200: #bbdefb
frost-300: #90caf9
frost-400: #64b5f6
frost-500: #42a5f5
```

---

## UI Implementation Strategy

### Backgrounds

Use **Soft Gradients** rather than solid colors to mimic the atmospheric depth of the brand imagery:

- Light sections: Use `frost-100` (#E3F2FD)
- Dark sections: Use `brand-500` (#003366) or gradient from `brand-600` to `brand-500`
- Footer: Use `brand-900` for maximum depth

```css
/* Example gradient backgrounds */
.gradient-frost: linear-gradient(to bottom, #E3F2FD, #d3d9df)
.gradient-brand: linear-gradient(135deg, #003366, #001f3d)
.gradient-shield: radial-gradient(circle at center, #1E4BA3, #003366)
```

### Call to Action (CTA) Buttons

Use **Active Shield Blue** (`shield-500`) for primary buttons:

```css
.btn-primary {
  background: #1E4BA3;
  color: white;
}
.btn-primary:hover {
  background: #183c82;  /* shield-600 */
}
```

Secondary buttons use white/transparent with brand blue borders.

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headlines**: Bold weights (600-800) in `brand-500`
- **Body Text**: Regular weight (400) in `slate-600` or `slate-700`
- **Subheadlines**: Medium weight (500) in `slate-500`

```css
/* Heading styles */
.heading-1 { font-weight: 700; color: #003366; }  /* brand-500 */
.heading-2 { font-weight: 700; color: #003366; }
.heading-3 { font-weight: 600; color: #003366; }

/* Body text */
.body { font-weight: 400; color: #5a6673; }  /* slate-600 */
```

### Icon & Accent Colors

For checkmarks, list bullets, and accent elements:
- Use `shield-500` (#1E4BA3) for interactive elements
- Use `frost-300` for accents on dark backgrounds

**Avoid warm colors** (red, orange, yellow) except for critical error states.

---

## Design Principles

### 1. Cool-Toned Palette
There are virtually no warm colors in the design. This keeps the brand feeling:
- **Calm** - Not urgent or aggressive
- **Objective** - Factual and trustworthy
- **Low-friction** - Easy to engage with

### 2. High Contrast
White text against dark blue elements ensures:
- **Readability** - Clear at any size
- **Accessibility** - WCAG AA compliant
- Critical for a brand focused on "Your Worst Day"

### 3. Gradient-Driven
The shield uses subtle radial gradients, adding:
- **Depth** - 3D metallic feel
- **Tangibility** - More "armored" than flat design
- Professional polish

### 4. Corporate Imagery Style
The design utilizes **Abstract Tech-Corporate** imagery:
- The "Digital City" - Blurred skylines representing broad business environments
- Data visualization overlays - Network nodes signaling technical sophistication
- Symbolic iconography - Universal shortcuts for security and protection
- Minimalist futurity - Clean and organized, suggesting order from chaos

---

## Section Color Mapping

| Section | Background | Text Color | Accent Color |
|---------|------------|------------|--------------|
| Navigation | `white` | `slate-600` | `brand-500` |
| Hero | `brand-500` → `brand-900` gradient | `white` / `frost-200` | `frost-300` |
| Problem | `frost-100` | `brand-500` / `slate-600` | `shield-500` |
| Services | `white` | `brand-500` / `slate-600` | `shield-500` |
| How We Work | `brand-500` | `white` / `frost-200` | `frost-300` |
| Who We Serve | `frost-100` | `brand-500` / `slate-600` | `shield-500` |
| Why Delete Risk | `white` | `brand-500` / `slate-600` | `shield-500` |
| Team | `frost-100` | `brand-500` / `slate-600` | `shield-500` |
| Contact | `brand-500` | `white` / `frost-200` | `shield-500` |
| Footer | `brand-900` | `slate-400` / `white` | N/A |

---

## Component Quick Reference

### Buttons
```jsx
// Primary CTA
<button className="btn-primary">Get Started</button>
// Uses: bg-shield-500, hover:bg-shield-600, text-white

// Secondary
<button className="btn-secondary">Learn More</button>
// Uses: bg-white, border-brand-500, text-brand-500
```

### Cards
```jsx
// Light background card
<div className="bg-frost-100 border border-slate-200 rounded-xl">

// Dark background card
<div className="bg-brand-600 border border-brand-400 rounded-xl">
```

### Section Headers
```jsx
<h2 className="heading-2 text-brand-500">Section Title</h2>
<p className="body-large text-slate-600">Supporting text...</p>
```

### Checkmarks / List Items
```jsx
<svg className="text-shield-500">...</svg>  // On light backgrounds
<svg className="text-frost-300">...</svg>   // On dark backgrounds
```

---

## Accessibility Notes

1. **Color Contrast**: All text/background combinations meet WCAG AA minimum (4.5:1 for body, 3:1 for large text)
2. **Focus States**: Use `ring-brand-500` or `ring-shield-500` for focus indicators
3. **Error States**: Use standard `red-500` / `red-600` for form validation errors

---

## File Locations

- Tailwind config: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component files: `components/*.tsx`

---

*Last updated: January 2026*
