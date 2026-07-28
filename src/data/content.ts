// =============================================================
// CONTENIDO EDITABLE — copys, listas y estructuras de secciones.
// =============================================================

export const PAIN_POINTS = [
  "Lees el problema y no sabes por dónde empezar.",
  "Entiendes la explicación, pero te bloqueas al resolver solo.",
  "Las preguntas del examen parecen diferentes a las practicadas.",
  "Pierdes tiempo intentando recordar procedimientos.",
  "No interpretas correctamente gráficos, tablas o resultados.",
  "No sabes qué funciones usar en la calculadora gráfica.",
  "Cometes errores por no justificar o interpretar tu respuesta.",
  "Los mock exams te generan inseguridad.",
  "Tienes varios temas pendientes y no sabes cómo organizarte.",
];

export const VALUE_PILLARS = [
  {
    title: "Comprensión",
    text: "Comprende qué representa cada procedimiento y cuándo utilizarlo.",
  },
  {
    title: "Aplicación",
    text: "Relaciona conceptos matemáticos con situaciones reales y preguntas contextualizadas.",
  },
  {
    title: "Interpretación",
    text: "Analiza resultados, comunica conclusiones y responde de manera coherente con el contexto.",
  },
];

export const BENEFITS = [
  {
    icon: "FileSearch",
    title: "Preguntas de convocatorias anteriores",
    text: "Práctica con ejercicios basados en el estilo y nivel de exigencia de las evaluaciones internacionales.",
  },
  {
    icon: "Compass",
    title: "Estrategias para el examen",
    text: "Aprende a identificar los datos, elegir un procedimiento y organizar una respuesta clara.",
  },
  {
    icon: "Video",
    title: "Clases completamente virtuales",
    text: "Accede desde cualquier lugar mediante clases en vivo y acompañamiento directo.",
  },
  {
    icon: "Calculator",
    title: "Uso de calculadora gráfica",
    text: "Aprende a utilizar la tecnología de forma adecuada para resolver, verificar e interpretar.",
  },
  {
    icon: "FolderOpen",
    title: "Material seleccionado",
    text: "Recibe ejercicios organizados por temas, niveles de dificultad y objetivos de aprendizaje.",
  },
  {
    icon: "ListChecks",
    title: "Explicación paso a paso",
    text: "Cada procedimiento se desarrolla con claridad para que comprendas y puedas aplicarlo de manera autónoma.",
  },
  {
    icon: "Users",
    title: "Grupos realmente reducidos",
    text: "Máximo cuatro estudiantes para facilitar la participación, las preguntas y la retroalimentación.",
  },
];

export type CurriculumBlock = {
  title: string;
  items: string[];
};

export const CURRICULUM: CurriculumBlock[] = [
  {
    title: "Números y álgebra",
    items: [
      "Operaciones y propiedades numéricas",
      "Notación científica",
      "Sucesiones y modelos",
      "Matemática financiera",
      "Interés compuesto",
      "Depreciación",
      "Amortización",
      "Resolución de ecuaciones",
      "Uso de tecnología para cálculos financieros",
    ],
  },
  {
    title: "Funciones",
    items: [
      "Funciones lineales",
      "Funciones cuadráticas",
      "Funciones exponenciales",
      "Funciones logarítmicas",
      "Modelos matemáticos",
      "Dominio y rango",
      "Intersecciones",
      "Transformaciones",
      "Regresión",
      "Interpretación de parámetros",
      "Aplicación de funciones en contextos reales",
    ],
  },
  {
    title: "Geometría y trigonometría",
    items: [
      "Razones trigonométricas",
      "Ley de senos",
      "Ley de cosenos",
      "Ángulos de elevación y depresión",
      "Longitud de arco",
      "Área de sectores",
      "Geometría espacial",
      "Volumen y área de sólidos",
      "Diagramas de Voronoi",
      "Aplicaciones geométricas",
    ],
  },
  {
    title: "Estadística y probabilidad",
    items: [
      "Estadística descriptiva",
      "Media, mediana y moda",
      "Cuartiles",
      "Diagramas estadísticos",
      "Desviación estándar",
      "Correlación",
      "Regresión",
      "Probabilidad",
      "Distribución binomial",
      "Distribución normal",
      "Prueba de chi cuadrado",
      "Prueba t",
      "Interpretación de resultados estadísticos",
    ],
  },
  {
    title: "Análisis",
    items: [
      "Tasa de variación",
      "Límites",
      "Derivadas",
      "Interpretación gráfica de la derivada",
      "Máximos y mínimos",
      "Optimización",
      "Integración",
      "Área bajo una curva",
      "Regla del trapecio",
      "Aplicaciones del cálculo",
    ],
  },
  {
    title: "Preparación para evaluaciones",
    items: [
      "Resolución de preguntas tipo Paper 1",
      "Resolución de preguntas tipo Paper 2",
      "Preparación para mock exams",
      "Uso estratégico de la calculadora gráfica",
      "Apoyo y orientación para la exploración matemática",
      "Interpretación y comunicación de respuestas",
    ],
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: "1",
    title: "Diagnóstico",
    text: "Identificamos los conocimientos previos, fortalezas y temas que requieren refuerzo.",
  },
  {
    step: "2",
    title: "Priorización",
    text: "Organizamos los contenidos según su importancia, dificultad y cercanía a las evaluaciones.",
  },
  {
    step: "3",
    title: "Comprensión conceptual",
    text: "Explicamos los conceptos con ejemplos claros y conexiones entre representaciones.",
  },
  {
    step: "4",
    title: "Resolución guiada",
    text: "Desarrollamos preguntas paso a paso, justificando las decisiones tomadas.",
  },
  {
    step: "5",
    title: "Práctica tipo examen",
    text: "El estudiante aplica la estrategia en problemas similares a los de evaluación.",
  },
  {
    step: "6",
    title: "Retroalimentación",
    text: "Revisamos errores, corregimos procedimientos y establecemos acciones de mejora.",
  },
];

export const TRANSFORMATION = {
  before: [
    "No sé cómo empezar.",
    "Dependo de memorizar fórmulas.",
    "Me bloqueo ante preguntas nuevas.",
    "Uso la calculadora sin comprender el resultado.",
    "No interpreto correctamente mis respuestas.",
    "Pierdo tiempo durante el examen.",
    "Tengo poca confianza.",
  ],
  after: [
    "Identifico los datos y el objetivo.",
    "Selecciono una estrategia adecuada.",
    "Relaciono el problema con conceptos conocidos.",
    "Utilizo la calculadora con intención.",
    "Interpreto el resultado en su contexto.",
    "Organizo mejor mi tiempo.",
    "Resuelvo con mayor seguridad.",
  ],
};

export const WHAT_YOU_GET = [
  "Clases virtuales en vivo",
  "Explicación clara y detallada",
  "Ejercicios tipo examen",
  "Preguntas de convocatorias anteriores",
  "Resolución paso a paso",
  "Estrategias para abordar problemas",
  "Práctica con calculadora gráfica",
  "Material organizado por temas",
  "Retroalimentación",
  "Resolución de dudas durante la clase",
  "Orientación para organizar el estudio",
  "Preparación para evaluaciones y mock exams",
];

export const WHO_IS_THIS_FOR = [
  "Sientes que tienes vacíos en algunos temas.",
  "Comprendes la teoría, pero no sabes aplicarla.",
  "Necesitas mejorar tu interpretación de problemas.",
  "Quieres prepararte para una evaluación.",
  "Se acercan tus mock exams.",
  "Deseas mejorar tu uso de la calculadora gráfica.",
  "Necesitas reforzar estadística, funciones, trigonometría, probabilidad o cálculo.",
  "Quieres recibir retroalimentación directa.",
  "Buscas clases en un grupo realmente reducido.",
  "Necesitas una clase individual adaptada a tus dificultades.",
  "Deseas fortalecer tu exploración matemática sin que el profesor realice el trabajo por ti.",
];

export const EXPECTED_RESULTS = [
  "Mayor comprensión conceptual",
  "Mejor interpretación de preguntas",
  "Mayor seguridad al resolver",
  "Uso más eficiente de la calculadora",
  "Mejor organización de procedimientos",
  "Mayor capacidad para justificar respuestas",
  "Mejor manejo del tiempo",
  "Mayor autonomía",
  "Reconocimiento de modelos y patrones",
  "Capacidad para relacionar las matemáticas con contextos reales",
];

export const COMPARISON_ROWS = [
  { label: "Precio por sesión", grupal: "S/ 40", individual: "S/ 65" },
  { label: "Paquete de 4 clases", grupal: "S/ 100", individual: "S/ 200" },
  { label: "Duración", grupal: "60 minutos", individual: "60 minutos" },
  { label: "Número de estudiantes", grupal: "Máximo 4", individual: "1" },
  { label: "Atención personalizada", grupal: "Alta", individual: "Máxima" },
  { label: "Participación", grupal: "Incluida", individual: "Incluida" },
  { label: "Material", grupal: "Incluido", individual: "Incluido" },
  { label: "Ejercicios tipo examen", grupal: "Incluidos", individual: "Incluidos" },
  { label: "Resolución de dudas", grupal: "Incluida", individual: "Incluida" },
  { label: "Ritmo de la clase", grupal: "Compartido", individual: "Completamente personalizado" },
  {
    label: "Ideal para",
    grupal: "Estudiantes que buscan aprender en un grupo reducido",
    individual: "Estudiantes que necesitan atención específica o preparación intensiva",
  },
];

export const FAQS = [
  {
    q: "¿Necesito tener conocimientos previos?",
    a: "Las clases se adaptan al nivel y a las dificultades del estudiante. Al inicio se identifican los conocimientos previos para reforzar los temas necesarios.",
  },
  {
    q: "¿Cómo son las clases?",
    a: "Las clases son virtuales, en vivo y tienen una duración de 60 minutos. Se combinan explicación, resolución guiada, práctica y retroalimentación.",
  },
  {
    q: "¿Cuántos estudiantes participan en la modalidad grupal?",
    a: "Cada grupo tiene un máximo de cuatro estudiantes para favorecer la participación y la resolución de dudas.",
  },
  {
    q: "¿Qué calculadora necesito?",
    a: "Se puede trabajar con calculadoras gráficas utilizadas en el Programa del Diploma, como Casio fx-9860GII, fx-9860GIII o CG50. La compatibilidad se confirma antes de iniciar.",
  },
  {
    q: "¿Puedo llevar un tema específico?",
    a: "Sí. En las clases individuales se puede trabajar un tema concreto, una evaluación próxima o una dificultad específica. En los grupos, los contenidos se coordinan según el nivel y los objetivos comunes.",
  },
  {
    q: "¿Las clases quedan grabadas?",
    a: "Las clases se realizan en vivo. La disponibilidad de grabación debe consultarse previamente y dependerá de la modalidad y de la autorización de los participantes.",
  },
  {
    q: "¿Cómo se realizan los pagos?",
    a: "Los medios de pago disponibles se coordinan por WhatsApp antes de confirmar la reserva.",
  },
  {
    q: "¿Puedo comenzar en cualquier momento?",
    a: "Las clases individuales pueden coordinarse según disponibilidad. Para los grupos, el ingreso dependerá de los horarios y vacantes disponibles.",
  },
  {
    q: "¿Me ayudan con la exploración matemática?",
    a: "Se puede brindar orientación sobre organización, enfoque, herramientas matemáticas, análisis y presentación. El trabajo debe ser elaborado por el propio estudiante respetando la probidad académica.",
  },
  {
    q: "¿Preparan para Paper 1 y Paper 2?",
    a: "Sí. Las clases pueden incluir práctica con preguntas tipo examen, interpretación de enunciados, elección de estrategias y manejo del tiempo.",
  },
  {
    q: "¿Los precios son por estudiante?",
    a: "Sí. En la modalidad grupal, el precio indicado corresponde a cada estudiante.",
  },
  {
    q: "¿Cómo reservo?",
    a: "Selecciona la modalidad, presiona el botón de WhatsApp y consulta los horarios disponibles.",
  },
];

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Temas", href: "#temas" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Modalidades", href: "#precios" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];
