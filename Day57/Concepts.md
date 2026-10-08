# Day 57 - Concepts

## Configuration layers
- **WHY:** Each environment needs different values.
- **WHAT:** appsettings.json (defaults) < appsettings.{Env}.json < environment variables < command line. Nested keys map with double underscores: Jwt__Key, ConnectionStrings__LearnInsuranceDb, Cors__AllowedOrigins__0.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** LearnAPI/appsettings*.json.

## Vite env files
- **WHY:** The browser bundle is public, so it can only hold non-secret settings.
- **WHAT:** Only VITE_-prefixed variables reach the client. .env.production uses a relative /api so site and API share one origin behind the proxy (also keeps the httpOnly cookie same-site).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** .env.development / .env.staging / .env.production.

## Fail fast
- **WHY:** A missing secret should stop the deployment, not the first customer request.
- **WHAT:** StartupChecks lists every problem at once: placeholder connection string, short or DEV-ONLY JWT key, localhost CORS origin in production.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** StartupChecks.cs + tests.

## Build metadata
- **WHY:** Bug reports need the exact build.
- **WHAT:** version from package.json and build time are injected with define and shown in the footer; production builds ship without source maps.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** vite.config.ts, Footer.
