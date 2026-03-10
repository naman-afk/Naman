import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-poppins font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="glass glass-hover rounded-2xl p-6">
            <p.icon className="w-6 h-6 text-primary mb-4" />
            <h3 className="font-poppins font-semibold text-lg mb-2">
              {p.title}
            </h3>
            <p className="text-muted text-sm mb-4">{p.overview}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <details className="text-sm text-muted">
              <summary className="cursor-pointer text-primary">
                View details
              </summary>

              <div className="mt-3 space-y-2">
                <p><strong>Problems:</strong></p>
                <ul className="list-disc list-inside">
                  {p.problems.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>

                <p><strong>Solutions:</strong></p>
                <ul className="list-disc list-inside">
                  {p.solutions.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>

                <p><strong>Outcome:</strong> {p.outcome}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
