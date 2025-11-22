import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(1000px_500px_at_100%_0%,rgba(6,182,212,0.25),transparent)]" />
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/NkcnsJpx2b5y-eA7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 w-full">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            Play without limits.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-slate-200/90 max-w-xl"
          >
            Dive into immersive worlds with ultra‑low latency streaming, cross‑platform multiplayer, and a growing library of blockbuster titles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 hover:brightness-110 transition">
              Start Playing
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-slate-200 hover:bg-white/10 transition">
              Watch Trailer
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 5}`} alt="player avatar" className="h-8 w-8 rounded-full ring-2 ring-emerald-400/20" />
              ))}
            </div>
            <p className="text-slate-300/80 text-sm">
              Join 250k+ players online now
            </p>
          </motion.div>
        </div>

        <div className="relative h-[50vh] lg:h-[70vh] rounded-3xl overflow-hidden border border-white/10 bg-black/20">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          {/* 3D scene is already full-bleed via absolute container above on small screens; this panel frames it on large */}
        </div>
      </div>
    </section>
  )
}

export default Hero
