import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="space-y-12">
      {skills.map(({ category, items }) => (
        <div key={category}>
          <h3 className="text-xl font-semibold mb-4">{category}</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-green-600/20 text-green-400 border border-green-600/40 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
