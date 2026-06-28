/* Kris Pierce Consulting — website sections (part 1): Nav, SectionNav */

const NAV_LINKS = [
  ['Engagement','engagement','/engagement'],
  ['About','about','/about'],
  ['Resources','resources','/resources'],
];

function Nav({ active, variant }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const isLight = variant === 'light';
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const logoSrc = (isLight && !scrolled) ? '/assets/logo-wordmark.png' : '/assets/logo-wordmark-cream.png';
  return (
    <header className={'v3-nav' + (isLight ? ' v3-nav--light' : '') + (scrolled ? ' is-scrolled' : '')}>
      <div className="v3-nav__inner">
        <a href="/" className="v3-nav__mark" aria-label="Kris Pierce Consulting">
          <img src={logoSrc} alt="Kris Pierce Consulting" />
        </a>
        <nav className="v3-nav__links">
          {NAV_LINKS.map(([label, id, href]) => (
            <a key={id} href={href} className={active === id ? 'is-active' : ''}>{label}</a>
          ))}
        </nav>
        <a href="/contact" className="v3-nav__cta">Start a conversation</a>
        <button className="v3-nav__burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
        {open && (
          <div className="site-nav__sheet">
            {NAV_LINKS.map(([label, id, href]) => (
              <a key={id} href={href} className={active === id ? 'is-active' : ''} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a href="/contact" className="v3-nav__cta" style={{marginTop: '20px'}} onClick={() => setOpen(false)}>Start a conversation</a>
          </div>
        )}
      </div>
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

Object.assign(window, { Nav, SectionNav });
