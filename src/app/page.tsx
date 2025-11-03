import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Database, Layers, PenTool, Github, ExternalLink, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
    id: "project-1",
    title: "E-commerce App",
    description: "Una aplicación de e-commerce completamente funcional con carrito de compras, gestión de productos y categorías.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/EduMoyano/moyano-react-js-pf",
    live: "https://moyano-react-js-pf.vercel.app/"
  },
  {
    id: "project-2",
    title: "Weather App",
    description: "Una aplicación del clima que muestra las condiciones actuales y el pronóstico utilizando una API externa.",
    tech: ["JavaScript", "HTML", "CSS", "API"],
    github: "https://github.com/EduMoyano/app-clima-js",
    live: "https://app-clima-js.vercel.app/"
  }
];

export default function Home() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile');
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-24 md:mb-32">
        <div className="flex flex-col items-center">
            {profileImage && (
              <Avatar className="w-32 h-32 mb-6 border-4 border-primary/10 shadow-lg">
                <AvatarImage src={profileImage.imageUrl} alt="Eduardo Moyano" data-ai-hint={profileImage.imageHint} />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
            )}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">
                Eduardo Moyano
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
                Desarrollador Full Stack con más de 4 años de experiencia, apasionado por crear soluciones de calidad, interfaces intuitivas y un rendimiento óptimo.
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

      {/* Skills Section */}
      <section id="skills" className="mb-24 md:mb-32 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mis Herramientas</h2>
          <p className="mt-4 text-lg text-muted-foreground">Tecnologías con las que me encanta trabajar.</p>
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
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                {projectImage && (
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={projectImage.imageHint}
                  />
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
                  <Button variant="outline" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2"/> GitHub
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2"/> Ver Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button variant="link" asChild className="text-accent-foreground text-lg hover:text-accent-foreground/80">
            <Link href="/projects">Ver todos los proyectos <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
