import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, School } from "lucide-react";

const studies = [
    {
        title: "Master of Science in Computer Science",
        institution: "University of Technology",
        date: "2020 - 2022",
        description: "Focused on advanced algorithms, machine learning, and distributed systems. Thesis on scalable web architectures."
    },
    {
        title: "Bachelor of Science in Software Engineering",
        institution: "State College",
        date: "2016 - 2020",
        description: "Comprehensive curriculum covering software development lifecycle, database management, and user interface design."
    },
    {
        title: "Full-Stack Web Development Bootcamp",
        institution: "The Code Institute",
        date: "2015",
        description: "Intensive training program on modern web technologies including React, Node.js, and MongoDB."
    },
];

export default function StudiesPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                    My Journey
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A timeline of my education and key learning experiences.
                </p>
            </header>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />

                <div className="space-y-12">
                    {studies.map((study, index) => (
                        <div key={index} className="relative pl-12 md:pl-0">
                            <div className="absolute left-4 top-1 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center md:left-1/2">
                                <School className="w-4 h-4 text-primary" />
                            </div>
                            <div className="md:w-1/2 md:pr-8 md:ml-[50%] md:pl-8 md:text-left data-[side=left]:md:text-right data-[side=left]:md:ml-0 data-[side=left]:md:mr-[50%]" data-side={index % 2 === 0 ? 'left' : 'right'}>
                                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{study.title}</CardTitle>
                                        <p className="text-muted-foreground">{study.institution}</p>
                                        <div className="flex items-center text-sm text-muted-foreground pt-2">
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
