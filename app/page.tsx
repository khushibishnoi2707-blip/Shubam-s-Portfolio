import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroSection } from "@/components/hero/hero-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
