import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/EduMoyano" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/edumoyano86/" },
    { name: "Email", icon: Mail, href: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-border/40 mt-auto">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Eduardo Moyano. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              aria-label={link.name}
            >
              <Link href={link.href} {...(link.name !== 'Email' && {target:"_blank", rel:"noopener noreferrer"})}>
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
