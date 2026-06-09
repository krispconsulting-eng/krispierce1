# Brand Reference — KrispConsulting
## Design Tokens, Typography, Voice

---

## Colour Tokens

These are non-negotiable. Do not substitute.

```css
/* Neural Ink v2.1 — KrispConsulting application */

:root {
  /* Primary surfaces */
  --color-navy:      #1E3A6E;   /* Primary surfaces, nav active, CTA background */
  --color-ink:       #0D1B2A;   /* Body text, dark backgrounds */
  --color-canvas:    #F8F7F4;   /* Page background */
  --color-white:     #FFFFFF;   /* Card surfaces, reversed text */

  /* Accent — use sparingly, max one instance per viewport */
  --color-mulberry:  #8E3B5E;   /* CTA highlight, quotes, accent headings */

  /* Hint — subtle interactions only */
  --color-cobalt:    #4A7EC7;   /* Eyebrow labels, tag highlights, hover hints */

  /* Text opacity scale */
  --text-primary:    rgba(13, 27, 42, 1.0);   /* Headings */
  --text-secondary:  rgba(13, 27, 42, 0.60);  /* Body, descriptors */
  --text-tertiary:   rgba(13, 27, 42, 0.40);  /* Labels, captions */
}
```

### Tailwind Config Additions

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy:    '#1E3A6E',
        ink:     '#0D1B2A',
        canvas:  '#F8F7F4',
        mulberry:'#8E3B5E',
        cobalt:  '#4A7EC7',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
}
```

### Retired tokens — do not use

- v2.0 colour tokens (any teal, `#1B2838` Ink Slate, "Sustained Signal" palette)
- Inter typeface
- Purple gradients

---

## Typography

**Primary typeface:** DM Sans (Google Fonts)  
**Weights used:** 400 (body), 500 (medium/label), 600 (semibold/nav), 700 (bold/heading)  
**Optical size range:** 9..40 (use `opsz` axis for display sizes)

```css
/* Type scale */
--text-hero:    clamp(2.5rem, 5vw, 3.75rem);  /* Hero h1 */
--text-h2:      clamp(1.875rem, 3vw, 2.5rem); /* Section headings */
--text-h3:      1.25rem;                       /* Card headings */
--text-body:    1rem;                          /* Body, 16px base */
--text-small:   0.875rem;                      /* Secondary body */
--text-label:   0.75rem;                       /* Eyebrows, tags, captions */

--leading-tight:  1.1;
--leading-normal: 1.6;
--tracking-wide:  0.05em;  /* Uppercase eyebrow labels only */
```

**Never use:** Inter, Roboto, Arial, system-ui as display face, Space Grotesk

---

## Spacing and Layout

```css
--radius-sm:   5px;     /* Inputs, small tags */
--radius-md:   12px;    /* Cards */
--radius-lg:   16px;    /* Large cards */
--radius-xl:   24px;    /* Feature panels, about image */

--section-py:  5rem;    /* Standard section vertical padding */
--container:   72rem;   /* Max content width (max-w-6xl) */
--gutter:      1.5rem;  /* Horizontal padding on mobile */
```

---

## Voice Rules (apply to all copy)

### Non-negotiables
- No em dashes. Use commas, colons, or semicolons.
- UK English throughout (organisation not organization, colour not color, etc.)
- No "stakeholder engagement" — be specific
- No "meaningful engagement" — be specific
- No "patient empowerment"
- No "building resilience"
- No "giving consumers a voice"
- No corporate jargon: synergy, leverage, unlock, best practice, deep dive
- No inspirational language

### Voice character
- Direct. Professional. Expert but not distant.
- Practical over theoretical.
- Concrete examples over abstractions.
- Varied sentence length. Contractions are fine.
- Strong opinions backed by evidence. Humble where appropriate.

### CTA copy
- Primary CTA: "Book a conversation" (not "Book a Demo", not "Get Started", not "Let's chat")
- Secondary CTA: "See the tools" or "Talk about your context"
- Form submit: "Send message"
- Link CTA: "Start a conversation →"

### Five core messages (anchor all copy to these)
1. Insights drive outcomes — research only matters if it changes something
2. Patient-centred outcomes are measurable — not vague "engagement"
3. Methodology is flexible — chosen based on the challenge, not prescribed
4. Together we discover — real partnership, not consultation
5. Authenticity matters more than compliance — compliance is a byproduct

---

## Component Patterns

### Tags / Pills
```jsx
// Use TAG_COLORS map from EngagementPlatform.jsx
// Mulberry: bg-[#8E3B5E]/15 text-[#8E3B5E]
// Cobalt:   bg-[#4A7EC7]/15 text-[#4A7EC7]
// Navy:     bg-[#1E3A6E]/15 text-[#1E3A6E]
// Sizing:   text-[10px] font-semibold px-2.5 py-1 rounded-full
```

### Eyebrow labels
```jsx
// Always uppercase, tracked wide, cobalt or mulberry, text-xs
<div className="inline-flex items-center gap-2 text-[#4A7EC7] text-xs font-semibold uppercase tracking-wider mb-4">
  Section label
</div>
```

### Primary button
```jsx
<button className="bg-[#1E3A6E] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1E3A6E]/90 transition-all text-base shadow-lg shadow-[#1E3A6E]/20">
  Book a conversation
</button>
```

### Mulberry accent button
```jsx
<button className="bg-[#8E3B5E] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#8E3B5E]/90 transition-all shadow-lg shadow-[#8E3B5E]/30">
  Send message →
</button>
```

### Card
```jsx
<div className="bg-white rounded-2xl p-5 border border-[#1E3A6E]/8 hover:border-[#1E3A6E]/20 hover:shadow-md transition-all">
```

---

## Do Not

- Add purple gradients
- Add decorative illustrations or stock icons not already in the component
- Use emoji outside the data arrays (tools, industries)
- Add cookie banners or chat widgets without instruction
- Change the contact form fields without checking with Kris
- Add social proof logos (trust bar) without verifying current relationships

---

*Version: 1.0 | June 2026*
