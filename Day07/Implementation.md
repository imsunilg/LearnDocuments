# Day 07 - Implementation

## What was built
- Router with nested routes and wildcard 404
- NavLink sidebar
- ASP.NET Core 9 project with Swagger and /api/health
- PostgresJsonDb gateway (IJsonDb)
- LearnDB setup script, schema and customers table

## Code walkthrough
The root route renders PageLayout; children render in its Outlet. `path: "*"` catches unknown URLs. The API registers one NpgsqlDataSource and exposes IJsonDb.CallAsync(function, args) so controllers never contain SQL.

## Architecture changes
- LearnAPI folders: Controllers, Application, Domain, Infrastructure, Common, Middleware, Extensions
