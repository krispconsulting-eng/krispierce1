/* Kris Pierce Consulting: service and program page content.
   Rendered by service-pages.jsx; the entry HTML for each page sets
   <body data-page="service|program" data-slug="..."> and pages-app.jsx passes the slug.
   Voice: AU/British spelling, peer to peer, no em dashes.

   SERVICE_PAGES live at /consulting/<slug>.
   PROGRAM_PAGES live at /advisory/<slug>.

   Fields shared by both: slug, eyebrow, titleLead + titleAccent (the accent word
   renders in teal weight 600), lede, metaDescription.
   Service pages add: involves[], applies[], why[], how{intro,items[]}, credibility, next.
   Program pages add: who, delivers[], how, why. */

window.SERVICE_PAGES = [
  {
    slug: 'policy-hta-engagement',
    eyebrow: 'Policy & HTA',
    titleLead: 'Policy and HTA',
    titleAccent: 'engagement',
    lede: 'Embedding consumer perspectives into health technology assessment, reimbursement, and clinical decision-making.',
    metaDescription: 'Embedding consumer perspectives into health technology assessment, reimbursement, and clinical decision-making. Advisory from Kris Pierce Consulting.',
    involves: [
      'Health technology assessment is where evidence meets access. It is also where consumer input is most often misunderstood, mishandled, or marginalised. Treated as anecdote, or treated as advocacy, when neither framing produces useful evidence for decision-makers.',
      'This advisory works on the structural problem. How consumer perspectives are gathered, interpreted, and integrated into HTA processes in ways that withstand scrutiny and influence outcomes. The same logic applies across reimbursement pathways, clinical guidelines, and policy decisions where consumer evidence is asked for but not always used.',
    ],
    applies: [
      'HTA submissions requiring credible, defensible consumer evidence.',
      'Pharmaceutical and biotech sponsors preparing for reimbursement pathways.',
      'Government agencies and HTA bodies refining how consumer input is integrated.',
      'Clinical guideline development and policy processes where lived experience needs to inform decisions, not decorate them.',
    ],
    why: [
      'Decisions made in HTA shape what people can access, when, and at what cost. The evidence informing those decisions is mostly clinical and economic. Consumer evidence is harder to standardise, easier to dismiss, and frequently produced in ways that make dismissal easy.',
      'Done well, consumer evidence sharpens HTA decisions. It identifies outcomes that matter, surfaces real-world burden, and tests whether modelled value reflects lived reality. Done poorly, it confirms the suspicion that consumer input is too soft to count.',
    ],
    how: {
      intro: 'Engagements typically cover:',
      items: [
        'Consumer evidence strategy aligned to the decision criteria of the HTA body involved.',
        'Design and delivery of structured consumer input that meets evidentiary standards.',
        'Submission review and advisory through the assessment process.',
        'Stakeholder alignment across sponsor, community organisations, and clinical advisors.',
        'Capability building for organisations developing their own HTA-ready engagement function.',
      ],
    },
    credibility: 'Direct involvement in HTA submissions and reimbursement pathways across rare disease, paediatric, and complex chronic conditions. Advisory work with pharmaceutical sponsors conducted under Medicines Australia Code of Conduct.',
    next: 'If you have an HTA submission, a reimbursement pathway, or a policy process where consumer evidence needs to land, the starting point is a scoping conversation.',
  },
  {
    slug: 'clinical-trial-readiness',
    eyebrow: 'Research readiness',
    titleLead: 'Clinical trial',
    titleAccent: 'readiness',
    lede: 'Working with sponsors, sites, and consumer groups to improve pathways to research participation and treatment access.',
    metaDescription: 'Improving pathways to research participation and treatment access, working with sponsors, sites, and consumer groups. Advisory from Kris Pierce Consulting.',
    involves: [
      'Trial readiness is often treated as a recruitment problem. It is not. It is a design problem, an engagement problem, and a system problem. Recruitment is the place where those upstream failures become visible.',
      'This advisory works upstream. Designing protocols that reflect what participation actually requires of families. Building consumer involvement into the parts of the process where it changes outcomes. Aligning sponsors, sites, and community organisations around shared expectations of what a trial-ready population looks like, and what it takes to sustain one.',
    ],
    applies: [
      'Sponsors developing protocols for rare disease, paediatric, or complex chronic conditions.',
      'Trial sites preparing for studies in populations they have not previously engaged.',
      'Consumer organisations building the infrastructure to support trial participation.',
      'Programs coordinating natural history studies, registries, or trial networks.',
    ],
    why: [
      'Trials in rare and paediatric populations carry costs that conventional design rarely accounts for. Travel, time off work, sibling care, the cognitive load of decisions made under uncertainty. When protocols do not account for these, participation rates fall, retention suffers, and access to treatments is delayed for the people the research was meant to serve.',
      'Trial readiness work brings those realities into the design phase, where they can be addressed, rather than the recruitment phase, where they cannot.',
    ],
    how: {
      intro: 'Engagements typically include some combination of:',
      items: [
        'Protocol review against participation feasibility, not just clinical or scientific design.',
        'Consumer involvement strategy aligned to the decisions the trial needs to make.',
        'Site readiness assessment, including engagement infrastructure and community trust.',
        'Sponsor and site alignment on expectations, communications, and post-trial obligations.',
        'Translation pathways from trial completion to treatment access, including HTA and reimbursement readiness.',
      ],
    },
    credibility: 'Direct work with sponsors and biotech in rare disease and paediatric settings. Lived experience of clinical trial participation across more than two decades. Pharmaceutical-adjacent work conducted under Medicines Australia Code of Conduct.',
    next: 'If you are preparing a trial in a rare, paediatric, or complex population and want readiness work that goes beyond recruitment, the starting point is a scoping conversation.',
  },
  {
    slug: 'rare-disease-strategy',
    eyebrow: 'Strategy',
    titleLead: 'Rare disease',
    titleAccent: 'strategy',
    lede: 'Supporting national and global initiatives focused on complex, low-prevalence conditions and the systems around them.',
    metaDescription: 'Supporting national and global initiatives focused on complex, low-prevalence conditions and the systems around them. Kris Pierce Consulting.',
    involves: [
      'Rare disease sits in the gaps between systems. Diagnostic, clinical, research, regulatory, and reimbursement frameworks are built for prevalence and predictability. Rare disease has neither.',
      'Strategic advisory in this space is not about producing another rare disease report. It is about identifying where the system fails predictably, where the leverage points sit, and where a coordinated approach can shift outcomes that uncoordinated effort cannot.',
    ],
    applies: [
      'National strategies, frameworks, and implementation plans for rare disease.',
      'Global initiatives coordinating across jurisdictions, registries, and networks.',
      'Condition-specific strategy for organisations representing rare and ultra-rare populations.',
      'Cross-sector work bringing together government, research, clinical care, industry, and community.',
    ],
    why: [
      'Rare disease policy tends to oscillate between two failure modes. Generic frameworks that treat all rare diseases as interchangeable, and condition-specific advocacy that cannot scale into system change.',
      'Useful strategy sits between those two. Specific enough to address the structural realities of rare disease. General enough to influence the systems that govern outcomes across thousands of conditions.',
    ],
    how: {
      intro: 'Strategic engagements typically cover:',
      items: [
        'Diagnosis of where the system is failing, and why standard approaches have not corrected it.',
        'Identification of leverage points across policy, research, clinical care, and reimbursement.',
        'Alignment work across stakeholders who would not otherwise sit at the same table.',
        'Implementation planning that accounts for the fragmentation rare disease operates within.',
        'Practical outputs that organisations and decision-makers can use, not theoretical frameworks.',
      ],
    },
    credibility: 'Direct involvement in national and global rare disease work, including the Rare Power Lived Experience Group and SCN2A global initiatives. Founder and Director of SCN2A Australia. More than 23 years of lived experience as a carer to a child with a developmental and epileptic encephalopathy.',
    next: 'If you are building a rare disease strategy and need advisory that understands both the policy environment and the lived reality of the conditions involved, the starting point is a scoping conversation.',
  },
  {
    slug: 'consumer-engagement-frameworks',
    eyebrow: 'Engagement design',
    titleLead: 'Consumer engagement',
    titleAccent: 'frameworks',
    lede: 'Structured, evidence-based engagement approaches across paediatric and rare disease research and care settings.',
    metaDescription: 'Structured, evidence-based engagement approaches across paediatric and rare disease research and care settings. Kris Pierce Consulting.',
    involves: [
      'Most engagement work fails for the same reasons. It is added too late. It is run by people without the experience to interpret what they hear. The findings sit in a report and never reach the decisions they were meant to inform.',
      'This advisory builds engagement the other way. Embedded early. Structured against the questions a decision-maker actually has to answer. Designed to produce findings that hold up in a steering committee, an ethics review, or an HTA submission.',
      'Engagement is treated as evidence, not as a participation exercise.',
    ],
    applies: [
      'Research programs that need consumer input integrated from design through to translation.',
      'Paediatric and rare disease settings where conventional engagement models break down.',
      'Organisations rebuilding an engagement function after tokenistic approaches have damaged trust.',
      'Cross-jurisdictional or multi-site studies needing a consistent framework rather than one-off consultations.',
    ],
    why: [
      'Engagement that is poorly designed is worse than no engagement at all. It signals that input was sought, which protects the process from scrutiny, but it does not change the decision. Over time, that damages the credibility of the engagement function and the trust of the communities involved.',
      'Engagement designed properly does the opposite. It sharpens the question, surfaces the constraints that matter, and produces evidence that decision-makers can use.',
    ],
    how: {
      intro: 'Each engagement is structured to the decision it is meant to inform. A framework typically covers:',
      items: [
        'The decisions the engagement will influence, and the evidence those decisions require.',
        'Who needs to be engaged, why, and at what point in the process.',
        'Methods matched to the question, not the convention.',
        'Analysis and synthesis approaches that produce defensible findings.',
        'Pathways back into decision-making, with accountability for what changes.',
      ],
    },
    credibility: 'This work draws on more than two decades inside the systems it is designed to influence, including current work as Strategic Lead for Consumer and Community Engagement at Rare Diseases NSW (UNSW Sydney).',
    next: 'If you are designing or rebuilding a consumer engagement function and want it to influence decisions rather than decorate them, the starting point is a scoping conversation.',
  },
];

window.PROGRAM_PAGES = [
  {
    slug: 'ongoing-strategic-advisor',
    eyebrow: 'Advisory · Ongoing',
    titleLead: 'Ongoing Strategic',
    titleAccent: 'Advisor',
    lede: 'Consistent strategic input at the point decisions are made.',
    metaDescription: 'Consistent strategic input at the point decisions are made. A retained advisory arrangement with Kris Pierce Consulting.',
    who: 'Executives, boards, and leadership teams who need a senior strategic perspective available consistently, not just at the start of a project.',
    delivers: [
      'Regular strategic input across decisions as they emerge',
      'A trusted external perspective on complex issues',
      'Continuity of thinking across initiatives',
      'Confidential, senior-level advisory',
    ],
    how: 'A retained arrangement structured around your decision rhythm. The cadence is set to fit how decisions actually get made, not an arbitrary schedule.',
    why: 'The most consequential decisions rarely arrive on a tidy timeline. Ongoing advisory ensures strategic input is there when it counts.',
  },
  {
    slug: 'consumer-engagement-design',
    eyebrow: 'Advisory · Engagement',
    titleLead: 'Consumer Engagement',
    titleAccent: 'Design',
    lede: 'Engagement approaches that influence decisions and withstand scrutiny.',
    metaDescription: 'Consumer engagement approaches that influence decisions and withstand scrutiny. Advisory from Kris Pierce Consulting.',
    who: 'Organisations that need consumer engagement to be more than a box-tick: engagement that holds up under regulatory, clinical, and policy scrutiny.',
    delivers: [
      'An engagement approach designed for the specific decision context',
      'Methods that integrate lived experience with rigour',
      'A defensible structure that meets external expectations',
      'Practical implementation guidance',
    ],
    how: 'Engagement is designed from the decision backwards: starting with what the organisation needs to know, and building the approach that gets there credibly.',
    why: 'Poor engagement creates risk. Strong engagement creates confidence, internally, externally, and in the decisions that follow.',
  },
  {
    slug: 'stakeholder-alignment-program',
    eyebrow: 'Advisory · Alignment',
    titleLead: 'Stakeholder Alignment',
    titleAccent: 'Program',
    lede: 'Bringing the right people around the right priorities.',
    metaDescription: 'Bringing the right people around the right priorities across fragmented systems. A stakeholder alignment program from Kris Pierce Consulting.',
    who: 'Organisations working across fragmented systems where multiple stakeholders need to move in the same direction.',
    delivers: [
      'A shared understanding of priorities across stakeholders',
      'Identified points of friction and the path through them',
      'A structured plan for ongoing alignment',
      'Documentation that holds beyond the room',
    ],
    how: 'Structured stakeholder engagement, designed for credibility and rigour. The aim is durable alignment, not a one-off agreement.',
    why: 'Misalignment is one of the most common reasons good work fails. Alignment, done properly, makes everything that follows easier.',
  },
  {
    slug: 'strategic-advisory-sprint',
    eyebrow: 'Advisory · Sprint',
    titleLead: 'Strategic Advisory',
    titleAccent: 'Sprint',
    lede: 'A focused engagement to clarify direction and unlock progress.',
    metaDescription: 'A short, structured advisory engagement to clarify direction and get decisions moving. Strategic advisory from Kris Pierce Consulting.',
    who: 'Leaders and teams who need to move from stalled to decided, quickly and credibly.',
    delivers: [
      'A clear read on the current strategic position',
      'Priorities defined, with rationale',
      'Practical next steps mapped to the right people and timing',
      'A short written output that can be used immediately',
    ],
    how: 'A short, structured engagement. Targeted conversations, focused analysis, and a clear strategic output. No long discovery cycles. No padded deliverables.',
    why: 'When direction is unclear, decisions stall. A sprint creates the clarity that allows the next phase of work to begin.',
  },
];
