# Day 57 - Implementation

## What was built
- .env.production and .env.staging, build:staging script
- appsettings.Production/Staging
- StartupChecks with unit tests
- Forwarded headers option
- Version in footer

## Code walkthrough
Run the API with ASPNETCORE_ENVIRONMENT=Production and no variables: it exits listing every missing setting. Run npm run build and inspect dist/: no .map files, CSP meta tag present.

## Architecture changes
None.
