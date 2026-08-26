import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { CONTACT } from "@/data/cars";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & agence | Mojo Cars Cotonou" },
      {
        name: "description",
        content:
          "Mojo Cars — Cotonou (9CF3+RP). Appelez ou écrivez sur WhatsApp au +229 95 36 61 61 pour louer un véhicule.",
      },
      { property: "og:title", content: "Contact & agence | Mojo Cars" },
      {
        property: "og:description",
        content: "Nous joindre : Cotonou, téléphone et WhatsApp +229 95 36 61 61.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Nous contacter"
        subtitle="Une question, un devis, une urgence de dernière minute ? Nous répondons vite."
      />

      <section className="container-dax grid gap-10 py-14 lg:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <div className="rounded-[10px] border border-border p-6">
            <MapPin className="text-primary" />
            <h2 className="mt-3 text-[20px] font-bold">Adresse</h2>
            <p className="mt-2 text-[14px] text-text-tertiary">
              {CONTACT.address}
              <br />
              Plus code : {CONTACT.plusCode}
            </p>
            <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="mt-3 inline-block text-[14px] font-bold">
              Ouvrir dans Google Maps →
            </a>
          </div>

          <div className="rounded-[10px] border border-border p-6">
            <Phone className="text-primary" />
            <h2 className="mt-3 text-[20px] font-bold">Téléphone & WhatsApp</h2>
            <p className="mt-2 text-[14px] text-text-tertiary">{CONTACT.phone}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="btn btn-primary no-underline !text-primary-foreground">
                Appeler
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary no-underline !text-secondary-foreground"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[10px] border border-border p-6">
            <Clock className="text-primary" />
            <h2 className="mt-3 text-[20px] font-bold">Horaires</h2>
            <p className="mt-2 text-[14px] text-text-tertiary">
              Lundi – Samedi : 07h00 – 20h00
              <br />
              Dimanche : sur rendez-vous
            </p>
          </div>
        </div>

        <div className="min-h-[420px] overflow-hidden rounded-[10px] border border-border">
          <iframe
            title="Localisation de Mojo Cars à Cotonou"
            src="https://www.google.com/maps?q=9CF3%2BRP%20Cotonou&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
