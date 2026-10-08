# Day 21 - Concepts

## Derived state
- **WHY:** The state of a row/column checkbox follows from the individual checkboxes - storing it separately would drift.
- **WHAT:** Compute checked/indeterminate during render from the Set of selected keys.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PermissionMatrix.state().

## Indeterminate checkbox
- **WHY:** Show "some selected".
- **WHAT:** Only settable via the DOM property `input.indeterminate`.
- **HOW:** A tiny TriCheckbox sets it in an effect through a ref.
- **WHERE (in LearnInsurance):** PermissionMatrix.

## Immutable Set updates
- **WHY:** React needs a new reference.
- **WHAT:** `const next = new Set(selected); next.add(k); setSelected(next)`
- **HOW:** undefined
- **WHERE (in LearnInsurance):** toggle().

## Local editable copy of server data
- **WHY:** The user edits a draft; nothing is saved until "Save".
- **WHAT:** Copy fetched data into state in an effect, track `dirty`.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** RolePermissionsPage.
