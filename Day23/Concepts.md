# Day 23 - Concepts

## Rule of three
- **WHY:** Abstract after the third repetition, not before.
- **WHAT:** Users, Agents and Brokers were the same page; CrudListPage<T> captures the common shape.
- **HOW:** Props: columns, fields, api, filters, permissionModule, rowName; slots for extra row actions.
- **WHERE (in LearnInsurance):** components/crud/CrudListPage.tsx.

## Lookup fields
- **WHY:** An agent belongs to a broker chosen from a list.
- **WHAT:** FieldDef.lookup(signal) returns options from the API.
- **HOW:** SelectField uses useApi to load them; the value is the broker id.
- **WHERE (in LearnInsurance):** agentFields.brokerId, services/api/lookups.ts.

## Joined views
- **WHY:** Show the broker name in the agents grid and allow sorting/searching by it.
- **WHAT:** vw_agents LEFT JOINs brokers.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** entities.mjs (agent.extraSelect/joins).
