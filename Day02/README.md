# DAY 02

- **Topic:** Functional components, props, composition
- **ReactJS Concept:** Functional components, props, children, composition, reusable UI components, TypeScript prop types
- **Insurance Functionality:** Application chrome: Header, Sidebar (final navigation), Footer, PageLayout; reusable StatCard
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Type component props with interfaces
- Use children for composition
- Extract repeated JSX into a reusable component

## What I learned
- Props are immutable inputs
- children enables layout components
- Constants files keep config out of JSX

## Why this approach is used
Small typed components catch wrong usage at compile time and avoid duplicate markup.

## Common mistakes
- Mutating props
- Using array index as key for dynamic lists
- Prop drilling many levels (solved by Context on Day 16)

## Interview questions
1. **What are props?**
   Read-only inputs to a component.
2. **What is the children prop?**
   Nested JSX passed between a component’s tags.
3. **Composition vs inheritance?**
   React favours composing components over class inheritance.

## Practice task
Create a reusable StatCard with props (done) - add a `trend` prop that shows ▲/▼.

## Next day's topic
Day 03 - useState, events, controlled components

## Commit
`Day 02: Add reusable layout components`
