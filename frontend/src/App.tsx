import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routes";

// Create the router using the single root route tree
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
