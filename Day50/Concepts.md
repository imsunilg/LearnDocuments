# Day 50 - Concepts

## Error boundary
- **WHY:** An exception while rendering unmounts the whole React tree (white screen).
- **WHAT:** A class component with getDerivedStateFromError + componentDidCatch shows a fallback for just its subtree. Event handler and async errors are NOT caught - handle those yourself.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ErrorBoundary, router errorElement.

## Correlation id
- **WHY:** "It failed" is not debuggable; one id that follows the request is.
- **WHAT:** The browser sends X-Correlation-Id, the API validates and echoes it, logs it in every line, stores it in audit_logs and returns it in error bodies.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** httpClient, CorrelationIdMiddleware.

## Audit trail
- **WHY:** Accountability and forensics.
- **WHAT:** Who, method, path, entity, id, status, duration, IP. Request bodies are skipped because they contain passwords and personal data.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** AuditMiddleware, AuditLogPage.

## Middleware order
- **WHY:** Order decides what each layer can see.
- **WHAT:** Correlation first, CORS, Audit OUTSIDE the exception handler so it sees the final status, then exception handler, auth, controllers.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Program.cs.
