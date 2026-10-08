# DAY 50

- **Topic:** Error Boundaries, Correlation IDs and Audit Logs
- **ReactJS Concept:** Class-based ErrorBoundary with resetKey, react-router errorElement, a last-resort boundary at the providers, axios interceptor that tags every request
- **Insurance Functionality:** Regulated systems must answer "who changed what and when"; support must find one failing request quickly
- **Backend Functionality:** CorrelationIdMiddleware (accept safe client ids, echo header, log scope, ProblemDetails), AuditMiddleware (POST/PUT/PATCH/DELETE, no bodies), read-only AuditLogsController (admin.view)
- **Database Functionality:** audit_logs table + fn_audit_log_write; generated read functions with filters (user, entity, method, status, correlation id)

## Learning objectives
- Contain render crashes
- Trace one request across browser, API logs and database
- Record state changes without storing secrets
- Never let auditing break a request

## What I learned
- Boundaries per area, not only at the root
- Validate incoming correlation ids
- Audit failures must not fail the request

## Why this approach is used
Observability is a feature: build the ids and the trail before you need them.

## Common mistakes
- Logging request bodies
- Trusting a client-supplied id blindly (log forging)
- One global boundary only
- Expecting boundaries to catch event-handler errors

## Interview questions
1. **What does an error boundary not catch?**
   Errors in event handlers, asynchronous code (promises, timers), server rendering and errors thrown in the boundary itself.

## Practice task
Show the correlation id in toast error messages and add a "copy" button.

## Next day's topic
Day 51 - Performance Optimization

## Commit
`Day 50: Add error boundaries, correlation ids and audit logs`
