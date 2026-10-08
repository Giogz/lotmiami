import { useT } from '../useT'

/** Marca denominativa. Sin imagen: el monograma se dibuja con tipografía. */
export default function Marca({ invertido = false, className = '' }) {
  const t = useT()
  const tono = invertido ? 'text-white' : 'text-tinta'
  const borde = invertido ? 'border-white/35' : 'border-laton'
  const acento = invertido ? 'text-white/55' : 'text-humo'
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className={`grid h-9 w-9 place-items-center border ${borde} ${tono}`}>
        <span className="font-[family-name:var(--font-display)] text-[17px] leading-none">L</span>
      </span>
      <span className="leading-tight">
        <span className={`block font-[family-name:var(--font-display)] text-[17px] tracking-tight ${tono}`}>
          Lottus Miami
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${acento}`}>
          {t.ui.marcaBajada}
        </span>
      </span>
    </span>
  )
}
