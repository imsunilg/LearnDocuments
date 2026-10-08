# Day 55 - Concepts

## MSW (Mock Service Worker)
- **WHY:** Mocking axios itself hides bugs in interceptors, headers and error mapping.
- **WHAT:** MSW answers at the network level, so the real client code runs. Per-test handlers script the server, onUnhandledRequest: "error" catches forgotten routes.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** src/test/server.ts, PayDialog.test.tsx.

## WebApplicationFactory
- **WHY:** Controllers alone do not tell you if filters, middleware and auth are wired correctly.
- **WHAT:** It hosts the real Program in memory and gives an HttpClient. Tests log in, send tokens and assert status codes, headers and bodies.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ApiIntegrationTests.

## A bug found by an integration test
- **WHY:** This is what integration tests are for.
- **WHAT:** A viewer posting an empty body got 400 validation hints instead of 403, because [ApiController] validates before our permission filter. Fixed by giving PermissionFilter order -3000 (Filters.Add<T>() ignores the type's own Order).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Program.cs, PermissionAuthorization.cs.

## Idempotency semantics
- **WHY:** Whether to reuse the key depends on what the client knows.
- **WHAT:** After a recorded Failed result the next click is a new attempt (new key). After a network error the outcome is unknown, so the same key is re-sent and the server de-duplicates.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PayDialog.test.tsx.
