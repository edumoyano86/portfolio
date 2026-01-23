
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Database, Layers, PenTool, Github, ExternalLink, Smartphone, Briefcase, Building, Expand, ShoppingCart, BarChart3, Globe, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCarousel } from "@/components/project-carousel";

const skills = [
  { name: "React.js", icon: Layers },
  { name: "Node.js", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "Express.js", icon: Code },
  { name: "React Native", icon: Smartphone },
  { name: "SQL/NoSQL", icon: Database },
  { name: "Tailwind CSS", icon: PenTool },
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

const imageUrls = {
    perfil: '/profile.jpeg',
    clarity1: '/clarity1.png',
    clarity2: '/clarity2.png',
    kontalo1: '/kontalo1.png',
    kontalo2: '/kontalo2.png'
};

export default function Home() {
  
    const featuredProjects = [
        {
            id: "clarity",
            title: "Clarity - Finanzas Personales",
            description: "Aplicación integral de finanzas para un seguimiento claro de tus activos, transacciones y deudas, con sugerencias de IA.",
            tech: ["Next.js", "Firebase", "Genkit AI", "Tailwind CSS"],
            github: "https://github.com/edumoyano86/Clarity",
            live: "https://clarity86.netlify.app/",
            imageUrls: [imageUrls.clarity1, imageUrls.clarity2]
        },
        {
            id: "kontalo",
            title: "Kontalo - Gestión Minorista",
            description: "Plataforma de gestión para comercios minoristas con catálogo público, desarrollada para optimizar mis propios emprendimientos. El código fuente se mantiene en un repositorio privado por razones de seguridad, pero con gusto puedo otorgar acceso temporal para revisión.",
            tech: ["Next.js", "Firebase", "Tailwind CSS"],
            github: "#",
            live: "https://kontalo.com.ar",
            imageUrls: [imageUrls.kontalo1, imageUrls.kontalo2]
        }
    ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Section */}
        <section className="text-center mb-24 md:mb-32">
          <div className="flex flex-col items-center">

                <Avatar className="w-36 h-36 mb-6 border-4 border-primary/30 shadow-lg shadow-primary/20">
                  <AvatarImage src={imageUrls.perfil} alt="Eduardo Moyano" />
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
                          <CardTitle>{exp.role}</CardTitle>
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
                      <CardTitle>{service.title}</CardTitle>
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
          <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden group flex flex-col transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-primary/20 hover:shadow-lg bg-card/50 border-border/50">
                    
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
                              <div className="flex flex-wrap gap-2">
                                  {project.tech.map(tech => (
                                  <Badge key={tech} variant="secondary">{tech}</Badge>
                                  ))}
                              </div>
                          </CardContent>
                          <CardFooter className="p-0 pt-6 gap-2">
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
                      </div>
                  </Card>
              ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="link" asChild className="text-lg">
              <Link href="/projects">Ver todos los proyectos <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
