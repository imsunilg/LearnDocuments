# Day 51 - Concepts

## Why components re-render
- **WHY:** A parent render re-renders every child by default.
- **WHAT:** Re-rendering is cheap until a list is large or each row is heavy; then one click can redo hundreds of rows.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PerfLabPage plain mode.

## React.memo + stable props
- **WHY:** memo skips a child when its props are shallow-equal.
- **WHAT:** It only works if props are stable: handlers need useCallback, derived arrays need useMemo. DataTable rows are now memoised.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** DataTable MemoRow, PerfLabPage.

## useDeferredValue
- **WHY:** Typing must never wait for a heavy list.
- **WHAT:** The input uses the live value; the list uses the deferred one and catches up when idle (we dim it meanwhile).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PerfLabPage.

## Profiler
- **WHY:** Guessing is how you optimise the wrong thing.
- **WHAT:** <Profiler onRender> reports actualDuration per commit (13 ms plain vs 0.6 ms memo in the lab). Never setState inside onRender: it causes a render loop.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PerfLabPage.
