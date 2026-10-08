import { EMPRESA } from '../i18n'
import { useT } from '../useT'
import Marca from '../components/Marca'

export default function Pie() {
  const t = useT()
  return (
    <footer className="border-t border-white/10 bg-tinta-2 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <Marca invertido />
        <p className="text-[12.5px] leading-relaxed text-white/45">
          {EMPRESA.razon} · {EMPRESA.ciudad}
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          © {new Date().getFullYear()}. {t.ui.derechos}
        </p>
      </div>
    </footer>
  )
}
