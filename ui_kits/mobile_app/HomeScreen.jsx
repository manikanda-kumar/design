/* global React, Icon, Amount, useCountUp, Button, CoveCard, TransactionRow, AiSuggestion, Eyebrow, Avatar */

function HomeScreen({ goTo }) {
  const target = 8420.50;
  const animated = useCountUp(target, 600);
  const transactions = [
    { id: 1, name: 'Payroll · Acme Co.',  category: 'Direct deposit', when: 'Today, 9:14',  amount:  3240.00, icon: 'arrowDownLeft' },
    { id: 2, name: 'Whole Foods',         category: 'Groceries',       when: 'Yesterday',    amount: -42.18,   icon: 'arrowUpRight' },
    { id: 3, name: 'Wire to Sarah Chen',  category: 'Transfer',        when: 'Clears Tue',   amount: -250.00,  status: 'pending' },
    { id: 4, name: 'Spotify',             category: 'Subscription',    when: 'Mar 12',       amount: -11.99,   icon: 'repeat' },
    { id: 5, name: 'Uber',                category: 'Transport',       when: 'Mar 11',       amount: -18.42,   icon: 'arrowUpRight' },
  ];
  return (
    <div style={{ paddingBottom: 110, background: 'var(--paper-100)', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ padding: '8px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar name="Alex Morgan" size={36} />
          <div>
            <div style={{ fontSize: 12, color: 'var(--fg-secondary)' }}>Good morning,</div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Alex</div>
          </div>
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: 999, background: 'var(--paper-0)',
          boxShadow: 'var(--shadow-1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="bell" size={20} />
        </div>
      </div>

      {/* Balance card */}
      <div style={{ padding: '20px 20px 0' }}>
        <CoveCard padding={24}>
          <Eyebrow>Checking · ····4218</Eyebrow>
          <div style={{ marginTop: 6 }}>
            <Amount value={animated} kind="hero" size={48} sign="" />
          </div>
          <div style={{ marginTop: 6, fontSize: 13, color: 'var(--fg-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Icon name="checkSmall" size={14} stroke="var(--mint-700)" />
            Available · synced just now
          </div>
        </CoveCard>
      </div>

      {/* Quick actions */}
      <div style={{ padding: '14px 20px 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
        {[
          { label: 'Send',     icon: 'send',    onClick: () => goTo('move') },
          { label: 'Request',  icon: 'arrowDownLeft' },
          { label: 'Scan',     icon: 'qr' },
          { label: 'Insights', icon: 'pie',     onClick: () => goTo('ask') },
        ].map(a => (
          <div key={a.label} onClick={a.onClick} style={{
            background: 'var(--paper-0)', borderRadius: 14, padding: '12px 0',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            boxShadow: 'var(--shadow-1)', cursor: 'pointer',
          }}>
            <Icon name={a.icon} size={20} stroke="var(--forest-700)" />
            <div style={{ fontSize: 11, fontWeight: 500 }}>{a.label}</div>
          </div>
        ))}
      </div>

      {/* AI suggestion */}
      <div style={{ padding: '16px 20px 0' }}>
        <AiSuggestion
          headline={<>You spent <strong>~18% more</strong> on groceries this month. Want a budget alert if it happens again?</>}
          meta="last 90 days"
          action="Set alert"
          secondaryAction="Dismiss"
        />
      </div>

      {/* Recent activity */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 8px' }}>
          <div style={{ fontSize: 17, fontWeight: 600 }}>Recent activity</div>
          <div style={{ fontSize: 13, color: 'var(--forest-700)', fontWeight: 500 }}>See all</div>
        </div>
        <CoveCard padding={0}>
          <div style={{ padding: '0 18px' }}>
            {transactions.map((t, i) => (
              <TransactionRow key={t.id} tx={t} divider={i < transactions.length - 1} />
            ))}
          </div>
        </CoveCard>
      </div>
    </div>
  );
}

window.HomeScreen = HomeScreen;
