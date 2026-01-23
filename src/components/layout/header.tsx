"use client";

import Link from "next/link";
import { Menu, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/studies", label: "Estudios" },
  { href: "/projects", label: "Proyectos" },
  { href: "/work-in-progress", label: "En Progreso" },
  { href: "/contact", label: "Contacto" },
];

if (process.env.NODE_ENV === 'development') {
  navLinks.push({ href: "/admin", label: "Admin" });
}

const logoUrl = '/logo.jpeg';

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [user] = useAuthState(auth);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Set favicon from static logo
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = logoUrl;
  }, []);

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => (
    <Link
      href={href}
      onClick={() => setIsSheetOpen(false)}
      className={cn(
        "transition-colors hover:text-primary flex items-center gap-2",
        pathname === href ? "text-primary font-semibold" : "text-muted-foreground",
        className
      )}
    >
      {label === 'Admin' && <Shield className="h-4 w-4" />}
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="flex items-center flex-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src={logoUrl} alt="Logo de EduMoyano" width={36} height={36} className="rounded-md object-cover"/>
            <span className="font-bold sm:inline-block font-headline">
              EduMoyano
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          {isClient && user && (
            <Button asChild variant="ghost" size="icon">
              <Link href="/admin">
                <User className="h-5 w-5" />
                <span className="sr-only">Panel de Administración</span>
              </Link>
            </Button>
          )}
          <div className="md:hidden">
            {isClient && (
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col items-start p-6">
                    <Link href="/" onClick={() => setIsSheetOpen(false)} className="mb-8 flex items-center space-x-2">
                       <Image src={logoUrl} alt="Logo de EduMoyano" width={36} height={36} className="rounded-md object-cover"/>
                      <span className="font-bold font-headline">EduMoyano</span>
                    </Link>
                    <nav className="flex flex-col gap-6 text-lg font-medium">
                        {navLinks.map((link) => (
                          <NavLink key={link.href} {...link} />
                        ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
