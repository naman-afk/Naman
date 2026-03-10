import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import img2 from "../assets/outside/outside-02.jpeg";
import img3 from "../assets/outside/outside-03.jpeg";
import img4 from "../assets/outside/outside-04.jpeg";
import img5 from "../assets/outside/outside-05.jpeg";

const images = [
  {
    src: img2,
    caption: "Water systems and natural flow."
  },
  {
    src: img3,
    caption: "Fog, uncertainty, and pattern recognition."
  },
  {
    src: img4,
    caption: "Elevation changes perspective."
  },
  {
    src: img5,
    caption: "Texture, structure, and repetition."
  }
];

export default function Hobbies() {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto relative z-10">
      <h2 className="text-4xl font-poppins font-bold mb-8">
        Outside of Work
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="text-muted leading-relaxed space-y-4">
          <p>
            I spend a lot of time outside — hiking, observing landscapes, and
            paying attention to how natural systems organize themselves.
          </p>

          <p>
            These moments influence how I approach engineering: patiently,
            spatially, and with respect for complexity and constraints.
          </p>
        </div>

        {/* Panorama Viewer */}
        <div className="relative">
          <div className="glass rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index].src}
                alt={images[index].caption}
                className="w-full h-72 object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Caption */}
          <p className="mt-3 text-sm text-muted">
            {images[index].caption}
          </p>

          {/* Toggle Dots */}
          <div className="flex gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index
                    ? "bg-primary"
                    : "bg-muted/40 hover:bg-muted"
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
