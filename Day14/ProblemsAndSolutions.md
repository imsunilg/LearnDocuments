# Day 14 - Problems and solutions

### npm installed zod 3.25 (v3 API) instead of v4, so z.email() did not exist
Ran `npm i zod@latest` (4.6.5). Always verify the installed version, not just the registry "latest".

### Existing rows might violate new CHECK constraints
Seed data was reviewed first; in production use NOT VALID + VALIDATE CONSTRAINT.
