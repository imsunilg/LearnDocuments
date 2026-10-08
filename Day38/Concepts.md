# Day 38 - Concepts

## Server state vs client state
- **WHY:** Server data is owned elsewhere, can change without you knowing, and is shared by many components.
- **WHAT:** Client state (form values, open dialogs) → useState/useReducer/context. Server state (customers, products) → a query cache.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** customerQueries.ts, productQueries.ts, useMasterData.ts.

## useQuery & query keys
- **WHY:** The cache needs an identity for each request.
- **WHAT:** useQuery({ queryKey, queryFn }). Keys are arrays matched by prefix: ["customers"] covers every customer query; ["customers","detail",5] one record. A key factory keeps them consistent.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** customerKeys.

## staleTime / gcTime
- **WHY:** Decide how fresh is fresh.
- **WHAT:** Within staleTime a cached result is served without a request; after it, the cached data is shown immediately AND refetched in the background. gcTime controls how long unused entries survive.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** app/queryClient.ts (30 s default, master data 15 min).

## keepPreviousData
- **WHY:** Changing page/filter should not flash an empty table.
- **WHAT:** placeholderData: keepPreviousData keeps the last result visible (dimmed) until the new one arrives.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** useCustomerList.

## Clear the cache on logout
- **WHY:** Cached customer data must never leak to the next user.
- **WHAT:** queryClient.clear() when the session ends.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** AuthProvider.clear.
