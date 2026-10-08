# Day 58 - Concepts

## Multi-stage builds
- **WHY:** The .NET SDK and Node toolchain are huge and are attack surface in production.
- **WHAT:** Build in a heavy stage, copy only the output into a small runtime image (aspnet, nginx).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Dockerfiles.

## Layer caching
- **WHY:** Rebuilds should take seconds.
- **WHAT:** Copy package.json / csproj first, restore dependencies, then copy the source: dependency layers are reused until dependencies change.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Dockerfiles.

## nginx as the front door
- **WHY:** One origin for site and API keeps the httpOnly refresh cookie same-site and removes CORS from the browser path.
- **WHAT:** Static files with SPA fallback, /api proxied to the api service with X-Forwarded headers, hashed assets cached a year, index.html never cached.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** nginx.conf.

## Compose orchestration
- **WHY:** Start order and data lifetime matter.
- **WHAT:** depends_on with a pg_isready healthcheck, named volumes dbdata and uploads, secrets via ${DB_PASSWORD} and ${JWT_KEY} from .env (compose refuses to start without them).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** docker-compose.yml.
