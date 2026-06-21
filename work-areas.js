/* Kris Pierce — work areas (site architecture).
   The personal brand is the umbrella; each work area is a peer section beneath
   it. Adding a new area later (e.g. flipping one to `available` with an `href`)
   is the only change needed to surface it across the brand home and nav.

   status: 'available' — live section, linked.
           'coming'    — planned section, shown as "Coming soon", not linked. */
const WORK_AREAS = [
  {
    id: 'engagement',
    icon: 'users',
    eyebrow: 'Consulting',
    title: 'Consumer and community engagement',
    blurb: 'Designing, strengthening, and embedding meaningful engagement across research, health policy, and rare disease, so the people most affected shape the decisions that matter.',
    href: '/engagement',
    status: 'available',
  },
  {
    id: 'caregiver-wellbeing',
    icon: 'heart',
    eyebrow: 'Wellbeing',
    title: 'Caregiver wellbeing',
    blurb: 'Support and practical resources for the carers who hold so much of the system together, drawn from two decades of lived experience.',
    href: null,
    status: 'coming',
  },
  {
    id: 'advocate-training',
    icon: 'compass',
    eyebrow: 'Capability',
    title: 'Advocate training',
    blurb: 'Education, mentoring, and structured support for advocates and emerging leaders growing into the rooms where decisions get made.',
    href: null,
    status: 'coming',
  },
];

Object.assign(window, { WORK_AREAS });
