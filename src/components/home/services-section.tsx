import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          ¿En qué puedo ayudarte? / Servicios Remotos
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
          Combino soporte operativo ágil con desarrollo tecnológico. Disponible para sumarme a tu equipo de trabajo remoto o para resolver necesidades puntuales de tu negocio.
        </p>
      </div>

      <div className="space-y-16">
        {serviceCategories.map((group) => {
          const GroupIcon = group.icon;
          const isAccent = group.accentColor === "accent";

          return (
            <div key={group.category} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg border ${
                    isAccent 
                      ? "bg-accent/10 border-accent/20 text-accent" 
                      : "bg-primary/10 border-primary/20 text-primary"
                  }`}>
                    <GroupIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{group.category}</h3>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {group.services.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <Card 
                      key={service.title} 
                      className={`flex flex-col bg-card/50 border-border/50 transition-all duration-300 ${
                        isAccent
                          ? "hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg"
                          : "hover:border-primary/50 hover:shadow-primary/10 hover:shadow-lg"
                      }`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className={`p-3 rounded-lg border ${
                            isAccent 
                              ? "bg-accent/10 border-accent/20 text-accent" 
                              : "bg-primary/10 border-primary/20 text-primary"
                          }`}>
                            <ServiceIcon className="h-6 w-6" />
                          </div>
                          {service.badge && (
                            <Badge variant="outline" className="text-xs">
                              {service.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl leading-snug">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
          <Link href="/contact">
            Hablemos de lo que necesitas <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

