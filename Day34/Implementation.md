# Day 34 - Implementation

## What was built
- Travel routes and pages (config only)
- TRAVEL form definition
- fn_premium_travel + rates
- End date from trip.endDate when issuing the policy

## Code walkthrough
Travel → New quote → destination Europe, 10 days, two travellers aged 34 and 7: the premium is Σ (cover × rate × 0.10 trip-length share × 1.8 zone × age factor). Changing the return date to 200 days later shows the 180-day rule.

## Architecture changes
None.
