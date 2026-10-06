import { site } from '../data.js'

function Footer() {
  return (
    // Footer
    <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {site.name}</p><p>Built with React + Tailwind CSS</p></footer>
  )
}

export default Footer
