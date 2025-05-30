import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work')({
  component: Work,
})

function Work() {
  return <div className="p-2">work in progress...</div>
}
