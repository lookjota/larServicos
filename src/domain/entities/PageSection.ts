
import type { PageSectionType } from "./PageSectionType";
/**
 * PageSection
 *
 * Representa qualquer bloco
 * existente dentro de uma página.
 *
 * Hero
 * FAQ
 * CTA
 * Gallery
 * Benefits
 * Testimonials
 */
export interface PageSection {

    /**
     * Identificador único.
     */
    id: string;

    /**
     * Tipo do bloco.
     */
    type: PageSectionType;

}