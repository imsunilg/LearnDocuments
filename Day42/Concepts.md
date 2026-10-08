# Day 42 - Concepts

## Derived (computed) status
- **WHY:** A stored "overdue" flag is wrong the next day.
- **WHAT:** renewal_status is computed in the view from end_date and the existence of a child policy: Renewed / Declined / Overdue / Due. The UI derives urgency colours from daysToExpiry.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** vw_renewals, RenewalsPage.Urgency.

## Renewal quote
- **WHY:** Customers want to see what changes before paying.
- **WHAT:** fn_renewal_quote rebuilds the proposal details from the policy sections, steps the motor NCB up one slab (reset to 0 if a claim exists), refreshes the IDV for the older vehicle, and prices it with the normal calculator.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_renewal_quote.

## Insurance concept: NCB
- **WHY:** No Claim Bonus rewards claim-free years.
- **WHAT:** 0 → 20 → 25 → 35 → 45 → 50 % discount on own-damage premium; any claim resets it.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_next_ncb.

## Quote freshness
- **WHY:** A quote is a point-in-time price.
- **WHAT:** useRenewalQuote uses staleTime 0 / gcTime 0 so the dialog always fetches a new quote.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** renewalQueries.ts.

## Invalidate several caches
- **WHY:** Renewing changes the due list AND creates a policy.
- **WHAT:** Promise.all([invalidate renewals, invalidate policies]) so every screen is consistent.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** useRenewPolicy.
