# Matemática con Zender — Landing Page

Landing page premium en **Next.js 14 + TypeScript + TailwindCSS + Framer Motion**
para el servicio de clases particulares de *Matemáticas: Aplicaciones e
Interpretación — Nivel Medio (Programa del Diploma)*.

---

## 1. Cómo ejecutar el proyecto

Requisitos: Node.js 18 o superior.

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev
# abre http://localhost:3000

# 3. Generar build de producción
npm run build
npm run start
```

Para desplegar, el proyecto es compatible con **Vercel** (recomendado para
Next.js), Netlify, o cualquier hosting con soporte para Node.js/Next.js.

---

## 2. Estructura de archivos creados

```
matematica-con-zender/
├── package.json
├── next.config.js
├── tailwind.config.ts        ← paleta de colores y tipografías
├── postcss.config.js
├── tsconfig.json
├── public/
│   ├── robots.txt
│   └── images/
│       └── LEEME.txt         ← guía para reemplazar imágenes
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← fuentes, metadata SEO, Schema.org (JSON-LD)
│   │   ├── page.tsx          ← ensambla todas las secciones
│   │   ├── globals.css
│   │   └── sitemap.ts        ← sitemap.xml dinámico
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── PainPoints.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── Benefits.tsx
│   │   ├── LearningTopics.tsx
│   │   ├── Methodology.tsx
│   │   ├── Transformation.tsx
│   │   ├── Pricing.tsx
│   │   ├── Comparison.tsx
│   │   ├── WhatYouGet.tsx
│   │   ├── AudienceAndResults.tsx  (¿Para quién es? + Resultados esperados)
│   │   ├── Trust.tsx          (Autoridad / confianza)
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── ui.tsx             (componentes reutilizables: botones, contenedor, títulos)
│   ├── data/
│   │   ├── site-config.ts     ← EDITAR: precios, WhatsApp, imágenes, stats, SEO
│   │   └── content.ts         ← EDITAR: textos, FAQ, currícula, beneficios
│   └── lib/
│       └── utils.ts
└── README.md
```

---

## 3. Guía para editar precios, textos y enlaces

Todo el contenido editable está centralizado en **dos archivos**, para que
no sea necesario tocar los componentes:

### `src/data/site-config.ts`
- **Precios** → objeto `PRICING` (precio por clase, paquete de 4, ahorro).
- **WhatsApp** → `WHATSAPP_NUMBER` y `WHATSAPP_MESSAGES` (mensajes distintos
  para consulta general, modalidad grupal e individual).
- **Estadísticas del docente** → objeto `TEACHER_STATS` (reemplaza
  `"Editar"` por las cifras reales; no se inventan datos).
- **Imágenes** → objeto `IMAGES` (rutas hacia `/public/images/`).
- **Testimonios** → arreglo `TESTIMONIALS` (reemplazar solo con comentarios
  reales y autorizados).
- **SEO** → objeto `SEO` (título, descripción, keywords, URL del dominio).
- **Contacto** → objeto `CONTACT` (correo y redes sociales).

### `src/data/content.ts`
- Textos de cada sección: dolores del estudiante, beneficios, currícula del
  curso, metodología, transformación antes/después, tabla comparativa,
  preguntas frecuentes y enlaces del menú.

No es necesario modificar ningún componente `.tsx` para actualizar
precios, textos o el número de WhatsApp.

---

## 4. Guía para reemplazar las imágenes

1. Coloca las imágenes reales en `public/images/` (ver `LEEME.txt` en esa
   carpeta para los nombres sugeridos).
2. Actualiza las rutas en `src/data/site-config.ts`, objeto `IMAGES`, si
   usas nombres de archivo distintos.
3. El rostro del profesor no debe modificarse ni distorsionarse.
4. Se recomienda formato WebP o JPG optimizado, y usar imágenes de al menos
   1000 px de ancho para mantener nitidez en pantallas grandes.
5. Todas las imágenes usan `next/image`, por lo que se optimizan y cargan
   de forma diferida (lazy loading) automáticamente.

---

## 5. WhatsApp

Número configurado: **+51 953 259 755**.

Todos los botones de reserva dirigen al mismo número, pero con un mensaje
predefinido distinto según la modalidad (general, grupal, individual),
configurado en `WHATSAPP_MESSAGES` dentro de `site-config.ts`.

---

## 6. SEO y datos estructurados

Incluidos en `src/app/layout.tsx` y `src/app/sitemap.ts`:
- Meta title y meta description.
- Open Graph y Twitter Card.
- Canonical URL.
- `robots.txt` y `sitemap.xml` (dinámico).
- Schema.org: `Organization`, `Course`, `Service`, `FAQPage`.
- URLs amigables (`/matematicas-aplicaciones-interpretacion-nivel-medio` en
  `SEO.path`, usado como canonical).

Antes de publicar, actualiza `SEO.url` en `site-config.ts` con el dominio
real, para que las URLs absolutas (Open Graph, sitemap, canonical) sean
correctas.

---

## 7. Accesibilidad y rendimiento

- Contraste verificado sobre fondo azul oscuro (`#071B33`) y texto claro.
- Estados de foco visibles (`focus-visible`) en botones, enlaces y
  acordeones.
- Encabezados jerárquicos (`h1` → `h2` → `h3`).
- `prefers-reduced-motion` respetado (desactiva animaciones si el usuario
  lo solicita en su sistema).
- Imágenes con `alt` descriptivo y carga diferida vía `next/image`.
- Tipografías cargadas con `next/font` (Poppins, Montserrat, Inter) para
  evitar layout shift y mejorar rendimiento.

---

## 8. Verificación final de datos (revisar antes de publicar)

- [x] Clase grupal suelta: **S/ 40**
- [x] Paquete grupal: **4 clases por S/ 100**
- [x] Clase individual suelta: **S/ 65**
- [x] Paquete individual: **4 clases por S/ 200**
- [x] Duración de todas las clases: **60 minutos**
- [x] Grupo máximo: **4 estudiantes**
- [x] WhatsApp: **+51 953 259 755**
- [x] Sin promesas de resultados garantizados en ningún texto.
- [ ] Reemplazar imágenes placeholder por fotos reales.
- [ ] Reemplazar `TEACHER_STATS` con cifras reales.
- [ ] Reemplazar `TESTIMONIALS` con testimonios reales y autorizados.
- [ ] Actualizar `SEO.url` con el dominio de producción.

---

## 9. Notas de diseño

Paleta y tipografías siguen exactamente la identidad de marca solicitada
(azules profundos + amarillo dorado como acento estratégico, Poppins /
Montserrat para títulos, Inter para texto). El elemento visual distintivo
de la página es el motivo de "pantalla de calculadora gráfica / plano
cartesiano": una cuadrícula sutil de fondo, fórmulas en baja opacidad y
tarjetas flotantes con una curva de función trazada en dorado, que se
repite de forma coherente en el Hero y en la sección de Metodología (como
el "hilo" que conecta los seis pasos).
