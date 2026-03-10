export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-poppins font-bold mb-8">About</h2>

      <div className="glass rounded-2xl p-8 leading-relaxed text-muted">
        <p className="mb-4">
          I’m an engineer who enjoys working close to the fundamentals —
          understanding how systems behave, where they break, and how to make
          them reliable under real constraints.
        </p>
        <p>
          My work spans machine learning, geospatial analysis, and systems
          programming. I’m especially interested in problems where correctness,
          interpretability, and long‑term maintainability matter more than
          surface‑level performance.
        </p>
      </div>
    </section>
  );
}
