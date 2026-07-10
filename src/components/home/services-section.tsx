import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { consultingServices } from "@/lib/data";

export function ServicesSection() {
  return (
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
  );
}
