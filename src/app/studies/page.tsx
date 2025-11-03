import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, BookOpen } from "lucide-react";

const studies = [
    {
        title: "Carrera de Desarrollo Full Stack",
        institution: "Coderhouse",
        date: "2023 - Presente",
        description: "Formación intensiva en desarrollo web, cubriendo tecnologías como JavaScript, React.js, Node.js, Express y bases de datos. Actualmente en curso.",
        icon: Award
    },
    {
        title: "Diplomatura en Programación Web Full Stack con React JS",
        institution: "UTN FRBA - Centro de e-Learning",
        date: "Mar 2021 - Ago 2021",
        description: "Diplomatura enfocada en el desarrollo de aplicaciones web modernas utilizando React.js y el ecosistema full stack.",
        icon: BookOpen
    }
];

export default function StudiesPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                    Mi Trayectoria Educativa
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Mi formación y aprendizaje continuo en el mundo del desarrollo.
                </p>
            </header>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />

                <div className="space-y-12">
                    {studies.map((study, index) => (
                        <div key={index} className="relative pl-12 md:pl-0">
                            <div className="absolute left-4 top-1 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center md:left-1/2">
                                <study.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:ml-0 md:mr-[50%] md:text-right' : 'md:pl-8 md:ml-[50%] md:text-left'}`}>
                                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{study.title}</CardTitle>
                                        <p className="text-muted-foreground">{study.institution}</p>
                                        <div className={`flex items-center text-sm text-muted-foreground pt-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span>{study.date}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{study.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
