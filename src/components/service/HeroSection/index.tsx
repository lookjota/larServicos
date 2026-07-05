import type { Hero } from "../../../domain/entities/Hero";

/**
 * HeroSection
 *
 * Responsabilidade:
 * Renderizar exclusivamente
 * o Hero da página.
 */
interface HeroSectionProps {
  hero: Hero;
}

export default function HeroSection({
  hero,
}: HeroSectionProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold">
          {hero.title}
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          {hero.subtitle}
        </p>

        <button
          className="mt-8 px-8 py-4 rounded-xl bg-sky-600 text-white"
        >
          {hero.primaryButton}
        </button>

      </div>
    </section>
  );
}