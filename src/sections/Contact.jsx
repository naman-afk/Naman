export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-3xl mx-auto text-center relative z-10"
    >
      <h2 className="text-4xl font-poppins font-bold mb-6">
        Get in Touch
      </h2>

      <p className="text-muted mb-10 leading-relaxed">
        <span className="block font-semibold text-foreground mb-2">
          Let’s Build Something
        </span>
        Have a project in mind? I’d love to hear about it. Drop me a message and
        let’s explore how we can create something together.
      </p>

      <a
        href="mailto:nka87@sfu.ca"
        className="inline-block px-8 py-4 rounded-xl bg-primary text-black font-semibold"
      >
        Contact Me
      </a>
    </section>
  );
}
