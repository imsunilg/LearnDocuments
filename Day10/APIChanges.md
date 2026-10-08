# Day 10 - API changes

- POST /api/customers (201 + Location)
- PUT /api/customers/{id}
- PATCH /api/customers/{id}/status
- DELETE /api/customers/{id} (soft)
- 409 on duplicate email/PAN, 400 on validation errors
