export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-poppins font-bold mb-8">About</h2>

      <div className="glass rounded-2xl p-8 leading-relaxed text-muted">
        <p className="mb-4">
          Hello,
            I've always been obsessed with how things work under the hood. It's why I didn't just learn code but built systems from scratch. To me, "good enough" code isn't enough-I want to ensure data integrity and system resilience at the architectural level.

        </p>
        <p>
          Moving from Germany to Canada to study at SFU gave me a global perspective, but my focus remains technical and grounded. I split my time between AI/ML Engineering- like architecting Multi-Agent RL platforms-and Geospatial Data Science, where I use ArcGIS and Python to model real-world risks like environmental contamination or urban crime patterns.
        </p>
      </div>
    </section>
  );
}
