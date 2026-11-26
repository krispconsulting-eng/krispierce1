/* Caregiver Wellbeing: single top-level Wellbeing page (REVIEW VERSION).

   Governing files: DECISIONS.md and BRAND-BRIEF.md (Caregiver Wellbeing,
   10 October 2026) in the project folder. Copy comes from Kris's launch
   content and architecture brief (11 October 2026), with the fixes in the
   11 October review (no duplicate primary button in the registration
   section).

   Site chrome (Nav, Footer) stays in the Kris Pierce Consulting brand. The
   page body uses the Caregiver Wellbeing brand, scoped under .cw in
   wellbeing.css. How the two brands sit together is an open decision.

   The registration form is a PLACEHOLDER. It validates and shows every
   state, but sends nothing: no destination is wired. See submitRegistration.

   Before go-live: remove every element with data-review, the noindex meta in
   wellbeing.html, and wire the approved destination. */

const CW_DOMAINS = [
  ['Body & energy', '#275874'],
  ['Feelings & emotions', '#5F99B4'],
  ['People & connection', '#C8D8D4'],
  ['Purpose & everyday life', '#D8BA8E'],
  ['Money & practical needs', '#F7E5CC'],
  ['Home & surroundings', '#B1C0A2'],
  ['Learning & interests', '#97B6AB'],
  ['Meaning & what matters', '#4D7765'],
];

const CW_MSG = {
  missing: 'Enter your email address.',
  invalid: 'Check your email address and try again.',
  sending: 'Sending your registration',
  accepted: 'Thank you. Your interest in Caregiver Wellbeing has been registered.',
  failed: 'Your registration could not be sent. Please try again.',
  unknown: 'We could not confirm your registration. Please try again.',
};

const CW_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Placeholder. Sends nothing. When the destination is approved, replace the
   body with the real request and resolve to 'accepted' only once the
   destination confirms receipt; 'failed' for a confirmed failure; 'unknown'
   for a timeout or unreadable response. Pass attemptId so the destination
   can ignore duplicate retries. */
function submitRegistration(/* { email, attemptId } */) {
  return new Promise((resolve) => setTimeout(() => resolve('review'), 700));
}

function ReviewNote({ children }) {
  return (
    <aside className="cw-review" data-review="true" aria-label="Review note">
      <span className="cw-review__label">Review note</span>
      <div>{children}</div>
    </aside>
  );
}

function RegistrationForm() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState('idle');
  const inputRef = React.useRef(null);
  const resultRef = React.useRef(null);
  const attemptRef = React.useRef(null);

  const sending = status === 'sending';

  const onSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    const value = email.trim();
    const err = !value ? 'missing' : (!CW_EMAIL_RE.test(value) ? 'invalid' : null);
    setError(err);
    if (err) { inputRef.current && inputRef.current.focus(); return; }
    /* Same email, same attempt id, so a retry is not a second registration. */
    if (!attemptRef.current || attemptRef.current.email !== value) {
      attemptRef.current = { email: value, id: String(Date.now()) + Math.random().toString(36).slice(2, 8) };
    }
    setStatus('sending');
    submitRegistration({ email: value, attemptId: attemptRef.current.id })
      .then((r) => setStatus(r))
      .catch(() => setStatus('unknown'));
  };

  React.useEffect(() => {
    if (status === 'accepted' && resultRef.current) resultRef.current.focus();
  }, [status]);

  if (status === 'accepted') {
    return (
      <div className="cw-form cw-form--done" role="status" tabIndex={-1} ref={resultRef}>
        <p className="cw-form__done">{CW_MSG.accepted}</p>
        <ReviewNote>
          <p>Shown only after the approved destination has accepted the registration. If an email
            confirmation step is chosen, this message must change to explain that step.</p>
          <button type="button" className="cw-btn-secondary" onClick={() => setStatus('idle')}>Back to the form</button>
        </ReviewNote>
      </div>
    );
  }

  const describedBy = error ? 'cw-email-error' : undefined;

  return (
    <form className="cw-form" noValidate onSubmit={onSubmit} aria-busy={sending ? 'true' : 'false'}>
      <ReviewNote>
        <p>Purpose and consent wording go here once Kris decides them. This review version sends
          nothing.</p>
      </ReviewNote>

      <div className="cw-field">
        <label htmlFor="cw-email">Email address</label>
        <input
          id="cw-email" ref={inputRef} type="email" name="email" autoComplete="email" inputMode="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? 'true' : 'false'} aria-describedby={describedBy} />
        {error && <p id="cw-email-error" className="cw-error">{CW_MSG[error]}</p>}
      </div>

      <p className="cw-meta"><a href="/privacy">Privacy information</a></p>

      <button type="submit" className="cw-btn" disabled={sending} aria-disabled={sending ? 'true' : 'false'}>
        {sending ? CW_MSG.sending : 'Register your interest'}
      </button>

      <div className="cw-live" role="status" aria-live="polite">
        {sending && <p className="cw-meta">{CW_MSG.sending}</p>}
        {(status === 'failed' || status === 'unknown') && (
          <div className="cw-result cw-result--problem">
            <p>{CW_MSG[status]}</p>
            <p>You can also contact <a href="mailto:info@krispierce.com.au">info@krispierce.com.au</a>.</p>
          </div>
        )}
      </div>

      {status === 'review' && (
        <ReviewNote>
          <p>Review version: nothing was sent. Preview the result each visitor could see:</p>
          <div className="cw-review__actions">
            <button type="button" className="cw-btn-secondary" onClick={() => setStatus('accepted')}>Accepted</button>
            <button type="button" className="cw-btn-secondary" onClick={() => setStatus('failed')}>Failed</button>
            <button type="button" className="cw-btn-secondary" onClick={() => setStatus('unknown')}>Result unknown</button>
          </div>
        </ReviewNote>
      )}
    </form>
  );
}

function WellbeingPage() {
  React.useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href="#register-interest"]');
      if (!a) return;
      const target = document.getElementById('register-interest');
      if (!target) return;
      e.preventDefault();
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', '#register-interest');
      const field = document.getElementById('cw-email');
      if (field) setTimeout(() => field.focus({ preventScroll: true }), reduce ? 0 : 450);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="site cw-site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav active="wellbeing" variant="light" />
      <main id="main-content" className="cw">

        <section className="cw-intro" aria-labelledby="cw-title">
          <div className="cw-wrap">
            <ReviewNote>
              <p>Review version, not published. Logo, page title and how Caregiver Wellbeing sits beside
                Kris Pierce Consulting are decisions for Kris. No photographs until each is approved with
                its source, licence and consent.</p>
            </ReviewNote>
            <h1 id="cw-title" className="cw-h1">Caregiver Wellbeing</h1>
            <p className="cw-tagline">Space for YOU</p>
            <p className="cw-lead">Caring for someone can leave little room to consider your own wellbeing.
              Caregiver Wellbeing offers a place to begin.</p>
            <p className="cw-body">For anyone providing unpaid care, whether you care for a child, young person,
              adult or ageing parent.</p>
            <a className="cw-btn" href="#register-interest">Register your interest</a>
          </div>
        </section>

        <section id="caregiving" className="cw-section cw-section--sand" aria-labelledby="cw-caregiving">
          <div className="cw-wrap cw-wrap--narrow">
            <h2 id="cw-caregiving" className="cw-h2">Your wellbeing belongs in the picture</h2>
            <p className="cw-body">Caring can shape your time, your routines and the choices available to you.
              Your own needs matter within that reality.</p>
            <p className="cw-body">Balance can look different from one week to the next. It can begin with
              noticing what needs attention and considering what is manageable for you.</p>
            <p className="cw-body">Caregiver Wellbeing brings attention to your own life alongside the care you
              provide.</p>
          </div>
        </section>

        <section id="guided-journey" className="cw-section" aria-labelledby="cw-journey">
          <div className="cw-wrap">
            <div className="cw-card">
              <h2 id="cw-journey" className="cw-h2">An eight-week Guided Journey</h2>
              <p className="cw-body">The Guided Journey will use One small thing: one action each week, taking
                less than five minutes.</p>
              <p className="cw-body">It is a way to make space to consider your wellbeing within everyday life.</p>
            </div>
          </div>
        </section>

        <section id="wheel" className="cw-section cw-section--white" aria-labelledby="cw-wheel">
          <div className="cw-wrap">
            <h2 id="cw-wheel" className="cw-h2">The Wheel</h2>
            <p className="cw-status">Coming soon</p>
            <p className="cw-body">The Wheel will offer a way to reflect on eight areas of wellbeing:</p>
            <ul className="cw-domains">
              {CW_DOMAINS.map(([name, colour]) => (
                <li key={name}><span className="cw-domains__mark" style={{ background: colour }} aria-hidden="true" />{name}</li>
              ))}
            </ul>
            <p className="cw-body">All eight areas have equal weight. The Wheel is for reflection, with no scores
              or ranking.</p>
            <ReviewNote>
              <p>Text list only. A Wheel visual can be added once Kris approves the asset.</p>
            </ReviewNote>
          </div>
        </section>

        <section id="register-interest" className="cw-section cw-section--mist" aria-labelledby="cw-register">
          <div className="cw-wrap cw-wrap--narrow">
            <div className="cw-card">
              <h2 id="cw-register" className="cw-h2">Register your interest</h2>
              <p className="cw-body">Let us know you would like to hear more about Caregiver Wellbeing.</p>
              <RegistrationForm />
            </div>
          </div>
        </section>

        <section id="sponsorship" className="cw-section cw-section--sand" aria-labelledby="cw-sponsorship">
          <div className="cw-wrap cw-wrap--narrow">
            <h2 id="cw-sponsorship" className="cw-h2">Sponsorship</h2>
            <p className="cw-status cw-status--ocean">Coming soon</p>
          </div>
        </section>

        <section id="contact" className="cw-section" aria-labelledby="cw-contact">
          <div className="cw-wrap cw-wrap--narrow">
            <h2 id="cw-contact" className="cw-h2">Contact</h2>
            <p className="cw-body">Caregiver Wellbeing is operated by Kris Pierce Consulting.</p>
            <p className="cw-body"><a href="mailto:info@krispierce.com.au">info@krispierce.com.au</a></p>
            <p className="cw-meta">This page provides general wellbeing information, not a diagnosis. If you are
              worried about your health or wellbeing, talk to your GP.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { WellbeingPage });
