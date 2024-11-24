import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import Login from "./pages/Login";

// Create a root route for Login
const LoginRootRoute = createRootRoute({
  component: () => <Outlet />, // Acts as a container for Login
});

// Create the Login route under the LoginRootRoute
const LoginRoute = createRoute({
  getParentRoute: () => LoginRootRoute,
  path: "/login",
  component: Login,
});

// Export a tree for the login route
export const loginRouteTree = LoginRootRoute.addChildren([LoginRoute]);
