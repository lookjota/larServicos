import type { Seo } from "./Seo";
import type { Hero } from "./Hero";
import type { Benefit } from "./Benefit";
import type { Faq } from "./Faq";
import type { Cta } from "./Cta";

export interface Service {

  /**
   * Identificador único.
   */
  slug: string;

  /**
   * Nome do serviço.
   */
  title: string;

  /**
   * Cidade atendidas.
   * (será usada futuramente)
   */
  cities?: string[];

  /**
   * SEO.
   */
  seo: Seo;

  /**
   * Hero da página.
   */
  hero: Hero;

  /**
   * Descrição longa.
   */
  description: string;

  /**
   * Benefícios.
   */
  benefits: Benefit[];

  /**
   * FAQ.
   */
  faq: Faq[];

  /**
   * CTA.
   */
  cta: Cta;

}