import './App.css'
import Hero from './Componants/LandingPage'
import Navbar from './Componants/Navbar'
import Projects from './Componants/Projects'
import Skills from './Componants/Skills'
import Certifications from './Componants/Certifications'
import About from './Componants/About'
import { ContactUs } from './Componants/Contact'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <About />
      <ContactUs />
    </>
  )
}
export default App
