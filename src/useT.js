import { useMemo } from 'react'
import { useStore } from './store'
import { contenido } from './i18n'

/** Contenido en el idioma elegido. Por defecto, español. */
export function useT() {
  const idioma = useStore((s) => s.idioma)
  return useMemo(() => contenido(idioma ?? 'es'), [idioma])
}
