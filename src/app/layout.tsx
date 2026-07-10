import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Eduardo Moyano - Full Stack Developer",
  description: "Desarrollador Full Stack y Emprendedor. Convierto problemas de negocio en soluciones de software robustas.",
  openGraph: {
    title: "Eduardo Moyano - Full Stack Developer",
    description: "Desarrollador Full Stack y Emprendedor. Convierto problemas de negocio en soluciones de software robustas.",
    type: "website",
  }
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
