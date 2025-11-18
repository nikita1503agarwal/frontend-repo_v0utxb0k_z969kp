export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Kontak</h2>
          <p className="mt-3 text-blue-100/90">Siap berdiskusi? Kirim pesan dan saya akan segera membalas.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
          <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Nama" />
          <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Email" />
          <textarea rows="5" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Pesan" />
          <button className="rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 font-medium shadow-lg shadow-blue-500/30 transition-colors">Kirim</button>
        </form>
      </div>
    </section>
  )
}
