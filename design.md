# Chronhr — Design System

## Typography

### Fonts

| Role | Family | Weights | Usage |
|---|---|---|---|
| **Display** | Space Grotesk | 400 500 600 700 800 | All headings, stat kickers, nav logo |
| **Mono** | JetBrains Mono | 300 400 500 | All body text, labels, tags, buttons, spans, divs |

Both loaded via Google Fonts. JetBrains Mono is applied globally to every non-heading element via the `p, li, a, button, span, div` selector in `futuristic.css`.

### Heading selectors that use Space Grotesk

```
h1, h2, h3
.hero h1
.role-title
.step-title
.how-title
.founder-name
.comparison-criterion
```

Shared heading style: `letter-spacing: -0.035em`, `line-height: 1.05`.

### Type scale (key sizes)

| Element | Size | Weight | Notes |
|---|---|---|---|
| Hero h1 | `clamp(40px, 5.5vw, 72px)` | 800 | letter-spacing -0.04em |
| Section h2 | — | — | inherited from global h2 |
| Stat kicker (2×, 100%) | `clamp(36px, 4vw, 56px)` | — | Space Grotesk, color: brand |
| Stat label | 13px | 700 | Space Grotesk |
| Stat sublabel | 10px | — | JetBrains Mono, letter-spacing 0.04em, muted |
| Nav links | 11px | 500 | uppercase, letter-spacing 0.12em |
| Section label | 10px | — | uppercase, letter-spacing 0.2em |
| Body / desc | 13px | — | JetBrains Mono, line-height 1.7 |
| Tags / signals | 0.72rem | 700 | letter-spacing 0.015em |
| Footnotes | 10px | — | muted |

---

## Color Palette

All colors live in `src/styles/variables.css` as CSS custom properties.

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F5F2FA` | Page background (light lavender-white) |
| `--ink` | `#0F1117` | Primary text (near black) |
| `--muted` | `#84827D` | Secondary text, labels, sublabels |
| `--border` | `#DDD8EA` | All dividers and card borders |
| `--white` | `#FFFFFF` | Pure white where needed |
| `--brand` | `#8660b8` | Primary purple — CTAs, highlights, progress |
| `--brand-strong` | `#7445ad` | Hover states on brand elements |
| `--brand-deep` | `#5c2f93` | Dark brand — nav CTA text, hero body links |
| `--brand-soft` | `#f3eef8` | Brand tint — tag backgrounds, badges |
| `--surface` | `rgba(255,255,255,0.78)` | Card backgrounds (translucent) |
| `--surface-strong` | `rgba(255,255,255,0.94)` | Modal/nav surfaces (more opaque) |

### Signal colors (not tokenized, hardcoded)

| Role | Text | Background | Border |
|---|---|---|---|
| Risk (red) | `#9f1f1f` | `#fdecec` | `#f4c7c7` |
| Safe (green) | `#1f6b3a` | `#edf8f1` | `#c8e8d3` |

In the futuristic style, signals are rendered as flat full-width rows (no pills), with only a `border-bottom`. The risk/safe color distinction is preserved on the icon and text.

---

## Shadows & Borders

| Token | Value |
|---|---|
| `--shadow-sm` | `0 10px 24px rgba(28,20,40,0.08)` |
| `--shadow-md` | `0 22px 52px rgba(28,20,40,0.12)` |
| `--shadow-glow` | `0 0 0 1px rgba(115,84,133,0.08), 0 18px 44px rgba(94,67,112,0.14)` |
| `--radius-md` | `0px` — all corners are sharp |
| `--radius-lg` | `0px` — all corners are sharp |

Sharp corners everywhere. The only exceptions are the floating nav (border-radius `999px`), the nav CTA button (`999px`), and terminal/workspace mockups (`12px`).

---

## Background System

Three fixed layers stacked behind all content (`body::before` and `body::after`):

1. **Brand radial glow** — `radial-gradient` from the top center, 18% brand purple bleeding into transparent at 55%.
2. **Horizontal scan lines** — `repeating-linear-gradient`, 1px white lines every 4px, opacity 0.025. Gives a subtle CRT / terminal feel.
3. **Dot grid** — `radial-gradient` dot pattern, 3×3px cells, opacity 0.04.

All three are `position: fixed`, `pointer-events: none`, `z-index: -1`. No orbs, ripples, or animated background elements.

---

## Navigation

Floating pill centered at the top, not a full-width bar.

- `position: fixed`, `top: 24px`, `left: 50%`, `transform: translateX(-50%)`
- Width: `min(680px, calc(100% - 28px))`
- Background: `color-mix(in srgb, --surface-strong 68%, transparent)` with `backdrop-filter: blur(20px)`
- Border: `1px solid color-mix(in srgb, --border 70%, transparent)`
- Border-radius: `999px`
- Active link indicator: 4×4px purple dot centered below the link

---

## Hover Interactions

All interactive cards use the same pattern — a transition-based diagonal light sweep that reverses on mouse-out (not a one-shot animation).

### Sweep pattern (role cards, hero stat cards)

```css
.card {
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease;
}

.card::after {
  content: '';
  position: absolute;
  top: -120%; left: -35%;
  width: 70%; height: 300%;
  background: linear-gradient(180deg, transparent, rgba(134,96,184,0.18), transparent);
  transform: translateX(-60px) rotate(14deg);
  opacity: 0;
  transition: transform 1.1s ease, opacity 0.35s ease;
  pointer-events: none;
}

.card:hover {
  transform: translateY(-12px); /* roles: -12px, stats: -8px */
}

.card:hover::after {
  opacity: 1;
  transform: translateX(260px) rotate(14deg);
}
```

On hover-out, the `transition` on `::after` slides the sweep back to its start position — no abrupt disappearance.

---

## Layout

- Max content width: `1240px` (hero, stats, how, comparison, roi)
- Horizontal padding: `52px` desktop, `24px` tablet, `18px` mobile
- Grid system: CSS Grid throughout, no flexbox grid framework
- All section radii: `0px` (sharp)

### Key grids

| Section | Grid |
|---|---|
| Hero top | `55% 45%` |
| How It Works | `repeat(3, 1fr)` |
| Roles | `repeat(4, 1fr)` → 2col → 1col |
| Hero stats | `repeat(4, 1fr)` |
| Signals table | `1fr 1fr` (escalation / clearance) |
| Comparison table | HTML `<table>` |

---

## Component Notes

### Signals table (`HowItWorks.tsx`)

Two-column CSS grid. Each row pairs one escalation signal (red) with one clearance signal (green). Column headers are colored: orange-red for escalation, brand purple for clearance. Pills fill 100% of their column width (`width: 100%`, `display: flex`).

### Workflow Timeline (`WorkflowTimeline.tsx`)

Scroll-driven snake SVG path. `fillPct` state drives the height of the progress fill div. Steps activate (`step--active` class) as they enter the viewport at 65% from top. On mobile, all steps are active by default.

### Comparison Table (`ComparisonTable.tsx`)

4 active providers: **Chronhr**, **Roe AI**, **Flagright**, **Lucinity**. Unit21 and Hawk AI are commented out in the `providers` array — uncomment to restore. `colSpan` on section rows must match provider count + 1 (currently `5`).

### ROI Calculator (`RoiCalculatorSection.jsx`)

Inputs: analysts (1–50), cases/analyst/month (10–300), hours/case (0.5–8), hourly cost ($20–$120). Assumes 11 working months, 50% time reduction with Chronhr. Count-up animation uses a custom `useCountUp` hook with cubic ease-out.
