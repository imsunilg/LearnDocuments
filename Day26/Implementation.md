# Day 26 - Implementation

## What was built
- ProposalListPage + MotorListPage
- StatusBadge (one colour map for all workflows)
- proposal.ts model (including PremiumBreakup)
- vehicles / proposals / status_history tables

## Code walkthrough
GET /api/proposals?productTypeCode=MOTOR&vehicleType=CAR&status=Draft returns the page of motor proposals; the filter keys are mapped to snake_case columns of the view by the generated function.

## Architecture changes
None.
