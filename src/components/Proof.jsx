import { motion } from 'framer-motion'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function Proof() {
  return (
    <section className="proof section" id="proof">
      <motion.p className="eyebrow" {...reveal}>
        Proof, not promises
      </motion.p>

      <motion.h2 className="proof__title" {...reveal}>
        AI Influencer Suite
      </motion.h2>

      <motion.p className="proof__body" {...reveal}>
        A platform I built and run solo. It lets faceless creators spin up AI
        personas, generate their photos and videos, and schedule a full week of
        content — the whole pipeline in one place. Designed, coded, and shipped by
        me, live with real users.
      </motion.p>

      <motion.a
        className="proof__link"
        href="https://aiinfluencersuite.tech"
        target="_blank"
        rel="noopener noreferrer"
        {...reveal}
      >
        aiinfluencersuite.tech
        <span className="proof__arrow" aria-hidden="true">
          ↗
        </span>
      </motion.a>
    </section>
  )
}
