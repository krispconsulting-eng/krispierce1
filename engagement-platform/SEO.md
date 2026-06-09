# SEO Reference — KrispConsulting Engagement Platform

---

## index.html Meta Tags

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary -->
  <title>Community Engagement for Health & Research | KrispConsulting</title>
  <meta name="description" content="Participatory research, co-design, and patient-centred insights for not-for-profit, pharma, biotech, and research organisations. Kris Pierce, KrispConsulting." />
  <meta name="author" content="Kris Pierce, KrispConsulting" />
  <link rel="canonical" href="https://krispierce.com.au/engage" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://krispierce.com.au/engage" />
  <meta property="og:title" content="Community Engagement for Health & Research | KrispConsulting" />
  <meta property="og:description" content="Participatory research, co-design, and patient-centred insights. Together, we discover what works." />
  <meta property="og:image" content="https://krispierce.com.au/images/og-engagement.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="KrispConsulting" />
  <meta property="og:locale" content="en_AU" />

  <!-- Twitter/X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Community Engagement for Health & Research | KrispConsulting" />
  <meta name="twitter:description" content="Participatory research, co-design, and patient-centred insights. Together, we discover what works." />
  <meta name="twitter:image" content="https://krispierce.com.au/images/og-engagement.png" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />

  <!-- Favicon (to be supplied) -->
  <link rel="icon" type="image/png" href="/favicon.png" />
</head>
```

---

## Structured Data (JSON-LD)

Add inside a `<script type="application/ld+json">` tag in index.html:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "KrispConsulting",
  "description": "Strategic advisor in consumer engagement, rare disease, and health policy. Participatory research and co-design for health organisations, industry partners, and not-for-profit organisations.",
  "url": "https://krispierce.com.au",
  "founder": {
    "@type": "Person",
    "name": "Kris Pierce",
    "jobTitle": "Principal Consultant",
    "description": "Strategic advisor in consumer and patient engagement across the healthcare sector.",
    "url": "https://krispierce.com.au"
  },
  "areaServed": "AU",
  "serviceType": [
    "Participatory Research",
    "Co-Design",
    "Consumer Engagement",
    "Patient-Centred Outcomes",
    "Health Technology Assessment",
    "Rare Disease Advocacy"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Queensland",
    "addressCountry": "AU"
  }
}
```

---

## Target Keywords (inform copy and headings, do not stuff)

**Primary:**
- consumer engagement healthcare Australia
- participatory research health organisations
- co-design rare disease
- patient-centred outcomes consulting
- HTA consumer engagement

**Secondary:**
- community engagement pharma biotech
- rare disease consumer advocacy Australia
- health policy consumer engagement
- patient engagement not-for-profit

**Long tail:**
- community engagement tools health research
- participatory research NFP Australia
- co-design workshops patient community

---

## Page Speed Notes

- DM Sans loaded via Google Fonts preconnect (already in meta tags above)
- No third-party scripts beyond analytics (add last)
- Images: compress to WebP, max 200KB for hero/above-fold assets
- OG image: create a 1200×630px branded image (navy background, KrispConsulting wordmark, tagline)

---

## Analytics

Install one of:
- **Plausible** (privacy-first, recommended for health sector optics): `<script defer data-domain="krispierce.com.au" src="https://plausible.io/js/script.js"></script>`
- **Google Analytics 4:** standard gtag snippet

Confirm preference with Kris before adding.

---

*Version: 1.0 | June 2026*
