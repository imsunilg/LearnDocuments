# DAY 09

- **Topic:** Loading, error and empty states
- **ReactJS Concept:** Loading/error/empty state patterns, API error handling, retry
- **Insurance Functionality:** Customer list shows Loader, ErrorState (with Retry) and EmptyState
- **Backend Functionality:** GlobalExceptionHandler (IExceptionHandler) → RFC 7807 ProblemDetails; PostgreSQL error → HTTP status mapping
- **Database Functionality:** none

## Learning objectives
- Model async UI as loading / error / empty / data
- Show server error messages safely
- Retry failed requests

## What I learned
- Never leave a blank screen while loading or after failure
- Do not show raw exception text in production
- Aborted requests are not errors

## Why this approach is used
Explicit state handling makes the UI honest and testable (you can render each state in isolation).

## Common mistakes
- Showing an empty table while still loading
- Swallowing errors silently
- Not resetting error on retry

## Interview questions
1. **How do you structure async UI?**
   loading/error/empty/data states, cancel stale requests, offer retry.
2. **What is ProblemDetails?**
   Standard JSON error format (RFC 7807).

## Practice task
Stop the API (or change VITE_API_BASE_URL) and verify the error UI + Retry button.

## Next day's topic
Day 10 - Complete Customer CRUD

## Commit
`Day 09: Add loading, error and empty states`
