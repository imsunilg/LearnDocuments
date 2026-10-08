# LearnInsurance – Architecture

## 1. Big picture

```
 Browser (React 19 SPA)                    ASP.NET Core 9 Web API                PostgreSQL 17
 ┌──────────────────────┐   JSON / JWT    ┌─────────────────────────┐   SELECT    ┌────────────────────┐
 │ pages → hooks →      │ ──────────────▶ │ middleware pipeline      │ ──────────▶ │ schema learninsurancedb │
 │ TanStack Query →     │ ◀────────────── │ controllers (thin)       │ ◀────────── │ tables, views,      │
 │ axios (interceptors) │  ProblemDetails │ services → IJsonDb       │  jsonb      │ fn_* functions      │
 └──────────────────────┘                 └─────────────────────────┘             └────────────────────┘
```

* **Business rules live in PostgreSQL functions** (`fn_*`). Each returns `jsonb` in camelCase (via `fn_to_camel`), so the API passes JSON straight through. There is no ORM and no SQL in C#.
* **Controllers are thin**: authorise → validate → call one function → return JSON.
* **The React app never trusts itself**: every rule it enforces for UX (validation, hiding buttons) is enforced again on the server.

## 2. Backend request pipeline (order matters)

| # | Component | Purpose |
|---|---|---|
| 1 | `UseForwardedHeaders` (only when `Proxy:Enabled`) | real client IP / https behind a proxy |
| 2 | `CorrelationIdMiddleware` | accepts a safe `X-Correlation-Id` or creates one; echoes it, logs it, returns it in errors |
| 3 | `SecurityHeadersMiddleware` + HSTS (non-dev) | nosniff, DENY framing, strict CSP, no-store |
| 4 | `UseRateLimiter` | 300 req/min per IP globally, 10/min on login |
| 5 | CORS (`web` policy) | before the exception handler so error responses carry CORS headers |
| 6 | `AuditMiddleware` | one row per POST/PUT/PATCH/DELETE (no bodies); sits **outside** the exception handler so it sees the final status |
| 7 | `GlobalExceptionHandler` | exceptions → RFC 7807 ProblemDetails (PG `P0001`→400, `P0002`→404, `23505`→409 …) |
| 8 | Authentication / Authorization | JWT bearer; every endpoint requires a user unless `[AllowAnonymous]` |
| 9 | MVC filters | `PermissionFilter` (order −3000, before the automatic model-state 400) → `ValidationFilter` (FluentValidation) |

## 3. Layers in LearnAPI

```
Controllers/            HTTP only (routes, verbs, status codes)
Application/            Services (PaymentService, DocumentService, AuthService), DTOs, Validators, Interfaces
Infrastructure/         IJsonDb (Npgsql), payment gateway (mock), file storage (local disk), JWT
Middleware/             correlation, audit, security headers, exception handler
Extensions/             DI registration, StartupChecks
Common/                 PermissionFilter, ValidationFilter, exceptions
```

## 4. Security model

* **Authentication**: login returns a 30-minute JWT (kept in memory by the SPA) and sets a rotating, httpOnly `li_rt` refresh cookie (7 days). A single-flight refresh avoids double-refresh races.
* **Authorisation**: permission claims `module.action` (e.g. `claims.approve`). Verb → permission for CRUD controllers (`GET`→view, `POST`→create, `PUT/PATCH`→edit, `DELETE`→delete); an explicit `[HasPermission]` replaces that rule for special actions (issue policy, refund payment, approve claim).
* **Roles seeded**: Admin, Underwriter, Agent, ClaimsOfficer, Viewer.
* **Defence in depth**: client + server validation, parameterised function calls, upload checks (extension allow-list + magic bytes + size + generated storage names), rate limiting, audit trail, security headers, production CSP, startup configuration checks.

## 5. Data flow example – paying a premium

1. `PayDialog` creates one idempotency key per attempt (`useRef`) and `POST /api/payments/pay` with header `Idempotency-Key`.
2. `PaymentService` → `fn_payment_start` (returns the existing row if the key was seen) → `IPaymentGateway.ChargeAsync` → `fn_payment_complete` (receipt number on success).
3. TanStack Query invalidates both the payments and policies caches so the policy shows *Paid*.

## 6. Folder map

| Folder | Contents |
|---|---|
| `LearnWEB` | React app (`src/app`, `components`, `features`, `hooks`, `services`, `models`, `styles`, `test`) |
| `LearnAPI` | Web API + `tests/LearnAPI.Tests` (xUnit) |
| `LearnDB` | `schema/ tables/ functions/ indexes/ seed/ tools/ docker/` and `setup.ps1` |
| `LearnDocuments` | daily docs, master docs, `tools/` doc generator |
