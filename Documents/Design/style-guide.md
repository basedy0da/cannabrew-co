# Brew Coffee — Style Guide

> Reference: `Documents/Design/image1.webp`  
> Stack: Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS v4 · Geist fonts  
> Tokens: `Documents/Design/tokens.css`

---

## 1. Brand Identity

Brew Coffee is a premium, modern coffee brand. The visual language is warm but confident — earthy greens and creams grounded in nature, energised by a golden accent that pops against dark backgrounds. Everything feels artisanal yet approachable.

**Personality keywords**: artisanal · bold · warm · fresh · trustworthy

---

## 2. Color

### Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-green-700` | `#1a4d34` | Primary CTA buttons, hero overlay, nav background |
| `--color-brand-green-800` | `#143d29` | Button hover, active states |
| `--color-accent-gold-400` | `#e8c93a` | Highlight text, decorative accents, icon fills |
| `--color-accent-gold-500` | `#ddb012` | Gold hover state |
| `--color-cream-100` | `#f7f2e8` | Page background |
| `--color-cream-200` | `#f0e9d8` | Card background tint, section dividers |
| `--color-surface` | `#ffffff` | Cards, modals, inputs |
| `--color-foreground` | `#1a1a1a` | Primary body text |
| `--color-foreground-muted` | `#5a5a5a` | Secondary/supporting text |
| `--color-foreground-subtle` | `#8a8a8a` | Placeholder, meta text |

### Usage rules

- **Never** put gold text on a cream background — contrast is insufficient (WCAG AA fails).
- Gold is used exclusively as a *highlight* or *decoration*: section labels, callout text on dark green surfaces, star ratings.
- Primary green surfaces always use white (`--color-foreground-inverse`) for text.
- Dark mode: invert cream ↔ dark (`#0a0a0a`), keep green and gold intact.

### Color in context

```
Hero section:      bg-brand-green-700  text-white  accent: gold-400
Page background:   bg-cream-100
Cards:             bg-surface  border-border  shadow-md
Section dividers:  bg-cream-200
CTA primary:       bg-brand-green-700  hover:bg-brand-green-800  text-white
CTA secondary:     bg-transparent  border-brand-green-700  text-brand-green-700
Accent callout:    text-accent-gold-400  on bg-brand-green-700
```

---

## 3. Typography

### Typefaces

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero | Playfair Display | 700–900 | Large hero headings ("Coffee Break") |
| UI headings | Geist Sans | 600–700 | Section titles, card headings |
| Body text | Geist Sans | 400–500 | Paragraphs, labels, nav |
| Mono / code | Geist Mono | 400 | Prices, numeric data, tags |

> Geist Sans and Geist Mono are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`.  
> Playfair Display must be added separately (add to layout.tsx imports).

### Type scale

| Name | Size | Line height | Weight | Usage |
|---|---|---|---|---|
| `display-2xl` | 6rem (96px) | 1.0 | 900 | Full-bleed hero (mobile: scale to 4xl) |
| `display-xl` | 4.5rem (72px) | 1.05 | 800 | Above-fold headlines |
| `display-lg` | 3.75rem (60px) | 1.1 | 700 | Section hero titles |
| `display-md` | 3rem (48px) | 1.15 | 700 | Feature section headings |
| `heading-xl` | 2.25rem (36px) | 1.2 | 700 | Page titles |
| `heading-lg` | 1.875rem (30px) | 1.25 | 600 | Section headings |
| `heading-md` | 1.5rem (24px) | 1.3 | 600 | Card titles, modal headings |
| `heading-sm` | 1.25rem (20px) | 1.35 | 600 | Subsection headings |
| `body-lg` | 1.125rem (18px) | 1.65 | 400 | Intro paragraphs |
| `body-md` | 1rem (16px) | 1.6 | 400 | Default body copy |
| `body-sm` | 0.875rem (14px) | 1.55 | 400 | Supporting text, labels |
| `caption` | 0.75rem (12px) | 1.5 | 400–500 | Meta, timestamps, captions |
| `overline` | 0.75rem (12px) | 1 | 600 | LETTER-SPACING: 0.15em, ALL-CAPS section labels |

### Rules

- Hero display text uses **letter-spacing: -0.025em to -0.05em** (tighter at larger sizes).
- Section overlines (e.g. "EXPLORE OUR MENU /2025") use **letter-spacing: 0.15em**, uppercase, `font-size-sm`, `font-weight-semibold`.
- Body text never exceeds `max-w-prose` (65ch) for readability.
- Headings on dark green use `text-white`; accent label text uses `text-accent-gold-400`.

---

## 4. Spacing

The system uses a **4px base unit**. All spacing values are multiples of 4.

```
Section vertical padding:   py-20 (80px) desktop, py-12 (48px) mobile
Card inner padding:         p-5 (20px) or p-6 (24px)
Component gap:              gap-4 (16px) default, gap-6 (24px) for cards
Nav height:                 64px desktop, 56px mobile
Container max-width:        1280px (xl) with px-6 (24px) horizontal padding
```

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Badges, tags, small inputs |
| `--radius-md` | 8px | Inputs, small cards |
| `--radius-lg` | 12px | Standard cards |
| `--radius-xl` | 16px | Product cards, image containers |
| `--radius-2xl` | 20px | Feature cards |
| `--radius-3xl` | 24px | Large hero cards / modals |
| `--radius-full` | 9999px | Pill buttons, nav bar, avatars, tags |

The navigation bar uses `rounded-full` (pill shape). Primary CTA buttons use `rounded-full`. Secondary/ghost buttons use `rounded-full`.

---

## 6. Shadows

Use shadows sparingly — one level per surface.

| Context | Shadow |
|---|---|
| Cards (default) | `shadow-md` |
| Cards (hover/active) | `shadow-lg` |
| Floating nav | `shadow-lg` |
| Modals / drawers | `shadow-2xl` |
| Buttons (pressed) | `shadow-inner` |
| Inputs (focus ring) | `0 0 0 3px rgba(26,77,52,0.25)` |

---

## 7. Iconography

- Use **outlined** icons at rest; **filled** for active/selected state.
- Preferred icon size: `20px` in body UI, `24px` in nav, `16px` in compact badges.
- Icons inherit `currentColor` so they respond to text color utilities.
- Recommended library: `lucide-react` (install separately — not yet in package.json).

---

## 8. Imagery

- **Hero images**: full-bleed, cropped to 16:9 or 3:2, layered with `--color-surface-overlay` (green 88% opacity) for text legibility.
- **Product cards**: 1:1 square, `object-cover`, `rounded-xl`, white card background with `shadow-md`.
- **Shop/location cards**: 4:3 landscape, `object-cover`, `rounded-lg`.
- Always supply `alt` text. Use `priority` prop on above-the-fold Next.js `<Image>` components.
- Minimum photo dimensions: 800×800px for product, 1200×800px for hero.

---

## 9. Motion

All transitions default to `duration-normal` (200ms) with `ease-in-out`.

| Interaction | Duration | Easing |
|---|---|---|
| Button hover | 150ms | ease-out |
| Card hover (scale) | 200ms | ease-out |
| Page transitions | 300ms | ease-in-out |
| Modal open | 200ms | ease-spring |
| Toast appear | 300ms | ease-spring |

Use `prefers-reduced-motion` media query to disable all decorative animations.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Accessibility

- All interactive elements must have a visible focus ring: `outline-2 outline-offset-2 outline-brand-green-700`.
- Minimum touch target size: 44×44px.
- Color contrast: AA for body text (4.5:1), AA for large text (3:1).
- Never rely on color alone to convey meaning — pair with icon or text.
- Semantic HTML: use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
- All images must have descriptive `alt` text; decorative images use `alt=""`.

---

## 11. Dark Mode

The app supports dark mode via `prefers-color-scheme`. Tailwind's `dark:` variant is the implementation mechanism.

| Light | Dark |
|---|---|
| `bg-cream-100` | `bg-zinc-950` |
| `bg-surface` (white) | `bg-zinc-900` |
| `text-foreground` (#1a1a1a) | `text-zinc-50` |
| `text-foreground-muted` | `text-zinc-400` |
| `border-border` | `border-zinc-800` |
| `bg-brand-green-700` | unchanged |
| `text-accent-gold-400` | unchanged |

---

## 12. Grid & Layout

- 12-column grid at `xl`, 8-column at `md`, single column at `sm`.
- Max content width: `max-w-7xl` (1280px), centred with `mx-auto px-6`.
- Hero layout: full viewport height (`min-h-screen`), flex column, content centred.
- Product grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`.
- Section rhythm: alternate between `bg-cream-100` and `bg-surface` (white) sections.
