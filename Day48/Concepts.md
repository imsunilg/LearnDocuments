# Day 48 - Concepts

## Aggregate where the data lives
- **WHY:** Sending 10,000 rows to sum them in JavaScript is slow and leaks data.
- **WHAT:** fn_report_dashboard returns only the totals and series the screen draws.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** 390_reports.sql.

## One round trip
- **WHY:** Six widgets x six requests = slow page.
- **WHAT:** A single jsonb document feeds every widget; one cache entry per date range.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** useDashboardReport.

## keepPreviousData
- **WHY:** Changing a filter should not blank the page.
- **WHAT:** The old numbers stay visible (with "updating…") until the new ones arrive.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** reportQueries.

## CSV injection
- **WHY:** A cell starting with = or @ can run formulas in Excel.
- **WHAT:** toCsv prefixes risky cells with an apostrophe, quotes commas/newlines and adds a UTF-8 BOM.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** utils/csv.ts.
