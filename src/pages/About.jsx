import SectionBlobs from '../components/SectionBlobs'

const values = [
  {
    title: 'Couleur',
    description:
      "Nous utilisons la couleur comme un outil d'émotion, pour créer des espaces vivants et uniques.",
    color: 'bg-terracotta',
  },
  {
    title: 'Fluidité',
    description:
      'Des lignes douces, des circulations naturelles et des espaces qui respirent.',
    color: 'bg-sage',
  },
  {
    title: 'Sur-mesure',
    description:
      'Chaque projet est unique : nous adaptons nos propositions à votre rythme de vie.',
    color: 'bg-gold',
  },
  {
    title: 'Durabilité',
    description:
      'Des matériaux choisis avec soin, pour des intérieurs beaux et responsables.',
    color: 'bg-blush',
  },
]

const steps = [
  {
    number: '01',
    title: 'Échange & inspiration',
    description:
      'Un premier rendez-vous pour comprendre vos envies, vos habitudes et votre univers.',
  },
  {
    number: '02',
    title: 'Conception',
    description:
      'Plans, moodboards et palettes colorées vous sont présentés pour valider la direction.',
  },
  {
    number: '03',
    title: 'Réalisation',
    description:
      "Coordination des artisans et suivi de chantier jusqu'à la livraison finale.",
  },
  {
    number: '04',
    title: 'Les finitions',
    description:
      'Installation du mobilier, de la décoration et des derniers détails fluides.',
  },
]

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden px-6 pb-12 pt-12">
        <SectionBlobs className="opacity-50" />
        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-clay">
            À propos de <span className="text-terracotta">Maisons N&amp;R</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-clay/70">
            Un atelier d&apos;architecture d&apos;intérieur passionné par la
            couleur, la lumière et le bien-être au quotidien.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="blob-slow absolute -z-10 -top-8 -left-8 h-64 w-64 bg-sage-light/60" />
            <div className="rounded-[2.5rem] bg-gradient-to-br from-terracotta-light via-blush to-gold-light aspect-[4/3] shadow-xl shadow-clay/10" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-clay">
              Notre histoire
            </h2>
            <p className="mt-4 text-clay/70">
              Maisons N&amp;R est née d&apos;une conviction simple : un
              intérieur réussi est un intérieur qui vous ressemble. Depuis
              nos débuts, nous accompagnons particuliers et professionnels
              dans la transformation de leurs espaces, en mêlant couleurs
              vives, formes organiques et matériaux chaleureux.
            </p>
            <p className="mt-4 text-clay/70">
              Notre approche est avant tout humaine : chaque projet démarre
              par une écoute attentive, pour concevoir des lieux fluides,
              fonctionnels et résolument vivants.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative px-6 py-20 bg-white overflow-hidden">
        <SectionBlobs className="opacity-50" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-clay">
              Nos valeurs
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[2rem] bg-cream p-6 border border-clay/5 shadow-md shadow-clay/5 transition-transform duration-300 hover:-translate-y-1"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-clay">
              Notre méthode
            </h2>
            <p className="mt-3 text-clay/70 max-w-xl mx-auto">
              Quatre étapes pour transformer une idée en un intérieur
              harmonieux.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] bg-white p-6 border border-clay/5 shadow-md shadow-clay/5"
              >
                <span className="font-heading text-3xl font-bold text-terracotta-light">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-clay">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-clay/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
