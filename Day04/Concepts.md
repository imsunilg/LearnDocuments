# Day 04 - Concepts

## Conditional rendering
- **WHY:** UI must differ by state (empty, active/inactive).
- **WHAT:** Plain JS: early return, ternary, &&.
- **HOW:** `if (list.length === 0) return <EmptyMessage/>`; `{c.isActive ? <Active/> : <Inactive/>}`
- **WHERE (in LearnInsurance):** CustomerList empty state and status badge.

## Lists and keys
- **WHY:** React needs to match old and new children to preserve state and minimise DOM work.
- **WHAT:** A `key` string/number unique among siblings.
- **HOW:** Use the database id, never the array index for lists that can reorder or filter.
- **WHERE (in LearnInsurance):** `<tr key={c.id}>`.
