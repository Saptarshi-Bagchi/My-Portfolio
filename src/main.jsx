import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeAnalytics, observeSections } from './analytics.js'

createRoot(document.getElementById('root')).render(<App />)
initializeAnalytics()
requestAnimationFrame(() => observeSections(['about', 'education', 'skills', 'experience', 'projects', 'accomplishments', 'certificates', 'contact']))
