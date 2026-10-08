# Day 02 - Concepts

## Props
- **WHY:** Components must be configurable to be reusable.
- **WHAT:** Read-only inputs passed to a component as one object.
- **HOW:** Destructure in the signature: `function StatCard({ label, value }: StatCardProps)`. Props flow one way, parent to child.
- **WHERE (in LearnInsurance):** StatCard, Header, Sidebar.

## children & composition
- **WHY:** Inheritance does not fit UI; containment does.
- **WHAT:** The special `children` prop holds nested JSX.
- **HOW:** PageLayout renders `{children}` inside <main>; the page decides the content.
- **WHERE (in LearnInsurance):** PageLayout wraps every page.

## Keys on lists
- **WHY:** React needs identity to reconcile list items.
- **WHAT:** A stable `key` prop on mapped elements.
- **HOW:** Sidebar maps NAV_ITEMS using item.path as key.
- **WHERE (in LearnInsurance):** Sidebar navigation.
