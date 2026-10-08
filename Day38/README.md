# DAY 38

- **Topic:** TanStack Query
- **ReactJS Concept:** Server state vs client state, useQuery, query keys, QueryClientProvider, staleTime/gcTime, keepPreviousData, devtools
- **Insurance Functionality:** Customers, Products and Master Data now come from a shared query cache - instant back-navigation, request de-duplication, background refresh
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Separate server state from UI state
- Design query keys
- Replace hand-written fetching hooks with useQuery
- Inspect the cache with the devtools

## What I learned
- useApi (Day 15) was a mini version of this - now you know what the library does for you
- Cache invalidation is the hard part - Day 39

## Why this approach is used
A query cache removes whole categories of bugs (stale data, duplicate requests, race conditions).

## Common mistakes
- Putting server data in Redux/Context and syncing by hand
- Keys that omit parameters (cache collisions)
- Forgetting to clear the cache on logout

## Interview questions
1. **What is the difference between staleTime and gcTime?**
   staleTime: how long data is fresh. gcTime: how long unused data stays in memory.
2. **Why are query keys arrays?**
   Hierarchical matching: invalidating ["customers"] invalidates all keys that start with it.

## Practice task
Open the React Query devtools and inspect the cache: find the ["masterData","STATE",null] entry and watch it go stale after 15 minutes (or change its staleTime to 5 s).

## Next day's topic
Day 39 - Cache, refetch, mutations, optimistic updates

## Commit
`Day 38: Introduce TanStack Query`
