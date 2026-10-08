# DAY 57

- **Topic:** Environment Configurations and Production Build
- **ReactJS Concept:** Vite modes and .env files (development / staging / production), import.meta.env, build-time define for version and build time, no source maps in production, CSP computed from the API origin
- **Insurance Functionality:** The same code must run safely in dev, staging and production without secrets in the repository
- **Backend Functionality:** appsettings.{Environment}.json layering, environment-variable overrides (double underscore), StartupChecks that refuse to start with placeholder secrets, optional forwarded-headers support behind a reverse proxy
- **Database Functionality:** No change (connection string comes from ConnectionStrings__LearnInsuranceDb outside development)

## Learning objectives
- Separate config from code
- Keep secrets out of git
- Fail fast on bad configuration
- Produce a verified production bundle

## What I learned
- Config is layered, secrets come from the environment
- Validate configuration at startup
- Production bundles ship without source maps

## Why this approach is used
Twelve-factor: strict separation of config from code.

## Common mistakes
- Committing passwords (the local dev password lives only in appsettings.Development.json)
- Putting secrets in VITE_ variables
- Different code paths per environment instead of different config

## Interview questions
1. **Where do secrets go in a React app?**
   Never in the bundle: everything in the browser is public. Secrets live on the server; the client only gets public identifiers and short-lived tokens.

## Practice task
Add a /api/version endpoint returning the assembly version and environment name (no secrets).

## Next day's topic
Day 58 - Docker and docker-compose

## Commit
`Day 57: Add environment configs and production build checks`
