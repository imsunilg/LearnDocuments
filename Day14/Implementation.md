# Day 14 - Implementation

## What was built
- customerSchema.ts
- zodResolver wired into CustomerEditor
- DB check constraints
- Aligned FluentValidation

## Code walkthrough
The editor no longer contains rules. The schema trims text, uppercases PAN, enforces formats and age, and returns user-friendly messages.

## Architecture changes
None.
