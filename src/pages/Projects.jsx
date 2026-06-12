import { useState } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'
import { projects, categories } from '../data/projects'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filteredProjects =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div>
      <section className="px-6 pb-12 pt-12">
        <RevealOnScroll className="mx-auto max-w-6xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-clay">
            Nos <span className="text-terracotta">projets</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-clay/70">
            Une sélection de réalisations qui célèbrent la couleur, la
            lumière et le mouvement.
          </p>
        </RevealOnScroll>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Filters */}
          <RevealOnScroll className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 font-heading text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-terracotta text-white shadow-md shadow-terracotta/30'
                    : 'glass text-clay hover:bg-white/60'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </RevealOnScroll>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const Illustration = project.illustration
              return (
                <RevealOnScroll
                  key={project.id}
                  delay={(index % 3) * 0.1}
                  className="glass group rounded-[2rem] overflow-hidden shadow-md shadow-clay/5 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                >
                  <article>
                    <div className="relative h-56 w-full bg-white/40">
                      <Illustration className="h-full w-full object-cover" />
                      <div className="absolute inset-0 flex items-end bg-clay/0 p-5 opacity-0 transition-opacity duration-300 group-hover:bg-clay/30 group-hover:opacity-100">
                        <span className="rounded-full bg-white/90 px-4 py-1 text-sm font-heading font-semibold text-clay">
                          Voir le projet
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-heading font-semibold uppercase tracking-wide text-terracotta">
                        {project.category} · {project.location}
                      </span>
                      <h2 className="mt-2 font-heading text-lg font-semibold text-clay">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm text-clay/70">
                        {project.description}
                      </p>
                    </div>
                  </article>
                </RevealOnScroll>
              )
            })}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-clay/60 mt-12">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
