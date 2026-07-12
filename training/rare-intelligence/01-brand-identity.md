# Brand identity: Rare Intelligence

The course brand. Rare Intelligence is a new identity for all courses, sitting
under Kris Pierce Consulting. This document defines the name, how it relates to
the parent, the visual system (an extension of the v3 system, not a new one), the
course naming convention, and the certificate.

Everything here inherits `brand-guidelines.md` and `typography-guide.md`. Where
this document is silent, those win. Rare Intelligence is a room in the same
house, not a different house.

## The name

**Rare Intelligence.** It works on two levels, both true to the practice. "Rare"
names the field. "Intelligence" names what the courses give: the working
knowledge to act inside a system, and the insight generation that is Kris's core
professional offer. It reads as capability, not comfort, which is exactly the
line the consulting practice holds. It is not a charity name and not a coaching
name.

Before any public use, run a trademark and business-name availability check
(IP Australia and the domain), because "intelligence" is a common term.

## Relationship to the parent brand

An **endorsed sub-brand**. Rare Intelligence leads, Kris Pierce Consulting
endorses. The relationship is always visible, never hidden.

- **Lock-up:** the Rare Intelligence wordmark, with "by Kris Pierce Consulting"
  or "A Kris Pierce Consulting program" set beneath or beside it in the overline
  style (Archivo, 12px, weight 600, uppercase, tracking 0.2em).
- **Where it lives:** on a section of the existing site, ideally a clear path
  such as krispierce.com.au/learn or a learn. subdomain. Not a separate website
  with a separate identity. The nav and footer keep the learner inside the Kris
  Pierce world.
- **Why endorsed, not standalone:** the entire value proposition is that these
  courses come from Kris specifically. Hiding the parent would throw away the
  moat. The sub-brand exists to give the courses a product name and a shelf, not
  to distance them from her.

## Visual system

Rare Intelligence is a sibling of the consulting brand, not a twin. It keeps the
same palette and the same fonts, because those are fixed. It earns its own
identity through temperament and structure. Five deliberate moves together make a
course page unmistakably its own while staying in the family. The test is simple:
side by side with krispierce.com.au, it should read as clearly related and
clearly not the same page.

### The five moves

1. **Light-led, not dark-led.** The consulting site leads dark: a full
   forest-gradient hero, atmospheric. Rare Intelligence leads light: a cream,
   editorial layout with the forest gradient used only in contained accent panels
   and the final call to action, never as the page ground. It reads as a calm
   learning product, a field guide, not a practice statement.
2. **The palette used boldly, and colour-coded.** The consulting site uses the
   palette quietly: mostly cream and forest, with teal and blue as restrained
   accents. Rare Intelligence uses the same palette with more energy, because a
   course catalogue that looks austere does not feel worth enrolling in. Blue 600
   leads, Teal 600 supports, and the tiers are **colour-coded**: Orientation
   teal, Partnering blue, Influence green (Sage). Coloured washes fill featured
   cards, vivid teal-to-blue gradients carry the hero pathway card and the bonus
   banner, and each course card takes a slim top accent in its tier colour. No
   new hues are introduced; the existing v3 palette is simply used at full
   strength and given a job (the tier system) rather than kept decorative.
3. **A signature motif: the pathway.** Learning is a pathway, and the courses are
   already built in tiers. A recurring node-and-line device carries this: a step
   diagram in the hero, a small leading node on every eyebrow label, node bullets
   in lists. It is the ownable graphic that replaces the consulting site's blobs
   and arcs, and it is drawn in plain CSS and simple SVG, never a heavy asset.
4. **Numbered tiers.** Courses are grouped under large numbered tier indices
   (01 Orientation, 02 Partnering, 03 Influence). The numbering is honest: the
   tiers are a real sequence, so the structure encodes something true. It gives
   the catalogue a field-guide rhythm the consulting site does not have.
5. **A tighter, reference-card language.** Where the consulting site uses large,
   soft, floating cards (24 to 32px radius, deep shadow), Rare Intelligence uses
   smaller-radius (14px), flatter, more precise cards, each with an index numeral
   and hairline structure. It signals reference and study, not marketing.

Supporting these: a **light nav** (cream ground, dark text) distinct from the
consulting site's transparent-over-forest nav, so the sibling identity reads from
the first glance.

### Tokens

- **Primary accent:** Blue 600 `#3E6F8E`; eyebrow labels on light use Blue 700
  `#305670`.
- **Secondary accent:** Teal 600 `#3D7A6B`, used for pathway and bundle cues.
- **Tier colours (colour-coding):** Orientation and Foundations teal (`#3D7A6B`,
  wash `#E7F0EC`), Partnering and Sustainability blue (`#3E6F8E`, wash `#EAF1F5`),
  Influence and Research readiness green/Sage (`#5E7A55`, wash `#EDF2E9`). Each
  tier's number badge, card top accent and index numeral take its colour.
- **Signature gradients:** the vivid teal-to-blue gradient
  `linear-gradient(142deg, #2F5E52 0%, #3D7A6B 42%, #3E6F8E 100%)` for the hero
  pathway card and the bonus banner; the forest gradient
  `linear-gradient(165deg, #1E3D34 0%, #234A52 100%)` reserved for the single
  deep closing call to action.
- **Page ground:** Cream 50 `#FBF9F5`; cards Paper white; section bands Cream 100.
- **Progress and "current" cues:** the status hues already defined, Sage 500
  `#5E7A55` for complete and for "current as at", Amber 500 `#B5872F` for "review
  due", Slate 500 `#4E6373` for informational notices.

### Typography

Unchanged from the v3 system. Outfit for display, Archivo for body. Course titles
use the Display or H1 treatment (Outfit 600). The Rare Intelligence wordmark uses
Outfit; see below. No new fonts, ever.

### Wordmark

Set "Rare Intelligence" in Outfit. Two weights give the mark its character
without a custom logo:

- "Rare" in Outfit weight 300 (light).
- "Intelligence" in Outfit weight 600 (semibold), in Blue 600 on light grounds.

The weight contrast alone makes it a mark. On dark surfaces, "Intelligence" may
take Blue 200 `#D2E1EA` for emphasis, mirroring the hero-headline treatment. This
can ship as live text immediately; a drawn logo can follow later if wanted, but
it is not needed to launch.

### Iconography and imagery

Follow the existing site. Line icons in Blue 600 or Teal 600 on Accent Wash
`#E7F0EC` chips. Photography, where used, follows the consulting site's treatment
and stays web-sized per `CLAUDE.md`. No stock-photo clichés of lightbulbs,
handshakes or ladders.

## Course naming convention

A consistent scheme so the catalogue reads as one product, and so a course title
tells a buyer who it is for and what it does.

**Format:** `Rare Intelligence: [Course name]`, with an audience tag and a tier
label in the metadata, not the title.

Examples, using the launch catalogue:

| Program | Course | Public title |
|---|---|---|
| Families and advocates | 1 | Rare Intelligence: Understanding the Rare Disease System |
| Families and advocates | 4 | Rare Intelligence: Access, Regulation and HTA in Australia |
| Organisations | 1 | Rare Intelligence: Governance, Compliance and Running an Organisation |
| Organisations | 5 | Rare Intelligence: Making the Case to Partners and Investors |

The two suites are the two **programs**. A learner buys a **course** or a
**pathway** (a full program). Keep this vocabulary consistent everywhere:
program, pathway, course, module, lesson. Do not let "class", "masterclass" or
"training" creep in; they carry the wrong register.

## The certificate

The certificate is a brand artefact and a credibility document, so it is designed,
not templated from a generic tool. Specification:

- **Surface:** Paper white `#FFFFFF` with a forest-gradient header band, or a full
  cream document with a forest footer rule. Either way, cooled shadows only, never
  pure black.
- **Header:** the Rare Intelligence wordmark, with the "by Kris Pierce Consulting"
  endorsement line beneath in overline style.
- **Body:** "This certifies that [Name] completed [Course title]", the name set in
  Outfit H1 (weight 600), the rest in Archivo.
- **Metadata:** completion date, a unique certificate ID, and the crucial line
  **"Content current as at [review date]"**, which ties the certificate to the
  content-governance mechanism and quietly signals that this is not a
  buy-once-rot-forever course.
- **Signature:** Kris's name and role, and optionally a signature image.
- **Format:** generated as a PDF from a branded HTML template, so it inherits the
  exact fonts and colours and needs no design tool. See
  `04-automation-signup-to-certificate.md` for how it is produced and delivered.

## What not to do

- Do not introduce a new palette or new fonts. The five moves are all
  temperament and structure; they work precisely because the materials stay the
  v3 system. Change the materials and it stops being a sibling.
- Do not drop the parent endorsement to make Rare Intelligence look bigger. The
  parent is the point.
- Do not use em dashes, motivational language, or launch-marketing urgency
  anywhere in the brand's copy. The restraint is the brand.

## Next actions

- Run the trademark, business-name and domain availability check on "Rare
  Intelligence".
- Confirm the URL path: krispierce.com.au/learn or a learn. subdomain.
- Approve the blue-led accent shift and the two-weight wordmark, or adjust.
