export default {
  1: {
    title: 'ReactJS introduction and project foundation',
    react: 'What React is, Node.js setup, React 19 + Vite + TypeScript, project structure, JSX, components',
    insurance: 'Static Insurance Dashboard shell with colourful stat cards',
    objectives: ['Understand what React solves', 'Create a Vite + React + TypeScript project', 'Read and write JSX', 'Create the LearnInsurance folder structure and Git repo'],
    concepts: [
      { name: 'React', why: 'Hand-written DOM updates become unmaintainable as UIs grow.', what: 'A library for describing UI as a tree of components that re-render from data.', how: 'You return JSX (a syntax that compiles to function calls). React diffs the new tree against the old and updates only what changed.', where: 'Every screen of the portal is a component tree rooted at <App/>.' },
      { name: 'JSX', why: 'Keeps markup and the logic that drives it together.', what: 'An XML-like syntax extension compiled to JS by Vite (esbuild/oxc).', how: '`<div className="x">{value}</div>` becomes a jsx() call; expressions go inside {}.', where: 'DashboardPage.tsx is pure JSX for now.' },
      { name: 'Vite', why: 'Instant dev server and fast production builds.', what: 'A build tool using native ES modules in dev.', how: '`npm run dev` serves modules on demand; `npm run build` bundles for production.', where: 'LearnWEB is a Vite react-ts project.' },
    ],
    built: ['Git repository and .gitignore', 'LearnWEB (Vite + React 19 + TS), LearnAPI, LearnDB, LearnDocuments folders', 'Design tokens (orange/maroon theme) in src/styles/theme.css', 'Static DashboardPage with hero banner and four colourful stat cards'],
    walkthrough: 'main.tsx mounts <App/> into #root inside <StrictMode>. App renders a header and <DashboardPage/>, a function component returning static JSX. Class names map to rules in styles/components.css.',
    architecture: ['src/ feature-folder skeleton (app, components, features, hooks, services, models, types, utils, constants, pages, styles)'],
    problems: [['Bash tool had no coreutils', 'Used PowerShell and file-writing tools instead.'], ['TypeScript `erasableSyntaxOnly` is on in the Vite template', 'No `enum` or constructor parameter properties; use union types and `as const` objects.']],
    learned: ['Components are functions returning JSX', 'JSX uses className, camelCase attributes and {} expressions', 'Vite scaffolds a strictly typed React project'],
    approach: 'Starting with static JSX isolates the mental model of "UI = function of data" before adding state.',
    mistakes: ['Using `class` instead of `className`', 'Returning two sibling roots without a wrapper/fragment', 'Lower-case component names (React treats them as HTML tags)'],
    interview: [['What is JSX?', 'Syntax sugar compiled into jsx() calls that create React elements.'], ['Why does React use a virtual DOM / reconciliation?', 'To compute the minimal set of DOM updates between renders.'], ['What does StrictMode do?', 'Runs extra checks and double-invokes render/effects in development only.']],
    exercise: 'Add a new static "Quick Stats" card (e.g. "Pending Proposals") to the dashboard.',
    next: 'Day 02 - Functional components, props, composition',
    commit: 'Day 01: Initialize React Insurance Portal',
  },
}
