# FINAL LEARNING REPORT – LearnInsurance (Day 1–60)

## 1. What was built
A General Insurance Management portal: **React 19 + TypeScript + Vite** front end, **ASP.NET Core 9** API, **PostgreSQL** database (schema `learninsurancedb` in `LearnInsuranceDB`). Modules: auth & RBAC, customers, agents, brokers, products, master data, motor/home/travel/health quotes (premium engine in PostgreSQL), proposal wizard, policies, renewals, endorsements, claims, payments & receipts, documents (upload/preview/download), reports & dashboard charts, audit log, admin tools. Orange/maroon colourful UI with dark theme.

## 2. Status by phase
| Phase | Result |
|---|---|
| Days 1–44 (foundations → claims) | Built earlier in this project; each day documented in `LearnDocuments/DayNN` and committed |
| Day 45 Payments | Done, browser-tested (fail → retry → receipt) |
| Day 46–47 Documents | Done, browser-tested (validation, preview, download, delete) |
| Day 48–49 Reports & charts | Done; live dashboard; browser-tested |
| Day 50 Errors/correlation/audit | Done; tested |
| Day 51 Performance | Done (perf lab, memoised rows) |
| Day 52 Code splitting | Done (24 lazy pages) |
| Day 53 Security | Done (headers, rate limit, CSP, XSS check) |
| Day 54–55 Tests | 27 Vitest + 39 xUnit, all passing |
| Day 56 Accessibility | axe-core: 0 violations on 12 pages at 1400 px and 390 px |
| Day 57 Env configs | Done; startup checks tested |
| Day 58 Docker | **Files written, NOT executed** (Docker not installed on this machine) |
| Day 59 Review | Lint has 0 errors; a few Fast-Refresh/set-state-in-effect warnings deliberately left |
| Day 60 | Master docs and this report |

## 3. How to run
See `Deployment.md`. Short version: `powershell -File LearnDB/setup.ps1`, then `dotnet run` in `LearnAPI` (port 5080) and `npm run dev` in `LearnWEB` (port 5173). Logins: `admin / Admin@123`; `underwriter`, `agent`, `claims`, `viewer` / `Pass@123`.

## 4. Honest limitations
* **Nothing was pushed to GitHub**: no remote is configured and `gh` is not authenticated. All work is in local git commits (one per day; some earlier days were committed by file group).
* **Docker/compose are untested** (see Deployment §D).
* The payment gateway is a **mock** (deterministic rules); real gateway integration is not included.
* Browser testing was done with Playwright scripts kept outside the repo; only Vitest/xUnit suites are in the repo. There is no CI pipeline.
* Dev database password (`284228`, supplied by the user) is in `LearnAPI/appsettings.Development.json`, which is committed – rotate it and move it to user-secrets before sharing the repo.
* Seed data contains one policy dated after "today" (demo data), which affects period-based report totals slightly.
* Lint warnings remain (Fast Refresh: files export components plus helpers; a few effects that sync state from props).
* Manual browser testing added a few rows (e.g. one extra payment on policy 21, audit-log entries); run `setup.ps1 -Reset` for a pristine demo database.

## 5. What to learn next
Server-side rendering/Next.js, real payment gateway webhooks, background jobs for renewals reminders, e2e tests in CI, observability (OpenTelemetry), database migrations tool, role-based UI customisation.

## 6. Where everything is
`LearnDocuments/README.md` indexes: daily docs, `Architecture/`, `API/`, `React/`, `Database/`, `Troubleshooting/`, `GitHistory.md`, `InsuranceDomain.md`, `Deployment.md`, `ReactJS-Learning-Roadmap.md`, `REACTJS-INTERVIEW-GUIDE.md`.
