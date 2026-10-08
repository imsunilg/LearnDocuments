# DAY 31

- **Topic:** Advanced reusable components
- **ReactJS Concept:** Compound components (context-based), form sections, FormProvider/useFormContext, wrapper fields, ARIA wiring by construction
- **Insurance Functionality:** The motor quote form rebuilt from FormSection / FormGrid / TextField / SelectField
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Build a compound component with context
- Remove prop drilling in big forms
- Make accessibility automatic

## What I learned
- Compound components model "family of parts" cleanly
- FormProvider ends prop drilling in forms

## Why this approach is used
Phase 4 has four large forms; shared field components keep them consistent and accessible.

## Common mistakes
- Cloning children everywhere instead of using context
- Forgetting that useFormContext needs a FormProvider

## Interview questions
1. **What is a compound component?**
   A group of components that share implicit state via context, giving a flexible declarative API.
2. **Why useId?**
   Generates SSR-safe unique ids for label/aria wiring.

## Practice task
Create a reusable AddressSection (address line, State→City, pincode) that works with any field-name prefix.

## Next day's topic
Day 32 - Dynamic field rendering, configuration-driven UI

## Commit
`Day 31: Add advanced reusable form components`
