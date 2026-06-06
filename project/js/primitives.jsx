/* Kris Pierce Consulting — UI kit primitives (self-contained, window-attached).
   Lightweight cosmetic versions of the canonical components in /components/core,
   inlined so the kit renders & exports anywhere. Styling reads brand tokens. */

/* ---------- Icon set (Lucide-style, 24px, stroke 2) ---------- */
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

/* ---------- CSS (mirrors /components/core) ---------- */
const KIT_CSS = `
.k-btn{ --_bg:var(--ink-900); --_fg:var(--cream-50); --_bd:transparent; --_bbg:var(--cream-50); --_bfg:var(--ink-900);
  display:inline-flex; align-items:center; gap:14px; cursor:pointer; font-family:var(--font-text); font-weight:600;
  border-radius:var(--radius-pill); border:1.5px solid var(--_bd); background:var(--_bg); color:var(--_fg);
  padding:14px 14px 14px 26px; font-size:15px; line-height:1; text-decoration:none;
  transition:background .24s var(--ease-out),color .24s,border-color .24s,transform .14s,box-shadow .24s; }
.k-btn.noarrow{ padding-right:26px; } .k-btn{ white-space:nowrap; }
.k-btn__b{ width:30px;height:30px;flex:none;border-radius:999px;background:var(--_bbg);color:var(--_bfg);
  display:inline-flex;align-items:center;justify-content:center;transition:transform .24s var(--ease-out); }
.k-btn:hover{ transform:translateY(-1px); } .k-btn:active{ transform:scale(.985); }
.k-btn:hover .k-btn__b{ transform:translateX(2px); }
.k-btn--primary:hover{ --_bg:#000; box-shadow:var(--shadow-md); }
.k-btn--secondary{ --_bg:transparent; --_fg:var(--ink-900); --_bd:var(--border-strong); --_bbg:var(--ink-900); --_bfg:var(--cream-50); }
.k-btn--secondary:hover{ --_bg:var(--ink-900); --_fg:var(--cream-50); --_bd:var(--ink-900); --_bbg:var(--cream-50); --_bfg:var(--ink-900); }
.k-btn--glass{ --_bg:var(--glass-bg-dark); --_fg:#fff; --_bd:var(--glass-border); --_bbg:#fff; --_bfg:var(--ink-900);
  backdrop-filter:blur(var(--blur-glass)); -webkit-backdrop-filter:blur(var(--blur-glass)); box-shadow:var(--shadow-glass); }
.k-btn--glass:hover{ --_bg:rgba(29,28,33,.42); }
.k-btn--inverse{ --_bg:var(--cream-50); --_fg:var(--ink-900); --_bbg:var(--ink-900); --_bfg:var(--cream-50); }
.k-btn--inverse:hover{ box-shadow:var(--shadow-lg); }
.k-btn--ghost{ --_bg:transparent; --_fg:var(--ink-900); --_bbg:var(--cream-200); padding-left:18px; }
.k-btn--ghost:hover{ --_bg:var(--cream-100); }
.k-btn--lg{ font-size:16.5px; padding:18px 18px 18px 32px; }

.k-pill{ display:inline-flex; align-items:center; gap:8px; font-family:var(--font-text); font-weight:500; font-size:14px;
  line-height:1; padding:9px 16px; border-radius:999px; border:1px solid var(--border-default); color:var(--text-primary); white-space:nowrap; }
.k-pill .dot{ width:6px;height:6px;border-radius:999px;background:var(--clay-500); }
.k-pill--glass{ background:var(--glass-bg); border-color:var(--glass-border); color:#fff;
  backdrop-filter:blur(var(--blur-glass)); -webkit-backdrop-filter:blur(var(--blur-glass)); box-shadow:var(--shadow-glass); }
.k-pill--wash{ background:var(--accent-wash); border-color:transparent; color:var(--clay-700); }

.k-chip{ display:inline-flex; align-items:center; justify-content:center; flex:none; width:48px; height:48px;
  border-radius:999px; background:var(--ink-900); color:var(--cream-50); }
.k-chip--ghostInverse{ background:rgba(255,255,255,.07); color:#fff; border:1px solid var(--border-inverse); }
.k-chip--wash{ background:var(--accent-wash); color:var(--clay-700); }
.k-chip--soft{ background:var(--cream-100); color:var(--ink-900); border:1px solid var(--border-subtle); }

.k-stat{ display:flex; gap:13px; align-items:flex-start; max-width:300px; padding:16px 18px; border-radius:var(--radius-lg); font-family:var(--font-text);
  background:var(--glass-bg); border:1px solid var(--glass-border); color:#fff;
  backdrop-filter:blur(var(--blur-glass)); -webkit-backdrop-filter:blur(var(--blur-glass)); box-shadow:var(--shadow-glass); }
.k-stat__lead{ font-family:var(--font-display); font-weight:700; font-size:17px; letter-spacing:-.01em; line-height:1.15; display:block; }
.k-stat__body{ font-size:12.5px; line-height:1.45; margin-top:4px; opacity:.85; display:block; }

.k-av{ position:relative; display:inline-flex; align-items:center; justify-content:center; border-radius:999px;
  overflow:hidden; background:var(--taupe-200); color:var(--taupe-600); font-family:var(--font-text); font-weight:600; flex:none; }
.k-av img{ width:100%;height:100%;object-fit:cover; }
.k-stack{ display:inline-flex; align-items:center; }
.k-stack > *{ box-shadow:0 0 0 2.5px var(--paper); border-radius:999px; }
.k-stack > * + *{ margin-left:-12px; }
.k-stack--glass > *{ box-shadow:0 0 0 2.5px rgba(255,255,255,.5); }

.k-field{ display:flex; flex-direction:column; gap:7px; font-family:var(--font-text); }
.k-field label{ font-size:13.5px; font-weight:600; color:var(--text-primary); }
.k-field .ctl{ font-family:inherit; font-size:15px; color:var(--text-primary); background:var(--paper);
  border:1.5px solid var(--border-default); border-radius:var(--radius-md); padding:13px 16px; width:100%; outline:none;
  transition:border-color .24s, box-shadow .24s; }
.k-field .ctl::placeholder{ color:var(--taupe-300); }
.k-field .ctl:focus{ border-color:var(--clay-500); box-shadow:0 0 0 3px var(--accent-wash); }
textarea.ctl{ resize:vertical; min-height:120px; }
`;
(function(){ if(!document.getElementById('kit-css')){ const s=document.createElement('style'); s.id='kit-css'; s.textContent=KIT_CSS; document.head.appendChild(s);} })();

/* ---------- Components ---------- */
function Button({ children, variant='primary', size='md', arrow=false, icon=null, href, onClick, className='', ...rest }){
  const badge = icon || (arrow ? <Icon name="arrow-right" size={15} /> : null);
  const cls = ['k-btn', `k-btn--${variant}`, size==='lg'?'k-btn--lg':'', badge?'':'noarrow', className].filter(Boolean).join(' ');
  const inner = <>{<span>{children}</span>}{badge && <span className="k-btn__b">{badge}</span>}</>;
  return href ? <a href={href} className={cls} onClick={onClick} {...rest}>{inner}</a>
    : <button className={cls} onClick={onClick} {...rest}>{inner}</button>;
}
function Pill({ children, variant='outline', dot=false, className='', ...rest }){
  return <span className={['k-pill', variant!=='outline'?`k-pill--${variant}`:'', className].filter(Boolean).join(' ')} {...rest}>
    {dot && <span className="dot" />}{children}</span>;
}
function IconChip({ children, variant='solid', size=48, className='', ...rest }){
  return <span className={['k-chip', variant!=='solid'?`k-chip--${variant}`:'', className].filter(Boolean).join(' ')}
    style={{ width:size, height:size }} {...rest}>{children}</span>;
}
function StatCard({ lead, children, media=null, style={} }){
  return <div className="k-stat" style={style}>{media && <span style={{flex:'none'}}>{media}</span>}
    <span><span className="k-stat__lead">{lead}</span>{children && <span className="k-stat__body">{children}</span>}</span></div>;
}
function Avatar({ src, name='', size=40, style={} }){
  const ini = name.trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
  return <span className="k-av" style={{ width:size, height:size, fontSize:size*0.38, ...style }}>
    {src ? <img src={src} alt={name}/> : <span>{ini}</span>}</span>;
}
function AvatarStack({ people=[], size=32, glass=false }){
  return <span className={['k-stack', glass?'k-stack--glass':''].filter(Boolean).join(' ')}>
    {people.map((p,i)=><Avatar key={i} src={p.src} name={p.name} size={size} />)}</span>;
}
function Logo({ size='md', inverse=false, assetPath='../../assets', href }){
  const H = { sm:30, md:42, lg:56 }[size] || size;
  const Tag = href ? 'a' : 'span';
  const wm = `${assetPath}/${inverse?'logo-wordmark-cream.png':'logo-wordmark.png'}`;
  return <Tag href={href} aria-label="Kris Pierce Consulting" style={{ display:'inline-flex',
    alignItems:'center', textDecoration:'none' }}>
    <img src={wm} height={H} alt="Kris Pierce Consulting" style={{display:'block',width:'auto'}} />
  </Tag>;
}

Object.assign(window, { Icon, Button, Pill, IconChip, StatCard, Avatar, AvatarStack, Logo });
