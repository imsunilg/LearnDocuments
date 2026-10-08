# DAY 41

- **Topic:** Policy Details
- **ReactJS Concept:** Detail pages composed of tabs, data prefetching (prefetchQuery on hover/focus), one query for a whole aggregate, accordion sections generated from data
- **Insurance Functionality:** Policy details page: Summary (certificate), Insured details (vehicle / property / members ...), Premium breakup, History timeline; print-friendly
- **Backend Functionality:** GET /api/policies/{id}/details
- **Database Functionality:** fn_policy_get_details - policy, customer snapshot, insured sections and status history as ONE JSON document

## Learning objectives
- Build a tabbed detail page
- Fetch an aggregate in one request
- Prefetch to make navigation feel instant

## What I learned
- Prefetch what the user is about to open
- Design endpoints around screens when it removes round trips

## Why this approach is used
The policy file is the heart of servicing: everything about a policy in one place.

## Common mistakes
- N+1 requests per tab
- Prefetching everything on page load (waste)

## Interview questions
1. **What is prefetching and when is it worth it?**
   Loading data before it is needed, triggered by intent (hover/focus/idle). Worth it for likely next navigations.

## Practice task
Add a print-friendly policy summary (done via print CSS) - add a "Download PDF" button that calls window.print() with only the certificate tab visible.

## Next day's topic
Day 42 - Policy Renewal

## Commit
`Day 41: Add policy details`
