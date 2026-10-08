import { motion } from 'framer-motion'
import { useT } from '../useT'

const sube = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

export default function Portada() {
  const t = useT()
  return (
    <section id="inicio" className="relative overflow-hidden bg-tinta text-white">
      {/* Trama de pauta: guiño al papel reglado de los formularios oficiales */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.045]"
           style={{ backgroundImage:
             'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
             backgroundSize: '64px 64px' }} />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-white/10" />
      <div aria-hidden
           className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full blur-[2px]"
           style={{ background: 'radial-gradient(circle,rgba(168,133,58,.18) 0%,transparent 65%)' }} />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <motion.h1 {...sube(0.04)}
            className="font-[family-name:var(--font-display)] text-[36px] font-normal leading-[1.08] tracking-[-0.02em] sm:text-[56px]">
            {t.ui.heroTitulo1}
            <span className="block text-laton-cl">{t.ui.heroTitulo2}</span>
          </motion.h1>

          <motion.p {...sube(0.14)}
            className="mt-7 max-w-xl text-[16.5px] leading-[1.7] text-white/65">
            {t.ui.heroTexto}
          </motion.p>

          <motion.div {...sube(0.2)} className="mt-10">
            <a href="#areas"
               className="group inline-flex items-center justify-center gap-2.5 bg-white px-8 py-4 text-[14.5px] font-semibold text-tinta transition-colors hover:bg-laton-cl">
              {t.ui.heroCta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round" aria-hidden
                   className="h-4 w-4 transition-transform group-hover:translate-y-0.5">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Ficha de capacidades: lectura vertical, como un índice de expediente */}
        <motion.aside {...sube(0.26)} className="lg:pt-3">
          <p className="rotulo border-b border-white/12 pb-3 text-white/35">
            {t.ui.heroIndice}
          </p>
          <ul className="divide-y divide-white/8">
            {t.areas.map((a) => (
              <li key={a.id}>
                <a href={`#${a.id}`}
                   className="group flex items-baseline gap-4 py-3.5 transition-colors hover:text-laton-cl">
                  <span className="font-[family-name:var(--font-display)] text-[12px] text-white/30 transition-colors group-hover:text-laton-cl">
                    {a.n}
                  </span>
                  <span className="text-[14.5px] leading-snug text-white/75 transition-colors group-hover:text-laton-cl">
                    {a.titulo}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  )
}
