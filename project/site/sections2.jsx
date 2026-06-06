/* Kris Pierce Consulting — website sections (part 2): Offerings, Voices, CTA, Contact, Footer */
const { useState: useState2 } = React;

const OFFERINGS = [
  ['users', 'Workshops', 'Structured sessions that turn a mixed room of clinicians, community and sponsors into one shared direction.', 'For you if you need alignment, with everyone genuinely heard.'],
  ['message', 'Focus groups', 'Carefully facilitated conversations that surface what people really think, not what they think you want to hear.', 'For you if you need the depth behind the data.'],
  ['pen', 'Co-design', 'Hand the pen to the people affected. We build the approach together, rather than for them.', 'For you if the outcome has to belong to the community.'],
  ['grid', 'Engagement frameworks', 'A repeatable way for your organisation to engage well, on every project, not just this one.', 'For you if you want engagement embedded, not outsourced.'],
];

function Offerings() {
  return (
    <section className="offer" id="offerings">
      <div className="offer__portrait">
        <image-slot id="kp-offer" shape="rect" fit="cover" position="50% 30%" src="assets/kris-podium-portrait.jpg" placeholder="Drop a portrait / working photo"></image-slot>
      </div>
      <div className="offer__panel">
        <span className="overline overline--inv">What we'll do together</span>
        <h2 className="offer__title">Four ways I bring people into the work</h2>
        <p className="offer__lead">Each can stand alone, or build on the last. We'll choose what your project actually needs.</p>
        <div className="offer__grid">
          {OFFERINGS.map(([icon, title, body, fit], i) => (
            <div className="offer__item" key={title}>
              <div className="offer__item-top">
                <IconChip variant="ghostInverse" size={42}>{<Icon name={icon} size={18} />}</IconChip>
                <span className="offer__num">{String(i+1).padStart(2,'0')}</span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="offer__fit">{fit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const VOICES = [
  ['Kris made space for the voices our project had been talking about, but never with. The shift in the room was immediate, and the work was better for it.', 'Program Director', 'Health not-for-profit'],
  ['Rigorous and warm in equal measure. The engagement framework she built with us is now how we run every consumer advisory group.', 'Patient Engagement Lead', 'Pharmaceutical'],
  ['She turned a sceptical, mixed group into genuine collaborators. That’s a rare skill, and it changed how we design studies.', 'Principal Researcher', 'Medical research institute'],
];

function Voices() {
  const [i, setI] = useState2(0);
  const go = (d) => setI((p) => (p + d + VOICES.length) % VOICES.length);
  const [quote, role, org] = VOICES[i];
  return (
    <section className="voices" id="voices">
      <div className="voices__left">
        <h2 className="voices__title">In their words</h2>
        <p className="voices__sub">Teams across health have found a way to engage that they can stand behind.</p>
        <div className="voices__nav">
          <button aria-label="Previous" onClick={()=>go(-1)}><Icon name="chevron-left" size={18} /></button>
          <button aria-label="Next" className="is-active" onClick={()=>go(1)}><Icon name="chevron-right" size={18} /></button>
          <span className="voices__count">{String(i+1).padStart(2,'0')} / {String(VOICES.length).padStart(2,'0')}</span>
        </div>
      </div>
      <div className="voices__right">
        <span className="voices__mark"><Icon name="quote" size={22} fill style={{color:'var(--clay-500)'}} /></span>
        <blockquote className="voices__quote">{quote}</blockquote>
        <div className="voices__who">
          <Avatar name={role} size={46} />
          <div><div className="voices__role">{role}</div><div className="voices__org">{org}</div></div>
        </div>
      </div>
    </section>
  );
}

function CTA({ onNav }) {
  return (
    <section className="cta">
      <div className="cta__panel">
        <h2 className="cta__title">Let's bring people into <em>the work</em></h2>
        <p className="cta__sub">If you're shaping a project, a study or a whole approach to engagement, I'd like to hear about it.</p>
        <Button variant="inverse" size="lg" arrow onClick={()=>onNav('contact')}>Book an intro call</Button>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState2(false);
  const [form, setForm] = useState2({ name:'', org:'', about:'', email:'' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <section className="contact" id="contact">
      <div className="contact__intro">
        <span className="overline">Start a conversation</span>
        <h2 className="contact__title">Tell me what you're working on</h2>
        <p className="contact__body">A sentence or two is plenty to begin. I read everything myself, and I'll reply
          to arrange a short, no-obligation call.</p>
      </div>
      <div className="contact__card">
        {sent ? (
          <div className="contact__thanks">
            <span className="contact__check"><Icon name="check" size={22} /></span>
            <h3>Thank you. Message received.</h3>
            <p>I'll be in touch within a few working days.</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
            <div className="contact__row">
              <Field label="Your name" placeholder="Jane Citizen" value={form.name} onChange={set('name')} required />
              <Field label="Organisation" placeholder="Where you work" value={form.org} onChange={set('org')} />
            </div>
            <Field as="textarea" label="What are you working on?" placeholder="A project, a study, or a way of working you'd like to improve." value={form.about} onChange={set('about')} />
            <Field type="email" label="Email" placeholder="you@organisation.org" value={form.email} onChange={set('email')} required />
            <Button arrow>Send message</Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="foot" id="foot">
      <span className="foot__label">Prefer email?</span>
      <a className="foot__email" href="mailto:hello@krispierce.com.au">hello@krispierce.com.au</a>
      <div className="foot__bar">
        <div className="foot__links">
          <a href="about.html">About</a>
          <a href="expertise.html">Expertise</a>
          <a href="insights.html">Insights</a>
          <a href="portfolio.html">Portfolio</a>
          <a href="contact.html">Contact</a>
        </div>
        <div className="foot__social">
          <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
          <a href="mailto:hello@krispierce.com.au" aria-label="Email"><Icon name="mail" size={18} /></a>
        </div>
      </div>
      <div className="foot__legal">
        <span>© 2025 Kris Pierce Consulting</span>
        <span>Naarm / Melbourne, Australia</span>
        <span>Privacy</span>
      </div>
    </footer>
  );
}

function Motif({ id='kp-motif', src='assets/rocks-blocks.jpg', position='50% 52%',
  overline='Building blocks',
  title=<>We build the system <em>together</em></>,
  sub="Engagement isn't handed over finished. It's assembled piece by piece, with the people it's meant to serve, until it holds.",
  ctaLabel, ctaHref }) {
  return (
    <section className="motif">
      <image-slot id={id} fit="cover" position={position} src={src}
        placeholder="Drop a natural / metaphor image"></image-slot>
      <div className="motif__scrim"></div>
      <div className="motif__inner">
        <span className="overline">{overline}</span>
        <h2 className="motif__title">{title}</h2>
        <p className="motif__sub">{sub}</p>
        {ctaLabel && <Button variant="inverse" size="lg" arrow href={ctaHref} className="motif__cta">{ctaLabel}</Button>}
      </div>
    </section>
  );
}

Object.assign(window, { Offerings, Voices, CTA, Contact, Footer, Motif });
