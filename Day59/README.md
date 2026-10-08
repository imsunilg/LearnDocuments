# DAY 59

- **Topic:** Code Review and Refactoring
- **ReactJS Concept:** Reading linter output critically, fixing stale-closure risks (exhaustive-deps), derived state instead of setState in lifecycle methods, keeping routing declarative, tests as a refactoring safety net
- **Insurance Functionality:** Before release the team reviews the code that moves money and personal data
- **Backend Functionality:** Review found and fixed (Day 55) a permission/validation ordering bug; build has 0 warnings; tests: 39 xUnit
- **Database Functionality:** No change

## Learning objectives
- Run a systematic review
- Fix real risks, not just warnings
- Refactor under a green test suite
- Record what was deliberately left alone

## What I learned
- Fix what could cause wrong behaviour first
- Refactor only with tests
- Write down what you chose not to change

## Why this approach is used
Small, reviewed, tested changes beat a big-bang cleanup.

## Common mistakes
- Silencing a warning instead of understanding it
- Refactoring and changing behaviour in the same commit
- Cleaning code that has no test

## Interview questions
1. **What do you look for first in a code review?**
   Correctness and security of the changed behaviour (authorisation, validation, data loss), then tests, then readability and style.

## Practice task
Pick one remaining set-state-in-effect warning and restructure it with a key or derived state.

## Next day's topic
Day 60 - Final Report

## Commit
`Day 59: Review and refactor`
