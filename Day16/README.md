# DAY 16

- **Topic:** Context API
- **ReactJS Concept:** createContext, Provider, useContext / use(), avoiding prop drilling, context re-render caveats
- **Insurance Functionality:** AppConfig (app name, theme, default page size) with a persisted light/dark theme toggle in the header
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Create a context with a typed value
- Build a provider and a safe consumer hook
- Understand when context causes re-renders

## What I learned
- Context is for app-wide, slowly-changing values
- A custom consumer hook gives a good error when the provider is missing

## Why this approach is used
Context keeps cross-cutting settings out of every prop list; CSS variables make theming cheap.

## Common mistakes
- Using context for fast-changing state
- Creating a new value object every render
- Forgetting the provider (null context)

## Interview questions
1. **Context vs Redux?**
   Context is a delivery mechanism; Redux adds a store, devtools, middleware. For server data prefer a query cache.
2. **How do you avoid re-render storms with context?**
   Memoise value, split contexts, select data outside context.

## Practice task
Persist the theme choice (done) - now also add a "system" option that follows the OS setting live.

## Next day's topic
Day 17 - Authentication concepts, login, JWT

## Commit
`Day 16: Add application context`
