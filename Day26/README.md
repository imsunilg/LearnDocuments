# DAY 26

- **Topic:** Motor Insurance module
- **ReactJS Concept:** Feature module organisation, lazy sub-routes (route-level `lazy`), shared list page configured per product
- **Insurance Functionality:** Motor module shell: list of motor quotes/proposals with a vehicle-type filter
- **Backend Functionality:** ProposalsController (read endpoints scaffold)
- **Database Functionality:** vehicles, proposals and status_history tables; vw_proposals / vw_vehicles with joined names; motor master data already seeded (makes, models, fuel, vehicle types)

## Learning objectives
- Structure a product module
- Lazy-load a route subtree
- Reuse one list page for all product lines

## What I learned
- Modules own their routes, pages and types
- Lazy routes keep the initial bundle small

## Why this approach is used
Organising by product line mirrors how the business thinks and lets teams own modules.

## Common mistakes
- Importing a lazy module statically elsewhere (defeats code splitting)
- Duplicating list pages per product

## Interview questions
1. **How does route-level lazy loading differ from React.lazy?**
   Router `lazy` loads code (and data loaders) as part of navigation; React.lazy loads a component during render under Suspense.

## Practice task
Add a "Fuel type" filter to the Motor list.

## Next day's topic
Day 27 - Motor: vehicle, customer, insurance details

## Commit
`Day 26: Add motor insurance module`
