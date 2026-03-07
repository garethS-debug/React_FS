import { useState } from 'react'

export function NavBar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const links = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="navBarRoot">
      <div className="brand">MyApp</div>
      <button
        className="navToggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      <ul className={`navLinks ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={l.href}
              className={active === l.id ? 'active' : ''}
              onClick={(e) => {
                setActive(l.id)
                setOpen(false)
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}