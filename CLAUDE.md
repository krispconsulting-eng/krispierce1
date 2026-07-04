# Project: Kris Pierce Consulting website

This is the website for Kris Pierce Consulting (KrispConsulting). It started as a
Claude Design handoff bundle and is now a real Vite + React site. Read this file
first; it replaces re-reading the long transcript in `chats/`.

## Brand voice — non-negotiable

For ANY written content (web copy, headings, CTAs, bios, social posts), load the
`kris-pierce-consulting` skill and follow it. It is the source of truth for voice.
The rules that get broken most often:

- **No em dashes. Anywhere.** Use commas, colons, semicolons, brackets, or full
  stops. Check every time.
- **Australian English** (organisation, recognise, programme as program).
- **Peer to peer, not coach.** No motivational or salesy tone. One idea per piece.
- The live site is the source of truth for copy: **krispierce.com.au**.
- Contact email across the site: **info@krispierce.com.au**.

This is the CONSULTING practice, not the SCN2A Australia charity. If it is unclear
which one a piece is for, ask before writing.

## Visual brand — non-negotiable

For ANY visual work (website changes, design assets, social graphics, decks,
components), follow `brand-guidelines.md` and `typography-guide.md`. The rules
that get broken most often:

- **v3 palette only.** Teal/blue/forest. No clay, no warm gold, no ink-black
  (#1D1C21). If you see old v2 colours, replace them.
- **Fonts: Outfit (display) + Archivo (body).** No Hanken Grotesk, no serifs,
  no Inter. Hero headlines use Outfit weight 200; section titles use weight 600.
- **Forest gradient for dark surfaces:** `linear-gradient(165deg, #1E3D34 0%, #234A52 100%)`.
  Never flat black or ink backgrounds.
- **Overlines:** Archivo 12px, weight 600, uppercase, tracking 0.2em. Teal 600
  on light, Blue 200 on dark. Never sentence case.
- **Buttons:** Archivo 15px, weight 600, pill radius (999px). Primary is Blue 600,
  not ink or teal.
- **Shadows:** Always cooled `rgba(29,28,33,...)`, never pure black.
- **The `_ds/` directory** is the design system source of truth for tokens,
  components, and preview cards. Read it before creating new components.

### Skill precedence for visual work

Generic design skills in this repo (`design-taste-frontend`,
`high-end-visual-design`, `minimalist-ui`, `impeccable`) provide craft and
process guidance only. Where they prescribe specific fonts, palettes, or
visual styles (e.g. Geist/Clash Display, warm creams, muted pastels), those
prescriptions DO NOT apply here: `brand-guidelines.md`, `typography-guide.md`,
and `PRODUCT.md` always win. Outfit + Archivo and the v3 teal/blue/forest
palette are fixed regardless of what any skill suggests.

## Tech / build

- Vite + React 18 (`package.json`). Commands: `npm run dev`, `npm run build`,
  `npm run preview`.
- Files served to the browser live in `public/`. A reference like
  `assets/foo.jpg` resolves to `public/assets/foo.jpg`.
- `project/` is the original design handoff (prototypes and source images), not
  the live site. `project/uploads/` is a raw image dump the site does not use.

## Conventions

- Keep image files web-sized. Large source photos belong in `project/`, not in
  `public/`. The hero photo in particular should be optimised before shipping.
- Prefer narrow, single-page changes over full-site sweeps, so each change is
  easy to verify.

## Working notes for visual changes

Photo positioning, spacing, and other "looks right?" tuning is hard to get right
in a web session because the page cannot be seen here. Batch those into one
session ("show me a few options") or do them with a live preview, rather than one
nudge per session.
