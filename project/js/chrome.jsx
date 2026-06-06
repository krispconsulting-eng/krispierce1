/* Kris Pierce Consulting — shared site chrome (Nav, Footer, reveal).
   Multi-page: links are real hrefs to .html files. Attached to window. */

const NAV_LINKS = [
  ['Home', 'index.html', 'home'],
  ['About', 'about.html', 'about'],
  ['What I do', 'what-i-do.html', 'work'],
  ['Insights', 'insights.html', 'insights'],
  ['Contact', 'contact.html', 'contact'],
];

function SiteNav({ theme = 'solid', current = '' }) {
  const { useState } = React;
  const [open, setOpen] = useState(false);
  const hero = theme === 'hero';
  return (
    <header className={`site-nav site-nav--${hero ? 'hero' : 'solid'}`}>
      <Logo href="index.html" inverse={hero} assetPath="assets" />
      <nav className="site-nav__links">
        {NAV_LINKS.map(([label, href, id]) => (
          <a key={id} href={href} className={current === id ? 'is-current' : ''}>{label}</a>
        ))}
      </nav>
      <div className="site-nav__cta">
        <Button variant={hero ? 'glass' : 'primary'} size="md" arrow href="contact.html">Let's talk</Button>
      </div>
      <button className="site-nav__burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        <Icon name={open ? 'x' : 'menu'} size={22} />
      </button>
      {open && (
        <div className="site-nav__sheet">
          {NAV_LINKS.map(([label, href, id]) => (
            <a key={id} href={href}>{label}</a>
          ))}
          <Button block arrow href="contact.html">Let's talk</Button>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="foot" id="foot">
      <span className="foot__label">Start a conversation</span>
      <a className="foot__email" href="mailto:krispconsulting@gmail.com">krispconsulting@gmail.com</a>
      <div className="foot__bar">
        <div className="foot__links">
          <a href="about.html">About</a>
          <a href="what-i-do.html">What I do</a>
          <a href="insights.html">Insights</a>
          <a href="contact.html">Contact</a>
        </div>
        <div className="foot__social">
          <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
          <a href="mailto:krispconsulting@gmail.com" aria-label="Email"><Icon name="mail" size={18} /></a>
        </div>
      </div>
      <div className="foot__legal">
        <span>© 2026 Kris Pierce Consulting</span>
        <span>Consumer engagement &amp; patient-centred outcomes</span>
        <span>Australia</span>
      </div>
    </footer>
  );
}

/* Entrance reveals — scroll-driven, reduced-motion safe, never leaves content hidden. */
function setupReveal() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sels = ['[data-reveal]'];
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
  setTimeout(() => els.forEach((e) => {
    e.style.transition = 'none'; e.style.opacity = '1'; e.style.transform = 'none';
  }), 2400);
}

Object.assign(window, { SiteNav, SiteFooter, setupReveal, NAV_LINKS });
