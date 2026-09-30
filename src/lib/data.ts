import { 
    Code, 
    Database, 
    Layers, 
    PenTool, 
    Smartphone, 
    Briefcase, 
    Building, 
    ClipboardList, 
    BarChart3, 
    ShoppingCart, 
    Globe, 
    FileSpreadsheet, 
    MessageSquare, 
    Calculator, 
    Sparkles 
} from "lucide-react";

export const skillCategories = [
  {
    category: "Desarrollo Web & Tecnologías",
    description: "Herramientas y lenguajes para construir aplicaciones modernas, SaaS y plataformas escalables.",
    accentColor: "primary",
    icon: Code,
    skills: [
      { name: "Next.js (App Router)", icon: Layers },
      { name: "React.js", icon: Layers },
      { name: "TypeScript", icon: Code },
      { name: "JavaScript (ES6+)", icon: Code },
      { name: "Firebase (Firestore & Auth)", icon: Database },
      { name: "Node.js & Express", icon: Code },
      { name: "Tailwind CSS", icon: PenTool },
      { name: "Genkit AI / LLMs", icon: Sparkles },
      { name: "SQL & NoSQL", icon: Database },
      { name: "Git & GitHub", icon: Code },
      { name: "APIs & Mercado Pago", icon: Globe },
      { name: "PWA (Web Apps Instalables)", icon: Smartphone },
    ]
  },
  {
    category: "Gestión Administrativa, E-commerce & Soporte",
    description: "Competencias operativas, comerciales y de atención remota para el día a día del negocio.",
    accentColor: "accent",
    icon: ClipboardList,
    skills: [
      { name: "Data Entry & Carga de Productos", icon: FileSpreadsheet },
      { name: "Atención al Cliente (WhatsApp / Redes)", icon: MessageSquare },
      { name: "Control de Inventario & Stock", icon: ClipboardList },
      { name: "Arqueo de Caja Chica & Cierres de Turno", icon: Calculator },
      { name: "Excel & Google Sheets Avanzado", icon: FileSpreadsheet },
      { name: "Planillas Contables (Libro IVA / AFIP)", icon: Calculator },
      { name: "Operación de Tiendas Online & E-commerce", icon: ShoppingCart },
      { name: "Conciliación de Pagos & Transferencias", icon: Calculator },
      { name: "Gestión de Cuentas Corrientes y Fiados", icon: ClipboardList },
      { name: "Redacción Comercial & Contenido (TikTok / IG)", icon: Sparkles },
    ]
  }
];

export const skills = skillCategories[0].skills;


export const experience = [
    {
        role: "Desarrollador Web Freelance y Asistente Remoto",
        company: "Profesional independiente",
        period: "ene. 2020 - actualidad",
        description: "Desarrollo de sitios y aplicaciones web a medida (full stack). Además, ofrezco servicios de asistencia administrativa remota, optimización de ventas y gestión económica para pymes y emprendedores, enfocándome en mejorar su productividad desde una oficina en casa.",
        icon: Briefcase
    },
    {
        role: "Propietario y Gestor Comercial",
        company: "Emprendimientos propios",
        period: "ago. 2019 - actualidad",
        description: "Gestión integral de negocios ('Xime Joyería' y 'J&L Librería'). Responsable de ventas (online y presenciales), control económico, administración de inventarios y creación de contenido en redes (TikTok/Instagram). Esta experiencia me capacita para entender y resolver las verdaderas necesidades comerciales de mis clientes freelance.",
        icon: Building
    }
];

export const serviceCategories = [
    {
        category: "Soporte Administrativo & Operativo",
        description: "Organización diaria, precisión en datos y atención ágil para mantener tu negocio en marcha.",
        icon: ClipboardList,
        accentColor: "accent",
        services: [
            {
                title: "Asistencia Administrativa & Data Entry",
                description: "Carga rápida y precisa de artículos, actualización de listas de precios, organización de catálogos y gestión de bases de datos sin errores.",
                icon: FileSpreadsheet,
                badge: "Data Entry & Catálogo"
            },
            {
                title: "Atención al Cliente & Gestión de Mensajes",
                description: "Respuestas rápidas, empáticas y resolutivas por WhatsApp, Instagram y redes sociales. Gestión de dudas, pedidos y atención post-venta.",
                icon: MessageSquare,
                badge: "Soporte & WhatsApp"
            },
            {
                title: "Control de Caja, Cuentas y Planillas Contables",
                description: "Conciliación diaria de caja chica, seguimiento de cuentas corrientes/fiados y armado de planillas ordenadas para tu contador (AFIP / IVA).",
                icon: Calculator,
                badge: "Finanzas Operativas"
            }
        ]
    },
    {
        category: "Desarrollo Web & Soluciones Digitales",
        description: "Creación de software moderno, interfaces rápidas y herramientas de automatización para potenciar tus ventas.",
        icon: Code,
        accentColor: "primary",
        services: [
            {
                title: "Desarrollo de Aplicaciones Web y SaaS",
                description: "Sistemas web a medida, plataformas en la nube y paneles de administración construidos con Next.js, Firebase y TypeScript.",
                icon: Code,
                badge: "Full Stack"
            },
            {
                title: "Catálogos y Tiendas Digitales",
                description: "Venta online fluida con catálogos autogestionables, pedidos directos a WhatsApp y pasarelas de pago integradas con Mercado Pago.",
                icon: ShoppingCart,
                badge: "E-commerce"
            },
            {
                title: "Automatización con Inteligencia Artificial",
                description: "Implementación de asistentes con IA para sugerencia de márgenes de ganancia, consejos predictivos de stock y redacción de copys comerciales.",
                icon: Sparkles,
                badge: "IA Aplicada"
            }
        ]
    }
];

// Mantenemos compatibilidad con cualquier referencia anterior
export const consultingServices = serviceCategories.flatMap(c => c.services);


export const imageUrls = {
    perfil: '/profile.jpeg',
    clarity1: '/clarity1.png',
    clarity2: '/clarity2.png',
    kontalo1: '/kontalo1.png',
    kontalo2: '/kontalo2.png'
};

export const featuredProjects = [
    {
        id: "kontalo",
        title: "Kontaló - Gestión Comercial & POS Cloud",
        description: "SaaS integral en la nube y PWA para comercios minoristas. Incluye Punto de Venta ágil (hotkeys y código de barras), arqueo de turnos de caja chica, ajustes masivos de precios/stock con redondeo inteligente, reportes de rotación con IA para capital inmovilizado, exportador contable en 1 clic (AFIP / Libro IVA) y catálogo online con pedidos por WhatsApp y Mercado Pago.",
        tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS", "PWA", "IA Asistiva", "Mercado Pago"],
        github: "#",
        live: "https://kontalo.com.ar",
        isPrivate: true,
        repoNotice: "Repositorio privado comercial. Acceso temporal a código disponible para reclutadores bajo solicitud.",
        imageUrls: [imageUrls.kontalo1, imageUrls.kontalo2]
    },
    {
        id: "clarity",
        title: "Clarity — Tus Finanzas Claras (v2.0)",
        description: "Plataforma integral de finanzas personales y desendeudamiento sistemático construida con Next.js 15, React 19, Firebase y Genkit AI. Incorpora la regla 50/30/20, alertas preventivas de deudas con historial de abonos y reversión segura, portafolio de inversiones con cotizaciones en tiempo real (CoinGecko & Finnhub APIs), lista de prioridades de consumo y exportación a Excel con UTF-8 BOM.",
        tech: ["Next.js 15", "React 19", "Firebase", "Genkit AI", "TypeScript", "CoinGecko API", "Finnhub API", "Tailwind CSS"],
        github: "https://github.com/edumoyano86/Clarity",
        live: "https://clarity86.netlify.app/",
        isPrivate: false,
        imageUrls: [imageUrls.clarity1, imageUrls.clarity2]
    }
];


