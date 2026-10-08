import { create } from 'zustand'

const GUARDADO = 'lottus-idioma'

/** Recupera la elección previa; si no hay, el sitio pregunta. */
function inicial() {
  try { return localStorage.getItem(GUARDADO) } catch { return null }
}

export const useStore = create((set) => ({
  idioma: inicial(),
  elegirIdioma: (codigo) => {
    try { localStorage.setItem(GUARDADO, codigo) } catch { /* modo privado */ }
    set({ idioma: codigo, menuAbierto: false })
  },

  menuAbierto: false,
  alternarMenu: () => set((s) => ({ menuAbierto: !s.menuAbierto })),
  cerrarMenu: () => set({ menuAbierto: false }),

  servicioAbierto: null,
  alternarServicio: (id) =>
    set((s) => ({ servicioAbierto: s.servicioAbierto === id ? null : id })),

  seccionActiva: 'inicio',
  fijarSeccion: (id) => set({ seccionActiva: id }),
}))
