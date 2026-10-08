# Day 44 - Concepts

## Claim lifecycle (insurance)
- **WHY:** A claim moves through investigation, documentation, decision and payment.
- **WHAT:** Intimated → Under Review ⇄ Documents Pending → Approved → Settled; Rejected and Withdrawn end the claim. Each move is recorded with who/when/why.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_claim_transition_allowed.

## Transition table in the UI
- **WHY:** Buttons must match the rules the server enforces.
- **WHAT:** CLAIM_NEXT[status] lists the allowed next states with the permission each needs; the page filters it by can(permission). The server still enforces everything.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** models/claim.ts, ClaimDetailsPage.

## One dialog, different inputs
- **WHY:** Approve needs an amount; Reject needs a reason; Review needs nothing.
- **WHAT:** The dialog shows fields according to the target status and disables Confirm until the required ones are filled.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ClaimDetailsPage.

## Business rules at two layers
- **WHY:** Instant feedback AND integrity.
- **WHAT:** The form checks policy period and sum insured immediately; fn_claim_create re-checks (plus claim type vs product line).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ClaimIntimationPage, fn_claim_create.
