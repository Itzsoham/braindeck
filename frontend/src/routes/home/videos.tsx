import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/videos')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /videos!'
}
