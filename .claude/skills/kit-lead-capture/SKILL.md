---
name: kit-lead-capture
description: How lead gen, waitlist, and newsletter forms on the KrispConsulting Vercel site should capture email addresses. Use this skill whenever building or changing any form that collects an email address on krispierce.com.au or the engagement platform. Trigger on requests like "add a waitlist form", "build a lead magnet signup", "wire up the newsletter form", "capture emails for the download", or any new funnel that starts with an email field. Core practice: every captured email gets sent to Kit (formerly ConvertKit) and tagged so it lands in a segment for that specific funnel. Kit is the source of truth for the list; the existing email notification (Web3Forms or Resend) is just a heads-up to Kris's inbox. Pairs with the funnel-tracking skill for measuring how each funnel performs.
---

# Kit Lead Capture: Every Email Gets Tagged Into a Segment

The rule, in one line: when a form on this site captures an email address, send it to Kit and tag it for the funnel it came from. The tag is what makes the lead usable later. An untagged email in an inbox is a dead end; a tagged subscriber in Kit is a segment Kris can email, sequence, and measure.

## What exists today

Two capture paths are already in the codebase. Neither talks to Kit yet; both only notify Kris by email.

1. **Main site forms** (`primitives.jsx`): `sendLead(fields)` POSTs to Web3Forms, which emails the submission to Kris. Used by the contact forms and the newsletter subscribe block (`InsSubscribe` in `insights-sections.jsx`).
2. **Engagement platform** (`engagement-platform/api/contact.js`): a Vercel serverless function that forwards enquiries through Resend. Env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.

Keep these notifications; they are useful. The Kit send is added alongside, not instead.

## The pattern for any new funnel

1. **Create (or reuse) a tag in Kit for the funnel.** One tag per funnel: `waitlist-<thing>`, `leadmagnet-<thing>`, `newsletter`. In Kit, build a segment from the tag. The tag answers "where did this subscriber come from" forever.
2. **Send the email to Kit server-side.** The Kit API key is a secret. It must live in a Vercel serverless function (an `api/` file), never in client-side JSX. Add a function like `api/subscribe.js` that:
   - validates the email,
   - POSTs the subscriber to Kit,
   - applies the funnel's tag,
   - optionally also fires the existing inbox notification.
   The form component POSTs `{ email, funnel }` to that endpoint; the endpoint maps `funnel` to a Kit tag ID from a small allowlist (never trust a raw tag ID from the client).
3. **Env vars on Vercel:** `KIT_API_KEY` plus the tag IDs (or keep a funnel→tag map in the function). Document new env vars in a comment at the top of the function, matching the style of `engagement-platform/api/contact.js`.
4. **Kit API shape** (verify against current docs at developers.kit.com before shipping; the API has moved from v3 ConvertKit endpoints to v4 Kit endpoints):
   - v4: `POST https://api.kit.com/v4/subscribers` with header `X-Kit-Api-Key`, then `POST https://api.kit.com/v4/tags/{tag_id}/subscribers`.
   - Tagging on create is the important part; a subscriber with no tag defeats the purpose.
5. **Confirm state honestly in the UI.** Reuse the existing sending/sent/error states from `InsSubscribe`. If Kit requires double opt-in for the form, the success copy should say "check your inbox to confirm", not "you're in".

## Non-negotiables

- **Never put the Kit API key in client code.** Web3Forms uses a public access key, so it lives in `primitives.jsx`; Kit's key is not like that.
- **One tag per funnel, named for the funnel.** Do not dump everything into a generic "website" tag; that throws away the funnel information the whole pattern exists to keep.
- **Kit is the list; the inbox email is the notification.** If only one can be sent, send to Kit.
- Form copy follows the `kris-pierce-consulting` voice skill: Australian English, no em dashes, no salesy tone.
