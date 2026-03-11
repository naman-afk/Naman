import { useState } from "react";
import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI/ML", "GIS", "Systems", "Software"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="space-y-6">

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition ${
              filter === cat
                ? "bg-primary text-black border-primary"
                : "border-muted text-muted hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <motion.button
            key={project.id}
            onClick={() => setActive(project)}
            className="glass rounded-xl p-4 text-left"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-sm text-muted mb-1">{project.category}</p>
            <h3 className="text-base font-semibold">{project.title}</h3>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-md bg-green-600/20 text-green-400 border border-green-600/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted mt-3 line-clamp-3">
              {project.overview}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="glass max-w-xl w-full mx-4 rounded-2xl p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm text-muted mb-1">{active.category}</p>
              <h3 className="text-xl font-semibold mb-4">{active.title}</h3>

              {/* Tech Pills in Modal */}
              <div className="flex flex-wrap gap-2 mb-4">
                {active.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-md bg-green-600/20 text-green-400 border border-green-600/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted mb-4">{active.overview}</p>

              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Problems</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {active.problems?.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Solutions</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {active.solutions?.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>

                {active.outcome && (
                  <div>
                    <h4 className="font-semibold mb-1">Outcome</h4>
                    <p>{active.outcome}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
