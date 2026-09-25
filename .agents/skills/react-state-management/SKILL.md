---
name: react-state-management
description: >-
  Use this skill for managing global UI state across the romantic web app (like audio playing state or modal visibility).
---

# React State Management

Manage state efficiently without over-engineering.

## Steps

1. Use React's Context API (`createContext`, `useContext`) for global UI states, such as a boolean `isAudioPlaying` so any component can pause/play the romantic background music.
2. For complex shared state, consider a lightweight store like Zustand.
3. Keep localized state (like a specific photo being hovered) inside its respective component using `useState`.
4. Avoid prop-drilling more than 2 levels deep.
