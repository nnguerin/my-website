import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="font-bold flex flex-row gap-2">
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/life">Life</Link>
      </nav>
    </header>
  )
}
