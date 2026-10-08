# ReactJS learning roadmap (as practised over 60 days)

| Phase | Days | React topics | Where to see it |
|---|---|---|---|
| 1. Foundations | 1–10 | JSX, components, props, state, events, conditional/list rendering, forms basics, `useEffect`, fetching data | customers list/detail |
| 2. Reusable UI | 11–14 | generics, DataTable, pagination, modal/dialog (portal, focus trap), toasts | `components/*` |
| 3. Forms | 15–16, 28 | controlled forms, React Hook Form, zod, field-level errors | customer form, FieldDef kit |
| 4. Auth & security | 17–20 | context, JWT, refresh, protected routes, permissions, role admin | `app/providers`, `RequirePermission` |
| 5. Data & CRUD | 21–27 | CRUD factory, master data, cascading selects, custom hooks, debounce | `createCrudApi`, `CrudListPage` |
| 6. Domain screens | 29–35 | motor/home/travel/health quotes, dynamic forms, premium engine | `features/motor…health`, `dynamic-form` |
| 7. Patterns | 36–37 | compound components, wizard/reducer state machine | `Tabs`, `Wizard` |
| 8. Server state | 38–40 | TanStack Query: caching, optimistic updates, prefetch, URL filters | `*Queries.ts`, `useUrlFilters` |
| 9. Workflows | 41–44 | tabs/accordion details, renewals, endorsements diff, claims status machine | policies, claims |
| 10. Money & files | 45–47 | idempotency, receipts, FormData uploads, blob preview, progress | payments, documents |
| 11. Insight | 48–49 | aggregation in SQL, Recharts, KPI cards, CSV | reports, dashboard |
| 12. Quality | 50–56 | error boundaries, correlation ids, performance, lazy loading, security, tests, accessibility | see Day docs |
| 13. Ship | 57–60 | env configs, Docker, review, final report | `Deployment.md` |

## How to study it

1. Read `LearnDocuments/DayNN/README.md` (goal, concepts, mistakes), then `Implementation.md` (what changed).
2. Open the files listed in `FilesChanged.md` and run the feature (`Deployment.md` §A).
3. Do the day's exercise before moving on; break something on purpose and watch the tests or error UI react.
4. After each phase re-read `REACTJS-INTERVIEW-GUIDE.md` for the matching questions.
