# Day 15 - Concepts

## Rules of Hooks
- **WHY:** React tracks hooks by call order.
- **WHAT:** Call hooks only at the top level of components/hooks, never in loops, conditions or nested functions.
- **HOW:** Each render must call the same hooks in the same order.
- **WHERE (in LearnInsurance):** All hooks files.

## Custom hooks
- **WHY:** Share logic, not UI.
- **WHAT:** A function named useXxx that calls other hooks.
- **HOW:** useApi(fetcher, deps) returns {data, error, loading, reload}; useCustomers wraps it for one feature.
- **WHERE (in LearnInsurance):** hooks/useApi.ts, features/customers/useCustomers.ts.

## Debouncing
- **WHY:** Do not call the API on every keystroke.
- **WHAT:** Delay a value change until the user pauses.
- **HOW:** useDebounce sets a timer in an effect and clears it in cleanup.
- **WHERE (in LearnInsurance):** CustomersPage search.

## Latest-ref pattern
- **WHY:** Effects should not re-run just because an inline function changed identity.
- **WHAT:** Store the latest callback in a ref.
- **HOW:** fetcherRef.current is updated in an effect and read inside the fetch effect.
- **WHERE (in LearnInsurance):** useApi.
