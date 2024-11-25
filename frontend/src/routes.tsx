import { createRootRoute, createRoute } from "@tanstack/react-router";
import { Root } from "./components/root";
import Home from "./pages/Home";
import Tweets from "./pages/Tweets";
import Videos from "./pages/Videos";
import Tags from "./pages/Tags";

// Define the single root route
const rootRoute = createRootRoute({
  component: Root, // Root layout with conditional rendering
});

// Main app routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const TweetsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tweets",
  component: Tweets,
});

const VideosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/videos",
  component: Videos,
});

const TagsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tags",
  component: Tags,
});

// Combine all routes under the single root route
export const routeTree = rootRoute.addChildren([
  indexRoute,
  TweetsRoute,
  VideosRoute,
  TagsRoute,
]);
