import { Code, Database, Layers, PenTool, Smartphone, Briefcase, Building, ClipboardList, BarChart3, ShoppingCart, Globe } from "lucide-react";

export const skills = [
  { name: "React.js", icon: Layers },
  { name: "Node.js", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "Express.js", icon: Code },
  { name: "React Native", icon: Smartphone },
  { name: "SQL/NoSQL", icon: Database },
  { name: "Tailwind CSS", icon: PenTool },
];

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

export const consultingServices = [
    {
        title: "Optimización de Inventario",
        description: "Implementación de sistemas para el control de stock en tiempo real, organización por categorías y uso de códigos de barras para agilizar la gestión.",
        icon: ClipboardList
    },
    {
        title: "Análisis y Reportes de Negocio",
        description: "Análisis de rentabilidad por producto/categoría y creación de dashboards para visualizar ingresos, gastos y beneficios de forma clara.",
        icon: BarChart3
    },
    {
        title: "Procesos de Venta y Finanzas",
        description: "Estrategias para agilizar el registro de ventas, gestionar cuentas corrientes de clientes y llevar un control ordenado de gastos y compras.",
        icon: ShoppingCart
    },
    {
        title: "Digitalización y Catálogo Online",
        description: "Creación y personalización de catálogos web para expandir tu presencia digital y facilitar las ventas a través de canales online.",
        icon: Globe
    }
];

export const imageUrls = {
    perfil: '/profile.jpeg',
    clarity1: '/clarity1.png',
    clarity2: '/clarity2.png',
    kontalo1: '/kontalo1.png',
    kontalo2: '/kontalo2.png'
};

export const featuredProjects = [
    {
        id: "clarity",
        title: "Clarity - Finanzas Personales",
        description: "Aplicación integral de finanzas para un seguimiento claro de tus activos, transacciones y deudas, con sugerencias de IA.",
        tech: ["Next.js", "Firebase", "Genkit AI", "Tailwind CSS"],
        github: "https://github.com/edumoyano86/Clarity",
        live: "https://clarity86.netlify.app/",
        imageUrls: [imageUrls.clarity1, imageUrls.clarity2]
    },
    {
        id: "kontalo",
        title: "Kontalo - Gestión Minorista",
        description: "Plataforma de gestión para comercios minoristas con catálogo público, desarrollada para optimizar mis propios emprendimientos. El código fuente se mantiene en un repositorio privado por razones de seguridad, pero con gusto puedo otorgar acceso temporal para revisión.",
        tech: ["Next.js", "Firebase", "Tailwind CSS"],
        github: "#",
        live: "https://kontalo.com.ar",
        imageUrls: [imageUrls.kontalo1, imageUrls.kontalo2]
    }
];
