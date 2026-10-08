# Day 12 - Concepts

## Portals
- **WHY:** A modal inside a clipped/transformed parent can be hidden or mis-stacked.
- **WHAT:** createPortal(children, document.body) renders into another DOM node but keeps React tree (events/context) intact.
- **HOW:** Modal and the toast stack are portalled into <body>.
- **WHERE (in LearnInsurance):** components/dialogs/Modal.tsx, ToastProvider.

## Accessible dialogs
- **WHY:** Keyboard and screen-reader users must not get lost.
- **WHAT:** role="dialog", aria-modal, aria-labelledby, focus moved in, Tab trapped, Esc closes, focus restored.
- **HOW:** useEffect adds a keydown listener and restores focus in cleanup.
- **WHERE (in LearnInsurance):** Modal.

## Context-backed service (toast)
- **WHY:** Any component should be able to notify without prop drilling.
- **WHAT:** Provider owns the toast queue; useToast() exposes a stable API.
- **HOW:** The api object is memoised so consumers do not re-render when toasts change.
- **WHERE (in LearnInsurance):** ToastProvider, useToast.

## Composition
- **WHY:** Dialogs differ only in content.
- **WHAT:** ConfirmationDialog is a Modal with a footer.
- **HOW:** Pass children and a footer slot.
- **WHERE (in LearnInsurance):** ConfirmationDialog.
