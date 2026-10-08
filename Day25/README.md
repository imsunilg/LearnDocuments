# DAY 25

- **Topic:** Master Data Management
- **ReactJS Concept:** Dynamic dropdown loading, caching master data in context (promise cache), cascading selects
- **Insurance Functionality:** Administration → Master data (states, cities, vehicle makes/models, relationships, occupations, payment modes...) and State → City dropdowns in the customer form
- **Backend Functionality:** MasterDataController: admin CRUD + cached GET /api/master-data/by-type/{type}; IMemoryCache with a shared change token invalidated on every write
- **Database Functionality:** master_data (type, code, name, parent_id, sort_order, meta jsonb), fn_masterdata_get_by_type, fn_masterdata_get_types, large seed (13 states, 36 cities, 10 makes, 25 models ...)

## Learning objectives
- Serve reference data efficiently
- Cache at two levels (API memory + browser context)
- Build cascading dropdowns
- Model hierarchical data with a self-referencing table

## What I learned
- Cache promises to coalesce requests
- Invalidate on every write path
- Hierarchies fit a self-referencing table

## Why this approach is used
Centralised master data keeps every module (customers, motor, claims) consistent and admin-editable.

## Common mistakes
- Fetching the same list in every component
- Forgetting to clear the cache after edits
- Storing names instead of ids for relationships that must stay consistent (customers keep names today by design)

## Interview questions
1. **How would you cache API data in React?**
   A query cache (TanStack Query) or a context/ref holding promises with invalidation.
2. **How do you implement dependent dropdowns?**
   Derive the child query from the parent value and reset the child when the parent changes.

## Practice task
Add the same State → City cascade to the Broker form (use StateCityFields).

## Next day's topic
Day 26 - Motor Insurance module

## Commit
`Day 25: Add master data management`
