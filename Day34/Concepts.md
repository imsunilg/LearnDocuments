# Day 34 - Concepts

## Date ranges
- **WHY:** A return date before departure is a classic bug source.
- **WHAT:** Config rule {afterField:"trip.startDate", maxDays:180} - validated in the browser (validateFields) and re-checked in fn_premium_travel.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** dynamic-form/logic.ts, fn_premium_travel.

## Per-traveller pricing
- **WHY:** Premium depends on each traveller's age at departure.
- **WHAT:** The SQL function loops over details.travellers, applies an age band factor, sums the base and then applies add-ons/discounts.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_premium_travel.

## startDateField
- **WHY:** For travel the policy period IS the trip - asking for a second start date invites inconsistency.
- **WHAT:** DynamicQuoteConfig.startDateField = "trip.startDate" hides the generic input and mirrors the departure date.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** DynamicQuotePage.

## Repeating groups
- **WHY:** Each traveller has name, DOB, passport, relationship.
- **WHAT:** type "group" with min/max items; add/remove buttons; per-item validation including minAge/maxAge.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** GroupRenderer, product_field_config (parent_key).
