# Day 11 - Concepts

## Generic components
- **WHY:** One table for customers, agents, policies, claims...
- **WHAT:** `function DataTable<T>(props: DataTableProps<T>)` - T is chosen by the caller and inferred from `data`.
- **HOW:** Column<T>.render receives a T, so cell renderers are fully typed without casts.
- **WHERE (in LearnInsurance):** components/tables/DataTable.tsx, features/customers/customerColumns.tsx.

## Render props / column config
- **WHY:** Cells need arbitrary JSX (links, badges, buttons).
- **WHAT:** A prop that is a function returning JSX.
- **HOW:** `render: (c) => <Link ...>{c.fullName}</Link>`.
- **WHERE (in LearnInsurance):** customerColumns.tsx.

## Controlled sort state
- **WHY:** The server sorts, the table only reports intent.
- **WHAT:** sort + onSortChange props; table is stateless about data.
- **HOW:** Header button toggles asc/desc and calls onSortChange; the page refetches.
- **WHERE (in LearnInsurance):** CustomersPage.

## useMemo
- **WHY:** Keep the columns array identity stable.
- **WHAT:** Memoises a computed value between renders.
- **HOW:** useMemo(() => buildCustomerColumns(...), [])
- **WHERE (in LearnInsurance):** CustomersPage.
