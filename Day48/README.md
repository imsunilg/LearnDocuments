# DAY 48

- **Topic:** Reports Dashboard
- **ReactJS Concept:** One query for many widgets, keepPreviousData for filter changes, controlled date-range form with validation, lazy-loaded route, CSV export utility
- **Insurance Functionality:** Management view: premium written vs collected, outstanding, open and settled claims, product-line mix, top agents, renewals due
- **Backend Functionality:** GET /api/reports/dashboard?from=&to= (reports.view) - validates the range and returns everything in one JSON document
- **Database Functionality:** fn_report_dashboard(from, to): KPIs, monthly series, product/claim/payment/policy breakdowns, top agents, expiring policies - aggregation stays in PostgreSQL

## Learning objectives
- Aggregate in the database, not in the browser
- Design KPI cards
- Filter by period without UI flicker
- Export data to CSV safely

## What I learned
- Push aggregation to SQL
- Cache per filter
- Escape CSV cells

## Why this approach is used
A report is a question; design the query for the question, then draw it.

## Common mistakes
- Computing totals in the browser
- One request per widget
- Clearing data while loading the next filter

## Interview questions
1. **What is keepPreviousData for?**
   It shows the previous query result while a new key loads, so paging and filtering do not flash an empty state.

## Practice task
Add a "This month / This quarter / This FY" quick-pick for the period.

## Next day's topic
Day 49 - Charts and KPI Cards

## Commit
`Day 48: Add reports dashboard`
