# DAY 36

- **Topic:** Tabs, accordion, stepper, wizard
- **ReactJS Concept:** Building tab/accordion/stepper components, a wizard as a reducer-based state machine, accessibility basics (ARIA roles, roving tabindex, aria-expanded/controls)
- **Insurance Functionality:** Navigation building blocks for the proposal wizard (Day 37) and the policy details page (Day 41)
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Build accessible interactive widgets from scratch
- Model a multi-step flow as a state machine
- Know the WAI-ARIA patterns for tabs and disclosures

## What I learned
- A reducer makes a flow explicit and unit-testable
- Keyboard support is part of the component, not an extra

## Why this approach is used
Phase 4 ends with a wizard, so the navigation primitives come first.

## Common mistakes
- Clickable divs without roles or keyboard handling
- Letting users skip validation by clicking later steps

## Interview questions
1. **What is roving tabindex?**
   Only the active item has tabindex=0; arrow keys move focus among items, so the whole group is one tab stop.
2. **Why a reducer for a wizard?**
   Explicit events and transitions; easy to test.

## Practice task
Add step-completion indicators (done: ✓ and ! in the stepper) - add a progress percentage bar above the stepper.

## Next day's topic
Day 37 - Insurance Proposal Wizard

## Commit
`Day 36: Add tabs, accordion, stepper and wizard components`
