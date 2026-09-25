---
name: react-performance-optimization
description: >-
  Use this skill to optimize React component rendering and lazy load heavy media resources.
---

# React Performance Optimization

Ensure 60fps animations and fast loading times.

## Steps

1. Use `React.lazy()` and `Suspense` to code-split heavy sections (e.g., loading the Video Modal only when requested).
2. Wrap expensive pure components with `React.memo()` to prevent unnecessary re-renders when parent states change.
3. Memoize complex calculations or object props passed to children using `useMemo` and `useCallback`.
4. Optimize images using standard web formats (WebP) and apply `loading="lazy"` to off-screen images in the gallery.
