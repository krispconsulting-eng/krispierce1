/* Kris Pierce Consulting — website app shell */
const { useEffect } = React;
function App() {
  useEffect(() => { setupReveal(); }, []);
  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' });
  };
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Hero onNav={onNav} />
      <SectionNav active="engagement" />
      <main id="main-content">
        <CredStrip />
        <About onNav={onNav} />
        <Relate />
        <Motif />
        <Voices />
        <InsightsTeaser />
        <CTA onNav={onNav} />
        <Contact />
      </main>
      <Footer onNav={onNav} />
    </div>
  );
}

/* Tasteful entrance reveals (skipped under prefers-reduced-motion).
   Scroll-driven (more reliable than IntersectionObserver here) with a
   hard fallback so content can never stay hidden. */
function setupReveal() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sels = ['.cred__inner', '.about__col', '.about__photo', '.relate__head', '.relate__card',
    '.offer__portrait', '.offer__panel', '.offer__item', '.voices', '.teaser__head', '.teaser__grid .ins-card',
    '.cta__panel', '.contact__intro', '.contact__card', '.foot', '.motif__inner',
    '.areas__head', '.area-card', '.work-card', '.quote-card'];
  const els = [];
  sels.forEach((s) => document.querySelectorAll(s).forEach((e) => els.push(e)));
  if (!els.length) return;
  const EASE = 'cubic-bezier(0.22,1,0.36,1)';
  const staggerSels = ['.relate__card', '.teaser__grid .ins-card', '.area-card', '.work-card', '.quote-card', '.exp-card', '.offer__item'];
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
