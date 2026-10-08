# Day 08 - Concepts

## Service layer
- **WHY:** URLs, params and types should live in one place.
- **WHAT:** Plain modules (customerApi) wrapping the HTTP client.
- **HOW:** Each function returns typed data (`PagedResult<Customer>`), unwrapping response.data.
- **WHERE (in LearnInsurance):** services/api/customerApi.ts.

## Environment variables
- **WHY:** API URL differs per environment.
- **WHAT:** Vite loads .env.[mode]; only VITE_* names reach the browser bundle.
- **HOW:** import.meta.env.VITE_API_BASE_URL (typed in env.d.ts).
- **WHERE (in LearnInsurance):** .env.development, httpClient.ts.

## CORS
- **WHY:** Browsers block cross-origin calls unless the server allows them.
- **WHAT:** Server headers (Access-Control-Allow-Origin...).
- **HOW:** The API allows http://localhost:5173 through the "web" CORS policy.
- **WHERE (in LearnInsurance):** ServiceCollectionExtensions.AddCorsPolicy.
