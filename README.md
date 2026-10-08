# Lottus Miami — Sitio institucional

Sitio de una sola página para LOTTUS MIAMI LLC, orientado a consulados,
embajadas y empresas. Disponible en español, inglés y portugués.

## Stack

React 19 + Vite · Tailwind CSS 4 · Zustand · Framer Motion.
Sin backend. Se publica solo en GitHub Pages con cada push a `main`.

## Idiomas

Al entrar por primera vez, el visitante elige idioma en una pantalla previa.
La elección se guarda en el navegador y puede cambiarse desde el menú superior
(ES / EN / PT). El atributo `lang` del documento y el título cambian con ella.

- `src/i18n/base.js` — estructura compartida: ids, numeración y enlaces
- `src/i18n/es.js`, `en.js`, `pt.js` — todo el texto de cada idioma
- `src/i18n/index.js` — une estructura y texto

Para corregir un texto, se edita el archivo del idioma correspondiente.
Para agregar un área nueva hay que tocar los cuatro archivos: la entrada en
`base.js` y su texto en los tres idiomas.

## Secciones

Portada · Áreas de trabajo (12) · Clientes · Método · Pie de página.
La sección de contacto está retirada por ahora.

## Pendiente antes de publicar

En `src/i18n/base.js`, el objeto `EMPRESA` tiene dos valores de ejemplo:

- `correo`: hoy dice `contacto@lottusmiami.com`
- `telefono`: hoy dice `(786) 000-0000`

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview
```

## Publicar en GitHub Pages

1. Subir el repositorio a GitHub (público).
2. Settings → Pages → Source: **GitHub Actions**.
3. Cada push a `main` compila y publica.

### Si la carpeta .github no sube

Los nombres que empiezan con punto quedan ocultos y el explorador los omite
al arrastrar. En ese caso, en GitHub: **Add file → Create new file**, escribir
como nombre exactamente `.github/workflows/deploy.yml` (las barras crean las
carpetas solas) y pegar el contenido del archivo de texto incluido en este
paquete: `deploy-workflow (copiar a .github-workflows-deploy.yml).txt`.

Lo mismo aplica a `.gitignore`, cuyo contenido es:

```
node_modules
dist
.DS_Store
*.local
```

## Revisión realizada

Probado en 11 anchos (320 a 1920 px) por cada uno de los tres idiomas:
33 combinaciones sin desbordes horizontales, sin elementos fuera de pantalla
y sin errores de JavaScript.
