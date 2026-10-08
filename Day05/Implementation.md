# Day 05 - Implementation

## What was built
- utils/validators.ts
- CustomerEditor with required/email checks and create/edit modes

## Code walkthrough
The editor keeps a local draft. On submit it runs validate(); errors are stored in state and rendered under each field. The `key` prop on the editor resets its internal state when switching customers.

## Architecture changes
None.
