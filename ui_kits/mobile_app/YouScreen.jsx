/* global React, Icon, CoveCard, Avatar, Eyebrow */

function YouScreen() {
  const sections = [
    {
      title: 'Account',
      rows: [
        { icon: 'user', label: 'Personal info' },
        { icon: 'lock', label: 'Security & login' },
        { icon: 'bell', label: 'Notifications', meta: '8 on' },
      ],
    },
    {
      title: 'Money',
      rows: [
        { icon: 'pie', label: 'Budgets & goals' },
        { icon: 'repeat', label: 'Recurring', meta: '6 active' },
        { icon: 'card', label: 'Linked accounts', meta: '2' },
      ],
    },
    {
      title: 'Help',
      rows: [
        { icon: 'sparkles', label: 'About Cove AI', meta: 'New' },
        { icon: 'info', label: 'Contact support' },
        { icon: 'arrowUpRight', label: 'Sign out' },
      ],
    },
  ];
  return (
    <div style={{ paddingBottom: 110, minHeight: '100%' }}>
      <div style={{ padding: '28px 20px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar name="Alex Morgan" size={56} />
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '-0.02em' }}>Alex Morgan</div>
          <div style={{ fontSize: 13, color: 'var(--fg-secondary)' }}>alex@example.com · member since 2024</div>
        </div>
      </div>

      {sections.map(s => (
        <div key={s.title} style={{ padding: '8px 20px 0' }}>
          <Eyebrow style={{ padding: '12px 4px 8px' }}>{s.title}</Eyebrow>
          <CoveCard padding={0}>
            <div style={{ padding: '0 18px' }}>
              {s.rows.map((row, i, arr) => (
                <div key={row.label} style={{
                  display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--ink-100)' : 'none',
                }}>
                  <Icon name={row.icon} size={18} stroke="var(--ink-700)" />
                  <div style={{ flex: 1, fontSize: 15 }}>{row.label}</div>
                  {row.meta && (
                    <div style={{
                      fontSize: 11, padding: '2px 8px', borderRadius: 999,
                      background: row.meta === 'New' ? 'var(--iris-100)' : 'var(--ink-100)',
                      color: row.meta === 'New' ? 'var(--iris-700)' : 'var(--fg-secondary)',
                      fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>{row.meta}</div>
                  )}
                  <Icon name="chevronRight" size={16} stroke="var(--fg-tertiary)" />
                </div>
              ))}
            </div>
          </CoveCard>
        </div>
      ))}

      <div style={{ padding: '24px 20px 0', textAlign: 'center', fontSize: 11, color: 'var(--fg-tertiary)' }}>
        Cove Bank, N.A. · FDIC insured up to $250,000 · v2.4.1
      </div>
    </div>
  );
}

window.YouScreen = YouScreen;
