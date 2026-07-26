import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { VIDEO_CLIPS } from '../data.js'

function Clip({ clip }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  function toggleSound() {
    const el = videoRef.current
    if (!el) return
    el.muted = !el.muted
    setMuted(el.muted)
  }

  return (
    <div className="clip">
      <video
        ref={videoRef}
        className="clip__video"
        src={clip.src}
        poster={clip.poster}
        autoPlay
        loop
        muted
        playsInline
        onClick={toggleSound}
      />
      <button
        type="button"
        className="clip__sound"
        onClick={toggleSound}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </div>
  )
}

export default function VideoProof() {
  return (
    <section className="video-proof section">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Beyond stills
      </motion.p>

      <motion.h2
        className="video-proof__title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        It moves, too.
      </motion.h2>

      <motion.p
        className="video-proof__sub"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        Different clips than the grid below — just proof the pipeline generates
        motion as easily as photos. Tap either one for sound.
      </motion.p>

      <div className="clip-row">
        {VIDEO_CLIPS.map((clip) => (
          <Clip clip={clip} key={clip.id} />
        ))}
      </div>
    </section>
  )
}
