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
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with a modern UI, product management, and payment integration.",
        tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
        github: "#",
        live: "#"
    },
    {
        id: "project-2",
        title: "Task Management App",
        description: "A collaborative task management tool to help teams stay organized and productive. Features include boards, lists, and cards.",
        tech: ["React", "Firebase", "Tailwind CSS", "React-dnd"],
        github: "#",
        live: "#"
    },
    {
        id: "project-3",
        title: "Data Visualization Dashboard",
        description: "An analytics dashboard for visualizing complex datasets with interactive charts and filters.",
        tech: ["D3.js", "React", "Node.js", "Express"],
        github: "#",
        live: "#"
    },
    {
        id: "wip-1",
        title: "Personal Blog",
        description: "A JAMstack blog built with a headless CMS for content management and server-side generation for performance.",
        tech: ["Next.js", "GraphQL", "Contentful", "Vercel"],
        github: "#",
        live: "#"
    }
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                    My Work
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Here's a selection of projects I've built.
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
                                    <Button asChild className="flex-1">
                                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2"/> Live Demo
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
