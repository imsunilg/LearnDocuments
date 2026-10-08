# DAY 20

- **Topic:** User Management
- **ReactJS Concept:** Feature-folder structure at scale, reuse of DataTable/hooks/dialogs, generic API factory, modal forms with checkbox chips
- **Insurance Functionality:** Administration → Users: list, search, create, edit, assign roles, activate/deactivate
- **Backend Functionality:** UsersController (password hashed with bcrypt, cannot deactivate yourself), RolesController (read), FluentValidation password policy
- **Database Functionality:** vw_users (roles aggregated, no password hash), fn_user_get_all/get_by_id/set_active/delete (generated), fn_user_create/update/set_roles/set_password (hand-written)

## Learning objectives
- Scale the feature-folder pattern
- Reuse building blocks instead of rebuilding
- Model many-to-many (user ↔ roles) in a form
- Protect admin actions (self-deactivation, password hashing)

## What I learned
- Reuse is the payoff of the earlier days
- Never return password hashes from list functions
- Business rules like "cannot deactivate yourself" live in the API

## Why this approach is used
Admin screens are CRUD plus one twist (roles); composing existing pieces keeps them small.

## Common mistakes
- Returning password_hash in JSON
- Letting admins lock themselves out
- Hashing passwords in the browser

## Interview questions
1. **How do you model a many-to-many form field?**
   An array of ids in form state, saved with a replace-set operation on the server.
2. **Why a view for users?**
   To expose only safe columns and aggregated roles.

## Practice task
Add a "reset password" action (API endpoint exists: POST /api/users/{id}/reset-password) - build the modal that calls it.

## Next day's topic
Day 21 - Role Management

## Commit
`Day 20: Add user management`
