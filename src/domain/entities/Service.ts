import type { PageSection } from "./PageSection";

/**
 * Service
 *
 * Representa um serviço oferecido pela empresa.
 *
 * Observe que ele não conhece mais Hero,
 * FAQ ou Benefits individualmente.
 *
 * Agora ele conhece apenas uma coleção
 * ordenada de PageSection.
 *
 * Isso torna o domínio muito mais flexível.
 */
export interface Service {

  /**
   * Identificador da URL.
   */
  slug: string;

  /**
   * Nome do serviço.
   */
  title: string;

  /**
   * Estrutura completa da página.
   */
  sections: PageSection[];

}