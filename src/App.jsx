import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-100/70 text-sm">© {new Date().getFullYear()} Portfolio Anda. Semua hak dilindungi.</p>
          <a href="#home" className="text-blue-300 hover:text-white text-sm">Kembali ke atas</a>
        </div>
      </footer>
    </div>
  )
}

export default App
