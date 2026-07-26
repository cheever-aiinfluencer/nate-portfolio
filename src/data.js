// ── Contact ──────────────────────────────────────────────
// TODO: confirm the real address before deploy. One place to change it.
export const CONTACT_EMAIL = 'nathanc@aiinfluencersuite.tech'

// ── Personas ─────────────────────────────────────────────
// Drop real images into /public/avatars/ with these filenames and they
// replace the gradient automatically. Missing image = gradient fallback.
export const PERSONAS = [
  {
    id: 'skincare',
    label: 'Skincare',
    line: 'Soft-glam creator built for beauty and routine content — the face brands want tagging their products.',
    src: '/avatars/skincare.jpg',
    gradient: 'linear-gradient(150deg, #2a1d2e 0%, #4a2f3a 100%)',
  },
  {
    id: 'artist',
    label: 'Artist',
    line: 'A visual artist persona for process reels, drops, and the kind of moody grid that builds a following.',
    src: '/avatars/artist.jpg',
    gradient: 'linear-gradient(150deg, #1a2438 0%, #2f3f66 100%)',
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    line: 'Polished agent persona for listing walkthroughs, market takes, and local authority content.',
    src: '/avatars/real-estate.jpg',
    gradient: 'linear-gradient(150deg, #22271c 0%, #3d4a2e 100%)',
  },
  {
    id: 'motivational',
    label: 'Motivational',
    line: 'The high-energy talking-head that turns a script into a repeatable daily post machine.',
    src: '/avatars/motivational.jpg',
    gradient: 'linear-gradient(150deg, #2e2413 0%, #5a4321 100%)',
  },
  {
    id: 'ugc',
    label: 'Casual / UGC',
    line: 'The unpolished, in-the-car, talk-to-camera look that actually converts — faceless or with a face.',
    src: '/avatars/ugc.jpg',
    gradient: 'linear-gradient(150deg, #1c2630 0%, #33454f 100%)',
  },
]

// ── Video proof ──────────────────────────────────────────
// Separate demo clips — not tied to the persona grid above, just
// evidence the pipeline generates motion, not only stills.
export const VIDEO_CLIPS = [
  {
    id: 'clip-1',
    src: '/video/clip-1.mp4',
    poster: '/video/clip-1-poster.jpg',
  },
  {
    id: 'clip-2',
    src: '/video/clip-2.mp4',
    poster: '/video/clip-2-poster.jpg',
  },
]

export const SERVICES = [
  {
    id: 'content',
    title: 'Content',
    body: 'Short-form video, carousels, and captions in a voice that sounds like a person, not a prompt. Built to post on a schedule, not once.',
  },
  {
    id: 'websites',
    title: 'Websites',
    body: 'Fast, clean React sites that load quick and say the right thing. Like this one — no template, no bloat, live in days.',
  },
  {
    id: 'automation',
    title: 'Automation',
    body: 'The plumbing behind the scenes: content pipelines, scheduling, and the AI wiring that keeps running while you sleep.',
  },
]
