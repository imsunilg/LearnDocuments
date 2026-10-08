# Day 28 - Implementation

## What was built
- PremiumSummary (presentational), usePremium hook
- Cover & add-ons section with IDV suggestion
- Premium tables, rates seed and calculation functions
- PremiumController

## Code walkthrough
Changing any input updates `details`; after 500 ms of silence usePremium POSTs it. The API forwards to fn_premium_calculate which validates IDV range/NCB/add-ons and returns the breakup. Business errors (e.g. IDV out of range) show under the summary.

## Architecture changes
None.
