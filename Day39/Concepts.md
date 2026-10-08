# Day 39 - Concepts

## useMutation
- **WHY:** A write has its own lifecycle: idle → pending → success/error.
- **WHAT:** mutate/mutateAsync run the function; the hook exposes isPending, error, data. Callbacks: onMutate, onSuccess, onError, onSettled.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** customerMutations.ts.

## Cache updates after a write
- **WHY:** Lists and details are now stale.
- **WHAT:** invalidateQueries({queryKey}) marks matching queries stale and refetches the active ones. setQueryData writes a known-good value into the cache immediately (the saved record goes straight into the detail cache).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** useCreateCustomer/useUpdateCustomer.

## Optimistic update
- **WHY:** A switch that waits 300 ms before moving feels broken.
- **WHAT:** 1) cancelQueries so refetches do not overwrite us, 2) snapshot with getQueriesData, 3) setQueriesData with the expected result, 4) onError restore the snapshot, 5) onSettled invalidate to converge on the server's truth.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** useToggleCustomerActive.

## When NOT to be optimistic
- **WHY:** Some actions have consequences (issuing a policy, taking payment).
- **WHAT:** Use optimistic updates for cheap, reversible, low-risk toggles. Keep workflow actions pessimistic: show pending, wait for the server.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Proposal/policy actions stay pessimistic.
