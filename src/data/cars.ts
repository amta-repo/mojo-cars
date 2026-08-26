import lexusGreyHero from "@/assets/car-lexus-grey-hero.jpg";
import lexusGreySide from "@/assets/car-lexus-grey-side.jpg";
import lexusSilverFront from "@/assets/car-lexus-silver-front.jpg";
import lexusSilverSide from "@/assets/car-lexus-silver-side.jpg";
import lexusSilverRear from "@/assets/car-lexus-silver-rear.jpg";
import hiluxWhite from "@/assets/car-hilux-white.jpg";
import avensisSilver from "@/assets/car-avensis-silver.jpg";
import interior from "@/assets/car-interior.jpg";
import pradoFront from "@/assets/mj1.jpg";
import mlRear from "@/assets/mj2.jpg";
import yarisFront from "@/assets/mj3.jpg";
import pradoDoors from "@/assets/mj4.jpg";
import modernInterior from "@/assets/mj6.jpg";
import lexusRxOpen from "@/assets/mj7.jpg";
import hiaceWhite from "@/assets/mj8.jpg";

export { lexusGreyHero, interior, lexusSilverRear, modernInterior, pradoDoors };

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
  {
    id: "toyota-prado",
    name: "Toyota Land Cruiser Prado",
    category: "SUV 4x4",
    image: pradoFront,
    pricePerDay: 75000,
    seats: 7,
    transmission: "Automatique",
    fuel: "Diesel",
    badge: "Nouveauté",
    features: ["4x4", "7 places", "Climatisation", "Écran tactile"],
  },
  {
    id: "mercedes-ml-350",
    name: "Mercedes-Benz ML 350",
    category: "SUV Luxe",
    image: mlRear,
    pricePerDay: 65000,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    badge: "Luxe",
    features: ["Cuir", "Toit ouvrant", "Barres de toit", "Caméra de recul"],
  },
  {
    id: "toyota-yaris",
    name: "Toyota Yaris",
    category: "Citadine",
    image: yarisFront,
    pricePerDay: 22000,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    badge: "Économique",
    features: ["Faible consommation", "Climatisation", "Facile à garer", "Ville"],
  },
  {
    id: "lexus-rx-blue",
    name: "Lexus RX 330 Bleu",
    category: "SUV Familial",
    image: lexusRxOpen,
    pricePerDay: 40000,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    features: ["Grand coffre", "Cuir beige", "Climatisation", "Familial"],
  },
  {
    id: "toyota-hiace",
    name: "Toyota Hiace",
    category: "Minibus",
    image: hiaceWhite,
    pricePerDay: 55000,
    seats: 15,
    transmission: "Manuelle",
    fuel: "Diesel",
    badge: "Groupes",
    features: ["15 places", "Climatisation", "Transferts", "Excursions"],
  },
];

export const formatFcfa = (value: number) =>
  new Intl.NumberFormat("fr-FR").format(value) + " FCFA";

export const CONTACT = {
  phone: "+229 95 36 61 61",
  phoneHref: "tel:+22995366161",
  whatsapp: "https://wa.me/22995366161",
  address: "Cotonou, Bénin",
  plusCode: "9CF3+RP Cotonou",
  maps: "https://www.google.com/maps/search/?api=1&query=9CF3%2BRP+Cotonou",
};
