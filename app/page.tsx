import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Technologies />
    </>
  );
}