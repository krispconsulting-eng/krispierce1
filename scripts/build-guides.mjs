/* Builds the downloadable resource PDFs in public/assets/guides/ from the
   content below, by printing a branded HTML template with Chromium (the same
   way the existing guides were produced). Voice: AU/British spelling, no em
   dashes, peer to peer. Run: node scripts/build-guides.mjs
   Requires the Chromium that ships with this environment. */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets', 'guides');

/* ---- Brand tokens (v3 palette) ---- */
const C = {
  forestA: '#1E3D34', forestB: '#234A52',
  teal600: '#3D7A6B', teal700: '#2F5E52', teal200: '#CFE0DA', wash: '#E7F0EC',
  blue600: '#3E6F8E', blue700: '#305670',
  cream50: '#FBF9F5', cream100: '#F4F1EB', cream200: '#ECE7DD', paper: '#FFFFFF',
  ink: '#1C2530', body: '#4A5C55', muted: '#5E706A',
};

/* ---- Guide content ---- */
const GUIDES = [
  {
    file: 'readiness-checklist.pdf',
    kind: 'Checklist',
    title: 'Consumer Engagement Readiness Checklist',
    subtitle: 'A pre-flight check before you commission a single session.',
    intro: 'Genuine engagement is mostly decided before it starts, in the choices you make about timing, people, and follow-through. Run through this before you commission anything. If you cannot tick an item honestly, that is where the work is.',
    blocks: [
      { type: 'checklist', heading: 'Purpose and timing', items: [
        'The decision this engagement will inform is named, and is still open.',
        'People are being brought in while the brief can still change.',
        'We can say plainly what their input can and cannot influence.',
      ]},
      { type: 'checklist', heading: 'People', items: [
        'We have asked who is most affected, not only who is easiest to reach.',
        'We know who is missing, and what it would take to include them.',
        'No single person is being asked to represent an entire community.',
      ]},
      { type: 'checklist', heading: 'Method', items: [
        'The method was chosen to fit the question, not habit or convenience.',
        'People can take part in a way that suits them, not only us.',
        'We have planned how raw input becomes themes we can act on.',
      ]},
      { type: 'checklist', heading: 'Respect and remuneration', items: [
        'Consumers are paid fairly for their time and expertise.',
        'Access needs, travel, and support have been budgeted for.',
      ]},
      { type: 'checklist', heading: 'Governance and follow-through', items: [
        'Someone owns the decision about what happens with what we hear.',
        'We have committed to reporting back, including where we did not act.',
        'There is a way to carry the lessons into the next project.',
      ]},
    ],
  },
  {
    file: 'partnership-ready.pdf',
    kind: 'Self-assessment',
    title: 'Is Your Organisation Ready for Meaningful Partnership?',
    subtitle: 'A short, honest self-assessment. No score to game, just a clearer picture.',
    intro: 'Partnership is a capability, not an event. This is a quick read on where your organisation actually sits. Mark each statement as in place, in progress, or not yet. The pattern across your answers matters more than any single one.',
    blocks: [
      { type: 'scale', heading: 'Rate each statement', items: [
        'Consumers are involved before decisions are made, not after.',
        'Lived experience is present in governance, not only in projects.',
        'We pay consumers as a matter of course, with a clear rate.',
        'People who take part hear back what changed.',
        'Engagement is someone’s job, not everyone’s afterthought.',
        'We can name a decision that consumer input has changed.',
        'We invite the affected, and we notice who is missing.',
        'Staff have the skills and the time to engage well.',
      ]},
      { type: 'prose', heading: 'How to read your answers', paras: [
        'Mostly in place: you have the foundations. The work now is consistency and depth, not starting over.',
        'Mostly in progress: the intent is there, but partnership is not yet how you work. Pick the two weakest statements and start there.',
        'Mostly not yet: begin with governance and remuneration. They change the incentives everything else runs on.',
      ]},
    ],
  },
];

/* ---- HTML template ---- */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderBlock(b) {
  if (b.type === 'checklist') {
    return `<section class="blk">
      <h2>${esc(b.heading)}</h2>
      <ul class="check">${b.items.map((i) => `<li><span class="box"></span><span>${esc(i)}</span></li>`).join('')}</ul>
    </section>`;
  }
  if (b.type === 'scale') {
    return `<section class="blk">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ''}
      <ul class="scale">${b.items.map((i) => `<li>
        <span class="stmt">${esc(i)}</span>
        <span class="opts"><span class="opt">In place</span><span class="opt">In progress</span><span class="opt">Not yet</span></span>
      </li>`).join('')}</ul>
    </section>`;
  }
  if (b.type === 'numbered') {
    return `<section class="blk">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ''}
      <ol class="num">${b.items.map(([q, note]) => `<li><span class="q">${esc(q)}</span><span class="note">${esc(note)}</span></li>`).join('')}</ol>
    </section>`;
  }
  if (b.type === 'prose') {
    return `<section class="blk">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ''}
      ${b.paras.map((p) => `<p class="p">${esc(p)}</p>`).join('')}
    </section>`;
  }
  return '';
}

function html(g) {
  return `<!DOCTYPE html><html lang="en-AU"><head><meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Outfit:wght@200;300;400;500;600;700&display=swap" />
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body { font-family: 'Archivo', -apple-system, Segoe UI, Roboto, sans-serif; color: ${C.body};
      font-size: 12px; line-height: 1.62; background: ${C.paper}; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .header { background: linear-gradient(165deg, ${C.forestA} 0%, ${C.forestB} 100%); color: ${C.cream50};
      padding: 40px 54px 34px; }
    .brand { font-family: 'Archivo'; font-weight: 600; font-size: 10px; letter-spacing: .22em; text-transform: uppercase;
      color: ${C.teal200}; margin-bottom: 22px; }
    .kind { font-family: 'Archivo'; font-weight: 600; font-size: 10.5px; letter-spacing: .2em; text-transform: uppercase;
      color: ${C.blue200 || '#D2E1EA'}; margin-bottom: 12px; }
    .title { font-family: 'Outfit'; font-weight: 600; font-size: 27px; line-height: 1.12; letter-spacing: -.02em; margin: 0; max-width: 22ch; }
    .subtitle { font-family: 'Outfit'; font-weight: 300; font-size: 14.5px; line-height: 1.4; margin: 12px 0 0; color: #E7EFEA; max-width: 46ch; }
    .body { padding: 30px 54px 40px; }
    .intro { font-size: 12.5px; line-height: 1.66; color: ${C.body}; margin: 0 0 22px; padding-bottom: 22px;
      border-bottom: 1px solid ${C.cream200}; max-width: 62ch; }
    .blk { margin: 0 0 20px; break-inside: avoid; }
    h2 { font-family: 'Outfit'; font-weight: 600; font-size: 14px; letter-spacing: -.01em; color: ${C.ink}; margin: 0 0 10px; }
    .p { margin: 0 0 8px; max-width: 64ch; }
    ul, ol { margin: 0; padding: 0; list-style: none; }
    .check li { display: flex; gap: 12px; align-items: flex-start; padding: 7px 0; }
    .check .box { flex: none; width: 15px; height: 15px; margin-top: 1px; border: 1.5px solid ${C.teal600}; border-radius: 4px; background: ${C.wash}; }
    .scale li { display: flex; justify-content: space-between; gap: 18px; align-items: baseline;
      padding: 9px 0; border-bottom: 1px solid ${C.cream200}; }
    .scale .stmt { color: ${C.ink}; }
    .scale .opts { flex: none; display: flex; gap: 6px; }
    .scale .opt { font-size: 8.5px; letter-spacing: .04em; text-transform: uppercase; color: ${C.muted};
      border: 1px solid ${C.teal200}; border-radius: 999px; padding: 4px 8px; white-space: nowrap; }
    .num li { display: block; padding: 10px 0 10px 30px; position: relative; border-bottom: 1px solid ${C.cream200};
      counter-increment: q; }
    .num { counter-reset: q; }
    .num li::before { content: counter(q); position: absolute; left: 0; top: 10px; font-family: 'Outfit'; font-weight: 700;
      font-size: 12px; color: ${C.teal600}; }
    .num .q { display: block; font-weight: 600; color: ${C.ink}; font-size: 12.5px; }
    .num .note { display: block; color: ${C.muted}; margin-top: 2px; }
    .footer { padding: 16px 54px 26px; color: ${C.muted}; font-size: 9.5px; letter-spacing: .02em;
      display: flex; justify-content: space-between; border-top: 1px solid ${C.cream200}; margin-top: 6px; }
    .footer b { color: ${C.teal700}; font-weight: 600; }
  </style></head>
  <body>
    <div class="header">
      <div class="brand">Kris Pierce Consulting</div>
      <div class="kind">${esc(g.kind)}</div>
      <h1 class="title">${esc(g.title)}</h1>
      <p class="subtitle">${esc(g.subtitle)}</p>
    </div>
    <div class="body">
      <p class="intro">${esc(g.intro)}</p>
      ${g.blocks.map(renderBlock).join('')}
    </div>
    <div class="footer">
      <span><b>krispierce.com.au</b> &middot; info@krispierce.com.au</span>
      <span>Consumer and patient partnership in health, research, and rare disease</span>
    </div>
  </body></html>`;
}

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
for (const g of GUIDES) {
  await page.setContent(html(g), { waitUntil: 'networkidle' });
  await page.pdf({ path: join(OUT, g.file), format: 'A4', printBackground: true });
  console.log('wrote', g.file);
}
await browser.close();
