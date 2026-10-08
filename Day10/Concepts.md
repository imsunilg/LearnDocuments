# Day 10 - Concepts

## Server-side pagination
- **WHY:** Never load 100,000 rows into the browser.
- **WHAT:** Send page/pageSize; receive items + totalCount.
- **HOW:** Pagination component renders a window of pages; changing filters resets page to 1.
- **WHERE (in LearnInsurance):** CustomersPage, Pagination.

## Soft delete
- **WHY:** Insurance data must be auditable and recoverable.
- **WHAT:** is_active=false instead of DELETE.
- **HOW:** fn_customer_delete → set_active(false).
- **WHERE (in LearnInsurance):** Customer delete button.

## Validation on both sides
- **WHY:** Client validation is UX; server validation is security.
- **WHAT:** React checks first; FluentValidation re-checks; DB constraints are the last line of defence.
- **HOW:** ValidationFilter throws ValidationException → 400 with `errors` → shown under inputs.
- **WHERE (in LearnInsurance):** CustomerEditor, CustomerRequestValidator.
