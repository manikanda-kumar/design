/* global React, Icon, Amount, Button, CoveCard, Avatar, Eyebrow */
const { useState: useStateMove } = React;

function MoveScreen() {
  const [amount, setAmount] = useStateMove('240.00');
  const [recipient, setRecipient] = useStateMove('Sarah Chen');
  const recents = [
    { name: 'Sarah Chen', tag: '@sarah' },
    { name: 'Daniel Park', tag: '@dpark' },
    { name: 'Mom', tag: 'savings' },
    { name: 'Acme Co.', tag: 'invoice' },
  ];

  const press = (k) => {
    if (k === 'back') {
      setAmount(a => {
        const n = a.slice(0, -1);
        return n === '' || n === '.' ? '0' : n;
      });
      return;
    }
    setAmount(a => {
      if (k === '.' && a.includes('.')) return a;
      if (a === '0' && k !== '.') return k;
      // limit to 2 decimal places
      if (a.includes('.') && a.split('.')[1].length >= 2) return a;
      return a + k;
    });
  };

  const display = (() => {
    const [int, dec] = (amount.includes('.') ? amount : amount + '.').split('.');
    const i = Number(int || '0').toLocaleString('en-US');
    return { int: i, dec: dec.padEnd(2, '0').slice(0, 2) };
  })();

  return (
    <div style={{ paddingBottom: 110, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '8px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 36, height: 36, borderRadius: 999, background: 'var(--paper-0)', boxShadow: 'var(--shadow-1)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Icon name="close" size={18} />
        </div>
        <div style={{ fontSize: 15, fontWeight: 600 }}>Send money</div>
        <div style={{ width: 36 }} />
      </div>

      {/* Amount */}
      <div style={{ padding: '32px 20px 0', textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 8 }}>Amount · USD</Eyebrow>
        <div style={{ fontFamily: 'var(--font-display)', fontVariantNumeric: 'tabular-nums lining-nums', letterSpacing: '-0.025em', fontSize: 72, lineHeight: 1, color: 'var(--ink-900)' }}>
          <span style={{ fontSize: 40, color: 'var(--fg-tertiary)', verticalAlign: 'top', marginRight: 4 }}>$</span>
          {display.int}
          <span style={{ color: 'var(--fg-tertiary)', fontSize: 44 }}>.{display.dec}</span>
        </div>
      </div>

      {/* Recipient */}
      <div style={{ padding: '24px 20px 0' }}>
        <CoveCard padding={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name={recipient} size={36} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--fg-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>To</div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>{recipient}</div>
            </div>
            <Icon name="chevronRight" size={18} stroke="var(--fg-tertiary)" />
          </div>
        </CoveCard>
      </div>

      {/* Recents chip strip */}
      <div style={{ padding: '14px 20px 0', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {recents.map(r => (
          <div
            key={r.name}
            onClick={() => setRecipient(r.name)}
            style={{
              flexShrink: 0,
              padding: '8px 14px 8px 8px',
              borderRadius: 999,
              background: recipient === r.name ? 'var(--forest-700)' : 'var(--paper-0)',
              color: recipient === r.name ? 'var(--paper-50)' : 'var(--ink-900)',
              boxShadow: recipient === r.name ? 'none' : 'inset 0 0 0 1px var(--ink-200)',
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 13, fontWeight: 500, cursor: 'pointer',
            }}>
            <Avatar name={r.name} size={24} />
            {r.name}
          </div>
        ))}
      </div>

      <div style={{ flex: 1 }} />

      {/* Keypad */}
      <div style={{ padding: '0 16px 12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {['1','2','3','4','5','6','7','8','9','.','0','back'].map(k => (
            <button
              key={k}
              onClick={() => press(k)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: k === 'back' ? 22 : 28,
                fontWeight: 400,
                background: 'transparent', border: 'none',
                padding: '14px 0', borderRadius: 14,
                cursor: 'pointer', color: 'var(--ink-900)',
                transition: 'background 120ms var(--ease-out)',
              }}
              onPointerDown={(e) => e.currentTarget.style.background = 'rgba(14,20,17,0.06)'}
              onPointerUp={(e) => e.currentTarget.style.background = 'transparent'}
              onPointerLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              {k === 'back' ? '⌫' : k}
            </button>
          ))}
        </div>
        <div style={{ padding: '8px 4px 0' }}>
          <Button variant="primary" size="lg" full trailIcon="arrowRight">
            Send <Amount value={Number(amount)} sign="" style={{ fontFamily: 'var(--font-mono)', color: 'inherit', marginLeft: 4 }} />
          </Button>
        </div>
      </div>
    </div>
  );
}

window.MoveScreen = MoveScreen;
