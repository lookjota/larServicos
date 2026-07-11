
import type { PageSection } from "../../domain/entities/PageSection";
import SectionRenderer from "../SectionRenderer";

/**
 * Propriedades recebidas pelo PageRenderer.
 */
interface PageRendererProps {
  sections: PageSection[];

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
    sections,
}: PageRendererProps) {
    return (
        <>
            {sections.map(section => (

                <SectionRenderer

                    key={section.id}

                    section={section}

                />

            ))}
        </>
    );
}