/* Kris Pierce Consulting — website sections (part 2): Offerings, Voices, CTA, Contact, Footer */
const { useState: useState2 } = React;

const OFFERINGS = [
  ['message', 'Participatory research and discovery', 'Understanding what people actually experience, not what a survey assumes they experience. Focus groups, interviews, structured discovery, whatever generates the insight you need.', 'Insight you can act on, grounded in what people genuinely told you.'],
  ['pen', 'Co-design and solution development', 'Building the answer with the people affected, rather than consulting them on one already drafted. The difference shows up in whether the solution survives contact with reality.', 'Solutions people can actually live with, because they helped shape them.'],
  ['compass', 'Strategic insights', 'What people say, turned into something an organisation can use. Themes, priorities, and the patient-centred outcomes that genuinely matter, distilled into a form that feeds real decisions.', 'Clear direction, drawn from evidence rather than assumption.'],
  ['target', 'Industry support', 'Patient and carer perspective brought into evidence, HTA submissions, and launch strategy, credibly and inside the Medicines Australia Code.', 'Authentic engagement that strengthens strategy and stands up to scrutiny.'],
  ['users', 'Ongoing advisory', 'Retained work for organisations that want this thinking in the room continuously, not project by project.', 'Better decisions, consistently, because the right perspective is always at the table.'],
  ['heart', 'Education and capability building', 'Consumer engagement training for teams, and education, mentoring, and support for advocates and emerging leaders. The skills behind genuine engagement, taught so they stay in the room after I leave it.', 'People and teams who can do this themselves, not buy it in each time.'],
];

function Offerings() {
  return (
    <section className="v3-services" id="offerings">
      <div className="v3-wrap v3-opener">
        <span className="v3-overline">Where I focus</span>
        <h2 className="v3-opener__h2">Six areas of expertise, drawn from what I've learnt through life and <b>work</b></h2>
      </div>
      <div className="v3-wrap">
        <div className="v3-index">
          {OFFERINGS.map(([icon, title, body, fit], i) => (
            <a className="v3-row-item" href="/engagement/expertise" key={title}>
              <div className="v3-row-item__num">{String(i+1).padStart(2,'0')}</div>
              <div>
                <h3 className="v3-row-item__title">{title}</h3>
                <p className="v3-row-item__body">{body}</p>
              </div>
              <div className="v3-row-item__go">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const VOICES = [
  ['Kris brought a unique combination of lived experience and professional expertise, alongside a deep understanding of the rare epilepsy community, which helped us shape an engaging, inclusive, and meaningful agenda.', 'Donna Walsh, CEO', 'International Bureau for Epilepsy, Rare Epilepsy Leaders Global Convening'],
  ['Kris is a highly skilled professional who has delivered significant value to the Epilepsy Foundation. Respectfully engaging with multiple stakeholders, Kris has greatly improved the Foundation\'s ability to support people living with rare and complex epilepsies, as well as people accessing our services in general.', 'Graeme Shears, CEO', 'Epilepsy Foundation'],
];

function Voices() {
  const [i, setI] = useState2(0);
  const go = (d) => setI((p) => (p + d + VOICES.length) % VOICES.length);
  const [quote, role, org] = VOICES[i];
  return (
    <section className="voices" id="voices">
      <div className="voices__left">
        <h2 className="voices__title">In their words</h2>
        <p className="voices__sub">Teams across health have found a way to engage that they can stand behind.</p>
        <div className="voices__nav">
          <button aria-label="Previous" onClick={()=>go(-1)}><Icon name="chevron-left" size={18} /></button>
          <button aria-label="Next" className="is-active" onClick={()=>go(1)}><Icon name="chevron-right" size={18} /></button>
          <span className="voices__count">{String(i+1).padStart(2,'0')} / {String(VOICES.length).padStart(2,'0')}</span>
        </div>
      </div>
      <div className="voices__right">
        <span className="voices__mark"><Icon name="quote" size={22} fill style={{color:'var(--teal-600)'}} /></span>
        <blockquote className="voices__quote" style={{fontStyle:'italic'}}>{quote}</blockquote>
        <div className="voices__who">
          <Avatar name={role} size={46} />
          <div><div className="voices__role">{role}</div><div className="voices__org">{org}</div></div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="v3-cta-section">
      <div className="v3-wrap">
        <div className="v3-cta">
          <svg className="v3-cta__dots" viewBox="0 0 340 300" aria-hidden="true"><g>{Array.from({length: 8}, (_, y) => Array.from({length: 9}, (_, x) => (<circle key={y*9+x} cx={40+x*34} cy={40+y*32} r="3.4" opacity={Math.max(0.06, 0.5-y*0.045).toFixed(2)} fill="rgba(127,168,194,.4)" />)))}</g></svg>
          <span className="v3-overline v3-cta__overline">Start a conversation</span>
          <h2 className="v3-cta__h2">If you're building engagement, growing capability, or investing in the next generation, <b>I can help.</b></h2>
          <p className="v3-cta__lead">If you are bringing a medicine, a study or a programme to the people it affects, let's talk about doing it with them.</p>
          <a href="/contact" className="v3-btn v3-btn--blue">Start a conversation <span>→</span></a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState2(false);
  const [status, setStatus] = useState2('idle'); // idle | sending | error
  const [form, setForm] = useState2({ name:'', org:'', email:'', phone:'', need:'', about:'', company:'' });
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
    <section className="contact" id="contact">
      <div className="contact__intro">
        <span className="overline">Start a conversation</span>
        <h2 className="contact__title">Tell me what you're working on</h2>
        <p className="contact__body">A sentence or two is plenty to begin. Tell me what you need and the best number to
          reach you, and I'll personally be in touch to talk it through: a short, no-obligation conversation.</p>
        <ol className="contact__steps">
          <li><span>1</span>You tell me what you're after</li>
          <li><span>2</span>I read it myself, every message</li>
          <li><span>3</span>I'll call you personally to talk it through</li>
        </ol>
      </div>
      <div className="contact__card">
        {sent ? (
          <div className="contact__thanks">
            <span className="contact__check"><Icon name="check" size={22} /></span>
            <h3>Thank you{form.name ? ', ' + form.name.split(' ')[0] : ''}. Message received.</h3>
            <p>I've got your details and I'll personally be in touch. Prefer email in the meantime?
              <a href="mailto:info@krispierce.com.au"> info@krispierce.com.au</a></p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={submit}>
            <div className="contact__row">
              <Field label="Your name" placeholder="Jane Citizen" value={form.name} onChange={set('name')} required />
              <Field label="Organisation" placeholder="Where you work" value={form.org} onChange={set('org')} />
            </div>
            <div className="contact__row">
              <Field type="email" label="Email" placeholder="you@organisation.org" value={form.email} onChange={set('email')} required />
              <Field type="tel" label="Phone (so I can call you)" placeholder="04xx xxx xxx" value={form.phone} onChange={set('phone')} required />
            </div>
            <Field as="select" label="What do you need?" options={NEED_OPTIONS} value={form.need} onChange={set('need')} required />
            <Field as="textarea" label="Tell me a little about it" placeholder="A project, a study, or a way of working you'd like to improve." value={form.about} onChange={set('about')} />
            <input type="text" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true"
              value={form.company} onChange={set('company')} />
            {status === 'error' && (
              <p className="contact__error" role="alert">Sorry, that didn't send. Please try again, or email
                <a href="mailto:info@krispierce.com.au"> info@krispierce.com.au</a>.</p>
            )}
            <Button arrow disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="v3-foot">
      <div className="v3-foot__inner">
        <a href="/" className="v3-foot__mark" aria-label="Kris Pierce Consulting">
          <img src="/assets/logo-wordmark.png" alt="Kris Pierce Consulting" />
        </a>
        <div className="v3-foot__info">krispierce.com.au · Sunshine Coast, Queensland · © {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}

/* VOICES (testimonial data) is reused by the Portfolio page, so publish it too. */
Object.assign(window, { Offerings, Voices, CTA, Contact, Footer, VOICES });
