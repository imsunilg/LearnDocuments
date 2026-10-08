# DAY 19

- **Topic:** Role-based UI
- **ReactJS Concept:** Permission-based rendering, wrapper component (<Can>), hooks for permissions, authorization route guards
- **Insurance Functionality:** Sidebar, buttons and routes adapt to the signed-in role (Admin, Underwriter, Agent, ClaimsOfficer, Viewer)
- **Backend Functionality:** Permission claims in the JWT; [HasPermission] attribute + dynamic policy provider; PermissionFilter maps GET/POST/PUT/DELETE → view/create/edit/delete for CRUD controllers (403 ProblemDetails)
- **Database Functionality:** role_permissions table + seed mapping; fn_user_get_by_username now returns the permission list

## Learning objectives
- Render UI by permission
- Guard routes by permission
- Understand that UI hiding is not security
- Enforce the same rules in the API

## What I learned
- UI permission checks are UX; API checks are security
- Permission strings are a stable contract between DB, API and UI

## Why this approach is used
Permission-centric RBAC lets admins reshape roles (Day 21) without code changes.

## Common mistakes
- Checking role names in components
- Trusting hidden buttons
- Forgetting to guard direct URLs

## Interview questions
1. **RBAC vs ABAC?**
   RBAC grants by role; ABAC evaluates attributes (owner, amount, region).
2. **Why check permissions twice?**
   The UI is for usability; the server is the only trusted enforcement point.

## Practice task
Hide the Delete button for non-admin roles (done through customers.delete) - now hide the Delete button also for customers whose KYC is Verified unless the user is an Admin.

## Next day's topic
Day 20 - User Management

## Commit
`Day 19: Add role-based UI rendering`
