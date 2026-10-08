export default {
  16: {
    title: 'Context API',
    react: 'createContext, Provider, useContext / use(), avoiding prop drilling, context re-render caveats',
    insurance: 'AppConfig (app name, theme, default page size) with a persisted light/dark theme toggle in the header',
    objectives: ['Create a context with a typed value', 'Build a provider and a safe consumer hook', 'Understand when context causes re-renders'],
    concepts: [
      { name: 'Context', why: 'Passing theme/config through 6 component levels as props is noise.', what: 'A way to broadcast a value to any descendant without props.', how: 'createContext → <Context value={...}> (React 19 – no .Provider) → use(Context) / useContext.', where: 'AppConfigProvider, useAppConfig.' },
      { name: 'Re-render caveat', why: 'Every consumer re-renders when the value reference changes.', what: 'Putting an inline object in `value` creates a new reference each render.', how: 'useMemo the value; split rarely-changing and frequently-changing contexts; keep context for low-frequency data.', where: 'AppConfigProvider uses useMemo. For server data use TanStack Query (Day 38), not context.' },
      { name: 'Theming with CSS variables', why: 'Switch the whole palette without re-rendering components.', what: 'data-theme on <html> remaps the --variables.', where: 'theme.css :root[data-theme="dark"].' },
    ],
    built: ['AppConfigContext / Provider / useAppConfig', 'ThemeToggle in the header', 'Persisted theme and page size via useLocalStorage', 'Dark theme tokens'],
    walkthrough: 'The provider reads the saved theme (falling back to prefers-color-scheme), syncs it to document.documentElement.dataset.theme and exposes toggleTheme.',
    tsNotes: ['Context default null + guard hook to avoid non-null assertions', 'Interface extension (AppConfigApi extends AppConfig)'],
    learned: ['Context is for app-wide, slowly-changing values', 'A custom consumer hook gives a good error when the provider is missing'],
    approach: 'Context keeps cross-cutting settings out of every prop list; CSS variables make theming cheap.',
    mistakes: ['Using context for fast-changing state', 'Creating a new value object every render', 'Forgetting the provider (null context)'],
    interview: [['Context vs Redux?', 'Context is a delivery mechanism; Redux adds a store, devtools, middleware. For server data prefer a query cache.'], ['How do you avoid re-render storms with context?', 'Memoise value, split contexts, select data outside context.']],
    exercise: 'Persist the theme choice (done) - now also add a "system" option that follows the OS setting live.',
    next: 'Day 17 - Authentication concepts, login, JWT',
    commit: 'Day 16: Add application context',
  },
}
