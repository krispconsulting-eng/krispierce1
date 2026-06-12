/* Kris Pierce Consulting — Methods page (fit-for-purpose engagement spectrum).
   An explorable rail of methods ordered along one axis: light-touch insight
   -> shared power, scale and stakes. Each entry is the fit-for-purpose case.
   Voice: AU/British spelling, outcome-first, no em dashes. */
const { useState: useState4 } = React;

const METHODS = [
  {
    icon: 'message',
    name: 'Focus group',
    meta: 'Half a day · insight',
    eyebrow: 'Listening, done well',
    title: 'Focus groups',
    lead: 'A carefully facilitated conversation that surfaces what people actually think, not what they think you want to hear.',
    body: 'The lightest-touch method on the spectrum, and the most misused. A good focus group isn’t a room of people answering survey questions out loud. It’s a structured discussion that draws out the reasoning behind a view, tests language, and shows you where consensus is real and where it’s polite. The skill is in the facilitation and in knowing the difference between a focus group for research and a discussion group for engagement.',
    use: [
      'You need to test messaging, materials or a value proposition before you commit',
      'You want the depth behind survey data',
      'Time and budget are tight, but the stakes still warrant real input',
    ],
    stats: {
      Format: '1–2 sessions, in person or online',
      Timeframe: '2 to 4 weeks end to end',
      Output: 'Themed findings, verbatim evidence',
    },
    share: 1,
  },
  {
    icon: 'users',
    name: 'Workshop',
    meta: '1 day · alignment',
    eyebrow: 'One shared direction',
    title: 'Fit-for-purpose workshops',
    lead: 'A structured session that turns a mixed room of clinicians, community and sponsors into one shared direction.',
    body: 'Workshops earn their place when a project has stalled on disagreement, or when several groups each hold part of the picture. The design is everything: who’s in the room, the sequence of the day, how power is balanced so the loudest voice doesn’t set the agenda. A workshop that’s just a presentation with sticky notes wastes everyone’s time. A well-built one ends with decisions people will actually stand behind.',
    use: [
      'Clinicians, community and sponsors need to align before work can move',
      'You’re setting priorities, a framework, or a plan together',
      'Lived experience has to shape the direction, not just react to it',
    ],
    stats: {
      Format: 'Half to full day, facilitated',
      Timeframe: '3 to 6 weeks with design and follow-up',
      Output: 'Agreed direction, documented decisions',
    },
    share: 2,
  },
  {
    icon: 'pen',
    name: 'Co-design',
    meta: 'Weeks to months · shared',
    eyebrow: 'Hand over the pen',
    title: 'Co-design',
    lead: 'Build the solution with the people it’s for, in genuine partnership, rather than for them.',
    body: 'Co-design isn’t a single session, it’s a process of sustained partnership across the design arc. People with lived experience hold real decision-making power, from defining the problem through to shaping the final approach. It’s the right call when the outcome has to belong to the community to work, when failure modes come from context rather than content, and when you need solutions people will own and sustain. It can be short and focused or run over months. It cannot be tokenistic, and that’s the part most organisations get wrong.',
    use: [
      'The outcome has to belong to the community to succeed',
      'You’re building a service, tool or model, not just gathering views',
      'Equity matters: sharing power is part of the point',
    ],
    stats: {
      Format: 'Iterative sessions, short sprint or long arc',
      Timeframe: '6 weeks to several months',
      Output: 'Co-owned solution, ready to implement',
    },
    share: 4,
  },
  {
    icon: 'compass',
    name: 'Roundtable',
    meta: '1–2 days · consensus',
    eyebrow: 'The right people, one table',
    title: 'Roundtables',
    lead: 'Bring decision-makers and lived experience to one table to move a contested issue forward.',
    body: 'A roundtable works when an issue is stuck at sector level and needs the right people in one room to break it open. It’s not a conference and it’s not a talkfest. It’s a curated, chaired discussion built around a clear question, with the standing and the follow-through to produce something: a position, a set of recommendations, a commitment. The value is in who’s at the table, the framing of the problem, and what happens in the weeks after everyone leaves.',
    use: [
      'A sector-level issue is stuck and needs senior people to unstick it',
      'You need consensus, a position statement, or a shared commitment',
      'Industry, government and community all have to be in the room',
    ],
    stats: {
      Format: 'Curated, chaired, 1 to 2 days',
      Timeframe: '2 to 4 months including follow-through',
      Output: 'Recommendations, position, next steps',
    },
    share: 3,
  },
  {
    icon: 'grid',
    name: 'International convening',
    meta: 'Multi-day · global',
    eyebrow: 'Across borders and systems',
    title: 'International convenings',
    lead: 'Design and facilitate multi-day gatherings that align leaders across countries, systems and languages.',
    body: 'The most complex end of the spectrum. A convening brings together leaders from different health systems, cultures and regulatory contexts to set direction on something none of them can solve alone. It demands an environmental scan before anyone arrives, a participant selection framework, a programme that holds two or three days of momentum, and facilitation that works across very different expectations of how decisions get made. Done well, it produces alignment that outlasts the event. I’ve designed and facilitated this work for international bodies including the IBE.',
    use: [
      'Leaders across multiple countries need to set shared direction',
      'The challenge crosses systems no single group can solve alone',
      'You need a programme that holds momentum across days, not hours',
    ],
    stats: {
      Format: 'Multi-day, multi-region, facilitated',
      Timeframe: '3 to 6 months of design and delivery',
      Output: 'Strategic alignment, shared pathway',
    },
    share: 5,
  },
];

function SpectrumStat({ k, v }) {
  return (
    <div className="spectrum__stat">
      <span className="spectrum__stat-k">{k}</span>
      <span className="spectrum__stat-v">{v}</span>
    </div>
  );
}

function ShareMeter({ level }) {
  return (
    <div className="spectrum__share">
      <div className="spectrum__share-track">
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={'spectrum__share-dot' + (n <= level ? ' on' : '')} />
        ))}
      </div>
    </div>
  );
}

function MethodSpectrum() {
  const [active, setActive] = useState4(2); // default to co-design, the centre of gravity
  const m = METHODS[active];
  return (
    <section className="spectrum" id="methods">
      <div className="spectrum__head">
        <span className="overline">Fit-for-purpose engagement</span>
        <h1 className="spectrum__title">There's no single way to bring people into the work</h1>
        <p className="spectrum__sub">The method should follow the question, not the other way around. Here's the
          range I work across, and how I decide what fits. Click any method to see where it earns its place.</p>
      </div>

      <div className="spectrum__rail-wrap">
        <div className="spectrum__axis">
          <span>Lighter touch</span>
          <span></span>
          <span>Shared power · scale</span>
        </div>
        <div className="spectrum__tabs" role="tablist" aria-label="Engagement methods">
          {METHODS.map((item, i) => (
            <button key={item.name} type="button" role="tab" aria-selected={i === active}
              className={'spectrum__tab' + (i === active ? ' is-active' : '')} onClick={() => setActive(i)}>
              <IconChip variant="outline" size={40}>{<Icon name={item.icon} size={18} />}</IconChip>
              <span className="spectrum__tab-text">
                <span className="spectrum__tab-name">{item.name}</span>
                <span className="spectrum__tab-meta">{item.meta}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="spectrum__panel-wrap">
        <div className="spectrum__panel" key={active}>
          <div className="spectrum__panel-main">
            <span className="spectrum__panel-eyebrow"><Icon name={m.icon} size={14} />{m.eyebrow}</span>
            <h2 className="spectrum__panel-title">{m.title}</h2>
            <p className="spectrum__panel-lead">{m.lead}</p>
            <p className="spectrum__panel-body">{m.body}</p>
            <div className="spectrum__use">
              <p className="spectrum__use-label">Reach for this when</p>
              <ul className="spectrum__use-list">
                {m.use.map((u, i) => (
                  <li key={i}><Icon name="check" size={17} /><span>{u}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="spectrum__aside">
            <p className="spectrum__aside-title">At a glance</p>
            {Object.entries(m.stats).map(([k, v]) => <SpectrumStat key={k} k={k} v={v} />)}
            <div className="spectrum__stat">
              <span className="spectrum__stat-k">Power shared with community</span>
              <ShareMeter level={m.share} />
            </div>
          </aside>
        </div>
      </div>

      <div className="spectrum__foot">
        <p>Most projects need more than one of these. The craft is sequencing them, and knowing when a lighter
          touch will do and when nothing short of co-design will hold. That's the conversation I'd start with.</p>
        <Button variant="primary" size="lg" arrow href="/contact">Talk through what fits</Button>
      </div>
    </section>
  );
}

/* ============================ Methods page shell ============================ */
function MethodsPage() {
  return (
    <div className="site">
      <Nav theme="solid" active="methods" />
      <main>
        <MethodSpectrum />
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { MethodSpectrum, MethodsPage });
