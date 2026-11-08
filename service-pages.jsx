/* Kris Pierce Consulting: service and program pages.
   One template for the four /consulting/<slug> service pages and one for the
   four /advisory/<slug> program pages. Content lives in service-pages-data.js.
   Reuses the interior-page chrome (.v3-page-header, .page-block, .ww-checklist)
   and adds only the few pieces in service-pages.css.
   Voice: AU/British spelling, peer to peer, no em dashes. */

function SvcBlocks({ blocks }) {
  return blocks.map((b, i) => (
    <React.Fragment key={b.label}>
      {i > 0 && <hr className="page-divider" />}
      <section className="page-block">
        <h2 className="page-block__label">{b.label}</h2>
        <div className="page-block__body">{b.body}</div>
      </section>
    </React.Fragment>
  ));
}

function SvcCheckList({ items }) {
  return (
    <ul className="ww-checklist svc-checklist">
      {items.map((t) => <li key={t}><Icon name="check" size={19} />{t}</li>)}
    </ul>
  );
}

function SvcHeader({ page, children }) {
  return (
    <section className="v3-page-header">
      <div className="v3-page-header__inner">
        <span className="v3-overline v3-page-header__overline v3-header-reveal">{page.eyebrow}</span>
        <h1 className="v3-page-header__title v3-header-reveal">{page.titleLead} <b>{page.titleAccent}</b></h1>
        <p className="v3-page-header__lead v3-header-reveal">{page.lede}</p>
        {children}
      </div>
    </section>
  );
}

function ServicePage({ slug }) {
  const page = (window.SERVICE_PAGES || []).find((p) => p.slug === slug);
  if (!page) return null;
  const blocks = [
    {
      label: 'What this involves',
      body: page.involves.map((t) => <p key={t} className="page-prose">{t}</p>),
    },
    { label: 'Where it applies', body: <SvcCheckList items={page.applies} /> },
    {
      label: 'Why it matters',
      body: page.why.map((t) => <p key={t} className="page-prose">{t}</p>),
    },
    {
      label: 'How the work runs',
      body: (
        <>
          <p className="page-prose">{page.how.intro}</p>
          <ul className="ww-engagements svc-rows">
            {page.how.items.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </>
      ),
    },
    { label: 'Credibility', body: <p className="page-prose">{page.credibility}</p> },
    {
      label: 'Next step',
      body: (
        <>
          <p className="page-prose">{page.next}</p>
          <div className="svc-cta">
            <a href="/contact" className="v3-btn v3-btn--blue">Work with me <span>→</span></a>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav active="work" variant="light" />
      <main id="main-content">
        <SvcHeader page={page} />
        <SvcBlocks blocks={blocks} />
      </main>
      <Footer />
    </div>
  );
}

function ProgramPage({ slug }) {
  const page = (window.PROGRAM_PAGES || []).find((p) => p.slug === slug);
  if (!page) return null;
  const blocks = [
    { label: 'Who it’s for', body: <p className="page-prose">{page.who}</p> },
    { label: 'What it delivers', body: <SvcCheckList items={page.delivers} /> },
    { label: 'How it works', body: <p className="page-prose">{page.how}</p> },
    { label: 'Why it matters', body: <p className="page-prose">{page.why}</p> },
  ];
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav active="work" variant="light" />
      <main id="main-content">
        <SvcHeader page={page}>
          <div className="svc-header-cta v3-header-reveal">
            <a href="/contact" className="v3-btn v3-btn--blue">Book consultation <span>→</span></a>
          </div>
        </SvcHeader>
        <SvcBlocks blocks={blocks} />
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { ServicePage, ProgramPage });
