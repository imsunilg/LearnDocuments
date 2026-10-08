# Day 52 - Concepts

## Code splitting
- **WHY:** One big bundle delays the first screen for everyone.
- **WHAT:** Dynamic import() makes the bundler emit a separate chunk that is fetched on demand.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** router.tsx (24 lazy pages), ReportCharts.

## React.lazy + Suspense
- **WHY:** A lazy component is not ready on first render.
- **WHAT:** Suspense shows a fallback until the chunk arrives. We put it around the Outlet so the sidebar and header never disappear.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PageLayout.

## Split where users wait
- **WHY:** Splitting tiny things adds requests for no gain.
- **WHAT:** Login, dashboard shell and admin layout stay eager; pages and heavy libraries (Recharts 400 kB) are lazy.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** lazify decisions in router.tsx.

## Measure the result
- **WHY:** Bundles drift over time.
- **WHAT:** npm run build prints chunk sizes; shared vendor code stays in the entry while each page becomes a 4-10 kB chunk.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Vite build output.
