import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioTeaser } from "@/components/PortfolioTeaser";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Stats />
        <TechStack />
        <PortfolioTeaser />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
