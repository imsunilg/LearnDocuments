# Day 17 - API changes

- POST /api/auth/login → {accessToken, expiresAt, user} + Set-Cookie li_rt
- POST /api/auth/refresh (cookie)
- POST /api/auth/logout
- GET /api/auth/me [Authorize]
