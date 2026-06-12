import { motion, useScroll, useTransform } from 'framer-motion'

export default function LiquidBackground() {
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-cream"
    >
      <motion.div
        style={{ y: y1 }}
        className="blob-slow absolute -top-40 -left-40 h-[36rem] w-[36rem] bg-terracotta-light/25 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="blob absolute top-1/3 -right-48 h-[40rem] w-[40rem] bg-sage-light/25 blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="blob-fast absolute bottom-[-12rem] left-1/4 h-[34rem] w-[34rem] bg-gold-light/25 blur-3xl"
      />
    </div>
  )
}
