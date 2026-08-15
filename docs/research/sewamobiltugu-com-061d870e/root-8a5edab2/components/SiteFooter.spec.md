# SiteFooter Specification

## Overview
- Target: `src/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/SiteFooter.tsx`
- Screenshots: `source-footer.png`, `generated-footer.png`
- Interaction: link hover + fixed WhatsApp action.

## Layout and styles
- Footer id `kontak`, background `linear-gradient(135deg,#a30f1f 0%,#1a1a1a 100%)`, white type.
- Inner max-width 1176px, 3 columns roughly 50/30/20, padding 64px 0 24px.
- Footer logo local, ~220px wide. Description max-width 560px, 15px/1.7.
- Contact and menu headings 20px, links/body 14–15px. Use Lucide icons for phone, WhatsApp-like message, map pin, Facebook/Instagram/Youtube where available.
- Copyright centered below columns with thin translucent top rule.
- Fixed lower-left WhatsApp button: 58px circle desktop, 54px mobile, green `#25d366`, white icon, strong shadow, z-index 80.

## Responsive and states
- Tablet uses 2-column wrapping; mobile stacks all columns with 32px gaps.
- Link hover shifts to pale pink and moves 2px right. Fixed action scales to 1.06 on hover.
