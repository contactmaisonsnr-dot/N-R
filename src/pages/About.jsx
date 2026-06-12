import RevealOnScroll from '../components/RevealOnScroll'
import ArtPanel from '../components/ArtPanel'

const values = [
  {
    title: 'Émotion & bien-être',
    description:
      "Je conçois des espaces qui font ressentir quelque chose — où l'on se sent bien, tout simplement.",
    color: 'bg-terracotta',
  },
  {
    title: 'Humanité',
    description:
      'Une approche attentive et sur-mesure, à l’écoute de chaque personne, de ses envies et de sa façon de vivre.',
    color: 'bg-sage',
  },
  {
    title: 'Sensibilité',
    description:
      'La couleur, la lumière naturelle, les formes douces : autant de langages que j’utilise pour révéler l’âme d’un lieu.',
    color: 'bg-gold',
  },
  {
    title: 'Artisanat & nature',
    description:
      'Inspirée par les paysages méditerranéens et l’artisanat, je privilégie les matières authentiques et les choix durables.',
    color: 'bg-blush',
  },
]

const timeline = [
  {
    year: '2024–2025',
    title: 'Diplôme en architecture d’intérieur — Formation MMI Déco',
    description:
      'Professionnalisation en architecture d’intérieur et création de Maisons N&R, pour accompagner particuliers et professionnels dans leurs projets d’aménagement.',
  },
  {
    year: '2025',
    title: 'Architecte d’intérieur — Stage Studio Bardot',
    description:
      'Implication dans toutes les phases de projet : relevés sur site, conception d’espaces, plans techniques, moodboards et rendus 3D. Présentations clients, sélection des matériaux et du mobilier, suivi de chantier et travail sur AutoCAD.',
  },
  {
    year: '2023–2024',
    title: 'Community Manager — Morning',
    description:
      'Immersion dans un univers où l’espace, son usage et son image sont indissociables — une expérience décisive qui a confirmé ma vocation pour l’architecture d’intérieur.',
  },
  {
    year: '2022–2023',
    title: 'Cheffe de projet B2B — The Cool Republic',
    description:
      'En collaboration avec des hôtels, restaurants et décorateurs : le déclic. L’univers de la décoration devient une évidence et une direction à suivre.',
  },
  {
    year: '2019–2024',
    title: 'Bachelor en marketing international & Master en marketing',
    description:
      'Des études ouvertes sur le monde, ponctuées d’un séjour à Buenos Aires, qui m’ont permis de développer un œil analytique et critique : comprendre une cible, construire une identité, valoriser un espace.',
  },
]

export default function About() {
  return (
    <div>
      <section className="px-6 pb-12 pt-12">
        <RevealOnScroll className="mx-auto max-w-6xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-clay">
            À propos de <span className="italic text-terracotta">Clara Jouve</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-clay/70">
            Architecte d&apos;intérieur indépendante, passionnée par la
            couleur, la lumière et le bien-être au quotidien.
          </p>
        </RevealOnScroll>
      </section>

      {/* Story */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-center">
          <RevealOnScroll className="glass rounded-3xl p-3 shadow-xl shadow-clay/10">
            <ArtPanel palette="sage" label="C" className="aspect-square rounded-2xl" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <h2 className="font-heading text-3xl font-semibold text-clay">
              Mon histoire
            </h2>
            <p className="mt-4 text-clay/70">
              Architecte d&apos;intérieur diplômée depuis mars 2025, je conçois
              des espaces pensés pour susciter l&apos;émotion, le bien-être et
              une vraie qualité de vie au quotidien.
            </p>
            <p className="mt-4 text-clay/70">
              Sensible à la couleur, aux formes douces et à la lumière
              naturelle, j&apos;imagine des intérieurs à la fois fonctionnels
              et expressifs, où chaque détail a du sens. J&apos;accompagne
              aussi bien les particuliers que les professionnels, avec une
              approche attentive, humaine et sur-mesure. Chaque lieu est pour
              moi une histoire à révéler — un équilibre à trouver entre usage,
              esthétique et ressenti.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-clay">
              Un fil conducteur : la recherche de sens
            </h2>
          </RevealOnScroll>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <RevealOnScroll
                key={item.year}
                delay={index * 0.06}
                className="glass rounded-3xl p-6 shadow-md shadow-clay/5 sm:flex sm:gap-6"
              >
                <span className="flex-none font-heading text-xl font-semibold text-gold sm:w-32">
                  {item.year}
                </span>
                <div className="mt-2 sm:mt-0">
                  <h3 className="font-heading text-lg font-semibold text-clay">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-clay/70">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-clay">
              Mes valeurs
            </h2>
          </RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <RevealOnScroll
                key={value.title}
                delay={index * 0.08}
                className="glass rounded-3xl p-6 shadow-md shadow-clay/5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`mb-4 h-3 w-12 rounded-full ${value.color}`}
                />
                <h3 className="font-heading text-lg font-semibold text-clay">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-clay/70">
                  {value.description}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
