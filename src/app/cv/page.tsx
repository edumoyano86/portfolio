'use client';

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Printer, 
  Mail, 
  MapPin, 
  Globe, 
  Code, 
  ClipboardList, 
  Calendar, 
  Building, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

function CVContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "ops" ? "ops" : "dev";
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "ops" || tabParam === "dev") {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-3">
          Curriculum Vitae
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Selecciona el perfil que deseas consultar o descarga el archivo PDF correspondiente.
        </p>
      </div>

      {/* Tabs Switcher */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 w-full max-w-md h-12 p-1 bg-muted/60 border border-border/60">
            <TabsTrigger value="dev" className="flex items-center gap-2 text-sm font-semibold">
              <Code className="h-4 w-4" />
              <span>Desarrollador Web</span>
            </TabsTrigger>
            <TabsTrigger value="ops" className="flex items-center gap-2 text-sm font-semibold">
              <ClipboardList className="h-4 w-4" />
              <span>Asistente Remoto / Ops</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: CV DEVELOPER */}
        {/* ============================================================== */}
        <TabsContent value="dev" className="space-y-8 animate-in fade-in-50 duration-300">
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-card/60 border border-border/60">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-primary/40 text-primary">
                CV Técnico — Software & Web
              </Badge>
              <span className="text-xs text-muted-foreground hidden sm:inline">Actualizado 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" /> Imprimir
              </Button>
              <Button asChild size="sm">
                <a href="/cv-desarrollador-eduardo-moyano.pdf" download="CV-Eduardo-Moyano-Desarrollador-Web.pdf">
                  <Download className="mr-2 h-4 w-4" /> Descargar PDF
                </a>
              </Button>
            </div>
          </div>

          {/* Main CV Card */}
          <Card className="border-border/60 bg-card/40 shadow-xl overflow-hidden">
            {/* Header info */}
            <div className="p-8 border-b border-border/60 bg-muted/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-foreground">Eduardo Moyano</h2>
                  <p className="text-xl font-medium text-primary mt-1">
                    Desarrollador Web Full Stack (Next.js | React | TypeScript | Firebase)
                  </p>
                  <p className="text-muted-foreground text-sm mt-3 max-w-2xl leading-relaxed">
                    Desarrollador con sólida experiencia en la creación de aplicaciones web modernas, SaaS comerciales en producción y herramientas de automatización con IA. Creador de <strong>Kontaló</strong> (SaaS de gestión comercial con POS, PWA e IA) y <strong>Clarity</strong> (Finanzas personales con Genkit AI).
                  </p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground shrink-0 border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>cba2486@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Argentina (Disponible para remoto global)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <Link href="/" className="hover:text-primary transition-colors">edumoyano.com</Link>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-8 space-y-10">
              {/* Stack Tecnológico */}
              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" /> Habilidades Técnicas
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-3.5 rounded-lg bg-background/60 border border-border/40">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary">Next.js (App Router)</Badge>
                      <Badge variant="secondary">React.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">PWA</Badge>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-background/60 border border-border/40">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Backend & Datos</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary">Firebase Firestore</Badge>
                      <Badge variant="secondary">Firebase Auth</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express.js</Badge>
                      <Badge variant="secondary">APIs REST</Badge>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-background/60 border border-border/40 sm:col-span-2 md:col-span-1">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Herramientas & IA</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary">Genkit AI / LLMs</Badge>
                      <Badge variant="secondary">Mercado Pago API</Badge>
                      <Badge variant="secondary">Git / GitHub</Badge>
                      <Badge variant="secondary">Zod</Badge>
                      <Badge variant="secondary">Shadcn UI</Badge>
                    </div>
                  </div>
                </div>
              </section>

              {/* Experiencia & Proyectos */}
              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" /> Experiencia y Proyectos Destacados
                </h3>

                <div className="space-y-8">
                  {/* Kontalo */}
                  <div className="relative pl-6 border-l-2 border-primary/40 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xl font-bold">Kontaló — SaaS Integral de Gestión Comercial & POS Cloud</h4>
                      <Badge variant="outline" className="border-primary/40 text-primary">2024 - Presente</Badge>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Creador y Desarrollador Full Stack | Web Oficial: <a href="https://kontalo.com.ar" target="_blank" rel="noreferrer" className="text-primary hover:underline">kontalo.com.ar</a></p>
                    <ul className="text-sm text-foreground/80 space-y-1.5 pt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Desarrolló y desplegó una plataforma SaaS completa y PWA instalable para comercios minoristas con Next.js, Firebase y TypeScript.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Implementó Punto de Venta (POS) con atajos de teclado (F2, F4), escáner de código de barras físico o por cámara móvil y tickets térmicos de 80mm o WhatsApp.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Construyó módulo de arqueo y cierre de turnos de caja chica (comparación real vs. esperado, registro de egresos y auditoría).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Creó asistente con IA para sugerencia de márgenes comerciales (+30% a +100%) y alertas predictivas de rotación de stock inmovilizado (+45 días).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Desarrolló exportador mensual para el contador en 1 clic (Modo Monotributo y Responsable Inscripto / Libro IVA AFIP).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Clarity */}
                  <div className="relative pl-6 border-l-2 border-border/80 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xl font-bold">Clarity — Plataforma de Finanzas Personales con IA</h4>
                      <Badge variant="secondary">2024</Badge>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Desarrollador Full Stack | <a href="https://clarity86.netlify.app" target="_blank" rel="noreferrer" className="text-primary hover:underline">clarity86.netlify.app</a></p>
                    <ul className="text-sm text-foreground/80 space-y-1.5 pt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Desarrollo de plataforma para control patrimonial, registro de ingresos/gastos, seguimiento de inversiones (cripto/acciones) y gestión de deudas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Integración de Genkit AI para recomendaciones de ahorro y hábitos financieros personalizados.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Freelance */}
                  <div className="relative pl-6 border-l-2 border-border/80 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xl font-bold">Desarrollador Web Freelance</h4>
                      <Badge variant="secondary">2020 - Presente</Badge>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Profesional Independiente</p>
                    <p className="text-sm text-foreground/80 pt-1">
                      Diseño y desarrollo de sitios web responsive, catálogos digitales interactivos y aplicaciones web personalizadas para pymes y emprendimientos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Educación */}
              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" /> Educación & Formación Continua
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/60 border border-border/40">
                    <h4 className="font-semibold text-foreground">Tecnicatura Universitaria en Desarrollo Web</h4>
                    <p className="text-sm text-primary">Universidad Nacional de Entre Ríos (UNER)</p>
                    <p className="text-xs text-muted-foreground mt-1">Ene 2026 - Presente | Formación académica de pregrado</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/60 border border-border/40">
                    <h4 className="font-semibold text-foreground">Diplomatura en Programación Web Full Stack con React JS</h4>
                    <p className="text-sm text-primary">UTN FRBA - Centro de e-Learning</p>
                    <p className="text-xs text-muted-foreground mt-1">2021 | React.js, Node.js y ecosistema moderno</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/60 border border-border/40">
                    <h4 className="font-semibold text-foreground">Cursos de JavaScript y Desarrollo Web</h4>
                    <p className="text-sm text-primary">Coderhouse</p>
                    <p className="text-xs text-muted-foreground mt-1">2025 - 2026 | Asincronismo, consumo de APIs y responsive design</p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ============================================================== */}
        {/* TAB 2: CV ASISTENTE REMOTO / OPERACIONES */}
        {/* ============================================================== */}
        <TabsContent value="ops" className="space-y-8 animate-in fade-in-50 duration-300">
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-card/60 border border-border/60">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-accent/40 text-accent">
                CV Operativo — Asistencia, Data Entry & E-commerce
              </Badge>
              <span className="text-xs text-muted-foreground hidden sm:inline">Actualizado 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" /> Imprimir
              </Button>
              <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="/cv-asistente-remoto-eduardo-moyano.pdf" download="CV-Eduardo-Moyano-Asistente-Remoto.pdf">
                  <Download className="mr-2 h-4 w-4" /> Descargar PDF
                </a>
              </Button>
            </div>
          </div>

          {/* Main CV Card */}
          <Card className="border-border/60 bg-card/40 shadow-xl overflow-hidden">
            {/* Header info */}
            <div className="p-8 border-b border-border/60 bg-muted/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-foreground">Eduardo Moyano</h2>
                  <p className="text-xl font-medium text-accent mt-1">
                    Asistente Administrativo Remoto & Operador de E-commerce
                  </p>
                  <p className="text-muted-foreground text-sm mt-3 max-w-2xl leading-relaxed">
                    Profesional con más de 5 años de experiencia liderando y gestionando comercios propios (físicos y online). Especializado en atención al cliente, carga y mantenimiento de catálogos (Data Entry), control de caja chica, facturación y gestión de stock. Destaco por mi rapidez, resolución autónoma y dominio de herramientas digitales y hojas de cálculo.
                  </p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground shrink-0 border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>cba2486@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>Argentina (Disponible para remoto global)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-accent" />
                    <Link href="/" className="hover:text-accent transition-colors">edumoyano.com</Link>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-8 space-y-10">
              {/* Competencias Clave */}
              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-accent" /> Competencias Administrativas & Operativas
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-3.5 rounded-lg bg-background/60 border border-border/40">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Data Entry & Catálogo</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary">Carga masiva/individual</Badge>
                      <Badge variant="secondary">Listas de precios</Badge>
                      <Badge variant="secondary">Variantes & Stock</Badge>
                      <Badge variant="secondary">Fichas descriptivas</Badge>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-background/60 border border-border/40">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Atención & Canales</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary">WhatsApp Business</Badge>
                      <Badge variant="secondary">Instagram & Redes</Badge>
                      <Badge variant="secondary">Ventas por chat</Badge>
                      <Badge variant="secondary">Resolución de dudas</Badge>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-background/60 border border-border/40 sm:col-span-2 md:col-span-1">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Caja & Finanzas</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary">Arqueo de caja chica</Badge>
                      <Badge variant="secondary">Conciliación pagos</Badge>
                      <Badge variant="secondary">Excel / Sheets</Badge>
                      <Badge variant="secondary">Planillas AFIP / IVA</Badge>
                    </div>
                  </div>
                </div>
              </section>

              {/* Experiencia Laboral */}
              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
                  <Building className="h-5 w-5 text-accent" /> Experiencia Laboral
                </h3>

                <div className="space-y-8">
                  {/* Negocios propios */}
                  <div className="relative pl-6 border-l-2 border-accent/40 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xl font-bold">Propietario y Gestor Comercial</h4>
                      <Badge variant="outline" className="border-accent/40 text-accent">2019 - Presente</Badge>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Emprendimientos Propios: &quot;Xime Joyería&quot; y &quot;J&L Librería&quot;</p>
                    <ul className="text-sm text-foreground/80 space-y-1.5 pt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Gestión operativa integral: atención al público presencial y virtual mediante WhatsApp, Instagram y canales web.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Carga, catalogación y control de inventario de más de 2.000 artículos con actualización periódica de listas de precios y márgenes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Control diario de caja chica, arqueos de turno, conciliación de transferencias, Mercado Pago y seguimiento de fiados/cuentas corrientes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Coordinación de pedidos con proveedores y preparación de planillas mensuales de ventas y egresos para el contador.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Creación de contenido comercial y atención a consultas en redes sociales (TikTok e Instagram).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Asistente Remoto Freelance */}
                  <div className="relative pl-6 border-l-2 border-border/80 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xl font-bold">Asistente Administrativo Remoto & Digitalización</h4>
                      <Badge variant="secondary">2020 - Presente</Badge>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Profesional Independiente</p>
                    <ul className="text-sm text-foreground/80 space-y-1.5 pt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Soporte administrativo a distancia: carga de productos en plataformas de e-commerce y tiendas online.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Migración y digitalización de registros de ventas en papel a hojas de cálculo en Excel / Google Sheets con fórmulas automatizadas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Atención de mensajes, cotización y gestión de consultas de clientes vía WhatsApp Business.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Formación y Tecnologías */}
              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" /> Formación y Manejo de Herramientas
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/60 border border-border/40">
                    <h4 className="font-semibold text-foreground">Hojas de Cálculo & Automatización</h4>
                    <p className="text-sm text-accent">Excel y Google Sheets Avanzado</p>
                    <p className="text-xs text-muted-foreground mt-1">Tablas dinámicas, fórmulas lógicas, importación/exportación de datos masivos y planillas de cálculo.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/60 border border-border/40">
                    <h4 className="font-semibold text-foreground">Plataformas & Software de Gestión</h4>
                    <p className="text-sm text-accent">E-commerce, Redes y Sistemas Cloud</p>
                    <p className="text-xs text-muted-foreground mt-1">Manejo de WhatsApp Business, Mercado Pago, paneles de administración web, Notion, Trello y Google Workspace.</p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Bottom CTA */}
      <div className="text-center mt-12 pt-8 border-t border-border/60">
        <h3 className="text-xl font-bold mb-2">¿Quieres coordinar una entrevista o hacerme una consulta?</h3>
        <p className="text-muted-foreground text-sm mb-6">Estoy disponible para sumarme de forma inmediata a proyectos o roles remotos.</p>
        <Button asChild size="lg" className="shadow-lg shadow-primary/20">
          <Link href="/contact">
            Ir al Formulario de Contacto <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function CVPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-20 text-center">Cargando CV...</div>}>
      <CVContent />
    </Suspense>
  );
}
