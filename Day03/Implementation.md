# Day 03 - Implementation

## What was built
- CustomerBasicForm with one generic change handler
- Customer TypeScript model
- App-level page state and sidebar click events
- ui.css primitives (buttons, cards, form fields, badges)

## Code walkthrough
Each input has a name matching a key of the state object. handleChange reads e.target.name/value and spreads the previous object. Submit calls preventDefault, stores a snapshot and resets the form.

## Architecture changes
None.
