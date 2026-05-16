# Cove · Mobile App UI Kit

A pixel-leaning, interactive recreation of the Cove banking app. This is a **UI kit** — visuals + click-through, but no real auth, no real money movement. Use it as a starting point for new screens or for marketing mocks.

## Run
Open `index.html` directly. Everything is React + Babel inline; no build step.

## Files
- `index.html` — orchestrator. Loads tokens, fonts, and all components into a single iPhone device frame with working tab navigation.
- `ios-frame.jsx` — starter device frame (iPhone, status bar, home indicator).
- `components.jsx` — shared building blocks: `Button`, `Card`, `TransactionRow`, `TabBar`, `AiSuggestion`, `Avatar`, `Icon`, `useCountUp`.
- `HomeScreen.jsx` — balance, AI insight, recent activity, quick actions.
- `MoveScreen.jsx` — amount keypad and recipient picker.
- `CardScreen.jsx` — physical card art + lock/freeze controls + card details.
- `AskScreen.jsx` — conversational AI surface (Iris-themed).
- `YouScreen.jsx` — profile + settings.

## Conventions
- All money is rendered via the `<Amount>` component or the `amount` mono class — never a plain number.
- All icons come from inline SVG matching Lucide's 24/1.5 stroke style.
- Every screen consumes design tokens from `../../colors_and_type.css` — never hardcoded colors.

## What it does not do
- No real form validation, real keyboards, or platform gestures beyond a basic tap-to-route tab bar.
- No state persistence across reloads. (If we ship a v2 we'll wire localStorage.)
- No dark mode yet — Cove's brand has a clear day-mode-first stance, but a dark theme is a sensible next pass.
