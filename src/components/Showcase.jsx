import { motion } from 'framer-motion'

function Showcase() {
  const games = [
    {
      title: 'Starfront: Odyssey',
      img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Neon Drift',
      img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Echoes of Ruin',
      img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="showcase" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Epic worlds to explore
        </motion.h2>
        <p className="mt-4 text-slate-300/90 text-center max-w-2xl mx-auto">
          Stream top titles in 4K with HDR and spatial audio. No installs. No updates. Just play.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {games.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={g.img} alt={g.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">{g.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
