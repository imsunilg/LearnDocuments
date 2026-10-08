# Day 53 - Implementation

## What was built
- Security headers middleware
- Rate limiter on the API and on login
- Production CSP via Vite plugin
- Playwright XSS check

## Code walkthrough
Call the API and read the response headers. Fire 12 bad logins within a minute and watch the last ones return 429. Upload a document whose description is <img onerror=alert(1)> and see it rendered as plain text with no alert.

## Architecture changes
None.
