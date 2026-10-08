# Day 33 - Concepts

## Outer loader / inner keyed form
- **WHY:** react-hook-form defaultValues are read once; they must exist before the form mounts.
- **WHAT:** DynamicQuotePage loads fields (+ proposal in edit mode) and only then renders <QuoteForm key=…/> with ready initial values.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** DynamicQuotePage.tsx.

## Ready-to-quote gate
- **WHY:** Do not call the pricing API with incomplete forms.
- **WHAT:** ready = plan chosen AND validateFields() returns no problems for the visible fields.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** DynamicQuotePage.

## Stable codes vs display names
- **WHY:** Rating factors must not depend on label text.
- **WHAT:** Config field valueKey "code" stores APARTMENT instead of "Apartment / Flat"; address selects keep names.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** product_field_config.value_key.

## Insurance maths (home)
- **WHY:** Know what you price.
- **WHAT:** Structure premium = building value × plan rate × age × type × construction factors; contents and burglary are add-ons; tenants get a discount.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_premium_home.
