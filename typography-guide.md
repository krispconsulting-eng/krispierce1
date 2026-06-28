# Kris Pierce Consulting: Typography Guide v3.0

## Font Families

| Role | Font | Fallbacks |
|------|------|-----------|
| **Display** | Outfit | Archivo, Helvetica Neue, Arial, sans-serif |
| **Body** | Archivo | Helvetica Neue, Arial, sans-serif |

No serifs. No decorative fonts.


## Display Font: Outfit

Use for all headings, hero text, stat figures, and card numbers.

| Level | Size | Weight | Line height | Tracking | Where to use |
|-------|------|--------|-------------|----------|--------------|
| Hero | clamp(3.2rem, 8.6vw, 7.2rem) | 200 (light) | 0.96 | -0.035em | Home page hero headline only. Bold words use weight 600 + Blue 200 |
| Display | clamp(2.4rem, 5vw, 4rem) | 600 | 1.18 | -0.015em | Section titles (What I do, About, Insights) |
| H1 | clamp(1.9rem, 2.4vw, 2.75rem) | 600 | 1.18 | -0.015em | Page titles on interior pages |
| H2 | clamp(1.6rem, 1.6vw, 2.25rem) | 600 | 1.18 | -0.015em | Sub-section titles, CTA headlines |
| H3 | clamp(1.3rem, 0.8vw, 1.625rem) | 600 | 1.2 | -0.02em | Card titles, focus card headings |
| H4 | 1.25rem (20px) | 600 | 1.2 | 0.02em | Small headings, sidebar labels |

### Hero headline treatment
- Outfit weight 200 (light), largest size in the scale
- Emphasised words switch to weight 600 and Blue 200 colour (#D2E1EA)
- Used only on the home page hero, over a forest gradient background
- Example: "Building engagement that **communities own**"

### Stat figures
- Outfit weight 200 or 300, size 2.2rem to 2.6rem
- Used in ledger stats, glass chips, focus card numbers
- Tracking: -0.03em


## Body Font: Archivo

Use for all running text, labels, buttons, navigation, and form fields.

| Level | Size | Weight | Line height | Where to use |
|-------|------|--------|-------------|--------------|
| Lead | clamp(1.15rem, 1.8vw, 1.4rem) | 400 | 1.55 | Hero subtext, page introductions, pull-quote lead-ins |
| Body | 17px | 400 | 1.62 | Main paragraph text, service descriptions |
| Base | 16px | 400 | 1.5 | General UI text, form inputs |
| Small | 15px | 400 | 1.5 | Card body text, secondary descriptions |
| XS | 13px | 400 | 1.4 | Captions, stat labels, chip text, meta info |
| Overline | 12px | 600 | 1.0 | Section eyebrows. Always uppercase, tracking 0.2em |

### Overline rules
- Font: Archivo, 12px, weight 600, uppercase
- Letter spacing: 0.2em
- Colour on light backgrounds: Teal 600 (#3D7A6B)
- Colour on dark backgrounds: Blue 200 (#D2E1EA)
- Used to label sections: "About", "What I do", "Start a conversation"

### Button text
- Font: Archivo, 15px, weight 600
- Inside pill-radius buttons (border-radius: 999px)
- Padding: 14px 28px

### Navigation links
- Font: Archivo, weight 500
- Standard size (16px)


## Weights Summary

| Weight | Value | Where |
|--------|-------|-------|
| Light | 200 | Hero headlines, stat figures |
| Regular | 400 | Body text, leads |
| Medium | 500 | Nav links |
| Semibold | 600 | Section titles, overlines, buttons, card headings |
| Bold | 700 | Emphasis within text |


## Quick Reference: Colour Pairings

| Context | Text colour | Background |
|---------|-------------|------------|
| Body text on cream | Ink 900 (#1C2530) | Cream 50 (#FBF9F5) |
| Secondary text | #4A5C55 | Cream 50 |
| Muted text (labels) | Taupe 400 (#7E8E87) | Cream 50 |
| Text on forest | Cream 50 (#FBF9F5) | Forest (#1E3D34) |
| Muted on forest | rgba(244,241,235,0.66) | Forest |
| Accent links | Blue 700 (#305670) | Cream 50 |
| Bold hero words | Blue 200 (#D2E1EA) | Forest gradient |
| Overline on light | Teal 600 (#3D7A6B) | Cream 50 |
| Overline on dark | Blue 200 (#D2E1EA) | Forest |
