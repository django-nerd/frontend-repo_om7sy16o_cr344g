import { motion } from 'framer-motion'
import { Zap, SignalHigh, Cloud, Users, ShieldCheck, Gamepad2 } from 'lucide-react'

const features = [
  { icon: <Zap className="h-5 w-5" />, title: 'Instant Play', desc: 'Jump into any game in seconds with zero downloads.' },
  { icon: <SignalHigh className="h-5 w-5" />, title: 'Low Latency', desc: 'Edge servers tuned for ultra‑responsive inputs.' },
  { icon: <Cloud className="h-5 w-5" />, title: 'Cloud Saves', desc: 'Your progress syncs across every device you own.' },
  { icon: <Users className="h-5 w-5" />, title: 'Cross‑Play', desc: 'Squad up with friends on console, PC, or mobile.' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Protected', desc: 'Enterprise‑grade security and anti‑cheat protection.' },
  { icon: <Gamepad2 className="h-5 w-5" />, title: 'Controller Ready', desc: 'Plug‑and‑play with Xbox, PS, and Switch Pro.' },
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Built for gamers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-slate-300/90 text-center max-w-2xl mx-auto"
        >
          A next‑gen platform that streams your favorite titles in cinematic quality.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 hover:bg-white/10 transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
