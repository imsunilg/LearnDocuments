# Day 59 - Concepts

## Review checklist
- **WHY:** Reviews without a list find only what the reviewer happens to notice.
- **WHAT:** Correctness, security (authz first), error handling, performance hot spots, accessibility, naming, duplication, tests for the risky paths.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** This day.

## Stale closure in useMemo
- **WHY:** A memo that omits a dependency keeps calling an old function.
- **WHAT:** CustomersPage memoised its columns with a callback that was recreated each render but missing from the dependency list. Now the callback is stable (useCallback over the stable mutate function) and listed.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** CustomersPage.

## Derived state over effects
- **WHY:** setState in componentDidUpdate causes a second render pass.
- **WHAT:** ErrorBoundary now clears itself through getDerivedStateFromProps comparing resetKey; a test proves it.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ErrorBoundary + test.

## Deliberate warnings
- **WHY:** Not every warning is a bug.
- **WHAT:** Remaining lint warnings are Fast-Refresh hints (files exporting components and helpers together) and a few set-state-in-effect patterns that sync form state from props. They are documented rather than churned before release.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** npm run lint.
