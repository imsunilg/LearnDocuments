# DAY 40

- **Topic:** Policy Search
- **ReactJS Concept:** URL-synced filters (useSearchParams), debounced search, keepPreviousData, reusable FilterPanel, facet counts
- **Insurance Functionality:** Advanced policy search: text, status, product line, expiring-within-N-days, issue-date range, premium range, agent; sort and page - all shareable by URL; demo data of 16 policies
- **Backend Functionality:** PoliciesController.GetAll → fn_policy_search with arbitrary filter keys
- **Database Functionality:** fn_policy_search (safe dynamic SQL with %L/%I, filters + ranges + facets), partial and composite indexes for the filters, 16 demo policies (seed/170) with expired / expiring-soon cases

## Learning objectives
- Make filtered views linkable
- Combine debounce, caching and URL state
- Write a safe dynamic search function
- Index for the filters you offer

## What I learned
- The URL is the best home for list state
- Offer only filters you have indexed

## Why this approach is used
Search is the most used screen in an insurance back office; it must be fast, linkable and forgiving.

## Common mistakes
- Keeping filters only in component state (lost on refresh)
- A history entry per keystroke
- Unwhitelisted ORDER BY

## Interview questions
1. **Why store filters in the URL?**
   Shareable, bookmarkable, back-button friendly, survives refresh.
2. **How do you avoid SQL injection in dynamic search SQL?**
   Parameterise/quote values (%L), quote identifiers (%I), whitelist sortable columns.

## Practice task
Save and reload a filter preset: store named filter sets in localStorage and apply them by writing them back into the URL.

## Next day's topic
Day 41 - Policy Details

## Commit
`Day 40: Add advanced policy search`
