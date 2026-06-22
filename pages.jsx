/* Kris Pierce Consulting — standalone interior pages (About / Expertise / Contact).
   Content from the approved drafts. Voice: AU/British spelling, outcome-first,
   no em dashes. Uses DS components (Pill, Button, IconChip, Field) + Icon. */
const { useState: useState3 } = React;

/* ============================ About ============================ */
function AboutPage() {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav theme="solid" active="about" />
      <main id="main-content">
        <section className="page-hero">
          <Pill variant="wash" dot className="page-hero__overline">About Kris</Pill>
          <h1 className="page-hero__title">Using what I've learnt to level up engagement, build capacity, and back the next gen of <em>changemakers</em></h1>
          <p className="page-hero__lead">I'm Kris Pierce. My consulting practice draws on two decades as a carer,
            advocate, consultant, and researcher to help organisations strengthen engagement, build evidence,
            train advocates, mentor not-for-profits, and support the carers who hold the system together.</p>
          <div className="page-hero__cta">
            <Button variant="primary" arrow href="/contact">Let's talk</Button>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-portrait__media">
            <image-slot id="kp-about-page" shape="rounded" radius="24" fit="cover" position="50% 22%"
              src="assets/kris-studio2.jpg"
              placeholder="Drop a candid working portrait of Kris"></image-slot>
          </div>
          <div className="about-portrait__text">
            <div className="page-block__label">The work</div>
            <p className="page-prose">My consulting practice covers engagement, research, advocacy training, not-for-profit
              mentoring, and caregiver support. The thread through all of it: using what I've learnt through life and
              work to help people and organisations do this better.</p>
          </div>
        </section>

        <hr className="page-divider" />

        <section className="page-block">
          <div className="page-block__label">Track record</div>
          <div className="page-block__body">
            <p className="page-prose">Consumer and community engagement strategy at Rare Diseases NSW, based at UNSW
              Sydney, is the day-to-day base. Beyond that sit the committees that shape how patient voice enters
              health decisions in Australia: Deputy Chair of the HTA Consumer Consultative Committee, member of the
              MSAC Evaluation Sub-Committee, member of the Genomics Australia Advisory Council, and internationally,
              Co-Chair of the HTAi Consumer Network.</p>
            <p className="page-prose"><strong>SCN2A Australia</strong>, a charity supporting families affected by one
              of the rarer developmental and epileptic encephalopathies, was founded and is directed by Kris. That work
              spans research partnerships, policy, and the day-to-day reality of a small patient community trying to
              be heard.</p>
            <p className="page-prose">Across these roles, the work has reached research institutes, government bodies,
              advocacy organisations, and industry sponsors.</p>
          </div>
        </section>

        <hr className="page-divider" />

        <section className="page-block">
          <div className="page-block__label">How the work runs</div>
          <div className="page-block__body">
            <p className="page-prose">The method follows the question. Some challenges need participatory research and
              structured discovery. Some need co-design, building the answer with the people affected rather than
              consulting them on one already drafted. Some need ongoing strategic input. No fixed methodology gets bent
              to fit the problem.</p>
            <p className="page-prose">What stays constant is the focus on outcomes that are specific and measurable, and
              that matter to the people at the centre. Engagement that looks good in a report but changes nothing isn't
              the goal. The work has to shift a decision, a design, or a strategy. Otherwise it's just data collection.</p>
            <p className="page-prose">The regulatory ground this sits on matters too, particularly for industry
              partners, including the Medicines Australia Code of Conduct. Done properly, engagement tends to meet
              compliance requirements as a byproduct, not the other way around.</p>
          </div>
        </section>

        <hr className="page-divider" />

        <section className="page-block">
          <div className="page-block__label">Lived experience</div>
          <div className="page-block__body">
            <p className="page-prose">Two decades as a carer in the rare disease space shape this work. That perspective
              is part of why the difference between engagement that performs and engagement that counts is easy to spot.
              Context, not the headline. The work stands on its own.</p>
            <div className="page-block__figure">
              <image-slot id="kp-about-dog" shape="rounded" radius="22" fit="contain" position="50% 50%"
                src="assets/kris-dog.jpg" placeholder="A personal photo"></image-slot>
            </div>
          </div>
        </section>

        <Motif id="about-motif" src="assets/hero-path.jpg" position="50% 42%"
          overline="Work with me"
          title={<>Bring me into <em>the work</em></>}
          sub="If you're building engagement, growing capability, or investing in the next generation of advocates and leaders, I can help you get there. Tell me what you're working on."
          ctaLabel="Get in touch" ctaHref="/contact" />
      </main>
      <Footer />
    </div>
  );
}

/* ============================ Expertise ============================ */
const WID = [
  ['message', 'Participatory research and discovery',
    'Understanding what people actually experience, not what a survey assumes they experience. Focus groups, interviews, structured discovery sessions, whatever generates the insight you need.',
    'Best suited to health organisations and research teams that want patient and carer reality built into the work from the start, not added at the end.',
    'Insight you can act on, grounded in what people genuinely told you.'],
  ['pen', 'Co-design and solution development',
    'Building the answer with the people affected, rather than consulting them on one already drafted. The difference shows up later, in whether the solution survives contact with reality.',
    'Suited to organisations developing a service, a programme, or a strategy that has to work for the people it is meant to serve.',
    'Solutions people can actually live with, because they helped shape them.'],
  ['compass', 'Strategic insights',
    'What people say, turned into something an organisation can use. Themes, priorities, and the patient-centred outcomes that genuinely matter, distilled into a form that feeds real decisions.',
    'For leaders who have engagement data but need to know what it means and what to do with it.',
    'Clear direction, drawn from evidence rather than assumption.'],
  ['target', 'Industry support',
    'Patient and carer perspective brought into evidence, HTA submissions, and launch strategy in a way that is credible and compliant. The regulatory landscape, including the Medicines Australia Code of Conduct, is familiar ground, and the work stays inside it.',
    'For pharmaceutical and MedTech partners navigating patient voice before, during, and after launch.',
    'Authentic engagement that strengthens strategy and stands up to scrutiny.'],
  ['users', 'Ongoing engagement',
    'Retained advisory work for organisations that want this thinking in the room continuously, not project by project.',
    'For teams making decisions where patient-centred outcomes matter often enough that occasional consultation is not enough.',
    'Better decisions, consistently, because the right perspective is always at the table.'],
  ['heart', 'Education and capability building',
    'Consumer engagement training for teams, and education, mentoring, and support for advocates and emerging leaders. The skills behind genuine engagement, taught so they outlast any single project.',
    'For organisations building capability in-house, and for advocates and emerging leaders growing into the rooms where decisions get made.',
    'Capability that stays, in people and teams, not just a report.'],
];

/* Slugs let the homepage hero chip strip deep-link to the matching card. */
const EXP_SLUGS = ['participatory', 'co-design', 'strategic-insights', 'industry-support', 'ongoing', 'education'];

function ExpertiseCards() {
  const [flipped, setFlipped] = useState3(null);
  const toggle = (i) => setFlipped((f) => (f === i ? null : i));
  return (
    <section className="exp-cards-section">
      <div className="exp-cards__label">Areas of expertise</div>
      <div className="exp-cards">
        {WID.map(([icon, title, body, who, outcome], i) => (
          <button key={title} id={'exp-' + EXP_SLUGS[i]} type="button"
            className={'exp-card' + (flipped === i ? ' is-flipped' : '')}
            onClick={() => toggle(i)} aria-pressed={flipped === i}
            aria-label={title + '. Activate to read more.'}>
            <span className="exp-card__inner">
              <span className="exp-card__face exp-card__front">
                <span className="exp-card__top">
                  <IconChip variant="wash" size={44}>{<Icon name={icon} size={20} />}</IconChip>
                  <span className="exp-card__num">{String(i + 1).padStart(2, '0')}</span>
                </span>
                <span className="exp-card__title">{title}</span>
                <span className="exp-card__hint">Hover or tap</span>
              </span>
              <span className="exp-card__face exp-card__back">
                <span className="exp-card__body">{body}</span>
                <span className="exp-card__outcome"><Icon name="arrow-right" size={15} />{outcome}</span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ExpertisePage() {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav theme="solid" active="engagement" />
      <SectionNav active="expertise" />
      <main id="main-content">
        <section className="page-hero">
          <Pill variant="wash" className="page-hero__overline">Expertise</Pill>
          <h1 className="page-hero__title">This isn't a service menu</h1>
          <p className="page-hero__lead">Every brief is different, and the method follows the question. What follows
            are areas of expertise and the outcomes they are built for. If your challenge doesn't fit neatly into one of
            these, that's usually a sign to talk.</p>
          <p className="page-hero__lead" style={{ color: 'var(--clay-700)', fontWeight: 500, maxWidth: '40em' }}>
            I bring the method the problem needs, and I know which one that is. The point is never the method. It's what
            changes because of it: a decision, a design, a strategy.</p>
        </section>

        <ExpertiseCards />

        <MethodSpectrum showFoot={false} />

        <Motif id="exp-motif" src="assets/driftwood.jpg" position="50% 56%"
          overline="How we'd start"
          title={<>A conversation about what you <em>need</em></>}
          sub="Most consulting starts with a conversation about the challenge, not the method. You'll get a straight answer on whether I'm the right fit and what approach suits."
          ctaLabel="Let's talk" ctaHref="/contact" />
      </main>
      <Footer />
    </div>
  );
}

/* ============================ Contact ============================ */
function ContactPage() {
  const [sent, setSent] = useState3(false);
  const [status, setStatus] = useState3('idle'); // idle | sending | error
  const [form, setForm] = useState3({ name:'', org:'', email:'', phone:'', need:'', about:'', company:'' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (form.company) { setSent(true); return; } // honeypot
    setStatus('sending');
    try {
      await sendLead({
        subject: 'New enquiry — krispierce.com.au',
        from_name: form.name || 'Website enquiry',
        Name: form.name, Organisation: form.org, Email: form.email, Phone: form.phone,
        'What they need': form.need, Message: form.about,
      });
      setSent(true);
    } catch (err) { setStatus('error'); }
  };
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav theme="solid" active="contact" />
      <main id="main-content">
        <section className="page-hero">
          <Pill variant="wash" className="page-hero__overline">Contact</Pill>
          <h1 className="page-hero__title">Let's <em>talk</em></h1>
        </section>

        <section className="contact-page">
          <div className="contact-page__intro">
            <p className="contact-page__lead">My consulting practice helps organisations level up engagement, build
              capacity, and support the next generation of changemakers. If you're working on any part of that,
              start a conversation.</p>
            <p className="contact-page__lead">You don't need a fully formed brief. Most good engagements start with a
              challenge, not a scope.</p>

            <ul className="contact-include">
              <li className="contact-include__title">When you get in touch, it helps to include</li>
              <li className="row"><span className="bullet">1</span>Your organisation and what it does</li>
              <li className="row"><span className="bullet">2</span>The challenge you're facing, even roughly</li>
              <li className="row"><span className="bullet">3</span>When you'd ideally like to move</li>
            </ul>

            <p className="contact-page__lead" style={{ fontSize: '16px' }}>Once you send this, I'll personally be in
              touch to talk it through. You'll get a straight answer on whether I'm the right fit, either way.</p>

            <div className="contact-page__email">
              <span className="contact-page__email-label">Prefer email?</span>
              <a href="mailto:info@krispierce.com.au">info@krispierce.com.au</a>
            </div>
          </div>

          <div className="contact-card">
            {sent ? (
              <div className="contact-thanks">
                <span className="contact-thanks__tick"><Icon name="check" size={22} /></span>
                <h3>Thank you{form.name ? ', ' + form.name.split(' ')[0] : ''}. Message received.</h3>
                <p>Every message gets a personal read. I'll be in touch personally to talk it through — no obligation.
                  Prefer email? <a href="mailto:info@krispierce.com.au">info@krispierce.com.au</a></p>
              </div>
            ) : (
              <React.Fragment>
                <h2 className="contact-card__heading">Start a conversation</h2>
                <p className="contact-card__note">Tell me what you need and the best number to reach you. I'll be in touch personally.</p>
                <form className="contact__form" onSubmit={submit}>
                  <div className="contact__row">
                    <Field label="Your name" placeholder="Jane Citizen" value={form.name} onChange={set('name')} required />
                    <Field label="Organisation" placeholder="Where you work" value={form.org} onChange={set('org')} />
                  </div>
                  <div className="contact__row">
                    <Field type="email" label="Email" placeholder="you@organisation.org"
                      value={form.email} onChange={set('email')} required />
                    <Field type="tel" label="Phone (so I can call you)" placeholder="04xx xxx xxx"
                      value={form.phone} onChange={set('phone')} required />
                  </div>
                  <Field as="select" label="What do you need?" options={NEED_OPTIONS}
                    value={form.need} onChange={set('need')} required />
                  <Field as="textarea" label="Tell me a little about it"
                    placeholder="A project, a study, or a way of working you'd like to improve."
                    value={form.about} onChange={set('about')} />
                  <input type="text" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true"
                    value={form.company} onChange={set('company')} />
                  {status === 'error' && (
                    <p className="contact__error" role="alert">Sorry — that didn't send. Please try again, or email
                      <a href="mailto:info@krispierce.com.au"> info@krispierce.com.au</a>.</p>
                  )}
                  <Button arrow disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</Button>
                </form>
              </React.Fragment>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* ============================ Portfolio ============================ */
const WORK = [
  ['Health not-for-profit', 'Co-design', 'Consumer voice in a new service model',
    'Members and clinicians shaped a service the community recognised as its own, rather than reacting to a finished draft.',
    'A model adopted as the standard for advisory groups.'],
  ['Pharmaceutical', 'Industry support', 'Patient perspective ahead of an HTA submission',
    'Credible, compliant patient and carer insight brought into the evidence and launch strategy, inside the MA Code.',
    'A stronger submission, with compliance met as a byproduct.'],
  ['Medical research institute', 'Participatory research', 'Structured discovery with patients and carers',
    'Focus groups and interviews that surfaced what people actually experience, not what the protocol assumed.',
    'Insight that changed how studies were designed.'],
  ['Advocacy organisation', 'Engagement framework', 'A repeatable way to engage well',
    'A framework the team could run on every project, without outside help each time.',
    'Engagement embedded, not outsourced.'],
];

function PortfolioPage() {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav theme="solid" active="portfolio" />
      <main id="main-content">
        <section className="page-hero">
          <Pill variant="wash" className="page-hero__overline">Portfolio</Pill>
          <h1 className="page-hero__title">Previous work, and what people <em>say</em></h1>
          <p className="page-hero__lead">A selection of engagements and the outcomes they reached, alongside words from
            the people in the room. Client names are kept private; the work speaks plainly.</p>
        </section>

        <section className="work-section">
          <div className="work-head">
            <span className="overline">Selected work</span>
            <h2>Engagements, anonymised</h2>
            <p>Each one started with a challenge, not a method. What follows is the shape of the work and what it changed.</p>
          </div>
          <div className="work-grid">
            {WORK.map(([sector, type, title, desc, outcome]) => (
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

        <section className="quote-section">
          <div className="quote-inner">
            <div className="work-head">
              <span className="overline">In their words</span>
              <h2>What people say</h2>
            </div>
            <div className="quote-grid">
              {VOICES.map(([quote, role, org], i) => (
                <article className="quote-card" key={i}>
                  <span className="quote-card__mark"><Icon name="quote" size={24} fill /></span>
                  <p className="quote-card__text">{quote}</p>
                  <div className="quote-card__who">
                    <Avatar name={role} size={44} />
                    <div>
                      <div className="quote-card__role">{role}</div>
                      <div className="quote-card__org">{org}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="cta__panel">
            <h2 className="cta__title">Bring me into <em>the work</em></h2>
            <p className="cta__sub">If you're building engagement, growing capability, or backing emerging leaders, I can help you get there.</p>
            <Button variant="inverse" size="lg" arrow href="/contact">Get in touch</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { AboutPage, ExpertisePage, ContactPage, PortfolioPage });
