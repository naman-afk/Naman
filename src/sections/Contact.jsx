export default function Contact() {
  return (
    <section id="contact" className="space-y-6 text-lg">
      <p>
        Email:{" "}
        <a href="mailto:nka87@sfu.ca" className="text-primary underline">
          nka87@sfu.ca
        </a>
      </p>

      <p>
        Phone:{" "}
        <a href="tel:6722306196" className="text-primary underline">
          672‑230‑6196
        </a>
      </p>

      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/namandeep-kaur-170760293/"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          linkedin.com/in/namandeep-kaur
        </a>
      </p>
    </section>
  );
}
