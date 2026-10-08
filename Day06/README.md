# DAY 06

- **Topic:** useEffect, lifecycle, API call concepts
- **ReactJS Concept:** useEffect, dependency array, cleanup, lifecycle mapping, fetch + AbortController basics
- **Insurance Functionality:** Customers load on mount from a mock source with simulated delay; active-only filter
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Run side effects after render
- Clean up subscriptions/requests
- Understand REST verbs and status codes

## What I learned
- Effects synchronise React with the outside world
- Always clean up
- Dependency array controls when the effect re-runs

## Why this approach is used
Isolating "fetching" in a service function makes swapping mock for HTTP trivial.

## Common mistakes
- Missing dependency array → infinite loops
- Not handling AbortError
- Setting state after unmount

## Interview questions
1. **useEffect vs useLayoutEffect?**
   Layout effect runs synchronously before paint; use rarely.
2. **Why does the effect run twice in dev?**
   StrictMode double-invokes to reveal missing cleanup.

## Practice task
Verify the cleanup cancels the in-flight request when you navigate away (add a console.log in the abort handler).

## Next day's topic
Day 07 - React Router + backend & database foundation

## Commit
`Day 06: Load customers with useEffect`
