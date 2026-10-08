# Day 18 - Implementation

## What was built
- ProtectedRoute
- AuthProvider with status/login/logout/auto-renew
- Interceptor with replay
- UserMenu (avatar + sign out)
- Redirect back to the requested page after login

## Code walkthrough
App start: status=loading → refresh attempt → authenticated or anonymous. The timer renews the token 60s before expiry; any 401 triggers one refresh+retry.

## Architecture changes
None.
