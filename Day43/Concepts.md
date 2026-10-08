# Day 43 - Concepts

## Endorsement (insurance)
- **WHY:** Policies change after issue - a new car, a new address, a nominee.
- **WHAT:** A controlled change request: validated, priced (pro-rata additional premium or refund), approved by underwriting, then applied to the policy file and recorded in history.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_endorsement_create/decide.

## Pro-rata adjustment
- **WHY:** Only the remaining period is affected.
- **WHAT:** (new total − old total) × remaining days ÷ policy days; negative = refund.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_endorsement_create (VEHICLE_CHANGE).

## Diff view
- **WHY:** Approvers decide on differences, not on whole documents.
- **WHAT:** fn_json_diff returns [{field, from, to}]; DiffView shows struck-through old values and highlighted new ones.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** components/common/DiffView.tsx.

## Type-driven form
- **WHY:** Each endorsement type has different inputs.
- **WHAT:** The form is keyed by type and uses shouldUnregister so fields of the previous type never leak into the payload; validation schema is picked by type.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** EndorsementRequestModal.
