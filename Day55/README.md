# DAY 55

- **Topic:** Integration Testing
- **ReactJS Concept:** MSW intercepts the real axios calls so components, the HTTP client and TanStack Query are tested together; renderWithProviders helper; user-event flows
- **Insurance Functionality:** The payment retry rules (new key after a recorded failure, same key after a network error) and the permission model are proven end to end
- **Backend Functionality:** WebApplicationFactory<Program> boots the whole API in memory (routing, middleware, JWT, permission filter, validation, exception handler) against the real PostgreSQL database
- **Database Functionality:** Read-mostly tests against the seeded database; the only write is one rejected request that proves the audit trail

## Learning objectives
- Test several layers together
- Fake the network, not the app
- Prove authorization and error contracts
- Find bugs unit tests cannot

## What I learned
- Fake the network, not your code
- Integration tests catch wiring bugs
- Filter order matters for security

## Why this approach is used
Unit tests prove the rules, integration tests prove the pieces are connected.

## Common mistakes
- Mocking axios directly
- Sharing a QueryClient between tests
- Integration tests that depend on test order or leave data behind

## Interview questions
1. **Why prefer MSW over mocking fetch/axios?**
   It exercises your real request code and works the same in tests, Storybook and the browser; only the server is faked.

## Practice task
Add an integration test that a Claims officer cannot POST /api/policies/{id}/issue (403).

## Next day's topic
Day 56 - Accessibility and Responsive Design

## Commit
`Day 55: Add integration tests (MSW and WebApplicationFactory)`
