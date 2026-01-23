
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ProjectCarousel } from "@/components/project-carousel";

const imageUrls = {
    portfolio2: '/portfolio2.png'
};

export default function WorkInProgressPage() {
    
    const wipProjects = [
        {
            id: "wip-1",
            title: "Integración de IA en Portfolio",
            description: "Explorando la integración de un chatbot o un asistente IA para interactuar con los visitantes y responder preguntas sobre mi perfil. Este proyecto representa la evolución constante del portfolio.",
            tech: ["Next.js", "Genkit AI", "TypeScript"],
            github: "#",
            progress: 35,
            imageUrls: [imageUrls.portfolio2].filter(Boolean)
        }
    ];

    return (
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
                    return (
                        <Card key={project.id} className="overflow-hidden group flex flex-col transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-primary/20 hover:shadow-lg">
                            <ProjectCarousel 
                                imageUrls={project.imageUrls}
                                projectTitle={project.title}
                            />
                            <div className="flex flex-col flex-grow p-6">
                                <CardHeader className="p-0 mb-4">
                                    <CardTitle>{project.title}</CardTitle>
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
    );
}
