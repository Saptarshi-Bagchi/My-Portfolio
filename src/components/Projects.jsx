import { projects } from '../data.js'

function Projects() {
  return (
    // Projects
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20"><p className="mb-3 font-mono text-sm text-cyan-300">04</p><h2 className="text-3xl font-bold text-white">Projects</h2><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <article className="flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6" key={project.title}><h3 className="text-xl font-semibold text-white">{project.title}</h3><p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tech.map((item) => <span className="text-sm text-cyan-300" key={item}>{item}</span>)}</div><div className="mt-6 flex gap-5 text-sm font-semibold"><a className="text-white hover:text-cyan-300" href={project.githubLink}>GitHub ↗</a><a className="text-white hover:text-cyan-300" href={project.liveLink}>Live demo ↗</a></div></article>)}</div></section>
  )
}

export default Projects
