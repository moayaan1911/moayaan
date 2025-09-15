import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { GlobalEthBackground } from "@/components/global-eth-background";
import { details } from "@/lib/details";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <GlobalEthBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>

        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Vibe Coded with various{" "}
            <span className="group relative text-purple-400 hover:text-purple-300 transition-colors duration-200">
              AI tools
              <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg border border-gray-700">
                {details.footer.aiTools}
              </span>
            </span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} Mohammad Ayaan Siddiqui.
          </p>
        </div>
      </footer>
    </div>
  );
}
