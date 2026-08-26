import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ShieldCheck, Clock, Wallet, UserCheck, Plane, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { BookingForm } from "@/components/BookingForm";
import { CarCard } from "@/components/CarCard";
import { cars, CONTACT, lexusGreyHero, interior } from "@/data/cars";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mojo Cars — Location de voiture à Cotonou, Bénin" },
      {
        name: "description",
        content:
          "Louez un SUV Lexus, un pick-up Hilux ou une berline à Cotonou. Avec ou sans chauffeur, tarifs clairs. Réservation WhatsApp au +229 95 36 61 61.",
      },
      { property: "og:title", content: "Mojo Cars — Location de voiture à Cotonou" },
      {
        property: "og:description",
        content:
          "Location de véhicules et service de chauffeur ponctuel et abordable à Cotonou, Bénin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Clock,
    title: "Location courte durée",
    text: "À la journée ou au week-end, pour vos déplacements en ville comme à l'intérieur du pays.",
  },
  {
    icon: Wallet,
    title: "Location longue durée",
    text: "Tarifs dégressifs pour les entreprises, ONG et missions de plusieurs semaines.",
  },
  {
    icon: UserCheck,
    title: "Avec chauffeur",
    text: "Un chauffeur expérimenté, ponctuel et discret qui connaît chaque route du Bénin.",
  },
  {
    icon: Plane,
    title: "Transfert aéroport",
    text: "Accueil et transfert depuis l'aéroport de Cotonou, 7 jours sur 7.",
  },
];

const reviews = [
  {
    name: "Robert Rédacteur web",
    meta: "2 avis · il y a 5 mois",
    text: "MojoCars, c'est toujours un service fiable et efficace",
  },
  {
    name: "Innocentia Vodounon",
    meta: "1 avis · il y a 9 mois",
    text: "J'ai toujours vécu de belles expériences avec Mojocars, je les recommande vivement.",
  },
  {
    name: "alabi Abdoul",
    meta: "1 avis · il y a 6 mois",
    text: "C'était tout simplement génial",
  },
  {
    name: "Akim aminou",
    meta: "3 avis · il y a 2 ans",
    text: "Très bonne expérience de location. Je recommande.",
  },
  {
    name: "Olane Hounkpevi",
    meta: "il y a 5 mois",
    text: "",
  },
  {
    name: "Joyce Glago",
    meta: "il y a 2 ans",
    text: "",
  },
  {
    name: "Roukiah",
    meta: "il y a 2 ans",
    text: "",
  },
];


function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-foreground">
        <img
          src={lexusGreyHero}
          alt="SUV Lexus RX gris de Mojo Cars au crépuscule"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="container-dax relative py-20 md:py-28">
          <span className="badge bg-secondary text-secondary-foreground">
            Cotonou · Bénin
          </span>
          <h1 className="mt-5 max-w-3xl text-[38px] font-bold leading-[1.1] text-background md:text-[58px]">
            Louez la voiture qu'il vous faut, <span className="text-secondary">aujourd'hui.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-[24px] text-border-strong md:text-[18px]">
            SUV, pick-up et berlines entretenus, avec ou sans chauffeur. Un service ponctuel et
            abordable pour vos trajets professionnels et personnels.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/reservation" className="btn btn-secondary no-underline !text-secondary-foreground">
              Réserver maintenant
            </Link>
            <a href={CONTACT.phoneHref} className="btn btn-primary no-underline !text-primary-foreground">
              <Phone size={18} /> {CONTACT.phone}
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
            {[
              ["5/5", "Note Google"],
              ["6+", "Véhicules disponibles"],
              ["24/7", "Assistance WhatsApp"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-[28px] font-bold text-secondary">{v}</dt>
                <dd className="text-[14px] text-border-strong">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Booking */}
      <section className="container-dax -mt-10 md:-mt-14 relative z-10 pb-16">
        <BookingForm compact />
      </section>

      {/* Fleet */}
      <section className="bg-surface-alt py-16 md:py-24">
        <div className="container-dax">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[30px] font-bold md:text-[38px]">Nos véhicules</h2>
              <p className="mt-3 max-w-xl text-[16px] text-text-tertiary">
                Une flotte récente, climatisée et entretenue régulièrement.
              </p>
            </div>
            <Link to="/flotte" className="btn btn-ghost no-underline !text-foreground">
              Voir toute la flotte
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.slice(0, 3).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-dax py-16 md:py-24">
        <h2 className="text-[30px] font-bold md:text-[38px]">Nos services</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-[10px] border border-border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="mt-4 text-[18px] font-bold">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-[21px] text-text-tertiary">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Confort */}
      <section className="bg-surface-alt py-16 md:py-24">
        <div className="container-dax grid items-center gap-10 lg:grid-cols-2">
          <img
            src={interior}
            alt="Intérieur cuir beige d'un véhicule Mojo Cars"
            loading="lazy"
            className="w-full rounded-[10px] object-cover"
          />
          <div>
            <h2 className="text-[30px] font-bold md:text-[38px]">Le confort avant tout</h2>
            <p className="mt-4 text-[16px] leading-[24px] text-text-secondary">
              Intérieurs cuir, climatisation puissante et véhicules nettoyés avant chaque départ.
              Vous montez, vous roulez, nous nous occupons du reste.
            </p>
            <ul className="mt-6 space-y-3 text-[15px] text-text-secondary">
              {[
                "Véhicules assurés et contrôlés",
                "Tarifs transparents, sans frais cachés",
                "Livraison possible à votre adresse",
                "Chauffeurs expérimentés sur demande",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldCheck size={20} className="mt-[2px] shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-dax py-16 md:py-24">
        <h2 className="text-[30px] font-bold md:text-[38px]">Ce que disent nos clients</h2>
        <p className="mt-3 text-[16px] text-text-tertiary">
          Avis publiés sur Google Maps · note moyenne 5/5
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-[10px] border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-1" aria-label="Note : 5 sur 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-[12px] font-bold uppercase tracking-wide text-text-tertiary">
                  Google Maps
                </span>
              </div>
              {r.text && (
                <blockquote className="mt-4 text-[18px] font-bold leading-[26px]">
                  “{r.text}”
                </blockquote>
              )}
              <figcaption className="mt-4 text-[14px] text-text-tertiary">
                <span className="font-bold text-foreground">{r.name}</span>
                <br />
                {r.meta}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container-dax flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-[28px] font-bold text-primary-foreground md:text-[34px]">
              Prêt à prendre la route ?
            </h2>
            <p className="mt-2 text-[16px] text-primary-foreground/90">
              {CONTACT.address} · {CONTACT.plusCode}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/reservation" className="btn btn-secondary no-underline !text-secondary-foreground">
              Réserver un véhicule
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost no-underline !text-foreground"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
