# Day 22 - Concepts

## Configuration-driven forms
- **WHY:** Ten similar forms = ten chances for inconsistency.
- **WHAT:** A FieldDef[] array describes labels, types, rules and sections.
- **HOW:** buildSchema(fields) generates a Zod schema; EntityForm renders inputs; toPayload converts strings to numbers/null.
- **WHERE (in LearnInsurance):** components/forms/fieldDefs.ts, EntityForm.tsx, features/agents/agentFields.ts.

## Generic modal CRUD
- **WHY:** Simple master data does not need its own pages.
- **WHAT:** EntityFormModal<T> creates or edits any entity and shows server errors.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** AgentsPage.

## Generated SQL
- **WHY:** CRUD functions are mechanical.
- **WHAT:** entities.mjs describes the table; gen-crud.mjs emits view + 6 functions.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** LearnDB/tools.
