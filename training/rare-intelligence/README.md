# Rare Intelligence (commercial and platform blueprint)

> **Note on the brand.** Rare Intelligence is now its own independent brand with
> its own design system, quarantined from Kris Pierce Consulting branding. That
> brand lives in `/rare-intelligence/` at the repository root (fonts, ocean-blue
> palette, tokens, components, and a sales page), and it supersedes the
> Kris-derived visual approach once described in this folder's
> `01-brand-identity.md` and `prototype-sales-page.html`.
>
> This folder remains the **commercial, platform, content-governance and
> automation** blueprint for the courses. It is brand-agnostic and applies to the
> new brand unchanged. Where documents here describe visuals as a sub-brand of
> Kris, read `/rare-intelligence/BRAND.md` instead.

Rare Intelligence turns the rare disease course suites in `../` into a sold,
delivered, professional online product: families and advocates, and the
organisations that serve them, learning the systems that decide outcomes, with
content that stays current as the law moves.

## The decisions made

- **Name:** Rare Intelligence.
- **Platform:** your own stack. No paid LMS, no monthly subscription. Courses are
  sold and delivered on your existing Vercel and React site, with content from
  this repo. The only costs are per-sale (Stripe) and hosting you already pay.
- **Selling from launch:** Stripe is live from day one. This is a paid product,
  not a free list-builder, though a short free intro course is recommended as the
  top of the funnel.
- **No AI tutor.** Removed from scope. The differentiators are the depth of the
  content, the design, and that it stays current.
- **Catalogue:** the two existing suites are the launch catalogue. The
  families-and-advocates suite (six courses) and the organisations suite (seven
  courses) become the first Rare Intelligence programs.
- **Jurisdiction:** Australian throughout. ACNC, TGA, PBAC, MSAC, the National
  Strategic Action Plan for Rare Diseases, the NHMRC Statement on Consumer and
  Community Involvement, and the Medicines Australia Code of Conduct.

## What this folder is

The build blueprint. The course content lives one level up (the two suites and
the subject repository). This folder is how that content becomes a business.

| File | What it covers |
|---|---|
| `00-commercial-strategy.md` | How the courses are positioned, packaged, priced and sold from your own site |
| `01-brand-identity.md` | The Rare Intelligence sub-brand: name, visual system, course naming, certificate |
| `02-platform-architecture.md` | The own-stack build: sell and deliver on your Vercel and React site, with Stripe |
| `03-content-governance.md` | The mechanism that keeps content current as rules and law change |
| `04-automation-signup-to-certificate.md` | The end-to-end automation, from purchase to certificate delivery |
| `05-design-specs.md` | High-fidelity design specs for the sales, catalogue, player and certificate surfaces |

## The standard

No AI filler. No em dashes. Australian English. Peer to peer, never salesy, even
in the marketing. A learner should finish a Rare Intelligence course able to do
something they could not do before, and the product around that learning should
look and work as if a specialist built it, because one did.

## Status

This is a blueprint, not a running system. The content and the plan are here.
Building the course pages, wiring Stripe, and turning on the automation need your
Stripe and Kit accounts and your go-ahead. Each document ends with the specific
next actions to move from blueprint to live.
