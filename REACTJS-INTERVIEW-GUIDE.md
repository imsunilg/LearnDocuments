# ReactJS interview guide (grounded in this project)

Each answer points to code you wrote, so you can speak from experience.

## Core
1. **What is the virtual DOM / reconciliation?** React renders to a lightweight tree, diffs it with the previous one and applies minimal DOM changes. Keys identify list items (never use the index for reorderable lists). *DataTable rows use `rowKey`.*
2. **State vs props vs derived data?** Props flow down, state is owned by one component, derive everything else during render. *ErrorBoundary resets via `getDerivedStateFromProps`, not an effect.*
3. **When do you use `useEffect`?** To synchronise with something outside React (network, subscriptions, DOM APIs). Not to compute values from props/state. *DocumentPreview creates and revokes an object URL in an effect cleanup.*
4. **Controlled vs uncontrolled inputs?** Controlled = value in state; uncontrolled = DOM holds it (ref/FormData). *React Hook Form is mostly uncontrolled for speed.*
5. **Why can't hooks be conditional?** React identifies hooks by call order. *Bug fixed on Day 33: renderer called as a function changed hook order.*

## Performance
6. **When does `React.memo` help?** Expensive child, stable props. Needs `useCallback`/`useMemo` for function/object props. *Perf lab: 13 ms → 0.6 ms per click.*
7. **`useMemo` vs `useCallback`?** Memoise a value vs a function identity.
8. **`useDeferredValue` / `useTransition`?** Keep input responsive while a heavy render catches up.
9. **Code splitting?** `React.lazy` + `Suspense` per route; heavy libs (Recharts) lazy. *`lazyPages.ts`.*
10. **How do you find perf problems?** React DevTools Profiler / `<Profiler>`; measure before optimising.

## Data fetching & state
11. **Why TanStack Query instead of `useEffect` + `useState`?** Caching, de-duplication, retries, background refresh, optimistic updates, cancellation. *Every `*Queries.ts`.*
12. **Optimistic update with rollback?** `onMutate` snapshot + cache edit, `onError` restore, `onSettled` invalidate. *Customer active toggle.*
13. **What is `keepPreviousData` for?** No flash of empty UI while paging/filtering. *Reports period filter.*
14. **Where does auth state live and where do tokens go?** Context for user info; access token in memory; refresh token in an httpOnly cookie. Never localStorage. *`AuthProvider`, `tokenStore`.*
15. **Idempotency on the client?** One key per attempt, re-sent on network error, new key after a recorded failure. *`PayDialog` + MSW test.*

## Architecture
16. **Compound components?** Parent shares state through context so children compose freely. *`Tabs`.*
17. **Custom hooks?** Reuse stateful logic. *`useUrlFilters`, `useMasterData`.*
18. **Error handling layers?** Error boundary for render errors, `errorElement` for routes, query/mutation `onError` for async, global exception handler on the server. Boundaries do **not** catch event-handler or async errors.
19. **Route protection?** UI guards only improve UX; the server must enforce permissions. *`RequirePermission` + `PermissionFilter`.*
20. **Feature-folder structure vs type-folder?** Group by feature so a change touches one folder.

## Security & quality
21. **XSS in React?** JSX escapes text; danger is `dangerouslySetInnerHTML`, `javascript:` URLs; add CSP. *Day 53 test.*
22. **CSRF with cookies?** `SameSite`, same-origin proxy, access token in header (not cookie).
23. **File upload safety?** Allow-list, magic bytes, size limit, generated storage name, nosniff, attachment disposition.
24. **Accessibility basics?** Semantic HTML, labels, focus management on route change, skip link, AA contrast, keyboard operability. *Day 56 axe scans.*
25. **Testing strategy?** Pure-function unit tests, DOM tests by role, MSW integration tests, a few e2e. *27 Vitest tests.*

## Scenario questions
* *"A list of 5,000 rows is slow."* Server paging first; then memoised rows, virtualisation, deferred filtering.
* *"Users see stale data after paying."* Invalidate every query the mutation affects (payments **and** policies).
* *"A user reports an error."* Ask for the reference/correlation id; find the request in logs/audit.
* *"Double charge risk?"* Idempotency key + unique index + server-side replay of the first result.
