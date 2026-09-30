
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ExternalLink, Lock, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectCarousel } from "@/components/project-carousel";

const imageUrls = {
    clarity1: '/clarity1.png',
    clarity2: '/clarity2.png',
    kontalo1: '/kontalo1.png',
    kontalo2: '/kontalo2.png',
    portfolio1: '/portfolio1.png',
    portfolio2: '/portfolio2.png'
};

interface ProjectItem {
    id: string;
    title: string;
    tagline?: string;
    statusBadge?: string;
    description: string;
    highlights?: string[];
    tech: string[];
    github: string;
    live: string;
    isPrivate?: boolean;
    repoNotice?: string;
    liveLabel?: string;
    imageUrls: string[];
}

export default function ProjectsPage() {
    const projects: ProjectItem[] = [
        {
            id: "kontalo",
            title: "Kontaló — Gestión Comercial & POS Cloud",
            tagline: "SaaS integral en producción para comercios minoristas, distribuidoras y negocios multirubro.",
            statusBadge: "SaaS en Producción",
            description: "Plataforma en la nube y aplicación instalable (PWA) de alto rendimiento desarrollada para optimizar de punta a punta la operación comercial. Surgida para resolver las necesidades reales de mis propios comercios físicos y online, Kontaló centraliza ventas en mostrador, control de caja chica, stock en tiempo real, inteligencia artificial predictiva y facturación impositiva para contadores.",
            highlights: [
                "Punto de Venta (POS) ultrarrápido: atajos de teclado (F2, F4), escáner de código de barras físico o por cámara, cobros combinados e impresión térmica (80mm) o envío a WhatsApp con 1 clic.",
                "Arqueo y Cierre de Turnos de Caja Chica: apertura con fondo inicial, registro de egresos operativos y arqueo ciego/guiado para detectar sobrantes o faltantes al centavo.",
                "Gestión de Stock y Ajustes Masivos: actualización de precios por categoría o porcentaje con redondeo inteligente para mostrador ($10, $50, $100), mermas y carga masiva en Excel.",
                "Inteligencia Artificial y Métricas: sugerencia de márgenes de ganancia (+30% a +100%) según rubro, consejos predictivos para rotar productos sin ventas hace +45 días (liberando capital inmovilizado) y redactor publicitario comercial.",
                "Exportador para el Contador (Libro IVA / AFIP): planilla mensual en 1 clic lista para enviar por Excel o WhatsApp, con modo Monotributo y Responsable Inscripto (Neto gravado, Débito/Crédito fiscal).",
                "Canales Online, PWA y Multi-Sucursal: catálogo web autogestionable con pedidos a WhatsApp, tienda online con Mercado Pago, PWA instalable en celular/PC y soporte para múltiples locales con roles y permisos seguros."
            ],
            tech: ["Next.js", "Firebase (Firestore & Auth)", "TypeScript", "Tailwind CSS", "PWA", "IA Predictiva", "Mercado Pago API", "Shadcn UI"],
            github: "#",
            live: "https://kontalo.com.ar",
            isPrivate: true,
            repoNotice: "Repositorio privado comercial. Acceso temporal a código fuente disponible para reclutadores bajo solicitud.",
            liveLabel: "Visitar kontalo.com.ar",
            imageUrls: [imageUrls.kontalo1, imageUrls.kontalo2]
        },
        {
            id: "clarity",
            title: "Clarity — Tus Finanzas Claras (v2.0)",
            tagline: "Control patrimonial, desendeudamiento sistemático, inversiones multiactivos e IA predictiva.",
            statusBadge: "v2.0 en Producción",
            description: "Plataforma integral de gestión financiera personal y desendeudamiento sistemático desarrollada con Next.js 15, React 19 y Firebase Firestore. Diseñada bajo principios de finanzas conductuales, visibilidad total y soberanía de datos, implementa la regla 50/30/20, seguimiento de criptomonedas y acciones en tiempo real con APIs de mercado, historial de abonos con reversión segura y análisis predictivo mediante Genkit AI.",
            highlights: [
                "Dashboard Inteligente & Regla 50/30/20: KPIs de balance, flujo de fondos y distribución de gastos con barras de progreso tricolor (50% necesidades/deudas, 30% deseos, 20% ahorro/inversión).",
                "Alertas Preventivas de Deudas: monitoreo automático con badges de urgencia si una cuenta vence en 3 a 5 días o si ya está vencida, priorizando las cuentas más críticas.",
                "Desendeudamiento Sistemático & Reversión Segura: ordenamiento automático (deudas pendientes al inicio, saldadas al final), historial desplegable de abonos con porcentaje cubierto y botón de anulación que recalcula el saldo pendiente de forma sincronizada.",
                "Portafolio de Inversiones con Cotizaciones en Vivo: seguimiento de criptomonedas (CoinGecko API) y acciones/CEDEARs (Finnhub API) con alternador instantáneo ARS/USD, registro de operaciones y cálculo de rendimientos.",
                "Inteligencia Artificial con Genkit AI: flujos predictivos de sugerencias de ahorro personalizadas (savings-suggestions) y detección temprana de riesgo de sobregiro (budget-alerts).",
                "Lista de Deseos y Consumo Consciente: clasificación por prioridad (Alta, Media, Baja) integrada con el 30% de la regla 50/30/20 para evitar compras impulsivas y calcular ahorro acumulado.",
                "Soberanía de Datos & Exportación a Excel: descarga en 1 clic de reportes en CSV con cabecera BOM UTF-8 y delimitador argentino (;) para apertura nativa y sin errores de caracteres en Microsoft Excel y Google Sheets.",
                "Agenda Financiera & Notificador Activo: calendario con react-day-picker v9 y sistema de alertas persistentes (Toast) que dispara avisos de compromisos y vencimientos del día al iniciar sesión."
            ],
            tech: ["Next.js 15", "React 19", "Firebase (Firestore & Auth)", "Genkit AI", "TypeScript", "CoinGecko API", "Finnhub API", "Tailwind CSS", "Shadcn UI"],
            github: "https://github.com/edumoyano86/Clarity",
            live: "https://clarity86.netlify.app/",
            isPrivate: false,
            liveLabel: "Ver Demo en Vivo (clarity86.netlify.app)",
            imageUrls: [imageUrls.clarity1, imageUrls.clarity2]
        },

        {
            id: "wip-1",
            title: "Portfolio Personal",
            tagline: "Arquitectura moderna orientada a rendimiento y usabilidad.",
            statusBadge: "En Constante Evolución",
            description: "Este mismo portfolio, diseñado para mostrar mis habilidades en desarrollo de software y servicios de gestión remota. Fue construido desde cero utilizando Next.js, TypeScript y Tailwind CSS, con componentes de Shadcn UI para una interfaz limpia, accesible y moderna.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
            github: "#",
            live: "/",
            isPrivate: true,
            repoNotice: "Código fuente disponible en GitHub (consultar repositorio).",
            liveLabel: "Página Principal",
            imageUrls: [imageUrls.portfolio1, imageUrls.portfolio2]
        },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Mis Proyectos
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Soluciones tecnológicas en producción y herramientas diseñadas para resolver desafíos reales de negocio y productividad.
                </p>
            </header>

            <div className="space-y-24">
                {projects.map((project, index) => (
                    <div key={project.id} className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className={`relative group/item cursor-pointer overflow-hidden rounded-lg ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                            <ProjectCarousel
                                imageUrls={project.imageUrls}
                                projectTitle={project.title}
                            />
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h2 className="text-3xl font-bold">{project.title}</h2>
                                {project.statusBadge && (
                                    <Badge variant="outline" className="border-primary/40 text-primary text-xs">
                                        {project.statusBadge}
                                    </Badge>
                                )}
                            </div>

                            {project.tagline && (
                                <p className="text-sm font-medium text-accent mb-3">{project.tagline}</p>
                            )}

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(tech => (
                                    <Badge key={tech} variant="secondary">{tech}</Badge>
                                ))}
                            </div>

                            <p className="text-muted-foreground text-base mb-6 leading-relaxed">{project.description}</p>

                            {project.highlights && project.highlights.length > 0 && (
                                <div className="mb-6 p-4 rounded-lg bg-card/60 border border-border/50">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                        Características y Módulos Clave:
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {project.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="text-sm text-foreground/90 flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4">
                                {project.isPrivate ? (
                                    <Button 
                                        variant="outline" 
                                        className="flex-1 text-muted-foreground hover:text-foreground cursor-default"
                                        title={project.repoNotice || "Repositorio privado comercial"}
                                    >
                                        <Lock className="mr-2 h-4 w-4 text-amber-500" /> Repo Privado
                                    </Button>
                                ) : (
                                    <Button variant="outline" asChild className="flex-1" disabled={project.github === '#'}>
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> GitHub
                                        </Link>
                                    </Button>
                                )}

                                <Button asChild className="flex-1" disabled={project.live === '#'}>
                                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" /> {project.liveLabel || 'Ver Demo'}
                                    </Link>
                                </Button>
                            </div>

                            {project.repoNotice && (
                                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1.5">
                                    <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                    <span>{project.repoNotice}</span>
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

