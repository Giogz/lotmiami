import { useEffect } from 'react'
import { useStore } from '../store'
import { useT } from '../useT'
import { IDIOMAS } from '../i18n'
import Marca from './Marca'

export default function Navegacion() {
  const t = useT()
  const abierto = useStore((s) => s.menuAbierto)
  const alternar = useStore((s) => s.alternarMenu)
  const cerrar = useStore((s) => s.cerrarMenu)
  const activa = useStore((s) => s.seccionActiva)
  const fijar = useStore((s) => s.fijarSeccion)
  const idioma = useStore((s) => s.idioma)
  const elegir = useStore((s) => s.elegirIdioma)

  const enlaces = [
    ['areas', t.ui.nav.areas],
    ['clientes', t.ui.nav.clientes],
    ['metodo', t.ui.nav.metodo],
  ]

  // Resalta en la navegación la sección que el lector tiene delante
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => {
        const visible = entradas.filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) fijar(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    )
    document.querySelectorAll('section[id]').forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [fijar, t])

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [abierto])

  const Idiomas = ({ clase = '' }) => (
    <div className={`flex items-center gap-1 ${clase}`} role="group" aria-label={t.ui.idioma}>
      {IDIOMAS.map((l) => (
        <button key={l.codigo} onClick={() => elegir(l.codigo)}
          aria-pressed={idioma === l.codigo} title={l.nativo}
          className={`px-2 py-1 text-[11.5px] font-semibold uppercase tracking-wider transition-colors
            ${idioma === l.codigo ? 'text-tinta underline decoration-laton decoration-2 underline-offset-4'
                                  : 'text-humo hover:text-tinta'}`}>
          {l.codigo}
        </button>
      ))}
    </div>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-linea bg-papel/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" onClick={cerrar}><Marca /></a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {enlaces.map(([id, texto]) => (
            <a key={id} href={`#${id}`}
               className={`text-[14px] font-medium transition-colors
                           ${activa === id ? 'text-tinta' : 'text-pizarra hover:text-tinta'}`}>
              {texto}
            </a>
          ))}
          <Idiomas clase="ml-2 border-l border-linea pl-5" />
        </nav>

        <button onClick={alternar} aria-expanded={abierto} aria-label="Menú"
                className="grid h-10 w-10 place-items-center border border-linea md:hidden">
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-[1.5px] w-full bg-tinta transition-all duration-200
                              ${abierto ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-tinta transition-opacity duration-200
                              ${abierto ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 h-[1.5px] w-full bg-tinta transition-all duration-200
                              ${abierto ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </div>

      {abierto && (
        <nav className="border-t border-linea bg-papel md:hidden" aria-label="Principal móvil">
          {enlaces.map(([id, texto]) => (
            <a key={id} href={`#${id}`} onClick={cerrar}
               className="block border-b border-linea px-6 py-4 text-[15px] font-medium text-tinta">
              {texto}
            </a>
          ))}
          <div className="flex items-center justify-between px-6 py-4">
            <span className="rotulo text-humo">{t.ui.idioma}</span>
            <Idiomas />
          </div>
        </nav>
      )}
    </header>
  )
}
