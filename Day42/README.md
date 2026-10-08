# DAY 42

- **Topic:** Policy Renewal
- **ReactJS Concept:** Date-driven UI and derived states (Due / Overdue / urgency badges), window chips as URL filters, a quote dialog with a premium comparison, mutations that invalidate several caches
- **Insurance Functionality:** Renewals due list with 7/15/30/60/90-day windows; quote & renew dialog showing old vs new premium, NCB step-up and IDV changes; decline with reason
- **Backend Functionality:** RenewalsController: GET /api/renewals, GET /{policyId}/quote, POST /{policyId}/renew, POST /{policyId}/decline
- **Database Functionality:** renewals table; vw_renewals (window of ±90 days, derived renewal_status); fn_renewal_get_due, fn_next_ncb, fn_renewal_quote, fn_renewal_create (one transaction), fn_renewal_decline

## Learning objectives
- Derive status from dates instead of storing it
- Compare two prices clearly
- Run a multi-step server operation atomically
- Invalidate more than one cache after a mutation

## What I learned
- Computed status avoids stale data
- Quote → confirm is a classic two-step mutation pattern

## Why this approach is used
Renewal revenue is the lifeblood of an insurer; the screen must make the next call to the customer obvious.

## Common mistakes
- Storing "overdue" as a column
- Reusing yesterday's cached quote
- Renewing without linking the new policy to the old one

## Interview questions
1. **Why derive instead of store status?**
   Time-based states change without any write; deriving keeps them always correct.
2. **How do you keep an operation atomic across several tables?**
   Run it inside one database function/transaction.

## Practice task
Add the 30/15/7-day due filters (done as chips) - add a "Send reminder" action that records notified_date.

## Next day's topic
Day 43 - Endorsement

## Commit
`Day 42: Add policy renewal`
