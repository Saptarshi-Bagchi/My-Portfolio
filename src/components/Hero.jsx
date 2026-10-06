import { site } from '../data.js'

function Hero() {
  return (
    // Hero
    <section id="top" className="mx-auto max-w-6xl px-6 py-24 sm:py-32"><div className="max-w-3xl"><div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-300 text-2xl font-bold text-slate-950">{site.initials}</div><p className="mb-4 font-mono text-sm text-cyan-300">Hello, I&apos;m</p><h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{site.name}</h1><p className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl">{site.title}</p><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{site.tagline}</p><div className="mt-9 flex flex-wrap gap-4"><a href="#projects" className="rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">View projects</a><a href="#contact" className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300">Contact me</a></div></div></section>
  )
}

export default Hero
