/* Kris Pierce Consulting — Privacy statement page.
   Plain-language privacy statement covering the contact form, newsletter
   signup, and resource downloads (all delivered via Web3Forms).
   Voice: AU/British spelling, first person, no em dashes.
   Reuses the .page-block chrome from the About page; no new visual language. */

function PrivacyPage() {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav active="privacy" variant="light" />
      <main id="main-content">
        <section className="v3-page-header">
          <div className="v3-page-header__inner">
            <span className="v3-overline v3-page-header__overline v3-header-reveal">Privacy</span>
            <h1 className="v3-page-header__title v3-header-reveal">Privacy <b>statement</b></h1>
            <p className="v3-page-header__lead v3-header-reveal">The short version: I collect only what you type into the
              forms on this site, I use it to respond to you and to send what you asked for, and I never sell it.
              The longer version follows. Last updated: July 2026.</p>
          </div>
        </section>

        <section className="page-block">
          <div className="page-block__label">Who I am</div>
          <div className="page-block__body">
            <p className="page-prose">This site belongs to Kris Pierce Consulting (krispierce.com.au), my consulting
              practice based on the Sunshine Coast, Queensland. I help organisations across health, research, and
              advocacy with consumer and community engagement. When you get in touch through this site, your details
              come to me, and this page explains what happens to them.</p>
            <p className="page-prose">I handle personal information in line with the <strong>Privacy Act 1988
              (Cth)</strong> and the Australian Privacy Principles.</p>
          </div>
        </section>

        <hr className="page-divider" />

        <section className="page-block">
          <div className="page-block__label">What I collect</div>
          <div className="page-block__body">
            <p className="page-prose">The contact form asks for your name, organisation, email, phone number, and a
              message about what you need. The newsletter signup and resource downloads ask for your name and email.
              That is the lot: no accounts, no profiling, and nothing collected that you have not typed in yourself.</p>
          </div>
        </section>

        <hr className="page-divider" />

        <section className="page-block">
          <div className="page-block__label">How submissions are delivered</div>
          <div className="page-block__body">
            <p className="page-prose">Form submissions are processed by <strong>Web3Forms</strong>, a third-party form
              service, which delivers them to our inbox. Web3Forms acts as the courier for your message; its handling
              of submissions in transit is governed by its own privacy policy.</p>
          </div>
        </section>

        <hr className="page-divider" />

        <section className="page-block">
          <div className="page-block__label">How I use your details</div>
          <div className="page-block__body">
            <p className="page-prose">Two things only: to respond to your enquiry, and to send the updates or resources
              you asked for. I do not sell your details, and I do not share them with anyone beyond the service
              providers needed to run this site and deliver your message.</p>
          </div>
        </section>

        <hr className="page-divider" />

        <section className="page-block">
          <div className="page-block__label">Your choices</div>
          <div className="page-block__body">
            <p className="page-prose">You can unsubscribe from any email at any time by replying and saying so. You can
              also ask to see the personal information I hold about you, have it corrected, or have it deleted. Email
              <a href="mailto:info@krispierce.com.au"> info@krispierce.com.au</a> and I will sort it, no forms and no
              fuss.</p>
          </div>
        </section>

        <hr className="page-divider" />

        <section className="page-block">
          <div className="page-block__label">Complaints</div>
          <div className="page-block__body">
            <p className="page-prose">If you think I have mishandled your information, tell me first at
              <a href="mailto:info@krispierce.com.au"> info@krispierce.com.au</a> and I will do my best to put it right.
              If you are not satisfied with my response, you can complain to the Office of the Australian Information
              Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener">oaic.gov.au</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { PrivacyPage });
