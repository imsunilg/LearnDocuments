# DAY 15

- **Topic:** Custom hooks
- **ReactJS Concept:** Rules of Hooks, extracting logic into custom hooks (useApi, useDebounce, useLocalStorage, useCustomers)
- **Insurance Functionality:** Customer search is debounced; fetching logic extracted from the page into hooks
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Understand the Rules of Hooks
- Extract reusable stateful logic
- Debounce user input
- Cancel stale requests inside a hook

## What I learned
- Hooks compose
- Logic reuse without HOCs
- Debounce = timer + cleanup

## Why this approach is used
Hooks keep components declarative; Day 38 swaps useApi for TanStack Query without touching pages much.

## Common mistakes
- Calling hooks conditionally
- Missing cleanup in timers
- Passing an unstable object as a dependency (use JSON.stringify or primitives)

## Interview questions
1. **What are custom hooks?**
   Functions that reuse stateful logic by calling built-in hooks.
2. **Why can’t hooks be conditional?**
   React identifies them by call order.

## Practice task
Use useLocalStorage to remember the selected page size of the customers table.

## Next day's topic
Day 16 - Context API

## Commit
`Day 15: Add custom hooks for customers, API and debounce`
