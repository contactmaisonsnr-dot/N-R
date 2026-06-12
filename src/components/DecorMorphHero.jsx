import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Sofa,
  Armchair,
  FloorLamp,
  Plant,
  CoffeeTable,
  Rug,
  ArtFrame,
  SideTable,
} from './decor/FurniturePieces'

// Each piece scatters across the viewport on entry, then assembles into a
// cohesive living-room composition as the user scrolls through the section.
const pieces = [
  {
    Comp: Rug,
    width: 360,
    z: 1,
    scatter: { x: 320, y: 240, rotate: 18, scale: 0.6 },
    assembled: { x: 0, y: 150, rotate: 0, scale: 1.25 },
  },
  {
    Comp: Sofa,
    width: 300,
    z: 3,
    scatter: { x: -380, y: 160, rotate: -28, scale: 0.55 },
    assembled: { x: -70, y: 20, rotate: 0, scale: 1 },
  },
  {
    Comp: Armchair,
    width: 190,
    z: 3,
    scatter: { x: 360, y: -180, rotate: 38, scale: 0.55 },
    assembled: { x: 175, y: 35, rotate: 0, scale: 0.95 },
  },
  {
    Comp: CoffeeTable,
    width: 220,
    z: 4,
    scatter: { x: -220, y: -220, rotate: -50, scale: 0.5 },
    assembled: { x: 30, y: 105, rotate: 0, scale: 0.95 },
  },
  {
    Comp: FloorLamp,
    width: 110,
    z: 4,
    scatter: { x: -340, y: 260, rotate: 55, scale: 0.5 },
    assembled: { x: 270, y: -35, rotate: 0, scale: 0.9 },
  },
  {
    Comp: Plant,
    width: 160,
    z: 4,
    scatter: { x: 370, y: 110, rotate: -45, scale: 0.5 },
    assembled: { x: -250, y: -10, rotate: 0, scale: 0.9 },
  },
  {
    Comp: ArtFrame,
    width: 150,
    z: 2,
    scatter: { x: -300, y: -260, rotate: -32, scale: 0.5 },
    assembled: { x: -10, y: -165, rotate: 0, scale: 0.85 },
  },
  {
    Comp: SideTable,
    width: 110,
    z: 3,
    scatter: { x: 110, y: -290, rotate: 32, scale: 0.5 },
    assembled: { x: -170, y: 95, rotate: 0, scale: 0.8 },
  },
]

function MorphPiece({ piece, progress }) {
  const { Comp, width, z, scatter, assembled } = piece
  const x = useTransform(progress, [0, 1], [scatter.x, assembled.x])
  const y = useTransform(progress, [0, 1], [scatter.y, assembled.y])
  const rotate = useTransform(progress, [0, 1], [scatter.rotate, assembled.rotate])
  const scale = useTransform(progress, [0, 1], [scatter.scale, assembled.scale])
  const opacity = useTransform(progress, [0, 0.25], [0, 1])

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ width, x, y, rotate, scale, opacity, zIndex: z, marginLeft: -width / 2 }}
    >
      <Comp />
    </motion.div>
  )
}

export default function DecorMorphHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const progress = useTransform(scrollYProgress, [0.05, 0.8], [0, 1], {
    clamp: true,
  })

  const labelOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute top-24 left-0 right-0 text-center px-6 pointer-events-none"
        >
          <span className="inline-block rounded-full bg-terracotta/10 px-4 py-1 text-sm font-semibold text-terracotta-dark mb-4 tracking-wide">
            Faites défiler
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-clay">
            Chaque pièce trouve <span className="italic text-terracotta">sa place</span>
          </h2>
        </motion.div>

        <div className="relative h-full w-full max-w-4xl mx-auto">
          {pieces.map((piece, index) => (
            <MorphPiece key={index} piece={piece} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  )
}
