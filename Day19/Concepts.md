# Day 19 - Concepts

## Permissions over roles
- **WHY:** Roles change; code should ask "can this user delete customers?" not "is this user an Admin?".
- **WHAT:** Roles are bags of permissions (customers.delete). UI/API check permissions.
- **HOW:** JWT carries the permissions; usePermissions().can("customers.delete").
- **WHERE (in LearnInsurance):** usePermissions, role_permissions table.

## Wrapper component
- **WHY:** Conditional JSX repeated everywhere is noisy.
- **WHAT:** `<Can permission="x" fallback={...}>children</Can>`
- **HOW:** Reads usePermissions and renders children or the fallback.
- **WHERE (in LearnInsurance):** components/common/Can.tsx.

## Authorization route guard
- **WHY:** Typing /customers/new in the address bar must not bypass hidden buttons.
- **WHAT:** RequirePermission layout route renders AccessDeniedPage when permission is missing.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** app/routes/RequirePermission.tsx.

## Defence in depth
- **WHY:** Anything in the browser can be altered.
- **WHAT:** The API re-checks every request (403).
- **HOW:** PermissionFilter / [HasPermission].
- **WHERE (in LearnInsurance):** Common/PermissionAuthorization.cs.
