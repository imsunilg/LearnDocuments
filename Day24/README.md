# DAY 24

- **Topic:** Insurance Product Management
- **ReactJS Concept:** Master-detail UI, nested layout routes, cross-field validation in the form kit, key to remount on selection
- **Insurance Functionality:** Product types (Motor/Health/Home/Travel) and products with base rates, sum-insured limits and effective-from/to dates (Live / Upcoming / Expired)
- **Backend Functionality:** ProductsController + ProductTypesController, FluentValidation (rate, sum insured range, date order)
- **Database Functionality:** insurance_product_types, insurance_products (check constraints, unique name per type), vw_insurance_products with lifecycle, fn_product_get_all and friends

## Learning objectives
- Build master-detail screens
- Validate date ranges and numeric ranges across fields
- Compute derived status in SQL

## What I learned
- Master-detail = two queries + a key
- Cross-field rules belong to the schema, not the inputs

## Why this approach is used
Products drive pricing later (Day 28), so base rates and sum-insured limits live in the database, editable by admins.

## Common mistakes
- Hard-coding product lists in the UI
- Validating date order only on the client

## Interview questions
1. **How do you reset child state when the parent selection changes?**
   Give the child a key based on the selection so React remounts it.
2. **Why compute lifecycle in SQL?**
   It is filterable/sortable server-side and always consistent.

## Practice task
Add a "Duplicate product" row action that opens the form pre-filled with the product values and a new name.

## Next day's topic
Day 25 - Master Data Management

## Commit
`Day 24: Add insurance product management`
