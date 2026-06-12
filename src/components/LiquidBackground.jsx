import { motion, useScroll, useTransform } from 'framer-motion'

export default function LiquidBackground() {
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const y4 = useTransform(scrollYProgress, [0, 1], ['0%', '-65%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-cream"
    >
      <motion.div
        style={{ y: y1 }}
        className="blob absolute -top-32 -left-32 h-[28rem] w-[28rem] bg-terracotta-light/50 mix-blend-multiply"
      />
      <motion.div
        style={{ y: y2 }}
        className="blob-slow absolute top-1/4 -right-40 h-[34rem] w-[34rem] bg-sky/40 mix-blend-multiply"
      />
      <motion.div
        style={{ y: y3, rotate }}
        className="blob-fast absolute top-1/2 left-1/3 h-[24rem] w-[24rem] bg-gold-light/50 mix-blend-multiply"
      />
      <motion.div
        style={{ y: y4 }}
        className="blob-slow absolute bottom-0 -left-20 h-[30rem] w-[30rem] bg-lilac/40 mix-blend-multiply"
      />
      <motion.div
        style={{ y: y2 }}
        className="blob absolute bottom-1/4 right-1/4 h-[26rem] w-[26rem] bg-blush/50 mix-blend-multiply"
      />
      <motion.div
        style={{ y: y1 }}
        className="blob-fast absolute bottom-[-10rem] right-[-6rem] h-[28rem] w-[28rem] bg-sage-light/50 mix-blend-multiply"
      />

      {/* Soft overlay so glass surfaces stay readable */}
      <div className="absolute inset-0 bg-cream/30" />
    </div>
  )
}
