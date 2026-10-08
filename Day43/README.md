# DAY 43

- **Topic:** Endorsement
- **ReactJS Concept:** Diff display (before/after), conditional workflows, a form whose fields change with a selected type (shouldUnregister + keyed form), approval dialogs
- **Insurance Functionality:** Endorsement requests (change address, add nominee, change vehicle) with pro-rata premium adjustment, underwriter approval and a before/after comparison
- **Backend Functionality:** EndorsementsController: GET list/get (generated), POST /api/endorsements, POST /{id}/decision (policies.issue)
- **Database Functionality:** endorsements table, fn_json_diff, fn_endorsement_create (validation, diff, pro-rata re-pricing), fn_endorsement_decide (applies the change to policy_details + history)

## Learning objectives
- Model mid-term changes
- Show what changed
- Re-price a policy pro-rata
- Apply an approved change atomically

## What I learned
- Approvals need a clear before/after
- Business rules: one pending endorsement per policy; effective date inside the policy period

## Why this approach is used
The policy is immutable after issue; endorsements are the audited way to change it.

## Common mistakes
- Editing policy rows directly
- Charging the full annual difference instead of pro-rata
- Letting stale fields from another endorsement type into the request

## Interview questions
1. **How do you display changes between two versions?**
   Compute a structured diff on the server and render before/after with clear markers.

## Practice task
Show a before/after comparison (done) - add a "Customer view" that shows only the changed fields in plain language.

## Next day's topic
Day 44 - Claims Management

## Commit
`Day 43: Add endorsement management`
