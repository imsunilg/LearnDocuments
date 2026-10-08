# Day 39 - Implementation

## What was built
- customerMutations (create/update/delete/toggle)
- Active switch in the customers table
- CustomerFormPage and CustomersPage using mutations

## Code walkthrough
Flip the Active switch: it moves instantly in every cached list and the details cache. If the API rejects the call (try it with the API stopped) the switch snaps back and a toast explains why.

## Architecture changes
None.
