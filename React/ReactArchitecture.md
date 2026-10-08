# React architecture (LearnWEB)

Stack: React 19 · TypeScript 6 (`erasableSyntaxOnly`, so no enums) · Vite 8 · react-router 8 · TanStack Query 5 · axios · React Hook Form + zod 4 · Recharts · Vitest + Testing Library + MSW. Styling is plain CSS design tokens (`styles/theme.css`) – orange/maroon palette, dark theme, AA contrast.

## Folder structure

```
src/
  app/            providers (Auth, Toast, AppConfig, QueryClient), routes (router.tsx, lazyPages.ts, ProtectedRoute, RequirePermission)
  components/     common (Tabs, Accordion, Stepper, Timeline, Modal…), forms, dialogs, tables (DataTable, Pagination, FilterPanel), crud, dynamic-form, layout
  features/       one folder per business area: customers, agents, brokers, products, proposals, policies, renewals, endorsements,
                  claims, payments, documents, reports, admin, dashboard …  (queries + pages + feature components together)
  hooks/          useAuth, usePermissions, useUrlFilters, useDebounce, useMasterData, useToast …
  services/       api/httpClient (axios + interceptors), api/* clients, auth/tokenStore
  models/         TypeScript types mirroring API JSON
  utils/          format, csv, apiError
  test/           setup, MSW server, renderWithProviders
```

## Patterns worth knowing (and where to find them)

| Pattern | Where | Learned on |
|---|---|---|
| Reusable generic table with typed columns | `components/tables/DataTable.tsx` | Day 11 |
| Compound component (`<Tabs.List/>`, `<Tabs.Tab/>`) | `components/common/Tabs.tsx` | Day 36 |
| Context + custom hooks (`useAuth`, `useToast`) | `app/providers/*`, `hooks/*` | Days 15–19 |
| JWT in memory + rotating httpOnly refresh cookie, single-flight refresh | `services/auth`, `AuthProvider` | Days 17–18 |
| Route guards by permission | `RequirePermission`, `Can` | Day 19 |
| CRUD factory | `createCrudApi`, `CrudListPage` | Days 21–24 |
| Dynamic forms driven by DB config (registry, `showIf`, groups) | `components/dynamic-form` | Days 33–35 |
| Wizard as a reducer state machine | `components/common/Wizard.tsx`, proposal wizard | Day 36 |
| URL as filter state | `hooks/useUrlFilters` | Day 40 |
| TanStack Query: key factories, optimistic updates with rollback, prefetch, `keepPreviousData` | `features/*/…Queries.ts` | Days 38–39, 48 |
| Idempotent mutations | `features/payments/PayDialog.tsx` | Day 45 |
| Blob download/preview through the authenticated client | `features/documents` | Days 46–47 |
| Error boundaries + `errorElement` | `components/common/ErrorBoundary.tsx` | Day 50 |
| Code splitting (`React.lazy` per route, lazy charts) | `app/routes/lazyPages.ts`, `ReportCharts` | Day 52 |
| memo / useMemo / useCallback / useDeferredValue / Profiler | `features/admin/PerfLabPage.tsx`, `DataTable` | Day 51 |

## Data-fetching rules we follow

1. **Server state lives in TanStack Query**, not in `useState`. Components declare UI state only (open dialogs, draft input).
2. Query keys come from a factory per feature (`paymentKeys.list(params)`), so invalidation is one line.
3. Mutations invalidate every cache they affect (paying invalidates payments **and** policies).
4. Errors become `AppError` (`utils/apiError.ts`): readable message, field errors, correlation id.
5. `queryClient.clear()` on logout so the next user never sees the previous user's cache.

## Testing approach

* Unit: pure utils (`format`, `csv`, `apiError`, `validateFile`).
* Component: through the DOM using roles (`DataTable`, `ErrorBoundary`).
* Integration: components + real axios + TanStack Query with MSW (`PayDialog`).
* Accessibility: axe-core scans in Playwright at desktop and phone width (0 violations at Day 56).
