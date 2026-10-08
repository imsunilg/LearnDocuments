# DAY 54

- **Topic:** Unit Testing
- **ReactJS Concept:** Vitest + React Testing Library + user-event + jest-dom in jsdom; test behaviour the user sees (roles, text), not implementation details
- **Insurance Functionality:** Money, validation and workflow rules are guarded by fast tests that run on every change
- **Backend Functionality:** xUnit project LearnAPI/tests/LearnAPI.Tests: gateway rules, payment idempotency, upload validation, correlation/audit/security-header middleware - all with in-memory fakes (no database)
- **Database Functionality:** No change

## Learning objectives
- Write fast, isolated unit tests
- Test components through the DOM like a user
- Fake the database and gateway behind interfaces
- Know what a unit test should not cover

## What I learned
- Pure functions are the cheapest tests
- Role queries double as accessibility checks
- Fakes beat mocks for readability

## Why this approach is used
Test behaviour, not implementation; prefer many small tests over few giant ones.

## Common mistakes
- Asserting on CSS classes or internal state
- Sharing mutable state between tests
- Testing library code
- Snapshot tests of large trees

## Interview questions
1. **What is the testing pyramid?**
   Many fast unit tests, fewer integration tests, very few end-to-end tests: cost and flakiness grow as you go up.

## Practice task
Add a test that a Failed payment gets a new idempotency key on retry (PayDialog).

## Next day's topic
Day 55 - Integration Testing

## Commit
`Day 54: Add unit tests (Vitest and xUnit)`
