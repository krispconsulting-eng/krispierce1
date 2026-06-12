/* Kris Pierce Consulting — standalone interior pages (About / Expertise / Contact).
   Content from the approved drafts. Voice: AU/British spelling, outcome-first,
   no em dashes. Uses DS components (Pill, Button, IconChip, Field) + Icon. */
const { useState: useState3 } = React;

/* ============================ About ============================ */
function AboutPage() {
  return (
    <div className="site">
      <Nav theme="solid" active="about" />
      <main>
        <section className="page-hero">
          <Pill variant="wash" dot className="page-hero__overline">About Kris</Pill>
          <h1 className="page-hero__title">Putting the person at the centre, and making the involvement <em>count</em></h1>
          <p className="page-hero__lead">Kris Pierce is a strategic advisor in consumer engagement, rare disease, and
            health policy, working with health organisations, industry partners, and not-for-profits to generate
            insights and reach patient-centred outcomes.</p>
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
            <p className="page-prose">Most engagements start in the same place: an organisation knows it needs to
              involve patients, carers, or communities, and wants that involvement to change the outcome rather than
              tick a box. Working out how to make that happen, then doing it alongside them, is the job.</p>
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
          overline="Let's work together"
          title={<>Let's work <em>together</em></>}
          sub="If you're trying to involve patients, carers, or communities in a way that genuinely changes what you do, get in touch. Tell us your organisation, the challenge, and roughly when you need to move."
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
];

function ExpertisePage() {
  return (
    <div className="site">
      <Nav theme="solid" active="offerings" />
      <main>
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

        <section className="page-block">
          <div className="page-block__label">Areas of expertise</div>
          <div className="page-block__body">
            <div className="wid-list">
              {WID.map(([icon, title, body, who, outcome], i) => (
                <article className="wid-item" key={title}>
                  <div className="wid-item__aside">
                    <IconChip variant="wash" size={48}>{<Icon name={icon} size={20} />}</IconChip>
                    <span className="wid-item__num">{String(i+1).padStart(2,'0')}</span>
                  </div>
                  <div className="wid-item__main">
                    <h2 className="wid-item__title">{title}</h2>
                    <p className="wid-item__body">{body}</p>
                    <p className="wid-item__who">{who}</p>
                    <p className="wid-item__outcome"><Icon name="arrow-right" size={17} />{outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <MethodSpectrum showFoot={false} />

        <Motif id="exp-motif" src="assets/driftwood.jpg" position="50% 56%"
          overline="How we'd start"
          title={<>A conversation about the <em>challenge</em>, not the method</>}
          sub="Most engagements begin with a conversation about the challenge, not the method. You'll get a straight answer on whether this is the right fit and what approach suits."
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
      <Nav theme="solid" active="contact" />
      <main>
        <section className="page-hero">
          <Pill variant="wash" className="page-hero__overline">Contact</Pill>
          <h1 className="page-hero__title">Let's <em>talk</em></h1>
        </section>

        <section className="contact-page">
          <div className="contact-page__intro">
            <p className="contact-page__lead">Health organisations, industry partners, and not-for-profits come here to
              generate insights and reach patient-centred outcomes. If you're working out how to involve patients,
              carers, or communities in a way that genuinely changes the outcome, start a conversation.</p>
            <p className="contact-page__lead">You don't need a fully formed brief. Most good engagements start with a
              challenge, not a scope.</p>

            <ul className="contact-include">
              <li className="contact-include__title">When you get in touch, it helps to include</li>
              <li className="row"><span className="bullet">1</span>Your organisation and what it does</li>
              <li className="row"><span className="bullet">2</span>The challenge you're facing, even roughly</li>
              <li className="row"><span className="bullet">3</span>When you'd ideally like to move</li>
            </ul>

            <p className="contact-page__lead" style={{ fontSize: '16px' }}>Once you send this, I'll personally call you
              within a week. You'll get a straight answer on whether this is the right fit, what approach might suit, and
              what working together would look like. If it's not a fit, you'll be pointed somewhere better.</p>

            <div className="contact-page__email">
              <span className="contact-page__email-label">Prefer email?</span>
              <a href="mailto:hello@krispierce.com.au">hello@krispierce.com.au</a>
            </div>
          </div>

          <div className="contact-card">
            {sent ? (
              <div className="contact-thanks">
                <span className="contact-thanks__tick"><Icon name="check" size={22} /></span>
                <h3>Thank you{form.name ? ', ' + form.name.split(' ')[0] : ''}. Message received.</h3>
                <p>Every message gets a personal read. I'll call you within a week to talk it through — no obligation.
                  Prefer email? <a href="mailto:hello@krispierce.com.au">hello@krispierce.com.au</a></p>
              </div>
            ) : (
              <React.Fragment>
                <h2 className="contact-card__heading">Start a conversation</h2>
                <p className="contact-card__note">Tell me what you need and the best number to reach you — I'll call within a week.</p>
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
                      <a href="mailto:hello@krispierce.com.au"> hello@krispierce.com.au</a>.</p>
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
      <Nav theme="solid" active="portfolio" />
      <main>
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
            <h2 className="cta__title">Your project could be <em>next</em></h2>
            <p className="cta__sub">If you're shaping an engagement and want it to hold up, start a conversation.</p>
            <Button variant="inverse" size="lg" arrow href="/contact">Get in touch</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { AboutPage, ExpertisePage, ContactPage, PortfolioPage });
