/**
 * Estructura común a los tres idiomas: identificadores, numeración y
 * enlaces. El texto vive en es.js, en.js y pt.js, indexado por estos ids.
 */
export const EMPRESA = {
  nombre: 'Lottus Miami',
  razon: 'LOTTUS MIAMI LLC',
  // PENDIENTE: confirmar correo y teléfono comerciales
  correo: 'contacto@lottusmiami.com',
  telefono: '(786) 000-0000',
  ciudad: 'Miami, Florida',
}

export const AREAS_BASE = [
  { n: '01', id: 'guia',           urls: ['https://giogz.github.io/conper-miami/'] },
  { n: '02', id: 'citas',          urls: ['https://peru.as.me/schedule/72d07221'] },
  { n: '03', id: 'turnos',         urls: ['https://turnos-consulado.yferreira.workers.dev/kiosco.html'] },
  { n: '04', id: 'atencion',       urls: [] },
  { n: '05', id: 'expediente',     urls: ['https://giogz.github.io/conper-miami/#/estado'] },
  { n: '06', id: 'infraestructura',urls: [] },
  { n: '07', id: 'nube',           urls: [] },
  { n: '08', id: 'marketing',      urls: [] },
  { n: '09', id: 'eventos',        urls: ['https://giogz.github.io/bap2026-miami/',
                                          'https://giogz.github.io/segundaVueltaMiami2026/'] },
  { n: '10', id: 'innovacion',     urls: ['https://giogz.github.io/entrenacongio/',
                                          'https://turnos-consulado.yferreira.workers.dev/dashboard.html',
                                          'https://turnos-consulado.yferreira.workers.dev/pantalla.html'] },
  { n: '11', id: 'soluciones',     urls: [] },
  { n: '12', id: 'estrategia',     urls: [] },
]

const AREAS_OFICINA = ['citas', 'infraestructura', 'nube', 'marketing', 'eventos', 'soluciones', 'estrategia']

export const CONSULADOS_BASE = [
  { id: 'miami',   ciudad: 'Miami',   nombre: 'Consulado General del Perú en Miami',   sede: 'Coral Gables, Florida', areas: AREAS_OFICINA },
  { id: 'orlando', ciudad: 'Orlando', nombre: 'Consulado General del Perú en Orlando', sede: 'Orlando, Florida',      areas: AREAS_OFICINA },
  { id: 'tampa',   ciudad: 'Tampa',   nombre: 'Consulado Honorario del Perú en Tampa', sede: 'Tampa, Florida',        areas: AREAS_OFICINA },
]

export const EMPRESAS_BASE = [
  { id: 'cmc',  nombre: 'CMC Group Taxes',   lugar: 'Newark, Delaware' },
  { id: 'auto', nombre: 'Auto Pro Center',   lugar: 'Delaware' },
  { id: 'aqua', nombre: 'Aqua Plumbing Pros',lugar: 'Wilmington, Delaware' },
]

export const IDIOMAS = [
  { codigo: 'es', nombre: 'Español',  nativo: 'Español',  html: 'es' },
  { codigo: 'en', nombre: 'Inglés',   nativo: 'English',  html: 'en' },
  { codigo: 'pt', nombre: 'Portugués',nativo: 'Português',html: 'pt' },
]
