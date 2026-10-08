# DAY 30

- **Topic:** Motor: policy creation
- **ReactJS Concept:** Navigation after a mutation (route state), success screens, print stylesheet
- **Insurance Functionality:** Issue a policy from an approved proposal: policy number generation, certificate-style summary page, print layout; basic policy list
- **Backend Functionality:** PoliciesController (read endpoints + POST /api/policies/issue), explicit [HasPermission] overrides the verb-based rule
- **Database Functionality:** policies + policy_details tables, fn_next_policy_no, fn_policy_create (single transaction), vw_policies (effective status, days to expiry, joined names)

## Learning objectives
- Perform a multi-table business operation atomically
- Generate human-friendly document numbers
- Redirect to a success screen with route state
- Style for print

## What I learned
- Do multi-step operations inside the database transaction
- Immutable policy rows: changes happen via endorsements

## Why this approach is used
Issuing is the legal moment of the insurance contract, so it is atomic, audited (history) and permission-protected.

## Common mistakes
- Issuing in several API calls (not atomic)
- Reusing policy numbers
- Letting any role issue policies

## Interview questions
1. **How do you make a multi-table operation atomic?**
   Wrap it in a database transaction (here a single function call).
2. **How do you pass one-time data to the next route?**
   Router navigation state.

## Practice task
Show a "Policy issued" summary page with print layout (done) - add a QR code of the policy number.

## Next day's topic
Day 31 - Advanced reusable components

## Commit
`Day 30: Add motor policy creation`
