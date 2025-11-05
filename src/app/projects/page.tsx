
"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ExternalLink, Expand, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const projects = [
    {
        id: "kontalo",
        title: "Kontalo - Gestión Minorista",
        description: "Plataforma SaaS (Software as a Service) diseñada para simplificar la gestión de comercios minoristas. Permite a los dueños de negocios administrar su inventario, gestionar un catálogo de productos público y optimizar sus operaciones diarias. El proyecto fue desarrollado utilizando Next.js para el frontend, Firebase (Firestore y Auth) para el backend y la base de datos, y Tailwind CSS para un diseño moderno y responsive. Creada con Firebase Studio.",
        tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        github: "#",
        live: "https://kontalo.com.ar"
    },
    {
        id: "project-1",
        title: "Tienda Online de E-commerce",
        description: "Una aplicación de e-commerce completamente funcional construida con React. La plataforma incluye características esenciales como un carrito de compras interactivo, navegación por categorías de productos y una interfaz de usuario clara para la gestión de productos. Se utilizó Firebase como backend para la base de datos de productos y la autenticación de usuarios, y Context API de React para una gestión de estado global eficiente.",
        tech: ["React.js", "Firebase", "Context API", "Tailwind CSS"],
        github: "https://github.com/EduMoyano/moyano-react-js-pf",
        live: "https://moyano-react-js-pf.vercel.app/"
    },
    {
        id: "project-2",
        title: "Aplicación del Clima",
        description: "Una aplicación web ligera y rápida que proporciona información meteorológica en tiempo real. Los usuarios pueden buscar cualquier ciudad del mundo y obtener las condiciones climáticas actuales, así como un pronóstico simple. El proyecto fue construido con JavaScript puro y consume datos de la API de OpenWeatherMap. Es un ejemplo de manipulación del DOM y consumo de APIs externas.",
        tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "API Rest"],
        github: "https://github.com/EduMoyano/app-clima-js",
        live: "https://app-clima-js.vercel.app/"
    },
    {
        id: "project-3",
        title: "Backend para E-commerce",
        description: "El motor detrás de una tienda online, desarrollado íntegramente en Node.js y Express. Este backend implementa una arquitectura por capas para una mejor organización y escalabilidad, utiliza DTOs (Data Transfer Objects) para la validación de datos y se conecta a una base de datos MongoDB para la persistencia. Aunque no tiene una demo 'en vivo' (ya que es un servidor), el código demuestra mi habilidad para construir APIs RESTful robustas.",
        tech: ["Node.js", "Express", "MongoDB", "Handlebars", "Arquitectura de Capas"],
        github: "https://github.com/EduMoyano/backend-moyano",
        live: "#"
    },
];

export default function ProjectsPage() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <Dialog>
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
                    {projects.map((project, index) => {
                        const projectImage = PlaceHolderImages.find(p => p.id === project.id);
                        const imageUrl = projectImage?.imageUrls?.[0];

                        return (
                            <div key={project.id} className="grid lg:grid-cols-2 gap-12 items-center">
                                <DialogTrigger asChild onClick={() => imageUrl && setSelectedImg(imageUrl)}>
                                    <div className="relative group/item cursor-pointer">
                                        {imageUrl && (
                                            <Image
                                                src={imageUrl}
                                                alt={project.title}
                                                width={1200}
                                                height={800}
                                                className="rounded-lg object-contain w-full h-auto bg-muted/20 border border-border/50 transition-transform duration-300 group-hover/item:scale-105"
                                                data-ai-hint={projectImage?.imageHint}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-lg">
                                            <Expand className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                </DialogTrigger>

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
                        );
                    })}
                </div>
            </div>

            <DialogContent className="max-w-4xl h-auto bg-transparent border-none shadow-none">
                <DialogHeader>
                    <DialogTitle className="sr-only">Imagen Ampliada del Proyecto</DialogTitle>
                    <DialogDescription className="sr-only">
                        Contenido de la imagen del proyecto en un tamaño más grande para mejor visualización.
                    </DialogDescription>
                </DialogHeader>
                {selectedImg && (
                    <div className="relative">
                        <Image src={selectedImg} alt="Imagen ampliada" width={1200} height={800} className="w-full h-full object-contain rounded-lg shadow-2xl" />
                         <DialogClose className="absolute -top-2 -right-2 bg-background rounded-full p-1 opacity-100 hover:scale-110 transition-transform">
                            <X className="w-6 h-6"/>
                        </DialogClose>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
