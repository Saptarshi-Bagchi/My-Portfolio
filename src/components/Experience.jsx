import { experience } from '../data.js'

function Experience() {
  return (
    // Experience
    <section id="experience" className="border-t border-slate-800 bg-slate-900/50 px-6 py-20"><div className="mx-auto max-w-6xl"><p className="mb-3 font-mono text-sm text-cyan-300">03</p><h2 className="text-3xl font-bold text-white">Experience</h2><div className="mt-10 space-y-8">{experience.map((item) => <article className="border-l-2 border-cyan-300 pl-6" key={`${item.company}-${item.role}`}><div className="flex flex-col justify-between gap-2 sm:flex-row"><h3 className="text-xl font-semibold text-white">{item.role} · {item.company}</h3><p className="font-mono text-sm text-cyan-300">{item.dates}</p></div><p className="mt-4 max-w-3xl leading-7 text-slate-400">{item.description}</p></article>)}</div></div></section>
  )
}

export default Experience
