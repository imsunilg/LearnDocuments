# Day 11 - Implementation

## What was built
- DataTable<T>
- customerColumns configuration
- CustomersPage refactored; CustomerList removed

## Code walkthrough
The page owns data, sort and paging state. DataTable renders headers from `columns`, rows from `data`, shows <EmptyState/> when empty and an optional <Pagination/>.

## Architecture changes
None.
