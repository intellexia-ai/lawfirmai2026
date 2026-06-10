# Cuenca Reyes y Asociados — Sitio Web

Sitio web institucional del despacho jurídico **Cuenca Reyes y Asociados**, construido como una single-page application moderna con animaciones suaves y diseño responsive.

## 🛠️ Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [React 18](https://react.dev) |
| Lenguaje | [TypeScript](https://www.typescriptlang.org) |
| Build tool | [Vite 5](https://vitejs.dev) |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com) |
| Ruteo | [React Router 7](https://reactrouter.com) |
| Iconos | [lucide-react](https://lucide.dev) |
| Deploy | [Vercel](https://vercel.com) |

## 🚀 Desarrollo local

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build de producción
```

## 📁 Estructura

```
src/
├── components/
│   ├── home/       # Secciones de la home (Hero, StatsBar, carruseles, CTA…)
│   ├── layout/     # Navbar y Footer
│   └── ui/         # Componentes reutilizables (FadeIn, PageHero, AnimatedHeading)
├── pages/          # Vistas por ruta (Home, LaFirma, Servicios, Contacto…)
├── data/           # Contenido estructurado (áreas de práctica)
├── hooks/          # Hooks personalizados (useInView)
├── App.tsx         # Definición de rutas
└── main.tsx        # Punto de entrada
```

## 🌐 Despliegue

El sitio se despliega automáticamente en **Vercel** con cada push a `main`.

- Build command: `npm run build`
- Output directory: `dist`

---

© Cuenca Reyes y Asociados. Desarrollado por [INTELLEXIA](https://intellexia.io).
