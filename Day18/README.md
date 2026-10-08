# DAY 18

- **Topic:** Protected routes, auth context, token handling
- **ReactJS Concept:** Route guards, AuthContext, Axios interceptors, token expiry, logout
- **Insurance Functionality:** Whole portal requires sign-in; session survives reload; automatic sign-out when the session cannot be renewed
- **Backend Functionality:** Fallback authorization policy (secure by default); [AllowAnonymous] only on login/refresh/logout/health
- **Database Functionality:** none

## Learning objectives
- Guard routes with a layout route
- Restore a session on page load
- Refresh tokens transparently via an interceptor
- Handle logout and expiry

## What I learned
- Guards are layout routes
- Interceptors centralise cross-cutting HTTP concerns
- Secure by default beats remembering [Authorize]

## Why this approach is used
Silent refresh keeps users productive while keeping access tokens short-lived and out of storage.

## Common mistakes
- Infinite 401 → refresh → 401 loops (guard with _retried and skip auth endpoints)
- Redirecting before the session restore finishes (flash of login page)

## Interview questions
1. **How do you protect routes in React Router?**
   A layout route that checks auth state and renders Outlet or Navigate.
2. **Why is the refresh single-flight?**
   Rotating tokens would otherwise be revoked by the second concurrent call.

## Practice task
Redirect back to the originally requested page after login (done via location.state.from) - now add an "Session expired" toast when auto-logout happens.

## Next day's topic
Day 19 - Role-based UI

## Commit
`Day 18: Add protected routes and auth context`
