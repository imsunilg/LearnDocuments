# DAY 44

- **Topic:** Claims Management
- **ReactJS Concept:** Status workflows in the UI (actions derived from the current status + permissions), timeline component, async policy combobox, dialogs that collect different data per action
- **Insurance Functionality:** Claim intimation against an active policy, claims list with filters, claim details with workflow actions (review, request documents, approve with amount, reject, settle) and a status timeline
- **Backend Functionality:** ClaimsController: list/get (generated), POST /api/claims, POST /{id}/status (claims.edit; Approved/Rejected need claims.approve), GET /{id}/timeline
- **Database Functionality:** claims table, fn_claim_create (policy period, sum insured and product-line rules), fn_claim_change_status (workflow + approved amount checks + history), vw_claims, 6 demo claims in different states

## Learning objectives
- Model a claim lifecycle
- Drive UI actions from a transition table
- Validate business rules on both sides
- Show history as a timeline

## What I learned
- A transition map is the single source of truth for workflow
- Permissions can differ per transition

## Why this approach is used
Claims are where the insurer keeps its promise - clarity of status and an audit trail matter most.

## Common mistakes
- Showing actions the server will reject
- Approving more than claimed or insured
- No reason captured on rejection

## Interview questions
1. **How do you keep UI actions in sync with workflow rules?**
   Drive them from the same transition table (or fetch allowed actions from the API) and always enforce on the server.

## Practice task
Add claim-status badge colours and timeline (done) - add an SLA indicator: claims older than 7 days in Under Review turn red.

## Next day's topic
Day 45 - Payment Management

## Commit
`Day 44: Add claims management`
