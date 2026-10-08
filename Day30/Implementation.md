# Day 30 - Implementation

## What was built
- Issue policy button + confirm dialog
- PolicySummaryPage (certificate + print)
- PoliciesPage (basic list)
- Policy tables/functions/view

## Code walkthrough
Underwriter approves a proposal → "Issue policy" → POST /api/policies/issue → fn_policy_create → redirect to /policies/{id} with a success banner. Printing the page hides everything except the certificate.

## Architecture changes
None.
