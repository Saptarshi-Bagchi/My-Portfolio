import { site } from '../data.js'

function Contact() {
  return (
    // Contact
    <section id="contact" className="border-t border-slate-800 bg-cyan-300 px-6 py-20 text-slate-950"><div className="mx-auto max-w-6xl"><p className="mb-3 font-mono text-sm">05</p><h2 className="text-3xl font-bold">Let&apos;s connect</h2><p className="mt-4 max-w-xl text-lg">Have an opportunity, idea, or question? Reach out through email or find me online.</p><div className="mt-8 flex flex-wrap gap-5 font-semibold"><a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a><a className="underline underline-offset-4" href={site.github}>GitHub ↗</a><a className="underline underline-offset-4" href={site.linkedin}>LinkedIn ↗</a></div></div></section>
  )
}

export default Contact
