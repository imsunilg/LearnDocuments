# DAY 53

- **Topic:** Security Hardening
- **ReactJS Concept:** React escapes text by default (XSS-safe), never use dangerouslySetInnerHTML with user data, Content-Security-Policy for the production build, tokens kept in memory not localStorage
- **Insurance Functionality:** Policy and KYC data is personal data: protect it in transit, at rest in storage rules, and from abuse
- **Backend Functionality:** SecurityHeadersMiddleware (nosniff, DENY framing, no-referrer, strict CSP, no-store, HSTS in production), fixed-window rate limiting (global per IP + strict on login) with 429 ProblemDetails and Retry-After
- **Database Functionality:** No change (account lock-out after repeated failures already exists in fn_auth_login)

## Learning objectives
- Add security headers
- Slow brute-force attacks
- Prove user text cannot execute
- Know the OWASP basics for a web app

## What I learned
- Headers are cheap, high-value hardening
- Rate-limit the expensive and the sensitive endpoints
- Escaping by default is React's main XSS defence

## Why this approach is used
Assume every input is hostile and every layer can fail.

## Common mistakes
- Storing JWTs in localStorage
- dangerouslySetInnerHTML with user content
- Echoing unvalidated headers
- Committing real secrets (the dev DB password lives only in appsettings.Development.json)

## Interview questions
1. **How does React protect against XSS and where can you still get it wrong?**
   JSX escapes interpolated values. It is still possible via dangerouslySetInnerHTML, javascript: URLs in href/src, and injecting into eval-like APIs; add a CSP as a safety net.

## Practice task
Add a per-user limiter on POST /api/payments/pay and test it.

## Next day's topic
Day 54 - Unit Testing

## Commit
`Day 53: Add security hardening`
