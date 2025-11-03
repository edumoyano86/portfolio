import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

const wipProjects = [
    {
        id: "wip-1",
        title: "Integración de IA en Portfolio",
        description: "Explorando la integración de un chatbot o un asistente IA para interactuar con los visitantes y responder preguntas sobre mi perfil.",
        tech: ["Next.js", "Genkit AI", "TypeScript"],
        github: "#",
        progress: 25
    },
    {
        id: "wip-2",
        title: "App Móvil con React Native",
        description: "Aprendiendo y desarrollando una aplicación móvil para expandir mis habilidades más allá del desarrollo web.",
        tech: ["React Native", "Firebase", "Expo"],
        github: "#",
        progress: 10
    }
];

export default function WorkInProgressPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                    Lo que estoy construyendo
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Un vistazo a mis proyectos y experimentos actuales.
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {wipProjects.map((project) => {
                    const projectImage = PlaceHolderImages.find(p => p.id === project.id);
                    return (
                        <Card key={project.id} className="overflow-hidden flex flex-col">
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
                                    <Button variant="outline" asChild className="w-full">
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
