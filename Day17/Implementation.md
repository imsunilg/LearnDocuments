# Day 17 - Implementation

## What was built
- Login page
- authApi, tokenStore, AuthProvider (login)
- Auth tables + functions + seed
- JWT auth in the API

## Code walkthrough
LoginPage validates with Zod, calls login() from AuthProvider which posts credentials, stores the access token in memory and the user in state. A 401 ProblemDetails is shown above the form.

## Architecture changes
None.
