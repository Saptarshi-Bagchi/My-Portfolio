import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Accomplishments from './components/Accomplishments.jsx'
import Certificates from './components/Certificates.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return <div className="app"><Navbar /><main><Hero /><About /><Education /><Skills /><Experience /><Projects /><Accomplishments /><Certificates /></main><Footer /></div>
}

export default App
