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
  {
    file: 'ten-questions-research.pdf',
    kind: 'Guide',
    title: 'Ten Questions Every Research Team Should Ask Before Engaging Consumers',
    subtitle: 'Ask these before recruitment, not after. Each one is a decision in disguise.',
    intro: 'Consumer engagement in research succeeds or fails on the questions asked early. These are the ten worth settling before you approach a single person.',
    blocks: [
      { type: 'numbered', items: [
        ['What decision will their input actually shape?', 'If you cannot answer this, you are not yet ready to ask.'],
        ['Are we inviting them early enough to matter?', 'Once the protocol is fixed, you are asking for approval, not partnership.'],
        ['Whose experience do we most need, and who is hardest to reach?', 'The reachable and the relevant are rarely the same people.'],
        ['Who might we be leaving out, and why?', 'Absence shapes findings as much as presence does.'],
        ['How will we pay for their time and expertise?', 'Settle the rate before you invite, not after.'],
        ['What would make taking part genuinely accessible?', 'Time, format, travel, and support are all part of the invitation.'],
        ['What are we asking people to do, in plain terms?', 'If you cannot explain the role simply, it is not yet clear.'],
        ['How will what people tell us change what we do?', 'Name the mechanism, or the input has nowhere to go.'],
        ['How and when will we report back?', 'People who never hear the outcome do not return.'],
        ['How will this outlive the project?', 'Partnership built once and then lost is a cost, not an asset.'],
      ]},
    ],
  },
  {
    file: 'consumer-remuneration.pdf',
    kind: 'Guide',
    title: 'A Guide to Consumer Remuneration',
    subtitle: 'Paying people properly is the clearest signal that you value what they bring.',
    intro: 'Whether and how you pay consumers tells them what you think their contribution is worth. This is a short, practical guide to getting it right. It is general guidance, not financial or legal advice; check your own policies and any tax or income-support implications with the right people.',
    blocks: [
      { type: 'prose', heading: 'Why it matters', paras: [
        'Asking people to contribute expertise for free, while everyone else in the room is paid, sends a message no amount of thanks undoes. Remuneration is not a nicety. It is recognition that lived experience is expertise, and that giving it takes time, energy, and often a personal toll.',
      ]},
      { type: 'prose', heading: 'Start from a rate, not a gift', paras: [
        'Decide a clear, defensible rate for consumer time and apply it consistently, the way you would for any other contributor. Vary it for the depth of the ask, not for who is asking. A one-off review and an ongoing advisory role are different commitments, and pay should reflect that.',
      ]},
      { type: 'prose', heading: 'Pay for the whole ask', paras: [
        'Time in the room is rarely the whole job. Preparation, reading, travel, and the emotional labour of revisiting hard experience are all part of it. Budget for access and support costs separately, so the payment for time stays whole.',
      ]},
      { type: 'prose', heading: 'Make it easy to receive', paras: [
        'A payment that takes months, demands complex paperwork, or risks someone’s income support is not really payment. Offer options, be clear about timing, and warn people in advance about anything that could affect a benefit, so they can choose what suits them.',
      ]},
      { type: 'prose', heading: 'Be transparent', paras: [
        'Share how you remunerate, so people know what to expect before they say yes. Transparency turns payment from a favour granted into a standard upheld.',
      ]},
    ],
  },
  {
    file: 'better-advisory-groups.pdf',
    kind: 'Guide',
    title: 'Building Better Advisory Groups',
    subtitle: 'How to make a consumer advisory group worth everyone’s time, including the members’.',
    intro: 'A consumer advisory group is one of the most common ways organisations bring in lived experience, and one of the easiest to get wrong. These are the choices that separate a group that shapes decisions from one that meets, is thanked, and is ignored.',
    blocks: [
      { type: 'prose', heading: 'Be clear what it is for', paras: [
        'A group with no defined purpose becomes a standing meeting in search of one. Decide what decisions it exists to influence, tell members plainly, and revisit the purpose if it drifts.',
      ]},
      { type: 'prose', heading: 'Compose it with intent', paras: [
        'Recruit for the range of experience the work needs, not the people easiest to find. Notice who is missing. A group that all sees the world the same way will confirm your assumptions rather than test them.',
      ]},
      { type: 'prose', heading: 'Give it real work', paras: [
        'Advisory groups disengage when the questions are cosmetic. Bring them genuine decisions, early enough to change, and show the trail from what they said to what you did.',
      ]},
      { type: 'prose', heading: 'Set it up to succeed', paras: [
        'Chair it well, share papers in plain language and in good time, and pay members properly. Small signals of respect decide whether people bring their whole thinking or quietly withdraw it.',
      ]},
      { type: 'prose', heading: 'Close the loop, every time', paras: [
        'Report back what changed as a result of the group’s input, including where you chose a different path and why. Nothing sustains a group like seeing its fingerprints on a decision.',
      ]},
      { type: 'prose', heading: 'Refresh it', paras: [
        'Terms that never end curdle into habit. Rotate membership, bring in new experience, and thank people well when they leave. Continuity matters, and so does fresh air.',
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
