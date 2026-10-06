import { about } from '../data.js'

function About() {
  return (
    // About
    <section id="about" className="border-t border-slate-800 bg-slate-900/50 px-6 py-20"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr]"><div><p className="mb-3 font-mono text-sm text-cyan-300">01</p><h2 className="text-3xl font-bold text-white">{about.heading}</h2><p className="mt-6 leading-8 text-slate-400">{about.text}</p></div><div><h3 className="text-xl font-semibold text-white">{about.accomplishmentsHeading}</h3><ul className="mt-5 space-y-4 text-slate-400">{about.accomplishments.map((item) => <li className="border-l-2 border-cyan-300 pl-4" key={item}>{item}</li>)}</ul></div></div></section>
  )
}

export default About
