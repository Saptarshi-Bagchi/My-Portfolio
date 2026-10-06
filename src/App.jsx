import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950"><Navbar /><main><Hero /><About /><Skills /><Experience /><Projects /><Contact /></main><Footer /></div>
}

export default App
