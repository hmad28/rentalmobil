# MotorFleetSection Specification

## Overview
- Target: `src/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/MotorFleetSection.tsx`
- Screenshots: `source-motors.png`, `generated-motors.png`
- Interaction: hover + WhatsApp links.

## Layout and styles
- Section id `rental-motor`, 80px vertical padding, background image `motor-bg.webp` with white overlay ~88%.
- Header left aligned; outlined `Unit Lainnya` action right on desktop.
- 4-column × 2-row product grid, 24px gaps. Cards white, 8px radius, subtle shadow, hidden overflow.
- Fixed image frame uses local 1080×980 art. Bottom row displays name left and daily price right, then full-width outlined WhatsApp button.

## Content
- Beat Rp 80.000 / Hari; Scoopy Rp 90.000; Vario 125 Rp 100.000 (two variants); Vario 150 Rp 100.000; Vario 160 Rp 110.000; Stylo Rp 115.000; NMAX Rp 130.000.
- WhatsApp booking text includes each unit name and phone `62811261209`.

## Responsive and states
- Desktop 4 columns; tablet 2; mobile 1. Header action moves below copy on small screens.
- Card hover and button hover match car section. Background attachment must be normal on mobile to avoid jank.
