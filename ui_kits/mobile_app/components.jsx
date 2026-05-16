/* global React */
// Shared building blocks used across all Cove screens.
// Keep these dumb + reusable. No screen-specific logic here.

const { useState, useEffect, useRef } = React;

// ─── Icon ─── inline SVG, matches Lucide stroke style.
function Icon({ name, size = 20, stroke = 'currentColor', strokeWidth = 1.7, fill = 'none', style }) {
  const sw = size <= 16 ? 2 : strokeWidth;
  const paths = {
    home: <path d="M3 12l9-9 9 9M5 10v10h14V10" />,
    swap: <><path d="M3 7h13l-4-4M21 17H8l4 4" /></>,
    card: <><rect x="2" y="6" width="20" height="13" rx="2" /><path d="M2 11h20" /></>,
    sparkles: <path d="M12 3l1.8 5.7L19.5 10l-5.7 1.3L12 17l-1.8-5.7L4.5 10l5.7-1.3z" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>,
    plus: <path d="M5 12h14M12 5v14" />,
    arrowRight: <path d="M5 12h14M13 5l7 7-7 7" />,
    arrowUp: <path d="M12 19V5M5 12l7-7 7 7" />,
    arrowDown: <path d="M12 5v14M5 12l7 7 7-7" />,
    arrowUpRight: <path d="M7 17L17 7M9 7h8v8" />,
    arrowDownLeft: <path d="M17 7L7 17M15 17H7V9" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>,
    checkSmall: <path d="M5 12l4 4 10-10" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    alert: <><path d="M12 3L2 20h20z" /><path d="M12 10v4M12 17h.01" /></>,
    trendUp: <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></>,
    repeat: <path d="M21 12a9 9 0 1 1-3-6.7M17 4v5h-5" />,
    qr: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 14h3M21 14v3M14 21h3M21 18v3" /></>,
    pie: <><circle cx="12" cy="12" r="9" /><path d="M12 3v9l5 5" /></>,
    chevronRight: <path d="M9 6l6 6-6 6" />,
    chevronDown: <path d="M6 9l6 6 6-6" />,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1.4l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2.4-1.4L13.5 2h-3l-.6 2.6a7 7 0 0 0-2.4 1.4l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12a7 7 0 0 0 .1 1.4l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2.4 1.4l.6 2.6h3l.6-2.6a7 7 0 0 0 2.4-1.4l2.4 1 2-3.4-2-1.6A7 7 0 0 0 19 12z" /></>,
    bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 0 0 4 0" /></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
    lockOpen: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 7-3" /></>,
    snowflake: <><path d="M12 2v20M4 6l16 12M4 18L20 6M2 12h20" /><path d="M9 4l3 3 3-3M9 20l3-3 3 3M4 9l3 3-3 3M20 9l-3 3 3 3" /></>,
    send: <><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></>,
    close: <path d="M18 6L6 18M6 6l12 12" />,
    eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
    eyeOff: <><path d="M9.9 4.2A10 10 0 0 1 12 4c6 0 10 8 10 8a17 17 0 0 1-2.4 3.5M6.6 6.6A17 17 0 0 0 2 12s4 8 10 8a10 10 0 0 0 4.4-1M3 3l18 18" /><path d="M9.5 9.5a3 3 0 0 0 4.2 4.2" /></>,
    apple: <path d="M12 6c-1.5 0-3-1-3-3 1 .5 3 1.5 3 3zM8 8c-3 0-5 2-5 6 0 3 2 8 4.5 8 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5C15 22 17 17 17 14c0-3-2-5-4-5-2 0-2.5 1-3.5 1S10 8 8 8z" />,
  };
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill={fill} stroke={stroke} strokeWidth={sw}
      strokeLinecap="round" strokeLinejoin="round"
      style={style}
    >
      {paths[name] || null}
    </svg>
  );
}

// ─── Amount ─── always uses mono. Pass `kind="hero"` for serif large.
function Amount({ value, kind = 'mono', sign = 'auto', size, style = {} }) {
  const n = Number(value);
  const isNeg = n < 0;
  const isPos = n > 0 && sign === 'auto' && (style?.color === undefined);
  const abs = Math.abs(n);
  const [int, dec] = abs.toFixed(2).split('.');
  const intFmt = Number(int).toLocaleString('en-US');
  const prefix = isNeg ? '— ' : (sign === '+' ? '+ ' : (isPos && sign === 'auto' ? '+ ' : ''));
  if (kind === 'hero') {
    return (
      <span style={{
        fontFamily: 'var(--font-display)',
        fontVariantNumeric: 'tabular-nums lining-nums',
        letterSpacing: '-0.025em',
        fontSize: size || 56,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...style,
      }}>
        {prefix}${intFmt}<span style={{ color: 'var(--fg-tertiary)', fontSize: (size || 56) * 0.62 }}>.{dec}</span>
      </span>
    );
  }
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: size || 15,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      ...style,
    }}>
      {prefix}${intFmt}.{dec}
    </span>
  );
}

// ─── Count-up ─── animate a number on mount.
function useCountUp(target, duration = 520) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

// ─── Button ───
function Button({ variant = 'primary', size = 'md', children, onClick, leadIcon, trailIcon, full, style = {} }) {
  const [pressed, setPressed] = useState(false);
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    transition: 'all 120ms var(--ease-out)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transform: pressed ? 'scale(0.97)' : 'scale(1)',
    width: full ? '100%' : 'auto',
  };
  const sizes = {
    sm: { fontSize: 13, padding: '8px 14px', borderRadius: 10 },
    md: { fontSize: 15, padding: '12px 20px' },
    lg: { fontSize: 16, padding: '16px 24px', borderRadius: 14 },
  };
  const variants = {
    primary: { background: 'var(--forest-700)', color: 'var(--paper-50)' },
    secondary: { background: 'var(--paper-0)', color: 'var(--ink-900)', boxShadow: 'inset 0 0 0 1px var(--ink-200)' },
    ghost: { background: 'transparent', color: 'var(--forest-700)' },
    danger: { background: 'var(--coral-500)', color: 'white' },
    ai: { background: 'var(--iris-500)', color: 'white' },
    onBrand: { background: 'rgba(255,255,255,0.16)', color: 'var(--paper-50)', backdropFilter: 'blur(12px)' },
  };
  return (
    <button
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onClick={onClick}
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
    >
      {leadIcon && <Icon name={leadIcon} size={size === 'sm' ? 16 : 18} />}
      {children}
      {trailIcon && <Icon name={trailIcon} size={size === 'sm' ? 16 : 18} />}
    </button>
  );
}

// ─── Card ─── canonical white surface on cream.
function CoveCard({ children, padding = 20, radius = 18, elevated = true, style = {} }) {
  return (
    <div style={{
      background: 'var(--paper-0)',
      borderRadius: radius,
      padding,
      boxShadow: elevated ? 'var(--shadow-2)' : 'none',
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Avatar ─── colored initials.
function Avatar({ name, size = 40, color }) {
  const initials = name.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  const palettes = [
    ['#D6E5DF', '#1B4A3C'],
    ['#FBE3DC', '#B33A23'],
    ['#FBEFD2', '#A66B0A'],
    ['#DFF5EA', '#1F8E5B'],
    ['#E7E4FA', '#4A3FB8'],
    ['#EDE9DD', '#5B6560'],
  ];
  const idx = name.charCodeAt(0) % palettes.length;
  const [bg, fg] = color || palettes[idx];
  return (
    <div style={{
      width: size, height: size,
      borderRadius: 999, background: bg, color: fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.36, fontWeight: 600, letterSpacing: -0.2,
      flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

// ─── Transaction row ───
function TransactionRow({ tx, onClick, divider = true }) {
  const isInflow = tx.amount > 0;
  const isPending = tx.status === 'pending';
  const iconColor = isPending ? 'var(--amber-700)' : (isInflow ? 'var(--mint-700)' : 'var(--ink-900)');
  const iconBg = isPending ? 'var(--amber-100)' : (isInflow ? 'var(--mint-100)' : 'var(--ink-100)');
  const amountColor = isPending ? 'var(--amber-700)' : (isInflow ? 'var(--mint-700)' : 'var(--coral-700)');
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '14px 0',
        borderBottom: divider ? '1px solid var(--ink-100)' : 'none',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 999,
        background: iconBg, color: iconColor,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon name={tx.icon || (isInflow ? 'arrowDownLeft' : 'arrowUpRight')} size={18} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ fontWeight: 500, fontSize: 15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>
            {tx.name}
          </div>
          {isPending && (
            <span style={{
              flexShrink: 0,
              fontSize: 10, padding: '2px 7px',
              borderRadius: 999, background: 'var(--amber-100)', color: 'var(--amber-700)',
              letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500,
              whiteSpace: 'nowrap',
            }}>Pending</span>
          )}
        </div>
        <div style={{ fontSize: 12, color: 'var(--fg-secondary)' }}>
          {tx.category}{tx.when ? ` · ${tx.when}` : ''}
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Amount value={tx.amount} style={{ color: amountColor }} />
      </div>
    </div>
  );
}

// ─── AI badge + suggestion card ───
function AiBadge({ children = 'AI · auto-suggest', style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      fontSize: 10, fontWeight: 500, color: 'var(--iris-700)',
      background: 'var(--iris-100)',
      padding: '3px 8px', borderRadius: 999,
      letterSpacing: '0.06em', textTransform: 'uppercase',
      fontFamily: 'var(--font-sans)',
      whiteSpace: 'nowrap',
      ...style,
    }}>
      {children}
    </span>
  );
}

function AiSuggestion({ headline, action, secondaryAction, meta, onAction, onDismiss }) {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #F2F0FB 0%, #FFFFFF 100%)',
      border: '1px solid var(--iris-100)',
      borderRadius: 18,
      padding: '16px 18px',
      boxShadow: 'var(--shadow-2)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 999,
          background: 'var(--iris-100)', color: 'var(--iris-700)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="sparkles" size={14} />
        </div>
        <AiBadge />
        {meta && <span style={{ fontSize: 11, color: 'var(--fg-tertiary)', marginLeft: 'auto' }}>{meta}</span>}
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--ink-900)' }}>
        {headline}
      </div>
      {(action || secondaryAction) && (
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          {action && <Button variant="ai" size="sm" onClick={onAction}>{action}</Button>}
          {secondaryAction && <Button variant="ghost" size="sm" onClick={onDismiss} style={{ color: 'var(--fg-secondary)' }}>{secondaryAction}</Button>}
        </div>
      )}
    </div>
  );
}

// ─── Tab bar ───
function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'move', label: 'Move', icon: 'swap' },
    { id: 'card', label: 'Card', icon: 'card' },
    { id: 'ask',  label: 'Ask',  icon: 'sparkles', ai: true },
    { id: 'you',  label: 'You',  icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '6px 8px 28px',
      background: 'rgba(245, 242, 234, 0.78)',
      backdropFilter: 'blur(20px) saturate(140%)',
      WebkitBackdropFilter: 'blur(20px) saturate(140%)',
      borderTop: '1px solid var(--ink-200)',
      display: 'flex',
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        const color = isActive ? (t.ai ? 'var(--iris-700)' : 'var(--forest-700)') : 'var(--fg-tertiary)';
        return (
          <div
            key={t.id}
            onClick={() => onChange(t.id)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 3, padding: '6px 0',
              color, cursor: 'pointer',
              transition: 'color 120ms var(--ease-out)',
            }}
          >
            <Icon name={t.icon} size={22} />
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: 0.02 }}>{t.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Eyebrow ───
function Eyebrow({ children, style }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 500, letterSpacing: '0.08em',
      textTransform: 'uppercase', color: 'var(--fg-tertiary)',
      ...style,
    }}>
      {children}
    </div>
  );
}

Object.assign(window, {
  Icon, Amount, useCountUp, Button, CoveCard, Avatar,
  TransactionRow, AiSuggestion, AiBadge, TabBar, Eyebrow,
});
