import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import PublicationsSection from "@/components/portfolio/PublicationsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import NewspaperSection from "@/components/portfolio/NewspaperSection";
import CommunitySection from "@/components/portfolio/CommunitySection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
      <AchievementsSection />
      <NewspaperSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
