import { motion } from 'framer-motion'
import { IDIOMAS } from '../i18n'
import { useStore } from '../store'
import Marca from './Marca'

/** Pantalla inicial: el visitante elige el idioma antes de entrar. */
export default function SelectorIdioma() {
  const elegir = useStore((s) => s.elegirIdioma)

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-tinta px-6 py-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05]"
           style={{ backgroundImage:
             'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
             backgroundSize: '64px 64px' }} />

      <motion.div
        initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-lg">
        <Marca invertido />

        <h1 className="mt-10 font-[family-name:var(--font-display)] text-[27px] leading-[1.18] tracking-[-0.015em] text-white sm:text-[33px]">
          ¿En qué idioma desea ver el sitio?
        </h1>
        <p className="mt-2 text-[14.5px] leading-relaxed text-white/45">
          Which language would you like? · Em que idioma deseja ver o site?
        </p>

        <div className="mt-9 divide-y divide-white/10 border-y border-white/10">
          {IDIOMAS.map((l, i) => (
            <motion.button key={l.codigo} onClick={() => elegir(l.codigo)}
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.18 + i * 0.07 }}
              className="group flex w-full items-center gap-5 py-5 text-left transition-colors hover:text-laton-cl">
              <span className="w-8 shrink-0 font-[family-name:var(--font-display)] text-[13px] uppercase tracking-widest text-white/30 transition-colors group-hover:text-laton-cl">
                {l.codigo}
              </span>
              <span className="flex-1 font-[family-name:var(--font-display)] text-[21px] text-white transition-colors group-hover:text-laton-cl">
                {l.nativo}
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                   strokeLinecap="round" strokeLinejoin="round" aria-hidden
                   className="h-4 w-4 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-laton-cl">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.button>
          ))}
        </div>

        <p className="mt-7 text-[12.5px] leading-relaxed text-white/30">
          Puede cambiarlo en cualquier momento desde el menú superior.
        </p>
      </motion.div>
    </motion.div>
  )
}
