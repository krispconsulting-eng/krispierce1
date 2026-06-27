/* Kris Pierce Consulting — website app shell */
const { useEffect } = React;
function App() {
  useEffect(() => { setupReveal(); }, []);
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav active="engagement" />
      <section className="v3-page-hero">
        <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="v3-page-hero__arcs" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g fill="none" strokeWidth="1.5">
            <circle cx="1180" cy="250" r="120" stroke="rgba(127,168,194,.55)"/>
            <circle cx="1180" cy="250" r="200" stroke="rgba(127,168,194,.32)"/>
            <circle cx="1180" cy="250" r="290" stroke="rgba(207,224,218,.22)"/>
          </g>
        </svg>
        <div className="v3-page-hero__inner">
          <span className="v3-overline v3-page-hero__overline v3-hero-reveal">Consumer and community engagement</span>
          <h1 className="v3-page-hero__title v3-hero-reveal">Engagement that moves beyond consultation and influences <b>decisions</b></h1>
          <p className="v3-page-hero__lead v3-hero-reveal">Designing, strengthening, and embedding meaningful consumer and community engagement across health, research, and rare disease.</p>
          <div className="v3-page-hero__actions v3-hero-reveal">
            <a href="/contact" className="v3-btn v3-btn--blue">Start a conversation <span>→</span></a>
            <a href="/engagement/expertise" className="v3-btn v3-btn--outline-light">Explore expertise <span>→</span></a>
          </div>
        </div>
      </section>
      <SectionNav active="engagement" />
      <main id="main-content">
        <Offerings />
        <Voices />
        <InsightsTeaser />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* Tasteful entrance reveals (skipped under prefers-reduced-motion).
   Scroll-driven (more reliable than IntersectionObserver here) with a
   hard fallback so content can never stay hidden. */
function setupReveal() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sels = ['.v3-opener', '.v3-focus-card', '.voices', '.teaser__head', '.teaser__grid .ins-card',
    '.v3-cta', '.contact__intro', '.contact__card', '.v3-foot'];
  const els = [];
  sels.forEach((s) => document.querySelectorAll(s).forEach((e) => els.push(e)));
  if (!els.length) return;
  const EASE = 'cubic-bezier(0.22,1,0.36,1)';
  const staggerSels = ['.teaser__grid .ins-card', '.v3-focus-card'];
  els.forEach((e) => {
    e.style.opacity = '0';
    e.style.transform = 'translateY(28px)';
    const isStagger = staggerSels.some((s) => e.matches(s));
    const idx = isStagger ? Array.from(e.parentElement.children).indexOf(e) : 0;
    const delay = isStagger ? idx * 0.08 : 0;
    e.style.transition = 'opacity .8s ' + EASE + ' ' + delay + 's, transform .8s ' + EASE + ' ' + delay + 's';
  });
  const reveal = (e) => { e.style.opacity = '1'; e.style.transform = 'none'; };
  const check = () => {
    const h = window.innerHeight;
    els.forEach((e) => {
      if (e.style.opacity === '1') return;
      const r = e.getBoundingClientRect();
      if (r.top < h * 0.88 && r.bottom > 0) reveal(e);
    });
  };
  requestAnimationFrame(check);
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  setTimeout(check, 400);
  // Ultimate safety: never leave anything hidden — snap to visible without a transition.
  setTimeout(() => els.forEach((e) => {
    e.style.transition = 'none'; e.style.opacity = '1'; e.style.transform = 'none';
  }), 3200);
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
