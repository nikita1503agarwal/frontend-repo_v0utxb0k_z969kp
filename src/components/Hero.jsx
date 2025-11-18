import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-200 rounded-full px-3 py-1 text-xs mb-4">
            <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Available for freelance projects
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
            Portofolio Modern dan Profesional
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            Tampilkan karya terbaik Anda dengan nuansa biru elegan, interaktif, dan berfokus pada detail.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 font-medium shadow-lg shadow-blue-500/30 transition-colors">
              Lihat Proyek
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-medium border border-white/10">
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
