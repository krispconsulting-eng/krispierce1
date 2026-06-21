/* Kris Pierce Consulting — design-system adapter.
   The bound design system is loaded from _ds/.../_ds_bundle.js, which populates
   window.KrisPierceConsultingDesignSystem_ec4dc9 with the canonical components
   (kpc-* classed; their CSS is injected by the bundle). This file binds those
   components into the lexical names the site's sections use, and supplies a
   local Lucide Icon (the design system exports no Icon). Loaded AFTER the bundle. */

const DS = window.KrisPierceConsultingDesignSystem_ec4dc9 || {};

/* Canonical design-system components — used as-is. */
const Button = DS.Button;
const Pill = DS.Pill;
const StatCard = DS.StatCard;
const Avatar = DS.Avatar;
const Badge = DS.Badge;
const Card = DS.Card;
const Field = DS.Field;
const Logo = DS.Logo;

/* AvatarStack — our hero passes `glass`; the DS prop is `inverse` (white ring). */
function AvatarStack({ glass = false, ...rest }) {
  return <DS.AvatarStack inverse={glass} {...rest} />;
}

/* IconChip — our call sites pass a numeric px size; the DS chip takes sm|md|lg,
   so translate a number into an explicit width/height while keeping the chip. */
function IconChip({ size = 'md', style = {}, children, ...rest }) {
  const numeric = typeof size === 'number';
  return (
    <DS.IconChip size={numeric ? 'md' : size}
      style={numeric ? { width: size, height: size, ...style } : style} {...rest}>
      {children}
    </DS.IconChip>
  );
}

/* ---------- Icon (Lucide-style, 24px, stroke 1.9) — no DS export ---------- */
const ICON_PATHS = {
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  menu: 'M4 7h16M4 12h16M4 17h16',
  x: 'M6 6l12 12M18 6 6 18',
  'chevron-left': 'M15 6l-6 6 6 6',
  'chevron-right': 'M9 6l6 6-6 6',
  check: 'M5 12.5 10 17l9-10',
  users: 'M16 18v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V18M9.5 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6M17 18v-1.5a4 4 0 0 0-3-3.87M14 2.63a3 3 0 0 1 0 5.74',
  message: 'M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z',
  compass: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM15.5 8.5l-2 5-5 2 2-5 5-2Z',
  pen: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM13 13h7v7h-7zM4 13h7v7H4z',
  clipboard: 'M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1ZM8 6H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2M9 12h6M9 16h4',
  target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  heart: 'M12 20s-7-4.4-9.2-8.4A4.6 4.6 0 0 1 10 5.5l2 2 2-2a4.6 4.6 0 0 1 7.2 6.1C19 15.6 12 20 12 20Z',
  quote: 'M7 7H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-2H5V9h2V7Zm10 0h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-2h-2V9h2V7Z',
  mail: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM3.5 6.5 12 13l8.5-6.5',
  linkedin: 'M6.5 9v8M6.5 6.5v.01M11 17v-4.5a2.5 2.5 0 0 1 5 0V17M11 9v8',
  phone: 'M6 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2Z',
};
function Icon({ name, size = 20, fill = false, style = {}, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill={fill ? 'currentColor' : 'none'} stroke="currentColor"
      strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"
      style={style} aria-hidden="true" {...rest}>
      <path d={ICON_PATHS[name] || ''} />
    </svg>
  );
}

/* Expose on window too, so any global lookups resolve to the DS-backed set. */
Object.assign(window, { Icon, Button, Pill, IconChip, StatCard, Avatar, AvatarStack, Logo, Badge, Card, Field });

/* ============================================================================
   Lead delivery — Web3Forms (no backend required).
   Submissions are emailed to the address tied to the access key below.
   SETUP: create a free key at https://web3forms.com using hello@krispierce.com.au,
   then paste it as WEB3FORMS_ACCESS_KEY. Until then, forms show an error on submit.
   ========================================================================== */
const WEB3FORMS_ACCESS_KEY = '8de27910-e9a3-44fe-b0c2-93e42708b8e6';

async function sendLead(fields) {
  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('REPLACE_WITH')) {
    console.error('[sendLead] Web3Forms access key not set. Get one at https://web3forms.com and set WEB3FORMS_ACCESS_KEY in primitives.jsx.');
    throw new Error('Form not configured yet.');
  }
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || 'Submission failed. Please try again.');
  return data;
}

/* Shared "what do you need" options for the contact forms.
   Spans the full breadth of the work (engagement, research, advocacy,
   not-for-profit mentoring, caregiving) so enquiries route to the right area. */
const NEED_OPTIONS = [
  { value: '', label: 'What can I help with?' },
  { value: 'Consumer and community engagement', label: 'Consumer and community engagement' },
  { value: 'Co-design or participatory research', label: 'Co-design or participatory research' },
  { value: 'Strategic insights & advice', label: 'Strategic insights & advice' },
  { value: 'Health research and evidence', label: 'Health research and evidence' },
  { value: 'Industry or sponsor support', label: 'Industry or sponsor support' },
  { value: 'Advocacy or advocate training', label: 'Advocacy or advocate training' },
  { value: 'Not-for-profit mentoring', label: 'Not-for-profit mentoring' },
  { value: 'Caregiver wellbeing', label: 'Caregiver wellbeing' },
  { value: 'Speaking or facilitation', label: 'Speaking or facilitation' },
  { value: 'Something else', label: 'Something else' },
];

Object.assign(window, { sendLead, NEED_OPTIONS, WEB3FORMS_ACCESS_KEY });
