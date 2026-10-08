# Day 18 - Problems and solutions

### Token reuse detection logged users out in dev
StrictMode mounted the provider twice and fired two refreshes with the same cookie. Fixed by sharing one in-flight promise (single-flight).
