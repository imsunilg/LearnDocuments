# Day 03 - Concepts

## useState
- **WHY:** Plain variables do not trigger re-renders and reset on every render.
- **WHAT:** A Hook returning [value, setter]; calling the setter schedules a re-render.
- **HOW:** React stores state per component instance, outside the function. The setter queues an update; the next render reads the new value.
- **WHERE (in LearnInsurance):** CustomerBasicForm, PageLayout menu toggle, App page switch.

## Controlled inputs
- **WHY:** Keeps the UI and state from drifting apart.
- **WHAT:** An input whose value comes from state and whose changes go through onChange.
- **HOW:** `<input value={x} onChange={e => setX(e.target.value)} />`
- **WHERE (in LearnInsurance):** Every field in the customer form.

## Immutability
- **WHY:** React detects change by reference equality.
- **WHAT:** Never mutate state objects; create copies.
- **HOW:** `setCustomer(prev => ({ ...prev, [name]: value }))`
- **WHERE (in LearnInsurance):** handleChange in CustomerBasicForm.
