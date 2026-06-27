# KrispConsulting Visual Direction v3.0 (final)

**Kris Pierce Consulting** | Evolution of Brand Guidelines v1.0
**June 2026 | Locked design direction for the website refresh**

> This is the agreed direction. It keeps the v1.0 voice and wordmark, moves to a confident editorial layout, an all-sans type system, a teal-and-blue cool palette used boldly, and a layered graphic style. The goal was to look distinctive and considered rather than generic, without becoming loud or salesy. It stays Medicines Australia-safe: no hype, no inflated claims.

> **How we got here.** Earlier rounds went lighter and quieter and started to feel bland. The fix was not another colour, it was confidence: bigger type, saturated colour blocks, and real graphic detail. This version carries that energy on a cool teal-and-blue palette.

---

## 1. Typography: all-sans, two voices

You prefer sans-serif, so there is no serif. Distinctiveness comes from a characterful display sans plus scale.

| Role | Typeface | Where |
|------|----------|-------|
| Display voice | **Outfit** (geometric sans, OFL, Google Fonts) | Hero, section openers, the index numbers, pull-quotes, large figures. Set light (200 to 300) and large. |
| Working voice | **Archivo** (from v1.0) | Body, leads, nav, labels, overlines, buttons, all UI. |

Outfit at weight 200 to 300, very large, with tight tracking (-0.03em) is the signature. Emphasis is carried by weight (jump to 600) and colour, not italics. Archivo handles everything functional. Hanken Grotesk remains retired.

Scale: hero `clamp(3.2rem, 8.6vw, 7.2rem)`; section openers `clamp(2.4rem, 5vw, 4rem)`; body 17px / 1.65. Oversized headlines are deliberate, they are most of what makes the page feel confident.

---

## 2. Colour: teal and blue co-lead, used boldly

Two cool leads, applied in large committed areas rather than as timid accents. No new hue families beyond what we tested; all AA-verified.

### Core

| Token | Hex | Role |
|-------|-----|------|
| Cream 25 | `#FBFAF7` | Page canvas (near-paper) |
| Cream 50 / 100 | `#F6F4EF` / `#EDEAE3` | Steps, hover surfaces |
| Paper | `#FFFFFF` | Raised cards |
| Ink | `#1C2530` | Body text, the dark CTA panel |

### The two leads

| Token | Hex | Role |
|-------|-----|------|
| Forest | `#1E3D34` | Deep anchor for the hero and feature blocks (blended to `#234A52`) |
| Teal 600 | `#3D7A6B` | Section emphasis, overlines, secondary buttons, hairlines |
| Teal 400 | `#7FA295` | Index numbers, soft accents |
| Teal 200 | `#CFE0DA` | Tints, on-dark accent text |
| Blue 600 | `#3E6F8E` | Primary buttons, primary interaction |
| Blue 700 | `#305670` | Links (small text, AA on cream) |
| Blue 400 / 200 | `#7FA8C2` / `#D2E1EA` | On-dark emphasis, nav underline, graphic shapes |

**The split.** Teal anchors the big colour blocks and section accents; blue carries links, headline emphasis and the primary action. This is the deliberate co-lead you chose. Used in large blocks with graphics, it reads as a confident brand rather than the flat trust-blue cliché.

### Accessibility

All combinations meet WCAG 2.1 AA. Key results: cream on forest 11.4:1; ink on cream 14.8:1; blue 700 links on cream 7.5:1; cream on blue 600 button 5.2:1; cream on teal 600 button 4.8:1. Blue and teal at 600 are used for large text and UI; small text uses the 700 steps or ink.

---

## 3. Layout: bold and editorial

- **Hero**: full saturated forest-to-teal block, near-full-height, oversized Outfit headline with a blue emphasis phrase, a floating frosted stat chip, and layered graphics (see section 4). Not a centred line over cream.
- **Kinetic marquee**: a slow-scrolling band of your core language under the hero (Insights, Patient-centred outcomes, Co-design, and so on). Respects reduced-motion.
- **Stat ledger**: figures in light Outfit on a 2px ink top-rule, divided by hairlines. No boxes.
- **Services as a big index list**: numbered 01 to 03, oversized, with hover that shifts the number and arrow from teal to blue and insets the row. Replaces the generic three-card row.
- **Feature block**: a colour-blocked pull-quote panel that commits fully to the deep teal, with an arc graphic.
- **CTA**: dark ink panel with a dot-matrix graphic and a blue emphasis.
- **Spacing**: generous, contained to `max-width: 1240px`.

---

## 4. Graphics system (the "pushed" detail)

This is what lifts it above flat colour blocks. Use consistently:

- **Concentric arc motif**: thin-stroke SVG circles radiating from a point, in blue and teal at low opacity, sitting in the hero and the feature block. A quiet, recognisable house graphic.
- **Soft radial blooms**: large blurred radial gradients (blue and pale teal) behind the hero content for depth.
- **Dot matrix**: a fading grid of small dots in the CTA panel, a subtle data/structure reference suited to research work.
- **Frosted glass chip**: one floating stat card over the hero, 18px blur, 1px inner light border so the edge reads as real glass.
- **Duotone photography**: when real images replace placeholders, treat them as a teal-leaning duotone with the dark block fading into the image edge, so photos sit inside the graphic system.

All graphics are `pointer-events:none`, low opacity, and never compete with text. They add craft, not noise.

---

## 5. Shape, material, motion

- Radii: 22px cards, 30px panels, full pills for buttons.
- Shadows: soft, wide, tinted toward teal/ink, low opacity.
- Motion: restrained. Scroll-in fades, a 1 to 2px hover lift, slight press scale, nav underline draw-in, the marquee, and the index hover. No bounce, no parallax theatrics. Respects `prefers-reduced-motion`.

---

## 6. What stays the same as v1.0

- The wordmark. Script "Kris Pierce / CONSULTING", on its own. No monogram. A cream variant is needed for the dark blocks (per v1.0, still to be produced).
- The voice. UK/Australian spelling, sentence case, no em dashes, no hype, no emoji, no exclamation marks. Professional close, "Best regards, Kris."
- The hero line, verbatim, broken into the marquee and openers.
- Archivo for all body and UI.
- Accessibility target: WCAG 2.1 AA.

---

## 7. Implementation notes

- **Fonts**: Outfit and Archivo from Google Fonts, or self-hosted WOFF2. `font-display: swap`. Fallbacks: Outfit → `"Archivo", "Helvetica Neue", Arial, sans-serif`; Archivo → `"Helvetica Neue", Arial, sans-serif`.
- **CSS tokens**: the mockup defines the full token set as CSS custom properties in `:root`. Lift these straight into the site's stylesheet. The colour roles above map one-to-one to those variables.
- **Graphics**: the arc and dot-matrix motifs are inline SVG, no image assets or libraries required. They scale and stay crisp.
- **Canva**: add Forest, Teal 600, Blue 600 and the Blue 400/200 tints as named swatches; set Outfit (light) as the display heading style; keep Archivo as body.
- **Scope**: KrispConsulting only. SCN2A Australia is a separate brand and must not be touched.

*Pairs with the master mockup file (v3.0). Outfit and Archivo are free on Google Fonts (OFL). Palette and all contrast values verified to WCAG 2.1 AA.*
