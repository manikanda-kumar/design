# Fonts

Cove uses three families, all loaded from Google Fonts CDN:

- **Newsreader** — display serif (hero amounts, marketing)
- **Geist** — UI sans
- **Geist Mono** — tabular figures, IDs

## How to load

Add this `<link>` to the `<head>` of any HTML file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap" rel="stylesheet">
```

## Substitution flag

The brief did not provide a font file or specify a typeface. I selected Newsreader + Geist + Geist Mono as the closest match to the described "modern, AI-integrated, simplicity-focused" banking aesthetic. Both are free, modern, and well-supported on Google Fonts.

If you want a different stack (e.g. proprietary, or local `.woff2` files for offline use), let me know and I'll swap them in and update tokens.
