# Day 05 - Concepts

## Lifting state up
- **WHY:** List and editor both need the same customers.
- **WHAT:** Move state to the nearest common parent and pass data/callbacks down.
- **HOW:** CustomersPage owns `customers`; CustomerEditor gets `onSave`.
- **WHERE (in LearnInsurance):** CustomersPage / CustomerEditor.

## Validation state
- **WHY:** Users need immediate, per-field feedback.
- **WHAT:** An errors object keyed by field.
- **HOW:** validate(values) returns errors; submission proceeds only if empty. Inputs get aria-invalid and role="alert" messages.
- **WHERE (in LearnInsurance):** CustomerEditor.
