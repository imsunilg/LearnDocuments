# DAY 17

- **Topic:** Authentication concepts, login, JWT
- **ReactJS Concept:** Auth flow, forms + API, storing session state (memory vs storage)
- **Insurance Functionality:** Login page (branded split layout) with validation and server error messages
- **Backend Functionality:** POST /api/auth/login, /refresh, /logout, GET /api/auth/me; JWT (HS256) + rotating refresh tokens in an httpOnly cookie; bcrypt password hashing; lockout after 5 failures
- **Database Functionality:** roles, users, user_roles, refresh_tokens; fn_user_get_by_username, fn_auth_login_*, fn_refresh_token_*; seeded users

## Learning objectives
- Understand authentication vs authorization
- Understand JWT structure and trade-offs
- Choose where tokens live
- Build the login form

## What I learned
- Authentication = who you are; authorization = what you may do
- JWT is signed, not encrypted
- Refresh rotation detects theft

## Why this approach is used
Short-lived in-memory access token + httpOnly refresh cookie is the best-practice SPA setup.

## Common mistakes
- Storing JWTs in localStorage
- Long-lived access tokens
- Telling the user whether the username or password was wrong

## Interview questions
1. **Is a JWT encrypted?**
   No, only signed; anyone can decode the payload.
2. **Why httpOnly cookie for refresh?**
   JavaScript cannot read it, which blocks XSS token theft.
3. **What is token rotation?**
   Issuing a new refresh token on each use and invalidating the old one.

## Practice task
Show friendly login error messages for invalid credentials and a locked account (done) - now add a "Show password" toggle.

## Next day's topic
Day 18 - Protected routes, auth context, token handling

## Commit
`Day 17: Add login with JWT`
