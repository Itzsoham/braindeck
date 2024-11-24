import { createRouter, RouterProvider } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";
import { routeTree } from "./routes";
import { loginRouteTree } from "./LoginRoute";

// Create a shared root route
const sharedRootRoute = createRootRoute({
  component: () => null, // Acts as the universal root container
});

// Add both trees as children of the shared root
const combinedRouteTree = sharedRootRoute.addChildren([
  routeTree,
  loginRouteTree,
]);

const router = createRouter({ routeTree: combinedRouteTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
