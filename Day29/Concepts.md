# Day 29 - Concepts

## Workflow / state machine
- **WHY:** A proposal can only move along legal paths.
- **WHAT:** Draft → Submitted → Under Review → Approved/Rejected → Issued; Cancelled from most states. fn_proposal_transition_allowed encodes the table; every change writes status_history.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** 310_proposals.sql.

## Server-authoritative pricing
- **WHY:** A modified browser could send a cheaper premium.
- **WHAT:** The API ignores any premium from the client; fn_proposal_save recalculates and stores the breakup.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_proposal_save.

## Draft autosave
- **WHY:** Long forms get lost on refresh.
- **WHAT:** useFormDraft debounces the form values into localStorage; a banner offers Restore/Discard; cleared after a successful save.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** hooks/useFormDraft.ts, MotorQuotePage.

## Optimistic UI (concept)
- **WHY:** Make actions feel instant.
- **WHAT:** Update the screen before the server confirms and roll back on failure. We keep pessimistic updates for workflow actions (money/legal state) and introduce optimistic updates on Day 39 for safe toggles.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Day 39.

## Reverse mapping
- **WHY:** Edit screens need the saved JSON back as form values.
- **WHAT:** motorFormFromProposal mirrors buildMotorDetails.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** motorDetails.ts.
