# Day 40 - Concepts

## URL as state
- **WHY:** A filtered list should be bookmarkable and survive refresh and Back.
- **WHAT:** useSearchParams stores filters/sort/page; useUrlFilters wraps it with typed helpers. `replace: true` avoids a history entry per keystroke; changing a filter resets the page.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** hooks/useUrlFilters.ts.

## Debounce + URL + query
- **WHY:** Typing must feel instant but the API must not be hammered.
- **WHAT:** The input keeps local state; after 400 ms the debounced value is written to the URL; the URL change changes the query key; TanStack Query fetches (and keeps the previous page visible).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PoliciesPage.

## Reusable FilterPanel
- **WHY:** Claims, payments and reports need the same filter bar.
- **WHAT:** A config array (name, label, type, options) renders the controls; the parent owns the values.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** components/tables/FilterPanel.tsx.

## Safe dynamic SQL
- **WHY:** Search functions need optional filters.
- **WHAT:** Every value is injected with format('%L') (literal) and identifiers with %I; sort columns are whitelisted. Never concatenate raw input.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_policy_search.

## Facets
- **WHY:** Show "Active 14 · Expired 2" for the current filters.
- **WHAT:** A second aggregate query over the same WHERE returns counts per status.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_policy_search → facets.
