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
              {status === 'error' && (
                <p className="contact__error" role="alert">Sorry, that didn't send. Please try again, or email
                  <a href="mailto:hello@krispierce.com.au"> hello@krispierce.com.au</a>.</p>
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
  const sels = ['.page-hero', '.ins-guide', '.cta__panel'];
  const els = [];
  sels.forEach((s) => document.querySelectorAll(s).forEach((e) => els.push(e)));
  if (!els.length) return;
  const EASE = 'cubic-bezier(0.22,1,0.36,1)';
  els.forEach((e) => { e.style.opacity = '0'; e.style.transform = 'translateY(20px)';
    e.style.transition = 'opacity .6s ' + EASE + ', transform .6s ' + EASE; });
  const check = () => {
    const h = window.innerHeight;
    els.forEach((e) => {
      if (e.style.opacity === '1') return;
      const r = e.getBoundingClientRect();
      if (r.top < h * 0.94 && r.bottom > 0) { e.style.opacity = '1'; e.style.transform = 'none'; }
    });
  };
  requestAnimationFrame(check);
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  setTimeout(check, 400);
  setTimeout(() => els.forEach((e) => { e.style.transition = 'none'; e.style.opacity = '1'; e.style.transform = 'none'; }), 2400);
}

function ResourcesApp() {
  const [gating, setGating] = useRes(null);
  useResEffect(() => { setupResReveal(); }, []);
  const guides = window.GUIDES || [];
  return (
    <div className="site">
      <Nav theme="solid" active="resources" />
      <main>
        <section className="page-hero">
          <Pill variant="wash" dot className="page-hero__overline">Resources</Pill>
          <h1 className="page-hero__title">Practical tools you can take and <em>use</em></h1>
          <p className="page-hero__lead">Guides, frameworks, and checklists drawn straight from the work. Each one is
            something I use with clients, made plain enough to apply on your own. Tell me where to send it, and adapt
            whatever's useful to your context.</p>
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

        <section className="cta">
          <div className="cta__panel">
            <h2 className="cta__title">A tool only goes so far. The work goes <em>further</em></h2>
            <p className="cta__sub">If you're shaping engagement that has to change a decision, not just tick a box,
              start a conversation. You'll get a straight answer on whether it's a fit.</p>
            <Button variant="inverse" size="lg" arrow href="/contact">Let's talk</Button>
          </div>
        </section>
      </main>
      <Footer onNav={(id) => { window.location.href = '/#' + id; }} />
      {gating && <ResGate item={gating} onClose={() => setGating(null)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<ResourcesApp />);
