import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Social />
      <Contact />
      <Footer />
    </main>
  );
}
