// src/core/registry/pageSectionRegistry.ts

import HeroSection from "../../components/service/HeroSection";
import BenefitsSection from "../../components/service/BenefitsSection";
import FaqSection from "../../components/service/FaqSection";
import CtaSection from "../../components/service/CtaSection";

import { PageSectionType } from "../../domain/entities/PageSectionType";

/**
 * Registry responsável por dizer
 * qual componente representa
 * cada tipo de seção.
 */
export const pageSectionRegistry = {

    [PageSectionType.HERO]: HeroSection,

    [PageSectionType.BENEFITS]: BenefitsSection,

    [PageSectionType.FAQ]: FaqSection,

    [PageSectionType.CTA]: CtaSection,

};