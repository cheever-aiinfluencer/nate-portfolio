import { motion } from 'framer-motion'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <section className="services section" id="services">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        What I do
      </motion.p>

      <div className="services__grid">
        {SERVICES.map((service, i) => (
          <motion.div
            className="service"
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
          >
            <h3 className="service__title">{service.title}</h3>
            <p className="service__body">{service.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
