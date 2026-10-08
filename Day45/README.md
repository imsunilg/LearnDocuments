# DAY 45

- **Topic:** Payment Management
- **ReactJS Concept:** Idempotency keys held in a ref, mutations that record failures as data, dialogs with success/failure states, printable receipt, cross-feature query invalidation
- **Insurance Functionality:** Collect premium by UPI/card/netbanking/cheque/cash, mock gateway outcomes, payment history, receipts and refunds; policy shows Paid / Unpaid / Failed
- **Backend Functionality:** PaymentsController: POST /api/payments/pay (needs Idempotency-Key header), POST /{id}/refund (payments.refund), generic list/get; MockPaymentGateway behind IPaymentGateway; PaymentService orchestrates start → gateway → complete
- **Database Functionality:** payments table, fn_payment_start (idempotent), fn_payment_complete (receipt number), fn_payment_refund, fn_policy_amount_due; vw_policies gains amount_paid and payment_status; 16 demo payments

## Learning objectives
- Make a payment safe to retry
- Separate gateway from business logic
- Record failures, not just successes
- Build a printable receipt

## What I learned
- Idempotency protects money flows
- Keep the gateway behind an interface
- Store failed attempts too

## Why this approach is used
Money flows need traceability: every attempt is a row, and retries are safe by construction.

## Common mistakes
- Generating the key on every click
- Marking a policy paid before the gateway answers
- Not invalidating the policy query after paying

## Interview questions
1. **What is an idempotency key?**
   A client-generated unique value per logical operation; the server returns the original result when it sees the same key again, making retries safe.

## Practice task
Add a partial-payment option (amount below due) and show the remaining balance on the policy.

## Next day's topic
Day 46 - Document Management

## Commit
`Day 45: Add payment management`
