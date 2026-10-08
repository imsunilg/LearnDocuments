# DAY 56

- **Topic:** Accessibility and Responsive Design
- **ReactJS Concept:** Skip link, focus management on route change, semantic landmarks, AA colour contrast via design tokens, keyboard-reachable scroll regions, mobile-first header; automated axe-core scans in Playwright
- **Insurance Functionality:** Insurance portals serve everyone: older customers, keyboard-only users, screen-reader users and agents on phones
- **Backend Functionality:** No change
- **Database Functionality:** No change

## Learning objectives
- Meet WCAG 2.1 AA contrast
- Make navigation work without a mouse
- Announce SPA page changes
- Remove horizontal scrolling on phones

## What I learned
- Contrast is a design-token problem
- Automated tools find what they can; still test with the keyboard
- Focus is part of SPA routing

## Why this approach is used
Accessibility is cheapest when built into the design system, not retrofitted per page.

## Common mistakes
- Colour as the only signal
- Removing focus outlines
- Icon-only buttons without a name
- Forgetting that overflow:auto regions need keyboard access

## Interview questions
1. **How do you handle focus in a single-page app?**
   Move focus to the new page heading or main region after route changes, provide a skip link, and announce dynamic updates with aria-live regions.

## Practice task
Add an aria-live region that announces "Page loaded: <title>" after each navigation.

## Next day's topic
Day 57 - Environment Configurations and Production Build

## Commit
`Day 56: Improve accessibility and responsive design`
