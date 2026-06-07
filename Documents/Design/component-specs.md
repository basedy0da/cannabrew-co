# Brew Coffee — Component Specs

> Stack: Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS v4  
> All class names reference tokens from `Documents/Design/tokens.css`.

---

## Component index

1. [Navigation Bar](#1-navigation-bar)
2. [Button](#2-button)
3. [Product Card](#3-product-card)
4. [Hero Section](#4-hero-section)
5. [Category Tab Bar](#5-category-tab-bar)
6. [Section Header](#6-section-header)
7. [Shop Card](#7-shop-card)
8. [Badge / Tag](#8-badge--tag)
9. [Input / Search](#9-input--search)
10. [Callout Block](#10-callout-block)

---

## 1. Navigation Bar

Floating pill-shaped bar, fixed at the top. Blurs the background behind it.

### Anatomy

```
[ Logo ]  [ Links... ]  [ CTA Button ]
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `transparent` | `boolean` | `false` | True at page top; fills on scroll |
| `links` | `NavLink[]` | — | Array of `{ label, href }` |
| `ctaLabel` | `string` | `"Contact us"` | Right-side CTA text |

### Tailwind classes

```tsx
// Outer wrapper — floating pill
<nav className="
  fixed top-4 left-1/2 -translate-x-1/2 z-sticky
  flex items-center justify-between
  h-14 px-6 gap-8
  rounded-full
  bg-brand-green-700/95 backdrop-blur-md
  shadow-lg
  w-[calc(100%-3rem)] max-w-5xl
">

// Logo
<span className="font-display font-bold text-xl text-white tracking-tight" />

// Nav link
<a className="
  text-sm font-medium text-white/80
  hover:text-white transition-colors duration-fast
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
" />

// CTA button (ghost style in nav)
<button className="
  h-9 px-5 rounded-full
  border border-white/30
  text-sm font-semibold text-white
  hover:bg-white/10 transition-colors duration-fast
" />
```

### States

| State | Visual |
|---|---|
| Default | `bg-brand-green-700/95` |
| Scrolled past hero | `bg-brand-green-900` with `shadow-xl` |
| Mobile (< md) | Collapse links into hamburger, drawer opens from top |

---

## 2. Button

### Variants

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| `primary` | `brand-green-700` | `white` | none | Main CTA |
| `primary-gold` | `accent-gold-400` | `brand-green-950` | none | Accent/promo CTA |
| `outline` | `transparent` | `brand-green-700` | `brand-green-700` | Secondary action |
| `ghost` | `transparent` | `brand-green-700` | none | Tertiary / nav |
| `destructive` | `error` | `white` | none | Delete / irreversible |

### Sizes

| Size | Height | Padding | Font size |
|---|---|---|---|
| `sm` | 36px | `px-4` | `text-sm` |
| `md` | 44px | `px-5` | `text-base` |
| `lg` | 52px | `px-7` | `text-lg` |
| `xl` | 60px | `px-8` | `text-xl` |

### Tailwind classes (primary md)

```tsx
<button className="
  inline-flex items-center justify-center gap-2
  h-11 px-5 rounded-full
  bg-brand-green-700 text-white
  text-base font-semibold
  transition-colors duration-fast
  hover:bg-brand-green-800
  active:bg-brand-green-950
  disabled:opacity-40 disabled:cursor-not-allowed
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-700
">
```

### Loading state

Show a spinner (`animate-spin`) in place of the left icon, disable pointer events, reduce opacity to 70%.

---

## 3. Product Card

Vertical card with drink image, name, short description, and price.

### Anatomy

```
┌─────────────────────┐
│    [ Product Image  │  ← rounded-xl, 1:1 aspect
│      1:1 square ]   │
├─────────────────────┤
│  Name               │  ← heading-sm, font-semibold
│  Short description  │  ← body-sm, text-foreground-muted
│  ─────────────────  │
│  $X.XX  [Add +]     │  ← price left, CTA right
└─────────────────────┘
```

### Props

| Prop | Type | Description |
|---|---|---|
| `name` | `string` | Product name |
| `description` | `string` | One-line blurb |
| `price` | `number` | Price in USD cents |
| `imageSrc` | `string` | URL for Next.js `<Image>` |
| `imageAlt` | `string` | Alt text for the image |
| `badge` | `string?` | Optional badge label ("New", "Popular") |
| `onAdd` | `() => void` | Add to cart handler |

### Tailwind classes

```tsx
// Card shell
<article className="
  flex flex-col
  bg-surface rounded-2xl shadow-md
  overflow-hidden
  transition-shadow duration-normal
  hover:shadow-lg
  group
">

// Image wrapper
<div className="relative aspect-square overflow-hidden">
  <Image
    className="object-cover transition-transform duration-slow group-hover:scale-105"
    fill sizes="(max-width:768px) 100vw, 33vw"
  />
</div>

// Content
<div className="flex flex-col gap-2 p-5">
  <h3 className="text-lg font-semibold text-foreground leading-snug" />
  <p  className="text-sm text-foreground-muted leading-normal line-clamp-2" />
  <div className="flex items-center justify-between mt-2">
    <span className="font-mono text-base font-semibold text-foreground" />
    <button className="
      flex items-center gap-1 h-9 px-4 rounded-full
      bg-brand-green-700 text-white text-sm font-semibold
      hover:bg-brand-green-800 transition-colors duration-fast
    ">Add +</button>
  </div>
</div>
```

### Badge overlay (optional)

```tsx
<span className="
  absolute top-3 left-3 z-raised
  px-2.5 py-1 rounded-full
  bg-accent-gold-400 text-brand-green-950
  text-xs font-semibold
">
  {badge}
</span>
```

---

## 4. Hero Section

Full-viewport hero with background photo, green overlay, headline, subtext, and CTA.

### Anatomy

```
┌────────────────────────────────────────┐
│  [Nav Bar — floats above]              │
│                                        │
│  Category pills (scrollable row)       │
│                                        │
│  DISPLAY HEADING                       │
│  Subtext paragraph                     │
│                                        │
│  [Get Started]    ● ● ●               │
│                                        │
│         [Hero product photo]           │
└────────────────────────────────────────┘
```

### Tailwind classes

```tsx
// Section
<section className="
  relative min-h-screen flex flex-col justify-between
  overflow-hidden
  bg-brand-green-700
  pt-24 pb-12 px-6
  md:px-12 lg:px-20
">

// Background image + overlay
<Image className="absolute inset-0 object-cover opacity-30" fill priority />
<div className="absolute inset-0 bg-brand-green-700/70" />

// Content (above overlay)
<div className="relative z-raised flex flex-col gap-6 max-w-lg">

// Headline — display font
<h1 className="
  font-display font-black text-white
  text-6xl md:text-7xl lg:text-8xl
  leading-none tracking-tighter
">

// Subtext
<p className="text-white/75 text-lg leading-relaxed max-w-sm">

// CTA row
<div className="flex items-center gap-4">
  <Button variant="primary-gold" size="lg">Get Started</Button>
</div>
```

---

## 5. Category Tab Bar

Horizontally scrollable pill tabs for menu categories.

### Props

| Prop | Type | Description |
|---|---|---|
| `categories` | `string[]` | List of category names |
| `active` | `string` | Currently selected category |
| `onChange` | `(cat: string) => void` | Selection handler |

### Tailwind classes

```tsx
// Scroll container
<div className="
  flex items-center gap-2
  overflow-x-auto scrollbar-hide
  py-1 -mx-6 px-6
  md:mx-0 md:px-0
">

// Inactive tab
<button className="
  flex-shrink-0 h-9 px-4 rounded-full
  border border-border
  text-sm font-medium text-foreground-muted
  bg-surface
  hover:border-brand-green-700 hover:text-brand-green-700
  transition-colors duration-fast
  whitespace-nowrap
">

// Active tab
<button className="
  flex-shrink-0 h-9 px-4 rounded-full
  bg-brand-green-700 text-white
  text-sm font-semibold
  whitespace-nowrap
">
```

---

## 6. Section Header

Reusable section heading block with an overline, title, and optional description.

### Props

| Prop | Type | Description |
|---|---|---|
| `overline` | `string?` | ALL-CAPS label above title |
| `title` | `string` | Main heading text |
| `description` | `string?` | Supporting paragraph |
| `align` | `"left" \| "center"` | Default `"left"` |
| `titleRight` | `ReactNode?` | Content floated to the right (e.g. "/2025") |

### Tailwind classes

```tsx
<div className={cn("flex flex-col gap-2", align === "center" && "items-center text-center")}>
  {overline && (
    <span className="
      text-xs font-semibold uppercase tracking-widest
      text-brand-green-600
    ">{overline}</span>
  )}
  <div className="flex items-baseline justify-between gap-4 w-full">
    <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight">
      {title}
    </h2>
    {titleRight && (
      <span className="font-mono text-2xl font-semibold text-foreground-muted shrink-0">
        {titleRight}
      </span>
    )}
  </div>
  {description && (
    <p className="text-foreground-muted text-lg leading-relaxed max-w-prose">
      {description}
    </p>
  )}
</div>
```

---

## 7. Shop Card

Landscape card for a physical café location.

### Props

| Prop | Type | Description |
|---|---|---|
| `name` | `string` | Store name |
| `address` | `string` | Street address |
| `imageSrc` | `string` | Store front photo |
| `imageAlt` | `string` | Alt text |
| `href` | `string?` | Link to store detail page |

### Tailwind classes

```tsx
<article className="
  relative overflow-hidden rounded-xl shadow-md
  aspect-[4/3] group cursor-pointer
">
  <Image className="object-cover transition-transform duration-slow group-hover:scale-105" fill />

  // Gradient overlay at bottom
  <div className="
    absolute inset-0
    bg-gradient-to-t from-brand-green-950/80 via-transparent to-transparent
  " />

  // Text
  <div className="absolute bottom-0 left-0 right-0 p-4">
    <p className="text-white font-semibold text-base leading-tight">{name}</p>
    <p className="text-white/70 text-sm mt-0.5">{address}</p>
  </div>

  // Arrow button
  <button className="
    absolute top-3 right-3 z-raised
    flex items-center justify-center
    w-9 h-9 rounded-full
    bg-accent-gold-400 text-brand-green-950
    opacity-0 group-hover:opacity-100
    transition-opacity duration-normal
  ">→</button>
```

---

## 8. Badge / Tag

Inline label for product attributes, categories, or statuses.

### Variants

| Variant | Background | Text |
|---|---|---|
| `default` | `cream-200` | `foreground-muted` |
| `green` | `brand-green-100` | `brand-green-700` |
| `gold` | `accent-gold-100` | `accent-gold-600` |
| `dark` | `brand-green-700` | `white` |

### Tailwind classes (green variant)

```tsx
<span className="
  inline-flex items-center gap-1
  px-2.5 py-0.5 rounded-full
  bg-brand-green-100 text-brand-green-700
  text-xs font-semibold
  leading-none
">
```

---

## 9. Input / Search

### Anatomy

```
[ 🔍 icon ]  [ placeholder text                    ] [ × clear ]
```

### Tailwind classes

```tsx
<div className="
  relative flex items-center
  h-11 rounded-full
  bg-surface border border-border
  px-4 gap-2
  focus-within:border-brand-green-700
  focus-within:ring-2 focus-within:ring-brand-green-700/20
  transition-colors duration-fast
">
  <SearchIcon className="w-4 h-4 text-foreground-subtle shrink-0" />
  <input className="
    flex-1 bg-transparent
    text-base text-foreground placeholder:text-foreground-subtle
    outline-none
  " />
</div>
```

### States

| State | Visual change |
|---|---|
| Default | `border-border` |
| Focus | `border-brand-green-700` + `ring-2 ring-brand-green-700/20` |
| Filled | Show clear (×) button |
| Error | `border-error` + `ring-error/20` |
| Disabled | `opacity-50 cursor-not-allowed bg-cream-200` |

---

## 10. Callout Block

Bold marketing copy block — used in the "USE THE BEST COFFEE" section in the reference.

### Anatomy

```
┌──────────────────────────────┐
│  USE                         │  ← overline style
│  THE BEST COFFEE             │  ← large display, accent color
│  PREMIUM ARABICA             │
│  FRESH BEANS AND...          │
│                              │
│  [Get Started]               │
└──────────────────────────────┘
```

### Tailwind classes

```tsx
<div className="
  bg-brand-green-700 rounded-2xl
  p-8 md:p-12
  flex flex-col gap-6
">
  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest">USE</p>
  <h2 className="
    font-display font-black
    text-accent-gold-400
    text-4xl md:text-5xl
    leading-tight tracking-tight
    uppercase
  ">
    THE BEST COFFEE<br />
    PREMIUM ARABICA<br />
    <span className="text-white">FRESH BEANS AND FRESHLY<br />
    GROUND SPICES...</span>
  </h2>
  <Button variant="primary-gold" size="md">Get Started</Button>
</div>
```

---

## Composition guidelines

- **Padding cadence**: `p-5` inside cards, `py-20 px-6` for full sections.
- **Gap cadence**: `gap-2` for inline clusters, `gap-4` within components, `gap-6` between cards, `gap-12` between page sections.
- **Elevation order**: page → section (no shadow) → card (`shadow-md`) → floating element (`shadow-lg`) → modal (`shadow-2xl`).
- **Focus management**: trap focus in modals/drawers; first focusable element receives focus on open.
- **Responsive default**: mobile-first — base styles target `< 640px`; `sm:`, `md:`, `lg:` progressively enhance layout.
