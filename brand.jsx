/* Kris Pierce — personal-brand home (the umbrella above every work area).
   Introduces Kris, then routes to the work areas (Engagement is live;
   others are architected as "Coming soon" via WORK_AREAS). Reuses the shared
   chrome (Nav, CredStrip, Voices, Footer) from the kit. */
const { useEffect: useBrandEffect } = React;

function BrandHero({ onNav }) {
  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <image-slot id="kp-brand-hero" shape="rect" fit="cover" position="50% 0%"
          src="assets/kris-podium-hero.jpg"
          placeholder="Drop a warm portrait of Kris"></image-slot>
        <div className="hero__scrim"></div>
      </div>
      <div className="hero__banner"></div>
      <Nav onNav={onNav} active="home" />
      <div className="hero__inner">
        <h1 className="hero__title">Lived experience and professional rigour, brought to the <em>same table</em></h1>
        <p className="hero__sub">I'm Kris Pierce. For more than two decades I've worked at the meeting point of health
          systems and the people they serve, as a carer, an advocate, and a consultant. My work spans a few connected
          areas, each grounded in the same belief: the person whose health is on the line belongs in the room.</p>
        <p className="hero__sub hero__sub--2">Backed by senior national advisory roles and lived experience in rare
          disease, I help organisations, communities, and the people who support them put that belief into practice.</p>
        <div className="hero__intro">
          <span className="hero__intro-label">Areas of work</span>
          <div className="hero__sectors">
            {WORK_AREAS.map((a) => (
              <a key={a.id} href={a.href || '#work'} onClick={(e)=>{ if(!a.href){ e.preventDefault(); onNav('work'); } }}>{a.title}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkAreas() {
  return (
    <section className="areas" id="work">
      <div className="areas__head">
        <span className="overline">How I work</span>
        <h2 className="areas__title">Connected work, one <em>throughline</em></h2>
        <p className="areas__sub">Different audiences, the same principle. Whether the work is consulting to a health
          organisation, supporting carers, or training advocates, it starts with the person at the centre.</p>
      </div>
      <div className="areas__grid">
        {WORK_AREAS.map((a) => {
          const inner = (
            <React.Fragment>
              <div className="area-card__top">
                <IconChip variant="wash" size={46}>{<Icon name={a.icon} size={20} />}</IconChip>
                {a.status === 'coming'
                  ? <span className="area-card__badge">Coming soon</span>
                  : <span className="area-card__eyebrow">{a.eyebrow}</span>}
              </div>
              <h3>{a.title}</h3>
              <p>{a.blurb}</p>
              {a.status === 'available'
                ? <span className="area-card__cta">Explore the work <Icon name="arrow-right" size={16} /></span>
                : <span className="area-card__soon">In development</span>}
            </React.Fragment>
          );
          return a.status === 'available'
            ? <a className="area-card" key={a.id} href={a.href}>{inner}</a>
            : <div className="area-card area-card--coming" key={a.id} aria-disabled="true">{inner}</div>;
        })}
      </div>
    </section>
  );
}

/* Brand-level about teaser. Reuses the kit's .about chrome; the deeper story
   lives on the global /about page. */
function BrandAbout() {
  return (
    <section className="about" id="about">
      <div className="about__grid">
        <div className="about__col">
          <span className="overline">About Kris</span>
          <h2 className="about__title">A partner for work that earns trust, and holds up to scrutiny</h2>
          <p className="about__body">As a carer, an advocate, and a consultant, I bring lived experience and
            professional rigour to the same table. My work is to make involvement genuine rather than performative.</p>
          <p className="about__body">That throughline runs through everything here, from consulting on consumer
            engagement to supporting carers and the advocates coming up behind me.</p>
          <Button variant="secondary" arrow href="/about">More about Kris</Button>
        </div>
        <div className="about__right">
          <div className="about__photo">
            <image-slot id="kp-brand-about" shape="rounded" radius="22" fit="cover" position="50% 32%"
              src="assets/kris-towerbridge.jpg"
              placeholder="Drop a candid working photo"></image-slot>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandCTA() {
  return (
    <section className="cta">
      <div className="cta__panel">
        <h2 className="cta__title">Let's bring people into <em>the work</em></h2>
        <p className="cta__sub">If you're shaping a project, a study, or a whole approach to involving the people most
          affected, I'd like to hear about it.</p>
        <Button variant="inverse" size="lg" arrow href="/contact">Start a conversation</Button>
      </div>
    </section>
  );
}

function BrandApp() {
  useBrandEffect(() => { if (typeof setupReveal === 'function') setupReveal(); }, []);
  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' });
  };
  return (
    <div className="site">
      <BrandHero onNav={onNav} />
      <main>
        <CredStrip />
        <WorkAreas />
        <BrandAbout />
        <Voices />
        <BrandCTA />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<BrandApp />);
