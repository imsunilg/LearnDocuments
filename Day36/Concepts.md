# Day 36 - Concepts

## Compound Tabs
- **WHY:** Tabs are a family: list, tab, panel share the selected id.
- **WHAT:** <Tabs><Tabs.List><Tabs.Tab/></Tabs.List><Tabs.Panel/></Tabs> with context.
- **HOW:** role=tablist/tab/tabpanel, aria-selected, aria-controls/labelledby; roving tabindex; ← → Home End keys.
- **WHERE (in LearnInsurance):** components/common/Tabs.tsx.

## Accordion
- **WHY:** Long content in compact form.
- **WHAT:** Header buttons with aria-expanded and aria-controls; panels toggled with the hidden attribute.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Accordion.tsx.

## Wizard as a state machine
- **WHY:** Scattered setState calls hide the legal transitions.
- **WHAT:** wizardReducer(state, event): next/back/goTo/complete/error/reset. You can only jump forward up to the furthest step reached; per-step validate() decides whether Next is allowed.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Wizard.tsx.

## Stepper
- **WHY:** Orientation: where am I, what is done, what failed?
- **WHAT:** Presentational list with aria-current="step"; states done/current/error/todo.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Stepper.tsx.
