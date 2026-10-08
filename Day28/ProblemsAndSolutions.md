# Day 28 - Problems and solutions

### Dispatching with a CASE expression failed when other product functions did not exist yet
PostgreSQL resolves every function in a single SQL expression at parse time. Switched to EXECUTE format('SELECT fn_premium_%s(...)') so each product line is resolved only when used.

### Casting band keys inside a WHERE could hit non-numeric keys of other groups
Select the group first in a subquery and cast inside a CASE.
