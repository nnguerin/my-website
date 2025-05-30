import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="text-center">
      <div>Also in Progress...</div>
    </div>
  )
}
