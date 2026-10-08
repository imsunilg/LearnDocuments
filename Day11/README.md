# DAY 11

- **Topic:** Reusable DataTable
- **ReactJS Concept:** Generics in TypeScript, column configuration, render props, sorting and pagination as reusable pieces
- **Insurance Functionality:** Customers screen rebuilt on a generic DataTable<T> with sortable headers and server-side sorting
- **Backend Functionality:** Sort parameters (sortBy / sortDir) - whitelisted per entity in the generated list function
- **Database Functionality:** fn_customer_get_all validates sortBy against a column whitelist and builds ORDER BY safely with format(%I)

## Learning objectives
- Write a generic React component
- Drive a table from column configuration
- Use render props for custom cells
- Make headers accessible (aria-sort)

## What I learned
- Generics remove duplication without losing types
- Column configs make tables declarative

## Why this approach is used
A reusable table is the highest-leverage component in an admin portal.

## Common mistakes
- Using any for rows
- Putting fetching in the table
- Non-semantic clickable <th>

## Interview questions
1. **What is a render prop?**
   A function prop a component calls to know what to render.
2. **Why generics for a table?**
   Type-safe reuse across entities.

## Practice task
Add a column visibility toggle (a menu of checkboxes that hides columns).

## Next day's topic
Day 12 - Modal, confirmation dialog, toast

## Commit
`Day 11: Add reusable DataTable component`
