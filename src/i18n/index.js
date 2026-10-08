import es from './es'
import en from './en'
import pt from './pt'
import { AREAS_BASE, CONSULADOS_BASE, EMPRESAS_BASE } from './base'

export { EMPRESA, IDIOMAS } from './base'

const TEXTOS = { es, en, pt }

/** Une la estructura compartida con el texto del idioma elegido. */
export function contenido(codigo) {
  const t = TEXTOS[codigo] ?? es
  return {
    html: t.html,
    descriptor: t.descriptor,
    ui: t.ui,
    areas: AREAS_BASE.map((a) => {
      const x = t.areas[a.id]
      return {
        n: a.n,
        id: a.id,
        titulo: x.titulo,
        problema: x.problema,
        solucion: x.solucion,
        entrega: x.entrega,
        ejemplos: a.urls.map((url, i) => ({ url, etiqueta: x.ejemplos[i] ?? url })),
      }
    }),
    consulados: CONSULADOS_BASE.map((c) => ({ ...c, ...t.consulados[c.id] })),
    empresas: EMPRESAS_BASE.map((e) => ({ ...e, ...t.empresas[e.id] })),
    metodo: t.metodo,
  }
}
