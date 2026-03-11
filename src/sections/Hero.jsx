import { motion } from "framer-motion";
import { useNameReorder } from "../hooks/useNameReorder";

export default function Hero() {
  const letters = useNameReorder("Namandeep Kaur");

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative z-10">
      <div className="max-w-3xl">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-4 flex justify-center flex-wrap">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              layout
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <p className="text-sm text-muted mb-6">
          BSc. Computing Science — Simon Fraser University, Burnaby, BC
        </p>

        <p className="text-muted text-lg md:text-xl leading-relaxed">
          Artificial Intelligence · Geospatial Systems · Software Engineering
        </p>
      </div>
    </section>
  );
}
