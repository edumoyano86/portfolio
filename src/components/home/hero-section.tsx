import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Code, ClipboardList, Sparkles } from "lucide-react";
import { imageUrls } from "@/lib/data";
import { CVDialog } from "@/components/cv-dialog";

export function HeroSection() {
  return (
    <section className="text-center mb-24 md:mb-32">
      <div className="flex flex-col items-center">
        <Avatar className="w-36 h-36 mb-6 border-4 border-primary/30 shadow-lg shadow-primary/20 ring-4 ring-background">
          <AvatarImage src={imageUrls.perfil} alt="Eduardo Moyano" className="object-cover" />
          <AvatarFallback>EM</AvatarFallback>
        </Avatar>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-medium text-primary mb-6 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Desarrollo Web Full Stack & Gestión Operativa / Administrativa Remota</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent">
          Eduardo Moyano
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          Combino el desarrollo de software moderno (<span className="text-foreground font-medium">Next.js, TypeScript, Firebase, IA</span>) con sólida experiencia en gestión comercial y operativa: <span className="text-foreground font-medium">atención al cliente, carga de productos (data entry), control de inventarios y finanzas de caja</span>. Listo para sumarme a proyectos y equipos remotos tanto en roles técnicos como operativos.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-8">
          <Badge variant="secondary" className="px-3 py-1 text-xs sm:text-sm flex items-center gap-1.5">
            <Code className="h-3.5 w-3.5 text-primary" /> Desarrollo Web & SaaS
          </Badge>
          <Badge variant="secondary" className="px-3 py-1 text-xs sm:text-sm flex items-center gap-1.5">
            <ClipboardList className="h-3.5 w-3.5 text-accent" /> Data Entry & Catálogos
          </Badge>
          <Badge variant="secondary" className="px-3 py-1 text-xs sm:text-sm flex items-center gap-1.5">
            💬 Atención al Cliente & WhatsApp
          </Badge>
          <Badge variant="secondary" className="px-3 py-1 text-xs sm:text-sm flex items-center gap-1.5">
            📊 Control de Caja & Stock
          </Badge>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
            <Link href="/projects">
              Ver Mis Proyectos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <CVDialog variant="outline" size="lg" triggerText="Descargar CV" />
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Hablemos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


