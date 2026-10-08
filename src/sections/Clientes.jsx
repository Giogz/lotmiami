import { motion } from 'framer-motion'
import { useT } from '../useT'



export default function Clientes() {
  const t = useT()
  const area = (id) => t.areas.find((a) => a.id === id)
  return (
    <section id="clientes" className="bg-nieve py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <p className="rotulo text-laton">{t.ui.clientesRotulo}</p>
          <h2 className="filete mt-5 font-[family-name:var(--font-display)] text-[30px] leading-[1.15] tracking-[-0.015em] sm:text-[42px]">
            {t.ui.clientesTitulo}
          </h2>
        </header>

        {/* Red consular: tres oficinas bajo la misma denominación */}
        <div className="mt-14">
          <p className="rotulo border-b border-linea-2 pb-3 text-humo">
            {t.ui.redConsular}
          </p>
          <div className="grid border-b border-l border-linea-2 lg:grid-cols-3">
            {t.consulados.map((c, i) => (
              <motion.article key={c.id}
                className="border-r border-t border-linea-2 bg-papel p-8"
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}>
                <p className="font-[family-name:var(--font-display)] text-[32px] leading-none tracking-[-0.02em] text-laton">
                  {c.ciudad}
                </p>
                <h3 className="mt-4 text-[15.5px] font-semibold leading-snug text-tinta">
                  {c.nombre}
                </h3>
                <p className="mt-1 text-[12.5px] text-humo">{c.sede}</p>

                <p className="mt-5 inline-block border border-laton/35 bg-laton/[0.06] px-2.5 py-1 text-[11.5px] font-semibold text-laton">
                  {c.cargo}
                </p>

                <p className="mt-5 border-t border-linea pt-5 text-[13.5px] leading-relaxed text-pizarra">
                  {c.alcance}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {c.areas.map((id) => (
                    <li key={id} className="flex gap-2.5 text-[12.5px] leading-relaxed text-pizarra">
                      <span className="font-[family-name:var(--font-display)] text-laton">
                        {area(id)?.n}
                      </span>
                      {area(id)?.titulo}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Sector privado: redes y franquicias */}
        <div className="mt-16">
          <p className="rotulo border-b border-linea-2 pb-3 text-humo">
            {t.ui.redesFranquicias}
          </p>
          <div className="grid border-b border-l border-linea-2 lg:grid-cols-3">
            {t.empresas.map((e, i) => (
              <motion.article key={e.id}
                className="border-r border-t border-linea-2 bg-papel p-8"
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}>
                <p className="rotulo text-laton">{e.sector}</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-[21px] leading-snug tracking-[-0.01em] text-tinta">
                  {e.nombre}
                </h3>
                <p className="mt-1 text-[12.5px] text-humo">{e.lugar}</p>
                <p className="mt-5 border-t border-linea pt-5 text-[13.5px] leading-relaxed text-pizarra">
                  {e.nota}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
