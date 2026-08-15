# SiteHeader Specification

## Overview
- Target: `src/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/SiteHeader.tsx`
- Screenshots: `source-hero.png`, `mobile-menu-open.png`, `generated-hero.png`
- Interaction: scroll-driven sticky state + click-driven mobile menu.

## Structure and styles
- Header z-index 99. Utility bar 45px desktop / 35px mobile, `#a91313`, white 12–14px text.
- Navigation 70px, white, full width. Inner max-width 1176px; logo ~213×50 source, render 220×52 max.
- Desktop menu is horizontal with 32px gaps and 15–16px dark ink text. Active/hover is red.
- Primary CTA is red, 46px tall, rounded full, white label and arrow.
- Mobile <1024px: logo 180px max, hamburger visible, desktop CTA hidden. Expanded menu is a white full-width list below nav, roughly 230px high, with 44px tap targets.

## Behaviors
- At scroll 0 nav top is 45px and shadow none.
- Above 100px scroll nav top is 0 and shadow becomes `0 10px 35px rgba(0,0,0,.1)`.
- Mobile button toggles menu, icon changes Menu→X, updates `aria-expanded`.
- Links: Home `#top`, Rental Mobil `#rental-mobil`, Rental Motor `#rental-motor`, Tentang Kami `#tentang-kami`, Kontak `#kontak`.

## Responsive
- 1440: utility content and nav aligned to 1176px container.
- 768/390: compact utility, menu hidden behind hamburger; no horizontal overflow.
