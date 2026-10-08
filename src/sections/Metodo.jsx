import { motion } from 'framer-motion'
import { useT } from '../useT'

export default function Metodo() {
  const t = useT()
  return (
    <section id="metodo" className="relative overflow-hidden bg-tinta-2 py-20 text-white sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]"
           style={{ backgroundImage:
             'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
             backgroundSize: '64px 64px' }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <p className="rotulo text-laton-cl">{t.ui.metodoRotulo}</p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-[30px] leading-[1.15] tracking-[-0.015em] sm:text-[42px]">
            {t.ui.metodoTitulo}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-white/60">
            {t.ui.metodoTexto}
          </p>
        </header>

        <ol className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.metodo.map((m, i) => (
            <motion.li key={m.n} className="bg-tinta-2 p-7"
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}>
              <span className="font-[family-name:var(--font-display)] text-[30px] leading-none text-white/15">
                {m.n}
              </span>
              <h3 className="mt-5 text-[16px] font-semibold leading-snug text-white">{m.titulo}</h3>
              <p className="mt-3 text-[13.5px] leading-[1.7] text-white/55">{m.texto}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
