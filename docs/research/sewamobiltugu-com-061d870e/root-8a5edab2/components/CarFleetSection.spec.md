# CarFleetSection Specification

## Overview
- Target: `src/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/CarFleetSection.tsx`
- Screenshots: `source-cars.png`, `generated-cars.png`
- Interaction: hover + WhatsApp links.

## Layout and styles
- Section id `rental-mobil`, padding 80px 0 96px, white-to-red vertical background.
- Inner width 1176px. Eyebrow red uppercase 13px; heading 40px/1.2; body 17px muted.
- Grid: 4 columns desktop, 2 tablet, 1 mobile; gap 24px desktop and 18px mobile.
- Source desktop card 276×472. Generated reference uses 8px radius, warm-white panel, subtle shadow.
- Image is local 1080×980 art, fixed aspect ratio 1080/980, full card width.
- Price block uses 2 equal columns with a faint center divider. Labels 13–14px gray; prices 15–16px weight 700 ink.
- Outlined red WhatsApp button nearly full width, 42px tall.

## Content
- Calya Matic: Rp 300.000 / Hari; Rp 650.000 / Hari.
- Xenia FWD Manual: Rp 300.000; Rp 650.000.
- Brio Matic: Rp 325.000; Rp 650.000.
- Avanza FWD Matic: Rp 400.000; Rp 700.000.
- Innova Reborn: Rp 500.000; Rp 825.000.
- Innova New Reborn: Rp 500.000; Rp 825.000.
- Xpander: Rp 550.000; Rp 850.000.
- Zenix Matic: Rp 650.000; Rp 1.000.000.
- WhatsApp URL includes unit name and phone `62811261209`.

## Responsive and states
- Desktop 4×2. Tablet 2×4. Mobile source card is ~352px wide within 19px gutters; clone uses `width:100%` within 20px gutters.
- Hover: translateY(-4px), shadow `0 18px 45px rgba(90,0,0,.14)`. Button fills red and becomes white.
