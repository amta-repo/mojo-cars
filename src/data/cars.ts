import lexusGreyHero from "@/assets/car-lexus-grey-hero.jpg";
import lexusGreySide from "@/assets/car-lexus-grey-side.jpg";
import lexusSilverFront from "@/assets/car-lexus-silver-front.jpg";
import lexusSilverSide from "@/assets/car-lexus-silver-side.jpg";
import lexusSilverRear from "@/assets/car-lexus-silver-rear.jpg";
import hiluxWhite from "@/assets/car-hilux-white.jpg";
import avensisSilver from "@/assets/car-avensis-silver.jpg";
import interior from "@/assets/car-interior.jpg";

export { lexusGreyHero, interior, lexusSilverRear };

export type Car = {
  id: string;
  name: string;
  category: string;
  image: string;
  pricePerDay: number;
  seats: number;
  transmission: string;
  fuel: string;
  badge?: string;
  features: string[];
};

export const cars: Car[] = [
  {
    id: "lexus-rx-grey",
    name: "Lexus RX 350",
    category: "SUV Premium",
    image: lexusGreyHero,
    pricePerDay: 45000,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    badge: "Le plus demandé",
    features: ["Climatisation", "Cuir", "Bluetooth", "Caméra de recul"],
  },
  {
    id: "lexus-rx-silver",
    name: "Lexus RX 330",
    category: "SUV Premium",
    image: lexusSilverFront,
    pricePerDay: 42000,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    features: ["Climatisation", "Cuir beige", "Toit ouvrant", "GPS"],
  },
  {
    id: "toyota-hilux",
    name: "Toyota Hilux Double Cabine",
    category: "Pick-up 4x4",
    image: hiluxWhite,
    pricePerDay: 50000,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Diesel",
    badge: "Idéal chantier",
    features: ["4x4", "Benne bâchée", "Climatisation", "Longue distance"],
  },
  {
    id: "toyota-avensis",
    name: "Toyota Avensis",
    category: "Berline",
    image: avensisSilver,
    pricePerDay: 30000,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    badge: "Économique",
    features: ["Climatisation", "Faible consommation", "Bluetooth", "Confort ville"],
  },
  {
    id: "lexus-rx-silver-2",
    name: "Lexus RX 300",
    category: "SUV Familial",
    image: lexusSilverSide,
    pricePerDay: 40000,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    features: ["Grand coffre", "Climatisation", "Cuir", "Jantes alliage"],
  },
  {
    id: "lexus-rx-grey-2",
    name: "Lexus RX 350 Executive",
    category: "SUV Premium",
    image: lexusGreySide,
    pricePerDay: 47000,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    features: ["Avec chauffeur", "Cuir", "Sièges chauffants", "Aéroport"],
  },
];

export const formatFcfa = (value: number) =>
  new Intl.NumberFormat("fr-FR").format(value) + " FCFA";

export const CONTACT = {
  phone: "0194952847",
  phoneHref: "tel:+2290194952847",
  whatsapp: "https://wa.me/2290194952847",
  address: "Godomey Attrokpocodji, Godomey",
  plusCode: "98RF+XR Godomey",
  maps: "https://www.google.com/maps/search/?api=1&query=98RF%2BXR+Godomey",
};
