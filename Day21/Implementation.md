# Day 21 - Implementation

## What was built
- RolesPage + RoleFormModal
- RolePermissionsPage + PermissionMatrix
- Permission catalogue in the DB
- Server rules: system roles and roles with users cannot be deleted

## Code walkthrough
The catalog (modules → actions) drives the matrix, so adding a new module needs no UI change. Saving sends the full set; the DB function validates keys and replaces the set atomically.

## Architecture changes
None.
