/* Kris Pierce — work areas (site architecture).
   The personal brand is the umbrella; each work area is a peer beneath it,
   grouped into two tiers so the home page can tell the breadth-of-work story:

     tier: 'core'     — established work Kris does today.
     tier: 'emerging' — programs being introduced.

   status: 'available' — live section, linked, "Explore" CTA.
           'current'   — established work, linked to where it lives, no badge.
           'inquire'   — accepting enquiries, shown as "Inquire", not linked.
           'coming'    — being introduced, shown as "Coming soon", not linked.

   Adding or launching an area is a data change here only: flip status to
   'available' and give it an href, and it surfaces across the home and nav. */
const WORK_AREAS = [
  {
    id: 'engagement',
    tier: 'core',
    icon: 'users',
    eyebrow: 'Consulting',
    title: 'Consumer and community engagement',
    blurb: 'Designing, strengthening, and embedding meaningful engagement across health, research, and rare disease, so the people most affected shape the decisions that matter.',
    href: '/engagement',
    cta: 'Explore the work',
    status: 'available',
  },
  {
    id: 'research',
    tier: 'core',
    icon: 'compass',
    eyebrow: 'Evidence',
    title: 'Research and evidence',
    blurb: 'Participatory and applied health research that builds patient and carer experience into the evidence base, from study design through to findings organisations can act on.',
    href: '/engagement/insights',
    cta: 'Read the research',
    status: 'current',
  },
  {
    id: 'advocacy',
    tier: 'emerging',
    icon: 'message',
    eyebrow: 'Capability',
    title: 'Advocacy and advocate training',
    blurb: 'Education, mentoring, and structured support for advocates and emerging leaders growing into the rooms where health decisions get made.',
    href: null,
    status: 'inquire',
  },
  {
    id: 'nfp-mentoring',
    tier: 'emerging',
    icon: 'target',
    eyebrow: 'Mentoring',
    title: 'Not-for-profit mentoring',
    blurb: 'Practical guidance for small charities and not-for-profits finding their feet, from governance and strategy to building genuine community voice into the work.',
    href: null,
    status: 'inquire',
  },
  {
    id: 'caregiving',
    tier: 'emerging',
    icon: 'heart',
    eyebrow: 'Wellbeing',
    title: 'Caregiving program',
    blurb: 'A program supporting the carers who hold so much of the system together, grounded in two decades of lived experience in the rare disease community.',
    href: null,
    status: 'coming',
  },
];

Object.assign(window, { WORK_AREAS });
