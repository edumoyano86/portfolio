
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const recipientEmail = "cba2486@gmail.com";
        const subject = encodeURIComponent(`[Portfolio Contact] ${values.subject}`);
        const body = encodeURIComponent(
`Hola,

Soy ${values.name} (${values.email}).

Mensaje:
${values.message}
`
        );
        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Contacto
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    ¿Tienes una idea o un proyecto en mente? ¡Hablemos!
                </p>
            </header>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">Envíame un mensaje</h2>
                    <p className="text-muted-foreground mb-8">
                        Completa el formulario para abrir tu aplicación de correo y enviarme un mensaje directamente.
                    </p>
                     <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                        <Mail className="w-6 h-6 text-primary"/>
                        <a href="mailto:cba2486@gmail.com" className="text-lg text-foreground hover:text-primary transition-colors">
                            cba2486@gmail.com
                        </a>
                    </div>
                </div>

                <Card className="bg-card/50 border-border/50">
                    <CardContent className="p-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nombre</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Tu nombre" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tu Email (para referencia)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="tu@email.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Asunto</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Asunto del mensaje" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mensaje</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Cuéntame sobre tu proyecto o idea..."
                                                    className="min-h-[120px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full" size="lg">
                                    Abrir cliente de correo <Send className="ml-2 w-4 h-4"/>
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
