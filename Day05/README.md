# DAY 05

- **Topic:** Forms, validation basics, input handling
- **ReactJS Concept:** Form submission, validation basics, error state, lifting state up
- **Insurance Functionality:** Customer create/edit editor with field-level errors
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Validate on submit
- Keep an errors object in state
- Lift shared state to the parent

## What I learned
- Draft state belongs to the form
- Shared data belongs to the parent
- Changing `key` remounts a component

## Why this approach is used
Validation logic as a pure function is easy to test and later swap for Zod.

## Common mistakes
- Validating only on the server
- Keeping duplicate copies of the same data in two components

## Interview questions
1. **What is lifting state up?**
   Moving state to a common ancestor so siblings can share it.
2. **How do you reset a component’s state?**
   Change its key.

## Practice task
Add PAN (AAAAA9999A) and 10-digit mobile format validation.

## Next day's topic
Day 06 - useEffect

## Commit
`Day 05: Add customer create/edit screen with validation`
