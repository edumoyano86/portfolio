import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projects = [
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
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
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
                        <Card key={project.id} className="overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
                            {projectImage && (
                            <Image
                                src={projectImage.imageUrl}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-56 object-cover"
                                data-ai-hint={projectImage.imageHint}
                            />
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
                                    <Button variant="outline" asChild className="flex-1">
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
    );
}
