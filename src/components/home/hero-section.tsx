import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { imageUrls } from "@/lib/data";

export function HeroSection() {
  return (
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
          Desarrollador Web Freelance y Emprendedor. Combino mi pasión por la informática con una sólida experiencia en ventas, administración y economía. Ofrezco soluciones tecnológicas y servicios administrativos remotos para impulsar y organizar tu negocio.
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
  );
}
