# Day 38 - ReactJS / TypeScript concepts

## ReactJS
- Server state vs client state, useQuery, query keys, QueryClientProvider, staleTime/gcTime, keepPreviousData, devtools

## TypeScript
- Typed query keys with `as const`
- UseQueryResult<T, Error> flags: isPending, isFetching, isPlaceholderData

## Best practices
- Query keys include every variable the fetch depends on
- Do not copy query data into useState - read it from the cache
- Retry only on network/5xx errors
