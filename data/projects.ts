import { Language } from "./translations";

export interface ProjectItem {
  title: string;
  href: string;
  image: string;
  description: Record<Language, string>;
}

export const projects: ProjectItem[] = [
  {
    title: "Ariflux",
    href: "/projetos/ariflux",
    image: "/projetos/ariflux/images/logo.png",
    description: {
      pt: "Empresa em startup focada em criação de sites e ecommerces.",
      en: "Startup focused on modern website and e-commerce development.",
    },
  },
  {
    title: "Syntaxis",
    href: "/projetos/syntaxis",
    image: "/projetos/syntaxis/images/Logo.png",
    description: {
      pt: "Sistema de gestão de materiais e controle interno de estoque.",
      en: "Material management and internal inventory control system.",
    },
  },
  {
    title: "TravelMate",
    href: "/projetos/travelmate",
    image: "/projetos/travelmate/images/logo-noback.png",
    description: {
      pt: "App de planejamento de viagens com foco em UX e automação de roteiros.",
      en: "Travel planning app focusing on UX and itinerary automation.",
    },
  },
  {
    title: "Unisa App",
    href: "/projetos/unisa",
    image: "/projetos/unisa/images/logo.png",
    description: {
      pt: "Redesign do sistema acadêmico da minha universidade.",
      en: "Redesign of my university's academic portal system.",
    },
  },  
];