# DAY 28

- **Topic:** Motor: premium calculation UI
- **ReactJS Concept:** Derived state, useMemo, calculation services, debouncing live quotes
- **Insurance Functionality:** Live premium calculator (IDV, NCB, add-ons, third-party, GST break-up) beside the motor quote form
- **Backend Functionality:** PremiumController: POST /api/premium/calculate, GET /api/premium/rates/{group}, GET /api/premium/motor-idv
- **Database Functionality:** premium_rates + premium_calculations tables, fn_premium_calculate (dispatcher), fn_premium_motor, fn_motor_idv_suggest, fn_rates_get; rating tables seeded

## Learning objectives
- Keep pricing logic in ONE place
- Derive UI values from form state
- Debounce expensive recalculation
- Explain every rupee of a premium

## What I learned
- Do the maths once, in the database
- A calculator UI is an input → debounced request → breakup view
- Surface business-rule errors next to the result

## Why this approach is used
Rates in tables mean underwriters can change factors without a release.

## Common mistakes
- Re-implementing the formula in JavaScript "for speed"
- Calculating on every keystroke
- Floating-point money in the browser (round on the server)

## Interview questions
1. **Why debounce a live quote?**
   To avoid a request per keystroke and to prevent out-of-order responses overwriting newer ones.
2. **Where should pricing rules live?**
   In one authoritative place (here the DB function) so every channel quotes the same price.

## Practice task
Add an add-on (zero depreciation is there) - add "Key replacement" at ₹250 flat via a new row in premium_rates and see it appear without UI changes.

## Next day's topic
Day 29 - Motor: proposal creation

## Commit
`Day 28: Add motor premium calculation`
