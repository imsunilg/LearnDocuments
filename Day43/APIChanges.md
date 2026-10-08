# Day 43 - API changes

- GET /api/endorsements?policyId=&status=
- POST /api/endorsements { policyId, type, effectiveDate, data, remarks }
- POST /api/endorsements/{id}/decision { approve, remarks }
