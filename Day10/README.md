# DAY 10

- **Topic:** Complete Customer CRUD
- **ReactJS Concept:** Applying everything so far end to end (state, effects, forms, routing, service layer)
- **Insurance Functionality:** Create, view, edit, deactivate customers with search, KYC filter and server-side pagination
- **Backend Functionality:** POST/PUT/PATCH/DELETE endpoints, FluentValidation + ValidationFilter, server-side paging, soft delete
- **Database Functionality:** Unique indexes (email, code, PAN), search/sort indexes; fn_customer_create/update/set_active/delete

## Learning objectives
- Build a full CRUD feature
- Map server validation errors onto form fields
- Implement server-side pagination

## What I learned
- End-to-end data flow React → API → PostgreSQL
- Unique indexes surface as 409
- Reset page to 1 when filters change

## Why this approach is used
CRUD is the template for every later module; getting it right once pays off 20 times.

## Common mistakes
- Forgetting to reset the page after a search
- Treating empty strings as values (store NULL)
- Trusting client validation only

## Interview questions
1. **Why soft delete?**
   Auditability, recoverability, referential integrity.
2. **Offset vs keyset pagination?**
   Offset is simple; keyset scales better for huge tables.

## Practice task
Add sorting by name and created date (the API already supports sortBy/sortDir).

## Next day's topic
Day 11 - Reusable DataTable

## Commit
`Day 10: Complete customer CRUD with search and pagination`
