# Day 45 - Concepts

## Idempotency key
- **WHY:** A double-click or network retry must never charge a customer twice.
- **WHAT:** The client creates one UUID per payment attempt and sends it as Idempotency-Key. fn_payment_start returns the existing row if the key was seen.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PayDialog (useRef key), fn_payment_start.

## Gateway abstraction
- **WHY:** Real gateways (Razorpay etc.) can be swapped in without touching business code.
- **WHAT:** IPaymentGateway has a mock implementation with deterministic failures: fail@upi, card ending 0000 / 1111, bank DOWN.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Infrastructure/Payments.

## Failures are data
- **WHY:** Support needs to see why a payment failed.
- **WHAT:** A failed attempt is stored with the gateway message; the dialog offers Try again with a NEW key.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_payment_complete, PaymentsList.

## Invalidate across features
- **WHY:** Paying changes the policy payment status too.
- **WHAT:** usePay invalidates both payment and policy query keys on settle.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** paymentQueries.
