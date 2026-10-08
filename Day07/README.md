# DAY 07

- **Topic:** React Router + backend and database foundation
- **ReactJS Concept:** React Router: nested routes, route params, Link/NavLink, useNavigate, useParams
- **Insurance Functionality:** Routes for Dashboard, Customers, Customer details, 404
- **Backend Functionality:** LearnAPI skeleton (Clean Architecture folders, Swagger, CORS, /api/health, Npgsql data source)
- **Database Functionality:** LearnInsuranceDB + schema learninsurancedb, ID decision (BIGINT), customers table with audit fields, setup.ps1

## Learning objectives
- Replace state-based navigation with URLs
- Read route params
- Create the API and database foundations

## What I learned
- Routes are data
- Layout routes use Outlet
- useParams returns strings

## Why this approach is used
Declarative routing keeps navigation testable and linkable.

## Common mistakes
- Using <a href> (full reload)
- Forgetting `end` on the "/" NavLink so it is always active
- Treating route params as numbers

## Interview questions
1. **Link vs a?**
   Link does client-side navigation without reloading.
2. **What is an Outlet?**
   Placeholder where the matched child route renders.
3. **Why does NavLink "/" need end?**
   Otherwise every URL matches "/" as prefix.

## Practice task
Add a 404 Not Found route (done: path "*") - customise its design.

## Next day's topic
Day 08 - Axios, API service layer

## Commit
`Day 07: Add routing and API/database foundation`
