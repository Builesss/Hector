---
name: interactive-love-timeline
description: >-
  Use this skill to build a scroll-triggered timeline showing relationship milestones with SVG path drawing animations.
---

# Interactive Love Timeline

Display the couple's history beautifully.

## Steps

1. Draw a continuous SVG path representing the journey between timeline nodes.
2. Use GSAP's DrawSVGPlugin or CSS `stroke-dasharray`/`stroke-dashoffset` to animate the line drawing as the user scrolls down.
3. Fade in text and photos for each milestone when the drawn line reaches their respective nodes.
4. Add small animated pings or glowing dots at each milestone point.
