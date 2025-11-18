export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(59,130,246,0.10),transparent_40%),radial-gradient(800px_circle_at_90%_10%,rgba(147,197,253,0.10),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Tentang Saya</h2>
            <p className="mt-4 text-blue-100/90 leading-relaxed">
              Saya adalah seorang profesional yang berfokus pada pembuatan antarmuka modern, bersih, dan performa tinggi. 
              Saya mencintai detail, tipografi, dan pengalaman pengguna yang halus.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-3xl font-semibold text-white">5+ </p>
                <p className="text-blue-100/80">Tahun pengalaman</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-3xl font-semibold text-white">30+ </p>
                <p className="text-blue-100/80">Proyek selesai</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 p-2">
              <div className="w-full h-full rounded-xl bg-slate-900/70 flex items-center justify-center text-blue-200">
                Foto/Ilustrasi Anda di sini
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
