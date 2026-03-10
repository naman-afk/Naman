import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-poppins font-bold mb-12">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="glass rounded-2xl p-6">
            <h3 className="font-poppins font-semibold mb-4">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-lg text-sm bg-primary/10 text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
