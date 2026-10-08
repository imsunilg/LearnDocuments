# DAY 14

- **Topic:** Zod schema validation
- **ReactJS Concept:** Schema-first validation, zodResolver, z.infer, cross-field validation
- **Insurance Functionality:** Customer validation rules moved into a Zod schema aligned with FluentValidation and PostgreSQL check constraints
- **Backend Functionality:** CustomerRequestValidator aligned (age ≥ 18, lengths, pincode→city rule)
- **Database Functionality:** Check constraints ck_customers_mobile / pan / pincode / dob

## Learning objectives
- Define validation once as a schema
- Derive TypeScript types with z.infer
- Write cross-field rules
- Keep UI, API and DB rules aligned

## What I learned
- One schema → types + validation
- Validate at every trust boundary

## Why this approach is used
Schema-first validation scales when dozens of forms share rules.

## Common mistakes
- Different regex in UI and API
- Validating only in the browser

## Interview questions
1. **Why Zod over manual validation?**
   Single source of truth for runtime validation and static types.
2. **What does refine do?**
   Adds a custom predicate with a custom error path.

## Practice task
Add a maximum age of 90 years across Zod, FluentValidation and a CHECK constraint.

## Next day's topic
Day 15 - Custom hooks

## Commit
`Day 14: Add Zod schema validation`
