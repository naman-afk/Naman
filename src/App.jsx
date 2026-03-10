import { useEffect, useState } from "react";

import FloatingNav from "./components/FloatingNav";
import TopoBackground from "./components/TopoBackground";

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
    <div className="min-h-screen bg-background text-foreground texture-overlay">
      <TopoBackground isAltitude={theme === "altitude"} />
      <FloatingNav theme={theme} setTheme={setTheme} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}
