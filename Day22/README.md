# DAY 22

- **Topic:** Agent Management
- **ReactJS Concept:** Reuse patterns; field-definition-driven forms (FieldDef[] → Zod schema → inputs); generic CRUD skeleton
- **Insurance Functionality:** Agents: licence number and expiry, commission %, status, location - create, edit, search, filter, deactivate
- **Backend Functionality:** AgentsController on the generic CRUD base, AgentRequest + FluentValidation
- **Database Functionality:** agents table (code sequence, unique licence/email, check constraints), generated fn_agent_* functions, 12 seeded agents (some expired licences)

## Learning objectives
- Stop hand-writing forms
- Derive validation from configuration
- Build modal CRUD quickly with the shared kit

## What I learned
- Configuration beats copy-paste
- Keep an escape hatch: complex forms (customers, proposals) stay hand-written

## Why this approach is used
Use generic kits for the 80% simple cases and hand-written forms for the 20% with real logic.

## Common mistakes
- Over-generalising until the config is a programming language
- Losing type safety with `any` payloads

## Interview questions
1. **When is a config-driven form a bad idea?**
   When fields have complex cross-field logic or custom widgets - write those by hand.
2. **How do you keep client and server rules in sync?**
   Mirror them in Zod, FluentValidation and DB constraints.

## Practice task
Highlight licences that expire within 30 days (orange) or have already expired (red) in the Licence column.

## Next day's topic
Day 23 - Broker Management

## Commit
`Day 22: Add agent management`
