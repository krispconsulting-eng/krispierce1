/* Kris Pierce Consulting — Insights / Resources library data.
   Realistic PLACEHOLDER pieces written in the brand voice (AU/British
   spelling, no em dashes). Replace titles/deks/read-times with real ones. */

const INSIGHT_TOPICS = ['All', 'Co-design', 'Participatory research', 'Policy & HTA', 'Industry', 'Rare disease', 'Frameworks'];

const INSIGHTS = [
  {
    id: 'co-design-pen', topic: 'Co-design', format: 'Article', read: '6 min read', tone: 'clay', featured: true,
    title: 'When co-design means handing over the pen',
    dek: 'There is a real difference between consulting people on a finished answer and building it with them. It rarely shows up in the room. It shows up later, in whether the solution survives contact with reality.',
  },
  {
    id: 'insight-act', topic: 'Participatory research', format: 'Article', read: '5 min read', tone: 'taupe',
    title: 'Insight you can act on, not insight that sits in a report',
    dek: 'Discovery designed from the outset to feed a real decision, rather than to satisfy a funder or a governance requirement.',
  },
  {
    id: 'hta-voice', topic: 'Policy & HTA', format: 'Article', read: '7 min read', tone: 'ink',
    title: 'Bringing consumer voice into HTA without tokenism',
    dek: 'What genuine consumer input looks like inside the committees that assess value and access, and where it quietly turns into a tick-box.',
  },
  {
    id: 'ma-code-guide', topic: 'Industry', format: 'Guide', read: 'Guide · 12 pages', tone: 'taupe',
    title: 'Patient engagement inside the Medicines Australia Code',
    dek: 'A practical guide to authentic, compliant engagement before, during and after launch. Done properly, compliance tends to follow as a byproduct.',
  },
  {
    id: 'rare-heard', topic: 'Rare disease', format: 'Article', read: '6 min read', tone: 'clay',
    title: 'A small community trying to be heard',
    dek: 'Notes from SCN2A Australia on building evidence and being taken seriously when your patient population is measured in the dozens.',
  },
  {
    id: 'framework-reuse', topic: 'Frameworks', format: 'Guide', read: 'Guide · 9 pages', tone: 'ink',
    title: 'An engagement framework your organisation can actually reuse',
    dek: 'Moving from one-off consultation to a repeatable way of engaging well, on every project, not just this one.',
  },
  {
    id: 'survives-reality', topic: 'Co-design', format: 'Talk', read: 'Talk · 28 min', tone: 'taupe',
    title: 'Engagement that survives contact with reality',
    dek: 'A talk on why participation has to change the outcome, not just the optics, and how to design it so it does.',
  },
  {
    id: 'survey-assumes', topic: 'Participatory research', format: 'Article', read: '4 min read', tone: 'taupe',
    title: 'What people tell you vs. what a survey assumes',
    dek: 'The case for structured discovery over instruments that decide the answer before you have asked the question.',
  },
  {
    id: 'room-decisions', topic: 'Policy & HTA', format: 'Talk', read: 'Talk · 22 min', tone: 'clay',
    title: 'Consumers in the room where decisions get made',
    dek: 'From advisory tokenism to genuine influence, across HTA, MSAC and the emerging shape of genomics policy.',
  },
];

Object.assign(window, { INSIGHTS, INSIGHT_TOPICS });
