# Day 45 - API changes

- GET /api/payments?status=&paymentMode=&policyId=
- POST /api/payments/pay (Idempotency-Key header)
- POST /api/payments/{id}/refund
