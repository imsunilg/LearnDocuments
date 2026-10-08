# Day 19 - Implementation

## What was built
- usePermissions, Can, RequirePermission, AccessDeniedPage
- Permission-aware Sidebar, customers table and buttons
- API permission filter + policy provider
- role_permissions + seed

## Code walkthrough
Log in as `viewer` (Pass@123): the sidebar shows view-only modules, the customers table has no Edit/Delete and /customers/new shows Access denied. Calling POST /api/customers with the viewer token returns 403.

## Architecture changes
None.
