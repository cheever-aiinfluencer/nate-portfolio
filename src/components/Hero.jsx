import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          Solo builder · AI content systems
        </motion.p>

        <h1 className="hero__headline">
          {['I build things that work,', 'then figure out how', 'to get them seen.'].map(
            (line, i) => (
              <span className="hero__line" key={i}>
                <motion.span
                  className="hero__line-inner"
                  initial={{ opacity: 0, y: '110%' }}
                  animate={{ opacity: 1, y: '0%' }}
                  transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ),
          )}
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
        >
          I'm a one-person shop. I design the product, ship the code, and run the
          content that puts it in front of people. No agency layers, no hand-offs —
          you talk to the person doing the work.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.75 }}
        >
          <a href="#proof" className="btn btn--primary">
            See what I've built
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
