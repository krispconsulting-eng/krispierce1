// logo.jsx — SCN2A Australia wordmark lockups (typographic — no symbol).
// Exports to window: Wordmark, Logo, Monogram, ProfileMark, ArcField.
// ArcField is a decorative connection-pattern background only — NOT the logo.
// Plus Jakarta Sans throughout.

// ----- Two-line wordmark -----------------------------------------------------
function Wordmark({ scale = 1, text = '#0D1B2A', accentName = '#0D1B2A', desc = '#6B6659', rule = '#D5CFBF', align = 'center' }) {
  const items = align === 'center' ? 'center' : 'flex-start';
  return (
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: items, lineHeight: 1 } },
      React.createElement('div', {
        style: {
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
          fontSize: 30 * scale + 'px', letterSpacing: '-0.01em', color: text, whiteSpace: 'nowrap',
        }
      },
        'SCN2A',
        React.createElement('span', { style: { fontWeight: 500, letterSpacing: '0.06em', color: accentName, marginLeft: 8 * scale + 'px' } }, 'AUSTRALIA')
      ),
      React.createElement('div', {
        style: {
          marginTop: 9 * scale + 'px', paddingTop: 9 * scale + 'px',
          borderTop: `${Math.max(1, 1 * scale)}px solid ${rule}`,
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600,
          fontSize: 10.5 * scale + 'px', letterSpacing: '0.215em', textTransform: 'uppercase',
          color: desc, whiteSpace: 'nowrap',
          width: align === 'center' ? 'auto' : '100%',
          textAlign: align === 'center' ? 'center' : 'left',
        }
      }, 'Research · Advocacy · Education')
    )
  );
}

// ----- Full lockup (stacked = centred, horizontal = left-aligned) ------------
function Logo({ layout = 'stacked', scale = 1, text = '#0D1B2A', accentName = '#0D1B2A', desc = '#6B6659', rule = '#D5CFBF' }) {
  return React.createElement(Wordmark, { scale, text, accentName, desc, rule, align: layout === 'horizontal' ? 'left' : 'center' });
}

// ----- Compact monogram (app icon / favicon / small avatar) ------------------
// Typographic only: "SCN2A" stacked over a hairline + "AU".
function Monogram({ size = 120, bg = '#1E3A6E', fg = '#F7F4F0', accent = '#4A7EC7', rounded = true }) {
  return (
    React.createElement('div', {
      style: {
        width: size, height: size, background: bg, borderRadius: rounded ? Math.round(size * 0.16) : 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1,
      }
    },
      React.createElement('div', { style: { fontWeight: 800, fontSize: size * 0.3 + 'px', letterSpacing: '-0.01em', color: fg } }, 'SCN2A'),
      React.createElement('div', { style: { width: size * 0.34, height: Math.max(2, size * 0.016), background: accent, margin: size * 0.085 + 'px 0' } }),
      React.createElement('div', { style: { fontWeight: 600, fontSize: size * 0.115 + 'px', letterSpacing: '0.2em', color: fg } }, 'AU')
    )
  );
}

// ----- Circular profile mark (typographic) ----------------------------------
function ProfileMark({ size = 320, bg = '#1E3A6E', fg = '#F7F4F0', accent = '#4A7EC7', ring }) {
  return (
    React.createElement('div', {
      style: {
        width: size, height: size, borderRadius: '50%', background: bg,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        boxShadow: ring ? `inset 0 0 0 ${Math.round(size * 0.012)}px ${ring}` : 'none',
        fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1,
      }
    },
      React.createElement('div', { style: { fontWeight: 800, fontSize: size * 0.27 + 'px', letterSpacing: '-0.01em', color: fg } }, 'SCN2A'),
      React.createElement('div', { style: { width: size * 0.3, height: Math.max(2, size * 0.014), background: accent, margin: size * 0.07 + 'px 0' } }),
      React.createElement('div', { style: { fontWeight: 600, fontSize: size * 0.1 + 'px', letterSpacing: '0.22em', color: fg } }, 'AUSTRALIA')
    )
  );
}

// ----- Connection-pattern arc field (decorative bg for social) --------------
function ArcField({ w = 1080, h = 1080, stroke = '#4A7EC7', opacity = 0.16 }) {
  return (
    React.createElement('svg', { viewBox: `0 0 ${w} ${h}`, preserveAspectRatio: 'none', width: w, height: h, 'aria-hidden': 'true', style: { position: 'absolute', inset: 0, opacity } },
      React.createElement('g', { fill: 'none', stroke, strokeWidth: 1.6 },
        React.createElement('path', { d: `M${-0.05*w} ${0.78*h} Q ${0.3*w} ${0.52*h} ${0.65*w} ${0.72*h} T ${1.1*w} ${0.58*h}` }),
        React.createElement('path', { d: `M${-0.05*w} ${0.64*h} Q ${0.34*w} ${0.40*h} ${0.7*w} ${0.58*h} T ${1.1*w} ${0.44*h}` })
      ),
      React.createElement('g', { fill: stroke },
        React.createElement('circle', { cx: 0.3*w, cy: 0.56*h, r: 4 }),
        React.createElement('circle', { cx: 0.65*w, cy: 0.69*h, r: 4 }),
        React.createElement('circle', { cx: 0.7*w, cy: 0.555*h, r: 4 })
      )
    )
  );
}

Object.assign(window, { Wordmark, Logo, Monogram, ProfileMark, ArcField });
