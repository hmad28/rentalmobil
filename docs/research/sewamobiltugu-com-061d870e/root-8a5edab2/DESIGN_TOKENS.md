# Design Tokens

## Extracted source values

- Body font: `Laila, serif`; source also loads `Lobster Two` for small decorative labels.
- Primary red: `rgb(169, 19, 19)` / `#a91313`.
- Footer red: `rgb(163, 15, 31)` / `#a30f1f`.
- Ink: `#060405`; body gray: `rgb(124, 137, 141)` / `#7c898d`.
- White: `#fff`; warm panel gray: `#eff2f1` to `#f1f1f1`.
- Page container: 1176px at 1440px viewport (132px side margins).
- Source card: 276px wide × 472px high; shadow `0 2px 6px rgba(0,0,0,.05)`; transition `300ms`.
- Source section padding: 48px top/bottom; benefits top padding 72px.
- Header: utility bar 45px + navigation 70px; navigation becomes fixed at `top:0` after scrolling and gains `0 10px 35px rgba(0,0,0,.1)`.
- Footer background: `linear-gradient(135deg,#a30f1f 0%,#1a1a1a 100%)`.

## Generated-reference refinements

- Display text: 48–60px desktop, 34–42px tablet, 30–36px mobile.
- Section headings: 38–44px desktop, 28–32px mobile.
- Body: 16–18px desktop and 15–16px mobile with 1.65 line height.
- Card radius: 8px; CTA radius: 999px; CTA banner radius: 16px.
- Desktop gutters: 64px minimum; mobile gutters: 20px.
- Motion: 250–350ms hover elevation and button fill; reveal uses small 16px translate and opacity only.
