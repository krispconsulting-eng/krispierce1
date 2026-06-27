/* Kris Pierce Consulting — website sections (part 1): Nav, Hero, About, Relate */
const { useState } = React;

/* Shared site chrome. theme:'hero' floats over the hero image (cream text);
   theme:'solid' is the interior-page bar on cream (ink text).
   Each link carries an `anchor` flag: anchors smooth-scroll on the home page
   (when onNav is supplied) and jump otherwise; the rest navigate to their page.
   `active` highlights the current item. */
const NAV_LINKS = [
  ['Home','home','/', false],
  ['Engagement','engagement','/engagement', false],
  ['About','about','/about', false],
  // ['Portfolio','portfolio','/portfolio', false],
  ['Resources','resources','/resources', false],
  ['Contact','contact','/contact', false],
];

function Nav({ onNav, theme='hero', active }) {
  const [open, setOpen] = useState(false);
  const handle = (e, id, anchor, close) => {
    if (close) setOpen(false);
    if (anchor && typeof onNav === 'function') { e.preventDefault(); onNav(id); }
    /* else: allow default navigation to the page href */
  };
  const goContact = () => { window.location.href = '/contact'; };
  return (
    <header className={`site-nav site-nav--${theme}`}>
      <Logo href="/" size={63} inverse={theme==='hero'} />
      <nav className="site-nav__links">
        {NAV_LINKS.map(([label, id, href, anchor]) => (
          <a key={id} href={href} aria-current={active===id ? 'page' : undefined}
            className={active===id ? 'is-active' : ''} onClick={(e)=>handle(e, id, anchor)}>{label}</a>
        ))}
      </nav>
      <div className="site-nav__cta">
        <Button variant={theme==='hero' ? 'glass' : 'primary'} size="md" arrow onClick={goContact}>Let's talk</Button>
      </div>
      <button className="site-nav__burger" aria-label="Menu" onClick={()=>setOpen(o=>!o)}>
        <Icon name={open?'x':'menu'} size={22} />
      </button>
      {open && (
        <div className="site-nav__sheet">
          {NAV_LINKS.map(([label,id,href,anchor])=>(
            <a key={id} href={href} className={active===id ? 'is-active' : ''} onClick={(e)=>handle(e, id, anchor, true)}>{label}</a>
          ))}
          <Button block arrow onClick={()=>{setOpen(false); goContact();}}>Let's talk</Button>
        </div>
      )}
    </header>
  );
}

/* Engagement section sub-navigation. The top nav is brand-level, so the
   engagement work area surfaces its own pages here: Overview, Expertise,
   Insights. Rendered on every page within the section so the subpages stay
   reachable. */
const ENGAGEMENT_SUBNAV = [
  ['Overview', 'engagement', '/engagement'],
  ['Expertise', 'expertise', '/engagement/expertise'],
  ['Insights', 'insights', '/engagement/insights'],
];

function SectionNav({ active, label = 'Consumer & community engagement' }) {
  return (
    <nav className="subnav" aria-label="Engagement section">
      <div className="subnav__inner">
        <span className="subnav__label">{label}</span>
        <div className="subnav__links">
          {ENGAGEMENT_SUBNAV.map(([text, id, href]) => (
            <a key={id} href={href} aria-current={active === id ? 'page' : undefined}
              className={active === id ? 'is-active' : ''}>{text}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero({ onNav }) {
  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <image-slot id="kp-hero" shape="rect" fit="cover" position="50% 30%"
          src="assets/kris-podium.jpg"
          alt="Kris Pierce presenting at UNSW Sydney"
          placeholder="Drop a warm portrait of Kris"></image-slot>
        <div className="hero__scrim"></div>
      </div>
      <div className="hero__banner"></div>
      <Nav onNav={onNav} active="engagement" />
      <div className="hero__inner">
        <h1 className="hero__title">Engagement that moves beyond consultation and influences <b>decisions</b></h1>
        <p className="hero__sub">Designing, strengthening, and embedding meaningful consumer and community engagement
          across health, research, and rare disease.</p>
      </div>
    </section>
  );
}

/* Quiet credibility strip directly under the hero. Proves the seniority the
   headline no longer asserts, in the client's own institutional language. */
const CRED = [
  'Rare Diseases NSW',
  'UNSW Sydney',
  'HTA Consumer Consultative Committee',
  'MSAC Evaluation Sub-Committee',
  'Genomics Australia Advisory Council',
  'Founder, SCN2A Australia',
];

function CredStrip() {
  return (
    <section className="cred" aria-label="Senior advisory roles">
      <div className="cred__inner">
        <span className="cred__label">Senior advisory roles</span>
        <ul className="cred__list">
          {CRED.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </section>
  );
}

function About({ onNav }) {
  return (
    <section className="about" id="about">
      <div className="about__grid">
        <div className="about__col">
          <span className="overline">About Kris</span>
          <h2 className="about__title">I built this consulting practice on what life and work taught me</h2>
          <p className="about__body">Two decades as a carer, advocate, consultant, and researcher showed me what it
            takes to put the right people in the room and make their involvement count. That's what I do now,
            across engagement, research, advocacy, mentoring, and caregiver support.</p>
          <p className="about__body">The consulting is built to level up engagement, build capacity in organisations
            and communities, and support the next generation of changemakers growing into the rooms where decisions
            get made.</p>
          <Button variant="secondary" arrow onClick={()=>onNav('offerings')}>What I can do with you</Button>
        </div>
        <div className="about__right">
          <div className="about__photo">
            <image-slot id="kp-about" shape="rounded" radius="22" fit="cover" position="50% 32%"
              src="assets/kris-towerbridge.jpg"
              placeholder="Drop a candid working photo"></image-slot>
          </div>
        </div>
      </div>
    </section>
  );
}

const RELATE = [
  ['message', 'Engagement that feels like a tick-box', 'Consultation happens late, the brief is fixed, and people can tell their input won\u2019t change anything. Trust erodes, and so does the evidence.'],
  ['users', 'The people most affected aren\u2019t in the room', 'Decisions get made about a community without anyone from it present. The result reads as credible to a board, and hollow to everyone else.'],
  ['clipboard', 'Strong evidence that no one acts on', 'You\u2019ve gathered real insight, but it sits in a report. There\u2019s no shared language to carry it into the decisions that matter.'],
  ['compass', 'A new project and no clear way in', 'You know engagement matters but not where to start, who to involve, or how to do it well enough to stand behind.'],
];

function Relate() {
  return (
    <section className="relate">
      <div className="relate__head">
        <h2 className="relate__title">Where teams get stuck</h2>
        <p className="relate__sub">If any of these sound familiar, this is the work I do.</p>
      </div>
      <div className="relate__grid">
        {RELATE.map(([icon, title, body]) => (
          <article className="relate__card" key={title}>
            <IconChip>{<Icon name={icon} />}</IconChip>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Nav, SectionNav, Hero, CredStrip, About, Relate });
