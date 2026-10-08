# DAY 49

- **Topic:** Charts and KPI Cards
- **ReactJS Concept:** Recharts (ComposedChart, PieChart, BarChart), lazy-loaded chart chunk with Suspense, accessible charts (role="img" + text summary), a live dashboard driven by one query shared with the reports page
- **Insurance Functionality:** Premium written vs collected trend, product-line mix, claims pipeline, collections by payment mode, and a home dashboard with real KPI numbers
- **Backend Functionality:** No new endpoint: the Day 48 dashboard document already contains the series
- **Database Functionality:** No new objects (fn_report_dashboard returns month series and breakdowns)

## Learning objectives
- Draw data with Recharts
- Keep a heavy library out of the main bundle
- Make charts understandable without sight
- Reuse one query across pages

## What I learned
- Lazy-load chart libraries
- Charts need a text alternative
- One cached query can serve many views

## Why this approach is used
A chart should answer one question; the title says the question and the summary states the answer.

## Common mistakes
- Giving the chart container no height
- Shipping Recharts in the main bundle
- Colour as the only way to tell series apart

## Interview questions
1. **How do you make charts accessible?**
   Provide a text summary and a data table, do not rely on colour alone, and label the SVG container with role="img" and aria-label.

## Practice task
Add a toggle to switch the trend chart between premium and policy count.

## Next day's topic
Day 50 - Error Boundaries, Correlation IDs and Audit Logs

## Commit
`Day 49: Add charts and live dashboard`
