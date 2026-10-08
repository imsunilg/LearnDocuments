# Day 53 - Concepts

## Security headers
- **WHY:** They tell the browser to refuse risky behaviour even if our code has a bug.
- **WHAT:** nosniff stops MIME guessing, X-Frame-Options blocks clickjacking, CSP default-src none blocks any script/resource from an API response, no-store prevents caching personal data.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** SecurityHeadersMiddleware.

## Rate limiting
- **WHY:** Unlimited login attempts make password guessing cheap.
- **WHAT:** 10 login requests per minute per IP, 300 requests per minute overall; the 11th gets 429 with Retry-After. Limits come from configuration.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** RateLimitingExtensions, appsettings.

## XSS
- **WHY:** Injected script can steal sessions or act as the user.
- **WHAT:** React escapes {value} so <script> is shown as text. Danger comes from dangerouslySetInnerHTML, href="javascript:" and building HTML strings. A production CSP (script-src self) is the second layer.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** vite.config.ts cspPlugin, XSS test below.

## Defence in depth
- **WHY:** Any single control can fail.
- **WHAT:** Validation (client + server), parameterised SQL, upload checks, permission checks on every endpoint, audit log, headers, rate limits.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Whole stack.
