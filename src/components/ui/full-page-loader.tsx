
'use client';

import { Code } from "lucide-react";

export function FullPageLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] bg-background text-foreground">
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute w-24 h-24 rounded-full border-2 border-primary/20 animate-pulse"></div>
        <div className="absolute w-16 h-16 rounded-full border-2 border-primary/40 animate-pulse [animation-delay:0.2s]"></div>
        <Code className="w-10 h-10 text-primary animate-pulse [animation-delay:0.4s]" />
      </div>
      <h2 className="text-xl font-semibold text-primary/90 tracking-wider">
        Construyendo la solución...
      </h2>
      <p className="text-muted-foreground mt-2">
        Preparando los píxeles.
      </p>
    </div>
  );
}
