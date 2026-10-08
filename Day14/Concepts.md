# Day 14 - Concepts

## Schema-first validation
- **WHY:** Hand-written if-chains drift from the types and from the server rules.
- **WHAT:** A Zod schema describes shape + rules; it can validate and produce types.
- **HOW:** `customerSchema` → `z.infer<typeof customerSchema>` gives CustomerFormValues.
- **WHERE (in LearnInsurance):** features/customers/customerSchema.ts.

## zodResolver
- **WHY:** Plug the schema into React Hook Form.
- **WHAT:** An adapter converting Zod issues to RHF errors.
- **HOW:** useForm({ resolver: zodResolver(schema) }).
- **WHERE (in LearnInsurance):** CustomerEditor.

## Cross-field validation
- **WHY:** Some rules involve several fields.
- **WHAT:** schema.refine(fn, { path, message }) after the object.
- **HOW:** pincode requires city; error is attached to `city`.
- **WHERE (in LearnInsurance):** customerSchema.

## Defence in depth
- **WHY:** Client checks are bypassable.
- **WHAT:** Same rule in Zod (UX), FluentValidation (API), CHECK constraint (data integrity).
- **HOW:** Three files reference each other in comments.
- **WHERE (in LearnInsurance):** customerSchema.ts, CustomerRequestValidator.cs, 021_customers_constraints.sql.
