# Day 20 - Concepts

## Feature folders
- **WHY:** As modules multiply, grouping by type (all components together) becomes unmanageable.
- **WHAT:** features/users contains its page, form modal, schema and API usage; components/ holds only truly shared pieces.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** features/users, features/admin.

## createCrudApi factory
- **WHY:** Every module has the same REST shape.
- **WHAT:** A generic function returning typed list/get/create/update/setActive/remove.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** services/api/createCrudApi.ts.

## Many-to-many in forms
- **WHY:** A user has several roles.
- **WHAT:** roleIds: number[] in the form state, toggled with checkbox chips; the API replaces the set transactionally (fn_user_set_roles).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** UserFormModal.

## Nested layout routes
- **WHY:** Admin sections share a tab bar.
- **WHAT:** AdminLayout renders tabs + <Outlet/>; each tab is a child route behind its own permission.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** router.tsx, AdminLayout.
