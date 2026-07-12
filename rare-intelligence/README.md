# Rare Intelligence

The course brand for rare disease capability, and its design system. This is a
**standalone, self-contained package**. It does not depend on the Kris Pierce
Consulting brand system, and it is meant to be lifted out of this repository and
moved into the Rare Intelligence repository as its own thing.

Rare Intelligence is complementary to Kris Pierce Consulting, developed in
partnership with the practice, but it is its own brand: its own name, colour,
type, motif and design system. It does not reuse the v3 palette, the Outfit and
Archivo fonts, or the cream and forest neutrals. The point is a distinct,
engaging brand for the courses that still sits comfortably alongside Kris.

## What is here

```
rare-intelligence/
  README.md                     this file
  BRAND.md                      the brand: name, story, colour, type, motif, voice
  design-system/
    DESIGN-SYSTEM.md            how the system works and how to use it
    tokens.css                  design tokens as CSS custom properties (the source of truth)
    tokens.json                 the same tokens, machine-readable
    fonts.css                   the brand fonts, embedded (no network dependency)
    components.css              the component library, built on the tokens
    showcase.html               a rendered reference of colours, type and components
  index.html                    the sales and catalogue page, built on the system
  pages/                        space for further pages (course player, certificate)
```

## Quarantine

This package is deliberately isolated from Kris Pierce Consulting branding:

- **No shared tokens.** It does not read `brand-guidelines.md`, `typography-guide.md`
  or `_ds/`. Everything it needs is in `design-system/`.
- **Its own fonts.** Bricolage Grotesque and Figtree, embedded locally, not
  Outfit or Archivo.
- **Its own palette.** Ocean blue with teal and a coral spark, on cool navy-based
  neutrals, not the v3 teal/forest on warm cream.
- **Its own namespace.** Every class is prefixed `ri-`, and every token
  `--ri-`, so nothing can collide with or leak into another system.

The only connection to Kris is an endorsement line ("in partnership with Kris
Pierce Consulting"). Remove that line and the package is fully independent.

## How to use it

Load the three stylesheets in order, then write markup with `ri-` classes:

```html
<link rel="stylesheet" href="design-system/fonts.css">
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/components.css">
```

See `index.html` for a full page, `design-system/showcase.html` for the parts,
and `design-system/DESIGN-SYSTEM.md` for the reference.

## Moving it to the Rare Intelligence repo

Copy the whole `rare-intelligence/` folder to the root of the Rare Intelligence
repository. It has no external dependencies and no build step, so it works as
soon as it lands. This replaces any earlier Rare Intelligence material there.

## Status

A brand and a design system, with one page built on it. The commercial,
platform, content-governance and automation strategy for the courses lives
separately in `../training/rare-intelligence/` and is brand-agnostic; it applies
to this brand unchanged.
