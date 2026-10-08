# Day 09 - Implementation

## What was built
- Loader, ErrorState, EmptyState components
- apiError util
- Exception handler mapping P0001→400, P0002→404, 23505→409, 23503→409, 23514→400

## Code walkthrough
GlobalExceptionHandler is registered with AddExceptionHandler and enabled by UseExceptionHandler. UseCors is placed before it so error responses still include CORS headers (otherwise the browser reports a CORS error instead of the real message).

## Architecture changes
None.
