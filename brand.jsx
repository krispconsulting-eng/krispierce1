/* Kris Pierce — v3.0 brand home: teal+blue co-lead, bold editorial layout,
   layered SVG graphics, kinetic marquee, numbered services index. */
const { useEffect: useBrandEffect, useRef: useBrandRef } = React;

/* ---- Inline SVG graphics (pointer-events:none, decorative) ---- */

function HeroArcs() {
  return (
    <svg className="v3-hero__arcs" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" strokeWidth="1.5">
        <circle cx="1180" cy="250" r="120" stroke="rgba(127,168,194,.55)"/>
        <circle cx="1180" cy="250" r="200" stroke="rgba(127,168,194,.32)"/>
        <circle cx="1180" cy="250" r="290" stroke="rgba(207,224,218,.22)"/>
        <path d="M-50 700 Q 400 560 760 720 T 1500 660" stroke="rgba(207,224,218,.3)"/>
        <path d="M-50 770 Q 400 630 760 790 T 1500 730" stroke="rgba(127,168,194,.28)"/>
      </g>
    </svg>
  );
}

function FeatureArcs() {
  return (
    <svg className="v3-feature__arcs" viewBox="0 0 360 360" aria-hidden="true">
      <g fill="none" strokeWidth="1.5">
        <circle cx="200" cy="160" r="70" stroke="rgba(210,225,234,.5)"/>
        <circle cx="200" cy="160" r="120" stroke="rgba(127,168,194,.4)"/>
        <circle cx="200" cy="160" r="170" stroke="rgba(207,224,218,.25)"/>
      </g>
    </svg>
  );
}

/* ---- Hero ---- */
function BrandHero({ onNav }) {
  return (
    <section className="v3-hero" id="home">
      <div className="v3-hero__blob v3-hero__b1"></div>
      <div className="v3-hero__blob v3-hero__b2"></div>
      <HeroArcs />
      <Nav onNav={onNav} active="home" />
      <div className="v3-hero__wrap">
        <span className="v3-overline v3-hero__kicker">Healthcare engagement practice</span>
        <h1 className="v3-hero__h1">The patient voice, in the rooms where <b>decisions get made.</b></h1>
        <p className="v3-hero__lead">I partner with pharmaceutical, biotech, research and not-for-profit teams to put
          the person at the centre of the work. Two decades of lived experience, professional rigour.</p>
        <div className="v3-hero__actions">
          <a href="/contact" className="v3-btn v3-btn--blue">Start a conversation</a>
          <a href="#work" className="v3-btn v3-btn--outline-light" onClick={(e) => { e.preventDefault(); onNav('work'); }}>See how I work</a>
        </div>
      </div>
      <div className="v3-hero__chip">
        <div className="v3-hero__chip-n">20+</div>
        <div className="v3-hero__chip-t">years of lived experience, brought into the work</div>
      </div>
    </section>
  );
}

/* ---- Kinetic marquee ---- */
const MARQUEE_ITEMS = [
  'Insights', 'Patient-centred outcomes', 'Flexible methodology',
  'Co-design', 'Participatory research', 'Together, we discover what works',
];

function Marquee() {
  return (
    <div className="v3-marquee" aria-hidden="true">
      <div className="v3-marquee__track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---- Stat ledger ---- */
const STATS = [
  ['20+ years', 'Lived experience and practice'],
  ['Co-design', 'Communities as collaborators'],
  ['Participatory', 'Research that includes people'],
  ['Independent', 'A practice, not a panel'],
];

function StatLedger() {
  return (
    <section className="v3-stats">
      <div className="v3-wrap">
        <div className="v3-ledger reveal">
          {STATS.map(([fig, cap]) => (
            <div key={fig}>
              <div className="v3-ledger__fig">{fig}</div>
              <div className="v3-ledger__cap">{cap}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Services index (replaces card grid) ---- */
const SERVICES = [
  {
    num: '01',
    title: 'Consumer and community engagement',
    body: 'Engagement that genuinely includes people, from advisory work to co-designed research. Built with communities, never about them.',
    href: '/engagement',
  },
  {
    num: '02',
    title: 'Health research partnership',
    body: 'Participatory and co-design methods that bring the patient perspective into study design, endpoints and evidence, with the rigour funders and regulators expect.',
    href: '/engagement/insights',
  },
  {
    num: '03',
    title: 'Advocacy training and mentoring',
    body: 'Practical support for advocates and not-for-profit teams who want to be effective in the rooms where health decisions are made.',
    href: '/contact',
  },
];

function ServicesIndex() {
  return (
    <section id="work" className="v3-services">
      <div className="v3-wrap v3-opener reveal">
        <span className="v3-overline">What I do</span>
        <h2 className="v3-opener__h2">Insights that <b>change the work.</b></h2>
      </div>
      <div className="v3-wrap">
        <div className="v3-index reveal">
          {SERVICES.map((s) => {
            const Tag = s.href ? 'a' : 'div';
            const props = s.href ? { href: s.href } : {};
            return (
              <Tag className="v3-row-item" key={s.num} {...props}>
                <div className="v3-row-item__num">{s.num}</div>
                <div>
                  <h3 className="v3-row-item__title">{s.title}</h3>
                  <p className="v3-row-item__body">{s.body}</p>
                </div>
                <div className="v3-row-item__go">&rarr;</div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- Feature pull-quote ---- */
function FeatureQuote() {
  return (
    <section className="v3-feature-section">
      <div className="v3-wrap">
        <div className="v3-feature reveal">
          <FeatureArcs />
          <span className="v3-overline v3-feature__overline">In their words</span>
          <p className="v3-feature__quote">"Kris brought the patient voice into a room that had spent years talking
            <b> about</b> patients, not <b>with</b> them."</p>
          <p className="v3-feature__attrib">Research partner, rare disease programme</p>
        </div>
      </div>
    </section>
  );
}

/* ---- CTA ---- */
function BrandCTA() {
  return (
    <section className="v3-cta-section">
      <div className="v3-wrap">
        <div className="v3-cta reveal">
          <span className="v3-overline v3-cta__overline">Start a conversation</span>
          <h2 className="v3-cta__h2">Flexible methodology. Together, we discover <b>what works.</b></h2>
          <p className="v3-cta__lead">If you are bringing a medicine, a study or a programme to the people it
            affects, let's talk about doing it with them.</p>
          <a href="/contact" className="v3-btn v3-btn--blue">Start a conversation &rarr;</a>
        </div>
      </div>
    </section>
  );
}

/* ---- Brand about (kept, restyled via CSS) ---- */
function BrandAbout() {
  return (
    <section className="about" id="about">
      <div className="about__grid">
        <div className="about__col">
          <span className="overline">About Kris</span>
          <h2 className="about__title">Consulting grounded in what I've lived, not just what I've studied</h2>
          <p className="about__body">I've been the carer in the waiting room, the advocate at the table, the consultant
            redesigning the process, and the researcher building the evidence. That combination is what I bring to
            every engagement.</p>
          <p className="about__body">My consulting practice exists to level up engagement, build capacity in
            organisations and communities, and support the emerging leaders and carers who will carry this work
            forward.</p>
          <Button variant="secondary" arrow href="/about">More about Kris</Button>
        </div>
        <div className="about__right">
          <div className="about__photo">
            <image-slot id="kp-brand-about" shape="rounded" radius="22" fit="cover" position="50% 32%"
              src="assets/kris-towerbridge.jpg"
              alt="Kris Pierce, consultant and researcher in consumer engagement and health"
              placeholder="Drop a candid working photo"></image-slot>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- App root ---- */
function BrandApp() {
  useBrandEffect(() => { if (typeof setupReveal === 'function') setupReveal(); }, []);
  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' });
  };
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <BrandHero onNav={onNav} />
      <Marquee />
      <main id="main-content">
        <StatLedger />
        <ServicesIndex />
        <FeatureQuote />
        <BrandAbout />
        <Voices />
        <BrandCTA />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<BrandApp />);
