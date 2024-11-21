import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/tweets")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /home/tweets!";
}
