# Portafolio — Julián Andrés Caracas

Portafolio web personal de **Julián Andrés Caracas**, Desarrollador de Software e Ingeniero de Sistemas. Sitio bilingüe (ES/EN) con información profesional, experiencia, habilidades, certificados y contacto.

## Enlaces

- **GitHub:** [julianandrescaracas0623](https://github.com/julianandrescaracas0623)
- **LinkedIn:** [Julián Andrés Caracas Sánchez](https://www.linkedin.com/in/julianandrescaracas/)
- **Email:** andrescaracas0623@gmail.com
- **WhatsApp:** [+57 304 343 2942](https://wa.me/573043432942)

## Características

- Portada de una sola página con anclas: inicio, sobre mí, experiencia, proyectos, habilidades, formación, certificados y contacto
- Interfaz bilingüe (español / inglés) con preferencia guardada en el navegador
- Mapa de sistemas animado en el hero, con respeto a `prefers-reduced-motion`
- Experiencia en línea de tiempo y filtro de habilidades por área
- Una página de caso de estudio por proyecto en `/projects/<slug>`, con diagrama de arquitectura
- Certificados enlazados a su PDF
- Exportación estática (`output: 'export'`) lista para GitHub Pages, Vercel o Netlify

## Stack tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS, sin librería de componentes
- **Tipografías:** Space Grotesk, Inter e IBM Plex Mono vía `next/font`

Sin dependencias de runtime más allá de React y Next: el rediseño retiró Three.js, Vanta, Framer Motion, Radix UI y shadcn/ui.

## Inicio rápido

### Requisitos

- Node.js 18+
- npm

### Instalación

```bash
git clone <url-de-tu-repositorio>
cd portafolio
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

| Comando         | Descripción                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Servidor de desarrollo               |
| `npm run build` | Build de producción (exporta a `out/`) |
| `npm run start` | Servidor de producción               |
| `npm run lint`  | Ejecutar ESLint                      |

## Personalización

La mayor parte del contenido se configura en un solo archivo:

| Qué editar                               | Archivo / carpeta                       |
| ---------------------------------------- | --------------------------------------- |
| Perfil, experiencia, proyectos, formación | `lib/constants.ts`                      |
| Textos de la interfaz                     | `lib/i18n/translations.ts`              |
| CV en PDF                                 | `public/CVs/`                           |
| PDFs de certificados                      | `public/certificate-files/`             |
| Colores, tipografías y animaciones        | `app/globals.css`, `tailwind.config.ts` |
| Diagrama de arquitectura                  | `components/site/architecture.tsx`      |

Todo el contenido del sitio vive en `lib/constants.ts`. Cada texto visible es un objeto `{ es, en }`,
así que añadir o corregir información no requiere tocar los componentes.

### Contenido pendiente

Algunos campos están marcados con `[AÑADIR: ...]` en `lib/constants.ts`. Son métricas y datos
que solo tú puedes aportar (alcance de la plataforma IAM, usuarios atendidos en cada puesto,
y el caso de estudio completo de Gestión Documental). Busca `AÑADIR` en el repositorio para
encontrarlos todos.

Para añadir un certificado con PDF:

1. Guarda el archivo en `public/certificate-files/nombre.pdf`
2. (Opcional) Añade una captura en `public/certificate-files/nombre.jpg`
3. Agrega la entrada en el array `certificates` de `lib/constants.ts`:

```typescript
{
  title: { es: 'Nombre del curso', en: 'Course name' },
  issuer: 'Institución',
  pdf: '/certificate-files/nombre.pdf',
}
```

## Estructura del proyecto

```
app/
  page.tsx                 # Portada de una página
  projects/[slug]/page.tsx # Caso de estudio por proyecto (export estático)
  layout.tsx, globals.css
components/
  language-provider.tsx    # Contexto ES/EN
  site/                    # Secciones y primitivas del sitio
    primitives.tsx         # Section, Chips, Flow, Callout, iconos
    header.tsx             # Cabecera de portada y de proyecto
    hero.tsx, node-map.tsx # Hero y mapa de sistemas animado
    experience.tsx         # Línea de tiempo
    projects.tsx           # Tarjetas de proyecto
    skills.tsx             # Filtro por área
    education.tsx          # Formación y certificados
    contact.tsx
    project-detail.tsx     # Plantilla del caso de estudio
    architecture.tsx       # Diagrama de AssetControl
lib/
  constants.ts             # Todo el contenido del sitio
  i18n/                    # Traducciones y utilidades ES/EN
public/                    # Imágenes, PDFs y CV
```

## Despliegue en GitHub Pages

**Sitio en vivo:** [https://julianandrescaracas0623.github.io/portafolio/](https://julianandrescaracas0623.github.io/portafolio/)

El despliegue es automático con GitHub Actions en cada push a `main`.

### Configuración inicial (una sola vez)

1. Sube el código a [github.com/julianandrescaracas0623/portafolio](https://github.com/julianandrescaracas0623/portafolio)
2. Ve a **Settings → Pages**
3. En **Build and deployment → Source**, selecciona **GitHub Actions**
4. El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente

El primer despliegue puede tardar entre 2 y 5 minutos. Puedes ver el progreso en la pestaña **Actions** del repositorio.

### Build local (simular GitHub Pages)

```bash
# Windows PowerShell
$env:GITHUB_PAGES='true'; npm run build

# Linux / macOS
GITHUB_PAGES=true npm run build
```

Esto genera la carpeta `out/` con `basePath` `/portafolio`, igual que en producción.

### Entorno del workflow

| Componente | Versión |
| ---------- | ------- |
| Runner     | `ubuntu-24.04` |
| Node.js    | `22` (LTS) |

## Despliegue en otros hosts

El proyecto genera archivos estáticos en la carpeta `out/` al ejecutar `npm run build`. Para Vercel u otros hosts sin subruta, usa `npm run build` sin la variable `GITHUB_PAGES`.

## Créditos

Las primeras versiones de este portafolio partieron de la plantilla
[Engineering Student Portfolio](https://github.com/niladri-1/Engineering_Student_Portfolio) de
**Niladri Chatterjee**, licenciada bajo [MIT License](https://opensource.org/licenses/MIT).
El rediseño actual es original y ya no conserva código de esa plantilla.

## Licencia

El diseño, el código y el contenido de este repositorio pertenecen a Julián Andrés Caracas.
