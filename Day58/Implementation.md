# Day 58 - Implementation

## What was built
- LearnAPI/Dockerfile + .dockerignore
- LearnWEB/Dockerfile + nginx.conf + .dockerignore
- docker-compose.yml + .env.example
- LearnDB/docker/init.sh
- .gitattributes (LF endings for shell scripts)

## Code walkthrough
Copy .env.example to .env, set the two secrets, run: docker compose up --build. Open http://localhost:8080 and log in as admin / Admin@123.

## Architecture changes
None.
