# Day 30 - Concepts

## Transactional issuance
- **WHY:** Issuing touches the policy, its sections, the proposal status and the history. Partial success would corrupt data.
- **WHAT:** A PostgreSQL function runs as one transaction: any exception rolls back everything. Row lock (FOR UPDATE) prevents double issuing.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_policy_create.

## Policy number generation
- **WHY:** Customers quote policy numbers on the phone.
- **WHAT:** POL-MOT-2026-000042 = prefix + product line + year + sequence (sequences are gap-tolerant but never duplicate).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_next_policy_no.

## Route state
- **WHY:** Show a one-time success banner after redirect.
- **WHAT:** navigate(url, { state: { issued: true } }) - read with useLocation().state; it disappears on refresh because it lives in history state.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ProposalDetailsPage → PolicySummaryPage.

## Print CSS
- **WHY:** A policy certificate must print cleanly.
- **WHAT:** @media print hides chrome (header, sidebar, buttons).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ui.css (.no-print).
