/* Kris Pierce Consulting — Insights page app shell. */
const { useState: useApp, useEffect: useAppEffect } = React;

/* ---------------- Reader overlay ---------------- */
function Reader({ item, onClose }) {
  useAppEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, []);
  const body = item.body || [item.dek];
  return (
    <div className="reader" onClick={onClose}>
      <article className="reader__sheet" onClick={(e)=>e.stopPropagation()}>
        <button className="reader__close" aria-label="Close" onClick={onClose}><Icon name="x" size={20} /></button>
        <div className="reader__eyebrow">
          {item.kicker && <Pill variant="wash">{item.kicker}</Pill>}
          <span className="reader__cat">{item.category}</span>
        </div>
        <h1 className="reader__title">{item.title}</h1>
        <div className="reader__meta">
          <span>{item.date}</span><span className="dot"></span><span>{item.read} min read</span>
        </div>
        <p className="reader__lead">{item.dek}</p>
        <div className="reader__body">
          {body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="reader__foot">
          <Button arrow href="/#contact">Start a conversation</Button>
          <span>Working on something like this? Tell me about it.</span>
        </div>
      </article>
    </div>
  );
}

/* ---------------- Resource gate (name + email, then reveal the file) ---------------- */
function ResourceGate({ item, onClose }) {
  const [name, setName] = useApp('');
  const [email, setEmail] = useApp('');
  const [optin, setOptin] = useApp(false);
  const [company, setCompany] = useApp(''); // honeypot
  const [status, setStatus] = useApp('idle'); // idle | sending | done | error
  useAppEffect(() => {
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
      <div className="gate__sheet" onClick={(e)=>e.stopPropagation()}>
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
            <p className="gate__dek">Tell me where to send it and it's yours — I'll only use this to share resources
              you'd actually want, never spam.</p>
            <form className="gate__form" onSubmit={submit}>
              <Field label="Your name" placeholder="Jane Citizen" value={name} onChange={(e)=>setName(e.target.value)} required />
              <Field type="email" label="Email" placeholder="you@organisation.org" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              <input type="text" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true"
                value={company} onChange={(e)=>setCompany(e.target.value)} />
              <label className="gate__consent">
                <input type="checkbox" checked={optin} onChange={(e)=>setOptin(e.target.checked)} />
                <span>Keep me on the list for the occasional resource and insight. No spam, and you can leave anytime.</span>
              </label>
              {status === 'error' && (
                <p className="contact__error" role="alert">Sorry — that didn't send. Please try again, or email
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

/* ---------------- Entrance reveal ---------------- */
function setupInsReveal() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sels = ['.ins-feature', '.ins-card', '.ins-guide', '.ins-sub__panel'];
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

/* ---------------- Tweak defaults ---------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "cols": 3,
  "cardStyle": "text",
  "accent": true,
  "showFeatured": true
}/*EDITMODE-END*/;

/* ---------------- App ---------------- */
function InsightsApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [reading, setReading] = useApp(null);
  const [gating, setGating] = useApp(null);

  useAppEffect(() => { setupInsReveal(); }, [t.cols, t.cardStyle, t.showFeatured]);

  const openArticle = (a) => setReading(a);
  const openGuide = (g) => setGating(g);

  return (
    <div className="site">
      <Nav theme="solid" active="insights" />
      <main>
        <InsHeader />
        {t.showFeatured && <InsFeature item={window.FEATURED_INSIGHT} onOpen={openArticle} />}
        <InsLibrary items={window.INSIGHTS} cols={t.cols} cardStyle={t.cardStyle}
          accent={t.accent} onOpen={openArticle} />
        <InsGuides onOpen={openGuide} />
        <InsSubscribe />
      </main>
      <Footer onNav={(id) => { window.location.href = '/#' + id; }} />

      {reading && <Reader item={reading} onClose={() => setReading(null)} />}
      {gating && <ResourceGate item={gating} onClose={() => setGating(null)} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Library layout" />
        <TweakRadio label="Columns" value={String(t.cols)} options={['2', '3']}
          onChange={(v) => setTweak('cols', Number(v))} />
        <TweakRadio label="Card style" value={t.cardStyle} options={['text', 'image']}
          onChange={(v) => setTweak('cardStyle', v)} />
        <TweakToggle label="Clay category accent" value={t.accent}
          onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Top of page" />
        <TweakToggle label="Featured lead piece" value={t.showFeatured}
          onChange={(v) => setTweak('showFeatured', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<InsightsApp />);
