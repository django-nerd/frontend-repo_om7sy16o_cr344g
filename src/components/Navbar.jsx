import { Menu, Gamepad2, Search } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">NebulaPlay</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="text-slate-200/80 hover:text-white transition">Features</a>
              <a href="#showcase" className="text-slate-200/80 hover:text-white transition">Showcase</a>
              <a href="#community" className="text-slate-200/80 hover:text-white transition">Community</a>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 transition">
                <Search className="h-4 w-4" />
                Search
              </button>
              <button className="inline-flex md:hidden items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10 transition">
                <Menu className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/25 hover:brightness-110 transition">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
