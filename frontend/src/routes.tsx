import { createRootRoute, createRoute } from "@tanstack/react-router";
import { Root } from "./components/root";
import Home from "./pages/Home";
import Tweets from "./pages/Tweets";
import Videos from "./pages/Videos";
import Tags from "./pages/Tags";

const rootRoute = createRootRoute({
  component: Root,
});

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

export const routeTree = rootRoute.addChildren([
  indexRoute,
  TweetsRoute,
  VideosRoute,
  TagsRoute,
]);
