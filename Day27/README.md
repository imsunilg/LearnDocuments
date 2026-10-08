# DAY 27

- **Topic:** Motor: vehicle, customer, insurance details
- **ReactJS Concept:** Multi-section forms, form state shared across sections (one useForm), nested field names, async combobox, dependent selects
- **Insurance Functionality:** New motor quote form: pick a customer (details auto-fetched), reuse one of their vehicles or enter a new one, choose plan, start date and previous insurance
- **Backend Functionality:** VehicleRequest + validator (registration number format MH12AB1234, year, cc, seats), VehiclesController incl. POST /api/vehicles/upsert
- **Database Functionality:** fn_vehicle_upsert (create-or-update by registration number, blocks vehicles owned by another customer), generated fn_vehicle_*, seeded vehicles

## Learning objectives
- Build a long form in sections
- Validate nested objects with Zod
- Auto-fetch related data when a selection changes
- Normalise input (registration numbers)

## What I learned
- Nested form names keep sections together
- Auto-fetching related records makes forms feel instant
- Normalise identifiers everywhere

## Why this approach is used
A single form state is the foundation for the wizard (Day 37) and for live premium calculation (Day 28).

## Common mistakes
- One <form> per section
- Not clearing dependent fields when the parent changes
- Trusting the client to normalise identifiers

## Interview questions
1. **How do you validate a nested object in React Hook Form?**
   Use a Zod schema with nested z.object and dotted field paths in register().
2. **What is a combobox?**
   An input paired with a popup list; ARIA roles combobox/listbox/option make it accessible.

## Practice task
Auto-fetch customer details by selecting a customer (done) - now also pre-fill "previous insurer" from the customer's last proposal.

## Next day's topic
Day 28 - Motor: premium calculation UI

## Commit
`Day 27: Add motor vehicle, customer and insurance details`
