# Page Topology

1. `SiteHeader` — fixed utility bar + responsive navigation. Scroll-driven sticky state; click-driven mobile menu.
2. `HeroSection` — time-driven two-slide carousel, 2698×1200 source images, responsive fixed aspect ratio.
3. `CarFleetSection` — heading and eight car cards; 4×2 desktop, 2-column tablet, 1-column mobile.
4. `MotorFleetSection` — heading and eight motor cards on a pale city background; same responsive grid.
5. `AboutSection` — split editorial image/copy section; stacks on mobile.
6. `BenefitsSection` — four open feature columns; stacks to one column on mobile.
7. `CtaSection` — red image-backed contact banner with travel ornament.
8. `SiteFooter` — three-column gradient footer and fixed WhatsApp action.

The page uses native document scroll. The header overlays content via z-index 99. A fixed WhatsApp action stays at the lower-left. Source sections that are hidden (`wisata` and articles) remain out of scope because they are not visible at the target URL.
