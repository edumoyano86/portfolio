"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Code, ClipboardList, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface CVDialogProps {
  triggerText?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function CVDialog({
  triggerText = "Descargar CV",
  variant = "outline",
  size = "lg",
  className,
}: CVDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <FileText className="mr-2 h-4 w-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-background/95 backdrop-blur border-border/60">
        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Curriculum Vitae — Eduardo Moyano
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground pt-1">
            Selecciona la versión que mejor se ajuste a la búsqueda o perfil que estás evaluando:
          </DialogDescription>
        </DialogHeader>

        <div className="grid sm:grid-cols-2 gap-4 my-4">
          {/* Card CV 1: Developer */}
          <Card className="flex flex-col border-border/60 bg-card/60 hover:border-primary/50 hover:shadow-primary/10 hover:shadow-md transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <Code className="h-5 w-5" />
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                  Software & Código
                </Badge>
              </div>
              <CardTitle className="text-lg">CV Desarrollador Web Full Stack</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-xs text-muted-foreground space-y-2">
              <p>
                Especializado en Next.js, React, TypeScript, Firebase y APIs. Incluye arquitectura de Kontaló (SaaS en producción) y Clarity (IA Genkit).
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                <Badge variant="secondary" className="text-[10px]">Next.js</Badge>
                <Badge variant="secondary" className="text-[10px]">React</Badge>
                <Badge variant="secondary" className="text-[10px]">TypeScript</Badge>
                <Badge variant="secondary" className="text-[10px]">Firebase</Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-3 flex flex-col gap-2">
              <Button asChild size="sm" className="w-full">
                <a href="/cv-desarrollador-eduardo-moyano.pdf" download="CV-Eduardo-Moyano-Desarrollador-Web.pdf">
                  <Download className="mr-2 h-4 w-4" /> Descargar PDF
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="w-full text-xs" onClick={() => setOpen(false)}>
                <Link href="/cv?tab=dev">
                  Ver online interactivo <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Card CV 2: Operations / Assistant */}
          <Card className="flex flex-col border-border/60 bg-card/60 hover:border-accent/50 hover:shadow-accent/10 hover:shadow-md transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                  Operaciones & Admin
                </Badge>
              </div>
              <CardTitle className="text-lg">CV Asistente Remoto & Operaciones</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-xs text-muted-foreground space-y-2">
              <p>
                Especializado en Data Entry, control de caja chica, inventarios, atención al cliente (WhatsApp/redes), Excel avanzado y gestión comercial de comercios propios.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                <Badge variant="secondary" className="text-[10px]">Data Entry</Badge>
                <Badge variant="secondary" className="text-[10px]">Atención Cliente</Badge>
                <Badge variant="secondary" className="text-[10px]">Caja & Finanzas</Badge>
                <Badge variant="secondary" className="text-[10px]">Excel / AFIP</Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-3 flex flex-col gap-2">
              <Button asChild size="sm" variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="/cv-asistente-remoto-eduardo-moyano.pdf" download="CV-Eduardo-Moyano-Asistente-Remoto.pdf">
                  <Download className="mr-2 h-4 w-4" /> Descargar PDF
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="w-full text-xs" onClick={() => setOpen(false)}>
                <Link href="/cv?tab=ops">
                  Ver online interactivo <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
