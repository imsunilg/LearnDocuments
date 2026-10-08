# Day 27 - Concepts

## One form, many sections
- **WHY:** Splitting a long form into separate forms loses cross-section logic and values.
- **WHAT:** A single useForm with nested names (`vehicle.make`, `insurance.productId`) and one Zod schema containing nested z.object().
- **HOW:** Each section is just JSX inside the same <form>; errors are looked up by path.
- **WHERE (in LearnInsurance):** MotorQuotePage, motorSchema.ts.

## Async combobox
- **WHY:** A <select> cannot hold 100,000 customers.
- **WHAT:** role="combobox" input + listbox of search results (debounced); selection loads the customer and shows a summary card.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** CustomerPicker.tsx.

## Dependent selects & derived values
- **WHY:** Make → Model is hierarchical; the model carries the vehicle type.
- **WHAT:** useMasterData("VEHICLE_MODEL", makeId); picking a model sets vehicleType from the model meta.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** MotorQuotePage.

## Input normalisation
- **WHY:** MH 12-ab 1234 and mh12ab1234 are the same plate.
- **WHAT:** Uppercase and strip spaces/hyphens as the user types (UI) and again in the API/DB.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** registration field onChange, VehicleRequestValidator.Normalize, fn_vehicle_upsert.
