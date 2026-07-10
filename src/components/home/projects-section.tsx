import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { ProjectCarousel } from "@/components/project-carousel";
import { featuredProjects } from "@/lib/data";

export function ProjectsSection() {
  return (
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
  );
}
