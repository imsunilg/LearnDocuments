# Day 20 - Implementation

## What was built
- UsersPage, UserFormModal, userSchema
- AdminLayout with permission-filtered tabs
- userApi/roleApi
- Users/roles DB views and functions
- Password policy in FluentValidation and Zod

## Code walkthrough
Sign in as admin → Administration → Users. Creating a user posts to /api/users: the controller hashes the password, builds a JSON payload and calls fn_user_create, which inserts the user and syncs user_roles.

## Architecture changes
None.
