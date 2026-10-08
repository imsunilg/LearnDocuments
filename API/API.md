# LearnInsurance – API reference (summary)

Base URL (dev): `http://localhost:5080/api` · Swagger UI (dev only): `http://localhost:5080/swagger`
Auth: `Authorization: Bearer <accessToken>` · Errors: RFC 7807 ProblemDetails with `traceId` and `correlationId`.
Send `X-Correlation-Id` (8–64 chars, `[A-Za-z0-9_-]`) to correlate a call with logs and the audit trail; the API echoes it.

## Conventions

* **List endpoints** (`GET /api/<entity>`) accept `search`, `page`, `pageSize`, `sortBy`, `sortDir` plus entity-specific filters (any other query key is treated as a filter). They return `{ items, page, pageSize, totalCount }`.
* **Generated CRUD** (`customers`, `agents`, `brokers`, `products`, `product-types`, `master-data`, `users`, `roles`, …): `GET /`, `GET /{id}`, `POST /`, `PUT /{id}`, `PATCH /{id}/status`, `DELETE /{id}` (soft delete).
* **Permissions**: `module.view|create|edit|delete`, plus special ones (`policies.issue`, `claims.approve`, `payments.refund`, `reports.view`, `admin.view`).
* **Status codes**: 400 validation/business rule · 401 not signed in · 403 missing permission · 404 not found · 409 duplicate/conflict · 429 rate limited.

## Endpoints

| Area | Endpoint | Notes |
|---|---|---|
| Auth | `POST /auth/login` (rate limited 10/min) · `POST /auth/refresh` · `POST /auth/logout` · `GET /auth/me` | refresh uses the httpOnly cookie |
| Customers | CRUD `/customers` | KYC status, search by name/mobile/PAN |
| Agents / Brokers | CRUD `/agents`, `/brokers` | |
| Products | CRUD `/products`, `/product-types` · `GET /products/form-fields/{typeCode}` | dynamic form definition per product line |
| Master data | CRUD `/master-data` · `GET /master-data/by-type/{type}?parentId=` · `GET /master-data/types` | cached dropdown data |
| Vehicles | `POST /vehicles/upsert` + list/get | |
| Premium | `POST /premium/calculate` · `GET /premium/rates/{group}` · `GET /premium/motor-idv` | calculation lives in PostgreSQL |
| Proposals | list/get · `POST /proposals/submit` · `POST /proposals/{id}/submit` · `/decision` · `/cancel` · `GET /{id}/timeline` | partial drafts supported |
| Policies | list/search/get · `GET /policies/{id}/details` · `POST /policies/issue` (`policies.issue`) | |
| Renewals | `GET /renewals/{policyId}/quote` · `POST /renewals/{policyId}/renew` · `/decline` | NCB step-up |
| Endorsements | list/get/create · `POST /endorsements/{id}/decision` | diff + approval |
| Claims | list/get/create · `POST /claims/{id}/status` (approve/reject need `claims.approve`) · `GET /{id}/timeline` | workflow transitions |
| Payments | list/get · `POST /payments/pay` (**requires `Idempotency-Key`**) · `POST /payments/{id}/refund` (`payments.refund`) | mock gateway rules: `fail@upi`, card `…0000` declined, `…1111` insufficient funds, bank `DOWN` |
| Documents | list/get · `POST /documents` (multipart) · `GET /documents/{id}/content?inline=true` · `DELETE /documents/{id}` | ≤ 5 MB; pdf, png, jpg, docx, txt; magic-byte checked |
| Reports | `GET /reports/dashboard?from=&to=` (`reports.view`) | one document with KPIs and chart series |
| Audit | `GET /audit-logs` (`admin.view`) | read-only; filter by user, entity, method, status, correlation id |
| Users / Roles | CRUD `/users` (+ `/reset-password`) · `/roles` (+ `/{id}/permissions`) · `GET /permissions/catalog` | |
| Health | `GET /health`, `GET /api/health` | anonymous liveness |

## Example – pay a premium

```http
POST /api/payments/pay
Authorization: Bearer …
Idempotency-Key: 6f1c0e9a…          # new key per attempt; re-send the SAME key after a network error
Content-Type: application/json

{ "policyId": 21, "mode": "UPI", "reference": "asha@okbank" }
```
`201` → payment `{ status: "Success", receiptNo: "RCT-2026-000015", … }` or `status: "Failed"` with `gatewayResponse.message`.
