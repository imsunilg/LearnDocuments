# Day 07 - Concepts

## React Router
- **WHY:** Users expect URLs, back/forward and deep links.
- **WHAT:** Maps URL → component tree. Data router: createBrowserRouter + RouterProvider.
- **HOW:** Route objects can nest; parent renders <Outlet/> where the matched child appears.
- **WHERE (in LearnInsurance):** app/routes/router.tsx; PageLayout is the layout route.

## Link / NavLink / useNavigate / useParams
- **WHY:** Client-side navigation without full page reloads.
- **WHAT:** Link navigates; NavLink adds active styling; useNavigate navigates imperatively; useParams reads :id.
- **HOW:** History API pushState + route matching.
- **WHERE (in LearnInsurance):** Sidebar, CustomerList, CustomerDetailsPage.
