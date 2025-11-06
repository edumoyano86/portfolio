
"use client";

import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Database, Layers, PenTool, Github, ExternalLink, Smartphone, Briefcase, Building, X, Expand, ShoppingCart, BarChart3, Globe, ClipboardList } from "lucide-react";
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
        id: "wip-1",
        title: "Portfolio Personal",
        description: "Este mismo portfolio, diseñado para mostrar mis habilidades y proyectos. ¡Siempre en constante mejora!",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        github: "#",
        live: "#"
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

const consultingServices = [
    {
        title: "Optimización de Inventario",
        description: "Implementación de sistemas para el control de stock en tiempo real, organización por categorías y uso de códigos de barras para agilizar la gestión.",
        icon: ClipboardList
    },
    {
        title: "Análisis y Reportes de Negocio",
        description: "Análisis de rentabilidad por producto/categoría y creación de dashboards para visualizar ingresos, gastos y beneficios de forma clara.",
        icon: BarChart3
    },
    {
        title: "Procesos de Venta y Finanzas",
        description: "Estrategias para agilizar el registro de ventas, gestionar cuentas corrientes de clientes y llevar un control ordenado de gastos y compras.",
        icon: ShoppingCart
    },
    {
        title: "Digitalización y Catálogo Online",
        description: "Creación y personalización de catálogos web para expandir tu presencia digital y facilitar las ventas a través de canales online.",
        icon: Globe
    }
];

type SelectedProjectImages = {
  images: string[];
  startIndex: number;
  title: string;
};

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<SelectedProjectImages | null>(null);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-24 md:mb-32">
        <div className="flex flex-col items-center">
            <Avatar className="w-36 h-36 mb-6 border-4 border-primary/30 shadow-lg shadow-primary/20">
              <AvatarImage src="/profile.jpeg" alt="Eduardo Moyano" className="object-cover"/>
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Eduardo Moyano
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
                Desarrollador Full Stack y Emprendedor. Convierto problemas de negocio en soluciones de software robustas, aplicando mi experiencia directa como comerciante.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                    <Link href="/projects">
                        Ver Mis Proyectos <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Hablemos</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-24 md:mb-32 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experiencia</h2>
          <p className="mt-4 text-lg text-muted-foreground">Mi viaje profesional y empresarial.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {experience.map((exp) => (
            <Card key={exp.role} className="flex flex-col text-left bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
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

      {/* Consulting Services Section */}
      <section id="services" className="mb-24 md:mb-32 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Servicios de Consultoría</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">Mi experiencia construyendo y utilizando Kontalo en mis propios negocios me ha dado un conocimiento profundo sobre los desafíos del comercio minorista. Ofrezco esta experiencia como un servicio para ayudarte a optimizar tu negocio.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultingServices.map((service) => (
            <Card key={service.title} className="text-center bg-card/50 border-border/50 hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="items-center">
                    <div className="p-4 bg-accent/10 rounded-full border border-accent/20 mb-2">
                        <service.icon className="h-8 w-8 text-accent"/>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
            <Button asChild size="lg" className="shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                    Hablemos de tu negocio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-24 md:mb-32 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Mis Herramientas</h2>
          <p className="mt-4 text-lg text-muted-foreground">Tecnologías con las que construyo soluciones.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="outline" className="px-6 py-3 text-lg border-primary/30 text-primary/80 transition-all hover:scale-105 hover:bg-primary/10 hover:text-primary hover:border-primary/80 cursor-default">
              <skill.icon className="mr-2 h-5 w-5" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Proyectos Destacados</h2>
          <p className="mt-4 text-lg text-muted-foreground">Un vistazo de lo que puedo construir.</p>
        </div>
        <Dialog>
            <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => {
                const projectImage = PlaceHolderImages.find(p => p.id === project.id);
                return (
                <Card key={project.id} className="overflow-hidden group transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-primary/20 hover:shadow-lg">
                    {projectImage && projectImage.imageUrls && projectImage.imageUrls.length > 0 && (
                    <Carousel className="w-full bg-muted/20">
                        <CarouselContent>
                        {projectImage.imageUrls.map((url, index) => (
                            <CarouselItem key={index}>
                                <DialogTrigger asChild onClick={() => setSelectedProject({ images: projectImage.imageUrls, startIndex: index, title: project.title })}>
                                    <div className="relative group/item cursor-pointer">
                                        <Image
                                            src={url}
                                            alt={`${project.title} - Imagen ${index + 1}`}
                                            width={600}
                                            height={400}
                                            className="w-full h-80 object-contain transition-transform duration-300 group-hover/item:scale-105"
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
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                    </Carousel>
                    )}
                    <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
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
            <DialogContent className="max-w-4xl h-auto bg-transparent border-none shadow-none flex items-center justify-center">
                {selectedProject && (
                    <div className="relative w-full">
                        <Carousel opts={{ loop: true, startIndex: selectedProject.startIndex }}>
                            <CarouselContent>
                                {selectedProject.images.map((url, index) => (
                                    <CarouselItem key={index}>
                                        <Image src={url} alt={`${selectedProject.title} - Imagen ampliada ${index + 1}`} width={1200} height={800} className="w-full h-full object-contain rounded-lg shadow-2xl" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                             {selectedProject.images.length > 1 && (
                                <>
                                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80" />
                                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80" />
                                </>
                            )}
                        </Carousel>
                         <DialogClose className="absolute -top-2 -right-2 bg-background rounded-full p-1 opacity-100 hover:scale-110 transition-transform z-10">
                            <X className="w-6 h-6"/>
                        </DialogClose>
                    </div>
                )}
                 <DialogHeader className="sr-only">
                    <DialogTitle>Imagen Ampliada del Proyecto</DialogTitle>
                    <DialogDescription>
                        Contenido de la imagen del proyecto en un tamaño más grande para mejor visualización.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

        <div className="text-center mt-16">
          <Button variant="link" asChild className="text-lg">
            <Link href="/projects">Ver todos los proyectos <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

    