# Day 40 - Implementation

## What was built
- PoliciesPage with FilterPanel, facet chips, URL state
- useUrlFilters, FilterPanel, policyQueries
- fn_policy_search + indexes + demo policies

## Code walkthrough
Open /policies?effectiveStatus=Expired&sortBy=totalPremium&sortDir=asc directly: the page opens already filtered and sorted. Change a filter: the URL updates, Back/Forward move through states, refresh keeps everything.

## Architecture changes
None.
