import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/tags")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /home/tags!";
}
