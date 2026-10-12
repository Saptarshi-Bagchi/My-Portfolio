import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { observeSections } from './analytics.js'

createRoot(document.getElementById('root')).render(<App />)
requestAnimationFrame(() => observeSections(['about', 'education', 'skills', 'experience', 'projects', 'accomplishments', 'certificates', 'contact']))
