/* Kris Pierce Consulting — "Work with me" page.
   The business-development spine: who I work with, the problems I solve, how
   we work together (the Meaningful Partnership Model), typical engagements,
   selected impact, featured work, and FAQ. Voice: AU/British spelling,
   peer to peer, one idea per section, no em dashes. Uses DS globals
   (Nav, Footer, CTA, Pill, Icon) + the interior-page CSS in pages.css. */

const WHO_I_WORK_WITH = [
  'Pharmaceutical and biotechnology companies',
  'Medical technology organisations',
  'Universities and research institutes',
  'Government departments and agencies',
  'Health services',
  'Peak bodies and patient organisations',
  'Research funding organisations',
  'Rare disease organisations',
];

const PROBLEMS = [
  'Design meaningful consumer engagement strategies',
  'Embed lived experience across research and policy',
  'Strengthen Health Technology Assessment evidence',
  'Improve grant competitiveness',
  'Build trusted partnerships with patients and communities',
  'Navigate complex rare disease environments',
  'Develop governance frameworks for consumer engagement',
  'Build internal capability and leadership',
];

const STEPS = [
  ['Discover', 'compass', 'We start with your organisation, your goals, and the challenge in front of you. No method is chosen before the problem is understood.'],
  ['Design', 'pen', 'Together we identify the approach the work actually needs, whether that is strategic advice, facilitation, capability building, or a larger transformation project.'],
  ['Deliver', 'target', 'I work alongside your team to deliver practical, evidence-informed outcomes you can implement with confidence, and run again without me.'],
];

const MODEL = [
  ['01', 'Assess', 'Where the organisation actually sits on consumer and community partnership, named plainly.'],
  ['02', 'Align', 'Engagement tied to the decisions it is meant to influence, and to the people it affects.'],
  ['03', 'Engage', 'Genuine participatory work with patients, carers, and community, built with them rather than about them.'],
  ['04', 'Embed', 'Partnership written into governance, process, and practice so it holds after the project ends.'],
  ['05', 'Evaluate', 'Evidence of what changed, so the value is clear and the next cycle is stronger.'],
];

const ENGAGEMENTS = [
  'One-off strategic advice',
  'Consumer engagement reviews',
  'Organisation-wide capability programmes',
  'Research co-design and partnership development',
  'Executive advisory retainers',
  'Workshop facilitation',
  'Conference speaking',
  'Long-term transformation projects',
];

const CASE_STUDIES = [
  ['National research initiative', 'Research partnership',
    'Supporting a national research initiative',
    'Developed a consumer partnership framework that embedded lived experience throughout the research lifecycle.',
    'Lived experience present at every stage, not bolted on at the end.'],
  ['Industry', 'Industry support',
    'Strengthening industry engagement',
    'Advised on consumer engagement strategies to support evidence generation and stakeholder partnerships, inside the applicable code.',
    'Stronger evidence, with trust and compliance built in.'],
  ['Multi-team organisation', 'Capability building',
    'Building organisational capability',
    'Designed and facilitated leadership programmes that strengthened consumer engagement across multiple teams.',
    'Capability held by the organisation, not outsourced to a consultant.'],
];

const FEATURED = [
  ['SCN2A Australia', 'Founder and director of a charity supporting families affected by a rare developmental and epileptic encephalopathy, spanning research partnerships, policy, and community.'],
  ['National policy contributions', 'Deputy Chair of the HTA Consumer Consultative Committee and member of the MSAC Evaluation Sub-Committee, shaping how patient voice enters health decisions in Australia.'],
  ['Research collaborations', 'Two decades of participatory and applied health research, bringing the patient and carer perspective into study design, endpoints, and evidence.'],
  ['Genomics advisory', 'Member of the Genomics Australia Advisory Council, contributing lived-experience perspective to the national genomics agenda.'],
  ['International engagement', 'Co-Chair of the HTAi Consumer Network and an invited speaker at international convenings on rare disease and consumer partnership.'],
  ['Advisory roles', 'Ongoing senior advisory work across consumer engagement, HTA, and rare disease, where decisions are actually made.'],
];

const FAQ = [
  ['What does meaningful consumer engagement look like?',
    'Partnership, not consultation. Patients and carers shape the work from the start and share in the decisions, rather than being asked to react to something already finished. If the outcome would have been the same without them, it was not partnership.'],
  ['Do you work internationally?',
    'Yes. Alongside Australian work I hold international roles and speak at global convenings, and I take on engagements outside Australia where the fit is right.'],
  ['Can you facilitate workshops?',
    'Yes. Facilitation is a core part of the practice, from single sessions to co-design series and capability programmes for teams.'],
  ['Can you support grant applications?',
    'Yes. I help research teams build genuine consumer partnership into proposals, which strengthens both the science and the competitiveness of the application.'],
  ['Do you provide executive mentoring?',
    'Yes. I work with senior leaders and not-for-profit executives through advisory retainers and mentoring, one to one.'],
  ['Can you review our engagement strategy?',
    'Yes. An independent review is often the clearest place to start: an honest read of where you sit and what would move it forward.'],
  ['How long do projects usually take?',
    'It depends on the work. A piece of strategic advice can be a few weeks; a capability programme or transformation project runs across months. We scope it together before anything begins.'],
];

function WwSection({ label, children }) {
  return (
    <section className="page-block">
      <div className="page-block__label">{label}</div>
      <div className="page-block__body">{children}</div>
    </section>
  );
}

function WorkWithMePage() {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav active="work" variant="light" />
      <main id="main-content">
        <section className="v3-page-header">
          <div className="v3-page-header__inner">
            <span className="v3-overline v3-page-header__overline v3-header-reveal">Work with me</span>
            <h1 className="v3-page-header__title v3-header-reveal">Helping health organisations make better decisions by embedding <b>lived experience</b> where it matters most</h1>
            <p className="v3-page-header__lead v3-header-reveal">Everything I offer, from strategic advice and research partnership to
              HTA readiness and organisation-wide capability, comes from one place: flexible, collaborative work that generates
              insight you can act on and moves outcomes toward the people most affected.</p>
          </div>
        </section>

        <WwSection label="Who I work with">
          <h2>Organisations serious about partnership</h2>
          <p className="page-prose">I partner with organisations committed to improving health outcomes through meaningful
            consumer and patient partnership. If that is the work you are trying to do well, we will get on.</p>
          <div className="ww-taglist" role="list">
            {WHO_I_WORK_WITH.map((t) => (
              <span className="ww-tag" role="listitem" key={t}>{t}</span>
            ))}
          </div>
        </WwSection>

        <hr className="page-divider" />

        <WwSection label="What I solve">
          <h2>Clients do not buy services. They buy solutions.</h2>
          <p className="page-prose">The work is different every time, but it usually comes down to helping an organisation to:</p>
          <ul className="ww-checklist">
            {PROBLEMS.map((p) => (
              <li key={p}><Icon name="check" size={19} />{p}</li>
            ))}
          </ul>
        </WwSection>

        <hr className="page-divider" />

        <WwSection label="How we work">
          <h2>How we work together</h2>
          <p className="page-prose">A simple shape that keeps the method following the question, not the other way around.</p>
          <div className="ww-steps">
            {STEPS.map(([title, icon, body], i) => (
              <div className="ww-step" key={title}>
                <span className="ww-step__k"><Icon name={icon} size={16} /> Step {i + 1}</span>
                <h3 className="ww-step__title">{title}</h3>
                <p className="ww-step__body">{body}</p>
              </div>
            ))}
          </div>
        </WwSection>

        <hr className="page-divider" />

        <WwSection label="The model">
          <h2>The Meaningful Partnership Model</h2>
          <p className="page-prose">One approach underneath everything I offer. It takes an organisation from an honest
            starting point to partnership that holds, and gives you a shared language for the work.</p>
          <div className="ww-model">
            {MODEL.map(([n, name, desc]) => (
              <div className="ww-stage" key={name}>
                <span className="ww-stage__n">{n}</span>
                <span className="ww-stage__name">{name}</span>
                <span className="ww-stage__desc">{desc}</span>
              </div>
            ))}
          </div>
        </WwSection>

        <hr className="page-divider" />

        <WwSection label="Engagements">
          <h2>Typical engagements</h2>
          <p className="page-prose">No fixed price list, but a clear sense of scope. Work usually takes one of these shapes,
            or a combination as a project grows.</p>
          <ul className="ww-engagements">
            {ENGAGEMENTS.map((e) => (
              <li key={e}><Icon name="arrow-right" size={16} />{e}</li>
            ))}
          </ul>
        </WwSection>

        <section className="work-section">
          <div className="work-head">
            <span className="overline">Selected impact</span>
            <h2>Outcomes, not client names</h2>
            <p>Short studies of the work and what it changed. Where confidentiality applies, the focus stays on the outcome
              rather than the organisation.</p>
          </div>
          <div className="work-grid">
            {CASE_STUDIES.map(([sector, type, title, desc, outcome]) => (
              <article className="work-card" key={title}>
                <div className="work-card__top">
                  <span className="work-card__sector">{sector}</span>
                  <Pill variant="wash" size="sm">{type}</Pill>
                </div>
                <h3 className="work-card__title">{title}</h3>
                <p className="work-card__desc">{desc}</p>
                <p className="work-card__outcome"><Icon name="arrow-right" size={16} />{outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <WwSection label="Featured work">
          <h2>Authority beyond the consulting</h2>
          <p className="page-prose">The consulting draws on a wider body of work in research, policy, and rare disease
            leadership. A few of the places that work shows up.</p>
          <div className="ww-featured">
            {FEATURED.map(([title, body]) => (
              <div className="ww-feature" key={title}>
                <h3 className="ww-feature__title">{title}</h3>
                <p className="ww-feature__body">{body}</p>
              </div>
            ))}
          </div>
        </WwSection>

        <hr className="page-divider" />

        <WwSection label="Questions">
          <h2>Frequently asked questions</h2>
          <div className="ww-faq">
            {FAQ.map(([q, a]) => (
              <div className="ww-faq__item" key={q}>
                <h3 className="ww-faq__q">{q}</h3>
                <p className="ww-faq__a">{a}</p>
              </div>
            ))}
          </div>
        </WwSection>

        <WwSection label="Go deeper">
          <h2>See the thinking, and the tools</h2>
          <p className="page-prose">The ideas underneath the work, and practical resources you can take away and use in your own context.</p>
          <div className="ww-featured">
            <a className="ww-feature ww-feature--link" href="/engagement/insights">
              <h3 className="ww-feature__title">Insights <Icon name="arrow-right" size={17} /></h3>
              <p className="ww-feature__body">Field notes and long reads on doing engagement that counts, not engagement that performs.</p>
            </a>
            <a className="ww-feature ww-feature--link" href="/resources">
              <h3 className="ww-feature__title">Resources <Icon name="arrow-right" size={17} /></h3>
              <p className="ww-feature__body">Guides, checklists, and frameworks drawn straight from the work, free to download and adapt.</p>
            </a>
          </div>
        </WwSection>

        <section className="v3-cta-section">
          <div className="v3-wrap">
            <div className="v3-cta">
              <div className="v3-cta__content">
                <span className="v3-overline v3-cta__overline">Start a conversation</span>
                <h2 className="v3-cta__h2">Ready to strengthen your approach to consumer and patient partnership? <b>Let's start the conversation.</b></h2>
                <p className="v3-cta__lead">Whether you need strategic advice, independent expertise, or support to strengthen
                  consumer partnerships, I would welcome the chance to discuss your goals and explore how we can work together.</p>
              </div>
              <a href="/contact" className="v3-btn v3-btn--blue">Start a conversation <span>→</span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { WorkWithMePage });
