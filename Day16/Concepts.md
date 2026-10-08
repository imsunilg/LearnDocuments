# Day 16 - Concepts

## Context
- **WHY:** Passing theme/config through 6 component levels as props is noise.
- **WHAT:** A way to broadcast a value to any descendant without props.
- **HOW:** createContext → <Context value={...}> (React 19 – no .Provider) → use(Context) / useContext.
- **WHERE (in LearnInsurance):** AppConfigProvider, useAppConfig.

## Re-render caveat
- **WHY:** Every consumer re-renders when the value reference changes.
- **WHAT:** Putting an inline object in `value` creates a new reference each render.
- **HOW:** useMemo the value; split rarely-changing and frequently-changing contexts; keep context for low-frequency data.
- **WHERE (in LearnInsurance):** AppConfigProvider uses useMemo. For server data use TanStack Query (Day 38), not context.

## Theming with CSS variables
- **WHY:** Switch the whole palette without re-rendering components.
- **WHAT:** data-theme on <html> remaps the --variables.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** theme.css :root[data-theme="dark"].
