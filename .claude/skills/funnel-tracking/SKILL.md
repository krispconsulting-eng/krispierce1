---
name: funnel-tracking
description: How to track which funnel a lead or subscriber came from on the KrispConsulting Vercel site, and how each funnel is performing. Use this skill when setting up or reviewing measurement for lead gen, waitlists, lead magnets, or campaign landing pages. Trigger on questions like "how do I know which funnel this signup came from", "track this campaign", "add analytics to the waitlist page", "how is the lead magnet converting", or when creating trackable links for social posts and emails. Three layers, in priority order: Kit tags/segments (the source of truth for who converted from where), trackable URLs with UTM parameters (attribution for traffic into the funnel), and Vercel Web Analytics custom events (on-site behaviour before the conversion). Pairs with kit-lead-capture, which handles the capture itself.
---

# Funnel Tracking: Tags Are the Truth, Analytics Fill In the Middle

The question "how are you tracking emails for various funnels" has a simple answer that works at this site's scale: the Kit tag applied at capture IS the funnel tracking. Everything else is supporting detail. Do not build a measurement stack before the tag-per-funnel foundation exists.

## Layer 1: Kit tags and segments (conversion truth)

- Every capture form tags subscribers per funnel (see the `kit-lead-capture` skill). A Kit segment built on that tag gives the running count of conversions for the funnel, with zero extra infrastructure.
- To compare funnels, compare segment growth in Kit. That is the number that matters: emails captured, by source.
- One subscriber can carry multiple tags (joined the waitlist AND downloaded the guide). That is a feature; it shows the paths people take.

## Layer 2: Trackable URLs (where the traffic came from)

- When sharing a funnel page in social posts, emails, or a bio link, append UTM parameters: `?utm_source=linkedin&utm_medium=social&utm_campaign=<funnel-name>`.
- Keep `utm_campaign` aligned with the Kit tag name for the funnel so the traffic numbers and the conversion numbers line up by name.
- If the source should survive into Kit, pass it through: read the UTM params on the landing page, include them in the POST to the subscribe endpoint, and store them as a Kit custom field or an extra tag. Only do this when Kris actually wants per-channel conversion detail; the per-funnel tag alone is enough for most decisions.

## Layer 3: Vercel Web Analytics custom events (on-site behaviour)

- Vercel Web Analytics (enable it on the project in the Vercel dashboard) gives page views and UTM breakdowns without code changes.
- Custom events are for steps that are not page loads: form submitted, CTA clicked, download started. With the `@vercel/analytics` package it is `track('waitlist_signup', { funnel: '<funnel-name>' })` fired on successful submit.
- Custom events measure the funnel's middle (visited → started → submitted). They are not the subscriber list; do not treat analytics counts as the conversion number when Kit segments disagree. Analytics is sampled and blockable; Kit records actual subscribers.

## Rules of thumb

- Name everything after the funnel, identically, in all three layers: Kit tag, `utm_campaign`, event property. Consistent naming is the entire reporting system.
- Add tracking narrowly, one funnel at a time, matching this repo's preference for small verifiable changes.
- Never send the email address itself into analytics events; addresses belong in Kit only.
