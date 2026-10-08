# Day 44 - Implementation

## What was built
- ClaimsPage, ClaimIntimationPage, ClaimDetailsPage
- PolicyPicker, SearchBox
- claimQueries (queries + mutations)
- Claims DB objects and seed

## Code walkthrough
Claims → Intimate a claim: pick a policy, the claim types offered depend on the product line. As ClaimsOfficer open a claim: Start review → Approve (enter amount ≤ claimed) → Mark settled. Every step appears in the timeline.

## Architecture changes
None.
