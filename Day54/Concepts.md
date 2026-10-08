# Day 54 - Concepts

## Arrange - Act - Assert
- **WHY:** A consistent shape makes tests readable.
- **WHAT:** Set up data, perform one action, assert the outcome. One reason to fail per test.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** every test file.

## Query by role, not by class
- **WHY:** Tests that mirror how users and assistive tech find things survive refactors and improve accessibility.
- **WHAT:** getByRole("columnheader"), getByRole("button", { name }) - if it is hard to query, it is probably hard to use.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** DataTable.test.tsx.

## Fakes behind interfaces
- **WHY:** Interfaces (IJsonDb, IFileStorage, IPaymentGateway) let tests replace slow or risky parts.
- **WHAT:** FakeJsonDb records calls, CountingGateway counts charges: the idempotency test proves a replayed key charges 0 times.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** TestDoubles.cs, PaymentServiceTests.

## Test the rules that cost money
- **WHY:** Coverage is not the goal; protecting risky behaviour is.
- **WHAT:** Payment retries, upload validation, CSV injection, error mapping, audit failure isolation.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** All test files.
