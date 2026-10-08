# Day 39 - ReactJS / TypeScript concepts

## ReactJS
- useMutation, invalidateQueries, setQueryData, staleTime, optimistic updates with rollback (onMutate / onError / onSettled)

## TypeScript
- (no new TypeScript concept today)

## Best practices
- Return the invalidate promise from onSuccess so isPending covers the refetch
- Always snapshot before an optimistic write
- Invalidate in onSettled, not only onSuccess
