# DAY 23

- **Topic:** Broker Management
- **ReactJS Concept:** Reuse and extract a generic CRUD page pattern (CrudListPage<T>); lookup (remote select) fields
- **Insurance Functionality:** Brokers (IRDAI registration, GST, firm details) and agents linked to brokers
- **Backend Functionality:** BrokersController + BrokerRequest/validator (GSTIN pattern)
- **Database Functionality:** brokers table, FK agents.broker_id → brokers, vw_agents joins the broker name, seeded brokers

## Learning objectives
- Recognise duplication across pages
- Extract a generic page component
- Add relationships (select loaded from the API)

## What I learned
- Extract patterns once they repeat
- Generic components still need escape hatches (rowActions, headerActions)

## Why this approach is used
The CRUD kit makes the next ten modules cheap while custom pages remain possible.

## Common mistakes
- Abstracting too early
- Passing dozens of boolean props instead of slots

## Interview questions
1. **When do you extract a shared component?**
   When the same structure appears three times and the differences can be expressed as props/slots.
2. **How do you model a foreign key in a form?**
   A select whose options come from the related entity; the value is the id.

## Practice task
Add a "Show agents" row action on the brokers table that links to /agents?brokerId=<id> and make AgentsPage read that filter from the URL.

## Next day's topic
Day 24 - Insurance Product Management

## Commit
`Day 23: Add broker management`
