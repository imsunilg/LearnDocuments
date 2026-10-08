# DAY 01

- **Topic:** ReactJS introduction and project foundation
- **ReactJS Concept:** What React is, Node.js setup, React 19 + Vite + TypeScript, project structure, JSX, components
- **Insurance Functionality:** Static Insurance Dashboard shell with colourful stat cards
- **Backend Functionality:** none
- **Database Functionality:** none

## Learning objectives
- Understand what React solves
- Create a Vite + React + TypeScript project
- Read and write JSX
- Create the LearnInsurance folder structure and Git repo

## What I learned
- Components are functions returning JSX
- JSX uses className, camelCase attributes and {} expressions
- Vite scaffolds a strictly typed React project

## Why this approach is used
Starting with static JSX isolates the mental model of "UI = function of data" before adding state.

## Common mistakes
- Using `class` instead of `className`
- Returning two sibling roots without a wrapper/fragment
- Lower-case component names (React treats them as HTML tags)

## Interview questions
1. **What is JSX?**
   Syntax sugar compiled into jsx() calls that create React elements.
2. **Why does React use a virtual DOM / reconciliation?**
   To compute the minimal set of DOM updates between renders.
3. **What does StrictMode do?**
   Runs extra checks and double-invokes render/effects in development only.

## Practice task
Add a new static "Quick Stats" card (e.g. "Pending Proposals") to the dashboard.

## Next day's topic
Day 02 - Functional components, props, composition

## Commit
`Day 01: Initialize React Insurance Portal`
