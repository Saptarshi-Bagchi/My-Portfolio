import { navigation, site } from '../data.js'

function Navbar() {
  return (
    // Navigation
    <header className="border-b border-slate-800 bg-slate-950/95"><nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Main navigation"><a href="#top" className="text-lg font-bold tracking-tight text-white">{site.initials}</a><div className="hidden gap-6 text-sm text-slate-300 sm:flex">{navigation.map((item) => <a className="transition-colors hover:text-cyan-300" href={item.href} key={item.href}>{item.label}</a>)}</div></nav></header>
  )
}

export default Navbar
