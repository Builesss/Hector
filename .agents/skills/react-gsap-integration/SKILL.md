---
name: react-gsap-integration
description: >-
  Use this skill when implementing GSAP animations inside React components to ensure proper cleanup and context management.
---

# React GSAP Integration

Properly integrate GSAP animations in React to avoid memory leaks and strict-mode issues.

## Steps

1. Install `@gsap/react` and `gsap`.
2. Import and use the `useGSAP` hook instead of standard `useEffect` for all GSAP timelines and tweens.
3. Pass a `ref` to the target elements and define `useGSAP` with a scoped `ref` to ensure animations only affect the component's DOM.
4. Ensure `ScrollTrigger` instances are refreshed when component layouts change dynamically.
