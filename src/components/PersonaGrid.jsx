import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PERSONAS } from '../data.js'

function Avatar({ persona }) {
  // Real image sits on top of the gradient; if it fails to load, the
  // gradient shows through — so the layout looks intentional either way.
  return (
    <div className="persona__media" style={{ background: persona.gradient }}>
      <img
        className="persona__img"
        src={persona.src}
        alt={persona.label + ' persona'}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.opacity = 0
        }}
      />
    </div>
  )
}

export default function PersonaGrid() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const active = PERSONAS.find((p) => p.id === selected)

  return (
    <section className="personas section" id="work">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        The work in one screen
      </motion.p>

      <motion.h2
        className="personas__title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Same engine, different faces
      </motion.h2>

      <motion.p
        className="personas__sub"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        Each of these is a different niche the suite can run end to end. Tap one.
      </motion.p>

      <div className="persona-grid">
        {PERSONAS.map((persona) => (
          <motion.button
            type="button"
            className="persona"
            key={persona.id}
            layoutId={`persona-${persona.id}`}
            onClick={() => setSelected(persona.id)}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            aria-label={`Expand ${persona.label} persona`}
          >
            <Avatar persona={persona} />
            <motion.span className="persona__label" layoutId={`label-${persona.id}`}>
              {persona.label}
            </motion.span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="persona-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="persona-card"
              layoutId={`persona-${active.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Avatar persona={active} />
              <div className="persona-card__body">
                <motion.span
                  className="persona__label persona__label--card"
                  layoutId={`label-${active.id}`}
                >
                  {active.label}
                </motion.span>
                <motion.p
                  className="persona-card__line"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {active.line}
                </motion.p>
                <motion.button
                  type="button"
                  className="persona-card__close"
                  onClick={() => setSelected(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
