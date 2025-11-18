import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-blue-100/80 hover:text-white transition-colors px-3 py-2 rounded-lg">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Tentang' },
    { href: '#projects', label: 'Proyek' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-tight text-lg">
            <span className="text-blue-400">/</span> Portfolio
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
            ))}
            <div className="h-6 w-px bg-white/10 mx-2" />
            <a href="mailto:you@example.com" className="text-blue-100/80 hover:text-white p-2" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white p-2" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white p-2" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </nav>

          <button className="md:hidden text-blue-100/80 hover:text-white p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-900/90">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</NavLink>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="mailto:you@example.com" className="text-blue-100/80 hover:text-white p-2" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white p-2" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white p-2" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
