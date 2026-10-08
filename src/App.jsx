import { useEffect } from 'react'
import { useStore } from './store'
import { useT } from './useT'
import Navegacion from './components/Navegacion'
import SelectorIdioma from './components/SelectorIdioma'
import Portada from './sections/Portada'
import Areas from './sections/Areas'
import Clientes from './sections/Clientes'
import Metodo from './sections/Metodo'
import Pie from './sections/Pie'

export default function App() {
  const idioma = useStore((s) => s.idioma)
  const t = useT()

  // El atributo lang importa para buscadores y lectores de pantalla
  useEffect(() => {
    document.documentElement.lang = t.html
    document.title = `Lottus Miami — ${t.descriptor}`
  }, [t])

  if (!idioma) return <SelectorIdioma />

  return (
    <>
      <Navegacion />
      <main>
        <Portada />
        <Areas />
        <Clientes />
        <Metodo />
      </main>
      <Pie />
    </>
  )
}
