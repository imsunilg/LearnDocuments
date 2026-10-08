# Day 31 - Concepts

## Compound components
- **WHY:** A field is label + control + hint + error that must share ids and state. Props for each of those get unwieldy.
- **WHAT:** `<FormField><FormField.Label/><FormField.Control/>…</FormField>`: the parent provides context, the parts read it.
- **HOW:** useId() generates a stable id; Control clones its child and injects id, aria-invalid and aria-describedby.
- **WHERE (in LearnInsurance):** components/forms/FormField.tsx.

## FormProvider / useFormContext
- **WHY:** Passing register and errors to every field is noise.
- **WHAT:** RHF puts the form methods in context; TextField/SelectField read them. `get(errors, "vehicle.make")` resolves nested paths.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fields.tsx, MotorQuotePage.

## Layout components
- **WHY:** Spacing and structure should be consistent.
- **WHAT:** FormSection (titled, optionally collapsible card), FormGrid (responsive columns).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** FormSection.tsx, FormGrid.tsx.

## cloneElement
- **WHY:** Inject props into a child you do not own.
- **WHAT:** React.cloneElement(child, extraProps). Use sparingly - context is usually better.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** FormField.Control.
