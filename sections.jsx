/* Kris Pierce Consulting — website sections (part 1): Nav, Hero, About, Relate */
const { useState } = React;

/* Shared site chrome. theme:'hero' floats over the hero image (cream text);
   theme:'solid' is the interior-page bar on cream (ink text).
   Each link carries an `anchor` flag: anchors smooth-scroll on the home page
   (when onNav is supplied) and jump otherwise; the rest navigate to their page.
   `active` highlights the current item. */
const NAV_LINKS = [
  ['Home','home','/#home', true],
  ['About','about','/about', false],
  ['Expertise','offerings','/expertise', false],
  ['Insights','insights','/insights', false],
  ['Portfolio','portfolio','/portfolio', false],
  ['Contact','contact','/contact', false],
];

function Nav({ onNav, theme='hero', active }) {
  const [open, setOpen] = useState(false);
  const handle = (e, id, anchor, close) => {
    if (close) setOpen(false);
    if (anchor && typeof onNav === 'function') { e.preventDefault(); onNav(id); }
    /* else: allow default navigation to the page href */
  };
  const goContact = () => { if (typeof onNav === 'function') onNav('contact'); else window.location.href = '/contact'; };
  return (
    <header className={`site-nav site-nav--${theme}`}>
      <Logo href="/#home" size={63} inverse={theme==='hero'} />
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

function Hero({ onNav }) {
  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <image-slot id="kp-hero" shape="rect" fit="cover" position="50% 24%"
          src="assets/kris-studio.jpg"
          placeholder="Drop a warm portrait of Kris"></image-slot>
        <div className="hero__scrim"></div>
      </div>
      <div className="hero__banner"></div>
      <Nav onNav={onNav} />
      <div className="hero__inner">
        <h1 className="hero__title">Insights. Patient-centred outcomes. Flexible methodology. Together, we discover <em>what works</em></h1>
        <p className="hero__sub">Most organisations know they need to involve the people their work affects. Fewer know how
          to do it so the involvement actually changes the outcome. That gap is where the work happens.</p>
        <div className="hero__proof">
          <span className="hero__proof-label">Partnered with teams across</span>
          <div className="hero__sectors">
            <span>Pharmaceutical</span><span>Biotech</span><span>Not-for-profit</span><span>Research</span><span>Advocacy</span>
          </div>
        </div>
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
          <h2 className="about__title">I'm a partner for engagement that earns trust, and holds up to scrutiny</h2>
          <p className="about__body">For more than two decades I've worked at the meeting point of health systems and
            the people they serve, as a carer, an advocate and a consultant. I bring lived experience and
            professional rigour to the same table.</p>
          <p className="about__body">My work is to make engagement genuine rather than performative: to put the
            person whose health is on the line into the room, and design the conversation outward from there.</p>
          <Button variant="secondary" arrow onClick={()=>onNav('offerings')}>What I can do with you</Button>
        </div>
        <div className="about__right">
          <div className="about__photo">
            <image-slot id="kp-about" shape="rounded" radius="22" fit="contain" position="50% 50%"
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

Object.assign(window, { Nav, Hero, About, Relate });
