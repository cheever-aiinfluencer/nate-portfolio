import { motion } from 'framer-motion'

export default function HonestNote() {
  return (
    <section className="honest section">
      <motion.div
        className="honest__inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">The honest part</p>
        <p className="honest__body">
          I'm not an agency and I won't pretend to be. It's me. That means you talk
          to the person doing the work, I move fast, and I'll tell you when something
          won't work instead of billing you to find out. I ship, then I iterate. If
          that's the kind of person you want building your thing, let's talk.
        </p>
      </motion.div>
    </section>
  )
}
