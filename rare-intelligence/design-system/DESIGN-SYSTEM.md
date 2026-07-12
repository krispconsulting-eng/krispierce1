# Rare Intelligence: Design System

A small, self-contained system: tokens, fonts, and a component library. No build
step, no framework, no external dependency. Load three stylesheets and write
`ri-` markup.

## Principles

- **Tokens are the source of truth.** Colour, type, space, radius, shadow and
  motion all live in `tokens.css` as `--ri-*` custom properties. Components read
  those variables and never hard-code a value. Change a token, and everything
  that uses it changes.
- **Namespaced.** Every token is `--ri-*` and every class is `ri-*`, so the
  system cannot collide with, or leak into, any other CSS on a page.
- **Portable.** Fonts are embedded as data URIs in `fonts.css`, so the system
  works offline and survives being moved to another repository.

## Load order

```html
<link rel="stylesheet" href="fonts.css">
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components.css">
```

`fonts.css` before `tokens.css` before `components.css`. Tokens must exist before
components read them.

## Tokens

The full set is in `tokens.css` (CSS) and `tokens.json` (machine-readable).

| Group | Prefix | Examples |
|---|---|---|
| Colour, ocean | `--ri-ocean-*` | `--ri-ocean-500` `#2E6FB2`, `--ri-ocean-900` `#10314F` |
| Colour, teal | `--ri-teal-*` | `--ri-teal-500` `#16B0A3` |
| Colour, coral | `--ri-coral-*` | `--ri-coral-500` `#FF6F4D` |
| Neutrals | `--ri-bg` `--ri-paper` `--ri-ink-*` | `--ri-ink-900` `#0F2438` |
| Gradients | `--ri-grad-*` | `--ri-grad-ocean`, `--ri-grad-deep`, `--ri-grad-spark` |
| Type | `--ri-font-*` `--ri-fs-*` `--ri-fw-*` | `--ri-font-display`, `--ri-fs-h2` |
| Space | `--ri-space-*` `--ri-section` | `--ri-space-6` 24px |
| Radius | `--ri-radius-*` | `--ri-radius-lg` 18px, `--ri-radius-pill` |
| Shadow | `--ri-shadow-*` `--ri-focus-ring` | `--ri-shadow-md` |
| Motion | `--ri-ease` `--ri-dur*` | `--ri-dur` 260ms |

## Type scale

Display is Bricolage Grotesque; body is Figtree.

| Token | Size | Used for |
|---|---|---|
| `--ri-fs-display` | clamp(2.6rem, 5vw, 4.2rem) | Hero headline |
| `--ri-fs-h1` | clamp(2rem, 3.4vw, 3rem) | Page titles |
| `--ri-fs-h2` | clamp(1.6rem, 2.6vw, 2.25rem) | Section titles |
| `--ri-fs-h3` | 1.35rem | Card titles |
| `--ri-fs-lead` | clamp(1.08rem, 1.6vw, 1.32rem) | Lead paragraphs |
| `--ri-fs-body` | 1.0625rem | Body |
| `--ri-fs-sm` / `--ri-fs-xs` | 15px / 13px | Meta, captions |
| `--ri-fs-overline` | 12px | Eyebrows (uppercase, tracked) |

## Components

All in `components.css`. The main ones:

- **`.ri-wordmark`** with `.ri-sig` (the signal glyph), and `.on-dark` variant.
- **`.ri-overline`** eyebrow with a leading node; `.teal` and `.on-dark` variants.
- **`.ri-btn`** with `--primary`, `--teal`, `--spark`, `--ghost`, `--on-dark`,
  `--line-dark`, and `--sm`.
- **`.ri-chip`** with `--free`, `--soft`, `--spark`.
- **`.ri-nav`**, **`.ri-hero`**, **`.ri-pricebar`** / **`.ri-pill`**.
- **`.ri-pathcard`** and **`.ri-step`**: the signature pathway card.
- **`.ri-band`** / **`.ri-val`**: the value strip.
- **`.ri-program`** and **`.ri-tier`** (colour-coded with `--teal`, `--ocean`,
  `--coral`), driving **`.ri-card`** course cards.
- **`.ri-bundle`**, **`.ri-pack`**: pathway and whole-pack offers.
- **`.ri-how`** / **`.ri-currency`**, **`.ri-final`**, **`.ri-footer`**.

Tier colour-coding works by setting `--tier` and `--tier-wash` on the
`.ri-tier--*` element; cards inside inherit them for their top accent and index.

## Accessibility

- Focus is visible on every interactive element via `--ri-focus-ring`.
- Body and secondary text meet WCAG AA contrast on the cool neutrals.
- Motion is disabled under `prefers-reduced-motion`.
- Colour is never the only signal: tiers also carry a number and a name, chips
  carry text.

## Extending it

Add a token before adding a component that needs it. Keep new components on the
existing tokens; if a component needs a value no token provides, add the token
first so the system stays the single source of truth. See `showcase.html` for a
living reference of what exists.
