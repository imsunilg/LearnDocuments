# Day 32 - Concepts

## Configuration-driven UI
- **WHY:** Product teams change questions weekly; deployments should not be needed.
- **WHAT:** Fields, sections, options, rules and visibility are rows in product_field_config. The engine renders them.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** components/dynamic-form/*.

## Field registry
- **WHY:** Avoid a giant switch(type) that must change for every new input.
- **WHAT:** A Map<type, Renderer>. New types call registerFieldType("rating", RatingField).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** dynamic-form/registry.tsx.

## Conditional visibility
- **WHY:** Questions only apply sometimes (contents value only when contents cover is ticked).
- **WHAT:** showIf { field, equals|notEquals|in }. Hidden fields are skipped in validation and removed from the payload.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** logic.ts (matchesShowIf, toDetails, validateFields).

## Repeating groups
- **WHY:** Members/travellers are lists of sub-forms.
- **WHAT:** type "group" + useFieldArray; children are rendered with scope "details.members.0".
- **HOW:** undefined
- **WHERE (in LearnInsurance):** GroupRenderer.

## Resolver composition
- **WHY:** Part of the form is static (zod), part is dynamic.
- **WHAT:** withDynamicValidation(base, getFields) merges errors from both.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** dynamic-form/resolver.ts.
