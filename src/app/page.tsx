import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Signatures } from "@/components/Signatures";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { BBQExperience } from "@/components/BBQExperience";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-18 md:pt-20">
        <Hero />
        <Signatures />
        <About />
        <Menu />
        <BBQExperience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}