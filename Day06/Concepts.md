# Day 06 - Concepts

## useEffect
- **WHY:** Rendering must stay pure; fetching, timers and subscriptions are side effects.
- **WHAT:** A Hook that runs after React commits to the DOM.
- **HOW:** Runs after render when dependencies change. `[]` = once. The returned function is cleanup, run before the next effect and on unmount.
- **WHERE (in LearnInsurance):** CustomersPage loads customers.

## AbortController
- **WHY:** Stale responses can overwrite newer state and leak work.
- **WHAT:** A browser API to cancel fetches/timers via a signal.
- **HOW:** Pass signal to the request; call abort() in cleanup. StrictMode runs mount→unmount→mount in dev to expose missing cleanup.
- **WHERE (in LearnInsurance):** fetchMockCustomers(signal).

## REST concepts
- **WHY:** Day 08 connects to a real API.
- **WHAT:** Resources + verbs: GET read, POST create, PUT replace/update, DELETE remove. Status: 200, 201, 204, 400, 401, 403, 404, 409, 500.
- **HOW:** Stateless HTTP with JSON bodies.
- **WHERE (in LearnInsurance):** /api/customers.
