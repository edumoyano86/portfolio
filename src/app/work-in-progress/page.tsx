
"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Expand, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const wipProjects = [
    {
        id: "wip-1",
        title: "Integración de IA en Portfolio",
        description: "Explorando la integración de un chatbot o un asistente IA para interactuar con los visitantes y responder preguntas sobre mi perfil. Este proyecto representa la evolución constante del portfolio.",
        tech: ["Next.js", "Genkit AI", "TypeScript"],
        github: "#",
        progress: 35
    }
];

export default function WorkInProgressPage() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <Dialog>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        Lo que estoy construyendo
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Un vistazo a mis proyectos y experimentos actuales.
                    </p>
                </header>

                <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-8 lg:gap-12">
                    {wipProjects.map((project) => {
                        const projectImage = PlaceHolderImages.find(p => p.id === project.id);
                        return (
                            <Card key={project.id} className="overflow-hidden group flex flex-col transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-primary/20 hover:shadow-lg">
                                {projectImage && projectImage.imageUrls && projectImage.imageUrls.length > 0 && (
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
                                <div className="flex flex-col flex-grow p-6">
                                    <CardHeader className="p-0 mb-4">
                                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 flex-grow">
                                        <p className="text-muted-foreground mb-4">{project.description}</p>
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-muted-foreground">Progreso</span>
                                                <span className="text-sm font-bold text-primary">{project.progress}%</span>
                                            </div>
                                            <Progress value={project.progress} className="h-2" />
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(tech => (
                                                <Badge key={tech} variant="outline">{tech}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-0 pt-6 mt-auto">
                                        <Button variant="outline" asChild className="w-full" disabled={project.github === '#'}>
                                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2"/> Seguir en GitHub
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
