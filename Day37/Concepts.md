# Day 37 - Concepts

## One form, many steps
- **WHY:** Per-step forms lose cross-step logic and values.
- **WHAT:** A single useForm + FormProvider wraps the Wizard; steps are just different JSX; values survive unmounting (shouldUnregister is false).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ProposalWizardPage.

## Per-step validation with trigger()
- **WHY:** Only the current step's fields should block "Next".
- **WHAT:** trigger("customerId"), trigger(["typeCode","productId"]), trigger("details") run the resolver but report errors only for those names.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Wizard step.validate().

## Composite resolver
- **WHY:** What is required depends on the chosen product line.
- **WHAT:** makeResolver = zodResolver(base) + motor zod issues OR dynamic-field rules, merged into one error tree.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ProposalWizardPage.makeResolver.

## Path prefix reuse
- **WHY:** The motor sections existed as `vehicle.make`; in the wizard they live at `details.vehicle.make`.
- **WHAT:** <MotorDetailsFields prefix="details."/> builds every field name from the prefix.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** features/motor/MotorDetailsFields.tsx (also used by the motor quote page).

## Partial drafts & resume
- **WHY:** Users leave half way.
- **WHAT:** Save & exit stores customer, plan and whatever was typed, without a price (partial=true). Resume starts at the Details step. Submitting always re-validates and recalculates.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_proposal_save, /proposals/:id/resume.

## Atomic unified submission
- **WHY:** Create-then-submit as two calls can leave an orphan draft if the second fails.
- **WHAT:** fn_proposal_save_and_submit runs both in one transaction.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** POST /api/proposals/submit.
