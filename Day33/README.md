# DAY 33

- **Topic:** Home Insurance
- **ReactJS Concept:** Reusing the dynamic form engine: one DynamicQuotePage for Home/Travel/Health, resolver composition, outer-loader / inner-keyed-form pattern
- **Insurance Functionality:** Home quote + proposal (property, address, building and contents cover) with live premium; Home list/details reuse the shared proposal pages
- **Backend Functionality:** No new endpoints - proposals, premium and form-fields endpoints are product-agnostic; fn_premium_home plugs in via the fn_premium_<type> naming convention
- **Database Functionality:** fn_premium_home (age/type/construction factors, contents + burglary add-ons, tenant discount), home rating rows, value_key (name|code) for master data selects

## Learning objectives
- Ship a whole product line with almost no new UI code
- Combine a static schema with dynamic rules
- Understand why config-driven design pays off

## What I learned
- A good abstraction makes a new product line a data task
- Keep escape hatches (Motor remains hand-written)

## Why this approach is used
The engine pays for itself with the second product line; with three it is a clear win.

## Common mistakes
- Initialising the form before data has loaded
- Rating on display names

## Interview questions
1. **How do you initialise a form from async data?**
   Load first, then mount the form with the loaded values (or reset() once), keyed by the record id.

## Practice task
Add a "Contents cover" optional section (done through contents checkbox) - now add a "jewellery & valuables" value field with its own rate to the Home calculator.

## Next day's topic
Day 34 - Travel Insurance

## Commit
`Day 33: Add home insurance`
