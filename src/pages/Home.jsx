import { NavLink } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import ArtPanel from '../components/ArtPanel'
import DecorMorphHero from '../components/DecorMorphHero'
import { projects } from '../data/projects'

const services = [
  {
    title: 'Conseil décoration',
    description:
      "Une intervention ciblée pour redonner vie à votre intérieur : palette, mobilier, accessoires, mise en scène.",
    color: 'bg-terracotta',
  },
  {
    title: 'Sur-mesure',
    description:
      'Mobilier, agencement, matériaux : chaque élément est pensé et dessiné spécifiquement pour votre espace et votre usage.',
    color: 'bg-sage',
  },
  {
    title: 'Conception architecturale intérieure',
    description:
      "De l'esquisse aux plans d'exécution, je prends en charge l'intégralité du projet : restructuration, cloisons, lumière, matières.",
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
            <span className="inline-block rounded-full bg-terracotta/10 px-4 py-1 text-sm font-semibold text-terracotta-dark mb-6 tracking-wide">
              Clara Jouve · Architecte d&apos;intérieur indépendante
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-clay">
              Chaque espace mérite{' '}
              <span className="italic text-terracotta">une histoire</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-clay/70">
              Je vous accompagne dans tous vos projets de rénovation
              intérieure et de décoration, pour créer des espaces uniques et
              personnalisés — appartements, maisons, boutiques ou bureaux.
              Mon objectif : concevoir un espace qui vous ressemble et
              optimise votre confort et votre style.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <NavLink
                to="/projets"
                className="inline-flex items-center rounded-full bg-terracotta px-7 py-3 font-heading font-semibold text-white shadow-lg shadow-terracotta/30 transition-colors duration-200 hover:bg-terracotta-dark cursor-pointer"
              >
                Découvrir mes projets
              </NavLink>
              <NavLink
                to="/contact"
                className="glass inline-flex items-center rounded-full px-7 py-3 font-heading font-semibold text-clay shadow-md transition-colors duration-200 hover:bg-white/70 cursor-pointer"
              >
                Prendre rendez-vous
              </NavLink>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="glass rounded-3xl p-3 shadow-xl shadow-clay/10">
            <ArtPanel palette="terracotta" label="N&R" className="aspect-[4/5] rounded-2xl" />
          </RevealOnScroll>
        </div>
      </section>

      {/* Scroll-driven decoration morph */}
      <DecorMorphHero />

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-clay">
              Mes prestations
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
                className="glass group rounded-3xl p-8 shadow-md shadow-clay/5 transition-transform duration-300 hover:-translate-y-1"
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
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-clay">
                Aperçu de projets
              </h2>
              <p className="mt-3 text-clay/70">
                Un aperçu de mes dernières réalisations.
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
            {projects.slice(0, 3).map((project, index) => (
              <RevealOnScroll
                key={project.id}
                delay={index * 0.1}
                className="glass group rounded-3xl overflow-hidden shadow-md shadow-clay/5 cursor-pointer transition-transform duration-300 hover:-translate-y-1 p-2"
              >
                <ArtPanel
                  palette={project.palette}
                  label={project.label}
                  className="aspect-[4/3] rounded-2xl"
                />
                <div className="p-5">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wide text-terracotta">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-clay">
                    {project.title}
                  </h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <RevealOnScroll className="glass-dark relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-16 text-center text-cream">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            Un projet en tête ?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-cream/80">
            Parlons-en. Racontez-moi votre intérieur idéal et donnons-lui
            vie ensemble, lors d&apos;un premier rendez-vous sans engagement.
          </p>
          <NavLink
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-terracotta px-8 py-3 font-heading font-semibold text-white shadow-lg shadow-terracotta/30 transition-colors duration-200 hover:bg-terracotta-dark cursor-pointer"
          >
            Me contacter
          </NavLink>
        </RevealOnScroll>
      </section>
    </div>
  )
}
