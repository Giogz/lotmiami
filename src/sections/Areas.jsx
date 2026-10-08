import { motion } from 'framer-motion'
import { useT } from '../useT'

export default function Areas() {
  const t = useT()
  return (
    <section id="areas" className="bg-papel py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <p className="rotulo text-laton">{t.ui.areasRotulo}</p>
          <h2 className="filete mt-5 font-[family-name:var(--font-display)] text-[30px] leading-[1.15] tracking-[-0.015em] sm:text-[42px]">
            {t.ui.areasTitulo}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-pizarra">
            {t.ui.areasTexto}
          </p>
        </header>

        <div className="mt-16 border-t border-linea">
          {t.areas.map((a, i) => (
            <motion.article key={a.id} id={a.id}
              className="scroll-mt-24 border-b border-linea py-12 sm:py-14"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: Math.min(i, 3) * 0.04 }}>

              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <span className="font-[family-name:var(--font-display)] text-[13px] text-laton">
                    {a.n}
                  </span>
                  <h3 className="mt-2.5 font-[family-name:var(--font-display)] text-[23px] leading-[1.2] tracking-[-0.01em] text-tinta sm:text-[27px]">
                    {a.titulo}
                  </h3>
                </div>

                <div>
                  {/* El problema primero, en tono apagado: es el estado actual */}
                  <div className="border-l-2 border-linea-2 pl-5">
                    <p className="rotulo text-humo">{t.ui.situacion}</p>
                    <p className="mt-2.5 text-[15px] leading-[1.75] text-pizarra">{a.problema}</p>
                  </div>

                  <div className="mt-7 border-l-2 border-laton pl-5">
                    <p className="rotulo text-laton">{t.ui.comoResolvemos}</p>
                    <p className="mt-2.5 text-[15px] leading-[1.75] text-tinta">{a.solucion}</p>
                  </div>

                  {a.ejemplos?.length > 0 && (
                    <div className="mt-7 space-y-2">
                      {a.ejemplos.map((e) => (
                        <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer"
                           className="group flex items-center gap-3 border border-linea-2 bg-nieve px-4 py-3.5 transition-colors hover:border-laton hover:bg-laton/[0.05]">
                          <span className="rotulo shrink-0 text-laton">{t.ui.ejemploVivo}</span>
                          <span className="min-w-0 flex-1 truncate text-[13.5px] text-pizarra">{e.etiqueta}</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                               strokeLinecap="round" strokeLinejoin="round" aria-hidden
                               className="h-4 w-4 shrink-0 text-humo transition-all group-hover:translate-x-0.5 group-hover:text-laton">
                            <path d="M7 17L17 7M9 7h8v8" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}

                  <ul className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {a.entrega.map((e) => (
                      <li key={e} className="flex gap-3 text-[13.5px] leading-relaxed text-pizarra">
                        <span aria-hidden className="mt-[10px] h-px w-3 shrink-0 bg-linea-2" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
