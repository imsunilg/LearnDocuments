# Day 37 - Problems and solutions

### Partial motor draft failed with "Registration number is required"
fn_proposal_save upserted the vehicle even for incomplete drafts. The upsert now runs only for complete (non-partial) saves with a registration number.
