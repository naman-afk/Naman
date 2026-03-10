import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6">
          {profile.name}
        </h1>
        <p className="text-muted text-lg md:text-xl leading-relaxed">
          {profile.headline}
        </p>
      </div>
    </section>
  );
}
