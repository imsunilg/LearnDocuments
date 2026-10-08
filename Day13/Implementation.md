# Day 13 - Implementation

## What was built
- customerForm.ts (form values ↔ API payload mapping)
- CustomerEditor rewritten with RHF

## Code walkthrough
The form works with plain strings; toCustomerInput() trims, uppercases PAN and converts blanks to null before calling the API.

## Architecture changes
None.
