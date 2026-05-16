/* global React, Icon, Amount, Button, CoveCard, AiBadge, Eyebrow */
const { useState: useStateAsk, useRef: useRefAsk, useEffect: useEffectAsk } = React;

function AskScreen() {
  const [messages, setMessages] = useStateAsk([
    { who: 'cove', text: <>Hi Alex. I see your <strong>checking balance is $8,420.50</strong>. Ask me anything about your money.</>, suggestions: [
      'How much did I spend on food this month?',
      'When does my next paycheck land?',
      'Can I afford a $1,200 trip in May?',
    ]},
  ]);
  const [draft, setDraft] = useStateAsk('');
  const scrollRef = useRefAsk(null);

  useEffectAsk(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const respond = (q) => {
    const lower = q.toLowerCase();
    let reply;
    if (lower.includes('food') || lower.includes('groceries')) {
      reply = { who: 'cove', text: <>You spent <strong>$487.20 on food</strong> in March across 14 transactions. That's <strong>+18% vs. February</strong>. Groceries was the biggest jump — Whole Foods alone was $214.</>, breakdown: [
        { label: 'Groceries', value: 214.18, pct: 0.44 },
        { label: 'Restaurants', value: 198.22, pct: 0.41 },
        { label: 'Coffee', value: 74.80,  pct: 0.15 },
      ]};
    } else if (lower.includes('paycheck') || lower.includes('payroll')) {
      reply = { who: 'cove', text: <>Based on the last 3 deposits, your next paycheck from Acme Co. should land <strong>Friday, Mar 28 around 9 AM</strong>. Typical amount: <strong>~$3,240</strong>.</> };
    } else if (lower.includes('trip') || lower.includes('afford') || lower.includes('1,200')) {
      reply = { who: 'cove', text: <>If you spent <strong>$1,200 in May</strong>, your projected end-of-month balance would be <strong>$2,140</strong> — comfortably above your $500 cushion. You could afford it.</> };
    } else {
      reply = { who: 'cove', text: <>Got it. I'll dig into that — give me a sec.</> };
    }
    setMessages(m => [...m, { who: 'user', text: q }, reply]);
  };

  const send = () => {
    if (!draft.trim()) return;
    respond(draft);
    setDraft('');
  };

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', paddingBottom: 110, background: 'linear-gradient(180deg, var(--paper-100) 0%, var(--iris-100) 220%)' }}>
      <div style={{ padding: '8px 20px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--iris-100)', color: 'var(--iris-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="sparkles" size={18} fill="currentColor" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Ask Cove</div>
          <div style={{ fontSize: 11, color: 'var(--fg-secondary)' }}><AiBadge style={{ fontSize: 9, padding: '1px 6px' }}>AI · beta</AiBadge> &nbsp; trained on your activity</div>
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '14px 16px 12px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {messages.map((m, i) => (
          <Message key={i} message={m} onSuggest={respond} />
        ))}
      </div>

      <div style={{ padding: '0 16px 16px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'var(--paper-0)', borderRadius: 999,
          padding: '6px 6px 6px 18px',
          boxShadow: 'var(--shadow-2)',
        }}>
          <input
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Ask about your money…"
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontFamily: 'inherit', fontSize: 14, color: 'var(--ink-900)',
            }}
          />
          <button onClick={send} style={{
            background: 'var(--iris-500)', color: 'white', border: 'none',
            width: 36, height: 36, borderRadius: 999, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name="arrowRight" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Message({ message, onSuggest }) {
  if (message.who === 'user') {
    return (
      <div style={{ alignSelf: 'flex-end', maxWidth: '82%', background: 'var(--ink-900)', color: 'var(--paper-50)', padding: '10px 14px', borderRadius: '16px 16px 4px 16px', fontSize: 14, lineHeight: 1.45 }}>
        {message.text}
      </div>
    );
  }
  return (
    <div style={{ alignSelf: 'flex-start', maxWidth: '90%' }}>
      <div style={{ background: 'var(--paper-0)', padding: '12px 14px', borderRadius: '16px 16px 16px 4px', fontSize: 14, lineHeight: 1.5, color: 'var(--ink-900)', boxShadow: 'var(--shadow-1)' }}>
        {message.text}
        {message.breakdown && (
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {message.breakdown.map(b => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1, fontSize: 12, color: 'var(--fg-secondary)' }}>{b.label}</div>
                <div style={{ flex: 2, height: 6, background: 'var(--ink-100)', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ width: `${b.pct * 100}%`, height: '100%', background: 'var(--iris-500)' }} />
                </div>
                <Amount value={b.value} sign="" style={{ fontSize: 12 }} />
              </div>
            ))}
          </div>
        )}
      </div>
      {message.suggestions && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8, alignItems: 'flex-start' }}>
          {message.suggestions.map(s => (
            <button key={s} onClick={() => onSuggest(s)} style={{
              fontFamily: 'inherit', fontSize: 12, color: 'var(--iris-700)',
              background: 'var(--paper-0)', border: '1px solid var(--iris-100)',
              borderRadius: 999, padding: '6px 12px', cursor: 'pointer',
              textAlign: 'left',
            }}>{s}</button>
          ))}
        </div>
      )}
    </div>
  );
}

window.AskScreen = AskScreen;
