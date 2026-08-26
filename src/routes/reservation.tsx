import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { BookingForm } from "@/components/BookingForm";
import { CONTACT, lexusSilverRear } from "@/data/cars";
import { Clock, ShieldCheck, MapPin } from "lucide-react";

type BookingSearch = { vehicule?: string | undefined };

export const Route = createFileRoute("/reservation")({
  validateSearch: (search: Record<string, unknown>): BookingSearch => ({
    vehicule: typeof search["vehicule"] === "string" ? search["vehicule"] : undefined,
  }),


  head: () => ({
    meta: [
      { title: "Réserver un véhicule | Mojo Cars Cotonou" },
      {
        name: "description",
        content:
          "Réservez votre voiture de location en quelques secondes à Cotonou. Confirmation rapide par WhatsApp au +229 95 36 61 61.",
      },
      { property: "og:title", content: "Réserver un véhicule | Mojo Cars" },
      {
        property: "og:description",
        content: "Formulaire de réservation rapide, avec ou sans chauffeur, à Cotonou.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const vehicule = Route.useSearch().vehicule ?? "";

  return (
    <SiteLayout>
      <PageHero
        title="Réserver un véhicule"
        subtitle="Indiquez vos dates et votre véhicule : nous confirmons votre réservation dans la foulée."
      />

      <section className="container-dax grid gap-10 py-14 lg:grid-cols-[1.6fr_1fr] md:py-20">
        <BookingForm defaultVehicle={vehicule} />

        <aside className="space-y-6">
          <img
            src={lexusSilverRear}
            alt="Lexus RX portière ouverte, intérieur cuir beige, prêt pour la location"
            loading="lazy"
            className="w-full rounded-[10px] object-cover"
          />
          <div className="rounded-[10px] border border-border bg-surface-alt p-6">
            <h2 className="text-[20px] font-bold">Comment ça marche</h2>
            <ul className="mt-4 space-y-4 text-[14px] text-text-secondary">
              <li className="flex gap-3">
                <Clock size={20} className="mt-[2px] shrink-0 text-primary" />
                Envoyez votre demande, réponse en moins de 30 minutes.
              </li>
              <li className="flex gap-3">
                <ShieldCheck size={20} className="mt-[2px] shrink-0 text-primary" />
                Véhicule vérifié, assuré et livré propre.
              </li>
              <li className="flex gap-3">
                <MapPin size={20} className="mt-[2px] shrink-0 text-primary" />
                Retrait à {CONTACT.address} ou livraison sur demande.
              </li>
            </ul>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary mt-6 w-full no-underline !text-secondary-foreground"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
