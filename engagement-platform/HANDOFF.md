# KrispConsulting Community Engagement Platform
## Claude Code Handoff Brief

**Project:** Community engagement platform for KrispConsulting (krispierce.com.au)  
**Owner:** Kris Pierce, Principal Consultant  
**Status:** UI prototype complete. Needs: project scaffold, routing, backend contact form, deployment config.

---

## What This Is

A single-page marketing/product platform modelled structurally on OpenPoint's community engagement product page, rebuilt for Kris Pierce's consulting practice. Target sectors: not-for-profit, pharma/biotech, research teams, health organisations, genomics/rare disease, HTA & policy.

The platform has two jobs:
1. Communicate what the engagement methodology is and who it's for
2. Capture inbound enquiries via a contact form

---

## Current State

A single working React component exists at `src/components/EngagementPlatform.jsx`. It is fully functional as a prototype with:
- Complete UI (nav, hero, trust bar, platform overview, tools, industries, testimonials, about, contact form)
- Interactive states (tool cards expand on click, industry selector updates detail panel)
- Form with submission state (no backend yet)
- Brand tokens applied throughout (see BRAND.md)

**What it does NOT have yet:**
- Project scaffold (package.json, routing, etc.)
- Contact form backend
- SEO meta tags
- Analytics
- Deployment config
- Image assets (placeholders used)

---

## Task List for Claude Code

### 1. Scaffold the project
```
- React + Vite (preferred) or Next.js if SSR/SEO is priority
- Tailwind CSS (already used in component)
- Install dependencies: react, react-dom, tailwindcss, @tailwindcss/forms
- Set up tailwind.config.js with the brand colour tokens (see BRAND.md)
- Create index.html with correct meta tags (see SEO.md)
```

### 2. Break the monolithic component into sections
The current `EngagementPlatform.jsx` is a single file. Split into:
```
src/
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    sections/
      Hero.jsx
      TrustBar.jsx
      PlatformOverview.jsx
      ToolsSection.jsx        ← interactive grid, keep state
      IndustriesSection.jsx   ← keep sidebar selector state
      Testimonials.jsx
      AboutKris.jsx
      ContactForm.jsx
    ui/
      Tag.jsx                 ← reusable pill/tag component
      FeatureCard.jsx
      MetricCard.jsx
  data/
    tools.js                  ← extract TOOLS array
    industries.js             ← extract INDUSTRIES array
    testimonials.js           ← extract TESTIMONIAL_CARDS array
  styles/
    globals.css
  App.jsx
  main.jsx
```

### 3. Contact form backend
Options in order of preference:
- **Option A:** Resend (resend.com) — simple API, good free tier, emails land in Kris's inbox
- **Option B:** Formspree — no backend needed, drop-in for static sites
- **Option C:** Netlify Forms — if deploying to Netlify

Form fields: name, organisation, email, message  
On submit: POST to endpoint, show success state (already designed in UI)  
Validation: name and email required; inline error states  
Send to: info@krispierce.com.au (confirm with Kris before wiring)

### 4. SEO meta tags
See SEO.md for full tag set. Add to index.html and/or via react-helmet-async.

### 5. Fonts
The component uses DM Sans as primary. Load from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
```

### 6. Kris's photo
The about section has a placeholder (`KP` initials on dark background). When a photo is provided:
- Drop into `public/images/kris-pierce.jpg`
- Replace the placeholder div in `AboutKris.jsx` with `<img src="/images/kris-pierce.jpg" alt="Kris Pierce" className="w-full aspect-square object-cover rounded-3xl" />`

### 7. Deployment
- **Preferred:** Vercel (free tier, zero config for Vite/Next.js, custom domain support)
- Custom domain: point to krispierce.com.au/engage or a subdomain engage.krispierce.com.au
- If WordPress integration is needed instead: build as static export and embed via iframe or WP plugin

---

## What NOT to Change

- Brand colours (see BRAND.md) — non-negotiable
- Copy and messaging — do not rewrite, do not add corporate jargon
- No em dashes anywhere in copy
- UK English throughout
- The "Book a conversation" CTA label (not "Book a Demo", not "Get Started")
- The five core messages (see BRAND.md)

---

## Files in This Package

```
HANDOFF.md          ← this file
BRAND.md            ← colour tokens, typography, voice rules
SEO.md              ← meta tags, OG tags, structured data
src/
  components/
    EngagementPlatform.jsx   ← the working prototype
```

---

## Questions to Resolve Before Going Live

1. Contact form destination email — confirm with Kris (likely info@krispierce.com.au)
2. Deployment target — standalone subdomain or embedded in existing WordPress site?
3. Analytics — Google Analytics 4 or privacy-first alternative (Plausible)?
4. Photo — supply headshot for about section
5. Testimonials — current quotes are illustrative placeholders; confirm real quotes before launch

---

## Contact

Kris Pierce | krispierce.com.au | Sunshine Coast, QLD
