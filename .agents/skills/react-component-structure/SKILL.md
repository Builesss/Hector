---
name: react-component-structure
description: >-
  Use this skill to ensure all React components follow clean, modular functional component architecture.
---

# React Component Structure

Best practices for building React components in this project.

## Steps

1. Always use functional components and React Hooks (`useState`, `useEffect`).
2. Keep components small and focused on a single responsibility (e.g., isolate a `FloatingHeart` component from the `HeroSection`).
3. Destructure props directly in the function signature for readability: `const PhotoGallery = ({ photos }) => { ... }`.
4. Separate complex animation logic or side effects into custom hooks (e.g., `useTypewriterEffect`).
