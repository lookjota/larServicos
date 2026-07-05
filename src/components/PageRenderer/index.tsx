// Importamos os componentes especialistas.
import HeroSection from "../service/HeroSection";
import BenefitsSection from "../service/BenefitsSection";
import FaqSection from "../service/FaqSection";
import CtaSection from "../service/CtaSection";

// Importamos os tipos do domínio.
import { PageSectionType } from "../../domain/entities/PageSectionType";
import type { Service } from "../../domain/entities/Service";

interface PageRendererProps {
  service: Service;
}

/**
 * PageRenderer
 *
 * Responsabilidade:
 * Receber um Service
 * e decidir quais componentes
 * devem ser renderizados.
 */
export default function PageRenderer({
  service,
}: PageRendererProps) {

  return (
    <>

      <HeroSection hero={service.hero} />

      <BenefitsSection benefits={service.benefits} />

      <FaqSection faq={service.faq} />

      <CtaSection cta={service.cta} />

    </>
  );

}