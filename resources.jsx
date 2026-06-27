/* Kris Pierce Consulting — Resources page.
   Collects every downloadable guide and framework in one place, gated by a
   short name + email step (reusing the Web3Forms sendLead pipeline). Reuses
   the .ins-guide card styling and .cta panel; no new visual language.
   Voice: AU/British spelling, outcome-first, no em dashes. */
const { useState: useRes, useEffect: useResEffect } = React;

/* Small glyphs (the kit Icon set doesn't carry these two). */
function ResGlyphDownload({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}
function ResGlyphDoc({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM14 3v4h4M9 13h6M9 17h4" />
    </svg>
  );
}

/* Resource gate (name + email, then reveal the file). */
function ResGate({ item, onClose }) {
  const [name, setName] = useRes('');
  const [email, setEmail] = useRes('');
  const [optin, setOptin] = useRes(false);
  const [company, setCompany] = useRes(''); // honeypot
  const [status, setStatus] = useRes('idle'); // idle | sending | done | error
  useResEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, []);
  const openFile = () => { if (item.file) window.open(item.file, '_blank', 'noopener'); };
  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (company) { setStatus('done'); openFile(); return; } // honeypot
    setStatus('sending');
    try {
      await sendLead({
        subject: 'Resource download — ' + item.title,
        from_name: name || 'Resource download',
        Name: name, Email: email, Resource: item.title, Type: 'Guide / resource download',
        'Mailing list opt-in': optin ? 'Yes' : 'No',
      });
      setStatus('done');
      openFile();
    } catch (err) { setStatus('error'); }
  };
  return (
    <div className="gate" onClick={onClose}>
      <div className="gate__sheet" onClick={(e) => e.stopPropagation()}>
        <button className="gate__close" aria-label="Close" onClick={onClose}><Icon name="x" size={18} /></button>
        {status === 'done' ? (
          <div className="gate__done">
            <span className="gate__tick"><Icon name="check" size={22} /></span>
            <h3 className="gate__title">It's on its way{name ? ', ' + name.split(' ')[0] : ''}.</h3>
            <p className="gate__dek">“{item.title}” is opening in a new tab. If it didn't, use the button below.</p>
            <Button arrow href={item.file} target="_blank" rel="noopener">Open the {item.kind.toLowerCase()}</Button>
          </div>
        ) : (
          <React.Fragment>
            <span className="gate__kind">{item.kind}</span>
            <h3 className="gate__title">{item.title}</h3>
            <p className="gate__dek">Tell me where to send it and it's yours. I'll only use this to share resources
              you'd actually want, never spam.</p>
            <form className="gate__form" onSubmit={submit}>
              <Field label="Your name" placeholder="Jane Citizen" value={name} onChange={(e) => setName(e.target.value)} required />
              <Field type="email" label="Email" placeholder="you@organisation.org" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="text" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true"
                value={company} onChange={(e) => setCompany(e.target.value)} />
              <label className="gate__consent">
                <input type="checkbox" checked={optin} onChange={(e) => setOptin(e.target.checked)} />
                <span>Keep me on the list for the occasional resource and insight. No spam, and you can leave anytime.</span>
              </label>
              {status === 'error' && (
                <p className="contact__error" role="alert">Sorry, that didn't send. Please try again, or email
                  <a href="mailto:info@krispierce.com.au"> info@krispierce.com.au</a>.</p>
              )}
              <Button arrow disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Get the ' + item.kind.toLowerCase()}</Button>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

/* Entrance reveal (reduced-motion safe). */
function setupResReveal() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sels = ['.v3-page-hero__inner', '.ins-guide', '.v3-cta'];
  const staggerSels = ['.ins-guide'];
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

function ResourcesApp() {
  const [gating, setGating] = useRes(null);
  useResEffect(() => { setupResReveal(); }, []);
  const guides = window.GUIDES || [];
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav active="resources" />
      <main id="main-content">
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
            <span className="v3-overline v3-page-hero__overline v3-hero-reveal">Resources</span>
            <h1 className="v3-page-hero__title v3-hero-reveal">Practical tools you can take and <b>use</b></h1>
            <p className="v3-page-hero__lead v3-hero-reveal">Guides, frameworks, and checklists drawn straight from the work. Each one is
              something I use with clients, made plain enough to apply on your own. Tell me where to send it, and adapt
              whatever's useful to your context.</p>
          </div>
        </section>

        <section className="ins-guides" id="guides">
          <div className="ins-guides__inner">
            <div className="ins-guides__grid">
              {guides.map((g) => (
                <article className="ins-guide" key={g.id}>
                  <div className="ins-guide__top">
                    <IconChip variant="soft" size={44}>{<ResGlyphDoc />}</IconChip>
                    <span className="ins-guide__kind">{g.kind}</span>
                  </div>
                  <h3 className="ins-guide__title">{g.title}</h3>
                  <p className="ins-guide__dek">{g.dek}</p>
                  <div className="ins-guide__foot">
                    <span className="ins-guide__meta">{g.meta}</span>
                    <button className="ins-guide__dl" onClick={() => setGating(g)}>
                      <ResGlyphDownload /> Download
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      {gating && <ResGate item={gating} onClose={() => setGating(null)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<ResourcesApp />);
