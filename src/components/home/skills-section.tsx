import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
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
  );
}
