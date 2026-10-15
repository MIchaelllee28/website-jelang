import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/hero_section";
import NextWalkSection from "@/components/home/next_walk_section";
import AboutSection from "@/components/home/about_section";
import JournalSection from "@/components/home/journal_section";
import JoinSection from "@/components/home/join_section";

export default function Home() {
  return (
    <div id="atas" className="min-h-screen bg-canvas text-ink">
      <Header />
      <main>
        <HeroSection />
        <NextWalkSection />
        <AboutSection />
        <JournalSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
