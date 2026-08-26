import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/data/cars";

export const Route = createFileRoute("/flotte")({
  head: () => ({
    meta: [
      { title: "Notre flotte de véhicules | Mojo Cars Cotonou" },
      {
        name: "description",
        content:
          "SUV Lexus, pick-up Toyota Hilux et berlines Avensis en location à Cotonou. Tarifs journaliers clairs, avec ou sans chauffeur.",
      },
      { property: "og:title", content: "Notre flotte de véhicules | Mojo Cars" },
      {
        property: "og:description",
        content: "Découvrez les SUV, pick-up et berlines disponibles à la location chez Mojo Cars.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Notre flotte"
        subtitle="Des véhicules entretenus, propres et prêts à partir. Choisissez le modèle qui correspond à votre trajet."
      />
      <section className="container-dax py-14 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
