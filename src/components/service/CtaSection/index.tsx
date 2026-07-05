import type { Cta } from "../../../domain/entities/Cta";

interface CtaSectionProps {
  cta: Cta;
}

/**
 * CtaSection
 *
 * Responsável por apresentar
 * a principal ação da página.
 */
export default function CtaSection({
  cta,
}: CtaSectionProps) {
  return (
    <section className="py-20 bg-sky-600 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          {cta.title}
        </h2>

        <p className="mt-6 text-lg opacity-90">
          {cta.description}
        </p>

        <a
          href={cta.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-10
            px-8
            py-4
            rounded-xl
            bg-white
            text-sky-700
            font-semibold
            hover:scale-105
            transition
          "
        >
          {cta.buttonText}
        </a>

      </div>
    </section>
  );
}