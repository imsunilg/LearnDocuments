# DAY 13

- **Topic:** React Hook Form
- **ReactJS Concept:** Uncontrolled vs controlled forms, register, handleSubmit, formState, performance benefits
- **Insurance Functionality:** Customer form migrated from hand-rolled useState to React Hook Form
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Understand why big forms re-render slowly when controlled
- Use register/handleSubmit/formState
- Map server errors with setError

## What I learned
- RHF avoids re-renders
- register returns props to spread
- Server errors integrate via setError

## Why this approach is used
RHF scales to the large multi-section insurance forms coming in Phase 4.

## Common mistakes
- Mixing value= with register (controlled/uncontrolled conflict)
- Forgetting noValidate when using custom messages

## Interview questions
1. **Controlled vs uncontrolled?**
   Controlled stores value in React state; uncontrolled reads from the DOM via refs.
2. **Why is RHF fast?**
   Fewer re-renders: subscriptions to formState are opt-in.

## Practice task
Add a dynamic list of nominee fields with useFieldArray (name, relationship, share %).

## Next day's topic
Day 14 - Zod schema validation

## Commit
`Day 13: Migrate customer form to React Hook Form`
