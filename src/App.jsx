import { useEffect, useState } from "react";

import TopoBackground from "./components/TopoBackground";
import SectionWrapper from "./components/SectionWrapper";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Hobbies from "./sections/Hobbies";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("forest");

  useEffect(() => {
    document.documentElement.classList.remove("forest", "altitude");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground texture-overlay relative">
      <TopoBackground isAltitude={theme === "altitude"} />

      <Hero />

      <div className="max-w-7xl mx-auto px-6">

        <SectionWrapper title="About Me" sectionNum="01" defaultOpen={false}>
          <About />
        </SectionWrapper>

        <SectionWrapper title="Skills" sectionNum="02" defaultOpen={false}>
          <Skills />
        </SectionWrapper>

        <SectionWrapper title="Projects" sectionNum="03" defaultOpen={false}>
          <Projects />
        </SectionWrapper>

        <SectionWrapper title="Outside of Work" sectionNum="04" defaultOpen={false}>
          <Hobbies />
        </SectionWrapper>

        <SectionWrapper title="Get in Touch" sectionNum="05" defaultOpen={false}>
          <Contact />
        </SectionWrapper>

      </div>

      <Footer />
    </div>
  );
}
