# Day 08 - Implementation

## What was built
- Axios instance + customerApi
- Customers page and details from API
- Generated view vw_customers and fn_customer_* functions
- Seed script

## Code walkthrough
Browser → axios → ASP.NET controller → CrudService → EntityRepository → IJsonDb → `SELECT fn_customer_get_all(...)::text` → JSON string returned unchanged to the browser.

## Architecture changes
None.
