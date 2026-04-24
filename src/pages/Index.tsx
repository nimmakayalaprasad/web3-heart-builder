import { Nav } from "@/components/web3/Nav";
import { Hero } from "@/components/web3/Hero";
import { Marquee } from "@/components/web3/Marquee";
import { Features } from "@/components/web3/Features";
import { Stake } from "@/components/web3/Stake";
import { CTA } from "@/components/web3/CTA";
import { Footer } from "@/components/web3/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Stake />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
