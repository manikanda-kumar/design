/* global React, Icon, Amount, Button, CoveCard, Eyebrow */
const { useState: useStateCard } = React;

function CardScreen() {
  const [frozen, setFrozen] = useStateCard(false);
  const [showNumber, setShowNumber] = useStateCard(false);
  return (
    <div style={{ paddingBottom: 110, minHeight: '100%' }}>
      <div style={{ padding: '8px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>Your card</div>
        <div style={{ width: 36, height: 36, borderRadius: 999, background: 'var(--paper-0)', boxShadow: 'var(--shadow-1)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Icon name="settings" size={18} />
        </div>
      </div>

      {/* Card artwork */}
      <div style={{ padding: '24px 20px 0', display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div style={{
          width: '100%', maxWidth: 320, aspectRatio: '1.586/1',
          background: 'radial-gradient(at 20% 0%, #2F7C6A 0%, #1B4A3C 60%, #0B1F18 100%)',
          borderRadius: 22, padding: '20px 22px', color: 'var(--paper-50)',
          boxShadow: 'var(--shadow-3)', position: 'relative', overflow: 'hidden',
          filter: frozen ? 'saturate(0.6) brightness(0.9)' : 'none',
          transition: 'filter 320ms var(--ease-out)',
        }}>
          {frozen && (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(232, 240, 250, 0.12), rgba(232, 240, 250, 0.04))',
              backdropFilter: 'blur(2px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 8,
            }}>
              <Icon name="snowflake" size={28} stroke="rgba(245, 242, 234, 0.9)" />
              <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245, 242, 234, 0.9)' }}>Frozen</div>
            </div>
          )}
          {/* corner waves */}
          <svg width="100%" height="40" viewBox="0 0 320 40" style={{ position: 'absolute', bottom: 56, left: 0, opacity: 0.5 }}>
            <path d="M0 30 Q40 10 80 30 T160 30 T240 30 T320 30" stroke="#2F7C6A" strokeWidth="1" fill="none"/>
            <path d="M0 36 Q40 16 80 36 T160 36 T240 36 T320 36" stroke="#2F7C6A" strokeWidth="1" fill="none" opacity="0.5"/>
          </svg>
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, letterSpacing: '-0.02em' }}>cove</div>
          <div style={{ width: 40, height: 30, background: 'rgba(215, 204, 179, 0.85)', borderRadius: 5, marginTop: 22 }} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, letterSpacing: '0.15em', marginTop: 18, opacity: 0.9 }}>
            {showNumber ? '4218 9302 1145 4218' : '•••• •••• •••• 4218'}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 14 }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: '0.15em', opacity: 0.6 }}>CARDHOLDER</div>
              <div style={{ fontSize: 13, marginTop: 2 }}>Alex Morgan</div>
            </div>
            <div>
              <div style={{ fontSize: 9, letterSpacing: '0.15em', opacity: 0.6 }}>EXPIRES</div>
              <div style={{ fontSize: 13, fontFamily: 'var(--font-mono)', marginTop: 2 }}>07/29</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ padding: '20px 20px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        <ControlButton icon={frozen ? 'lockOpen' : 'snowflake'} label={frozen ? 'Unfreeze' : 'Freeze'} active={frozen} onClick={() => setFrozen(f => !f)} />
        <ControlButton icon={showNumber ? 'eyeOff' : 'eye'} label={showNumber ? 'Hide #' : 'Show #'} onClick={() => setShowNumber(s => !s)} />
        <ControlButton icon="apple" label="Apple Pay" />
      </div>

      {/* Spend this cycle */}
      <div style={{ padding: '24px 20px 0' }}>
        <CoveCard>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <Eyebrow>Spend this cycle</Eyebrow>
              <div style={{ marginTop: 6 }}>
                <Amount value={1284.42} kind="hero" size={32} sign="" />
              </div>
              <div style={{ fontSize: 12, color: 'var(--fg-secondary)', marginTop: 2 }}>of $2,500 limit · resets Apr 1</div>
            </div>
            <Icon name="trendUp" size={20} stroke="var(--mint-700)" />
          </div>
          <div style={{ marginTop: 14, height: 8, background: 'var(--ink-100)', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ width: '51%', height: '100%', background: 'var(--forest-700)', borderRadius: 999 }} />
          </div>
          <div style={{ marginTop: 6, fontSize: 11, color: 'var(--fg-tertiary)', display: 'flex', justifyContent: 'space-between' }}>
            <span>51% used</span><span>14 days left</span>
          </div>
        </CoveCard>
      </div>

      {/* Card settings list */}
      <div style={{ padding: '14px 20px 0' }}>
        <CoveCard padding={0}>
          <div style={{ padding: '0 18px' }}>
            {[
              { icon: 'lock', label: 'PIN & security' },
              { icon: 'bell', label: 'Notifications', meta: 'All on' },
              { icon: 'card', label: 'Replace card' },
            ].map((row, i, a) => (
              <div key={row.label} style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0',
                borderBottom: i < a.length - 1 ? '1px solid var(--ink-100)' : 'none',
              }}>
                <Icon name={row.icon} size={18} stroke="var(--ink-700)" />
                <div style={{ flex: 1, fontSize: 15 }}>{row.label}</div>
                {row.meta && <div style={{ fontSize: 13, color: 'var(--fg-secondary)' }}>{row.meta}</div>}
                <Icon name="chevronRight" size={16} stroke="var(--fg-tertiary)" />
              </div>
            ))}
          </div>
        </CoveCard>
      </div>
    </div>
  );
}

function ControlButton({ icon, label, active, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: active ? 'var(--forest-700)' : 'var(--paper-0)',
      color: active ? 'var(--paper-50)' : 'var(--ink-900)',
      borderRadius: 14, padding: '14px 0',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      boxShadow: active ? 'none' : 'var(--shadow-1)', cursor: 'pointer',
      transition: 'all 120ms var(--ease-out)',
    }}>
      <Icon name={icon} size={20} stroke={active ? 'var(--paper-50)' : 'var(--forest-700)'} />
      <div style={{ fontSize: 12, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

window.CardScreen = CardScreen;
