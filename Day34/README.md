# DAY 34

- **Topic:** Travel Insurance
- **ReactJS Concept:** Date-range handling (cross-field date rules), conditional sections, repeating traveller groups, linking a form field to a common field (startDateField)
- **Insurance Functionality:** Travel quote + proposal: destination zone, trip dates (max 180 days), 1-6 travellers with age-based pricing, adventure-sports add-on
- **Backend Functionality:** No new endpoints - the generic proposal/premium APIs serve Travel; policy end date = trip return date
- **Database Functionality:** fn_premium_travel (zone × trip-length × age bands, adventure +25%, group discount), travel rating rows, TRAVEL field configuration incl. the travellers group, relaxed policy date check (one-day trips)

## Learning objectives
- Validate date ranges across fields
- Show/hide sections conditionally
- Price per person and sum up
- Let a product define its own policy period

## What I learned
- Product-specific policy periods belong in the issuing function
- Rules that exist in the UI must also exist in the pricing function

## Why this approach is used
Travel shows the engine handling lists, dates and per-item rules without any travel-specific React code.

## Common mistakes
- Computing age at today instead of at departure
- Allowing the return date before departure

## Interview questions
1. **How do you validate that one date is after another?**
   A cross-field rule evaluated with both values (here afterField), mirrored on the server.

## Practice task
Add multi-traveller support with age-based premium (done) - add an "infant discount" (age < 2) as a new rate row and function branch.

## Next day's topic
Day 35 - Health Insurance

## Commit
`Day 34: Add travel insurance`
