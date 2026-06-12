import { useState } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'
import { DuplexScene } from '../components/illustrations/RoomIllustrations'

const infos = [
  {
    label: 'Adresse',
    value: '12 rue des Artisans, 75011 Paris',
    icon: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  {
    label: 'Téléphone',
    value: '06 12 34 56 78',
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.32 1.9.57 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.25 1.85.44 2.81.57A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: 'Email',
    value: 'contact@maisons-nr.fr',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    label: 'Horaires',
    value: 'Lun – Ven · 9h – 18h',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div>
      <section className="px-6 pb-12 pt-12">
        <RevealOnScroll className="mx-auto max-w-6xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-clay">
            Parlons de votre <span className="text-terracotta">projet</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-clay/70">
            Une question, une idée, un projet ? Écrivez-nous, nous vous
            répondrons rapidement.
          </p>
        </RevealOnScroll>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <RevealOnScroll className="glass rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-clay/10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-light/60">
                  <svg
                    className="h-8 w-8 text-sage"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-semibold text-clay">
                  Merci pour votre message !
                </h2>
                <p className="mt-2 text-clay/70">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-heading text-sm font-semibold text-clay mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full rounded-2xl border border-clay/10 bg-cream px-4 py-3 text-clay placeholder:text-clay/40 focus:outline-none focus:ring-2 focus:ring-terracotta transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-heading text-sm font-semibold text-clay mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="vous@exemple.fr"
                      className="w-full rounded-2xl border border-clay/10 bg-cream px-4 py-3 text-clay placeholder:text-clay/40 focus:outline-none focus:ring-2 focus:ring-terracotta transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block font-heading text-sm font-semibold text-clay mb-2"
                  >
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full rounded-2xl border border-clay/10 bg-cream px-4 py-3 text-clay focus:outline-none focus:ring-2 focus:ring-terracotta transition-colors duration-200"
                  >
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Bureau / Commerce</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-heading text-sm font-semibold text-clay mb-2"
                  >
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Parlez-nous de votre projet..."
                    className="w-full rounded-2xl border border-clay/10 bg-cream px-4 py-3 text-clay placeholder:text-clay/40 focus:outline-none focus:ring-2 focus:ring-terracotta transition-colors duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center rounded-full bg-terracotta px-8 py-3 font-heading font-semibold text-white shadow-lg shadow-terracotta/30 transition-colors duration-200 hover:bg-terracotta-dark disabled:opacity-60 cursor-pointer"
                >
                  {submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </RevealOnScroll>

          {/* Info */}
          <RevealOnScroll delay={0.15} className="space-y-6">
            <div className="glass-dark rounded-[2.5rem] text-cream p-8 sm:p-10 relative overflow-hidden">
              <div className="relative space-y-6">
                {infos.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-terracotta/20 text-terracotta-light">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {info.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-light">
                        {info.label}
                      </p>
                      <p className="mt-1 text-cream/90">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[2.5rem] aspect-[4/3] shadow-md shadow-clay/5 p-6">
              <DuplexScene className="w-full h-full rounded-[1.75rem]" />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
