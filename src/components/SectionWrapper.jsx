import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

export default function SectionWrapper({ title, sectionNum = "—", children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [scanning, setScanning] = useState(false);

  const toggle = () => {
    if (!open) {
      setScanning(true);
      setTimeout(() => setScanning(false), 750);
    }
    setOpen((v) => !v);
  };

  return (
    <div className="relative 6rem">
      <button onClick={toggle} className="w-full text-left group mb-10 focus:outline-none">

        <div className="flex items-center gap-3 mb-5">
          <div className="w-2 h-2 rounded-full border border-primary/60 bg-primary/20" />
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          <span className="font-mono text-[10px] text-primary/40 tracking-[0.25em]">
            COORD·{sectionNum}
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent" />
          <div className="w-2 h-2 rounded-full border border-primary/60 bg-primary/20" />
        </div>

        <div className="flex items-end justify-between gap-4">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-foreground">
            {title}
          </h2>

          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 220, damping: 18 }}
            className="w-8 h-8 rounded-full glass flex items-center justify-center"
          >
            <MapPin className="w-3.5 h-3.5 text-primary" />
          </motion.div>
        </div>

        <div className="mt-5 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </button>

      <AnimatePresence>
        {scanning && (
          <motion.div
            className="absolute left-0 right-0 h-[2px] pointer-events-none z-20"
            initial={{ top: 80, opacity: 1 }}
            animate={{ top: "100%", opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent, hsl(83,78%,55%), transparent)",
              boxShadow: "0 0 14px rgba(163,230,53,0.9)",
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="section-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.4, ease: "easeOut" },
            }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
