# Day 17 - Concepts

## JWT
- **WHY:** A stateless proof of identity the API can verify without a session store.
- **WHAT:** header.payload.signature (Base64URL). The signature (HMAC-SHA256 with a secret) proves the payload was not changed. The payload is readable by anyone - never put secrets in it.
- **HOW:** API signs after login; client sends `Authorization: Bearer <jwt>`; JwtBearer middleware validates signature, issuer, audience, expiry.
- **WHERE (in LearnInsurance):** JwtTokenService.cs, AddJwtAuthentication.

## Access + refresh tokens
- **WHY:** Short-lived access tokens limit damage if stolen; refresh tokens keep the user signed in.
- **WHAT:** Access token (30 min) in memory; refresh token (7 days) in an httpOnly, SameSite cookie, stored hashed in the DB and rotated on every use. Reuse of an old token revokes all sessions.
- **HOW:** POST /auth/refresh with the cookie returns a new access token.
- **WHERE (in LearnInsurance):** AuthService.RefreshAsync.

## Password hashing
- **WHY:** Databases leak.
- **WHAT:** bcrypt: salted, slow hash. Never store or log plain passwords.
- **HOW:** Seed uses pgcrypto crypt(..., gen_salt('bf')); API verifies with BCrypt.Net.
- **WHERE (in LearnInsurance):** seed/050_roles_users.sql, AuthService.

## Where to store the token?
- **WHY:** XSS can read localStorage; CSRF can use cookies.
- **WHAT:** Memory (safest from XSS, lost on reload) + httpOnly cookie for silent refresh.
- **HOW:** tokenStore.ts module variable; cookie Path=/api/auth, SameSite=Lax.
- **WHERE (in LearnInsurance):** tokenStore.ts, AuthController.
