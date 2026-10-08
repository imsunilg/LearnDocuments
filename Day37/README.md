# DAY 37

- **Topic:** Insurance Proposal Wizard
- **ReactJS Concept:** Multi-step form state in ONE useForm, per-step validation with trigger(), a composite resolver (zod + product-specific rules), resume-from-draft, reuse of sections through a path prefix
- **Insurance Functionality:** Unified wizard for every product line: Customer → Product → Details → Premium → Review → Submit, with "save draft & exit" and "resume draft"
- **Backend Functionality:** POST /api/proposals/submit (save + submit in one call), ProposalRequest.partial for incomplete drafts
- **Database Functionality:** fn_proposal_save supports partial drafts (no price stored), fn_proposal_save_and_submit (single transaction)

## Learning objectives
- Build a long multi-step form without losing state
- Validate step by step
- Persist and resume incomplete work
- Make an atomic "submit everything" call

## What I learned
- trigger() makes step validation trivial
- Persisting incomplete work needs relaxed server rules - but never relaxed submission rules

## Why this approach is used
The wizard unifies four product lines behind one guided experience and reuses everything built before.

## Common mistakes
- Validating the whole form on every Next
- Separate forms per step
- Allowing a partial draft to be submitted

## Interview questions
1. **How do you validate only one step of a form?**
   trigger() with the field names of that step.
2. **Why a prefix prop instead of copy-pasting the motor fields?**
   One implementation serves both forms; names are derived from the prefix.

## Practice task
Add a "resume draft" feature (done: /proposals/:id/resume) - show a banner with the saved time and the last completed step.

## Next day's topic
Day 38 - TanStack Query

## Commit
`Day 37: Add insurance proposal wizard`
