# DAY 32

- **Topic:** Dynamic field rendering, configuration-driven UI
- **ReactJS Concept:** Rendering UI from JSON config, the field registry pattern, repeating groups with useFieldArray, conditional fields (showIf), cascading selects, custom resolver composition
- **Insurance Functionality:** A form engine that renders the Home (and later Travel/Health) proposal questions from the database
- **Backend Functionality:** GET /api/products/form-fields/{typeCode}
- **Database Functionality:** product_field_config table, fn_product_get_fields (nested groups, ready for the engine), HOME field definitions seeded

## Learning objectives
- Describe a form as data
- Implement a registry of field renderers
- Validate dynamically (visibility-aware)
- Support nested groups and dependent selects

## What I learned
- Data-driven forms trade flexibility for indirection - keep a hand-written escape hatch (the Motor form)
- Validate on visible fields only

## Why this approach is used
Three product lines share one engine; each new line is data plus a premium function.

## Common mistakes
- Validating hidden fields
- Storing hidden values in the payload
- Not resetting dependent selects when the parent changes

## Interview questions
1. **What is the registry pattern?**
   A lookup table mapping keys to implementations so new implementations can be added without editing the dispatcher.
2. **How do you validate fields that may be hidden?**
   Evaluate visibility first, validate only visible fields.

## Practice task
Add a new field type "radio group" to the engine (the Home config already uses type radio - read RadioRenderer, then add a "rating" type that renders 1-5 stars).

## Next day's topic
Day 33 - Home Insurance

## Commit
`Day 32: Add configuration-driven dynamic forms`
