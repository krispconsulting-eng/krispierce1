/* Kris Pierce Consulting — Insights page sections + homepage teaser.
   Reuses window primitives (Icon, Button, Pill, IconChip). */
const { useState: useIns, useMemo: useInsMemo } = React;

/* A couple of glyphs the kit Icon set doesn't carry. */
function GlyphDownload({ size=16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}
function GlyphDoc({ size=20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM14 3v4h4M9 13h6M9 17h4" />
    </svg>
  );
}

/* ---------------- Page header ---------------- */
function InsHeader() {
  return (
    <section className="ins-head">
      <div className="ins-head__top">
        <div>
          <span className="overline">Insights</span>
          <h1 className="ins-head__title">From the work, not the <em>sidelines</em></h1>
        </div>
        <span className="ins-head__count">Field notes from the work</span>
      </div>
      <p className="ins-head__lead">This is where the real work gets shared: research findings, what co-design and
        participatory research actually reveal, and reflections on consumer engagement, rare disease, and patient voice.
        Not theory for its own sake, but what the work teaches, and what it means for the people doing it.</p>
    </section>
  );
}

/* ---------------- Featured lead ---------------- */
function InsFeature({ item, onOpen }) {
  return (
    <article className="ins-feature" onClick={()=>onOpen(item)} role="link" tabIndex={0}
      onKeyDown={(e)=>{ if(e.key==='Enter') onOpen(item); }}>
      <div className="ins-feature__body">
        <div className="ins-feature__eyebrow">
          <Pill variant="wash">{item.kicker}</Pill>
          <span className="ins-feature__cat">{item.category}</span>
        </div>
        <h2 className="ins-feature__title">{item.title}</h2>
        <p className="ins-feature__dek">{item.dek}</p>
        <div className="ins-feature__meta">
          <span>{item.date}</span><span className="dot"></span><span>{item.read} min read</span>
        </div>
        <Button variant="secondary" arrow onClick={(e)=>{ e.stopPropagation(); onOpen(item); }}>Read the piece</Button>
      </div>
      <div className="ins-feature__media">
        <image-slot id={item.slot} shape="rect" fit="cover" src={item.cover}
          placeholder="Drop a lead image"></image-slot>
      </div>
    </article>
  );
}

/* ---------------- Library: filters + grid ---------------- */
function InsLibrary({ items, cols, cardStyle, accent, onOpen }) {
  const [filter, setFilter] = useIns('All');
  const cats = ['All', ...window.INSIGHT_CATEGORIES];
  const shown = useInsMemo(
    () => filter === 'All' ? items : items.filter((a) => a.category === filter),
    [filter, items]
  );
  const gridCls = ['ins-grid', cardStyle === 'image' ? 'ins-grid--image' : '', accent ? '' : 'ins-grid--plain']
    .filter(Boolean).join(' ');
  return (
    <React.Fragment>
      <div className="ins-filters">
        <div className="ins-filters__chips">
          {cats.map((c) => (
            <button key={c} className={`ins-chip ${filter===c ? 'is-active' : ''}`}
              onClick={()=>setFilter(c)}>{c}</button>
          ))}
        </div>
        <span className="ins-filters__result">{shown.length} {shown.length === 1 ? 'piece' : 'pieces'}</span>
      </div>
      <div className={gridCls} style={{ '--ins-cols': cols }}>
        {shown.map((a) => (
          <article key={a.id} className="ins-card" onClick={()=>onOpen(a)} role="link" tabIndex={0}
            onKeyDown={(e)=>{ if(e.key==='Enter') onOpen(a); }}>
            <div className="ins-card__media">
              <image-slot id={a.slot} shape="rect" fit="cover" placeholder="Image"></image-slot>
            </div>
            <div className="ins-card__body">
              <div className="ins-card__top">
                <span className="ins-card__cat">{a.category}</span>
                <span className="ins-card__read">{a.read} min</span>
              </div>
              <h3 className="ins-card__title">{a.title}</h3>
              <p className="ins-card__dek">{a.dek}</p>
              <div className="ins-card__foot">
                <span className="ins-card__date">{a.date}</span>
                <span className="ins-card__go"><Icon name="arrow-right" size={16} /></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </React.Fragment>
  );
}

/* ---------------- Guides ---------------- */
function InsGuides({ onOpen }) {
  return (
    <section className="ins-guides" id="guides">
      <div className="ins-guides__inner">
        <div className="ins-guides__head">
          <span className="overline">Take and use</span>
          <h2 className="ins-guides__title">Guides &amp; frameworks</h2>
          <p className="ins-guides__sub">Practical starting points drawn from the work. Tell me where to send it,
            and adapt whatever's useful to your context.</p>
        </div>
        <div className="ins-guides__grid">
          {window.GUIDES.map((g) => (
            <article className="ins-guide" key={g.id}>
              <div className="ins-guide__top">
                <IconChip variant="soft" size={44}>{<GlyphDoc />}</IconChip>
                <span className="ins-guide__kind">{g.kind}</span>
              </div>
              <h3 className="ins-guide__title">{g.title}</h3>
              <p className="ins-guide__dek">{g.dek}</p>
              <div className="ins-guide__foot">
                <span className="ins-guide__meta">{g.meta}</span>
                <button className="ins-guide__dl" onClick={()=>onOpen(g)}>
                  <GlyphDownload /> Download
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Subscribe ---------------- */
function InsSubscribe() {
  const [sent, setSent] = useIns(false);
  const [status, setStatus] = useIns('idle'); // idle | sending | error
  const [email, setEmail] = useIns('');
  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await sendLead({ subject: 'New subscriber — krispierce.com.au', from_name: 'Newsletter signup',
        Email: email, Type: 'Newsletter subscriber' });
      setSent(true);
    } catch (err) { setStatus('error'); }
  };
  return (
    <section className="ins-sub">
      <div className="ins-sub__panel">
        <div className="ins-sub__text">
          <h2 className="ins-sub__title">Notes, occasionally</h2>
          <p className="ins-sub__copy">A short email when there is something genuinely worth reading: a new
            piece, a guide, or a lesson from recent work. No cadence for its own sake, and easy to leave.</p>
        </div>
        <div className="ins-sub__form">
          <div className="ins-sub__card">
            {sent ? (
              <div className="ins-sub__thanks">
                <span className="tick"><Icon name="check" size={20} /></span>
                <span>Thank you. You are on the list, and I will keep it worth your while.</span>
              </div>
            ) : (
              <React.Fragment>
                <p className="ins-sub__note ins-sub__note--pre">By submitting, you agree to our <a href="/privacy">Privacy Statement</a>.</p>
                <form className="ins-sub__row" onSubmit={submit}>
                  <Field label="Email" type="email" required placeholder="you@organisation.org"
                    value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <Button arrow disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Subscribe'}</Button>
                </form>
              </React.Fragment>
            )}
            {status === 'error' && <p className="ins-sub__note" role="alert" style={{ color: 'var(--brick-500)' }}>Sorry, that didn't send. Please try again.</p>}
            {!sent && status !== 'error' && <p className="ins-sub__note">For people working in health, industry, and advocacy. I do not share your address.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Homepage teaser ---------------- */
const TEASER_IMAGES = [
  'assets/bush-path.jpg',
  'assets/driftwood.jpg',
  'assets/rocks-blocks.jpg',
];
function InsightsTeaser() {
  const latest = window.INSIGHTS.slice(0, 3);
  return (
    <section className="teaser" id="insights-teaser">
      <div className="teaser__head">
        <div>
          <span className="overline">Insights</span>
          <h2 className="teaser__title">Recent thinking</h2>
        </div>
      </div>
      <div className="teaser__grid">
        {latest.map((a, i) => (
          <a key={a.id} className="ins-card teaser-card" href="/engagement/insights" style={{ textDecoration:'none' }}>
            <div className="teaser-card__media">
              <img src={'/' + TEASER_IMAGES[i]} alt="" loading="lazy" />
              <span className="teaser-card__pill">{a.category}</span>
            </div>
            <div className="ins-card__body">
              <h3 className="ins-card__title">{a.title}</h3>
              <p className="ins-card__dek">{a.dek}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { InsHeader, InsFeature, InsLibrary, InsGuides, InsSubscribe, InsightsTeaser });
