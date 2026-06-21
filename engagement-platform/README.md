# KrispConsulting Engagement Platform

Community engagement marketing site for KrispConsulting. React + Vite + Tailwind, deploys to Vercel.

This is a standalone sub-project. The parent repo holds the main `krispierce.com.au` site.

## Run locally

```bash
npm install
npm run dev
```

The dev server starts at http://localhost:5173.

## Build

```bash
npm run build      # writes to dist/
npm run preview    # serves the built output
```

## Project structure

```
api/
  contact.js              ← Vercel serverless function (Resend integration)
src/
  components/
    layout/               ← Navbar, Footer
    sections/             ← Hero, TrustBar, PlatformOverview, ToolsSection,
                            IndustriesSection, Testimonials, AboutKris, ContactForm
    ui/                   ← Tag, FeatureCard, MetricCard
  data/                   ← TOOLS, INDUSTRIES, FEATURES, TESTIMONIALS, navigation, metrics
  styles/globals.css      ← Tailwind layers and CSS variables
  App.jsx
  main.jsx
index.html                ← SEO meta tags, OG, structured data, fonts
vite.config.js
tailwind.config.js
postcss.config.js
vercel.json
```

## Contact form backend

Two options, configured via env vars.

### Option A — Resend (preferred, via `/api/contact`)

Set on the Vercel project (server-side, NOT prefixed with `VITE_`):

| Var | Example |
| --- | --- |
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxxxxx` |
| `CONTACT_TO_EMAIL` | `info@krispierce.com.au` |
| `CONTACT_FROM_EMAIL` | `engage@krispierce.com.au` (must be a verified Resend sender) |

The form POSTs to `/api/contact`. The serverless function validates input and forwards via Resend.

### Option B — Formspree (no backend)

Set in `.env` (or Vercel env vars):

```
VITE_FORMSPREE_ID=xxxxxxxxxxxx
```

When `VITE_FORMSPREE_ID` is present the form POSTs directly to Formspree instead of `/api/contact`.

## Deployment to Vercel

1. Import this folder as a new Vercel project (root directory: `engagement-platform/`).
2. Add the env vars above.
3. Point `engage.krispierce.com.au` (or `krispierce.com.au/engage`) at the deployment.

## Brand and copy rules

See [`BRAND.md`](./BRAND.md) and [`SEO.md`](./SEO.md). Voice rules are non-negotiable:
no em dashes, UK English, no corporate jargon, no inspirational language. CTA is "Book a conversation".

## Photo

Drop `kris-pierce.jpg` into `public/images/` and replace the placeholder block in
`src/components/sections/AboutKris.jsx` (instructions are inline as a comment).

## Outstanding questions

These need answers from Kris before launch:

1. Contact form destination email (assumed `info@krispierce.com.au`)
2. Deployment target (standalone subdomain vs WordPress embed)
3. Analytics (Plausible vs GA4)
4. Headshot for about section
5. Real testimonials (currently illustrative)
