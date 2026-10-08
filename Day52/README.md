# DAY 52

- **Topic:** Code Splitting and Lazy Loading
- **ReactJS Concept:** React.lazy + Suspense, route-level splitting, loading fallbacks inside the layout, lazy charts, build output analysis
- **Insurance Functionality:** A claims officer should not download the motor quote engine, charts or admin screens to open the claims list
- **Backend Functionality:** No change
- **Database Functionality:** No change

## Learning objectives
- Split by route
- Show a loader while a chunk downloads
- Read the Vite build report
- Know what NOT to split

## What I learned
- Split by route first
- Keep the Suspense boundary inside the layout
- Chunk size reports are part of review

## Why this approach is used
Load what the user needs now, defer the rest.

## Common mistakes
- Lazy loading the layout itself
- Suspense at the app root (whole screen blinks)
- Splitting tiny components

## Interview questions
1. **How does React.lazy work?**
   It wraps a function returning a dynamic import(); React suspends rendering until the promise resolves and Suspense shows the fallback.

## Practice task
Prefetch a page chunk when the user hovers its sidebar link.

## Next day's topic
Day 53 - Security Hardening

## Commit
`Day 52: Add route-level code splitting`
