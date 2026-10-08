# Deployment

## A. Local development (what was used to build and test this project)

```powershell
# 1. Database (PostgreSQL 14+ on localhost:5432; password 284228 in appsettings.Development.json)
powershell -File LearnDB/setup.ps1            # idempotent: creates LearnInsuranceDB, schema learninsurancedb, tables, functions, indexes, seed
powershell -File LearnDB/setup.ps1 -Reset     # drops the schema first (DESTROYS data)

# 2. API  -> http://localhost:5080  (Swagger at /swagger in Development)
cd LearnAPI; dotnet run

# 3. Web  -> http://localhost:5173
cd LearnWEB; npm install; npm run dev
```

Regenerate generated CRUD SQL after editing `LearnDB/tools/entities.mjs`: `node LearnDB/tools/gen-crud.mjs`, then re-run `setup.ps1`.

## B. Tests

```powershell
cd LearnWEB; npm test                                  # Vitest: 27 tests
cd LearnAPI/tests/LearnAPI.Tests; dotnet test          # xUnit: 39 tests (6 integration tests need the local database)
```

## C. Production build (no Docker)

* **Web**: `npm run build` (uses `.env.production`, relative `/api`) → static files in `LearnWEB/dist` (no source maps, CSP meta tag). Serve with any static host that falls back to `index.html`.
* **API**: `dotnet publish LearnAPI -c Release`. Run with environment variables:

| Variable | Example |
|---|---|
| `ASPNETCORE_ENVIRONMENT` | `Production` |
| `ConnectionStrings__LearnInsuranceDb` | `Host=…;Database=LearnInsuranceDB;Username=…;Password=…;Search Path=learninsurancedb` |
| `Jwt__Key` | random 32+ characters |
| `Cors__AllowedOrigins__0` | `https://insurance.example.com` |
| `Proxy__Enabled` | `true` when behind nginx/a load balancer |
| `Storage__Root` | folder for uploads (back it up!) |

The API refuses to start in Production if a secret is a placeholder (see `StartupChecks`).
* Put both behind HTTPS and **one origin** (reverse proxy: `/` → static files, `/api/` → API) so the httpOnly refresh cookie stays same-site.
* Change the seeded passwords (`admin/Admin@123` etc.) before any real use.

## D. Docker (written, NOT executed – Docker was not available where this was built)

```powershell
copy .env.example .env      # set DB_PASSWORD and JWT_KEY
docker compose up --build   # http://localhost:8080
```

Services: `db` (postgres:17, scripts applied on first start by `LearnDB/docker/init.sh`), `api` (non-root, `Staging` environment so localhost CORS is allowed), `web` (nginx serving the SPA and proxying `/api`). Volumes: `dbdata`, `uploads`. If something fails, treat the error as the next exercise – likely culprits are path/CRLF issues in `init.sh` (`.gitattributes` forces LF) or the `Search Path` in the connection string.

## E. Git

Commits were made locally, one per day (`Day NN: …`). **No remote was configured and GitHub authentication was not available, so nothing has been pushed.** To publish: `git remote add origin <url>` then `git push -u origin <branch>`.
