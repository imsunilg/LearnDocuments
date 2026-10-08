# DAY 39

- **Topic:** Cache, refetch, mutation, optimistic updates
- **ReactJS Concept:** useMutation, invalidateQueries, setQueryData, staleTime, optimistic updates with rollback (onMutate / onError / onSettled)
- **Insurance Functionality:** Customer create/update/deactivate through mutations; an instant, optimistic Active switch in the customers table
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Write data through useMutation
- Keep the cache correct after a write
- Implement and understand optimistic updates and rollback

## What I learned
- Mutations + invalidation replace manual "reload()" plumbing
- Optimistic UI = predict, then reconcile

## Why this approach is used
The cache becomes the single place where server data lives; components never refetch by hand.

## Common mistakes
- Forgetting to cancel in-flight queries before an optimistic write
- Not rolling back on error
- Optimistic updates for irreversible actions

## Interview questions
1. **Explain optimistic updates in TanStack Query.**
   onMutate snapshots and writes the expected value; onError restores the snapshot; onSettled refetches.
2. **invalidateQueries vs setQueryData?**
   Invalidate marks stale and refetches; setQueryData writes a value you already have without a request.

## Practice task
Add background refetch on window focus control: a setting that turns refetchOnWindowFocus on/off globally (hint: queryClient.setDefaultOptions).

## Next day's topic
Day 40 - Policy Search

## Commit
`Day 39: Add mutations and optimistic updates`
