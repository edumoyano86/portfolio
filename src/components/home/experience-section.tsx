import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
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
  );
}
