# Day 24 - Concepts

## Master-detail
- **WHY:** Users think "Motor → its products".
- **WHAT:** Selecting a tile (master) re-queries the grid (detail) with baseParams.productTypeId.
- **HOW:** The grid is keyed by the selection so its page/search state resets.
- **WHERE (in LearnInsurance):** ProductsPage.

## Cross-field validation in a config-driven form
- **WHY:** effectiveTo ≥ effectiveFrom; max ≥ min.
- **WHAT:** FieldDef.validate(value, allValues) feeds a Zod superRefine.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fieldDefs.buildSchema, ProductsPage.buildFields.

## Derived values in the database
- **WHY:** Lifecycle (Upcoming/Live/Expired) depends on today.
- **WHAT:** A CASE expression in the view, filterable and sortable.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** entities.mjs → product.extraSelect.

## Nested layout routes
- **WHY:** Products and Product types share a sub-nav.
- **WHAT:** undefined
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ProductsLayout + router.
