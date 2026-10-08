# Day 49 - Concepts

## Charts are thin wrappers
- **WHY:** Shaping data in the component makes charts hard to test.
- **WHAT:** The API returns ready-shaped arrays; each chart only maps keys to axes/colours.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ReportCharts.

## React.lazy for heavy libraries
- **WHY:** Recharts is a large chunk that most screens do not need immediately.
- **WHAT:** lazy(() => import(...)) + Suspense loads it after the KPI numbers are already on screen.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ReportsPage, DashboardPage.

## Accessible charts
- **WHY:** SVG charts are invisible to screen readers.
- **WHAT:** role="img" with an aria-label containing the title and a one-line takeaway; tables below hold the exact numbers.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** ChartCard.

## Shared query cache
- **WHY:** The dashboard and reports page show the same numbers.
- **WHAT:** Both call useDashboardReport({}) so navigating between them is instant.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** reportQueries.
