import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return <div className="app"><Navbar /><main><Hero /><About /><Skills /><Experience /><Projects /></main><Footer /></div>
}

export default App
