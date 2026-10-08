# Day 18 - Concepts

## Route guard (layout route)
- **WHY:** Pages must not render for anonymous users.
- **WHAT:** ProtectedRoute renders <Outlet/> only when authenticated; otherwise <Navigate to="/login"/> with the original location in state.
- **HOW:** Three states: loading (splash), anonymous (redirect), authenticated (outlet).
- **WHERE (in LearnInsurance):** app/routes/ProtectedRoute.tsx.

## Axios interceptors
- **WHY:** Token handling must not be copy-pasted into every call.
- **WHAT:** Request interceptor adds Bearer token; response interceptor reacts to 401.
- **HOW:** 401 → one silent refresh → replay the original request; refresh failure → sessionEvents.emitExpired().
- **WHERE (in LearnInsurance):** services/auth/authInterceptor.ts.

## Single-flight refresh
- **WHY:** Refresh tokens rotate; two parallel refreshes look like theft (and React StrictMode runs effects twice in dev).
- **WHAT:** Share one in-flight promise.
- **HOW:** `inflight ??= authApi.refresh()...finally(() => inflight = null)`
- **WHERE (in LearnInsurance):** services/auth/session.ts.

## Session restore
- **WHY:** Access tokens live in memory and vanish on reload.
- **WHAT:** On mount call /auth/refresh; the httpOnly cookie is sent automatically.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** AuthProvider.
