import { servicesData } from "../data/servicesData";
import type { Service } from "../entities/Service";

export class ServiceRepository {
  static getAll(): Service[] {
    return servicesData;
  }

  static getBySlug(slug: string): Service | undefined {
    return servicesData.find(
      service => service.slug === slug
    )
  }
}