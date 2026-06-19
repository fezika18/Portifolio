import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectRow from "../components/ProjectRow";
import About from "../components/About";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="projects" className="scroll-mt-24">
        <ProjectRow />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="technologies" className="scroll-mt-24">
        <Technologies />
      </section>

      <section id="contact" className="scroll-mt-24ss">
        <Contact />
      </section>
    </>
  );
}