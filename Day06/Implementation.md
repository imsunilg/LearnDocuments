# Day 06 - Implementation

## What was built
- mockCustomerService with delay + abort
- CustomersPage composing list + editor + filter
- Loading text while fetching

## Code walkthrough
The effect creates an AbortController, calls the service, stores results with setCustomers and returns `() => controller.abort()`.

## Architecture changes
None.
