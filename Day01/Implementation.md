# Day 01 - Implementation

## What was built
- Git repository and .gitignore
- LearnWEB (Vite + React 19 + TS), LearnAPI, LearnDB, LearnDocuments folders
- Design tokens (orange/maroon theme) in src/styles/theme.css
- Static DashboardPage with hero banner and four colourful stat cards

## Code walkthrough
main.tsx mounts <App/> into #root inside <StrictMode>. App renders a header and <DashboardPage/>, a function component returning static JSX. Class names map to rules in styles/components.css.

## Architecture changes
- src/ feature-folder skeleton (app, components, features, hooks, services, models, types, utils, constants, pages, styles)
