import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/life')({
  component: Life,
})

function Life() {
  return <div className="p-2">life in progress...</div>
}
