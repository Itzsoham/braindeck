import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// import Button from "./components/Button";
// import PlusIcon from "./icons/PlusIcon";
// import ShareIcon from "./icons/ShareIcon";

const router = createRouter({
  routeTree,
});

export default function App() {
  return <RouterProvider router={router} />;
}
