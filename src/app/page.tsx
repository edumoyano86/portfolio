import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Database, Layers, PenTool, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const skills = [
  { name: "React", icon: Layers },
  { name: "Next.js", icon: Layers },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Code },
  { name: "Firebase", icon: Database },
  { name: "Tailwind CSS", icon: PenTool },
];

const featuredProjects = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with a modern UI, product management, and payment integration.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    github: "#",
    live: "#"
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A collaborative task management tool to help teams stay organized and productive.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#"
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
                <AvatarImage src={profileImage.imageUrl} alt="Edu Moyano" data-ai-hint={profileImage.imageHint} />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
            )}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">
                Edu Moyano
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
                A passionate developer creating modern, responsive, and user-friendly web applications. I turn ideas into reality with code.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/projects">
                        View My Work <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/studies">My Journey</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-24 md:mb-32 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Toolbox</h2>
          <p className="mt-4 text-lg text-muted-foreground">Technologies I love to work with.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A glimpse of what I can build.</p>
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
                      <ExternalLink className="mr-2"/> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button variant="link" asChild className="text-accent-foreground text-lg hover:text-accent-foreground/80">
            <Link href="/projects">See all projects <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
