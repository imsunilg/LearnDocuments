# Day 56 - Concepts

## Automated audit with axe-core
- **WHY:** Catches roughly a third of issues instantly and prevents regressions.
- **WHAT:** Playwright injects axe-core and scans 12 screens at desktop and 390px width. First run: contrast failures everywhere (orange on white is only 3:1), scrollable regions without keyboard access.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** scratchpad a11y script (documented in Troubleshooting).

## Tokens make contrast fixable in one place
- **WHY:** Colours scattered in components cannot be audited.
- **WHAT:** --link (5.2:1) and --btn-from/--btn-to replace brand orange for text and button fills; dark theme has its own values.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** theme.css.

## SPA focus management
- **WHY:** A route change does not reload the page, so assistive tech hears nothing.
- **WHAT:** After navigation focus moves to <main>; a skip link is the first tab stop. We compare the previous path (not a boolean) so StrictMode double effects do not steal focus on first load.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PageLayout.

## Responsive checks
- **WHY:** Horizontal scroll on a phone is a usability bug.
- **WHAT:** A script compares scrollWidth to clientWidth per route; the header was 455px wide on a 390px screen and now shrinks gracefully.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** layout.css.
