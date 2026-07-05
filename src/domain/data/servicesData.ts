import type { Service } from "../entities/Service";

export const servicesData: Service[] = [
  {
    slug: "eletricista",

    title: "Eletricista Residencial",

    seo: {
      title: "Eletricista em Brasília | Amigo do Lar",
      description:
        "Instalações elétricas, troca de tomadas, interruptores, luminárias e pequenos reparos residenciais.",
      keywords: [
        "eletricista",
        "eletricista em brasília",
        "marido de aluguel",
      ],
    },

    hero: {
      title: "Serviços Elétricos com Segurança",
      subtitle:
        "Atendimento rápido, profissional e com acabamento de qualidade.",
      image: "/images/services/eletricista/hero.webp",
      primaryButton: "Solicitar orçamento",
    },

    description:
      "Realizamos serviços elétricos residenciais com foco em segurança, qualidade e organização.",

    benefits: [
      {
        title: "Atendimento Rápido",
        description: "Agilidade no atendimento.",
        icon: "Clock",
      },
      {
        title: "Segurança",
        description: "Instalações seguindo boas práticas.",
        icon: "Shield",
      },
    ],

    faq: [
      {
        question: "Vocês trocam chuveiro?",
        answer: "Sim, realizamos instalação e substituição.",
      },
      {
        question: "Instalam luminárias?",
        answer: "Sim, incluindo lustres e pendentes.",
      },
    ],

    cta: {
      title: "Precisa de um eletricista em Brasília?",
      description:
          "Solicite um orçamento rápido pelo WhatsApp.",
      buttonText:
          "Falar pelo WhatsApp",
      buttonLink:
          "https://wa.me/5561995646646"
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find(service => service.slug === slug);
}