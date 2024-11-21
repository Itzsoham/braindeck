import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/documents")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /home/documents!";
}
