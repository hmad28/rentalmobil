# Behaviors

- Header at scroll 0: utility bar visible, navigation fixed at `top:45px`, no shadow.
- Header after ~115px scroll: utility bar leaves view; navigation moves to `top:0` and gains the extracted shadow. Implement with a passive scroll listener.
- Mobile menu: at 390px the navigation button expands a 390×230px block below the 70px bar; links stack vertically. Close after navigation and preserve `aria-expanded`.
- Hero: Bootstrap source carousel cycles between two slides over time and supports previous/next controls. Clone uses a 5-second timer, fade transition, and accessible controls.
- Cards: hover is visual only; source declares a 300ms transition. Clone raises cards by 4px and strengthens shadow, while preserving links as WhatsApp anchors.
- CTA/buttons: foreground/background swap over ~250ms; all booking/contact actions open WhatsApp in a new tab.
- Responsive: desktop 1440 uses four product columns; tablet uses two; 390px uses one 352px-wide card. Benefits collapse from four columns to one. About stacks image then copy.
- No smooth-scroll library was detected. Hidden destination and article sections are not implemented.
