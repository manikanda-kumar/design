# Cove Design System

> Modern banking, simply made.

Cove is a fictional, modern mobile-first banking product. The brand is built around three values: **simplicity** (less to think about), **security** (calm authority, never paranoia), and **clarity** (every number, fee, and movement is legible at a glance). Cove ships intelligent features powered by AI — categorization, conversational money queries, predictive cashflow — but the AI is always framed as a quiet assistant, never a flashy gimmick.

This design system gives an agent everything required to design Cove-branded surfaces: design tokens, type rules, color rules, motion guidance, iconography conventions, copy voice, and a working UI kit of the mobile app.

---

## Sources

This system was bootstrapped from a single placeholder repo (the rest is original work by the design agent — see **CAVEATS** at the end):

- GitHub: <https://github.com/manikanda-kumar/design> — explore here if you want to extend or replace the base.

There is no production codebase to mirror; Cove's visual language was authored fresh against the brief: *"modern banking mobile app design with a focus on simplicity, security, and user experience. Extensive research and user testing, AI tools for design, and a focus on accessibility."*

---

## Index

```
.
├── README.md                  ← this file
├── SKILL.md                   ← skill manifest (Agent Skills compatible)
├── colors_and_type.css        ← all design tokens (color, type, spacing, radii, shadow, motion)
├── fonts/                     ← font loading instructions (Google Fonts CDN; see note)
├── assets/                    ← logo, brand marks, illustration placeholders
├── preview/                   ← Design System tab cards (swatches, type specimens, components)
├── ui_kits/
│   └── mobile_app/            ← React/JSX UI kit + interactive index.html
└── slides/                    ← (none — no deck template was provided)
```

---

## CONTENT FUNDAMENTALS

### Voice
Cove speaks like a **calm, well-informed friend who happens to work in finance**. Plain English, no jargon, never patronising. The tone is warm but precise — money is a serious topic, and people deserve straight answers without being talked down to.

### Person
- **Second person ("you") for the user**, always. *"You'll see this in your statement next Tuesday."*
- **First person plural ("we") for Cove**, sparingly, in moments of accountability. *"We held this payment because it didn't match your usual pattern — tell us if it's fine."*
- Never "the user", "the customer", or "valued member".

### Casing
- **Sentence case everywhere** — buttons, headings, menus, system messages.
  - Yes: `Move money`, `Send a payment`, `Spending this month`
  - No: `Move Money`, `MOVE MONEY`, `Send A Payment`
- Two exceptions: legal entity names (`Cove Bank, N.A.`) and the eyebrow micro-label style (`SAVINGS · 4.2% APY`) which uses uppercase tracking on purpose.

### Numbers and currency
- Currency always uses tabular mono digits (`.amount` class). Decimal alignment matters more than you think on transaction lists.
- Show `$1,240.00` not `$1240`. Show negative outflows with an em-dash prefix in coral: `— $42.18`. Positive inflows in mint: `+ $1,200.00`.
- Round only in marketing surfaces, never in product.

### Emoji
**No emoji in product UI.** Cove uses real iconography (Lucide). Emoji is acceptable only in user-generated content (transaction memos, chat messages to support) — there it's pass-through, never authored by us.

### Punctuation & rhythm
- Em-dashes are welcome — they give copy a conversational rhythm.
- Avoid exclamation marks. Money apps that yell feel cheap.
- Lists prefer fragments to full sentences; the eye scans them fast.

### AI moments — how Cove writes them
When Cove surfaces AI-generated insight or suggestion, copy is **tentative, sourced, and dismissable**:
- ✅ *"Looks like you spent ~18% more on groceries this month. Want a budget alert?"*
- ✅ *"Based on your last 3 paychecks, your next deposit should land Friday."*
- ❌ *"Your spending is out of control."* (judgmental)
- ❌ *"I will help you save money!"* (overpromising, exclamation)

Every AI surface carries an `.ai-badge` ("AI · auto-suggest") so the user always knows when they're reading a model's output vs. a fact.

### Microcopy examples
| Context              | Cove writes                                          |
|---------------------|-------------------------------------------------------|
| Empty state         | `Nothing here yet — your first transaction will show up the moment it lands.` |
| Error (transfer)    | `That didn't go through. Your money is safe — try again?` |
| Confirmation        | `Sent. The other side will see it within 10 seconds.` |
| Auth challenge      | `Quick check — confirm it's you with Face ID.` |
| Pull-to-refresh     | `Up to date · 2 sec ago` |
| Negative balance    | `You're $4.20 below zero. We won't charge a fee — just heads up.` |

---

## VISUAL FOUNDATIONS

### Type
- **Display:** *Newsreader* — an editorial serif with warmth and a quiet authority. Used for hero amounts (`$3,240.50`), marketing headlines, and big-quote moments.
- **UI sans:** *Geist* — a clean, modern neo-grotesque. Used for all UI chrome, body copy, buttons, labels.
- **Mono / numeric:** *Geist Mono* — tabular figures. Used for **every** currency amount in lists, transaction IDs, account numbers, and any AI-generated code/data output.

Type pairs with intent: serif numbers (warm, human) live on hero balance cards; mono numbers (precise, machine) live on transaction rows. Never mix the two on a single number.

### Color
- **Forest** (`#1B4A3C`) is the primary brand. It signals trust, calm, and the natural world — the opposite of the gambling-red and slot-machine-green of consumer fintech.
- **Cream** (`#F5F2EA`) is the canvas. Pure white is reserved for elevated surfaces (cards, sheets). The warm canvas gives the product a paper-like, document-y feel that matches the seriousness of banking.
- **Mint** (`#2FB87F`) is positive — inflows, success, success badges.
- **Coral** (`#E8654A`) is negative — outflows, alerts. Note: outflows are NOT red; we explicitly avoid the urgent-red typical of bank statements. Coral is warm-warning, not alarm.
- **Amber** (`#D99416`) is pending — in-flight transfers, awaiting confirmation.
- **Iris** (`#6A5EE3`) is reserved exclusively for AI moments. Never use Iris for anything else — that's the contract that lets the user trust the AI label.

### Backgrounds
- The default page background is cream (`--paper-100`). Pure white is for cards on top of it.
- **No gradient backgrounds anywhere** except for one deliberate exception: the "physical card" component, which uses a single subtle radial-gradient sheen to suggest plastic. No purple-to-pink AI gradient slop, ever.
- No textures, no grain, no patterns. The surfaces are flat and clean.
- One full-bleed photographic image is allowed at the top of marketing surfaces only — warm, soft, natural light, never stock-y.

### Spacing
- 4px base scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80`. See `--space-*` tokens.
- Mobile screen edges: 20px gutters.
- Card internal padding: 20px or 24px.
- Stacked items in a list: 12px vertical rhythm.

### Corner radii
Cove rounds generously but not cartoonishly:
- Inputs, buttons: **12px** (`--radius-md`)
- Cards: **18px** (`--radius-lg`)
- Large cards, modals, sheets: **24px** (`--radius-xl`)
- Physical-card mockups: **32px** (`--radius-2xl`)
- Tags, pills, badges: full-pill **999px**

### Borders
- Default hairline: `1px solid var(--border-subtle)` — almost invisible, just enough to separate.
- Strong: `1px solid var(--border-strong)` for input focus or emphasis.
- Borders preferred over shadows for separating list rows; shadows preferred for elevating discrete cards.

### Shadow / elevation system
Four soft elevation tokens (`--shadow-1` through `--shadow-4`). All are **low-spread, near-black with low alpha, never dark or harsh**. The brand is warm and paper-like; shadows should look like a thin sheet hovering, not a heavy object.

```
shadow-1  ← list rows on hover
shadow-2  ← default card
shadow-3  ← modal, sheet, floating action
shadow-4  ← dragged / picked-up element
```

There's also an **inset shadow** (`--shadow-inset`) used on sunken inputs and the in-amount keypad to suggest physical depression.

### Animation
- Default easing: `--ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`) — strong start, soft settle. Feels confident.
- Durations: 120ms for hover state changes, 200ms for component state changes, 320ms for sheet/modal enters, 520ms for hero/celebratory moments.
- **No bouncy springs by default.** A spring (`--ease-spring`) is reserved for the moment a transfer completes successfully — it's the ONE moment of joy.
- Fades cross-fade through 0.6 opacity, never through black.
- Numbers animate by counting up, not by sliding — see `useCountUp` hook in the UI kit.

### Hover / press states
- **Hover (web only — most surfaces are mobile):** background darkens by ~4% via a black overlay at 4% opacity. Never use a brand color tint.
- **Press (mobile primary):** the element shrinks to `scale(0.97)` for 120ms with `--ease-out`. Combined with a 4% darken on backgrounds.
- Focus rings: 2px ring in `--forest-700` with 2px offset. Always visible — never `outline: none` without replacement.

### Transparency & blur
- Sparingly. The only place blur is used is the floating action bar over scrollable transaction lists: `backdrop-filter: blur(20px) saturate(140%)` on a 75%-opaque cream surface.
- Modals and sheets use a **solid scrim** (`rgba(14, 20, 17, 0.4)`), never a blurred backdrop — clarity over flash.

### Cards
A canonical Cove card has:
- `background: var(--paper-0)` (pure white on the cream canvas)
- `border-radius: 18px`
- `box-shadow: var(--shadow-2)`
- `padding: 20px` or `24px`
- **No border by default** — the shadow + contrast against cream is enough separation.

### Layout rules
- Fixed elements on mobile: the bottom tab bar (88px tall including safe-area) and the top app bar (56px). Everything else scrolls.
- Content max-width on web: 1200px. Marketing hero max-width: 1440px.
- Mobile screens are designed at 390×844 (iPhone 14/15).

### Color vibe of imagery
Photography should feel: warm-natural, soft window-light, neutral skin tones, very slight desaturation in the highlights, never high-contrast or saturated. Think morning kitchen, not nightclub. Black-and-white is acceptable for portraits in editorial moments.

---

## ICONOGRAPHY

Cove uses **[Lucide icons](https://lucide.dev/)** as its icon system. Lucide is a permissively-licensed (ISC) fork of Feather Icons with a much fuller catalog, and its line weight (1.5px stroke at 24px) matches Cove's quiet, low-contrast UI perfectly.

> ⚠️ **Substitution flag:** No proprietary icon set was provided by the user. Lucide was chosen as the closest fit for a modern, minimal banking app. If Cove ships a custom icon family later, this section should be updated.

### Loading
Lucide is loaded from CDN in every UI kit page:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<script>lucide.createIcons();</script>
```

Then use icons as: `<i data-lucide="arrow-right"></i>` or via the React wrapper.

### Sizing
- **16px** — inline with body text (`fs-body-sm` rows).
- **20px** — default for buttons, list rows, tab bar inactive.
- **24px** — section headers, tab bar active.
- **32px** — empty states, feature callouts.
- Always with `stroke-width: 1.5` at 20–24px. At 16px use `stroke-width: 2`.

### Approved icons (canonical Cove set)
Navigation: `home`, `arrow-up-down`, `credit-card`, `wallet`, `sparkles` (AI tab)
Actions: `plus`, `arrow-right`, `send`, `qr-code`, `search`, `filter`
Status: `check-circle-2`, `clock` (pending), `triangle-alert`, `info`
Money: `trending-up`, `trending-down`, `pie-chart`, `repeat` (recurring)
AI: `sparkles` (the ONE icon that signals AI — paired with iris color)

### Color
Icons inherit `currentColor` and follow the text color of their context. The only intentional color contracts:
- AI surfaces: icon in `var(--fg-ai)` (iris)
- Positive amount rows: icon in `var(--fg-positive)` (mint)
- Negative amount rows: icon in `var(--fg-negative)` (coral)
- Everywhere else: icon in `var(--fg-secondary)` or `var(--fg-primary)`

### Logo / brand mark
The Cove wordmark is a custom lockup of "cove" in Newsreader Italic, with a subtle wave-mark above the "o". See `assets/logo.svg` (wordmark) and `assets/mark.svg` (the wave glyph alone, used as the app icon).

### Emoji
**Not used** in any Cove-authored surface. The only emoji that ever appears in the app is whatever the user typed into a memo field — passed through, never composed by Cove.

### Unicode characters
- `·` (middle dot) is used as the separator in eyebrow/meta lines: `SAVINGS · 4.2% APY`
- `—` (em dash) is used in copy and as the prefix on negative amounts.
- `→` is **never** used as a chevron — use the Lucide `arrow-right` SVG instead, for crispness.

---

## CAVEATS & ASK

**The brief gave a one-line product description and an empty placeholder GitHub repo.** Every visual decision in this system is original work by the design agent — there is no existing Cove brand to mirror. That means:

1. **Brand name "Cove" is invented.** If you have a real product name, point me at it and I'll rename + rebrand.
2. **Fonts are loaded from Google Fonts CDN**, not bundled as `.ttf`/`.woff2` files. Newsreader and Geist/Geist Mono are all available on Google Fonts. If you need the files bundled locally, ask and I'll download + bundle them.
3. **Icon system is Lucide**, substituted because no custom icon set was provided. Easy to swap later.
4. **Logo is a placeholder wordmark** I designed in SVG. If there's an existing logo, drop it in `assets/` and I'll rewire references.
5. **No slide deck or marketing materials were provided**, so `slides/` is intentionally empty.

**Iterate with me.** The fastest things to nail down next:
- Brand name + tagline (am I close?)
- Primary color — does Forest read as "Cove" to you, or do you want it bluer / warmer / bolder?
- AI presence — should the Iris accent be more prominent, or even more reserved than it is here?

The Design System tab on the right has every token and component as a clickable card. Skim it, react to what feels off, and I'll iterate.
