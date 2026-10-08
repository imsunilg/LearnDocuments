# Day 01 - Concepts

## React
- **WHY:** Hand-written DOM updates become unmaintainable as UIs grow.
- **WHAT:** A library for describing UI as a tree of components that re-render from data.
- **HOW:** You return JSX (a syntax that compiles to function calls). React diffs the new tree against the old and updates only what changed.
- **WHERE (in LearnInsurance):** Every screen of the portal is a component tree rooted at <App/>.

## JSX
- **WHY:** Keeps markup and the logic that drives it together.
- **WHAT:** An XML-like syntax extension compiled to JS by Vite (esbuild/oxc).
- **HOW:** `<div className="x">{value}</div>` becomes a jsx() call; expressions go inside {}.
- **WHERE (in LearnInsurance):** DashboardPage.tsx is pure JSX for now.

## Vite
- **WHY:** Instant dev server and fast production builds.
- **WHAT:** A build tool using native ES modules in dev.
- **HOW:** `npm run dev` serves modules on demand; `npm run build` bundles for production.
- **WHERE (in LearnInsurance):** LearnWEB is a Vite react-ts project.
