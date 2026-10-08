# Day 29 - API changes

- POST /api/proposals
- PUT /api/proposals/{id} (drafts only)
- POST /api/proposals/{id}/submit
- POST /api/proposals/{id}/decision {decision: review|approve|reject, remarks}
- POST /api/proposals/{id}/cancel
- GET /api/proposals/{id}/timeline
