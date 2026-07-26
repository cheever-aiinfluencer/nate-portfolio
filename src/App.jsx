import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Proof from './components/Proof.jsx'
import VideoProof from './components/VideoProof.jsx'
import PersonaGrid from './components/PersonaGrid.jsx'
import Services from './components/Services.jsx'
import HonestNote from './components/HonestNote.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <VideoProof />
        <PersonaGrid />
        <Services />
        <HonestNote />
        <Contact />
      </main>
      <footer className="footer">
        <span>Nate Cheever</span>
        <span className="footer__year">© {new Date().getFullYear()}</span>
      </footer>
    </>
  )
}
