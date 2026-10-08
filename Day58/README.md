# DAY 58

- **Topic:** Docker and docker-compose
- **ReactJS Concept:** Multi-stage build (Node builds, nginx serves), SPA fallback routing, immutable asset caching, same-origin /api proxy
- **Insurance Functionality:** A new developer or a test server gets the complete system (database with seed data, API, web) from one command
- **Backend Functionality:** LearnAPI/Dockerfile: SDK stage compiles, ASP.NET runtime stage ships, runs as the non-root "app" user, uploads on a volume
- **Database Functionality:** postgres:17 container; LearnDB/docker/init.sh applies schema, tables, functions, indexes and seed on first start (same order as setup.ps1)

## Learning objectives
- Containerise API and web
- Compose three services with a health-gated start order
- Persist data and uploads in volumes
- Keep secrets in .env, not in images

## What I learned
- Ship small runtime images
- Run as non-root
- Volumes hold state, images do not
- Order containers by health, not just by start

## Why this approach is used
Immutable images plus external config: the same image runs in every environment.

## Common mistakes
- Copying the whole source before restoring packages
- Baking secrets into images
- Running as root
- CRLF line endings in shell scripts used inside Linux containers

## Interview questions
1. **Why a multi-stage Dockerfile?**
   To keep build tools out of the final image: smaller, faster to pull and with far less attack surface.

## Practice task
Add a /health proxy check to the compose file as a healthcheck for the web service.

## Next day's topic
Day 59 - Code Review and Refactoring

## Commit
`Day 58: Add Docker and docker-compose`
