# TuMovil77 – Rent a Car Ciudad del Este

Sitio web de alquiler de autos en Ciudad del Este, Paraguay.  
Construido con **Next.js 14 (App Router)** + **Tailwind CSS**.

---

## 📁 Estructura del proyecto

```
tumovil77/
├── app/
│   ├── layout.jsx        ← Layout raíz con SEO metadata y Schema.org
│   ├── page.jsx          ← Página principal (Hero, Beneficios, Garantía, etc.)
│   ├── globals.css       ← Estilos globales + design tokens
│   ├── sitemap.js        ← Genera /sitemap.xml automáticamente
│   └── robots.js         ← Genera /robots.txt automáticamente
├── components/
│   ├── Navbar.jsx        ← Navbar fija con scroll effect
│   └── WhatsAppFloat.jsx ← Botón flotante de WhatsApp
├── public/
│   ├── favicon.ico       ← Favicon (agregá tu ícono aquí)
│   ├── og-image.png      ← Imagen Open Graph 1200×630px
│   └── logo.png          ← Logo TuMovil77 (del banner)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Instalación y ejecución local

### Requisitos previos
- Node.js 18+ instalado ([descargar](https://nodejs.org))
- npm o yarn

### Pasos

```bash
# 1. Entrar a la carpeta del proyecto
cd tumovil77

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# → http://localhost:3000
```

### Build de producción

```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

---

## 🌐 Subir a Vercel GRATIS (paso a paso)

### Opción A: Desde GitHub (recomendado)

1. **Subir el proyecto a GitHub**
   ```bash
   git init
   git add .
   git commit -m "feat: TuMovil77 website inicial"
   git remote add origin https://github.com/TU_USUARIO/tumovil77.git
   git push -u origin main
   ```

2. **Ir a [vercel.com](https://vercel.com)** y crear cuenta gratuita con GitHub

3. **Click en "Add New Project"** → Importar tu repositorio

4. **Configuración** (Vercel detecta Next.js automáticamente):
   - Framework: `Next.js` ✓ (auto-detectado)
   - Build Command: `npm run build` ✓
   - Output Directory: `.next` ✓

5. **Click "Deploy"** → ¡Listo! En 2 minutos tenés tu URL pública.

### Opción B: Con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deployar desde la carpeta del proyecto
vercel

# Seguir las instrucciones en pantalla
```

### Dominio personalizado (tumovil77.com)

En el dashboard de Vercel:
1. Settings → Domains
2. Agregar `tumovil77.com`
3. Configurar los DNS con tu proveedor de dominio

---

## 🖼️ Agregar imágenes reales

### Logo y Favicon
1. Copiá el banner de WhatsApp a `/public/logo.png`
2. Generá favicon en [favicon.io](https://favicon.io) desde tu logo
3. Copiá `favicon.ico` y `apple-touch-icon.png` a `/public/`

### Open Graph image
- Crear imagen de 1200×630px con el logo y slogan
- Guardar como `/public/og-image.png`

### Fotos de vehículos
En `app/page.jsx`, buscar la sección `VEHICULOS` y agregar el campo `img`:
```js
{ nombre: 'Sedán Compacto', img: '/autos/sedan.jpg', ... }
```

Luego descomentar el bloque `<Image>` en la sección FLOTA.

---

## 📈 SEO – Palabras clave optimizadas

El sitio está optimizado para:
- `rent a car Ciudad del Este`
- `alquiler de autos Paraguay`
- `rent a car CDE`
- `alquiler de vehículos Ciudad del Este`

### Google Search Console
1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. Agregar propiedad con tu dominio
3. Obtener el código de verificación
4. Pegarlo en `app/layout.jsx` donde dice `// verification: { google: ... }`
5. Enviar sitemap: `https://tumovil77.com/sitemap.xml`

---

## 🛠️ Personalización rápida

| Qué cambiar | Dónde |
|-------------|-------|
| Número de WhatsApp | `components/WhatsAppFloat.jsx` y `components/Navbar.jsx` |
| Textos y precios | `app/page.jsx` → arrays `BENEFICIOS`, `VEHICULOS`, etc. |
| Colores de marca | `app/globals.css` → variables CSS `:root` |
| SEO metadata | `app/layout.jsx` → objeto `metadata` |
| Fotos de autos | `/public/autos/` + actualizar `VEHICULOS` en `page.jsx` |

---

## ✅ Checklist de lanzamiento

- [ ] Agregar logo real como favicon
- [ ] Crear imagen Open Graph (1200×630px)
- [ ] Agregar fotos reales de vehículos
- [ ] Verificar en Google Search Console
- [ ] Enviar sitemap.xml
- [ ] Probar en mobile (Chrome DevTools)
- [ ] Revisar velocidad en [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Configurar dominio en Vercel

---

## 📞 Soporte

¿Dudas? Contactar por WhatsApp: **+595 982 777 833**
