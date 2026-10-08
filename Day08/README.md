# DAY 08

- **Topic:** Axios, API service layer, environment variables
- **ReactJS Concept:** Axios instance, service layer pattern, .env files, Vite env variables, CORS
- **Insurance Functionality:** Customer list and details now come from the real API/database
- **Backend Functionality:** GET /api/customers (+ /{id}), CORS, ListQuery DTO, CrudService + EntityRepository, CrudControllerBase
- **Database Functionality:** fn_customer_get_all (JSON), fn_customer_get_by_id, camelCase helper functions, generated CRUD, 20 seeded customers

## Learning objectives
- Create one Axios instance
- Keep HTTP out of components
- Use VITE_ env variables
- Understand CORS

## What I learned
- Components call services, services call HTTP
- Env vars are build-time constants
- CORS is enforced by browsers, configured on the server

## Why this approach is used
A single place for HTTP makes adding auth headers, retries and error mapping a one-file change.

## Common mistakes
- Hard-coding URLs in components
- Putting secrets in VITE_ variables
- Forgetting to pass the AbortSignal

## Interview questions
1. **Why wrap axios?**
   Central config, interceptors, typed API surface.
2. **Is VITE_ safe for secrets?**
   No - it ends up in the public bundle.
3. **What triggers a CORS preflight?**
   Non-simple methods/headers such as Authorization or application/json PUT.

## Practice task
Add GET by id and show it on Customer Details (done) - now add a "Customer not found" 404 message.

## Next day's topic
Day 09 - Loading, error and empty states

## Commit
`Day 08: Connect React to .NET API for customers`
