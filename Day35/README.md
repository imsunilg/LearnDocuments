# DAY 35

- **Topic:** Health Insurance
- **ReactJS Concept:** Repeating groups, NESTED arrays in forms (members → conditions), group-scoped showIf, plan-type radio driving pricing
- **Insurance Functionality:** Health quote + proposal: 1-6 members, pre-existing conditions, individual vs family floater, 1-3 year terms
- **Backend Functionality:** No new endpoints; HEALTH plugs in via fn_premium_health
- **Database Functionality:** fn_premium_health (age bands, floater pricing on the eldest member + per-member loading, pre-existing loading, term discount), HEALTH field definition with a nested group, recursive fn_product_field_tree

## Learning objectives
- Handle arrays inside arrays
- Scope visibility rules to a group item
- Price one cover per member vs one shared cover

## What I learned
- Scope strings (details.members.0.conditions) make nested forms tractable
- Recursion belongs in the data function, not the UI

## Why this approach is used
After three product lines the engine proved itself: Health needed no new React logic at all.

## Common mistakes
- Using array index as identity when removing items (use the field array id)
- Evaluating showIf against the root instead of the item scope

## Interview questions
1. **How do you build nested dynamic arrays in react-hook-form?**
   useFieldArray at each level with fully qualified names like members.0.conditions.
2. **Why is recursion in SQL written in plpgsql here?**
   A SQL-language function cannot reference itself while it is being created.

## Practice task
Add a family floater vs individual toggle (done as a radio) - add a "senior citizen" (60+) warning banner that appears when any member is older than 60.

## Next day's topic
Day 36 - Tabs, accordion, stepper, wizard

## Commit
`Day 35: Add health insurance`
