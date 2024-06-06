import Hero from "@/components/content/hero/Hero";
import About from "@/components/content/about/About";
import Projects from "@/components/content/projects/Projects";
import Contact from "@/components/content/contact/Contact";
import Skills from "@/components/content/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
