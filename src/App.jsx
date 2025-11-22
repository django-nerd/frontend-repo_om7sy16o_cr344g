import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <section id="community" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to squad up?</h2>
            <p className="mt-4 text-slate-300/90 max-w-2xl mx-auto">Join our Discord, get exclusive drops, and find teammates for your next victory.</p>
            <div className="mt-8 flex justify-center">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 hover:brightness-110 transition">
                Join the community
              </a>
            </div>
          </div>
        </section>
        <footer className="pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-8 text-center text-slate-400/70 text-sm">
            © {new Date().getFullYear()} NebulaPlay. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
