import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-terracotta ${
      isActive ? 'text-terracotta font-semibold' : 'text-clay'
    }`

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="mx-auto max-w-6xl rounded-full bg-white/80 backdrop-blur-md border border-clay/10 shadow-lg shadow-clay/5 px-6 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-white font-heading font-bold">
            NR
          </span>
          <span className="font-heading font-semibold text-lg text-clay">
            Maisons N&amp;R
          </span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-8 font-heading text-sm uppercase tracking-wide">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-terracotta px-5 py-2 text-sm font-heading font-semibold text-white shadow-md shadow-terracotta/30 transition-colors duration-200 hover:bg-terracotta-dark cursor-pointer"
        >
          Démarrer un projet
        </NavLink>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-clay cursor-pointer transition-colors duration-200 hover:bg-clay/5"
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden mt-2 mx-auto max-w-6xl rounded-3xl bg-white/95 backdrop-blur-md border border-clay/10 shadow-lg shadow-clay/5 p-4 flex flex-col gap-3 font-heading text-sm uppercase tracking-wide">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-full bg-terracotta px-5 py-2 text-sm font-heading font-semibold text-white shadow-md shadow-terracotta/30 cursor-pointer"
            >
              Démarrer un projet
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  )
}
