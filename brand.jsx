/* Kris Pierce — personal-brand home (the umbrella above every work area).
   Introduces Kris and the breadth of her work, then routes to each area
   (Engagement is live; research links to where it lives; advocacy,
   not-for-profit mentoring, and caregiving are introduced as "Coming soon"
   via WORK_AREAS). Reuses the shared chrome (Nav, CredStrip, Voices, Footer,
   Motif) from the kit. */
const { useEffect: useBrandEffect } = React;

function BrandHero({ onNav }) {
  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <image-slot id="kp-brand-hero" shape="rect" fit="cover" position="50% 80%"
          src="assets/kris-podium-hero.jpg"
          alt="Kris Pierce speaking at a podium"
          placeholder="Drop a warm portrait of Kris"></image-slot>
        <div className="hero__scrim"></div>
      </div>
      <div className="hero__banner"></div>
      <Nav onNav={onNav} active="home" />
      <div className="hero__inner">
        <h1 className="hero__title">Strengthening engagement and <em>capacity</em></h1>
        <p className="hero__sub">Drawing on two decades of lived and professional experience to support advocacy,
          leadership, and meaningful participation.</p>
      </div>
    </section>
  );
}

/* Single work-area card, rendered by status. */
function AreaCard({ a }) {
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
      {a.status === 'coming'
        ? <span className="area-card__soon">In development</span>
        : <span className="area-card__cta">{a.cta || 'Explore the work'} <Icon name="arrow-right" size={16} /></span>}
    </React.Fragment>
  );
  if (a.status === 'coming') {
    return <div className="area-card area-card--coming" aria-disabled="true">{inner}</div>;
  }
  return <a className={'area-card' + (a.status === 'current' ? ' area-card--current' : '')} href={a.href}>{inner}</a>;
}

function WorkAreas() {
  const core = WORK_AREAS.filter((a) => a.tier === 'core');
  const emerging = WORK_AREAS.filter((a) => a.tier === 'emerging');
  return (
    <section className="areas" id="work">
      <div className="areas__head">
        <span className="overline">How I work</span>
        <h2 className="areas__title">One consulting practice, many <em>ways in</em></h2>
        <p className="areas__sub">Everything I offer comes from the same place: what I've learnt through life and work
          about putting people at the centre. Whether it's strengthening engagement, building the evidence base,
          training the next generation of advocates, or supporting carers and small organisations to find their
          feet, it's all one practice.</p>
      </div>

      <div className="areas__group">
        <h3 className="areas__group-title">Where I focus now</h3>
        <div className="areas__grid">
          {core.map((a) => <AreaCard key={a.id} a={a} />)}
        </div>
      </div>

      <div className="areas__group">
        <h3 className="areas__group-title">Programs I'm developing</h3>
        <div className="areas__grid areas__grid--three">
          {emerging.map((a) => <AreaCard key={a.id} a={a} />)}
        </div>
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

function BrandCTA() {
  return (
    <section className="cta">
      <div className="cta__panel">
        <h2 className="cta__title">Bring me into <em>the work</em></h2>
        <p className="cta__sub">If you're building engagement, growing capability, or investing in the next generation
          of advocates and leaders, I can help you get there.</p>
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
        <Motif id="kp-brand-research" src="assets/insight-boardroom.jpg" position="50% 45%"
          overline="Research and evidence"
          title={<>Evidence that carries the patient <em>voice</em></>}
          sub="Two decades of participatory and applied health research, built so that what patients and carers actually experience reaches the people designing studies, services, and policy."
          ctaLabel="Read the research" ctaHref="/engagement/insights" />
        <BrandAbout />
        <Voices />
        <BrandCTA />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<BrandApp />);
