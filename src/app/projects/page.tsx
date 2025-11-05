
"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ExternalLink, Expand, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";


const projects = [
    {
        id: "kontalo",
        title: "Kontalo - Gestión Minorista",
        description: "Plataforma de gestión para comercios minoristas con catálogo público, desarrollada para optimizar mis propios emprendimientos. Creada con Firebase Studio.",
        tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
        github: "#",
        live: "https://kontalo.com.ar"
    },
    {
        id: "project-1",
        title: "E-commerce App",
        description: "Una aplicación de e-commerce completamente funcional con carrito de compras, gestión de productos y categorías. Construido con React y Firebase.",
        tech: ["React.js", "Firebase", "Context API", "Tailwind CSS"],
        github: "https://github.com/EduMoyano/moyano-react-js-pf",
        live: "https://moyano-react-js-pf.vercel.app/"
    },
    {
        id: "project-2",
        title: "Weather App",
        description: "Una aplicación del clima que muestra las condiciones actuales y el pronóstico para una ciudad, utilizando la API de OpenWeatherMap.",
        tech: ["JavaScript", "HTML", "CSS", "API"],
        github: "https://github.com/EduMoyano/app-clima-js",
        live: "https://app-clima-js.vercel.app/"
    },
    {
        id: "project-3",
        title: "Ecommerce Backend",
        description: "Backend para un e-commerce desarrollado con Node.js y Express, implementando arquitectura de capas, DTOs y persistencia en MongoDB.",
        tech: ["Node.js", "Express", "MongoDB", "Handlebars"],
        github: "https://github.com/EduMoyano/backend-moyano",
        live: "#"
    },
    {
        id: "wip-1",
        title: "Portfolio",
        description: "Este mismo portfolio, diseñado para mostrar mis habilidades y proyectos. ¡Siempre en constante mejora!",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        github: "#",
        live: "#"
    }
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
                        Aquí una selección de proyectos que he construido.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project) => {
                        const projectImage = PlaceHolderImages.find(p => p.id === project.id);
                        return (
                            <Card key={project.id} className="overflow-hidden group flex flex-col transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-primary/20 hover:shadow-lg">
                               {projectImage && projectImage.imageUrls && projectImage.imageUrls.length > 1 ? (
                                  <Carousel className="w-full relative">
                                    <CarouselContent>
                                      {projectImage.imageUrls.map((url, index) => (
                                        <CarouselItem key={index}>
                                           <DialogTrigger asChild onClick={() => setSelectedImg(url)}>
                                                <div className="relative group/item">
                                                    <Image
                                                        src={url}
                                                        alt={`${project.title} - Imagen ${index + 1}`}
                                                        width={600}
                                                        height={400}
                                                        className="w-full h-80 object-contain bg-muted/20 cursor-pointer transition-transform duration-300 group-hover/item:scale-105"
                                                        data-ai-hint={projectImage.imageHint}
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                                        <Expand className="w-12 h-12 text-white" />
                                                    </div>
                                                </div>
                                            </DialogTrigger>
                                        </CarouselItem>
                                      ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                                  </Carousel>
                                ) : projectImage && projectImage.imageUrls && projectImage.imageUrls.length === 1 && (
                                     <DialogTrigger asChild onClick={() => setSelectedImg(projectImage.imageUrls[0])}>
                                        <div className="relative group/item">
                                            <Image
                                                src={projectImage.imageUrls[0]}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-80 object-contain bg-muted/20 cursor-pointer transition-transform duration-300 group-hover/item:scale-105"
                                                data-ai-hint={projectImage.imageHint}
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                                <Expand className="w-12 h-12 text-white" />
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                )}
                                <div className="flex flex-col flex-grow">
                                    <CardHeader>
                                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(tech => (
                                            <Badge key={tech} variant="secondary">{tech}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="gap-4 mt-auto">
                                        <Button variant="outline" asChild className="flex-1" disabled={project.github === '#'}>
                                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2"/> GitHub
                                            </Link>
                                        </Button>
                                        <Button asChild className="flex-1" disabled={project.live === '#'}>
                                            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2"/> Ver Demo
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </div>
                            </Card>
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
