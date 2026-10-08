# Day 30 - Problems and solutions

### Underwriters have policies.issue but not policies.create, so the verb-based filter blocked POST /issue
PermissionFilter now skips the verb rule when the action has an explicit [HasPermission] policy.
