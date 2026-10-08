# DAY 03

- **Topic:** useState, events, controlled components
- **ReactJS Concept:** useState, event handling, controlled inputs, state immutability
- **Insurance Functionality:** Customer basic form (name, email, phone, DOB)
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Hold form data in state
- Handle onChange/onSubmit events
- Update object state immutably

## What I learned
- State survives re-renders; variables do not
- Controlled inputs make state the source of truth
- Always copy objects before updating

## Why this approach is used
Controlled components make validation, formatting and conditional UI trivial because the data is always in React.

## Common mistakes
- Mutating state directly (customer.name = ...)
- Forgetting e.preventDefault() on submit
- Reading state right after setState and expecting the new value

## Interview questions
1. **Controlled vs uncontrolled input?**
   Controlled: React state drives value. Uncontrolled: DOM keeps the value, read via ref/FormData.
2. **Why functional setState?**
   Avoids stale values when updates are batched.
3. **Is setState synchronous?**
   No, updates are batched and applied on the next render.

## Practice task
Add a live "preview" panel showing the typed customer data.

## Next day's topic
Day 04 - Conditional rendering, lists, map(), keys

## Commit
`Day 03: Add customer form with controlled inputs`
