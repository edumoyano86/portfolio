
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Expand, X } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

interface ProjectCarouselProps {
    imageUrls: (string | undefined)[];
    projectTitle: string;
}

export function ProjectCarousel({ imageUrls, projectTitle }: ProjectCarouselProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const validImageUrls = imageUrls.filter((url): url is string => !!url);

    if (!validImageUrls || validImageUrls.length === 0) {
        return (
            <div className="relative aspect-video bg-muted/20 flex items-center justify-center">
                <p className="text-muted-foreground">Sin imagen</p>
            </div>
        );
    }
    
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <div 
                className="relative group/item cursor-pointer overflow-hidden"
                onClick={() => setIsDialogOpen(true)}
            >
                <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                        {validImageUrls.map((url, index) => (
                            <CarouselItem key={index}>
                                <div className="relative aspect-video bg-muted/20">
                                    <Image
                                        src={url}
                                        alt={`${projectTitle} - Imagen ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <CarouselNext className="right-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </Carousel>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <Expand className="w-12 h-12 text-white" />
                </div>
            </div>

            <DialogContent className="max-w-4xl h-auto bg-transparent border-none shadow-none p-0">
                <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                        {validImageUrls.map((url, index) => (
                            <CarouselItem key={index}>
                                <div className="relative aspect-video">
                                    <Image 
                                        src={url} 
                                        alt={`Imagen ampliada ${index + 1}`} 
                                        fill 
                                        sizes="100vw"
                                        className="object-contain rounded-lg shadow-2xl" 
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-50px]" />
                    <CarouselNext className="right-[-50px]" />
                </Carousel>
                <DialogClose className="absolute -top-2 -right-2 bg-background rounded-full p-1 opacity-100 hover:scale-110 transition-transform">
                    <X className="w-6 h-6" />
                </DialogClose>
                <DialogHeader className="sr-only">
                    <DialogTitle>Carrusel de Imágenes del Proyecto</DialogTitle>
                    <DialogDescription>
                        Navega por las imágenes del proyecto en una vista ampliada.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
