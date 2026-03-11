import { useState } from "react";
import { X, Menu, TreePine, Sun } from "lucide-react";

export default function FloatingNav({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center shadow-glow"
      >
        <Menu />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex flex-col items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-8 text-foreground"
          >
            <X />
          </button>

          <nav className="space-y-6 text-center">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-4xl font-poppins font-semibold text-foreground hover:text-primary transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-10 flex gap-2 glass rounded-full p-1">
            <button
              onClick={() => setTheme("forest")}
              className={`px-4 py-2 rounded-full text-sm ${
                theme === "forest" ? "bg-primary text-black" : "text-muted"
              }`}
            >
              <TreePine size={14} /> Forest
            </button>

            <button
              onClick={() => setTheme("altitude")}
              className={`px-4 py-2 rounded-full text-sm ${
                theme === "altitude" ? "bg-primary text-black" : "text-muted"
              }`}
            >
              <Sun size={14} /> Altitude
            </button>
          </div>
        </div>
      )}
    </>
  );
}
