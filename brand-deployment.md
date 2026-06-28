# Brand Deployment: Keeping it Clean Across Tools

How the Kris Pierce Consulting v3 brand stays consistent across every tool,
every session, every collaborator. No deviations.


## What enforces the brand

| File | What it does | Who reads it |
|------|-------------|--------------|
| `CLAUDE.md` | Hard rules: voice, visual, no em dashes, v3 palette only | Every Claude Code session, automatically |
| `brand-guidelines.md` | Full visual spec: colours, fonts, spacing, shadows, motion, components | Claude Code, Claude Design, humans |
| `typography-guide.md` | Font levels, sizes, weights, where each is used | Claude Design, Canva, humans |
| `_ds/` directory | Design system tokens, 27 preview cards, components, UI kits | Claude Design (via /design-sync) |


## Tool-by-Tool Setup

### Claude Code (automatic)

Nothing to do. Every session reads `CLAUDE.md` on startup. The visual brand
section enforces the v3 palette, fonts, and component patterns. If a session
produces old v2 colours or wrong fonts, `CLAUDE.md` catches it.

To start a session:
```
cd krispierce1
claude
```

The brand rules apply immediately. No setup, no configuration.


### Claude Design

**First time setup:**
1. Go to claude.ai/design
2. Create a new Design System project: "Kris Pierce Consulting"
3. Link GitHub: `https://github.com/krispconsulting-eng/krispierce1`
4. Upload logos: `logo-wordmark.png` and `logo-wordmark-cream.png`
5. In "Any other notes", paste the contents of `typography-guide.md`

**Or via CLI (preferred):**
```
cd krispierce1
claude
/design-sync
```

This pushes the full `_ds/` directory (tokens, components, preview cards) into
Claude Design automatically. Every design the agent builds after that uses
your real components and palette.

**Ongoing:** When you update the design system, run `/design-sync` again.
It only re-uploads what changed.


### Canva

Canva does not auto-read from GitHub. Set up a Brand Kit manually:

**Colours (add all of these):**

Primary:
- Forest: #1E3D34
- Teal 600: #3D7A6B
- Blue 600: #3E6F8E

Secondary:
- Teal 400: #7FA295
- Teal 200: #CFE0DA
- Blue 400: #7FA8C2
- Blue 200: #D2E1EA

Neutrals:
- Cream 50: #FBF9F5
- Cream 100: #F4F1EB
- Ink 900: #1C2530
- Taupe 400: #7E8E87
- Taupe 500: #5E706A

**Fonts:**
- Display: Outfit (available on Canva)
- Body: Archivo (available on Canva)

**Logos:**
- Upload `logo-wordmark.png` (dark, for light backgrounds)
- Upload `logo-wordmark-cream.png` (cream, for dark backgrounds)
- Upload `favicon.svg` (mark only)

**How to set up:**
1. Open Canva > Brand Kit (requires Canva Pro/Teams)
2. Add the colours above
3. Set Outfit as headline font, Archivo as body font
4. Upload all three logo files
5. Save the kit as "Kris Pierce Consulting v3"

Every Canva design you create after that can pull from this kit.


### GitHub

The brand files are in the repo. Merge PR #58 to put them on `main`:
https://github.com/krispconsulting-eng/krispierce1/pull/58

After merging, every clone, every fork, every CI run has the brand.


## How to Prevent Deviations

### Rules that catch mistakes automatically

1. **CLAUDE.md** is read by every Claude Code session. It explicitly bans:
   - Old v2 colours (clay, warm gold, ink-black)
   - Wrong fonts (Hanken Grotesk, serifs, Inter)
   - Flat black backgrounds (must use forest gradient)
   - Em dashes (anywhere, always)

2. **The `_ds/` design system** gives Claude Design the actual components.
   It cannot invent new ones that look different; it builds with yours.

3. **Brand Kit in Canva** restricts the colour picker and font menu to
   approved options.

### Rules that need human checking

- Photography style (warm, candid, not posed stock)
- Copy tone (peer to peer, not coach or motivational)
- Correct Australian English spelling
- No em dashes in any content (search for them before publishing)


## Quick Checklist Before Publishing Anything

- [ ] No em dashes anywhere
- [ ] Australian English (organisation, recognise, centre)
- [ ] Peer to peer tone, not coach or salesy
- [ ] v3 colours only (teal/blue/forest, no clay/gold/ink-black)
- [ ] Outfit for headings, Archivo for body (no serifs, no Inter)
- [ ] Overlines: uppercase, 12px, 0.2em tracking, Teal 600 or Blue 200
- [ ] Buttons: pill radius, Blue 600 primary
- [ ] Dark surfaces use forest gradient, not flat black
- [ ] Contact: info@krispierce.com.au
- [ ] Logos: correct variant for background (dark logo on light, cream on dark)


## File Locations

```
krispierce1/
  CLAUDE.md                  <- Auto-read by Claude Code (voice + visual rules)
  brand-guidelines.md        <- Full visual spec
  typography-guide.md        <- Font levels reference
  brand-deployment.md        <- This file
  _ds/.../ 
    tokens/                  <- CSS custom properties (colours, fonts, spacing, effects)
    guidelines/              <- 18 visual reference cards
    components/core/         <- 4 component preview cards
    ui_kits/website/         <- Homepage preview
    ui_kits/deck/            <- Capability deck (6 slides)
    ui_kits/social/          <- 3 social templates
    assets/                  <- Logos + favicon
    _ds_manifest.json        <- Design system index
  public/
    assets/logo-wordmark.png
    assets/logo-wordmark-cream.png
    favicon.svg
```
