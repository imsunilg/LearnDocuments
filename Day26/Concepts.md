# Day 26 - Concepts

## Route-level lazy loading
- **WHY:** Users who never open Motor should not download its code.
- **WHAT:** React Router route `lazy: () => import(...)` returning { Component }.
- **HOW:** The chunk loads on first navigation; Vite creates a separate JS file.
- **WHERE (in LearnInsurance):** router.tsx → motor routes.

## Shared, configurable list page
- **WHY:** Motor/Health/Home/Travel lists differ only by filter and one column.
- **WHAT:** ProposalListPage(productTypeCode, extraFilter, extraColumn).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** features/proposals/ProposalListPage.tsx.

## Computed view columns
- **WHY:** Vehicle type and registration number live inside proposals.details jsonb.
- **WHAT:** vw_proposals exposes `details->'vehicle'->>'vehicleType'` as a column, so it is sortable and filterable.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** entities.mjs (proposal.view).
