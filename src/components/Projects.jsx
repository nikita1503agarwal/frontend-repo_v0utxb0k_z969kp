import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Dashboard Analytics',
    desc: 'Visualisasi data interaktif dengan arsitektur modular dan tema biru elegan.',
    tags: ['React', 'Tailwind', 'API'],
    link: '#'
  },
  {
    title: 'E-commerce UI',
    desc: 'Pengalaman belanja modern dengan animasi halus dan performa optimal.',
    tags: ['Next.js', 'Stripe', 'Design System'],
    link: '#'
  },
  {
    title: 'Landing Page SaaS',
    desc: 'Hero 3D interaktif, tipografi tajam, dan konversi tinggi.',
    tags: ['Spline', 'SEO', 'A/B Test'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(800px_circle_at_100%_0%,rgba(147,197,253,0.08),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Proyek Pilihan</h2>
          <a href="#contact" className="text-blue-300 hover:text-white transition-colors">Minta CV</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/40 transition-colors">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <ExternalLink className="w-4 h-4 text-blue-200/80 group-hover:text-white" />
                </div>
                <p className="text-blue-100/90 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-blue-500/10 border border-blue-400/20 text-blue-200 rounded-full px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
