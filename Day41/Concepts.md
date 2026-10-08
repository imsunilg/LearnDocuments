# Day 41 - Concepts

## Aggregate endpoint
- **WHY:** A details page needing six requests is slow and flickers.
- **WHAT:** The database assembles policy + customer + sections + history in one JSON; the page makes one query (later days extend the same function with payments, documents, endorsements, claims).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_policy_get_details, usePolicyDetails.

## Prefetching
- **WHY:** The user's pointer reaches a link ~200 ms before the click.
- **WHAT:** queryClient.prefetchQuery on mouseenter/focus fills the cache; when the page mounts the data is already there.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PoliciesPage (policy link), prefetchPolicyDetails.

## Tabs for composition
- **WHY:** Break a big page into focused sections without extra routes.
- **WHAT:** Tabs from Day 36; inactive panels are not rendered, so heavy sections cost nothing until opened.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** PolicyDetailsPage.

## Data-driven sections
- **WHY:** Motor, Home, Health and Travel policies have different insured details.
- **WHAT:** Each policy_details section becomes an Accordion item rendered by the generic DetailsView.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** Insured tab.
