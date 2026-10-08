# Day 27 - Implementation

## What was built
- MotorQuotePage (customer / vehicle / insurance sections)
- CustomerPicker combobox
- motorSchema.ts
- vehicleApi + Vehicle model
- Vehicle upsert endpoint and seeds

## Code walkthrough
Selecting a customer fetches /api/customers/{id} and /api/vehicles?customerId=…; chips offer their registered vehicles. "Save vehicle details" validates all three sections, then upserts the vehicle. The same form state feeds premium calculation on Day 28.

## Architecture changes
None.
