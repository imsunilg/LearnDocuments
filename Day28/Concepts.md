# Day 28 - Concepts

## Single source of truth for pricing
- **WHY:** Duplicated formulas in UI, API and reports drift apart.
- **WHAT:** The formula lives in PostgreSQL (fn_premium_motor); the UI only displays the returned breakup.
- **HOW:** Dispatcher builds the function name from the product type: fn_premium_<type>. Adding Health/Home/Travel later adds one function each.
- **WHERE (in LearnInsurance):** 300_premium.sql, usePremium.ts.

## Derived state + useMemo
- **WHY:** The details document and quote readiness are computed from the form, not stored.
- **WHAT:** `useMemo(() => buildMotorDetails(values), [JSON.stringify(values)])`.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** MotorQuotePage, motorDetails.ts.

## Debounced live quote
- **WHY:** Every keystroke would trigger a calculation.
- **WHAT:** usePremium debounces the serialized input 500 ms, only fires when `ready`, cancels stale requests, and flags `stale` while waiting.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** features/premium/usePremium.ts.

## Insurance maths
- **WHY:** Understand the premium.
- **WHAT:** Own damage = IDV × plan rate × age factor × engine factor. + mandatory third-party + add-ons (% of OD or flat). − NCB% of OD. × term. + 18% GST.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_premium_motor.
