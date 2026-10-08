# Day 09 - Concepts

## The four states of async UI
- **WHY:** Real networks are slow, fail, and return nothing.
- **WHAT:** Every data screen renders one of: loading, error, empty, data.
- **HOW:** State flags (loading, error) + derived checks; render with an if/else chain before the happy path.
- **WHERE (in LearnInsurance):** CustomersPage.

## Retry via a reload key
- **WHY:** The effect should re-run on demand.
- **WHAT:** A counter in the dependency array.
- **HOW:** onRetry → setReloadKey(k => k+1) → effect cleanup aborts old request and starts a new one.
- **WHERE (in LearnInsurance):** CustomersPage.

## ProblemDetails
- **WHY:** A uniform error shape lets the UI show the right message.
- **WHAT:** RFC 7807 JSON: title, status, detail, errors, traceId.
- **HOW:** toAppError() converts AxiosError → AppError (network vs server).
- **WHERE (in LearnInsurance):** utils/apiError.ts.
