import { NavLink } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import { projects } from '../data/projects'
import { HeroLivingRoom } from '../components/illustrations/RoomIllustrations'

const services = [
  {
    title: 'Conception sur mesure',
    description:
      "Plans, agencements et moodboards pensés selon votre mode de vie et vos envies de couleurs.",
    color: 'bg-terracotta',
  },
  {
    title: 'Décoration & mobilier',
    description:
      'Sélection de mobilier, textiles et objets pour une ambiance fluide, chaleureuse et harmonieuse.',
    color: 'bg-sage',
  },
  {
    title: 'Suivi de chantier',
    description:
      "De la démolition à la pose finale, nous coordonnons artisans et fournisseurs jusqu'au bout.",
    color: 'bg-gold',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 pb-24 pt-12">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-center">
          <RevealOnScroll>
            <span className="inline-block rounded-full bg-terracotta/10 px-4 py-1 text-sm font-semibold text-terracotta-dark mb-6">
              Architecture d&apos;intérieur &amp; Décoration
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-clay">
              Des intérieurs <span className="text-terracotta">colorés</span>,
              <br className="hidden sm:block" /> des espaces{' '}
              <span className="text-sage">fluides</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-clay/70">
              Maisons N&amp;R imagine et réalise des intérieurs vibrants et
              harmonieux, où chaque pièce raconte une histoire — la vôtre.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <NavLink
                to="/projets"
                className="inline-flex items-center rounded-full bg-terracotta px-7 py-3 font-heading font-semibold text-white shadow-lg shadow-terracotta/30 transition-colors duration-200 hover:bg-terracotta-dark cursor-pointer"
              >
                Découvrir nos projets
              </NavLink>
              <NavLink
                to="/contact"
                className="glass inline-flex items-center rounded-full px-7 py-3 font-heading font-semibold text-clay shadow-md transition-colors duration-200 hover:bg-white/60 cursor-pointer"
              >
                Prendre rendez-vous
              </NavLink>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="glass rounded-[2.5rem] p-6 shadow-xl shadow-clay/10">
            <HeroLivingRoom className="w-full h-auto" />
          </RevealOnScroll>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-clay">
              Notre savoir-faire
            </h2>
            <p className="mt-3 text-clay/70 max-w-xl mx-auto">
              Un accompagnement complet, de la première esquisse aux derniers
              détails de décoration.
            </p>
          </RevealOnScroll>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <RevealOnScroll
                key={service.title}
                delay={index * 0.1}
                className="glass group rounded-[2rem] p-8 shadow-md shadow-clay/5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${service.color}`}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
                    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-clay mb-2">
                  {service.title}
                </h3>
                <p className="text-clay/70">{service.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-clay">
                Projets récents
              </h2>
              <p className="mt-3 text-clay/70">
                Un aperçu de nos dernières réalisations.
              </p>
            </div>
            <NavLink
              to="/projets"
              className="font-heading font-semibold text-terracotta hover:text-terracotta-dark transition-colors duration-200 cursor-pointer"
            >
              Voir tous les projets →
            </NavLink>
          </RevealOnScroll>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => {
              const Illustration = project.illustration
              return (
                <RevealOnScroll
                  key={project.id}
                  delay={index * 0.1}
                  className="glass group rounded-[2rem] overflow-hidden shadow-md shadow-clay/5 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 w-full bg-white/40">
                    <Illustration className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-heading font-semibold uppercase tracking-wide text-terracotta">
                      {project.category} · {project.location}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-clay">
                      {project.title}
                    </h3>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <RevealOnScroll className="glass-dark relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] px-8 py-16 text-center text-cream">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Un projet en tête ?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-cream/80">
            Parlons-en. Racontez-nous votre intérieur idéal et donnons-lui
            vie ensemble.
          </p>
          <NavLink
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-terracotta px-8 py-3 font-heading font-semibold text-white shadow-lg shadow-terracotta/30 transition-colors duration-200 hover:bg-terracotta-dark cursor-pointer"
          >
            Nous contacter
          </NavLink>
        </RevealOnScroll>
      </section>
    </div>
  )
}
