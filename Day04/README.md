# DAY 04

- **Topic:** Conditional rendering, lists, map(), keys
- **ReactJS Concept:** Conditional rendering, rendering lists, map(), key prop, why keys matter
- **Insurance Functionality:** Customer list from in-memory mock data with an empty-list message
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Render arrays with map()
- Pick stable keys
- Render different UI by condition

## What I learned
- map() turns data into elements
- Keys must be stable and unique
- Empty states are part of the UI

## Why this approach is used
Rendering from arrays keeps the UI a pure function of data.

## Common mistakes
- Using index as key then reordering
- Forgetting a key (console warning)
- Using `&&` with numbers (renders 0)

## Interview questions
1. **Why are keys needed?**
   To identify items across renders for correct reconciliation and state retention.
2. **Why not index as key?**
   Reordering/insertion changes identity and causes bugs with state.

## Practice task
Add a "Show active only" toggle filter (implemented on the Customers page on Day 06).

## Next day's topic
Day 05 - Forms, validation basics

## Commit
`Day 04: Add customer listing with conditional rendering`
