import type { Service } from '../types/service'

export const servicesData: Service[] = [
  {
    slug: "hidraulica",

    title: "Serviços Hidráulicos",

    category: "Hidráulica",

    shortDescription:
      "Pequenos reparos hidráulicos realizados com segurança e qualidade.",

    description:
      "Executamos instalação e manutenção hidráulica residencial, incluindo torneiras, sifões, registros e vazamentos.",

    icon: "wrench",

    heroImage: "/images/services/hidraulica.jpg",

    items: [
      "Troca de torneiras",
      "Troca de sifão",
      "Instalação de chuveiro"
    ],

    benefits: [
      "Orçamento gratuito",
      "Atendimento rápido",
      "Serviço com garantia"
    ]
  }
]