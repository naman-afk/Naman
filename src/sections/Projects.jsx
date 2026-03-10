import { useState } from "react";
import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "AI/ML", "GIS", "Systems", "Software"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative">
      <h2 className="text-4xl font-poppins font-bold mb-10">Projects</h2>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeFilter === filter
                ? "bg-primary text-black"
                : "glass text-muted hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setActiveProject(project)}
            className="glass glass-hover rounded-2xl p-6 cursor-pointer"
          >
            <project.icon className="w-6 h-6 text-primary mb-4" />

            <h3 className="font-poppins font-semibold text-lg mb-2">
              {project.title}
            </h3>

            <p className="text-muted text-sm mb-4">
              {project.overview}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setActiveProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`project-${activeProject.id}`}
              className="glass rounded-2xl max-w-3xl w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-poppins font-bold mb-4">
                {activeProject.title}
              </h3>

              <p className="text-muted mb-6">
                {activeProject.overview}
              </p>

              <div className="space-y-4 text-sm text-muted">
                <div>
                  <strong className="text-foreground">Problems</strong>
                  <ul className="list-disc list-inside mt-1">
                    {activeProject.problems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong className="text-foreground">Solutions</strong>
                  <ul className="list-disc list-inside mt-1">
                    {activeProject.solutions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p>
                  <strong className="text-foreground">Outcome:</strong>{" "}
                  {activeProject.outcome}
                </p>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="mt-8 px-6 py-3 rounded-xl bg-primary text-black font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
