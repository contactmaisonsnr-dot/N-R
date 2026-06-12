import {
  ApartmentScene,
  HouseScene,
  LoftScene,
  OfficeScene,
  DuplexScene,
  CountryScene,
} from '../components/illustrations/RoomIllustrations'

export const projects = [
  {
    id: 'appartement-haussmannien',
    title: 'Appartement Haussmannien',
    category: 'Appartement',
    location: 'Paris 9e',
    illustration: ApartmentScene,
    description:
      "Réagencement complet d'un 90m² avec moulures d'origine, mêlant teintes terracotta et touches dorées.",
  },
  {
    id: 'maison-familiale',
    title: 'Maison Familiale',
    category: 'Maison',
    location: 'Lyon',
    illustration: HouseScene,
    description:
      'Décoration chaleureuse et fluide pour une maison de famille, jeux de couleurs douces et matières naturelles.',
  },
  {
    id: 'loft-industriel',
    title: 'Loft Industriel Coloré',
    category: 'Loft',
    location: 'Bordeaux',
    illustration: LoftScene,
    description:
      "Un ancien atelier transformé en loft lumineux, avec mobilier sur-mesure aux courbes organiques.",
  },
  {
    id: 'cabinet-architecte',
    title: 'Bureaux Créatifs',
    category: 'Bureau',
    location: 'Nantes',
    illustration: OfficeScene,
    description:
      'Espace de travail dynamique pensé pour stimuler la créativité, palette vive et cloisons fluides.',
  },
  {
    id: 'duplex-vue-mer',
    title: 'Duplex Vue Mer',
    category: 'Appartement',
    location: 'Biarritz',
    illustration: DuplexScene,
    description:
      'Un duplex baigné de lumière, où le mobilier arrondi accompagne la vue sur l’océan.',
  },
  {
    id: 'maison-de-campagne',
    title: 'Maison de Campagne',
    category: 'Maison',
    location: 'Provence',
    illustration: CountryScene,
    description:
      "Restauration d'une bâtisse provençale, alliant authenticité et touches colorées contemporaines.",
  },
]

export const categories = ['Tous', 'Appartement', 'Maison', 'Loft', 'Bureau']
