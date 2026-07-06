// Componentes responsáveis por renderizar
// cada parte da página.
import HeroSection from "../service/HeroSection";
import BenefitsSection from "../service/BenefitsSection";
import FaqSection from "../service/FaqSection";
import CtaSection from "../service/CtaSection";

// Entidade do domínio.
import type { Service } from "../../domain/entities/Service";

/**
 * Propriedades recebidas pelo PageRenderer.
 */
interface PageRendererProps {
  service: Service;
}

/**
 * PageRenderer
 *
 * Responsabilidade:
 * Receber um Service
 * e renderizar todas as seções da página.
 *
 * Neste momento da arquitetura,
 * ele ainda conhece explicitamente
 * Hero, Benefits, FAQ e CTA.
 *
 * Isso será removido futuramente,
 * quando concluirmos a migração
 * para o Render Engine orientado a dados.
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