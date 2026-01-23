
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
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

export default function ProjectsPage() {
    const projects = [
        {
            id: "clarity",
            title: "Clarity - Finanzas Personales",
            description: "Clarity es una aplicación web integral de finanzas personales diseñada para dar una visión clara y completa de tu salud financiera. Combina herramientas de seguimiento de gastos e ingresos, gestión de un portafolio de inversiones (acciones y criptomonedas), control de deudas, agenda de citas y un bloc de notas. Incluye un asistente con IA que ofrece sugerencias de ahorro personalizadas.",
            tech: ["Next.js", "Firebase", "Genkit AI", "TypeScript", "Tailwind CSS"],
            github: "https://github.com/edumoyano86/Clarity",
            live: "https://clarity86.netlify.app/",
            imageUrls: [imageUrls.clarity1, imageUrls.clarity2]
        },
        {
            id: "kontalo",
            title: "Kontalo - Gestión Minorista",
            description: "Plataforma SaaS (Software as a Service) diseñada para simplificar la gestión de comercios minoristas. Permite a los dueños de negocios administrar su inventario, gestionar un catálogo de productos público y optimizar sus operaciones diarias. El proyecto fue desarrollado utilizando Next.js para el frontend, Firebase (Firestore y Auth) para el backend y la base de datos, y Tailwind CSS para un diseño moderno y responsive. Creada con Firebase Studio. El código fuente se mantiene en un repositorio privado por razones de seguridad, pero con gusto puedo otorgar acceso temporal para revisión.",
            tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS", "Shadcn UI"],
            github: "#",
            live: "https://kontalo.com.ar",
            imageUrls: [imageUrls.kontalo1, imageUrls.kontalo2]
        },
        {
            id: "wip-1",
            title: "Portfolio Personal",
            description: "Este mismo portfolio, diseñado para mostrar mis habilidades y proyectos. Fue construido desde cero utilizando Next.js, TypeScript y Tailwind CSS, con componentes de Shadcn UI para una interfaz limpia y moderna. El objetivo es que sea una carta de presentación interactiva y un reflejo de mi trabajo. ¡Siempre en constante mejora!",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
            github: "#",
            live: "/",
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
                    Una selección de proyectos que demuestran mis habilidades en desarrollo full-stack.
                </p>
            </header>

            <div className="space-y-24">
                {projects.map((project, index) => (
                    <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center`}>
                        <div className={`relative group/item cursor-pointer overflow-hidden rounded-lg ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                            <ProjectCarousel
                                imageUrls={project.imageUrls}
                                projectTitle={project.title}
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(tech => (
                                    <Badge key={tech} variant="secondary">{tech}</Badge>
                                ))}
                            </div>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{project.description}</p>
                            <div className="flex gap-4">
                                <Button variant="outline" asChild className="flex-1" disabled={project.github === '#'}>
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2" /> GitHub
                                    </Link>
                                </Button>
                                <Button asChild className="flex-1" disabled={project.live === '#'}>
                                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2" /> Ver Demo
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
