import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/links")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /home/links!";
}
