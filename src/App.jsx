import { useEffect, useState } from "react";
import FloatingNav from "./components/FloatingNav.jsx";
import Footer from "./components/Footer.jsx";

import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  const [theme, setTheme] = useState("forest");

  useEffect(() => {
    document.documentElement.classList.remove("forest", "altitude");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 -z-10 bg-grid opacity-[0.18]" />
      <div className="fixed -z-10 top-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[90px]" />
      <div className="fixed -z-10 bottom-[-140px] left-[-140px] h-[520px] w-[520px] rounded-full bg-accent/10 blur-[110px]" />

      <FloatingNav theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
