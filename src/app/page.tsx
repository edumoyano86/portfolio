
"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Database, Layers, PenTool, Github, ExternalLink, Smartphone, Briefcase, Building, X, Expand } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const skills = [
  { name: "React.js", icon: Layers },
  { name: "Node.js", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "Express.js", icon: Code },
  { name: "React Native", icon: Smartphone },
  { name: "SQL/NoSQL", icon: Database },
  { name: "Tailwind CSS", icon: PenTool },
];

const featuredProjects = [
    {
        id: "kontalo",
        title: "Kontalo - Gestión Minorista",
        description: "Plataforma de gestión para comercios minoristas con catálogo público, desarrollada para optimizar mis propios emprendimientos.",
        tech: ["Next.js", "Firebase", "Tailwind CSS"],
        github: "#",
        live: "https://kontalo.com.ar"
    },
    {
        id: "project-1",
        title: "E-commerce App",
        description: "Una aplicación de e-commerce completamente funcional con carrito de compras, gestión de productos y categorías.",
        tech: ["React.js", "Firebase", "Tailwind CSS"],
        github: "https://github.com/EduMoyano/moyano-react-js-pf",
        live: "https://moyano-react-js-pf.vercel.app/"
    }
];

const experience = [
    {
        role: "Desarrollador full stack",
        company: "Profesional independiente",
        period: "ene. 2020 - actualidad",
        description: "Desarrollo de proyectos propios (como kontalo.com.ar) y trabajos freelance. Construcción de aplicaciones web completas (full stack) con un enfoque en la resolución de problemas de negocio y la creación de herramientas eficientes para el mundo real.",
        icon: Briefcase
    },
    {
        role: "Propietario",
        company: "Emprendimientos propios",
        period: "ago. 2019 - actualidad",
        description: "Fundación y gestión integral de 'Xime Joyería' y 'J&L Librería'. Responsable de la estrategia de negocio, ventas (online y presencial), gestión de inventario y desarrollo de catálogos digitales. Esta experiencia práctica me dio una visión profunda de las necesidades del comercio minorista, impulsando la creación de soluciones de software a medida.",
        icon: Building
    }
]

export default function Home() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-24 md:mb-32">
        <div className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-6 border-4 border-primary/20 shadow-lg">
                <AvatarImage src="/profile.jpeg" alt="Eduardo Moyano" className="object-cover" />
                <AvatarFallback>EM</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">
                Eduardo Moyano
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
                Desarrollador Full Stack y Emprendedor. Convierto problemas de negocio en soluciones de software robustas, aplicando mi experiencia directa como comerciante.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/projects">
                        Ver Mis Proyectos <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/studies">Mi Trayectoria</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-24 md:mb-32 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experiencia</h2>
          <p className="mt-4 text-lg text-muted-foreground">Mi viaje profesional y empresarial.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {experience.map((exp) => (
            <Card key={exp.role} className="flex flex-col text-left">
              <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <exp.icon className="h-6 w-6 text-primary"/>
                    </div>
                    <div>
                        <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                        <p className="text-sm text-muted-foreground font-semibold">{exp.company} | {exp.period}</p>
                    </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-24 md:mb-32 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mis Herramientas</h2>
          <p className="mt-4 text-lg text-muted-foreground">Tecnologías con las que construyo soluciones.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="px-6 py-3 text-lg transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground cursor-default">
              <skill.icon className="mr-2 h-5 w-5" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Proyectos Destacados</h2>
          <p className="mt-4 text-lg text-muted-foreground">Un vistazo de lo que puedo construir.</p>
        </div>
        <Dialog>
            <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => {
                const projectImage = PlaceHolderImages.find(p => p.id === project.id);
                return (
                <Card key={project.id} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                    {projectImage && projectImage.imageUrls && projectImage.imageUrls.length > 1 ? (
                    <Carousel className="w-full bg-muted/20">
                        <CarouselContent>
                        {projectImage.imageUrls.map((url, index) => (
                            <CarouselItem key={index}>
                                <DialogTrigger asChild onClick={() => setSelectedImg(url)}>
                                    <div className="relative group">
                                        <Image
                                            src={url}
                                            alt={`${project.title} - Imagen ${index + 1}`}
                                            width={600}
                                            height={400}
                                            className="w-full h-80 object-contain cursor-pointer"
                                            data-ai-hint={projectImage.imageHint}
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Expand className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                </DialogTrigger>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                    </Carousel>
                    ) : projectImage && projectImage.imageUrls && projectImage.imageUrls.length === 1 && (
                        <DialogTrigger asChild onClick={() => setSelectedImg(projectImage.imageUrls[0])}>
                            <div className="relative group">
                                <Image
                                    src={projectImage.imageUrls[0]}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-80 object-contain bg-muted/20 cursor-pointer"
                                    data-ai-hint={projectImage.imageHint}
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Expand className="w-12 h-12 text-white" />
                                </div>
                            </div>
                        </DialogTrigger>
                    )}
                    <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                    </div>
                    </CardContent>
                    <CardFooter className="gap-2">
                    <Button variant="outline" asChild disabled={project.github === '#'}>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2"/> GitHub
                        </Link>
                    </Button>
                    <Button asChild disabled={project.live === '#'}>
                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2"/> Ver Demo
                        </Link>
                    </Button>
                    </CardFooter>
                </Card>
                );
            })}
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

        <div className="text-center mt-12">
          <Button variant="link" asChild className="text-lg">
            <Link href="/projects">Ver todos los proyectos <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
