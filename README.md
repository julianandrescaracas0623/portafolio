# Portafolio — Julian Andrés Caracas

Portafolio web personal de **Julian Andrés Caracas**, Desarrollador de Software e Ingeniero de Sistemas. Sitio bilingüe (ES/EN) con información profesional, experiencia, habilidades, certificados y contacto.

## Enlaces

- **GitHub:** [julianandrescaracas0623](https://github.com/julianandrescaracas0623)
- **LinkedIn:** [Julian Andrés Caracas Sánchez](https://www.linkedin.com/in/julian-andres-caracas-sanchez-23886b237/)
- **Email:** andrescaracas0623@gmail.com
- **WhatsApp:** [+57 304 343 2942](https://wa.me/573043432942)

## Características

- Diseño responsive con tema oscuro
- Interfaz bilingüe (español / inglés)
- Secciones: Inicio, Sobre mí, Educación, Habilidades, Experiencia, Proyectos, Certificados y Contacto
- Certificados con vista previa, visualización y descarga de PDF
- Exportación estática (`output: 'export'`) lista para desplegar en GitHub Pages, Vercel, Netlify, etc.
- Animaciones con Framer Motion y escena 3D en el hero (Three.js / Vanta)

## Stack tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **UI:** Radix UI + componentes shadcn/ui
- **Animaciones:** Framer Motion
- **3D:** Three.js, React Three Fiber, Vanta

## Inicio rápido

### Requisitos

- Node.js 18+
- npm

### Instalación

```bash
git clone <url-de-tu-repositorio>
cd Engineering_Student_Portfolio
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

| Qué editar              | Archivo / carpeta                    |
| ----------------------- | ------------------------------------ |
| Datos personales        | `lib/constants.ts`                   |
| Textos de la interfaz   | `lib/i18n/translations.ts`           |
| Foto de perfil y CV     | `public/profile.jpg`, `public/cv.pdf` |
| PDFs de certificados    | `public/certificate-files/`          |
| Colores y tema          | `app/globals.css`, `tailwind.config.ts` |

Para añadir un certificado con PDF:

1. Guarda el archivo en `public/certificate-files/nombre.pdf`
2. (Opcional) Añade una captura en `public/certificate-files/nombre.jpg`
3. Agrega la entrada en el array `certificates` de `lib/constants.ts`:

```typescript
{
  title: 'Nombre del curso',
  issuer: 'Institución',
  date: '2024',
  pdf: '/certificate-files/nombre.pdf',
  image: '/certificate-files/nombre.jpg',
}
```

## Estructura del proyecto

```
app/                  # Páginas (App Router)
components/           # Componentes React
  certificates/       # Tarjetas de certificados
  home/               # Secciones del inicio
  layout/             # Navbar, footer
  ui/                 # Componentes reutilizables
lib/
  constants.ts        # Datos del portafolio
  i18n/               # Traducciones ES/EN
public/               # Assets estáticos (imágenes, PDFs, CV)
```

## Despliegue

El proyecto genera archivos estáticos en la carpeta `out/` al ejecutar `npm run build`. Sube el contenido de `out/` a tu hosting estático preferido.

## Créditos

Este portafolio está basado en la plantilla [Engineering Student Portfolio](https://github.com/niladri-1/Engineering_Student_Portfolio) de **Niladri Chatterjee**, licenciada bajo [MIT License](https://opensource.org/licenses/MIT).

## Licencia

El código de la plantilla original se distribuye bajo licencia MIT. Las modificaciones y el contenido personal de este repositorio pertenecen a Julian Andrés Caracas.
