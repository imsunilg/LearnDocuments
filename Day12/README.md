# DAY 12

- **Topic:** Modal, confirmation dialog, toast
- **ReactJS Concept:** Portals, composition, focus handling basics, global notification pattern (Context)
- **Insurance Functionality:** Delete-customer confirmation dialog and success/error toasts for save and delete
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Render UI outside the parent DOM with portals
- Manage focus and Esc/Tab for dialogs
- Build a global toast service with Context
- Use React 19 `use(Context)`

## What I learned
- Portals escape CSS clipping
- Focus management is part of correctness
- Memoise context values

## Why this approach is used
Reusable overlays enforce consistent UX and accessibility across all modules.

## Common mistakes
- Forgetting to restore focus
- Putting a new object in a context value every render
- Backdrop click closing while dragging inside the dialog

## Interview questions
1. **What is a portal?**
   Renders children into a different DOM node while preserving React context and event bubbling.
2. **Why memoise a context value?**
   Otherwise all consumers re-render whenever the provider re-renders.

## Practice task
Add a progress bar to the toast that shrinks during the auto-dismiss time, and pause the timer on hover.

## Next day's topic
Day 13 - React Hook Form

## Commit
`Day 12: Add modal, confirmation dialog and toast`
