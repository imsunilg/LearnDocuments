# DAY 21

- **Topic:** Role Management
- **ReactJS Concept:** Complex forms, checkbox matrices, indeterminate checkboxes, derived selection state
- **Insurance Functionality:** Administration → Roles: create/edit roles and assign permissions with a module × action matrix
- **Backend Functionality:** RolesController CRUD (system roles protected), GET/PUT /api/roles/{id}/permissions, GET /api/permissions/catalog
- **Database Functionality:** permissions catalogue table, fn_permission_catalog, fn_role_get_permissions, fn_role_set_permissions (validates keys, replaces set)

## Learning objectives
- Build a matrix editor
- Use derived state for group checkboxes
- Treat a Set as immutable state
- Protect system data

## What I learned
- Data-driven UIs scale
- JWT permissions refresh on the next token refresh - document the delay
- Protect system rows in the API

## Why this approach is used
A matrix is the standard UX for RBAC administration and is driven by the catalog.

## Common mistakes
- Storing "all" flags separately from the items
- Mutating the Set in place
- Letting admins delete system roles

## Interview questions
1. **How do you implement a select-all checkbox?**
   Derive checked/indeterminate from the child selection; the header toggles all children.
2. **When do permission changes take effect?**
   When a new access token is issued (refresh or login), because permissions are token claims.

## Practice task
Add a "Clone role" action that creates a new role with the same permissions.

## Next day's topic
Day 22 - Agent Management

## Commit
`Day 21: Add role management`
