# DAY 29

- **Topic:** Motor: proposal creation
- **ReactJS Concept:** Submit flows, form draft saving (autosave + restore), edit mode from saved data, status timeline component, optimistic-UI concepts
- **Insurance Functionality:** Create / save-draft / submit motor proposals; edit drafts; underwriter review, approve, reject; status timeline
- **Backend Functionality:** ProposalsController writes (POST/PUT/submit/decision/cancel/timeline); FluentValidation; decision endpoint requires policies.issue
- **Database Functionality:** fn_proposal_save (recalculates premium, upserts vehicle), fn_proposal_submit, fn_proposal_change_status (workflow + history), fn_status_history_*

## Learning objectives
- Model a workflow in the database
- Never trust client-side prices
- Autosave long forms
- Render history as a timeline

## What I learned
- Business rules belong in one authoritative place (DB function)
- History tables make audits and timelines trivial

## Why this approach is used
A strict workflow with history is how real insurers prove who decided what, and when.

## Common mistakes
- Letting the client set status or price
- Editing submitted proposals
- Not recording who made each transition

## Interview questions
1. **Why recalculate the premium on the server?**
   The client cannot be trusted; the server stores the authoritative figure.
2. **What is optimistic UI?**
   Showing the expected result immediately and reconciling when the server responds.

## Practice task
Show the proposal status timeline (done) - add an icon per status and a duration "in this status for 2 days" label.

## Next day's topic
Day 30 - Motor: policy creation

## Commit
`Day 29: Add motor proposal creation`
