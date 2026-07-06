// src/domain/builders/ServiceSectionsBuilder.ts

import { PageSectionType } from "../entities/PageSectionType";
import type { PageSection } from "../entities/PageSection";
import type { Service } from "../entities/Service";

/**
 * ServiceSectionsBuilder
 *
 * Responsabilidade:
 * Transformar um Service
 * no formato atual
 * em uma coleção de PageSection.
 *
 * Ele funciona como uma ponte
 * entre a arquitetura antiga
 * e a nova arquitetura.
 */
export class ServiceSectionsBuilder {

  static build(service: Service): PageSection[] {

    return [

      {
        id: "hero",

        type: PageSectionType.HERO,

        data: service.hero,
      },

      {
        id: "benefits",

        type: PageSectionType.BENEFITS,

        data: service.benefits,
      },

      {
        id: "faq",

        type: PageSectionType.FAQ,

        data: service.faq,
      },

      {
        id: "cta",

        type: PageSectionType.CTA,

        data: service.cta,
      },

    ];

  }

}