# Day 37 - Implementation

## What was built
- ProposalWizardPage (6 steps)
- MotorDetailsFields (extracted, prefix-aware)
- Wizard initialStep
- Unified submit endpoint and partial drafts
- Guided-wizard buttons on product lists, "Continue in wizard" on drafts

## Code walkthrough
New proposal → pick a customer → Home → plan → answer details (Next is blocked until valid) → premium → review + declaration → Submit. Or "Save draft & exit" at any point and continue later from the draft.

## Architecture changes
None.
