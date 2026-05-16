/* global React, ReactDOM, IOSDevice, TabBar, HomeScreen, MoveScreen, CardScreen, AskScreen, YouScreen */
const { useState: useStateApp } = React;

function App() {
  const [tab, setTab] = useStateApp('home');

  const Screen = (() => {
    switch (tab) {
      case 'home': return <HomeScreen goTo={setTab} />;
      case 'move': return <MoveScreen />;
      case 'card': return <CardScreen />;
      case 'ask':  return <AskScreen />;
      case 'you':  return <YouScreen />;
      default:     return null;
    }
  })();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper-100)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 32 }}>
      <IOSDevice width={402} height={874}>
        <div style={{ position: 'relative', height: '100%', background: 'var(--paper-100)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', WebkitOverflowScrolling: 'touch', paddingTop: 54 }}>
            {Screen}
          </div>
          <TabBar active={tab} onChange={setTab} />
        </div>
      </IOSDevice>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
