# HeroSection Specification

## Overview
- Target: `src/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/HeroSection.tsx`
- Screenshots: `source-hero.png`, `generated-hero.png`
- Interaction: time-driven fade carousel with manual controls.

## Structure and styles
- Starts after the 115px header desktop / 105px mobile.
- Source container 1440×640.47 at 1440; mobile 390×173.45. Preserve source ratio 2698:1200.
- Slides use local `hero-1.webp` and `hero-2.webp`, `object-fit:cover`, full width.
- Add invisible/low-profile previous and next buttons at horizontal edges and two dot controls near bottom center.
- Use a 450–600ms opacity transition; do not add boxed copy over the image because wording is baked into the source artwork.

## Behaviors
- Autoplay every 5 seconds. Pause on pointer hover and when reduced motion is requested.
- Buttons and dots select a slide; accessible labels identify previous/next and slide index.

## Responsive
- Maintain the exact image ratio at all widths. At mobile, do not crop horizontally; the source's mobile readability is accepted as reference behavior.
