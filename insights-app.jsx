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
          <Button arrow href="index.html#contact">Start a conversation</Button>
          <span>Working on something like this? Tell me about it.</span>
        </div>
      </article>
    </div>
  );
}

/* ---------------- Toast ---------------- */
function Toast({ msg }) {
  return <div className="toast"><span className="tick"><Icon name="check" size={17} /></span>{msg}</div>;
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
  const [toast, setToast] = useApp(null);

  useAppEffect(() => { setupInsReveal(); }, [t.cols, t.cardStyle, t.showFeatured]);
  useAppEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  const openArticle = (a) => setReading(a);
  const openGuide = (g) => setToast('Downloading \u201C' + g.title + '\u201D');

  const total = 1 + window.INSIGHTS.length;

  return (
    <div className="site">
      <Nav theme="solid" active="insights" />
      <main>
        <InsHeader count={total} />
        {t.showFeatured && <InsFeature item={window.FEATURED_INSIGHT} onOpen={openArticle} />}
        <InsLibrary items={window.INSIGHTS} cols={t.cols} cardStyle={t.cardStyle}
          accent={t.accent} onOpen={openArticle} />
        <InsGuides onOpen={openGuide} />
        <InsSubscribe />
      </main>
      <Footer onNav={(id) => { window.location.href = 'index.html#' + id; }} />

      {reading && <Reader item={reading} onClose={() => setReading(null)} />}
      {toast && <Toast msg={toast} />}

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
