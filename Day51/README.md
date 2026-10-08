# DAY 51

- **Topic:** Performance Optimization
- **ReactJS Concept:** React.memo, useMemo, useCallback, useDeferredValue, the Profiler component and React DevTools Profiler; measure first, optimise second
- **Insurance Functionality:** Large policy and customer lists must stay responsive while agents filter and select rows
- **Backend Functionality:** No change (server-side paging and DB filtering already keep payloads small)
- **Database Functionality:** No change

## Learning objectives
- Find unnecessary re-renders
- Apply memoisation where it pays off
- Keep typing responsive with deferred values
- Measure with the Profiler

## What I learned
- memo needs stable props
- Defer heavy derived work
- Profile before optimising
- Do not call setState from Profiler.onRender

## Why this approach is used
Most apps are fast enough; optimise the few hot spots a profiler points to.

## Common mistakes
- memo everywhere without measuring
- Inline arrow props that defeat memo
- Setting state inside Profiler.onRender
- Using index as key in reorderable lists

## Interview questions
1. **When does React.memo not help?**
   When props change every render (new object/function identities), when the component is cheap, or when children read context that changes.

## Practice task
Add list virtualisation (render only visible rows) and compare commit times for 10,000 rows.

## Next day's topic
Day 52 - Code Splitting and Lazy Loading

## Commit
`Day 51: Add performance optimisation lab and memoised table rows`
