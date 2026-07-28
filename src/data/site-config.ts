// =============================================================
// ARCHIVO CENTRAL DE CONFIGURACIÓN — MATEMÁTICA CON ZENDER
// Edita aquí precios, textos, contacto y estadísticas.
// No es necesario tocar los componentes para actualizar estos datos.
// =============================================================

export const BRAND = {
  name: "Matemática con Zender",
  shortName: "Zender",
  tagline: "Preparación especializada para el Programa del Diploma",
  logoText: "Matemática con Zender",
};

// -------------------------------------------------------------
// CONTACTO / WHATSAPP
// -------------------------------------------------------------
export const WHATSAPP_NUMBER = "51953259755"; // +51 953 259 755 (formato internacional sin '+')

export const WHATSAPP_MESSAGES = {
  general:
    "Hola, deseo información sobre las clases de Matemáticas: Aplicaciones e Interpretación Nivel Medio. Me interesa conocer los horarios y modalidades disponibles.",
  grupal:
    "Hola, deseo información sobre las clases grupales de Matemáticas: Aplicaciones e Interpretación Nivel Medio. Quisiera conocer los horarios y vacantes disponibles.",
  individual:
    "Hola, deseo reservar clases individuales de Matemáticas: Aplicaciones e Interpretación Nivel Medio. Quisiera conocer los horarios disponibles.",
};

export function buildWhatsAppLink(
  message: keyof typeof WHATSAPP_MESSAGES = "general"
) {
  const text = encodeURIComponent(WHATSAPP_MESSAGES[message]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// -------------------------------------------------------------
// CONTACTO ADICIONAL (editable)
// -------------------------------------------------------------
export const CONTACT = {
  email: "martinzender44@gmail.com", // Editar
  instagram: "https://instagram.com/amartinzenders", // Editar
  tiktok: "https://tiktok.com/@angel.martin.zend", // Editar
};

// -------------------------------------------------------------
// PRECIOS — revisar cuidadosamente antes de publicar
// -------------------------------------------------------------
export const PRICING = {
  grupal: {
    label: "Clases grupales",
    badge: "Grupos reducidos",
    pricePerClass: 40, // S/
    packagePrice: 100, // S/ por 4 clases
    packageClasses: 4,
    savings: 60, // S/ ahorrados frente a 4 clases sueltas
    currency: "S/",
  },
  individual: {
    label: "Clases individuales",
    badge: "Mayor personalización",
    pricePerClass: 65,
    packagePrice: 200,
    packageClasses: 4,
    savings: 60,
    currency: "S/",
  },
  classDurationMinutes: 60,
  maxGroupSize: 4,
};

// -------------------------------------------------------------
// ESTADÍSTICAS DEL DOCENTE — mantener como variables editables.
// No inventar cifras: reemplazar "Editar" con datos reales.
// -------------------------------------------------------------
export const TEACHER_STATS = {
  yearsExperience: "Editar",
  studentsPrepared: "Editar",
  teachingHours: "Editar",
  resourcesCreated: "Editar",
};

// -------------------------------------------------------------
// IMÁGENES — reemplaza las rutas por las imágenes reales.
// Coloca los archivos en /public/images/ y actualiza las rutas.
// -------------------------------------------------------------
export const IMAGES = {
  heroTeacher: "/images/hero-teacher.jpg", // Foto real del profesor enseñando
  heroClassScreen: "/images/hero-class-screen.jpg", // Captura de clase virtual
  calculator: "/images/calculator-graphic.png", // Calculadora gráfica
  authorityPhoto: "/images/teacher-authority.jpg", // Foto de autoridad
  ogImage: "/images/og-image.jpg", // Imagen para Open Graph (1200x630)
};

// -------------------------------------------------------------
// TESTIMONIOS — SOLO REEMPLAZAR CON COMENTARIOS REALES Y AUTORIZADOS.
// Nota interna: no publicar testimonios ficticios.
// -------------------------------------------------------------
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Las clases fueron muy claras y bien organizadas. Gracias a la metodología pude comprender mejor los temas y resolver ejercicios con mayor confianza.",
    name: "Gustavo R.",
    role: "Estudiante",
  },
  {
    quote:
      "Destaco el compromiso y la paciencia durante las clases. El seguimiento constante permitió mejorar el rendimiento y la seguridad al enfrentar las evaluaciones.",
    name: "Guiseppe G.",
    role: "Padre de familia",
  },
  {
    quote:
      "La explicación paso a paso y la práctica con ejercicios hicieron que aprender matemáticas fuera mucho más sencillo. Una excelente experiencia de aprendizaje.",
    name: "Andrea Q.",
    role: "Estudiante",
  },
];

// -------------------------------------------------------------
// SEO
// -------------------------------------------------------------
export const SEO = {
  title: "Clases de Matemáticas Aplicaciones e Interpretación NM | Matemática con Zender",
  description:
    "Clases virtuales grupales e individuales de Matemáticas: Aplicaciones e Interpretación Nivel Medio. Preparación para evaluaciones, mock exams, calculadora gráfica y ejercicios tipo examen.",
  keywords: [
    "clases de matemáticas aplicaciones e interpretación",
    "matemáticas aplicaciones e interpretación nivel medio",
    "clases particulares programa del diploma",
    "clases virtuales matemáticas",
    "preparación examen internacional matemáticas",
    "tutor matemáticas aplicaciones interpretación",
    "clases calculadora gráfica",
    "preparación mock exam matemáticas",
    "matemáticas AI NM",
    "profesor matemáticas programa del diploma",
  ],
  url: "https://www.matematicaconzender.com", // Editar con el dominio real
  path: "/matematicas-aplicaciones-interpretacion-nivel-medio",
};
