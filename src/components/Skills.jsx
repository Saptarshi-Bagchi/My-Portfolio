import { skillGroups } from '../data.js'

function Skills() {
  return (
    // Skills
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20"><p className="mb-3 font-mono text-sm text-cyan-300">02</p><h2 className="text-3xl font-bold text-white">Skills</h2><div className="mt-10 grid gap-6 sm:grid-cols-2">{skillGroups.map((group) => <div className="rounded-xl border border-slate-800 bg-slate-900 p-6" key={group.name}><h3 className="font-semibold text-white">{group.name}</h3><div className="mt-4 flex flex-wrap gap-2">{group.skills.map((skill) => <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300" key={skill}>{skill}</span>)}</div></div>)}</div></section>
  )
}

export default Skills
