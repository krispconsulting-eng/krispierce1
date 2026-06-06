# Kris Pierce Consulting — Design System

A warm, authoritative design system for **Kris Pierce Consulting**, an independent
healthcare-engagement consultancy. Kris partners with pharmaceutical, biotech, research
and not-for-profit teams — and with advocates and communities — to put the *person at the
centre of healthcare* into the room, through **workshops, focus groups, co-design, and
engagement frameworks**.

The brand voice is *expert but warm*: a leading practitioner who builds genuine partnership,
never a salesperson. The design lets the work speak; the words stay quiet and businesslike.

---

## Sources

This system was built **from a brand brief + a layout/colour reference** — no prior brand
assets, fonts, or codebase existed.

- **`uploads/Doc10.docx`** — a Word document containing 7 screenshots of a personal-brand
  landing-page template (a generic "career coach" mock). The client supplied it as the
  desired **website layout and colour palette**. We adapted its *structure and warm greige
  palette* — not its content — into Kris's healthcare brand. Extracted frames live in
  `uploads/extracted/`.
- **Brand brief (chat):** services, audience, and tone described directly by the client.
- **`NEW BRANDING MAY 26/`** — an attached folder that mounted empty (only macOS
  `.DS_Store` metadata). No usable assets; flagged to the client.

> **Spelling:** the client writes Australian/British English ("colour", "organisation",
> "centre", "programme"). All brand copy follows AU/British spelling.

---

## Content fundamentals — how we write

> **Canonical source:** [`guidelines/brand-voice-guide.md`](guidelines/brand-voice-guide.md)
> is the approved voice guide (v1.0, June 2026). It governs all copy; the notes below are a
> quick summary. Key hard rules: **UK/Australian English**, **no em dashes** (use commas,
> colons or semicolons), no corporate jargon ("stakeholder", "leverage", "best practice"),
> and no casual closings ("cheers", "happy to help"). Core language: *insights*,
> *patient-centred outcomes*, *flexible methodology*, *together we discover*, *co-design*,
> *participatory research*. Official hero line:
> **"Insights. Patient-centred outcomes. Flexible methodology. Together, we discover what works."**

**Tone:** professional, authoritative, direct — expert and pragmatic, never a cheerleader,
trainer or motivational speaker. We let the track record and the work sell, not adjectives
or urgency.

**Person & voice**
- First person **"I"** — Kris is a sole practitioner; the brand is personal.
- **"You" / "we" / "together"** to signal partnership ("what I can do *with you*").
- Name communities as collaborators, not subjects ("with", never "about").

**Casing & mechanics**
- Sentence case everywhere except the tracked, uppercase **overline** labels.
- **No em dashes** (brand rule); use commas, colons or semicolons. No exclamation marks; no
  ALL-CAPS shouting. Use contractions; vary sentence length.
- UK/Australian spelling. Numerals stay modest and concrete (e.g. "20+ years"), never inflated
  growth-hack stats.

**Vibe:** considered, human, credible. Reassuring without being soft; rigorous without being
cold.

**Say this**
- "I've spent two decades bringing patients into the rooms where decisions get made."
- "Here's the work. Have a look and tell me what resonates."
- "Engagement that communities recognise as their own, and organisations can stand behind."

**Not this**
- "Revolutionary, world-class engagement solutions that 10× your impact!"
- "Don't miss out — limited spots, book now!"

**No emoji** in brand copy. The brand's mark is the **script wordmark**, used on its own.

---

## Visual foundations

**Overall feel:** warm editorial minimalism. Cream paper, greige/taupe neutrals, a single
clay accent, soft ink-tinted shadows, generous whitespace, and confident italic display
type over full-bleed warm photography.

**Colour** (see `tokens/colors.css`)
- **Cream / paper** — `--cream-50` page, `--cream-100` alt sections, `#FFFFFF` cards.
- **Taupe / greige** — the signature warm neutral (`--taupe-100…700`), used for backgrounds,
  photo overlays and depth. `--taupe-400 #8C867A` is the hero mushroom.
- **Ink** — warm near-black `--ink-900 #1D1C21` for text, dark panels and buttons.
- **Clay** — the *single* accent (`--clay-400 #CDA67A` tan → `--clay-600 #A2774A`), used
  sparingly: links, small highlights, the warm-studio portrait backdrop.
- **Status** hues are deliberately desaturated (sage/amber/brick/slate) so they never compete
  with the brand.
- Backgrounds are flat colour or warm photography — **no bluish-purple gradients**. The only
  gradients are warm taupe→clay CTA panels and text-protection scrims over imagery.

**Type** (see `tokens/typography.css`)
- **Display — Archivo.** Heavy **italic** for statement headlines & CTAs ("Bring the person
  to the *centre* of healthcare"); upright semibold for section titles.
- **Text — Hanken Grotesk.** Calm, lightly humanist grotesque for body, labels, UI.
- Tight tracking on display (−0.03em), relaxed line-height (1.6) on body. Overlines are 12px,
  uppercase, 0.16em tracking.
- ⚠️ **Font substitution:** no brand fonts were supplied. Archivo + Hanken Grotesk are the
  nearest Google Fonts matches, loaded via remote `@import` in `tokens/fonts.css`. If you
  have licensed faces (e.g. Neue Haas Grotesk Display), drop the files in `assets/fonts/`
  and replace the import with `@font-face` rules.

**Spacing & layout** — 4px base scale, `--container-max 1240px`, fluid `--section-y` rhythm.
Layouts breathe; asymmetric two-column grids (text vs. image) are the workhorse.

**Shape & elevation**
- **Radii:** large and soft — `--radius-lg 24px` cards, `--radius-xl 32px` hero/panels,
  full **pills** (999px) for every button and chip.
- **Shadows:** soft, diffuse, *ink-tinted* (never pure black). Cards use `--shadow-card`;
  glass elements use `--shadow-glass` with an inner top highlight.
- **Borders:** hairline `rgba(ink, .09–.16)`. Cards = white surface + hairline + soft shadow.

**Glass & blur** — frosted pills and floating stat cards (`backdrop-filter: blur(16px)`) are
used **only over photography**, never on plain cream. They carry eyebrows, CTAs and proof
points on the hero.

**Imagery** — warm, candid, natural-light photography of people mid-conversation (not posed
stock). Treatments: full-bleed with an ink scrim for text safety; warm tan studio backdrops;
ink→clay duotone. Placeholders use `<image-slot>` so the client drops their own photos.

**Motion** — restrained. Gentle `--ease-out` fades and 1–2px hover lifts; buttons nudge their
arrow badge on hover and shrink slightly on press. No bounce, no infinite loops.

**Interaction states**
- *Hover:* primary buttons darken to black + soft shadow + 1px lift; secondary fills ink;
  links underline in clay; cards lift 3px.
- *Press:* slight scale-down (0.985).
- *Focus:* 2px clay outline / 3px clay focus ring on fields.

---

## Iconography

- **Set:** [Lucide](https://lucide.dev) — line icons, ~1.9px stroke, round caps/joins.
  Their weight and warmth suit the brand. In the UI kit they're inlined as SVG in
  `ui_kits/website/primitives.jsx` (`ICON_PATHS`); use the same set in new work (CDN:
  `https://unpkg.com/lucide`). *Substitution flagged:* no brand icon set was supplied.
- Icons usually sit inside a circular **`IconChip`** (ink by default; `ghostInverse` on dark
  panels; `wash`/`soft` tints).
- **Logo:** the brand mark is the supplied **script wordmark** (`logo-wordmark.png`, a warm
  slate calligraphic "Kris Pierce / CONSULTING"), used on its own.
  Use the `Logo` component or the `assets/` files; cream variants exist for dark surfaces.
- **No emoji.** Unicode is only used incidentally (em dash, ×). Social icons (LinkedIn, mail)
  are Lucide line icons in outlined circular buttons.

---

## Index / manifest

**Root**
- `styles.css` — the entry point consumers link. `@import`s only.
- `readme.md` — this guide. · `SKILL.md` — portable Agent-Skill wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
`base.css` (reset + base element styles).

**`assets/`** — `logo-wordmark.png` (slate script wordmark, transparent) +
`logo-wordmark-cream.png` (for dark surfaces). *For in-app lockups prefer the `Logo` component.*

**`components/core/`** — reusable primitives (React). Each has `.jsx` + `.d.ts` +
`.prompt.md`; the directory's `*.card.html` files render them in the Design System tab.
- `Button` — stadium pill + arrow badge (primary / secondary / ghost / inverse / glass)
- `Logo` — loop mark + script wordmark lockup (defaults to wordmark only)
- `Pill` — eyebrow / tag / glass label
- `IconChip` — circular icon container
- `Badge` — status / category
- `Avatar` + `AvatarStack` — image/initials + overlap cluster
- `Card` — surface container (surface / alt / outline / inverse)
- `StatCard` — floating glass proof card
- `Field` — labelled input / textarea / select

**`guidelines/`** — foundation specimen cards for the Design System tab (Colours, Type,
Spacing, Brand).

**`ui_kits/website/`** — the marketing-site recreation (self-contained, renders offline):
`index.html`, `kit.css`, `primitives.jsx`, `sections.jsx`, `sections2.jsx`, `app.jsx`,
`image-slot.js`. Surfaces: nav, hero, about, "where teams get stuck", offerings (dark panel),
testimonials carousel, CTA banner, contact form, big-email footer. Scroll-reveal entrance
animations (reduced-motion safe).

**`ui_kits/deck/`** — a brand-styled capability deck (`index.html` + `deck-stage.js`): eight
16:9 slides (title, what I do, who I work with, methodology, the difference, principle,
experience, contact) using the voice guide. Arrow-key / thumbnail nav, print-to-PDF built in.

**Namespace:** components are exposed in card HTML as
`window.KrisPierceConsultingDesignSystem_ec4dc9`.

---

## Caveats & how to make it perfect

- **Fonts** are Google-Fonts stand-ins (Archivo + Hanken Grotesk). Share licensed brand fonts
  to lock them in.
- **Imagery** is placeholder (`<image-slot>` + warm gradients). Drop in real photos of Kris
  and of engagement work to bring it to life.
- **Copy** (bio, testimonials, "20+ years") is realistic placeholder in the brand voice —
  replace with Kris's true credentials, named engagements and approved quotes.
- The reference template was generic; this system is an *original* brand built on its warm
  palette + layout logic.
