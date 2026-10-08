# Day 35 - Concepts

## Nested field arrays
- **WHY:** Each member can have several conditions.
- **WHAT:** GroupRenderer inside GroupRenderer: useFieldArray on `details.members.0.conditions`. showIf of a child is evaluated in its item scope (`preExisting` of THAT member).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** registry.tsx, logic.ts (scope paths).

## Recursive configuration
- **WHY:** The server must return nested groups of any depth.
- **WHAT:** fn_product_field_tree(type, parent) calls itself for every group field.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** functions/330_product_fields.sql.

## Insurance maths (health)
- **WHY:** Know what you price.
- **WHAT:** Individual: Σ(SI × rate × age factor) + 15% loading per flagged member. Floater: one SI × rate × eldest member factor + 20% per extra member (+15% once if anyone is flagged). Multi-year terms get a discount and multiply.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_premium_health.

## Radio-driven behaviour
- **WHY:** Floater vs individual changes the whole calculation and the sum insured shown.
- **WHAT:** cover.planType is a radio in the configuration; the SQL function branches on it.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** product_field_config, fn_premium_health.
