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
      <Hero onNav={onNav} />
      <SectionNav active="engagement" />
      <main>
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
    '.offer__portrait', '.offer__panel', '.voices', '.teaser__head', '.teaser__grid .ins-card',
    '.cta__panel', '.contact__intro', '.contact__card', '.foot', '.motif__inner'];
  const els = [];
  sels.forEach((s) => document.querySelectorAll(s).forEach((e) => els.push(e)));
  if (!els.length) return;
  const EASE = 'cubic-bezier(0.22,1,0.36,1)';
  els.forEach((e) => {
    e.style.opacity = '0';
    e.style.transform = 'translateY(22px)';
    e.style.transition = 'opacity .7s ' + EASE + ', transform .7s ' + EASE;
  });
  const reveal = (e) => { e.style.opacity = '1'; e.style.transform = 'none'; };
  const check = () => {
    const h = window.innerHeight;
    els.forEach((e) => {
      if (e.style.opacity === '1') return;
      const r = e.getBoundingClientRect();
      if (r.top < h * 0.92 && r.bottom > 0) reveal(e);
    });
  };
  requestAnimationFrame(check);
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  setTimeout(check, 400);
  // Ultimate safety: never leave anything hidden — snap to visible without a transition.
  setTimeout(() => els.forEach((e) => {
    e.style.transition = 'none'; e.style.opacity = '1'; e.style.transform = 'none';
  }), 2200);
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
