# Day 25 - Concepts

## Reference data caching
- **WHY:** Dropdown data changes rarely but is requested on nearly every form.
- **WHAT:** API: IMemoryCache (15 min, evicted on write). Browser: MasterDataProvider caches promises per type/parent.
- **HOW:** Caching the promise, not the value, de-duplicates concurrent requests.
- **WHERE (in LearnInsurance):** MasterDataCache.cs, MasterDataProvider.tsx.

## Cascading dropdowns
- **WHY:** City options depend on the chosen state.
- **WHAT:** useMasterData("CITY", stateId) where stateId comes from the selected state; null = parent not chosen.
- **HOW:** Changing the state clears the city via register(..., { onChange }).
- **WHERE (in LearnInsurance):** StateCityFields.tsx.

## Self-referencing table
- **WHY:** One table can hold STATE→CITY and MAKE→MODEL trees.
- **WHAT:** parent_id references the same table; meta jsonb holds type-specific data.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** tables/050_master_data.sql.

## Context as cache
- **WHY:** Share fetched reference data between unrelated components.
- **WHAT:** The context value is a stable API (get/invalidate); state lives in a ref.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** masterDataContext.ts.
