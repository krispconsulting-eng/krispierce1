# Project: Kris Pierce Consulting website

This is the website for Kris Pierce Consulting (KrispConsulting). It started as a
Claude Design handoff bundle and is now a real Vite + React site. Read this file
first; it replaces re-reading the long transcript in `chats/`.

## Brand voice — non-negotiable

For ANY written content (web copy, headings, CTAs, bios, social posts), load the
`kris-pierce-consulting` skill and follow it. It is the source of truth for voice.
The rules that get broken most often:

- **No em dashes. Anywhere.** Use commas, colons, semicolons, brackets, or full
  stops. Check every time.
- **Australian English** (organisation, recognise, programme as program).
- **Peer to peer, not coach.** No motivational or salesy tone. One idea per piece.
- The live site is the source of truth for copy: **krispierce.com.au**.
- Contact email across the site: **info@krispierce.com.au**.

This is the CONSULTING practice, not the SCN2A Australia charity. If it is unclear
which one a piece is for, ask before writing.

## Tech / build

- Vite + React 18 (`package.json`). Commands: `npm run dev`, `npm run build`,
  `npm run preview`.
- Files served to the browser live in `public/`. A reference like
  `assets/foo.jpg` resolves to `public/assets/foo.jpg`.
- `project/` is the original design handoff (prototypes and source images), not
  the live site. `project/uploads/` is a raw image dump the site does not use.

## Conventions

- Keep image files web-sized. Large source photos belong in `project/`, not in
  `public/`. The hero photo in particular should be optimised before shipping.
- Prefer narrow, single-page changes over full-site sweeps, so each change is
  easy to verify.

## Working notes for visual changes

Photo positioning, spacing, and other "looks right?" tuning is hard to get right
in a web session because the page cannot be seen here. Batch those into one
session ("show me a few options") or do them with a live preview, rather than one
nudge per session.
