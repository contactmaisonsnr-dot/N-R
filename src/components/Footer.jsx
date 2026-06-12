import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <path
        d="M12 2.5c2.7 0 3 .01 4.1.06 1.1.05 1.85.23 2.5.49a5 5 0 0 1 1.8 1.17 5 5 0 0 1 1.17 1.8c.26.65.44 1.4.49 2.5.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.23 1.85-.49 2.5a5 5 0 0 1-1.17 1.8 5 5 0 0 1-1.8 1.17c-.65.26-1.4.44-2.5.49-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.85-.23-2.5-.49a5 5 0 0 1-1.8-1.17 5 5 0 0 1-1.17-1.8c-.26-.65-.44-1.4-.49-2.5C2.51 15 2.5 14.7 2.5 12s.01-3 .06-4.1c.05-1.1.23-1.85.49-2.5A5 5 0 0 1 4.22 3.6 5 5 0 0 1 6.02 2.43c.65-.26 1.4-.44 2.5-.49C9.62 1.89 9.92 1.88 12 1.88M12 6.88a5.12 5.12 0 1 0 0 10.24 5.12 5.12 0 0 0 0-10.24m0 8.45a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66m6.5-8.65a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
        fillRule="evenodd"
      />
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://pinterest.com',
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.66 7.86 6.4 9.27-.09-.79-.17-2 .04-2.86.19-.78 1.23-4.95 1.23-4.95s-.31-.63-.31-1.55c0-1.46.84-2.54 1.9-2.54.9 0 1.33.67 1.33 1.48 0 .9-.57 2.25-.87 3.5-.25 1.04.52 1.9 1.55 1.9 1.86 0 3.29-1.96 3.29-4.79 0-2.5-1.8-4.26-4.36-4.26-2.97 0-4.71 2.23-4.71 4.53 0 .9.34 1.86.77 2.38a.31.31 0 0 1 .07.3c-.08.31-.25 1.04-.29 1.18-.04.19-.15.23-.35.14-1.3-.6-2.11-2.5-2.11-4.02 0-3.27 2.38-6.27 6.86-6.27 3.6 0 6.4 2.57 6.4 6 0 3.58-2.26 6.46-5.39 6.46-1.05 0-2.05-.55-2.39-1.2 0 0-.52 2-.65 2.48-.23.9-.86 2.03-1.28 2.71A10 10 0 1 0 12 2" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2M1.2 21.5h3.6V8.2H1.2zM9.3 8.2H5.85v13.3h3.6v-7.4c0-1.95 1.1-3 2.7-3 1.5 0 2.4 1 2.4 3v7.4h3.6v-8.2c0-3.4-1.85-5.3-4.55-5.3-2.05 0-3.05 1.15-3.6 2v-1.8z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-clay text-cream">
      <div
        aria-hidden="true"
        className="blob-slow absolute -top-24 -right-24 h-72 w-72 bg-terracotta/30"
      />
      <div
        aria-hidden="true"
        className="blob absolute -bottom-32 -left-20 h-80 w-80 bg-sage/20"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-white font-heading font-bold">
              NR
            </span>
            <span className="font-heading font-semibold text-lg">
              Maisons N&amp;R
            </span>
          </div>
          <p className="text-cream/70 max-w-xs">
            Architecture d&apos;intérieur &amp; décoration sur mesure.
            Des intérieurs colorés, chaleureux et pensés pour vous.
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-gold-light mb-4 uppercase text-sm tracking-wide">
            Navigation
          </h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="text-cream/80 hover:text-terracotta-light transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-gold-light mb-4 uppercase text-sm tracking-wide">
            Suivez-nous
          </h3>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-200 hover:bg-terracotta hover:text-white cursor-pointer"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
          <p className="mt-6 text-cream/70 text-sm">
            contact@maisons-nr.fr
            <br />
            06 12 34 56 78
          </p>
        </div>
      </div>

      <div className="relative border-t border-cream/10 py-6 text-center text-sm text-cream/60">
        © {new Date().getFullYear()} Maisons N&amp;R — Tous droits réservés
      </div>
    </footer>
  )
}
