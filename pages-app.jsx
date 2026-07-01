/* Kris Pierce Consulting — interior page app shell.
   Renders the page named by <body data-page="…"> and runs the shared
   entrance reveal (reduced-motion safe). */
const { useEffect: usePageEffect } = React;

function setupPageReveal() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sels = ['.page-figure', '.about-portrait', '.page-block__body', '.wid-item', '.contact-page__intro', '.contact-card', '.cta__panel', '.work-card', '.quote-card', '.motif__inner',
    '.spectrum__head', '.spectrum__rail-wrap', '.spectrum__panel', '.spectrum__foot', '.exp-card'];
  const staggerSels = ['.work-card', '.quote-card', '.wid-item', '.exp-card'];
  const els = [];
  sels.forEach((s) => document.querySelectorAll(s).forEach((e) => els.push(e)));
  if (!els.length) return;
  const EASE = 'cubic-bezier(0.22,1,0.36,1)';
  els.forEach((e) => {
    e.style.opacity = '0';
    e.style.transform = 'translateY(28px)';
    const isStagger = staggerSels.some((s) => e.matches(s));
    const idx = isStagger ? Array.from(e.parentElement.children).indexOf(e) : 0;
    const delay = isStagger ? idx * 0.08 : 0;
    e.style.transition = 'opacity .8s ' + EASE + ' ' + delay + 's, transform .8s ' + EASE + ' ' + delay + 's';
  });
  const check = () => {
    const h = window.innerHeight;
    els.forEach((e) => {
      if (e.style.opacity === '1') return;
      const r = e.getBoundingClientRect();
      if (r.top < h * 0.88 && r.bottom > 0) { e.style.opacity = '1'; e.style.transform = 'none'; }
    });
  };
  requestAnimationFrame(check);
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  setTimeout(check, 400);
  setTimeout(() => els.forEach((e) => { e.style.transition = 'none'; e.style.opacity = '1'; e.style.transform = 'none'; }), 3200);
}

const PAGES = { about: AboutPage, expertise: ExpertisePage, contact: ContactPage, portfolio: PortfolioPage, work: WorkWithMePage };

function PageApp() {
  usePageEffect(() => { setupPageReveal(); }, []);
  const key = document.body.dataset.page;
  const Page = PAGES[key];
  return Page ? <Page /> : null;
}

ReactDOM.createRoot(document.getElementById('app')).render(<PageApp />);
