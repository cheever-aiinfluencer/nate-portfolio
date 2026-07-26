import { motion } from 'framer-motion'
import { CONTACT_EMAIL } from '../data.js'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <motion.div
        className="contact__inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="contact__title">Let's build something.</h2>
        <p className="contact__sub">
          Tell me what you're trying to make, or trying to get seen. I read every
          message.
        </p>
        <a className="btn btn--primary btn--lg" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </motion.div>
    </section>
  )
}
