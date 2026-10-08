export default {
  39: {
    title: 'Cache, refetch, mutation, optimistic updates',
    react: 'useMutation, invalidateQueries, setQueryData, staleTime, optimistic updates with rollback (onMutate / onError / onSettled)',
    insurance: 'Customer create/update/deactivate through mutations; an instant, optimistic Active switch in the customers table',
    objectives: ['Write data through useMutation', 'Keep the cache correct after a write', 'Implement and understand optimistic updates and rollback'],
    concepts: [
      { name: 'useMutation', why: 'A write has its own lifecycle: idle → pending → success/error.', what: 'mutate/mutateAsync run the function; the hook exposes isPending, error, data. Callbacks: onMutate, onSuccess, onError, onSettled.', where: 'customerMutations.ts.' },
      { name: 'Cache updates after a write', why: 'Lists and details are now stale.', what: 'invalidateQueries({queryKey}) marks matching queries stale and refetches the active ones. setQueryData writes a known-good value into the cache immediately (the saved record goes straight into the detail cache).', where: 'useCreateCustomer/useUpdateCustomer.' },
      { name: 'Optimistic update', why: 'A switch that waits 300 ms before moving feels broken.', what: '1) cancelQueries so refetches do not overwrite us, 2) snapshot with getQueriesData, 3) setQueriesData with the expected result, 4) onError restore the snapshot, 5) onSettled invalidate to converge on the server\'s truth.', where: 'useToggleCustomerActive.' },
      { name: 'When NOT to be optimistic', why: 'Some actions have consequences (issuing a policy, taking payment).', what: 'Use optimistic updates for cheap, reversible, low-risk toggles. Keep workflow actions pessimistic: show pending, wait for the server.', where: 'Proposal/policy actions stay pessimistic.' },
    ],
    built: ['customerMutations (create/update/delete/toggle)', 'Active switch in the customers table', 'CustomerFormPage and CustomersPage using mutations'],
    walkthrough: 'Flip the Active switch: it moves instantly in every cached list and the details cache. If the API rejects the call (try it with the API stopped) the switch snaps back and a toast explains why.',
    bestPractices: ['Return the invalidate promise from onSuccess so isPending covers the refetch', 'Always snapshot before an optimistic write', 'Invalidate in onSettled, not only onSuccess'],
    learned: ['Mutations + invalidation replace manual "reload()" plumbing', 'Optimistic UI = predict, then reconcile'],
    approach: 'The cache becomes the single place where server data lives; components never refetch by hand.',
    mistakes: ['Forgetting to cancel in-flight queries before an optimistic write', 'Not rolling back on error', 'Optimistic updates for irreversible actions'],
    interview: [['Explain optimistic updates in TanStack Query.', 'onMutate snapshots and writes the expected value; onError restores the snapshot; onSettled refetches.'], ['invalidateQueries vs setQueryData?', 'Invalidate marks stale and refetches; setQueryData writes a value you already have without a request.']],
    exercise: 'Add background refetch on window focus control: a setting that turns refetchOnWindowFocus on/off globally (hint: queryClient.setDefaultOptions).',
    next: 'Day 40 - Policy Search',
    commit: 'Day 39: Add mutations and optimistic updates',
  },
}
