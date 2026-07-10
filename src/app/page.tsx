import { HeroSection } from "@/components/home/hero-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { ServicesSection } from "@/components/home/services-section";
import { SkillsSection } from "@/components/home/skills-section";
import { ProjectsSection } from "@/components/home/projects-section";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <HeroSection />
        <ExperienceSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  );
}
