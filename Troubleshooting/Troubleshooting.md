# Troubleshooting – problems we actually hit

| Symptom | Cause | Fix |
|---|---|---|
| `CREATE DATABASE` makes `learninsurancedb` (lower-case) | Windows PowerShell 5.1 strips embedded quotes from native args | `setup.ps1` writes the SQL to a temp file and runs `psql -f` |
| API 500 / "relation does not exist" | schema not applied or wrong `Search Path` | run `LearnDB/setup.ps1`; connection string must end with `Search Path=learninsurancedb` |
| `dotnet build` fails: file locked | the API is still running (`LearnAPI.exe`) | stop it (`restart-api` script / Task Manager) then rebuild |
| Swashbuckle vs OpenApi version conflict | `Microsoft.AspNetCore.OpenApi` + Swashbuckle 10 | removed OpenApi package, pinned Swashbuckle 6.9.0 |
| zod resolver types mismatch | zod 3.x resolved by default | `npm i zod@latest` (4.x) |
| Refresh cookie not sent cross-origin | cookie is `SameSite=Lax`; SPA and API on different sites | same-origin reverse proxy, or CORS + `withCredentials` for localhost dev |
| Two refresh calls at startup (StrictMode) | effects run twice in dev | single-flight `refreshSession` |
| `Hooks order` error with dynamic renderers | called a component as a function | render `<Renderer/>` as an element |
| Optimistic toggle shows wrong state after failure | missing rollback | `onError` restores the snapshot from `onMutate` |
| Upload returns 400 "One or more validation errors" | `Content-Type: application/json` default overrode multipart | set `Content-Type: multipart/form-data` for FormData so axios adds the boundary |
| Viewer got 400 instead of 403 on POST | `[ApiController]` model-state filter ran before the permission filter | register `PermissionFilter` with order −3000 (`Filters.Add(typeof(..), -3000)`) |
| Login returns 429 during testing | login limit is 10/minute/IP | wait a minute, or raise `RateLimiting:AuthPerMinute` in `appsettings.Development.json` |
| Profiler "Maximum update depth" | `setState` inside `Profiler.onRender` | write to a ref/DOM node instead |
| PowerShell edits corrupt `₹`/emoji | `Get-Content`/`Set-Content` without `-Encoding` use ANSI | use `[IO.File]::ReadAllText/WriteAllText` with UTF-8 (or the editor tools) |
| Production API won't start | `StartupChecks` found placeholder secrets | set `ConnectionStrings__…`, `Jwt__Key`, `Cors__AllowedOrigins__0` |
| Policy ids don't start at 1 in demo data | identity sequence continued after seed deletes | look the id up in the list, don't hard-code it |

## Useful commands

```powershell
curl http://localhost:5080/health                    # API alive?
psql -h localhost -U postgres -d LearnInsuranceDB    # \dt learninsurancedb.*   \df learninsurancedb.fn_*
npm run lint ; npm test ; npx tsc -b                 # front-end checks
```

## Finding one failed request

1. Browser DevTools → Network → the failing call → response header `X-Correlation-Id` (also in the error JSON).
2. Administration → **Audit log** → search that id (state-changing calls), or grep the API log for it (every log line has the id in its scope).
