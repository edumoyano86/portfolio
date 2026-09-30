import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { skillCategories } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Habilidades & Herramientas</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Capacidades técnicas y operativas con las que aporto valor inmediato a proyectos y equipos de trabajo remoto.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((group) => {
          const GroupIcon = group.icon;
          const isAccent = group.accentColor === "accent";

          return (
            <Card 
              key={group.category} 
              className={`flex flex-col bg-card/50 border-border/50 transition-all duration-300 ${
                isAccent 
                  ? "hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg" 
                  : "hover:border-primary/50 hover:shadow-primary/10 hover:shadow-lg"
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2.5 rounded-lg border ${
                    isAccent 
                      ? "bg-accent/10 border-accent/20 text-accent" 
                      : "bg-primary/10 border-primary/20 text-primary"
                  }`}>
                    <GroupIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{group.category}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm mt-0.5">
                      {group.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2 flex-grow">
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <Badge 
                        key={skill.name} 
                        variant="outline" 
                        className={`px-3.5 py-2 text-sm font-medium transition-all hover:scale-105 cursor-default ${
                          isAccent
                            ? "border-accent/30 text-accent/90 hover:bg-accent/10 hover:text-accent hover:border-accent/80"
                            : "border-primary/30 text-primary/90 hover:bg-primary/10 hover:text-primary hover:border-primary/80"
                        }`}
                      >
                        <SkillIcon className="mr-2 h-4 w-4 shrink-0" />
                        <span>{skill.name}</span>
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

